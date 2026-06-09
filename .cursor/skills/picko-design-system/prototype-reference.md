# K-SPOT Map.html — 프로토타입 reference

**SSoT:** `picko-api/K-SPOT Map.html` (repo root 복사본도 있음)

단일 파일 React 프로토타입. **전체 로드 금지** — `rg` 후 해당 구간만 Read.

**스타일 이전:** `app/map-ui.css`

## 탐색

```bash
rg "sidebar-panel|search-bar|category-chip|marker" K-SPOT\ Map.html
rg "function .*Screen|function App" K-SPOT\ Map.html
```

## 레이아웃

```
map-container
├── map-view (markers)
├── sidebar-panel (400px, z-20)
│   ├── scope-tabs (Near you / Nationwide)
│   ├── sidebar-scroll
│   └── sidebar-bottom-nav
├── sidebar-toggle (z-25)
├── top-bar (search + chips)
└── map-controls
```

## CSS class → Tailwind

| Prototype | Picko |
|-----------|-------|
| `.search-bar` | `MapTopBar.tsx` — white, `rounded-md`, `shadow-md` |
| `.category-chip` | active: `bg-primary text-white` |
| `.sidebar-panel` | `w-[400px]`, `shadow-panel` |
| `.scope-tab.active` | `bg-neutral-cream` segmented |
| `.ranked-card` | aspect image + rank badge |
| `.marker` | Google Maps `Marker` |
| `.region-squircle` | nationwide grid |

CSS 변수(`--primary` …) → `globals.css` + `tailwind.config.ts`

## 주요 함수

| Function | 용도 |
|----------|------|
| `App` | map + sidebar shell |
| `LoginScreen` | auth UI |
| `ProfileScreen` | profile |

## 데이터

- `spots`: id, name, location, category, trending, image
- `REGIONS`: nationwide tab
- filter: `scopeTab`, category chips

mock → `lib/mock/spots.ts` (추후 API)

## Z-index

marker 5 · sidebar 20 · toggle 25 · modal 50 · toast 100
