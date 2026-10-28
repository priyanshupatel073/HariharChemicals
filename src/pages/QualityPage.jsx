import React from 'react';
import PageBanner from '../components/PageBanner';
import QualityAssurance from '../components/QualityAssurance';
import { Award, ShieldCheck, FileCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function QualityPage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="ANALYTICAL RIGOR &amp; ACCREDITATION"
        title="Quality Control &amp; Laboratory Standards"
        subtitle="Every kilogram of Naphthol and Fast Base produced at Harihar Chemicals undergoes spectrophotometric validation, automatic IR dyeing, and thin-layer chromatography to ensure international compliance."
        onOpenRfq={() => onOpenRfq()}
      />

      {/* Main Quality Assurance & Certificates Showcase */}
      <QualityAssurance />

      {/* Quality Policy & Assurance Guarantee */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0', borderTop: '1px solid var(--brand-grey-light)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--brand-red-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '44px',
              border: '1px solid var(--brand-red-border)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '36px',
              alignItems: 'center'
            }}
            className="quality-guarantee-grid"
          >
            <div>
              <span className="section-tag" style={{ backgroundColor: '#FFFFFF', marginBottom: '12px' }}>
                <ShieldCheck size={14} color="var(--brand-red)" />
                <span>LOT-BY-LOT COA CERTIFICATION</span>
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginBottom: '12px' }}>
                Our 100% Quality Assurance Guarantee
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '20px' }}>
                A physical Certificate of Analysis (COA) specifying verified purity assay, physical appearance, melting point, loss on drying, and spectrophotometric Delta-E is dispatched with every commercial shipment.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenRfq()}
                >
                  <Sparkles size={16} />
                  <span>Request Sample COA for Your Lot</span>
                </button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--brand-grey-light)'
              }}
            >
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '14px' }}>
                Standard Laboratory Parameters Tested:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--brand-grey-slate)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--brand-red)" />
                  <span>HPLC &amp; Titrimetric Assay Purity (≥ 98.0% - 99.5%)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--brand-red)" />
                  <span>Moisture Content / Loss on Drying (LOD ≤ 0.5%)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--brand-red)" />
                  <span>Substantivity Percentage Calibration (Cotton 10%–40%)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--brand-red)" />
                  <span>Colorimetric Delta-E tolerance on 24-beaker IR Machine</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .quality-guarantee-grid {
              grid-template-columns: 1fr !important;
              padding: 24px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

