# Picko Web — Routing

Next.js App Router 구조. 프로토타입 `K-SPOT Map.html`의 `currentScreen` / 사이드바 상태와 매핑.

## URL 라우트 (페이지)

| Path | 파일 | 프로토타입 | 설명 |
|------|------|------------|------|
| `/` | `app/page.tsx` | `currentScreen: 'map'` | 메인 지도 (검색·카테고리·Google Map) |
| `/login` | `app/login/page.tsx` | `LoginScreen` (~2551) | 로그인 |
| `/profile` | `app/profile/page.tsx` | `ProfileScreen` (~2663) | 프로필·내 스팟 |

### 인증 가드 (계획)

- `/profile` — `isLoggedIn` 없으면 `/login?redirect=/profile`
- 로그인 성공 → `redirect` 또는 `/`

## 지도 페이지 UI 상태 (URL 아님 → 추후 searchParams)

프로토타입은 React state. MVP는 같은 라우트(`/`) 내 컴포넌트 state.

| State | 프로토타입 | UI | 구현 위치 (계획) |
|-------|------------|-----|------------------|
| `scopeTab` | `nearby` \| `nationwide` | 사이드바 상단 탭 | `components/map/Sidebar.tsx` |
| `sidebarNav` | `info` \| `pick` \| `lifestyle` \| `my` | 하단 네비 | 동일 |
| `sidebarCollapsed` | boolean | 패널 접기 | 동일 |
| `selectedSpot` | Spot \| null | `detail-card` 오버레이 | `components/map/SpotDetail.tsx` |
| `showCreateForm` / `editingSpot` | modal | 스팟 생성·수정 | `components/map/SpotForm.tsx` |
| `activeCategory` | string | 상단 카테고리 칩 | `app/page.tsx` 또는 `CategoryFilter.tsx` |

### 추후 URL 확장 (선택)

```
/map?scope=nearby&nav=info&spot=123
```

## 컴포넌트 디렉터리 (계획)

```
components/
  map/
    Sidebar.tsx
    SpotDetail.tsx
    SpotForm.tsx
    CategoryFilter.tsx
  GoogleMap.tsx         # 지도 레이어
  SearchBar.tsx
lib/
  routes.ts             # 경로 상수
  mock/spots.ts         # MOCK_SPOTS (프로토타입 이전)
```

## 프로토타입 grep 가이드

```bash
rg "function (MapApp|LoginScreen|ProfileScreen)" "K-SPOT Map.html"
rg "sidebarNav === 'pick'" "K-SPOT Map.html"
rg "detail-card|showCreateForm" "K-SPOT Map.html"
```

## Cursor 연동

- Rule: `.cursor/rules/routing.mdc` — 라우트·컨텍스트 읽기 순서
- Skill: `.cursor/skills/picko-design-system/routing-reference.md`
