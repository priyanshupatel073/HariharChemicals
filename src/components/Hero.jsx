import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/chemicalsData';

export default function Hero({ onOpenRfq }) {
  return (
    <section
      id="hero-section"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderBottom: '1px solid var(--brand-grey-light)',
        padding: '60px 0 70px 0'
      }}
    >
      {/* Subtle Crimson Radial Ambient Glows for Modern Depth */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.06) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(15, 23, 42, 0.04) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '52px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Industrial Typography & Action CTAs */}
          <div>
            {/* High-Precision Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--brand-red-light)',
                border: '1px solid var(--brand-red-border)',
                marginBottom: '22px'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-red)',
                  display: 'inline-block',
                  boxShadow: '0 0 10px var(--brand-red)'
                }}
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-red-dark)'
                }}
              >
                G.I.D.C. ANKLESHWAR • ISO 9001:2015 CERTIFIED
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.14,
                letterSpacing: '-0.03em',
                color: 'var(--brand-grey-dark)',
                marginBottom: '20px'
              }}
            >
              Precision <span style={{ color: 'var(--brand-red)' }}>Naphthols</span>, Fast Bases &amp; Azoic Colorants.
            </h1>

            {/* Sub-Headline */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'var(--brand-grey-slate)',
                maxWidth: '620px',
                marginBottom: '30px'
              }}
            >
              Manufacturer and global exporter of high-yield <strong>Harithols (Naphthols)</strong> and diazo <strong>Fast Colour Bases</strong>.
              Engineered for insoluble in-situ azo color generation across cellulosic textiles, cotton yarns, printing pastes, and export pigments.
            </p>

            {/* Action Buttons Group */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '38px'
              }}
            >
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => onOpenRfq()}
                style={{
                  boxShadow: 'var(--shadow-red-glow)',
                  fontWeight: 700
                }}
              >
                <Sparkles size={18} />
                <span>Request Quotation / RFQ</span>
              </button>

              <Link
                to="/products"
                className="btn btn-secondary btn-lg"
                style={{
                  fontWeight: 600
                }}
              >
                <span>Browse Catalog</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/shade-card"
                className="btn btn-outline-red btn-lg"
                style={{
                  fontWeight: 600
                }}
              >
                <span>Shade Card</span>
              </Link>
            </div>

            {/* Quick Technical Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                borderTop: '1px solid var(--brand-grey-light)',
                paddingTop: '24px'
              }}
              className="hero-highlights"
            >
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-red)' }}>
                  28+
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand-grey-medium)', lineHeight: 1.35 }}>
                  Years Manufacturing
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                  3,000+
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand-grey-medium)', lineHeight: 1.35 }}>
                  MT Annual Capacity
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                  5,500+
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand-grey-medium)', lineHeight: 1.35 }}>
                  Global Textile Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Precision Facility Card & Authentic Gate Photo */}
          <div>
            <div
              className="card-clean hero-facility-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 45px -15px rgba(15, 23, 42, 0.12)',
                border: '1px solid var(--brand-grey-light)'
              }}
            >
              {/* Plant Entrance Photo */}
              <div
                style={{
                  position: 'relative',
                  height: '270px',
                  borderRadius: 'calc(var(--radius-lg) - 6px)',
                  overflow: 'hidden',
                  marginBottom: '18px',
                  backgroundColor: '#0F172A',
                  border: '1px solid var(--brand-grey-light)'
                }}
              >
                <img
                  src="/images/plant_facility_exterior.jpg"
                  alt="Harihar Chemicals Manufacturing Facility - Plot J-5248 GIDC Ankleshwar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <Building2 size={13} color="var(--brand-red)" />
                  Plot J-5248 • G.I.D.C. Ankleshwar
                </div>


              </div>

              {/* Technical Specifications Matrix Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 20px',
                  border: '1px solid var(--brand-grey-light)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Industrial Facility Parameters
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--brand-red)', fontWeight: 700 }}>
                    Audited 2026
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--brand-grey-slate)' }}>Quality Management:</span>
                    <span style={{ fontWeight: 700, color: 'var(--brand-grey-dark)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={14} color="#16A34A" /> ISO 9001:2015
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--brand-grey-slate)' }}>In-House QC Testing:</span>
                    <span style={{ fontWeight: 700, color: 'var(--brand-grey-dark)' }}>
                      Auto IR Dyeing &amp; UV-VIS
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--brand-grey-slate)' }}>Substantivity Range:</span>
                    <span style={{ fontWeight: 700, color: 'var(--brand-red)' }}>
                      10% to 40% (AS-SW)
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--brand-grey-slate)' }}>Export Logistics:</span>
                    <span style={{ fontWeight: 700, color: 'var(--brand-grey-dark)' }}>
                      Harihar Impex &amp; Global Network
                    </span>
                  </div>
                </div>

                {/* Instant Download Quick Strip */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginTop: '16px',
                    paddingTop: '14px',
                    borderTop: '1px dashed var(--brand-grey-light)'
                  }}
                >
                  <a
                    href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px 12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--brand-grey-light)',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--brand-grey-dark)',
                      textDecoration: 'none',
                      transition: '0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--brand-red)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--brand-grey-light)'}
                  >
                    <Download size={13} color="var(--brand-red)" />
                    Shade Card (PDF)
                  </a>

                  <a
                    href="/docs/Harihar_Chemicals_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px 12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--brand-grey-light)',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--brand-grey-dark)',
                      textDecoration: 'none',
                      transition: '0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--brand-red)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--brand-grey-light)'}
                  >
                    <Download size={13} color="var(--brand-red)" />
                    Brochure (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 576px) {
          .hero-highlights {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
