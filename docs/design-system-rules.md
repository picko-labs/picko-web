# 디자인 시스템 — 에이전트 요약

TDS + K-Culture. **전체:** `DESIGN_SYSTEM.md` · **구현:** `globals.css`, `tailwind.config.ts`, `lib/design-tokens.ts`

**UI copy:** English — `docs/LANGUAGE.md`

## 색상

- CTA/트렌딩: `bg-primary`, hover `bg-primary-dark`
- 정보: `secondary`, `secondary-tint` · 하이라이트: `tertiary`
- 텍스트: `text-neutral-night`, `text-neutral-dusk`
- 배경: `bg-background`, `bg-neutral-cream`
- 그라데이션: `bg-gradient-primary|secondary|tertiary|neutral`

```tsx
// ❌ hex 하드코딩
// ✅ Tailwind 토큰
<button className="bg-primary text-white hover:bg-primary-dark" />
```

## Typography · Spacing · Radius

- Type: `text-display|title|headline|body|caption|label`
- 간격: `gap-xs|sm|md|lg|xl|2xl|3xl`, `p-lg`, `px-xl`
- radius: `rounded-sm|md|lg|xl`

## Shadow · Z-index

- `shadow-sm|md|lg|floating|panel`
- z: marker 5 · sidebar 20 · toggle 25 · modal 50 · toast 100

## 원칙

1. UI 근거: `K-SPOT Map.html` + `DESIGN_SYSTEM.md`
2. 지도: `components/features/map/` · `docs/map-service-strategy.md`
3. 구현 skill: `.cursor/skills/picko-design-system/`
