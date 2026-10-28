import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/chemicalsData';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Clock, 
  Activity, 
  Eye, 
  X, 
  Download,
  FileCheck,
  Building,
  Sparkles
} from 'lucide-react';

export default function QualityAssurance() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  const labProtocols = [
    {
      title: "Automatic Infra-Red (IR) Dyeing Verification",
      desc: "Every synthesis batch is dyed against our master standard on cellulosic yarn cones using computer-controlled IR pyrometers to guarantee 100% shade reproduction.",
      metric: "Delta-E < 0.50 Strict Color Tolerance"
    },
    {
      title: "Double-Beam UV-VIS Spectrophotometry",
      desc: "Quantitative photometric assay validation across the 190–1100 nm spectrum ensuring accurate dye molecule purity and optical density.",
      metric: "99.8% Lot Purity Compliance"
    },
    {
      title: "Thin Layer Chromatography (TLC) Reaction Tracking",
      desc: "Multi-solvent TLC plates are evaluated under UV chambers at every condensation and diazotisation stage, ensuring zero free amines or unreacted intermediates.",
      metric: "Zero Unreacted Intermediates"
    },
    {
      title: "Comprehensive ISO Fastness Suite",
      desc: "Standardized testing on Launder-Ometer and Xenon Arc chambers for Light (ISO 105-B02), Soda Boil (ISO 105-C06), Chlorine, and Hot Pressing.",
      metric: "ISO 105 International Benchmark"
    }
  ];

  return (
    <section id="quality" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Analytical Rigor &amp; Compliance</span>
          </div>
          <h2 className="section-title">
            In-House Quality Control &amp; Accredited Certifications
          </h2>
          <p className="section-description">
            Harihar is one of the premier dyestuff manufacturers in India to operate an integrated quality control laboratory equipped with automatic infra-red dyeing machines, UV-VIS spectrophotometers, and ISO 9001:2015 management systems.
          </p>
        </div>

        {/* 4 Laboratory Analytical Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '56px'
          }}
        >
          {labProtocols.map((p, idx) => (
            <div
              key={p.title}
              className="card-clean"
              style={{
                padding: '28px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--brand-red-light)',
                    color: 'var(--brand-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    border: '1px solid var(--brand-red-border)'
                  }}
                >
                  <Activity size={20} />
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '10px', lineHeight: 1.35 }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {p.desc}
                </p>
              </div>

              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-tertiary)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--brand-red-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid var(--brand-grey-light)'
                }}
              >
                <CheckCircle2 size={13} color="var(--brand-red)" />
                <span>{p.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Accredited Certificates Showcase */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--brand-grey-dark)' }}>
              Official Government &amp; Industry Accreditations
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', marginTop: '4px' }}>
              Click any certificate below to inspect authentic government registrations and quality seals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
            className="certs-grid"
          >
            {COMPANY_INFO.certifications.slice(0, 3).map((cert) => (
              <div
                key={cert.title}
                className="card-clean"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--brand-grey-light)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setActiveCertModal(cert)}
              >
                {/* Certificate Scan Preview */}
                <div
                  style={{
                    height: '240px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#F1F5F9'
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '12px',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Eye size={12} /> Click to Inspect
                  </div>
                </div>

                {/* Certificate Meta Details */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-red)' }}>
                      {cert.issuer}
                    </span>
                    <span className="cas-tag" style={{ fontSize: '0.74rem' }}>
                      {cert.certNumber}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
                    {cert.title}
                  </h4>

                  <p style={{ fontSize: '0.84rem', color: 'var(--brand-grey-slate)', lineHeight: 1.5 }}>
                    {cert.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Fullscreen Lightbox Modal */}
        {activeCertModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 2100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setActiveCertModal(null)}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '28px',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertModal(null)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--brand-grey-medium)',
                  padding: '4px'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ marginBottom: '16px' }}>
                <span className="section-tag" style={{ marginBottom: '8px' }}>
                  {activeCertModal.issuer}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                  {activeCertModal.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)' }}>
                  {activeCertModal.scope}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  border: '1px solid var(--brand-grey-light)',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}
              >
                <img
                  src={activeCertModal.image}
                  alt={activeCertModal.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '520px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--brand-grey-medium)' }}>
                  Official Registry: <strong>{activeCertModal.certNumber}</strong>
                </span>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveCertModal(null)}
                >
                  Close Certificate Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
