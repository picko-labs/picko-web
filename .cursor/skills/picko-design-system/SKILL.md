---
name: picko-design-system
description: >-
  Picko UI — TDS·K-Culture 토큰, Tailwind, K-SPOT Map.html 프로토타입.
  컴포넌트·스타일·프로토타입→Next.js 변환 시.
---

# Picko Design System Skill

## SSoT (필요 시 Read)

| 파일 | 용도 |
|------|------|
| `docs/ROUTING.md` | 라우트, 프로토타입 매핑, overlay state |
| `lib/routes.ts` | 경로 상수 |
| `DESIGN_SYSTEM.md` | 색·타입·spacing·컴포넌트 전체 |
| `lib/design-tokens.ts` | colors, zIndex, gradients |
| `app/globals.css` | CSS 변수·utility |
| `tailwind.config.ts` | Tailwind theme |
| `K-SPOT Map.html` | UI 프로토타입 |

작업별 읽기 순서: rule `routing` → `docs/ROUTING.md`

## UI copy

**English** (제품 기본). [language-reference.md](language-reference.md) · `docs/LANGUAGE.md`

- 버튼·heading·empty state·error·OAuth label: **English**
- 코드 comment / 내부 docs: 한국어 OK
- 톤: 잘파, **20s–30s 한국 방문** 코어 — **pick**, **spot**, **trending**, 친근한 **you**

## 워크플로

1. **Route** — page vs overlay: [routing-reference.md](routing-reference.md)
2. **Scope** — 프로토타입 구간: [prototype-reference.md](prototype-reference.md)
3. **Tokens** — Tailwind 우선; inline/canvas/map만 `@/lib/design-tokens`
4. **Implement** — `components/features/` 패턴 따르기
5. **Verify** — `DESIGN_SYSTEM.md` spacing·color 일치

## Tailwind 예시

```tsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="aspect-square bg-gradient-primary" />
  <div className="p-lg">
    <h3 className="text-headline">Title</h3>
    <p className="text-caption text-neutral-dusk">0.8km · District</p>
  </div>
</div>

<button className="px-lg py-sm bg-primary text-white rounded-xl text-caption font-semibold shadow-sm">
  🔥 Hot Place
</button>
```

## 프로토타입 → React

1. CSS class grep (`sidebar-panel`, `category-chip` …)
2. Tailwind + Picko utility로 변환 ([prototype-reference.md](prototype-reference.md))
3. mock data → `lib/mock/` 등
4. `components/features/` 로 분리

inline `<style>` 통째 복사 ❌ — Tailwind로 번역.

## 지도

`docs/map-service-strategy.md` · `components/features/map/GoogleMap.tsx`

## 참고

- [language-reference.md](language-reference.md) — UI copy
- [routing-reference.md](routing-reference.md) — 라우트·overlay
- [prototype-reference.md](prototype-reference.md) — 프로토타입 맵
- [tokens-reference.md](tokens-reference.md) — design-tokens.ts
