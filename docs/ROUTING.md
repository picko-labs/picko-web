# Picko Web — Routing

Next.js App Router 구조. 프로토타입 `K-SPOT Map.html`의 `currentScreen` / 사이드바 상태와 매핑.

**UI copy:** English — `docs/LANGUAGE.md` · 경로 상수: `lib/routes.ts`

## URL 라우트 (페이지)

| Path | 파일 | 프로토타입 | 설명 |
|------|------|------------|------|
| `/` | `app/page.tsx` → `MapPage` | `MapApp` ~1857 | 메인 지도 |
| `/login` | `app/login/page.tsx` | `LoginScreen` ~2551 | 로그인 |
| `/profile` | `app/profile/page.tsx` | `ProfileScreen` ~2663 | 프로필 |

네비게이션: `import { routes } from '@/lib/routes'` + `next/link` 또는 `useRouter`.

### 인증

- 상세: `docs/AUTH.md`
- `/profile` — 미로그인 시 `middleware` → `/login?redirect=/profile`
- My 탭·`/login` — Google 소셜 로그인

## `/` 지도 — 페이지 vs 오버레이

**별도 라우트 아님** (`components/features/map/MapPage.tsx` tree):

| UI | 프로토타입 state | 구현 |
|----|------------------|------|
| 지도·마커 | `map-view`, markers | `components/features/map/GoogleMap.tsx` |
| 검색·카테고리 | top bar | `components/features/map/MapTopBar.tsx` |
| 사이드바 | `sidebar-panel`, `scopeTab`, `sidebarNav` | `components/features/map/MapSidebar.tsx` |
| 스팟 상세 | `selectedSpot`, `.detail-card` | `components/features/map/SpotDetailCard.tsx` |
| 스팟 폼 | `showCreateForm`, `editingSpot` | 미구현 |

## 작업별 — 무엇을 먼저 읽을지

1. **라우트/페이지 추가** → 본 문서 → `lib/routes.ts` → `app/<segment>/page.tsx`
2. **지도 UI** → `components/features/map/MapPage.tsx` → skill `picko-design-system`
3. **로그인/프로필** → `components/features/auth|profile/`
4. **스타일** → `docs/design-system-rules.md` · `DESIGN_SYSTEM.md`
5. **지도 API** → `docs/map-service-strategy.md`

프로토타입 전체 로드 금지 — `rg`로 검색 후 해당 라인만 Read.

## 신규 파일 배치

```
app/<route>/page.tsx              # 페이지 조합만
components/features/<domain>/     # auth, map, profile, …
components/providers/             # AppProviders 등
lib/api/ · lib/queries/ · lib/types/ · lib/i18n/en/ · lib/mock/
```

## 프로토타입 grep

```bash
rg "function (MapApp|LoginScreen|ProfileScreen)" "K-SPOT Map.html"
rg "sidebarNav === 'pick'" "K-SPOT Map.html"
```

## 에이전트

- Rule: `.cursor/rules/routing.mdc` → **본 문서**
- Skill: `.cursor/skills/picko-design-system/routing-reference.md`
