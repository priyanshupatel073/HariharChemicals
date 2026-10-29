import React from 'react';
import { APPLICATIONS_CATALOG } from '../data/chemicalsData';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Bed,
  Shirt
} from 'lucide-react';

export default function ApplicationsSection({ onSelectApplicationForRfq }) {
  return (
    <section id="applications" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Industrial Diversity</span>
          </div>
          <h2 className="section-title">
            Tailored Applications Across Global Cellulosic Textiles
          </h2>
          <p className="section-description">
            Harihar group specializes in the synthesis of Naphthols and Bases engineered for a wide range of end users. From deep-penetration cotton yarn packages to high-rub towels and sun-resistant outdoor carpets.
          </p>
        </div>

        {/* Applications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
          className="apps-grid"
        >
          {APPLICATIONS_CATALOG.map((app) => (
            <div
              key={app.id}
              className="card-clean"
              style={{
                padding: '30px',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--brand-grey-light)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-red)' }}>
                    Sector Specification
                  </span>
                  <span className="cas-tag" style={{ fontSize: '0.74rem' }}>
                    Cellulosic Fiber
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '4px' }}>
                  {app.title}
                </h3>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--brand-grey-medium)', marginBottom: '16px' }}>
                  {app.subtitle}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {app.description}
                </p>

                {/* Key Chemical Advantages */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {app.benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--brand-grey-dark)' }}>
                      <CheckCircle2 size={14} color="var(--brand-red)" flexShrink={0} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectApplicationForRfq && onSelectApplicationForRfq(app.title)}
                style={{
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--brand-grey-light)',
                  color: 'var(--brand-grey-dark)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-red)';
                  e.currentTarget.style.color = 'var(--brand-red)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-grey-light)';
                  e.currentTarget.style.color = 'var(--brand-grey-dark)';
                }}
              >
                <span>Inquire for {app.title.split(' ')[0]} Recipes</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .apps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

