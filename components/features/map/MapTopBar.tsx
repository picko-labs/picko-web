"use client";

import { useRef } from "react";
import { CATEGORY_CHIPS } from "@/lib/map/category-chips";

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
          title="Open search & panel"
          aria-label="Open search and panel"
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
            placeholder="Search spots, areas, hashtags"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            tabIndex={collapsed ? -1 : 0}
            aria-hidden={collapsed}
          />
        </div>
      </div>

      <div className="category-bar">
        {CATEGORY_CHIPS.map((chip) => (
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
