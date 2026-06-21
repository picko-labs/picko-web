# Picko Web

> **All of Korea's trends. One spot.**

한국의 모든 트렌드를 한곳에서 - Picko는 K-컬처 핫플레이스를 발견하고 공유하는 웹 서비스입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + TDS (Toss Design System) principles
- **Maps**: Google Maps JavaScript API
- **Language**: TypeScript
- **Font**: Pretendard Variable (한글 최적화)

## 🗺️ 지도

**Google Maps JavaScript API** 단일 사용 (`components/GoogleMap.tsx`). 프로바이더 이중화 없음.

자세한 내용: `.cursor/rules/map-service-strategy.mdc`

## 📦 설치 및 실행

### 1. 패키지 설치

```bash
npm install
```

### 2. Google Maps API 키 발급

1. [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/credentials) 접속
2. 프로젝트 생성 후 **Maps JavaScript API** 활성화
3. API 키 생성 (HTTP referrer에 `http://localhost:3001/*` 등록)

### 3. 환경 변수 설정

`.env.local` 파일에 API 키 추가:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id_here
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3001` 접속

## 🎨 디자인 시스템

Picko는 **TDS (Toss Design System)** 원칙을 기반으로 합니다.

### 주요 컬러

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Coral) | `#F04040` | CTA, 트렌딩 표시 |
| Secondary (Blue) | `#4A8FE0` | 정보, 링크 |
| Tertiary (Yellow) | `#F5B820` | 하이라이트, 라이브 |

### Typography

- **Display** (28px): 헤드라인
- **Title** (22px): 섹션 제목
- **Headline** (17px): 카드 제목
- **Body** (15px): 본문
- **Caption** (13px): 메타 정보
- **Label** (11px): 작은 레이블

상세 가이드: `DESIGN_SYSTEM.md`

## 📁 프로젝트 구조

```
picko-web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지 (지도)
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── GoogleMap.tsx     # Google Maps 컴포넌트
│   └── SearchBar.tsx     # 검색 바
├── lib/                   # 유틸리티
│   └── design-tokens.ts  # 디자인 토큰
├── .cursor/
│   ├── rules/            # Cursor AI 규칙 (자동 적용)
│   │   ├── routing.mdc
│   │   ├── design-system.mdc
│   │   └── map-service-strategy.mdc
│   ├── docs/
│   │   └── ROUTING.md    # 라우팅 스펙
│   └── skills/           # Cursor Skills (명시적 호출)
│       └── picko-design-system/
├── DESIGN_SYSTEM.md      # 디자인 시스템 문서 (스펙)
├── K-SPOT Map.html       # UI 프로토타입
└── tailwind.config.ts    # Tailwind 설정
```

### Cursor Rules vs Skills

| | Rules | Skills |
|---|--------|--------|
| **적용** | 파일 패턴·항상 적용 | `@picko-design-system` 등 명시 호출 |
| **용도** | 짧은 제약·컨벤션 | 프로토타입 변환·상세 워크플로 |
| **예** | `routing.mdc`, `design-system.mdc` | `picko-design-system/SKILL.md` |

라우팅 상세: `docs/ROUTING.md` · 상수: `lib/routes.ts`

## 🛠️ 개발 가이드

### 지도 관련 개발

지도 UI는 `components/GoogleMap.tsx`에만 두고, `app/page.tsx`에서는 dynamic import로 사용합니다.

### Tailwind 커스텀 클래스

```tsx
<h1 className="text-display">Display</h1>
<p className="text-body">Body text</p>
<div className="bg-gradient-primary">Gradient</div>
<div className="shadow-floating">Card</div>
```

## 📝 스크립트

```bash
npm run dev      # 개발 서버 (localhost:3001)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 실행
```

## 🔐 환경 변수

| 변수 | 설명 | 필수 |
|------|------|------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API 키 | ✅ |
| `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` | Cloud Map Style 연동 Map ID | ✅ |

## 📚 참고 문서

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [TDS 디자인 원칙](https://toss.im/design)

## 📄 라이선스

MIT License

---

Made with ❤️ for K-Culture
