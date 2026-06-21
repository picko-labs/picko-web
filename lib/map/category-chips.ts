/**
 * 지도 상단 카테고리 칩 목록.
 * id 는 GET /spots?categoryCode= 에 전달되는 값 (null = 전체 조회).
 */
export const CATEGORY_CHIPS = [
  { id: null, label: "All", icon: "🗺️" },
  { id: "cafe", label: "Cafe", icon: "☕" },
  { id: "food", label: "Food", icon: "🍜" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
  { id: "culture", label: "Culture", icon: "🏛️" },
  { id: "nightlife", label: "Nightlife", icon: "🌙" },
  { id: "nature", label: "Nature", icon: "🌳" },
  { id: "photo", label: "Photo", icon: "📸" },
] as const;

export type CategoryChipId = (typeof CATEGORY_CHIPS)[number]["id"];
