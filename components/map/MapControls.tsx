'use client';

type MapControlsProps = {
  sidebarCollapsed: boolean;
  myLocation: boolean;
  onMyLocationToggle: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export default function MapControls({
  sidebarCollapsed,
  myLocation,
  onMyLocationToggle,
  onZoomIn,
  onZoomOut,
}: MapControlsProps) {
  return (
    <div className={`map-controls ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <button
        type="button"
        className={`control-btn ${myLocation ? 'active' : ''}`}
        onClick={onMyLocationToggle}
        title="My Location"
      >
        📍
      </button>
      <button type="button" className="control-btn" onClick={onZoomIn} title="Zoom In">
        ➕
      </button>
      <button type="button" className="control-btn" onClick={onZoomOut} title="Zoom Out">
        ➖
      </button>
    </div>
  );
}
