<!-- generated router · edit docs/frontend-rules.md + docs/agent/manifest.json · npm run sync:agent -->

# 프론트엔드 코딩 규칙

> **필독:** `docs/frontend-rules.md`

## 요약

- 기본: Server Component, `use client` 최소화
- Server State = React Query, useEffect+fetch 금지
- fetch 직접 호출 금지 — `lib/api/` 사용, 타입 정의 필수
- Component: 단일 책임·Named export·Props interface
- 구현 전: rg 탐색 → 재사용 → 접근 방식 설명 → 코드
