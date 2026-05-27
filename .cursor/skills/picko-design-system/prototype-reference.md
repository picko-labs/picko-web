# K-SPOT Map.html — Prototype Reference

**Source of truth:** `picko-api/K-SPOT Map.html` (also copied at repo root).

Single-file React prototype. Read targeted sections; do not load entire file unless necessary.

**Implemented styles:** `app/map-ui.css` (ported from prototype `<style>` block).

## How to navigate

```bash
# Find a UI block
rg "sidebar-panel|search-bar|category-chip|marker" K-SPOT\ Map.html

# Find React components
rg "function .*Screen|function App" K-SPOT\ Map.html
```

## Layout architecture

```
map-container (full viewport)
├── map-view (map + markers)
├── sidebar-panel (400px, collapsible, z-20)
│   ├── scope-tabs (Near you / Nationwide)
│   ├── sidebar-scroll (ranked cards, region grid)
│   └── sidebar-bottom-nav
├── sidebar-toggle (z-25)
├── top-bar (search + category chips, above map)
└── map-controls (zoom, locate)
```

## CSS class → Tailwind mapping

| Prototype class | Picko implementation |
|-----------------|------------------------|
| `.search-bar` | `SearchBar.tsx` — white card, `rounded-md`, `shadow-md`, flex gap |
| `.category-chip` | `rounded-xl`, `text-caption`, `font-semibold`, active: `bg-primary text-white` |
| `.sidebar-panel` | `w-[400px]`, `rounded-lg`, `shadow-panel`, absolute left |
| `.scope-tab.active` | segmented control on `bg-neutral-cream` |
| `.ranked-card` | aspect image + overlay + rank badge |
| `.marker` / `.marker-pin` | Google Maps `Marker` (custom icon optional) |
| `.region-squircle` | nationwide region grid cards |

## CSS variables (prototype :root)

Prototype uses `--primary`, `--spacing-lg`, `--font-size-body`, etc.  
Next.js equivalents are in `app/globals.css` (`:root`) and `tailwind.config.ts`.

## Key screens (JS functions)

| Function | Purpose |
|----------|---------|
| `App` | Main map + sidebar shell |
| `LoginScreen` | Auth UI |
| `ProfileScreen` | User profile |
| Spot detail overlays | Modal / bottom sheet patterns |

## Data patterns in prototype

- `spots` array: id, name, location, category, trending, image (gradient string)
- `REGIONS` for nationwide tab
- Filter by `scopeTab` (nearby / nationwide) and category chips

When porting, move mock data to `lib/mock/spots.ts` or fetch from API later.

## Z-index (match design-tokens)

| Layer | Value |
|-------|-------|
| marker | 5 |
| sidebar | 20 |
| sidebar-toggle | 25 |
| modal | 50 |
| toast | 100 |
