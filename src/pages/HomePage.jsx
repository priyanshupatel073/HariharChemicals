import React from 'react';
import Hero from '../components/Hero';
import MetricsBar from '../components/MetricsBar';
import ProductCatalog from '../components/ProductCatalog';
import ShadeCardExplorer from '../components/ShadeCardExplorer';
import EquipmentExplorer from '../components/EquipmentExplorer';
import QualityAssurance from '../components/QualityAssurance';
import ApplicationsSection from '../components/ApplicationsSection';
import DyeingProcessGuide from '../components/DyeingProcessGuide';
import PackagingLogistics from '../components/PackagingLogistics';
import { COMPANY_INFO } from '../data/chemicalsData';
import { Phone, Mail, MapPin, Sparkles, FileDown, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function HomePage({ onOpenRfq }) {
  return (
    <div>
      {/* 1. Hero with Molecular Canvas Background & Plant Entrance Card */}
      <Hero onOpenRfq={onOpenRfq} />

      {/* 2. Key Operational Metrics Bar */}
      <MetricsBar />

      {/* 3. Filterable Chemical Catalog */}
      <ProductCatalog onSelectProductForRfq={onOpenRfq} />

      {/* 4. Interactive Shade Card & Recipe Coupling Matrix */}
      <ShadeCardExplorer onSelectRecipeForRfq={onOpenRfq} />

      {/* 5. Manufacturing Suites & Plant Equipment */}
      <EquipmentExplorer />

      {/* 6. Quality Control Laboratory & Authentic Certificates */}
      <QualityAssurance />

      {/* 7. Industrial Textile Applications */}
      <ApplicationsSection onSelectApplicationForRfq={onOpenRfq} />

      {/* 8. Technical Dyeing & Diazotisation Guide */}
      <DyeingProcessGuide />

      {/* 9. Certified Export Packaging & Logistics */}
      <PackagingLogistics onOpenRfq={onOpenRfq} />

      {/* 10. Direct Plant Director Contact Banner */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          padding: '80px 0',
          borderTop: '1px solid var(--brand-grey-light)'
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--brand-grey-dark)',
              borderRadius: 'var(--radius-lg)',
              color: '#FFFFFF',
              padding: '48px 56px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              alignItems: 'center',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="home-contact-card"
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(211, 47, 47, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div>
              <span className="section-tag" style={{ backgroundColor: 'rgba(211, 47, 47, 0.2)', color: '#FFCDD2', border: '1px solid rgba(211, 47, 47, 0.4)', marginBottom: '14px' }}>
                DIRECT FACTORY CONTACT
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.2 }}>
                Connect With Our Chemical Technical Team
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Looking for customized substantivity formulations, bulk container pricing, or mill shade trials? Mr. Prakash C Rawal and our Ankleshwar team are ready to assist.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenRfq()}
                >
                  <Sparkles size={16} />
                  <span>Request Official RFQ</span>
                </button>

                <a
                  href="https://wa.me/917041779000?text=Hello%20Harihar%20Chemicals,%20I%20am%20interested%20in%20your%20Naphthols%20and%20Fast%20Bases."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>WhatsApp Director</span>
                </a>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.88rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                  <strong>Plant Facility:</strong><br/>
                  Plot No.: J-5248, Near Meghmani Industries, Khwaja Chokdi, G.I.D.C., Ankleshwar - 393 002. Gujarat (INDIA)
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>
                  <strong>Director Mobile:</strong> +91 70417 79000
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>
                  <strong>Email:</strong> hariharchem3@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .home-contact-card {
              grid-template-columns: 1fr !important;
              padding: 32px 24px !important;
            }
          }
          @media (max-width: 576px) {
            .home-contact-card {
              padding: 24px 16px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

