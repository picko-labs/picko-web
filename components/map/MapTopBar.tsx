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
