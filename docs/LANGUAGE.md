# 언어 & UI copy

## 기본

| 대상 | 언어 |
|------|------|
| 제품 UI (사용자 노출) | **English** |
| 팀 docs · 커밋 · PR | **한국어** |

한국에서 만들지만 **글로벌 사용자** 대상. i18n 전까지 앱 문자열은 English.

## 타깃 & 톤

| | |
|--|--|
| **코어** | **20s–30s** 한국 방문 — 트렌드·스팟 discovery |
| **범위** | teens–40s — 가볍고 친근하게 |
| **마인드** | **잘파** — 핫하고 진짜 worth it한 곳 |

**여행 + K-culture 컴패니언** 톤. 짧고, **you** 지향. discovery 단어: **pick**, **spot**, **trending**, **near you**.

| ✅ | ❌ |
|----|-----|
| 짧은 한 줄 (sidebar, overlay) | 장문, 법률/엔터프라이즈 톤 |
| `Save picks`, `Add a spot` | `Submit`, `Proceed`, `utilize` |
| 버튼 **sentence case** | 전체 대문자 제목 |

**판단 기준:** 홍대에 온 **26세**가 1초 안에 이해하는가?

## 어휘 (UI chrome)

| 쓸 것 | 피할 것 |
|--------|---------|
| pick / spot | favorite, POI, location |
| trending, hot, near you | proximity-based results |
| sign in | authenticate, re-authenticate |

## 예시

| ✅ | ❌ |
|----|-----|
| `Sign in to save your picks` | `로그인이 필요해요` |
| `Continue with Google` | `Google로 계속하기` |
| `Nothing picked yet` | `No records found` |

## HTML · i18n

- `lang="en"` (`app/layout.tsx`)
- 추후: default locale `en`, 키는 `lib/i18n/en/` 등 한곳

## 에이전트

- Rule: `.cursor/rules/localization.mdc` → **본 문서**
- Skill: `.cursor/skills/picko-design-system/language-reference.md`
