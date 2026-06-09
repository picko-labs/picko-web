# Language reference (UI copy)

정책: [docs/LANGUAGE.md](../../../docs/LANGUAGE.md) · Rule: `.cursor/rules/localization.mdc`

## 기본

제품 노출 문자열 = **English**. comment·내부 docs는 한국어 OK.

## 타깃

| | |
|--|--|
| 코어 | **20s–30s** 한국 방문 |
| 범위 | teens–**40s** |
| 마인드 | **잘파** — 트렌드·진짜 worth it |

**Instagram/TikTok급** 스캔 속도. 스마트한 친구 톤, 매뉴얼 ❌.

## 체크리스트

- [ ] 사용자 노출 **English**
- [ ] **짧게** — sidebar, bottom sheet, overlay
- [ ] **you** — `Save your picks`
- [ ] discovery — pick, spot, trending, near you, hot
- [ ] enterprise 톤 ❌ (`utilize`, `authentication required`)
- [ ] 과한 Gen-Z slang ❌
- [ ] emoji — 프로토타입 쓰는 곳만

**판단:** 홍대 **26세**가 1초 안에 이해?

## 어휘

| 쓸 것 | 피할 것 |
|--------|---------|
| pick / picks | favorite, bookmark |
| spot | POI, location (chrome) |
| trending, hot | popular entities |
| near you | proximity-based |
| sign in | authenticate |

## 패턴

| 맥락 | 예시 |
|------|------|
| Guest My | `Sign in to save your picks` |
| Empty Pick | `No picks yet` |
| OAuth | `Continue with Google` |
| Nav | `Back to map` |
| Coming soon | `Sign in with Apple—coming soon` |

## Anti-pattern

```text
❌ "Your session has expired. Please re-authenticate."
✅ "You're signed out. Sign in again to save picks."

❌ "No data available for the selected filter criteria."
✅ "Nothing here yet—try another area or category."
```

## OAuth registry

```typescript
// lib/auth/social-providers.ts
{ id: "google", label: "Continue with Google", enabled: true }
```

프로토타입(`Near you`, `Trending`, `Pick`) 에너지 유지. placeholder·admin 톤은 tighten.
