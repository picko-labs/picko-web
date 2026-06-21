import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getSpot, getSpots } from "@/lib/api/spots";
import type { ViewportBounds } from "@/lib/types/spot";

type SpotsQueryOptions = {
  categoryCode?: string | null;
};

export function useSpotsQuery(
  viewport: ViewportBounds | null,
  options: SpotsQueryOptions = {},
) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  return useQuery({
    queryKey: ["spots", viewport, options.categoryCode ?? null],
    queryFn: () =>
      getSpots(viewport!, {
        categoryCode: options.categoryCode ?? undefined,
        accessToken,
      }),
    enabled: viewport !== null,
    staleTime: 30 * 1000,
  });
}

export function useSpotDetailQuery(id: number | null) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  return useQuery({
    queryKey: ["spot", id],
    queryFn: () => getSpot(id!, { accessToken }),
    enabled: id !== null,
    staleTime: 60 * 1000,
  });
}
