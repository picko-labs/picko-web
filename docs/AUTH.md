# 인증 (소셜 로그인)

**UI copy:** English — `docs/LANGUAGE.md`

NextAuth.js (Auth.js v5)로 Google OAuth를 처리한 뒤, **Picko 백엔드**와 ID Token → JWT 쌍을 교환합니다.

## 아키텍처

```
[브라우저] signIn("google")
    → Google OAuth
    → NextAuth /api/auth/callback/google
    → POST {API_BASE_URL}/auth/google  { token: id_token }
    ← { accessToken, refreshToken }
    → NextAuth JWT 세션 (refreshToken은 httpOnly 쿠키에만 저장)

[로그아웃]
    → POST {API_BASE_URL}/auth/logout
    → NextAuth signOut (로컬 세션 삭제)
```

## 레이어 구조

```
lib/auth/           OAuth 레지스트리·NextAuth provider 빌드
lib/api/            백엔드 auth HTTP (NextAuth 콜백 전용)
lib/queries/        React Query mutations (현재 useLogoutMutation)
components/features/
auth.ts             NextAuth 설정 (루트)
```

```
lib/api/
  config.ts · endpoints.ts · errors.ts · jwt.ts
  auth.ts             # exchangeSocialToken, refreshTokenPair, revokeSession
lib/queries/
  auth.ts             # useLogoutMutation
```

## 환경 변수 (`.env.local`)

```bash
# Picko backend
API_BASE_URL=http://localhost:8080

# openssl rand -base64 32
AUTH_SECRET=

# Google Cloud Console → OAuth 2.0 클라이언트
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# 로컬 개발
AUTH_URL=http://localhost:3000
```

Google OAuth **승인된 리디렉션 URI**:

- `http://localhost:3000/api/auth/callback/google`
- (배포 도메인) `https://<domain>/api/auth/callback/google`

## 백엔드 인증 API (요약)

| Method | Path | 설명 |
|--------|------|------|
| POST | `/auth/{provider}` | `google` \| `apple` \| `line` — body `{ token: idToken }` |
| POST | `/auth/refresh` | body `{ refreshToken }` → 새 token 쌍 |
| POST | `/auth/logout` | Bearer accessToken → 204 |

Access Token 30분 · Refresh Token 7일. 갱신 시 refresh token도 함께 교체.

## 세션·토큰

- NextAuth `session.strategy: "jwt"`
- `session.accessToken` — 백엔드 API용 (클라이언트 노출)
- `token.refreshToken` — NextAuth JWT 쿠키 내부만 (클라이언트 미노출)
- Access token 만료 1분 전 `auth()` / `useSession()` 호출 시 자동 `POST /auth/refresh`
- Refresh 실패 시 `session.error === "RefreshTokenError"` → 재로그인 유도

### 로그아웃 (React Query)

```typescript
import { useLogoutMutation } from "@/lib/queries/auth";

const logout = useLogoutMutation();
logout.mutate();
```

## Apple 로그인 추가 절차 (추후)

1. `lib/auth/social-providers.ts`에서 `apple` 항목 `enabled: true`
2. Apple Developer → Sign in with Apple → Service ID·키 설정
3. `.env.local`에 `AUTH_APPLE_ID`, `AUTH_APPLE_SECRET` 추가
4. Apple 콘솔 리디렉션 URI: `https://<domain>/api/auth/callback/apple`
5. Remove “Sign in with Apple is coming soon” footnote in `MyTabPanel`

## UI 진입점

| 위치 | 동작 |
|------|------|
| 지도 사이드바 **My** 탭 | 비로그인 → Google 로그인 버튼 |
| `/login` | 동일 버튼 + `?redirect=` 지원 |
| `/profile` | 미로그인 시 `/login?redirect=/profile` |

## 세션 API

- 클라이언트: `useSession()` (`next-auth/react`)
- 서버: `auth()` (`@/auth`)
