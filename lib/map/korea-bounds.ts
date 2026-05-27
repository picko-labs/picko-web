/**
 * 대한민국 영역 + 줌 규칙 (네이버 지도 국내 서비스 기준)
 *
 * 네이버 Maps JS v3 (국내): limitMinZoom(6), limitMaxBounds, 줌 5~21
 * @see https://navermaps.github.io/maps/docs/
 *
 * Google zoom은 네이버와 숫자 체계가 다릅니다. 아래는 **체감상 유사**한 Google 값입니다.
 *
 * | 네이버 줌 | 대략적 의미   | Google 줌 (참고) |
 * |----------|--------------|------------------|
 * | 6        | 전국 (네이버 최소) | 6            |
 * | —        | 전국 넓게 보기 | 4 (버튼 2단계 추가) |
 * | 9~11     | 시·도 / 수도권 | 9~10             |
 * | 16       | 거리         | 15~16            |
 * | 21       | 최대 확대     | 21               |
 */

/** pan/restriction용 — 제주·독도 여유 포함 (네이버 maxBounds와 유사) */
export const KOREA_BOUNDS = {
  north: 38.65,
  south: 33.0,
  east: 132.0,
  west: 124.5,
} as const;

/** 한국 밖 패닝·과도한 줌아웃 방지 (네이버 limitMaxBounds와 유사) */
export const KOREA_MAP_RESTRICTION = {
  latLngBounds: KOREA_BOUNDS,
  strictBounds: true,
} as const;

/** 네이버(6)보다 2단계 더 줌아웃 — 전국이 넓게 보이도록 */
export const KOREA_MIN_ZOOM = 4;

/** 네이버 최대 줌: 21 */
export const KOREA_MAX_ZOOM = 21;

/** 네이버 기본 시내 뷰(구 타일 11) ≈ Google 10 — 서울·경기 */
export const DEFAULT_MAP_CENTER = { lat: 37.52, lng: 126.48 } as const;

export const DEFAULT_MAP_ZOOM = 10;

/** 좌측 사이드바 시야 보정 */
export const DEFAULT_MAP_PAN_OFFSET_PX = { x: -64, y: 0 } as const;

/** 줌 버튼·제스처 1단계 (네이버 ±1과 동일) */
export const ZOOM_STEP = 1;

/** 정수 줌만 허용 (네이버 이산 줌 단계) */
export const USE_FRACTIONAL_ZOOM = false;

export function clampZoom(zoom: number): number {
  return Math.min(KOREA_MAX_ZOOM, Math.max(KOREA_MIN_ZOOM, Math.round(zoom)));
}

export function getNextZoomIn(current: number | undefined): number {
  const z = current ?? DEFAULT_MAP_ZOOM;
  return clampZoom(z + ZOOM_STEP);
}

export function getNextZoomOut(current: number | undefined): number {
  const z = current ?? DEFAULT_MAP_ZOOM;
  return clampZoom(z - ZOOM_STEP);
}
