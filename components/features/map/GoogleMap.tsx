"use client";

import { useCallback } from "react";
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
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Spot } from "@/lib/types/spot";

const t = getDictionary().map;

const GOOGLE_MAPS_SCRIPT_ID = "picko-google-map-script";

const mapContainerStyle = { width: "100%", height: "100%" };

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  restriction: KOREA_MAP_RESTRICTION,
  minZoom: KOREA_MIN_ZOOM,
  maxZoom: KOREA_MAX_ZOOM,
  isFractionalZoomEnabled: USE_FRACTIONAL_ZOOM,
  gestureHandling: "greedy",
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

interface GoogleMapComponentProps {
  spots: Spot[];
  selectedSpotId: number | null;
  onMarkerClick: (spot: Spot) => void;
  onMapReady?: (map: google.maps.Map) => void;
}

function GoogleMapView({
  apiKey,
  spots,
  selectedSpotId,
  onMarkerClick,
  onMapReady,
}: GoogleMapComponentProps & { apiKey: string }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: GOOGLE_MAPS_SCRIPT_ID,
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      map.setCenter(DEFAULT_MAP_CENTER);
      map.setZoom(DEFAULT_MAP_ZOOM);
      map.panBy(DEFAULT_MAP_PAN_OFFSET_PX.x, DEFAULT_MAP_PAN_OFFSET_PX.y);
      onMapReady?.(map);
    },
    [onMapReady],
  );

  if (loadError) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
        <p className="text-body text-neutral-dusk">{t.loadMapError}</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
        <p className="text-body text-neutral-dusk">{t.loadingMap}</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={DEFAULT_MAP_CENTER}
      zoom={DEFAULT_MAP_ZOOM}
      onLoad={onLoad}
      options={mapOptions}
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

export function GoogleMapComponent(props: GoogleMapComponentProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === "YOUR_GOOGLE_MAPS_API_KEY_HERE") {
    return (
      <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
        <div className="text-center p-xl max-w-md">
          <h2 className="text-title text-primary mb-md">
            Google Maps API key required
          </h2>
          <p className="text-body text-neutral-dusk mb-lg">
            Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local.
          </p>
          <a
            href="https://console.cloud.google.com/google/maps-apis/credentials"
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

  return <GoogleMapView apiKey={apiKey} {...props} />;
}
