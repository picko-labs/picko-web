---
name: picko-design-system
description: >-
  Implements Picko UI using TDS + K-Culture design tokens, Tailwind, and the
  K-SPOT Map.html prototype. Use when building or styling components, converting
  prototype screens to Next.js, working with DESIGN_SYSTEM.md, design-tokens.ts,
  globals.css, or tailwind.config.ts.
---

# Picko Design System Skill

## Source of truth (read as needed)

| File | Purpose |
|------|---------|
| `docs/ROUTING.md` | App Router paths, prototype screen map, overlay state |
| `lib/routes.ts` | Route path constants |
| `DESIGN_SYSTEM.md` | Full spec: colors, type, spacing, components |
| `lib/design-tokens.ts` | Programmatic values (colors, zIndex, gradients) |
| `app/globals.css` | CSS variables + utility classes |
| `tailwind.config.ts` | Tailwind theme extension |
| `K-SPOT Map.html` | Interactive UI prototype (2983 lines) |

Rule `routing.mdc` defines **which files to read first** per task.

## Language (UI copy)

**English** is the default product language (global users). See [language-reference.md](language-reference.md) · `docs/LANGUAGE.md` · rule `localization.mdc`.

- All buttons, headings, empty states, errors, and auth labels: **English**
- Code comments / internal docs may be Korean; user-visible strings must not be
- **Audience:** 잘파 / trend-conscious; **core** = **20s–30s visiting Korea**; breadth **teens–40s**. Voice = short, travel + discovery (**pick**, **spot**, **trending**), friendly **you**—not corporate or heavy slang

## Quick workflow

1. **Route** — Page vs overlay: [routing-reference.md](routing-reference.md) · `docs/ROUTING.md`
2. **Scope** — Identify screen/section in `K-SPOT Map.html` (see [prototype-reference.md](prototype-reference.md))
2. **Tokens** — Use Tailwind classes first; import `@/lib/design-tokens` only for inline styles, canvas, or map logic
3. **Implement** — `components/*.tsx` + existing `app/page.tsx` patterns
4. **Verify** — Match spacing, typography utilities, brand colors from `DESIGN_SYSTEM.md`

## Tailwind patterns

```tsx
// Card
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="aspect-square bg-gradient-primary" />
  <div className="p-lg">
    <h3 className="text-headline">Title</h3>
    <p className="text-caption text-neutral-dusk">0.8km · District</p>
  </div>
</div>

// Active chip
<button className="px-lg py-sm bg-primary text-white rounded-xl text-caption font-semibold shadow-sm">
  🔥 Hot Place
</button>
```

## Programmatic tokens

```typescript
import { colors, zIndex, gradients } from '@/lib/design-tokens';

// Map overlay z-index
style={{ zIndex: zIndex.sidebar }}

// Dynamic gradient in JS
background: gradients.primary
```

## Prototype → React

When porting from `K-SPOT Map.html`:

1. Grep CSS class name (e.g. `sidebar-panel`, `category-chip`)
2. Map to Tailwind + Picko utilities (see [prototype-reference.md](prototype-reference.md))
3. Extract static data to `lib/` or colocated constants
4. Split into `components/` (SearchBar, Sidebar, Map markers, etc.)

Do **not** copy inline `<style>` blocks wholesale — translate to Tailwind.

## Map UI

Map: Google Maps — `.cursor/rules/map-service-strategy.mdc`

Current: `components/GoogleMap.tsx`, `components/SearchBar.tsx`.

## Additional resources

- [language-reference.md](language-reference.md) — English UI copy policy & patterns
- [routing-reference.md](routing-reference.md) — routes, prototype screens, overlays
- [prototype-reference.md](prototype-reference.md) — K-SPOT Map.html component map
- [tokens-reference.md](tokens-reference.md) — design-tokens.ts quick reference
