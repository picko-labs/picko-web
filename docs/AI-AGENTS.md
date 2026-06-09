# AI 에이전트 운영

**SSoT: `docs/`** · **`.claude` / `.cursor`: 라우터만**

Claude · Cursor 모두 **같은 `docs/`** 를 읽도록 통일.

## 구조

```
docs/                    ← 여기만 편집
  git-convention.md
  ROUTING.md · LANGUAGE.md
  map-service-strategy.md · design-system-rules.md
  development-principles.md · frontend-rules.md
  agent/commit-draft.md · manifest.json

.claude/ · .cursor/      ← npm run sync:agent 로 생성
```

| npm script | 역할 |
|------------|------|
| `sync:agent` | 라우터 재생성 |
| `sync:agent:check` | drift 검증 |

## Rule → 문서

| Rule | SSoT |
|------|------|
| git-convention | `docs/git-convention.md` |
| routing | `docs/ROUTING.md` |
| localization | `docs/LANGUAGE.md` |
| design-system | `docs/design-system-rules.md` (+ `DESIGN_SYSTEM.md`) |
| map | `docs/map-service-strategy.md` |
| development-principles | `docs/development-principles.md` |
| frontend-rules | `docs/frontend-rules.md` |

라우터 본문 = **필독 안내 + 요약** (전문 복사 없음).

## Command · Skill

| | |
|--|--|
| commit-draft | `docs/agent/commit-draft.md` |
| design skill (canonical) | `.cursor/skills/picko-design-system/` |
| Claude skill 진입 | `.claude/skills/picko-design-system/SKILL.md` |

## 수정 절차

1. `docs/` 또는 `docs/agent/manifest.json` 편집
2. `npm run sync:agent`
3. `.claude/` · `.cursor/` rules/commands **직접 수정 금지**

## 언어

| 영역 | 언어 |
|------|------|
| AI 명세 · 커밋 · PR | **한국어** |
| 제품 UI copy | **English** |
| 코드 · 브랜치 | **English** |
