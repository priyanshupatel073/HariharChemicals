import React from 'react';
import { PACKAGING_CATALOG, COMPANY_INFO } from '../data/chemicalsData';
import { 
  Package, 
  Truck, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2,
  Boxes,
  Camera
} from 'lucide-react';

export default function PackagingLogistics({ onOpenRfq }) {
  return (
    <section id="packaging" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Package size={14} />
            <span>Packaging &amp; Global Shipping</span>
          </div>
          <h2 className="section-title">
            International Export Standards &amp; Hermetic Packaging
          </h2>
          <p className="section-description">
            Conforming to stringent maritime and air-cargo regulations. Every batch undergoes dedicated pre-shipment sealing inspection by our QA department before dispatch from GIDC Ankleshwar.
          </p>
        </div>

        {/* Packaging Showcase Image & Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '36px',
            alignItems: 'center',
            marginBottom: '48px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            border: '1px solid var(--brand-grey-light)',
            boxShadow: 'var(--shadow-sm)'
          }}
          className="packaging-hero-grid"
        >
          {/* Packaging Photo Space - Reserved for Upload */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '2px dashed var(--brand-grey-light)',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-sm)',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '28px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                backgroundColor: 'var(--brand-red-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-red)',
                marginBottom: '12px'
              }}
            >
              <Package size={26} />
            </div>
            <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--brand-grey-dark)' }}>
              Export Packaging Photo Space
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)', marginTop: '4px', maxWidth: '300px' }}>
              Reserved for 1kg Pouch, 25kg Bag, 25kg Fiber Drum &amp; 100kg HDPE Drum photography
            </div>
          </div>

          {/* Logistics Capabilities */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '4px', backgroundColor: 'var(--brand-red-light)', color: 'var(--brand-red-dark)', fontSize: '0.78rem', fontWeight: 800, marginBottom: '14px' }}>
              <ShieldCheck size={14} /> ZERO CONTAMINATION GUARANTEE
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginBottom: '14px' }}>
              Four Flexible Packaging Formats Tailored to Client Specifications
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '20px' }}>
              Packaging has kept pace with our evolving international markets. Equipped with a dedicated inspection team, all containers are fitted with tamper-evident seals, moisture-barrier poly-liners, and export container palletization.
            </p>

            <div className="packaging-specs-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-grey-dark)' }}>Sample to FCL Lots</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--brand-grey-slate)' }}>From 1 kg trials to 20+ MT full container loads</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-grey-dark)' }}>Customized Branding</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--brand-grey-slate)' }}>Altra Colours &amp; Harithol branded or neutral bags</div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenRfq()}
            >
              <Sparkles size={16} />
              <span>Inquire for Custom Packaging &amp; Freight</span>
            </button>
          </div>
        </div>

        {/* 4 Packaging Cards */}
        <div
          className="packaging-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {PACKAGING_CATALOG.map((pkg) => (
            <div
              key={pkg.type}
              className="card-clean"
              style={{
                padding: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--brand-grey-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span className="cas-tag" style={{ color: 'var(--brand-red)', fontWeight: 700, marginBottom: '10px' }}>
                  Gross Wt: {pkg.grossWeight}
                </span>

                <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginTop: '6px', marginBottom: '8px' }}>
                  {pkg.type}
                </h4>

                <p style={{ fontSize: '0.84rem', color: 'var(--brand-grey-slate)', lineHeight: 1.55, marginBottom: '14px' }}>
                  {pkg.suitability}
                </p>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)', borderTop: '1px dashed var(--brand-grey-light)', paddingTop: '10px' }}>
                <strong>Material:</strong> {pkg.material}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .packaging-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .packaging-hero-grid {
            padding: 20px 16px !important;
          }
          .packaging-specs-2col {
            grid-template-columns: 1fr !important;
          }
          .packaging-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

