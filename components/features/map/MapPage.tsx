"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import MapControls from "@/components/features/map/MapControls";
import MapSidebar from "@/components/features/map/MapSidebar";
import MapTopBar from "@/components/features/map/MapTopBar";
import SpotDetailCard from "@/components/features/map/SpotDetailCard";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getNextZoomIn, getNextZoomOut } from "@/lib/map/korea-bounds";
import { MOCK_SPOTS } from "@/lib/mock/spots";
import type { ScopeTab, SidebarNav } from "@/lib/routes";
import type { Spot } from "@/lib/types/spot";

const t = getDictionary().map;

const GoogleMapComponent = dynamic(
  () => import("@/components/features/map/GoogleMap"),
  {
    ssr: false,
    loading: () => (
      <div className="map-view flex items-center justify-center bg-neutral-cream">
        <p className="text-body text-neutral-dusk">{t.loadingMap}</p>
      </div>
    ),
  },
);

export default function MapPage() {
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

  const handleZoomIn = () => {
    const z = mapRef.current?.getZoom();
    mapRef.current?.setZoom(getNextZoomIn(z ?? undefined));
  };

  const handleZoomOut = () => {
    const z = mapRef.current?.getZoom();
    mapRef.current?.setZoom(getNextZoomOut(z ?? undefined));
  };

  return (
    <main className="map-container h-screen w-full">
      <div className="map-view">
        <GoogleMapComponent
          spots={filteredSpots}
          selectedSpotId={selectedSpot?.id ?? null}
          onMarkerClick={setSelectedSpot}
          onMapReady={handleMapReady}
        />

        <MapSidebar
          collapsed={sidebarCollapsed}
          scopeTab={scopeTab}
          onScopeTabChange={setScopeTab}
          sidebarNav={sidebarNav}
          onSidebarNavChange={setSidebarNav}
          spots={filteredSpots}
          onSpotClick={setSelectedSpot}
        />

        <button
          type="button"
          className={`sidebar-toggle ${sidebarCollapsed ? "collapsed" : ""}`}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={sidebarCollapsed ? t.openPanelTitle : t.closePanelTitle}
          aria-label={sidebarCollapsed ? t.openPanel : t.closePanel}
        >
          <span className="toggle-chevron">
            {sidebarCollapsed ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            )}
          </span>
        </button>

        <MapTopBar
          collapsed={sidebarCollapsed}
          onExpand={() => setSidebarCollapsed(false)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTrending={activeTrending}
          onTrendingChange={setActiveTrending}
        />

        <MapControls
          sidebarCollapsed={sidebarCollapsed}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />

        <SpotDetailCard
          spot={selectedSpot}
          onClose={() => setSelectedSpot(null)}
        />
      </div>
    </main>
  );
}
