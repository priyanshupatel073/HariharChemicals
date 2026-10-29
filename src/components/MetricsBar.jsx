import React from 'react';
import { COMPANY_INFO } from '../data/chemicalsData';
import { Award, Factory, Users, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MetricsBar() {
  const metricIcons = [
    <Award size={24} color="#D32F2F" key="0" />,
    <Factory size={24} color="#D32F2F" key="1" />,
    <Users size={24} color="#D32F2F" key="2" />,
    <CheckCircle2 size={24} color="#D32F2F" key="3" />,
    <Globe2 size={24} color="#D32F2F" key="4" />,
    <ShieldCheck size={24} color="#D32F2F" key="5" />
  ];

  return (
    <section
      className="metrics-section"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        padding: '54px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '28px',
            alignItems: 'flex-start'
          }}
          className="metrics-grid"
        >
          {COMPANY_INFO.metrics.map((m, idx) => (
            <div
              key={m.label}
              className="metric-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(211, 47, 47, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(211, 47, 47, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="metric-val" style={{ fontSize: '2.1rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', fontFamily: 'var(--font-sans)' }}>
                  {m.value}{m.suffix}
                </div>
                {metricIcons[idx % metricIcons.length]}
              </div>

              <div className="metric-lbl" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#E2E8F0' }}>
                {m.label}
              </div>

              <div className="metric-sub" style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.45 }}>
                {m.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .metrics-section {
            padding: 36px 0 !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .metric-card {
            padding: 12px 10px !important;
            gap: 4px !important;
          }
          .metric-val {
            font-size: 1.5rem !important;
          }
          .metric-lbl {
            font-size: 0.82rem !important;
          }
          .metric-sub {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}

