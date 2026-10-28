import React, { useState } from 'react';
import { NAPHTHOL_PRODUCTS, FAST_BASE_PRODUCTS } from '../data/chemicalsData';
import { 
  Search, 
  Copy, 
  Check, 
  FileDown, 
  ArrowRight, 
  Sparkles, 
  FlaskConical, 
  Filter, 
  X, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Download
} from 'lucide-react';

export default function ProductCatalog({ onSelectProductForRfq }) {
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL', 'NAPHTHOLS', 'FAST_BASES'
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCas, setCopiedCas] = useState(null);
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const handleCopyCas = (cas) => {
    navigator.clipboard.writeText(cas);
    setCopiedCas(cas);
    setTimeout(() => setCopiedCas(null), 2000);
  };

  // Combine products with category tags
  const allProducts = [
    ...NAPHTHOL_PRODUCTS.map(p => ({ ...p, category: 'Naphthols (Harithols)' })),
    ...FAST_BASE_PRODUCTS.map(p => ({ ...p, category: 'Fast Colour Bases' }))
  ];

  const filteredProducts = allProducts.filter((p) => {
    // Tab filter
    if (activeTab === 'NAPHTHOLS' && p.category !== 'Naphthols (Harithols)') return false;
    if (activeTab === 'FAST_BASES' && p.category !== 'Fast Colour Bases') return false;

    // Search query filter
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;

    return (
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      (p.cas && p.cas.toLowerCase().includes(q)) ||
      (p.ciNo && p.ciNo.toLowerCase().includes(q)) ||
      (p.hsnCode && p.hsnCode.toLowerCase().includes(q)) ||
      (p.chemicalName && p.chemicalName.toLowerCase().includes(q)) ||
      (p.shadeRange && p.shadeRange.toLowerCase().includes(q))
    );
  });

  return (
    <section id="catalog" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FlaskConical size={14} />
            <span>Industrial Chemical Portfolio</span>
          </div>
          <h2 className="section-title">
            Filterable Azoic Catalog &amp; Technical Specifications
          </h2>
          <p className="section-description">
            Explore Harihar's high-purity Harithol Naphthols and diazo Fast Colour Bases. 
            Search across official Colour Index (C.I.) numbers, CAS registry, HSN tariff codes, and dissolving methods.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '36px',
            backgroundColor: '#FFFFFF',
            padding: '16px 20px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--brand-grey-light)'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setActiveTab('ALL')}
              style={{
                padding: '9px 18px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'ALL' ? 700 : 500,
                backgroundColor: activeTab === 'ALL' ? 'var(--brand-red)' : 'var(--bg-tertiary)',
                color: activeTab === 'ALL' ? '#FFFFFF' : 'var(--brand-grey-slate)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
            >
              All Chemicals ({allProducts.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('NAPHTHOLS')}
              style={{
                padding: '9px 18px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'NAPHTHOLS' ? 700 : 500,
                backgroundColor: activeTab === 'NAPHTHOLS' ? 'var(--brand-red)' : 'var(--bg-tertiary)',
                color: activeTab === 'NAPHTHOLS' ? '#FFFFFF' : 'var(--brand-grey-slate)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
            >
              Naphthols / Harithols ({NAPHTHOL_PRODUCTS.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('FAST_BASES')}
              style={{
                padding: '9px 18px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'FAST_BASES' ? 700 : 500,
                backgroundColor: activeTab === 'FAST_BASES' ? 'var(--brand-red)' : 'var(--bg-tertiary)',
                color: activeTab === 'FAST_BASES' ? '#FFFFFF' : 'var(--brand-grey-slate)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
            >
              Fast Colour Bases ({FAST_BASE_PRODUCTS.length})
            </button>
          </div>

          {/* Search Input Box */}
          <div style={{ position: 'relative', minWidth: '280px', flex: '1 0 260px', maxWidth: '420px' }}>
            <Search
              size={17}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--brand-grey-medium)'
              }}
            />
            <input
              type="text"
              placeholder="Search by Name, CAS, C.I. No, HSN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '40px' }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--brand-grey-medium)'
                }}
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px'
          }}
          className="catalog-grid"
        >
          {filteredProducts.map((product) => {
            const isNaphthol = product.category.includes('Naphthol');
            return (
              <div
                key={product.id}
                className="card-clean"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                  position: 'relative'
                }}
              >
                {/* Top Strip: Category & C.I. Badge */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: isNaphthol ? 'var(--brand-red)' : '#0284C7',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: isNaphthol ? 'var(--brand-red)' : '#0284C7'
                        }}
                      />
                      {product.category}
                    </span>

                    <span className="ci-badge">
                      C.I. {product.ciNo}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3
                    style={{
                      fontSize: '1.24rem',
                      fontWeight: 800,
                      color: 'var(--brand-grey-dark)',
                      marginBottom: '6px',
                      lineHeight: 1.3
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Chemical IUPAC Name */}
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--brand-grey-slate)',
                      marginBottom: '16px',
                      lineHeight: 1.45,
                      fontStyle: 'italic'
                    }}
                  >
                    {product.chemicalName}
                  </p>

                  {/* Technical Identifiers Grid */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                      marginBottom: '16px'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block', textTransform: 'uppercase' }}>
                        CAS Registry
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                        <span className="cas-tag" style={{ padding: '1px 5px', fontSize: '0.78rem' }}>
                          {product.cas}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCas(product.cas)}
                          title="Copy CAS"
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: copiedCas === product.cas ? '#16A34A' : 'var(--brand-grey-medium)',
                            padding: '2px'
                          }}
                        >
                          {copiedCas === product.cas ? <Check size={13} /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block', textTransform: 'uppercase' }}>
                        HSN Tariff
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand-grey-dark)' }}>
                        {product.hsnCode}
                      </span>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block', textTransform: 'uppercase' }}>
                        Formula
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand-grey-slate)' }}>
                        {product.formula}
                      </span>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block', textTransform: 'uppercase' }}>
                        {isNaphthol ? 'Substantivity' : 'Purity Assay'}
                      </span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isNaphthol ? 'var(--brand-red)' : '#16A34A' }}>
                        {isNaphthol ? product.substantivity : product.purity}
                      </span>
                    </div>
                  </div>

                  {/* Shade Swatch Preview */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '6px',
                        backgroundColor: product.primaryShadeHex || product.shadeHex,
                        border: '1px solid rgba(0,0,0,0.15)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    <div style={{ fontSize: '0.82rem', color: 'var(--brand-grey-slate)' }}>
                      <strong>Target Shade:</strong> {product.shadeRange || product.fastnessScore}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Strip */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--brand-grey-light)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(product)}
                    style={{
                      flex: 1,
                      padding: '9px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--brand-grey-light)',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: '0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--brand-red)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--brand-grey-light)'}
                  >
                    <span>Full Specs</span>
                    <ChevronRight size={14} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onSelectProductForRfq(product)}
                    style={{
                      padding: '9px 14px',
                      fontWeight: 700,
                      fontSize: '0.84rem'
                    }}
                  >
                    <span>Request RFQ</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--brand-grey-light)'
            }}
          >
            <FlaskConical size={42} color="var(--brand-red)" style={{ marginBottom: '14px', opacity: 0.6 }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
              No chemical matching "{searchQuery}" found
            </h3>
            <p style={{ color: 'var(--brand-grey-slate)', marginBottom: '18px' }}>
              Try searching by generic code (e.g., AS-G, Yellow GC, 37505) or clear filters.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => { setSearchQuery(''); setActiveTab('ALL'); }}
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Technical Detail Modal */}
        {selectedProductModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedProductModal(null)}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '720px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '36px',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--brand-grey-medium)',
                  padding: '4px'
                }}
              >
                <X size={22} />
              </button>

              {/* Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span className="ci-badge">C.I. {selectedProductModal.ciNo}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--brand-red)', fontWeight: 700 }}>
                  HSN {selectedProductModal.hsnCode}
                </span>
              </div>

              <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginBottom: '6px' }}>
                {selectedProductModal.name}
              </h2>
              <p style={{ fontStyle: 'italic', color: 'var(--brand-grey-slate)', marginBottom: '24px' }}>
                {selectedProductModal.chemicalName}
              </p>

              {/* Chemical Parameters Table */}
              <div style={{ marginBottom: '24px', border: '1px solid var(--brand-grey-light)', borderRadius: '8px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--brand-grey-light)', backgroundColor: 'var(--bg-tertiary)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700, width: '40%' }}>CAS Registry Number</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)' }}>{selectedProductModal.cas}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--brand-grey-light)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>Molecular Formula</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)' }}>{selectedProductModal.formula}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--brand-grey-light)', backgroundColor: 'var(--bg-tertiary)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>Molecular Weight</td>
                      <td style={{ padding: '10px 14px' }}>{selectedProductModal.molecularWeight}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--brand-grey-light)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>Physical Appearance</td>
                      <td style={{ padding: '10px 14px' }}>{selectedProductModal.appearance}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--brand-grey-light)', backgroundColor: 'var(--bg-tertiary)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>Standard Packaging</td>
                      <td style={{ padding: '10px 14px' }}>{selectedProductModal.packing}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>Recommended End Uses</td>
                      <td style={{ padding: '10px 14px' }}>{selectedProductModal.recommendedApplications || selectedProductModal.primaryApplications}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Dissolving Recipe (For Naphthols) */}
              {selectedProductModal.hotDissolving && (
                <div style={{ backgroundColor: 'var(--brand-red-light)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--brand-red-dark)', marginBottom: '8px' }}>
                    Standard Dyehouse Dissolving Recipe (Per 1 kg Harithol)
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', fontSize: '0.82rem' }}>
                    <div>TRO (50%): <strong>{selectedProductModal.hotDissolving.troKg} kg</strong></div>
                    <div>Hot Water: <strong>{selectedProductModal.hotDissolving.hotWaterL} Litres</strong></div>
                    <div>Caustic Soda (40%): <strong>{selectedProductModal.hotDissolving.causticSodaL} Litres</strong></div>
                    <div>Formaldehyde: <strong>{selectedProductModal.hotDissolving.formaldehydeG} gm/l</strong></div>
                    <div>Max Salt: <strong>{selectedProductModal.hotDissolving.maxSalt} g/l</strong></div>
                  </div>
                </div>
              )}

              {/* Modal CTA Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <a
                  href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.88rem' }}
                >
                  <Download size={15} />
                  Download Shade Card
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    const prod = selectedProductModal;
                    setSelectedProductModal(null);
                    onSelectProductForRfq(prod);
                  }}
                  style={{ fontSize: '0.88rem' }}
                >
                  <Sparkles size={15} />
                  Request Batch Quotation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .catalog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
