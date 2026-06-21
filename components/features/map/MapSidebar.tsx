"use client";

import type { Spot } from "@/lib/types/spot";
import { isSidebarNavVisible, type ScopeTab, type SidebarNav } from "@/lib/routes";
import { MyTabPanel } from "@/components/features/map/MyTabPanel";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const t = getDictionary().map;

const SIDEBAR_NAV = [
  { id: "info" as const, icon: "🗺️", label: "Info" },
  { id: "pick" as const, icon: "⭐", label: "Pick" },
  { id: "lifestyle" as const, icon: "✨", label: "Life Style" },
  { id: "my" as const, icon: "👤", label: "My" },
];

type MapSidebarProps = {
  collapsed: boolean;
  scopeTab: ScopeTab;
  onScopeTabChange: (tab: ScopeTab) => void;
  sidebarNav: SidebarNav;
  onSidebarNavChange: (nav: SidebarNav) => void;
  spots: Spot[];
  isLoading: boolean;
  onSpotClick: (spot: Spot) => void;
};

function spotImageStyle(imageUrl: string | null): React.CSSProperties {
  if (imageUrl) {
    return { backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" };
  }
  return { background: "linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%)" };
}

export function MapSidebar({
  collapsed,
  scopeTab,
  onScopeTabChange,
  sidebarNav,
  onSidebarNavChange,
  spots,
  isLoading,
  onSpotClick,
}: MapSidebarProps) {
  const sorted = [...spots].sort((a, b) => b.pinCount - a.pinCount).slice(0, 4);

  return (
    <div className={`sidebar-panel ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-inner">
        <div className="scope-tabs">
          <div className="scope-tabs-inner">
            <button
              type="button"
              className={`scope-tab ${scopeTab === "nearby" ? "active" : ""}`}
              onClick={() => onScopeTabChange("nearby")}
            >
              <span>{t.nearYou}</span>
            </button>
            <button
              type="button"
              className={`scope-tab ${scopeTab === "nationwide" ? "active" : ""}`}
              onClick={() => onScopeTabChange("nationwide")}
            >
              <span>🔥</span>
              <span>{t.nationwide}</span>
            </button>
          </div>
        </div>

        <div className="sidebar-scroll">
          {sidebarNav === "info" && (
            <>
              <div className="section-header">
                <div className="section-title">
                  {scopeTab === "nearby" ? t.trendingNearby : t.trendingInKorea}
                </div>
                <div className="update-indicator">
                  <span className="update-dot" />
                  <span>{t.updatedRecently}</span>
                </div>
              </div>
              {isLoading ? (
                <div className="ranked-grid">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="ranked-card ranked-card--skeleton" />
                  ))}
                </div>
              ) : (
                <div className="ranked-grid">
                  {sorted.map((spot, idx) => (
                    <div
                      key={spot.id}
                      className="ranked-card"
                      onClick={() => onSpotClick(spot)}
                      onKeyDown={(e) => e.key === "Enter" && onSpotClick(spot)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="ranked-card-img" style={spotImageStyle(spot.imageUrl)} />
                      <div className="ranked-card-overlay" />
                      <div className="ranked-card-number">{idx + 1}</div>
                      <div className="ranked-card-hashtag">
                        #{spot.categories[0]?.name ?? ""}
                      </div>
                      <div className="ranked-card-footer">
                        <div className="ranked-card-name">{spot.name}</div>
                        <div className="ranked-card-distance">
                          {t.pinsCount(spot.pinCount)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {sidebarNav === "pick" && (
            <div className="pick-empty" style={{ padding: "48px 24px", textAlign: "center" }}>
              <span style={{ fontSize: 48 }}>⭐</span>
              <div style={{ fontWeight: 600, fontSize: 17, marginTop: 16 }}>{t.noPicksYet}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 15, marginTop: 8 }}>
                {t.noPicksYetDesc}
              </div>
            </div>
          )}
          {sidebarNav === "my" && <MyTabPanel />}
        </div>

        <div className="sidebar-bottom-nav">
          {SIDEBAR_NAV.filter((nav) => isSidebarNavVisible(nav.id)).map((nav) => (
            <button
              key={nav.id}
              type="button"
              className={`sidebar-nav-item ${sidebarNav === nav.id ? "active" : ""}`}
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
