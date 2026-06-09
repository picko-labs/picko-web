# design-tokens.ts reference

```typescript
import { colors, spacing, typography, shadows, gradients, zIndex, transitions, breakpoints } from '@/lib/design-tokens';
```

## colors

```typescript
colors.primary.DEFAULT   // #F04040
colors.primary.dark      // #8C1818
colors.neutral.night     // #111318 — 본문
colors.neutral.dusk      // #4A4D55 — 보조
colors.background.secondary // #F7F5F2
```

Tailwind 우선: `bg-primary`, `text-neutral-dusk`

## spacing (8px base)

`xs` 4 · `sm` 8 · `md` 12 · `lg` 16 · `xl` 20 · `2xl` 24 · `3xl` 32

## typography.fontSize

`label` 11 · `caption` 13 · `body` 15 · `headline` 17 · `title` 22 · `display` 28

## shadows · gradients · zIndex

- `shadow-sm|md|lg|floating` · `bg-gradient-primary`
- z: marker 5 · sidebar 20 · toggle 25 · modal 50 · toast 100

## transitions

`fast` 0.15s · `base` 0.2s · `slow` 0.3s → `transition-fast` 등

## TS vs Tailwind

| 용도 | 방식 |
|------|------|
| JSX className | Tailwind / globals.css |
| Map SDK, canvas | `design-tokens.ts` |
| 문서 | `DESIGN_SYSTEM.md` |
