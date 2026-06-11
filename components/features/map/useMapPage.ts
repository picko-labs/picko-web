"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { getNextZoomIn, getNextZoomOut } from "@/lib/map/korea-bounds";
import { MOCK_SPOTS } from "@/lib/mock/spots";
import type { ScopeTab, SidebarNav } from "@/lib/routes";
import type { Spot } from "@/lib/types/spot";

export function useMapPage() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [spots] = useState(MOCK_SPOTS);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [scopeTab, setScopeTab] = useState<ScopeTab>("nearby");
  const [sidebarNav, setSidebarNav] = useState<SidebarNav>("info");
  const [activeTrending, setActiveTrending] = useState("hot");

  const filteredSpots = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return spots.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q),
    );
  }, [spots, searchQuery]);

  const handleMapReady = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
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
    activeTrending,
    setActiveTrending,
    filteredSpots,
    handleMapReady,
    handleZoomIn,
    handleZoomOut,
  };
}
