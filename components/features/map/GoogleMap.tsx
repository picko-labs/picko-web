"use client";

import { useCallback, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_PAN_OFFSET_PX,
  DEFAULT_MAP_ZOOM,
  KOREA_MAP_RESTRICTION,
  KOREA_MAX_ZOOM,
  KOREA_MIN_ZOOM,
  USE_FRACTIONAL_ZOOM,
} from "@/lib/map/korea-bounds";
import { useDictionary } from "@/components/providers/LocaleProvider";
import type { Spot } from "@/lib/types/spot";
import type { ViewportBounds } from "@/lib/types/spot";

const GOOGLE_MAPS_SCRIPT_ID = "picko-google-map-script";

const mapContainerStyle = { width: "100%", height: "100%" };

function buildMapOptions(mapId: string): google.maps.MapOptions {
  return {
    // Cloud Console Map Style 연동 — styles JSON과 동시 사용 불가
    mapId,
    // 기본 UI(줌·맵타입 등) 일괄 비활성화 여부 — false면 아래 개별 옵션으로 세부 제어
    disableDefaultUI: false,
    // +/- 줌 버튼 — MapTopBar 커스텀 컨트롤 사용
    zoomControl: false,
    // 위성/지도 등 맵 타입 전환 버튼
    mapTypeControl: false,
    // Street View 페그맨
    streetViewControl: false,
    // 전체화면 버튼
    fullscreenControl: false,
    // 한국 bounds 밖 패닝·과도한 줌아웃 방지 (lib/map/korea-bounds.ts)
    restriction: KOREA_MAP_RESTRICTION,
    // 최소 줌 (4 — 전국 넓게 보기)
    minZoom: KOREA_MIN_ZOOM,
    // 최대 줌 (21)
    maxZoom: KOREA_MAX_ZOOM,
    // 소수 줌 단계 허용 여부 — false면 정수 줌만 (네이버 이산 줌과 유사)
    isFractionalZoomEnabled: USE_FRACTIONAL_ZOOM,
    // 지도 위 스크롤·드래그가 페이지 스크롤보다 우선
    gestureHandling: "greedy",
  };
}

interface GoogleMapComponentProps {
  spots: Spot[];
  selectedSpotId: number | null;
  onMarkerClick: (spot: Spot) => void;
  onMapReady?: (map: google.maps.Map) => void;
  onBoundsChanged?: (bounds: ViewportBounds) => void;
}

function GoogleMapView({
  apiKey,
  mapId,
  spots,
  selectedSpotId,
  onMarkerClick,
  onMapReady,
  onBoundsChanged,
}: GoogleMapComponentProps & { apiKey: string; mapId: string }) {
  const { map: mapLabels } = useDictionary();
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: GOOGLE_MAPS_SCRIPT_ID,
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;
      map.setCenter(DEFAULT_MAP_CENTER);
      map.setZoom(DEFAULT_MAP_ZOOM);
      map.panBy(DEFAULT_MAP_PAN_OFFSET_PX.x, DEFAULT_MAP_PAN_OFFSET_PX.y);
      onMapReady?.(map);
    },
    [onMapReady],
  );

  const onIdle = useCallback(() => {
    const map = mapRef.current;
    if (!map || !onBoundsChanged) return;
    const b = map.getBounds();
    if (!b) return;
    const sw = b.getSouthWest();
    const ne = b.getNorthEast();
    onBoundsChanged({
      swLat: sw.lat(),
      swLng: sw.lng(),
      neLat: ne.lat(),
      neLng: ne.lng(),
    });
  }, [onBoundsChanged]);

  if (loadError) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
        <p className="text-body text-neutral-dusk">{mapLabels.loadMapError}</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
        <p className="text-body text-neutral-dusk">{mapLabels.loadingMap}</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={DEFAULT_MAP_CENTER}
      zoom={DEFAULT_MAP_ZOOM}
      onLoad={onLoad}
      onIdle={onIdle}
      options={buildMapOptions(mapId)}
    >
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={{ lat: spot.lat, lng: spot.lng }}
          onClick={() => onMarkerClick(spot)}
          opacity={selectedSpotId === spot.id ? 1 : 0.95}
        />
      ))}
    </GoogleMap>
  );
}

function MapConfigPlaceholder({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
      <div className="text-center p-xl max-w-md">
        <h2 className="text-title text-primary mb-md">{title}</h2>
        <p className="text-body text-neutral-dusk mb-lg">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-caption text-secondary underline"
        >
          Google Cloud Console →
        </a>
      </div>
    </div>
  );
}

export function GoogleMapComponent(props: GoogleMapComponentProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  if (!apiKey || apiKey === "YOUR_GOOGLE_MAPS_API_KEY_HERE") {
    return (
      <MapConfigPlaceholder
        title="Google Maps API key required"
        description="Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local."
        href="https://console.cloud.google.com/google/maps-apis/credentials"
      />
    );
  }

  if (!mapId) {
    return (
      <MapConfigPlaceholder
        title="Google Maps Map ID required"
        description="Set NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID in .env.local."
        href="https://console.cloud.google.com/google/maps-apis/studio/maps"
      />
    );
  }

  return <GoogleMapView apiKey={apiKey} mapId={mapId} {...props} />;
}
