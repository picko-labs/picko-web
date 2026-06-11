"use client";

import { useRef } from "react";
import { TRENDING_CATEGORIES } from "@/lib/mock/spots";

type MapTopBarProps = {
  collapsed: boolean;
  onExpand: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTrending: string;
  onTrendingChange: (id: string) => void;
};

export function MapTopBar({
  collapsed,
  onExpand,
  searchQuery,
  onSearchChange,
  activeTrending,
  onTrendingChange,
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
        {TRENDING_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-chip ${activeTrending === cat.id ? "active" : ""}`}
            onClick={() => onTrendingChange(cat.id)}
          >
            <span className="category-chip-icon">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
