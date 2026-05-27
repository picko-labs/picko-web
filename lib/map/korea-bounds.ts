/**
 * 대한민국 영역 — Google Maps restriction & zoom
 *
 * Zoom scale (대략):
 *   4 — 남한+제주 전체가 보이기 쉬움
 *   5 — 한반도
 *   9 — 서울·경기 수도권
 *   12+ — 도시/동네
 */

/** pan/restriction용 — 제주·독도 여유 포함 */
export const KOREA_BOUNDS = {
  north: 38.65,
  south: 33.0,
  east: 132.0,
  west: 124.5,
} as const;

export const KOREA_MAP_RESTRICTION = {
  latLngBounds: KOREA_BOUNDS,
  /** false: 줌아웃 시 bounds 전체가 보인 뒤 한 단계 더 멀어질 수 있음 (전국 조망) */
  strictBounds: false,
} as const;

/** 최대 줌아웃 (전국). 4 권장 */
export const KOREA_MIN_ZOOM = 4;

export const KOREA_MAX_ZOOM = 16;

/**
 * 기본 화면: 서울 + 경기 수도권
 * lng를 서울(127.0)보다 서쪽으로 두면 동해·일본 방향이 덜 보임.
 * 좌측 사이드바(400px) 때문에 시야가 오른쪽으로 치우쳐 보이므로 ~0.5° 서쪽 보정.
 */
export const DEFAULT_MAP_CENTER = { lat: 37.52, lng: 126.48 } as const;

/** 9 = 서울·인천·경기 남부 ~ 10 = 서울 시내 중심 */
export const DEFAULT_MAP_ZOOM = 9;

/** onLoad 후 추가 픽셀 보정 (음수 = 서쪽 pan → 일본 쪽 덜 노출) */
export const DEFAULT_MAP_PAN_OFFSET_PX = { x: -64, y: 0 } as const;
