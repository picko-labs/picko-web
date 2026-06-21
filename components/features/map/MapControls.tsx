"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";

type MapControlsProps = {
  sidebarCollapsed: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export function MapControls({ sidebarCollapsed, onZoomIn, onZoomOut }: MapControlsProps) {
  const { map } = useDictionary();

  return (
    <div className={`map-controls ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <button type="button" className="control-btn" onClick={onZoomIn} title={map.zoomIn}>
        ➕
      </button>
      <button type="button" className="control-btn" onClick={onZoomOut} title={map.zoomOut}>
        ➖
      </button>
    </div>
  );
}
