"use client";

import { useMemo, useRef } from "react";
import { getCategoryChips } from "@/lib/map/category-chips";
import { useDictionary } from "@/components/providers/LocaleProvider";

type MapTopBarProps = {
  collapsed: boolean;
  onExpand: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  categoryCode: string | null;
  onCategoryChange: (code: string | null) => void;
};

export function MapTopBar({
  collapsed,
  onExpand,
  searchQuery,
  onSearchChange,
  categoryCode,
  onCategoryChange,
}: MapTopBarProps) {
  const { map } = useDictionary();
  const categoryChips = useMemo(
    () => getCategoryChips(map.categories),
    [map.categories],
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpand = () => {
    onExpand();
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <div className="top-bar">
      {collapsed && (
        <button
          type="button"
          className="search-mini-btn"
          onClick={handleExpand}
          title={map.openPanelTitle}
          aria-label={map.openPanel}
        >
          <span className="search-brand">Picko</span>
          <span className="search-divider" />
          <span className="search-mini-icon" aria-hidden>
            🔍
          </span>
        </button>
      )}

      <div className={`top-bar-search ${collapsed ? "collapsed" : ""}`}>
        <div className="search-bar">
          <span className="search-brand">Picko</span>
          <span className="search-divider" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder={map.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            tabIndex={collapsed ? -1 : 0}
            aria-hidden={collapsed}
          />
        </div>
      </div>

      <div className="category-bar">
        {categoryChips.map((chip) => (
          <button
            key={chip.id ?? "__all__"}
            type="button"
            className={`category-chip ${categoryCode === chip.id ? "active" : ""}`}
            onClick={() => onCategoryChange(chip.id)}
          >
            <span className="category-chip-icon">{chip.icon}</span>
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
