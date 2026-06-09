# Cursor — picko-web

**SSoT:** `docs/` · 운영: `docs/AI-AGENTS.md`

## 디렉터리

| 경로 | 역할 |
|------|------|
| `rules/*.mdc` | generated router → `docs/` |
| `commands/` | generated router → `docs/agent/` |
| `skills/` | skill **canonical** |

## 수정

1. `docs/` + `docs/agent/manifest.json` 편집
2. `npm run sync:agent`
3. `.cursor/rules` · `.cursor/commands` 직접 수정 ❌
