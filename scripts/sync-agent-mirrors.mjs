#!/usr/bin/env node
/**
 * Generate .claude/ + .cursor/ routers from docs/ (SSoT).
 * Usage: node scripts/sync-agent-mirrors.mjs [--check]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MANIFEST_PATH = path.join(ROOT, "docs/agent/manifest.json");
const MANIFEST = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
const CHECK = process.argv.includes("--check");

const BANNER = (kind, name, doc) =>
  `<!-- generated router · edit ${doc} + docs/agent/manifest.json · npm run sync:agent -->\n\n`;

function buildCursorFrontmatter(meta) {
  const lines = ["---"];
  if (meta.description) lines.push(`description: ${meta.description}`);
  if (meta.globs) lines.push(`globs: ${meta.globs}`);
  if (meta.alwaysApply !== undefined)
    lines.push(`alwaysApply: ${meta.alwaysApply}`);
  lines.push("---", "");
  return lines.join("\n");
}

function buildCommandFrontmatter(cmd) {
  const desc = cmd.description.replace(/\n/g, "\n  ");
  return `---\nname: ${cmd.name}\ndescription: |\n  ${desc}\n---\n\n`;
}

function buildRuleRouter(meta) {
  const summary = (meta.summary ?? [])
    .map((line) => `- ${line}`)
    .join("\n");
  return `# ${meta.title}

> **필독:** \`${meta.doc}\`

## 요약

${summary}
`;
}

function buildCommandRouter(cmd) {
  return `> **필독 — 절차 전체 따르기:** \`${cmd.doc}\`

추가 적용: \`docs/git-convention.md\`

커밋 규칙 임의 생성 금지. 위 문서 절차를 그대로 실행.
`;
}

function writeOrCheck(target, content) {
  if (CHECK) {
    if (!fs.existsSync(target)) {
      console.error(`MISSING: ${path.relative(ROOT, target)}`);
      return false;
    }
    if (fs.readFileSync(target, "utf8") !== content) {
      console.error(`DRIFT: ${path.relative(ROOT, target)}`);
      return false;
    }
    return true;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
  return true;
}

function assertDocExists(docPath) {
  const full = path.join(ROOT, docPath);
  if (!fs.existsSync(full)) {
    throw new Error(`Missing doc: ${docPath}`);
  }
}

let ok = true;

for (const [name, meta] of Object.entries(MANIFEST.rules)) {
  assertDocExists(meta.doc);
  const body = buildRuleRouter(meta);
  const claudeOut = BANNER("rule", name, meta.doc) + body;
  const cursorOut =
    buildCursorFrontmatter(meta) + BANNER("rule", name, meta.doc) + body;

  ok =
    writeOrCheck(path.join(ROOT, ".claude/rules", `${name}.md`), claudeOut) &&
    ok;
  ok =
    writeOrCheck(path.join(ROOT, ".cursor/rules", `${name}.mdc`), cursorOut) &&
    ok;
}

const cmdMeta = MANIFEST.commands["commit-draft"];
assertDocExists(cmdMeta.doc);
const cmdBody = buildCommandRouter(cmdMeta);
const cmdOut =
  buildCommandFrontmatter(cmdMeta) +
  BANNER("command", "commit-draft", cmdMeta.doc) +
  cmdBody;

ok =
  writeOrCheck(path.join(ROOT, ".claude/commands/commit-draft.md"), cmdOut) &&
  ok;
ok =
  writeOrCheck(path.join(ROOT, ".cursor/commands/commit-draft.md"), cmdOut) &&
  ok;

if (CHECK) {
  if (ok) {
    console.log("OK: .claude/ + .cursor/ routers match docs/agent/manifest.json");
    process.exit(0);
  }
  console.error("\nRun: npm run sync:agent");
  process.exit(1);
}

console.log("Synced docs/ → .claude/ + .cursor/ (routers)");
