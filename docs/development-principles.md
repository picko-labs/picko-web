# 코드 설계 원칙

모든 구현·리팩터링·리뷰에 적용. **단순함을 기본값**으로 둔다.

## KISS

**Keep It Simple, Stupid** — 단순한 해법을 먼저 선택한다. 복잡성은 **반드시 필요한 경우**에만 허용한다.

- 두 가지 이상의 설계가 가능하면 **더 짧고 읽기 쉬운 쪽**을 우선
- “나중에 편할 것 같아서” 만든 layer·wrapper·indirection ❌
- 복잡도를 올릴 때는 **왜 필요한지** PR·코멘트에 한 줄로 남긴다

## DRY

**Don't Repeat Yourself** — 중복 로직은 추출한다. 단, **우연의 일치**인 중복은 섣불리 추출하지 않는다.

| 추출 ✅ | 보류 ❌ |
|---------|---------|
| 동일 규칙·동일 변경 지점이 2회 이상 | 형태만 비슷하고 의미·변경 이유가 다름 |
| 한 곳 고치면 다른 곳도 고쳐야 함 | “재사용 가능해 보여서” premature abstraction |

- 추출 시 **이름·위치**가 의도를 드러내야 한다 (`lib/api/`, `components/features/`)

## YAGNI

**You Aren't Gonna Need It** — 현재 요구사항에 **없는** 기능·확장 포인트를 미리 만들지 않는다.

- “추후 API 연동 대비” generic client·provider registry·plugin hook ❌ (요청 전)
- mock → real 전환은 **필요해질 때** 최소 diff로
- config flag·feature toggle은 **당장 쓰는 경우**만

## 추상화

유지보수·가독성·확장성에 **실질적 이점**이 있을 때만 도입한다.

- interface / hook / factory / strategy — **두 번째 실사용처**가 보이거나, 복잡도를 **낮출** 때
- 추상화 한 단계 = 이해 비용 +1 → **제거했을 때 손해**가 명확할 때만
- picko-web: page는 조합, HTTP는 `lib/api/`, UI state는 feature 컴포넌트 — **역할 분리는 추상화가 아니라 경계**

## 적용 순서 (판단)

1. **KISS** — 가장 단순한 구현으로 충분한가?
2. **YAGNI** — 지금 요구사항인가?
3. **DRY** — 진짜 중복인가?
4. **추상화** — 도입 이득 > 복잡도 비용인가?

## 에이전트

- Rule: `.cursor/rules/development-principles.mdc` → **본 문서**
