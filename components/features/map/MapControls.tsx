'use client';

type MapControlsProps = {
  sidebarCollapsed: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export default function MapControls({
  sidebarCollapsed,
  onZoomIn,
  onZoomOut,
}: MapControlsProps) {
  return (
    <div className={`map-controls ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <button type="button" className="control-btn" onClick={onZoomIn} title="Zoom In">
        ➕
      </button>
      <button type="button" className="control-btn" onClick={onZoomOut} title="Zoom Out">
        ➖
      </button>
    </div>
  );
}
