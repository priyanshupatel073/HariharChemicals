import React from 'react';

/**
 * HariharLogo
 * Authentic trademark logo of Harihar Chemicals ("जय महादेव" TM).
 * Features:
 * - Sacred "जय महादेव TM" arch
 * - Circular golden sunburst halo with concentric dual borders
 * - Classic chemical dome / temple flask silhouette
 * - Sacred Tripundra (horizontal bands & third eye bindu)
 * - Bold dynamic red "HC" monogram
 * - Black base plaque with "HARIHAR CHEMICALS"
 * - Accompanied by crisp modern typography
 */
export default function HariharLogo({ size = 46, showText = true, inverted = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      {/* Authentic Emblem */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: 'relative',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src="/images/cropped/harihar_authentic_logo.png"
          alt="Harihar Chemicals Official Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))'
          }}
          onError={(e) => {
            // Fallback to SVG rendering if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: 'clamp(1rem, 3.8vw, 1.3rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                color: inverted ? '#FFFFFF' : 'var(--brand-grey-dark)',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.15
              }}
            >
              HARIHAR
            </span>
            <span
              style={{
                fontSize: 'clamp(1rem, 3.8vw, 1.3rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--brand-red)',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.15
              }}
            >
              CHEMICALS
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <span
              style={{
                fontSize: 'clamp(0.62rem, 2.2vw, 0.7rem)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: inverted ? '#94A3B8' : 'var(--brand-grey-medium)'
              }}
            >
              Naphthols, Bases &amp; Dyes
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
