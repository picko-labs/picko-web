"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { getNextZoomIn, getNextZoomOut } from "@/lib/map/korea-bounds";
import { useSpotsQuery } from "@/lib/queries/spots";
import type { ScopeTab, SidebarNav } from "@/lib/routes";
import { toSpot, type Spot, type ViewportBounds } from "@/lib/types/spot";

export function useMapPage() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [viewport, setViewport] = useState<ViewportBounds | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [scopeTab, setScopeTab] = useState<ScopeTab>("nearby");
  const [sidebarNav, setSidebarNav] = useState<SidebarNav>("info");
  const [categoryCode, setCategoryCode] = useState<string | null>(null);

  const { data: spotItems = [], isLoading: isSpotsLoading } = useSpotsQuery(
    viewport,
    { categoryCode },
  );

  const filteredSpots: Spot[] = useMemo(() => {
    const mapped = spotItems.map(toSpot);
    if (!searchQuery) return mapped;
    const q = searchQuery.toLowerCase();
    return mapped.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.categories.some((c) => c.name.toLowerCase().includes(q)),
    );
  }, [spotItems, searchQuery]);

  const handleMapReady = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const handleBoundsChanged = useCallback((bounds: ViewportBounds) => {
    setViewport(bounds);
  }, []);

  const handleZoomIn = useCallback(() => {
    const z = mapRef.current?.getZoom();
    mapRef.current?.setZoom(getNextZoomIn(z ?? undefined));
  }, []);

  const handleZoomOut = useCallback(() => {
    const z = mapRef.current?.getZoom();
    mapRef.current?.setZoom(getNextZoomOut(z ?? undefined));
  }, []);

  return {
    selectedSpot,
    setSelectedSpot,
    searchQuery,
    setSearchQuery,
    sidebarCollapsed,
    setSidebarCollapsed,
    scopeTab,
    setScopeTab,
    sidebarNav,
    setSidebarNav,
    categoryCode,
    setCategoryCode,
    filteredSpots,
    isSpotsLoading,
    handleMapReady,
    handleBoundsChanged,
    handleZoomIn,
    handleZoomOut,
  };
}
