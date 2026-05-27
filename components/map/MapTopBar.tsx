'use client';

import { TRENDING_CATEGORIES } from '@/lib/mock/spots';

type MapTopBarProps = {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTrending: string;
  onTrendingChange: (id: string) => void;
};

export default function MapTopBar({
  searchQuery,
  onSearchChange,
  activeTrending,
  onTrendingChange,
}: MapTopBarProps) {
  return (
    <div className="top-bar">
      <div className="top-bar-search">
        <div className="search-bar">
          <span className="search-brand">Picko</span>
          <span className="search-divider" />
          <input
            type="text"
            className="search-input"
            placeholder="Search spots, areas, hashtags"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="button" className="search-menu-btn" title="Voice search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </button>
        </div>
      </div>

      <div className="category-bar">
        {TRENDING_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-chip ${activeTrending === cat.id ? 'active' : ''}`}
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
