'use client';

import { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_PAN_OFFSET_PX,
  DEFAULT_MAP_ZOOM,
  KOREA_MAP_RESTRICTION,
  KOREA_MAX_ZOOM,
  KOREA_MIN_ZOOM,
} from '@/lib/map/korea-bounds';
import type { Spot } from '@/lib/mock/spots';

const mapContainerStyle = { width: '100%', height: '100%' };

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  restriction: KOREA_MAP_RESTRICTION,
  minZoom: KOREA_MIN_ZOOM,
  maxZoom: KOREA_MAX_ZOOM,
  styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
};

interface GoogleMapComponentProps {
  spots: Spot[];
  selectedSpotId: number | null;
  onMarkerClick: (spot: Spot) => void;
  onMapReady?: (map: google.maps.Map) => void;
}

export default function GoogleMapComponent({
  spots,
  selectedSpotId,
  onMarkerClick,
  onMapReady,
}: GoogleMapComponentProps) {
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      map.setCenter(DEFAULT_MAP_CENTER);
      map.setZoom(DEFAULT_MAP_ZOOM);
      map.panBy(DEFAULT_MAP_PAN_OFFSET_PX.x, DEFAULT_MAP_PAN_OFFSET_PX.y);
      onMapReady?.(map);
    },
    [onMapReady]
  );

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
    return (
      <div className="flex items-center justify-center w-full h-full bg-neutral-cream">
        <div className="text-center p-xl max-w-md">
          <h2 className="text-title text-primary mb-md">Google Maps API Key 필요</h2>
          <p className="text-body text-neutral-dusk mb-lg">
            .env.local에 NEXT_PUBLIC_GOOGLE_MAPS_API_KEY를 설정해주세요.
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

  return (
    <LoadScript googleMapsApiKey={apiKey}>
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
    </LoadScript>
  );
}
