# Routing Reference

Full spec: [docs/ROUTING.md](../../../docs/ROUTING.md)

**UI copy:** English · 잘파 / Korea 20s–30s voice — [language-reference.md](language-reference.md)

## Route constants

```typescript
import { routes } from '@/lib/routes';
import Link from 'next/link';

<Link href={routes.login}>Sign in</Link>
```

## Prototype screen map

| `currentScreen` (prototype) | Next.js |
|-----------------------------|---------|
| `map` | `/` |
| `login` | `/login` |
| `profile` | `/profile` |

Transition examples in prototype:
- Login success: `setTweak({ isLoggedIn: true, currentScreen: 'map' })` → `router.push(routes.map)`
- Sign in CTA: `setTweak('currentScreen', 'login')` → `router.push(routes.login)`
- Profile back: `setTweak('currentScreen', 'map')` → `router.push(routes.map)`

## Map page: sidebarNav panels

| `sidebarNav` | Prototype line hint | Content |
|--------------|---------------------|---------|
| `info` | ~1936 / ~1964 | Trending nearby / nationwide |
| `pick` | ~2109 | Empty picks state |
| `lifestyle` | ~2153 | Lifestyle grid cards |
| `my` | ~2177 | Account, sign in, settings |

## Map page: overlays (not routes)

| State | Component (planned) | Prototype |
|-------|---------------------|-----------|
| `selectedSpot` | `SpotDetail.tsx` | `.detail-card` ~2374 |
| `showCreateForm` | `SpotForm.tsx` | ~2504 |
| `editingSpot` | `SpotForm.tsx` | ~2504 |

## Implementation checklist

Porting a prototype section:

- [ ] Confirm URL vs overlay (table above)
- [ ] Read prototype function/block only (grep + offset Read)
- [ ] Match `design-system.mdc` Tailwind tokens
- [ ] Place file under `app/` or `components/map/`
- [ ] Update `docs/ROUTING.md` if routes change
