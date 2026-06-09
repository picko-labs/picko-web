# Git 컨벤션 (picko-web)

팀 협업·커밋·PR 작성 시 따르는 규칙입니다.  
**기본 언어: 한국어** · 코드·브랜치·API·프레임워크명 등 기술 용어는 **영어** 허용.

**Claude · Cursor:** `docs/AI-AGENTS.md` — `.claude`/`.cursor`는 **라우터**, 본 문서가 **내용(SSoT)**  
**커밋 절차:** `docs/agent/commit-draft.md`

---

## 브랜치 네이밍

```
<type>/<간결한-설명>
```

| type | 사용 시점 |
|------|-----------|
| `feat` | 새 기능 (UI, API 연동, 라우트 등) |
| `fix` | 버그 수정 |
| `refactor` | 동작 변경 없는 구조·코드 개선 |
| `chore` | 빌드, 설정, 의존성, CI |
| `docs` | 문서, cursor rules/skills |
| `test` | 테스트 코드 |

```bash
feat/auth-social-login
fix/profile-redirect-loop
refactor/map-feature-components
chore/next-auth-upgrade
docs/routing-spec
```

- 설명은 **kebab-case**, **영어** (Git·GitHub 관례)
- 하나의 브랜치 = 하나의 관심사

---

## 커밋 메시지

### 형식

```
<type>: <제목>

<본문 — 선택>
```

### 제목 규칙

- `<type>: ` 접두사 필수 (`feat`, `fix`, `refactor`, `chore`, `docs`, `test`)
- **한국어** 작성
- **50자 이하**
- 끝 **마침표 없음**
- Next.js, React, TypeScript, NextAuth, React Query, Tailwind, App Router, middleware, OAuth, JWT 등 **기술 용어는 영어** 허용
- `Co-Authored-By:` 등 **트레일러 절대 추가 금지**

### 본문 규칙

- **왜** 변경했는가 위주 (무엇을 바꿨는지는 diff가 설명)
- 필요할 때만 작성

### 예시

```
feat: Google 소셜 로그인 및 백엔드 JWT 연동

NextAuth OAuth 후 Picko API와 ID Token을 교환해
세션에 accessToken을 저장한다.
```

```
fix: /profile 비로그인 시 redirect 쿼리 누락 수정
```

```
refactor: map UI를 components/features로 분리

page.tsx는 라우트 조합만 담당하도록 레이어를 정리한다.
```

```
chore: TanStack Query 및 next-auth 의존성 추가
```

```
docs: AUTH.md 및 git 컨벤션 문서 추가
```

---

## PR

### 제목

- 커밋 제목 규칙과 **동일** (한국어, `type:` 접두, ≤50자)
- GitHub UI에서 길어지면 **핵심 type + 한 줄 요약** 유지

### 본문 (한국어)

```markdown
## Summary
- 변경 요약 (bullet)

## Test plan
- [ ] 확인 항목
```

- **Summary**: 리뷰어가 맥락을 파악할 수 있게
- **Test plan**: 로컬/스테이징에서 검증할 체크리스트
- 하나의 PR = **하나의 관심사**
- `.env.local`, API 키, 시크릿 **커밋 금지** (`.env.example`만)

### picko-web PR 시 자주 넣을 항목

- [ ] `npm run dev` / `npm run build` 통과
- [ ] Google Maps 키·Auth env 설정 후 해당 화면 수동 확인
- [ ] UI copy **English** (`docs/LANGUAGE.md`) — 제품 문자열만 해당

---

## 커밋 전 체크

- [ ] `git status` — `.env.local` 등 시크릿 미포함
- [ ] `npx tsc --noEmit` (타입 변경 시)
- [ ] 제목 50자 이내, type 접두, 마침표 없음
