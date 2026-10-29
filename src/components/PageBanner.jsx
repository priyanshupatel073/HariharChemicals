import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PageBanner({ title, subtitle, tag, onOpenRfq }) {
  return (
    <div
      className="page-banner-container"
      style={{
        backgroundColor: 'var(--brand-grey-dark)',
        color: '#FFFFFF',
        padding: '60px 0 64px 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Subtle crimson ambient radial background */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb Strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '16px' }}>
          <Link to="/" style={{ color: '#E2E8F0', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--brand-red)' }}>{title}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '780px' }}>
            {tag && (
              <span className="section-tag dark" style={{ marginBottom: '12px' }}>
                {tag}
              </span>
            )}
            <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#FFFFFF', lineHeight: 1.15, marginBottom: '12px' }}>
              {title}
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          </div>

          {onOpenRfq && (
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onOpenRfq}
              style={{ fontWeight: 700 }}
            >
              <Sparkles size={17} />
              <span>Request Technical RFQ</span>
            </button>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .page-banner-container {
            padding: 38px 0 42px 0 !important;
          }
          .page-banner-container h1 {
            font-size: 1.85rem !important;
          }
          .page-banner-container p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </div>
  );
}

