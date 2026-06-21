"use client";

import { useSpotDetailQuery } from "@/lib/queries/spots";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Spot } from "@/lib/types/spot";

const t = getDictionary().map;

type SpotDetailCardProps = {
  spot: Spot | null;
  onClose: () => void;
};

function spotImageStyle(imageUrl: string | null): React.CSSProperties {
  if (imageUrl) {
    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  return { background: "linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%)" };
}

export function SpotDetailCard({ spot, onClose }: SpotDetailCardProps) {
  const { data: detail, isLoading: isDetailLoading } = useSpotDetailQuery(
    spot?.id ?? null,
  );

  const primaryCategory = spot?.categories[0]?.name ?? "";
  const description = detail?.description ?? "";
  const locationLabel = detail?.spotAddress
    ? [detail.spotAddress.city, detail.spotAddress.region]
        .filter(Boolean)
        .join(", ")
    : "";

  return (
    <div className={`detail-card ${spot ? "" : "hidden"}`}>
      {spot && (
        <>
          <div className="detail-header" style={spotImageStyle(spot.imageUrl)}>
            <button type="button" className="detail-close" onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="detail-body">
            {primaryCategory && <span className="badge">{primaryCategory}</span>}
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: "12px 0 8px" }}>
              {spot.name}
            </h3>
            {isDetailLoading ? (
              <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>…</p>
            ) : (
              <>
                {description && (
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {description}
                  </p>
                )}
                {locationLabel && (
                  <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                    {locationLabel}
                  </p>
                )}
              </>
            )}
            <p style={{ fontSize: 13, marginTop: 8 }}>{t.pinsCount(spot.pinCount)}</p>
          </div>
        </>
      )}
    </div>
  );
}
