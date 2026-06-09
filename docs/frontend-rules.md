# 프론트엔드 코딩 규칙

레이어 구조: **UI (Component) → Hook → `lib/queries/` → `lib/api/`**

파일 배치 상세: `docs/ROUTING.md`

---

## App Router (Next.js)

- **기본: Server Component** — Client Component는 이유가 있을 때만
- `"use client"` 최소화 — 트리 최하단에 배치
- `app/**/page.tsx` — 조합만, 로직 없음
- Data Fetching — Server Component에서 직접 또는 `lib/api/`
- Browser API (`window`, `localStorage` 등) → 별도 Client Component로 분리

## React Query

- Server State = **React Query** — `useEffect + fetch` 금지
- Query·Mutation Hook → `lib/queries/`에 분리
- API 호출은 Hook 내부에서 `lib/api/` 함수 호출
- 쿼리 결과 타입 명시

## API Layer (`lib/api/`)

- `fetch` 직접 호출 금지 — `lib/api/` 함수 사용
- 응답 타입 정의 필수 (`lib/types/`)
- Error는 표준화된 타입 사용 (예: `AuthApiError`)

## Component

- **단일 책임** — 하나의 UI 역할만
- 400줄 초과 시 분리 검토
- Props: TypeScript interface 선언
- Named export 사용 (`default export` ❌)
- 비즈니스 로직 → Hook으로 분리

## Hook

- 비즈니스 로직·서버 상태 → Hook으로 분리
- Component는 UI 상태만 직접 보유
- Hook 내부 JSX ❌
- 단일 목적 유지

## 구현 전 체크

코드 작성 전 순서:

1. `rg`로 유사 컴포넌트·Hook·API 함수 탐색
2. 기존 패턴 재사용 우선
3. 접근 방식 설명 후 코드 작성
4. 변경 범위 최소화

## 에이전트

- Rule: `.cursor/rules/frontend-rules.mdc` → **본 문서**
