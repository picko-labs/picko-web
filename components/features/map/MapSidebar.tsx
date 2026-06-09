'use client';

import type { Spot } from "@/lib/types/spot";
import { isSidebarNavVisible, type ScopeTab, type SidebarNav } from '@/lib/routes';
import MyTabPanel from "@/components/features/map/MyTabPanel";

const SIDEBAR_NAV = [
  { id: 'info' as const, icon: '🗺️', label: 'Info' },
  { id: 'pick' as const, icon: '⭐', label: 'Pick' },
  { id: 'lifestyle' as const, icon: '✨', label: 'Life Style' },
  { id: 'my' as const, icon: '👤', label: 'My' },
];

type MapSidebarProps = {
  collapsed: boolean;
  scopeTab: ScopeTab;
  onScopeTabChange: (tab: ScopeTab) => void;
  sidebarNav: SidebarNav;
  onSidebarNavChange: (nav: SidebarNav) => void;
  spots: Spot[];
  onSpotClick: (spot: Spot) => void;
};

export default function MapSidebar({
  collapsed,
  scopeTab,
  onScopeTabChange,
  sidebarNav,
  onSidebarNavChange,
  spots,
  onSpotClick,
}: MapSidebarProps) {
  const sorted = [...spots].sort((a, b) => b.pins - a.pins).slice(0, 4);

  return (
    <div className={`sidebar-panel ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-inner">
        <div className="scope-tabs">
          <div className="scope-tabs-inner">
            <button
              type="button"
              className={`scope-tab ${scopeTab === 'nearby' ? 'active' : ''}`}
              onClick={() => onScopeTabChange('nearby')}
            >
              <span>Near you</span>
            </button>
            <button
              type="button"
              className={`scope-tab ${scopeTab === 'nationwide' ? 'active' : ''}`}
              onClick={() => onScopeTabChange('nationwide')}
            >
              <span>🔥</span>
              <span>Nationwide</span>
            </button>
          </div>
        </div>

        <div className="sidebar-scroll">
          {sidebarNav === 'info' && (
            <>
              <div className="section-header">
                <div className="section-title">
                  {scopeTab === 'nearby' ? 'Trending nearby' : 'Trending in Korea'}
                </div>
                <div className="update-indicator">
                  <span className="update-dot" />
                  <span>Updated 20m ago</span>
                </div>
              </div>
              <div className="ranked-grid">
                {sorted.map((spot, idx) => (
                  <div
                    key={spot.id}
                    className="ranked-card"
                    onClick={() => onSpotClick(spot)}
                    onKeyDown={(e) => e.key === 'Enter' && onSpotClick(spot)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="ranked-card-img" style={{ background: spot.image }} />
                    <div className="ranked-card-overlay" />
                    <div className="ranked-card-number">{idx + 1}</div>
                    <div className="ranked-card-hashtag">#{spot.category}</div>
                    <div className="ranked-card-footer">
                      <div className="ranked-card-name">{spot.name}</div>
                      <div className="ranked-card-distance">
                        {(0.2 + idx * 0.8).toFixed(1)}km · {spot.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {sidebarNav === 'pick' && (
            <div className="pick-empty" style={{ padding: '48px 24px', textAlign: 'center' }}>
              <span style={{ fontSize: 48 }}>⭐</span>
              <div style={{ fontWeight: 600, fontSize: 17, marginTop: 16 }}>No picks yet</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 15, marginTop: 8 }}>
                Star spots you love to save them here
              </div>
            </div>
          )}
          {sidebarNav === 'my' && <MyTabPanel />}
        </div>

        <div className="sidebar-bottom-nav">
          {SIDEBAR_NAV.filter((nav) => isSidebarNavVisible(nav.id)).map((nav) => (
            <button
              key={nav.id}
              type="button"
              className={`sidebar-nav-item ${sidebarNav === nav.id ? 'active' : ''}`}
              onClick={() => onSidebarNavChange(nav.id)}
            >
              <span className="sidebar-nav-icon">{nav.icon}</span>
              <span className="sidebar-nav-label">{nav.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
