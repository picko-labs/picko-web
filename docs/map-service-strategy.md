# 지도: Google Maps

**Google Maps JavaScript API**만 사용합니다. 프로바이더 추상화·Kakao 이중 구현은 하지 않습니다.

## 환경 변수

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

[Google Cloud Console](https://console.cloud.google.com/google/maps-apis/credentials)에서 키 발급 후 **Maps JavaScript API** 활성화.

## 구현

| 파일 | 역할 |
|------|------|
| `components/features/map/GoogleMap.tsx` | 지도 + 마커 (`@react-google-maps/api`) |
| `components/features/map/MapPage.tsx` | dynamic import, `ssr: false` |

```tsx
const Map = dynamic(() => import("@/components/features/map/GoogleMap"), {
  ssr: false,
});
```

## 대한민국 bounds·줌

`lib/map/korea-bounds.ts` — `minZoom: 4`, `maxZoom: 21`, `strictBounds: true`, `isFractionalZoomEnabled: false`, 기본 zoom `10`(수도권).

## 추가 기능

길찾기·Places 등은 Google Maps Platform API를 그대로 확장.

## 참고

- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
