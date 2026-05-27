/**
 * / — 메인 지도 (K-SPOT Map.html MapApp)
 * @see docs/ROUTING.md · picko-api/K-SPOT Map.html
 */
'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import MapTopBar from '@/components/map/MapTopBar';
import MapSidebar from '@/components/map/MapSidebar';
import MapControls from '@/components/map/MapControls';
import SpotDetailCard from '@/components/map/SpotDetailCard';
import { MOCK_SPOTS, type Spot } from '@/lib/mock/spots';
import type { ScopeTab, SidebarNav } from '@/lib/routes';
import { getNextZoomIn, getNextZoomOut } from '@/lib/map/korea-bounds';

const GoogleMapComponent = dynamic(() => import('@/components/GoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="map-view flex items-center justify-center bg-neutral-cream">
      <p className="text-body text-neutral-dusk">지도를 불러오는 중...</p>
    </div>
  ),
});

export default function Home() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [spots] = useState(MOCK_SPOTS);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [myLocation, setMyLocation] = useState(false);
  const [scopeTab, setScopeTab] = useState<ScopeTab>('nearby');
  const [sidebarNav, setSidebarNav] = useState<SidebarNav>('info');
  const [activeTrending, setActiveTrending] = useState('hot');

  const filteredSpots = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return spots.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
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
          className={`sidebar-toggle ${sidebarCollapsed ? 'collapsed' : ''}`}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={sidebarCollapsed ? 'Open panel' : 'Close panel'}
        >
          <span className="toggle-chevron">
            {sidebarCollapsed ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            )}
          </span>
        </button>

        <MapTopBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTrending={activeTrending}
          onTrendingChange={setActiveTrending}
        />

        <MapControls
          sidebarCollapsed={sidebarCollapsed}
          myLocation={myLocation}
          onMyLocationToggle={() => setMyLocation(!myLocation)}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />

        <SpotDetailCard spot={selectedSpot} onClose={() => setSelectedSpot(null)} />
      </div>
    </main>
  );
}
