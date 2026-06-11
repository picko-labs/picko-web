"use client";

import { getDictionary } from "@/lib/i18n/get-dictionary";

const t = getDictionary().map;

type MapControlsProps = {
  sidebarCollapsed: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export function MapControls({ sidebarCollapsed, onZoomIn, onZoomOut }: MapControlsProps) {
  return (
    <div className={`map-controls ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <button type="button" className="control-btn" onClick={onZoomIn} title={t.zoomIn}>
        ➕
      </button>
      <button type="button" className="control-btn" onClick={onZoomOut} title={t.zoomOut}>
        ➖
      </button>
    </div>
  );
}
