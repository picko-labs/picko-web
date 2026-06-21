import { apiFetch } from "@/lib/api/common/client";
import { endpoints } from "@/lib/api/endpoints";
import type { SpotDetail, SpotListItem, ViewportBounds } from "@/lib/types/spot";

type GetSpotsOptions = {
  categoryCode?: string | null;
  accessToken?: string;
};

/** GET /spots — viewport bounds 필수, categoryCode 선택. 비회원 호출 가능 (isPinned=false). */
export async function getSpots(
  viewport: ViewportBounds,
  options: GetSpotsOptions = {},
): Promise<SpotListItem[]> {
  const params = new URLSearchParams({
    swLat: String(viewport.swLat),
    swLng: String(viewport.swLng),
    neLat: String(viewport.neLat),
    neLng: String(viewport.neLng),
  });

  if (options.categoryCode) {
    params.set("categoryCode", options.categoryCode);
  }

  return apiFetch<SpotListItem[]>(`${endpoints.spots.list}?${params.toString()}`, {
    accessToken: options.accessToken,
  });
}

/** GET /spots/{id} — 비회원 호출 가능. 회원이면 isPinned 개인화. */
export async function getSpot(
  id: number,
  options: { accessToken?: string } = {},
): Promise<SpotDetail> {
  return apiFetch<SpotDetail>(endpoints.spots.detail(id), {
    accessToken: options.accessToken,
  });
}
