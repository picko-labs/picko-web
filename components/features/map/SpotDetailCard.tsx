'use client';

import type { Spot } from "@/lib/types/spot";

type SpotDetailCardProps = {
  spot: Spot | null;
  onClose: () => void;
};

export default function SpotDetailCard({ spot, onClose }: SpotDetailCardProps) {
  return (
    <div className={`detail-card ${spot ? '' : 'hidden'}`}>
      {spot && (
        <>
          <div className="detail-header" style={{ background: spot.image }}>
            <button type="button" className="detail-close" onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="detail-body">
            <span className="badge">{spot.category}</span>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '12px 0 8px' }}>{spot.name}</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>
              {spot.description}
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{spot.location}</p>
            <p style={{ fontSize: 13, marginTop: 8 }}>❤️ {spot.pins} pins</p>
          </div>
        </>
      )}
    </div>
  );
}
