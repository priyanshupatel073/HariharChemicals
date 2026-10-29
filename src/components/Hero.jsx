import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  FileDown, 
  ShieldCheck, 
  Award, 
  Layers, 
  CheckCircle2, 
  Activity, 
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
        backgroundImage: "url('/images/hero_factory_bg_web.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '68% 25%',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        borderBottom: '1px solid var(--brand-grey-light)',
        padding: '50px 0 50px 0'
      }}
    >
      {/* White Color Fade from Left to Right - Pure white behind text on left, fading smoothly so the HARIHAR CHEMICALS company sign & entrance on right are 100% visible, sharp & clear with zero text overlap */}
      <div
        className="hero-overlay-fade"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 30%, rgba(255, 255, 255, 0.88) 36%, rgba(255, 255, 255, 0.18) 42%, rgba(255, 255, 255, 0) 47%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Subtle Crimson Radial Ambient Glow on left */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '2%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Left-Aligned Industrial Content: Confined to maxWidth: 510px to guarantee ZERO text overlap with the company name on the right */}
        <div style={{ maxWidth: '510px' }}>
          {/* Shifted Facility Location & Operational Status Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 13px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--brand-red-light)',
                border: '1px solid var(--brand-red-border)'
              }}
            >
              <Building2 size={13} color="var(--brand-red)" />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-red-dark)'
                }}
              >
                Plot J-5248 • G.I.D.C. Ankleshwar
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 13px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(211, 47, 47, 0.08)',
                border: '1px solid rgba(211, 47, 47, 0.22)',
                fontSize: '0.76rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--brand-red)'
              }}
            >
              ● Active Synthesis Units
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 13px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(15, 23, 42, 0.04)',
                border: '1px solid var(--brand-grey-light)',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--brand-grey-slate)'
              }}
            >
              <CheckCircle2 size={13} color="#16A34A" /> ISO 9001:2015
            </div>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--brand-grey-dark)',
              marginBottom: '18px'
            }}
          >
            Precision <span style={{ color: 'var(--brand-red)' }}>Naphthols</span>, Fast Bases &amp; Azoic Colorants.
          </h1>

          {/* Sub-Headline */}
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.62,
              color: 'var(--brand-grey-slate)',
              marginBottom: '26px'
            }}
          >
            Manufacturer and global exporter of high-yield <strong>Harithols (Naphthols)</strong> and diazo <strong>Fast Colour Bases</strong>. 
            Engineered for insoluble in-situ azo color generation across cellulosic textiles, cotton yarns, and printing pastes.
          </p>

          {/* Action Buttons Group */}
          <div
            className="hero-buttons-group"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '28px'
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenRfq()}
              style={{
                boxShadow: 'var(--shadow-red-glow)',
                fontWeight: 700,
                padding: '12px 22px'
              }}
            >
              <Sparkles size={17} />
              <span>Request Quotation / RFQ</span>
            </button>

            <Link
              to="/products"
              className="btn btn-secondary"
              style={{
                fontWeight: 600,
                padding: '12px 20px'
              }}
            >
              <span>Browse Catalog</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/shade-card"
              className="btn btn-outline-red"
              style={{
                fontWeight: 600,
                padding: '12px 20px'
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
              gap: '14px',
              borderTop: '1px solid var(--brand-grey-light)',
              paddingTop: '18px',
              marginBottom: '24px'
            }}
            className="hero-highlights"
          >
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-red)' }}>
                28+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--brand-grey-medium)', lineHeight: 1.3 }}>
                Years Manufacturing
              </div>
            </div>

            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                3,000+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--brand-grey-medium)', lineHeight: 1.3 }}>
                MT Annual Capacity
              </div>
            </div>

            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                5,500+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--brand-grey-medium)', lineHeight: 1.3 }}>
                Global Textile Clients
              </div>
            </div>
          </div>

          {/* Shifted Industrial Facility Parameters & Document Box */}
          <div
            className="hero-parameters-bar"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              borderRadius: 'var(--radius-md)',
              padding: '13px 16px',
              border: '1px solid var(--brand-grey-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '10px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--brand-grey-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Building2 size={14} color="var(--brand-red)" />
                <span style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Facility Parameters
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: 'var(--brand-red)',
                    backgroundColor: 'var(--brand-red-light)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}
                >
                  Audited 2026
                </span>
              </div>

              {/* Instant Download Quick Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a
                  href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--brand-grey-light)',
                    borderRadius: '5px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--brand-grey-dark)',
                    textDecoration: 'none',
                    transition: '0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--brand-red)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--brand-grey-light)'}
                >
                  <Download size={11} color="var(--brand-red)" />
                  Shade Card (PDF)
                </a>

                <a
                  href="/docs/Harihar_Chemicals_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--brand-grey-light)',
                    borderRadius: '5px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--brand-grey-dark)',
                    textDecoration: 'none',
                    transition: '0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--brand-red)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--brand-grey-light)'}
                >
                  <Download size={11} color="var(--brand-red)" />
                  Brochure (PDF)
                </a>
              </div>
            </div>

            {/* 4 Technical Parameter Specifications */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px 16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Quality Management
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--brand-grey-dark)', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <CheckCircle2 size={14} color="#16A34A" /> ISO 9001:2015
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 600, textTransform: 'uppercase' }}>
                  In-House QC Testing
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                  Auto IR Dyeing &amp; UV-VIS
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Substantivity Range
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--brand-red)', marginTop: '2px' }}>
                  10% to 40% (AS-SW Grade)
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Export Logistics
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                  Harihar Impex &amp; Global Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 992px) {
          #hero-section {
            background-position: center top !important;
            padding: 38px 0 44px 0 !important;
          }
          .hero-overlay-fade {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 55%, rgba(255, 255, 255, 0.88) 100%) !important;
          }
        }
        @media (max-width: 576px) {
          .hero-buttons-group .btn-primary {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-buttons-group .btn-secondary,
          .hero-buttons-group .btn-outline-red {
            flex: 1 1 calc(50% - 6px) !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 10px 12px !important;
            font-size: 0.86rem !important;
          }
          .hero-highlights {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
          .hero-highlights > div > div:first-child {
            font-size: 1.35rem !important;
          }
          .hero-highlights > div > div:last-child {
            font-size: 0.7rem !important;
          }
        }
        @media (max-width: 380px) {
          .hero-highlights {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

