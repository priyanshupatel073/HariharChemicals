import React from 'react';
import PageBanner from '../components/PageBanner';
import MetricsBar from '../components/MetricsBar';
import { COMPANY_INFO } from '../data/chemicalsData';
import { 
  Building2, 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  Globe2, 
  Sparkles,
  Phone,
  Mail,
  Camera
} from 'lucide-react';

export default function AboutPage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="28+ YEARS INDUSTRIAL HERITAGE"
        title="About Harihar Chemicals"
        subtitle="A pioneer in the synthesis and export of high-purity Naphthols, Fast Bases, and Azoic dyestuffs from Ankleshwar, Gujarat to over 5,500 domestic and international textile partners."
        onOpenRfq={() => onOpenRfq && onOpenRfq()}
      />

      {/* Metrics Bar */}
      <MetricsBar />

      {/* Corporate Overview & Story */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '48px',
              alignItems: 'center',
              marginBottom: '72px'
            }}
            className="about-story-grid"
          >
            <div>
              <span className="section-tag">
                <Building2 size={14} />
                <span>Corporate Genesis</span>
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, color: 'var(--brand-grey-dark)', marginBottom: '18px', lineHeight: 1.25 }}>
                Dedicated to Precision Colorants for Over Two Decades
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--brand-grey-slate)', lineHeight: 1.7, marginBottom: '16px' }}>
                <strong>HARIHAR</strong> is one of the most reputed and reliable Naphthols and Bases manufacturer and exporter from India. Harihar group was established with an aim to manufacture high-performance Naphthols and Bases Dyes.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--brand-grey-slate)', lineHeight: 1.7, marginBottom: '24px' }}>
                From a start the organization has grown to the present level of technical expertise and managerial competence to cater the need of domestic and global market. One of the biggest strength of the Harihar group is its ability to develop customized products. This policy of the company has helped to be close ties and mutual trusts with customer globally, thus increasing worldwide acceptance of its products.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px 20px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--brand-red)' }}>25+ Yrs</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>Industrial Heritage</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px 20px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--brand-red)' }}>5,500+</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>Active Clients</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px 20px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--brand-red)' }}>ISO 9001</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>Quality Certified</div>
                </div>
              </div>
            </div>

            {/* Factory Gate Photo Space - Reserved for Upload */}
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                border: '2px dashed var(--brand-grey-light)',
                backgroundColor: 'var(--bg-secondary)',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  color: 'var(--brand-grey-medium)',
                  gap: '8px'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--brand-grey-light)',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-grey-medium)'
                  }}
                >
                  <Building2 size={26} color="var(--brand-red)" />
                </div>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-grey-slate)' }}>
                  Manufacturing Facility Photo Space
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)' }}>
                  Reserved for high-resolution exterior plant photography
                </span>
              </div>

              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', color: '#F87171' }}>
                  Primary Manufacturing Plant
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  Plot No. J-5248, G.I.D.C. Ankleshwar, Gujarat
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, and Values Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '28px',
              marginBottom: '64px'
            }}
            className="mission-vision-grid"
          >
            {/* Mission */}
            <div className="card-clean" style={{ padding: '36px', backgroundColor: 'var(--bg-secondary)' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--brand-red-light)',
                  color: 'var(--brand-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Target size={24} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '12px' }}>
                Our Mission
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--brand-grey-slate)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "{COMPANY_INFO.mission}"
              </p>
            </div>

            {/* Vision */}
            <div className="card-clean" style={{ padding: '36px', backgroundColor: 'var(--bg-secondary)' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--brand-red-light)',
                  color: 'var(--brand-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Eye size={24} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '12px' }}>
                Our Vision
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--brand-grey-slate)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "{COMPANY_INFO.vision}"
              </p>
            </div>
          </div>

          {/* Core Values 4-Pillars */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="section-tag">
                <HeartHandshake size={14} />
                <span>Foundational Principles</span>
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--brand-grey-dark)' }}>
                Our Operating Values
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px'
              }}
            >
              {COMPANY_INFO.values.map((v, i) => (
                <div
                  key={v.title}
                  className="card-clean"
                  style={{
                    padding: '28px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--brand-grey-light)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-red)', marginBottom: '8px' }}>
                    0{i + 1}
                  </div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-story-grid, .mission-vision-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 576px) {
            .about-story-grid > div:last-child {
              min-height: 260px !important;
            }
          }
        `}</style>
      </section>

      {/* Group Companies Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--brand-grey-light)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-tag">
              <Globe2 size={14} />
              <span>Corporate Ecosystem</span>
            </span>
            <h2 className="section-title">
              Harihar Group Companies
            </h2>
            <p className="section-description">
              A synergistic industrial conglomerate encompassing chemical synthesis, international export operations, and specialized commodity trading.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {COMPANY_INFO.groupCompanies.map((comp) => (
              <div
                key={comp.name}
                className="card-clean"
                style={{
                  padding: '32px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--brand-grey-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="cas-tag" style={{ color: 'var(--brand-red)', fontWeight: 700, marginBottom: '12px' }}>
                    {comp.location}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginTop: '8px', marginBottom: '6px' }}>
                    {comp.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-red)', marginBottom: '14px' }}>
                    {comp.role}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6 }}>
                    {comp.description}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed var(--brand-grey-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)' }}>Corporate Entity</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-grey-dark)' }}>Harihar Group</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

