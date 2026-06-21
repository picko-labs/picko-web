// ── API 응답 타입 (백엔드 DTO 대응) ──────────────────────────────

export type SpotCategory = {
  id: number;
  code: string;
  name: string;
  icon: string;
};

export type SpotHashtag = {
  id: number;
  code: string;
  name: string;
  icon: string;
};

export type SpotAddress = {
  id: number;
  code: string;
  region: string;
  city: string;
  town: string;
  postalCode: string;
  address: string;
  addressDetail: string | null;
  latitude: number;
  longitude: number;
};

export type SpotListItem = {
  id: number;
  name: string;
  imageUrl: string | null;
  isTrending: boolean;
  latitude: number;
  longitude: number;
  categories: SpotCategory[];
  pinCount: number;
  isPinned: boolean;
};

export type SpotDetail = SpotListItem & {
  description: string | null;
  spotAddress: SpotAddress | null;
  hashtags: SpotHashtag[];
  createdAt: string;
};

// ── UI 타입 (컴포넌트에서 사용) ──────────────────────────────────

export type Spot = {
  id: number;
  name: string;
  imageUrl: string | null;
  isTrending: boolean;
  lat: number;
  lng: number;
  categories: SpotCategory[];
  pinCount: number;
  isPinned: boolean;
};

// ── viewport bounds (GET /spots 필수 파라미터) ────────────────────

export type ViewportBounds = {
  swLat: number;
  swLng: number;
  neLat: number;
  neLng: number;
};

// ── mapper ────────────────────────────────────────────────────────

export function toSpot(item: SpotListItem): Spot {
  return {
    id: item.id,
    name: item.name,
    imageUrl: item.imageUrl,
    isTrending: item.isTrending,
    lat: item.latitude,
    lng: item.longitude,
    categories: item.categories,
    pinCount: item.pinCount,
    isPinned: item.isPinned,
  };
}
