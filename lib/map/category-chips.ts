import type { Dictionary } from "@/lib/i18n/en";

/** Category codes sent to GET /spots?categoryCode= (null = all). */
export const CATEGORY_CHIP_IDS = [
  null,
  "cafe",
  "food",
  "shopping",
  "culture",
  "nightlife",
  "nature",
  "photo",
] as const;

const CATEGORY_ICONS: Record<string, string> = {
  all: "🗺️",
  cafe: "☕",
  food: "🍜",
  shopping: "🛍️",
  culture: "🏛️",
  nightlife: "🌙",
  nature: "🌳",
  photo: "📸",
};

export type CategoryChipId = (typeof CATEGORY_CHIP_IDS)[number];

export function getCategoryChips(categories: Dictionary["map"]["categories"]) {
  return CATEGORY_CHIP_IDS.map((id) => {
    const key = id ?? "all";
    return {
      id,
      label: categories[key as keyof typeof categories],
      icon: CATEGORY_ICONS[key],
    };
  });
}
