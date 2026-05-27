# design-tokens.ts Reference

Import: `import { colors, spacing, typography, shadows, gradients, zIndex, transitions, breakpoints } from '@/lib/design-tokens'`

## colors

```typescript
colors.primary.DEFAULT   // #F04040
colors.primary.dark      // #8C1818
colors.primary.light     // #F56E6E
colors.primary.tint      // #FDDEDE

colors.secondary.DEFAULT // #4A8FE0
colors.tertiary.DEFAULT  // #F5B820

colors.neutral.night     // #111318 — primary text
colors.neutral.dusk      // #4A4D55 — secondary text
colors.neutral.paper     // #E8E6E1 — borders
colors.neutral.cream     // #F7F5F2 — secondary bg

colors.background.primary   // #ffffff
colors.background.secondary // #F7F5F2
```

Prefer Tailwind: `bg-primary`, `text-neutral-dusk`, etc.

## spacing (8px base)

`xs` 4 · `sm` 8 · `md` 12 · `lg` 16 · `xl` 20 · `2xl` 24 · `3xl` 32

Tailwind: `p-lg`, `gap-md`, `mb-3xl`

## typography.fontSize

`label` 11 · `caption` 13 · `body` 15 · `headline` 17 · `title` 22 · `display` 28

Tailwind utilities: `text-display`, `text-title`, …

## shadows

`sm` · `md` · `lg` · `floating` — use `shadow-sm`, `shadow-floating` in Tailwind

## gradients

`gradients.primary|secondary|tertiary|neutral` — or `bg-gradient-primary` class

## zIndex

```typescript
zIndex.marker    // 5
zIndex.sidebar   // 20
zIndex.toggle    // 25
zIndex.modal     // 50
zIndex.toast     // 100
```

## transitions

`transitions.duration.fast` 0.15s · `base` 0.2s · `slow` 0.3s  
Tailwind: `transition-fast`, `transition-base`, `transition-slow`

## When to use TS tokens vs Tailwind

| Use case | Approach |
|----------|----------|
| JSX className styling | Tailwind / globals.css utilities |
| Map SDK options, canvas | `design-tokens.ts` |
| Shared constants in lib | `design-tokens.ts` |
| Theme documentation | `DESIGN_SYSTEM.md` |
