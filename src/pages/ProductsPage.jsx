import React from 'react';
import PageBanner from '../components/PageBanner';
import ProductCatalog from '../components/ProductCatalog';
import { FileDown, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProductsPage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="CELLULOSIC COLOR CHEMISTRY"
        title="Naphthols &amp; Fast Bases Catalog"
        subtitle="Explore high-purity Harithols and diazo Fast Colour Bases synthesized in GIDC Ankleshwar. Filterable by CAS number, C.I. index, and dissolving recipes."
        onOpenRfq={() => onOpenRfq()}
      />

      {/* Main Filterable Chemical Catalog */}
      <ProductCatalog onSelectProductForRfq={onOpenRfq} />

      {/* Technical PDF Download Strip */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '60px 0', borderTop: '1px solid var(--brand-grey-light)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--brand-red-light)',
              borderRadius: 'var(--radius-md)',
              padding: '36px',
              border: '1px solid var(--brand-red-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <span className="section-tag" style={{ backgroundColor: '#FFFFFF', marginBottom: '8px' }}>
                TECHNICAL DOCUMENTATION
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginTop: '4px' }}>
                Download Complete 15-Page Shade Card &amp; Recipe Booklet
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', marginTop: '4px' }}>
                Includes comprehensive liquor bath concentrations, substantivity factors, and ISO fastness ratings.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileDown size={16} />
                <span>Download Official Shade Card (PDF)</span>
              </a>

              <a
                href="/docs/Harihar_Chemicals_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FileDown size={16} color="var(--brand-red)" />
                <span>Download Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

