# Routing reference

전체: [docs/ROUTING.md](../../../docs/ROUTING.md)

**UI copy:** English — [language-reference.md](language-reference.md)

## 경로 상수

```typescript
import { routes } from '@/lib/routes';
import Link from 'next/link';

<Link href={routes.login}>Sign in</Link>
```

## 프로토타입 → Next.js

| `currentScreen` | Path |
|-----------------|------|
| `map` | `/` |
| `login` | `/login` |
| `profile` | `/profile` |

전환 예: login 성공 → `router.push(routes.map)` · sign in CTA → `routes.login`

## Map page — sidebarNav

| `sidebarNav` | 프로토타입 | 내용 |
|--------------|------------|------|
| `info` | ~1936 | Trending nearby / nationwide |
| `pick` | ~2109 | Empty picks |
| `lifestyle` | ~2153 | Lifestyle grid |
| `my` | ~2177 | Account, sign in |

## Overlay (라우트 아님)

| State | 컴포넌트 | 프로토타입 |
|-------|----------|------------|
| `selectedSpot` | `SpotDetailCard.tsx` | `.detail-card` ~2374 |
| `showCreateForm` | (예정) `SpotForm.tsx` | ~2504 |
| `editingSpot` | (예정) `SpotForm.tsx` | ~2504 |

## 포팅 체크리스트

- [ ] URL vs overlay 구분
- [ ] 프로토타입 해당 구간만 Read (`rg` + offset)
- [ ] `docs/design-system-rules.md` 토큰 일치
- [ ] `app/` 또는 `components/features/<domain>/`
- [ ] 라우트 변경 시 `docs/ROUTING.md` 갱신
