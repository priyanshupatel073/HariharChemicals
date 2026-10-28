import React from 'react';
import PageBanner from '../components/PageBanner';
import DyeingProcessGuide from '../components/DyeingProcessGuide';
import { NAPHTHOL_PRODUCTS, FAST_BASE_PRODUCTS } from '../data/chemicalsData';
import { Flame, Droplets, Download, FileDown, Sparkles } from 'lucide-react';

export default function DyeingGuidePage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="MASTER DYER RECIPES &amp; PROTOCOLS"
        title="Dyeing &amp; Diazotisation Technical Guide"
        subtitle="Step-by-step industrial recipes for preparing Harithol solutions, hot &amp; cold dissolving procedures, stoichiometric diazotisation, and aftertreatments."
        onOpenRfq={() => onOpenRfq()}
      />

      {/* Main Dyeing Process Guide */}
      <DyeingProcessGuide />

      {/* Official Hot Dissolving Reference Table */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0', borderTop: '1px solid var(--brand-grey-light)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-tag">
              <Flame size={14} />
              <span>Official Dyehouse Recipe</span>
            </span>
            <h2 className="section-title">
              Quantity of Chemicals Required for Hot Dissolving (Per 1 kg Harithol)
            </h2>
            <p className="section-description">
              Direct reproduction of Page 1 technical tables. Ensure exact quantities of Turkey Red Oil and Caustic Soda for maximum bath stability.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--brand-grey-light)',
              overflowX: 'auto',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '48px'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--brand-grey-dark)', color: '#FFFFFF', borderBottom: '2px solid var(--brand-red)' }}>
                  <th style={{ padding: '14px 16px' }}>Harithol Grade</th>
                  <th style={{ padding: '14px 16px' }}>TRO 50% (Kg)</th>
                  <th style={{ padding: '14px 16px' }}>Hot Water (Litres)</th>
                  <th style={{ padding: '14px 16px' }}>Caustic Soda 40% (Litres)</th>
                  <th style={{ padding: '14px 16px' }}>Formaldehyde (gm/l)</th>
                  <th style={{ padding: '14px 16px' }}>Max Salt (g/l)</th>
                  <th style={{ padding: '14px 16px' }}>Substantivity Approx.</th>
                </tr>
              </thead>
              <tbody>
                {NAPHTHOL_PRODUCTS.filter(n => n.hotDissolving).map((n, i) => (
                  <tr
                    key={n.id}
                    style={{
                      borderBottom: '1px solid var(--brand-grey-light)',
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : 'var(--bg-secondary)'
                    }}
                  >
                    <td style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--brand-red)' }}>
                      {n.code} ({n.name.split('(')[0]})
                    </td>
                    <td style={{ padding: '12px 16px' }}>{n.hotDissolving.troKg}</td>
                    <td style={{ padding: '12px 16px' }}>{n.hotDissolving.hotWaterL}</td>
                    <td style={{ padding: '12px 16px' }}>{n.hotDissolving.causticSodaL}</td>
                    <td style={{ padding: '12px 16px', fontWeight: n.hotDissolving.formaldehydeG === 'NIL' ? 800 : 400, color: n.hotDissolving.formaldehydeG === 'NIL' ? '#DC2626' : 'inherit' }}>
                      {n.hotDissolving.formaldehydeG}
                    </td>
                    <td style={{ padding: '12px 16px' }}>{n.hotDissolving.maxSalt}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand-grey-dark)' }}>
                      {n.substantivity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick PDF CTA Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--bg-secondary)',
              padding: '24px 32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--brand-grey-light)',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-grey-dark)' }}>
                Need Custom Recipe Formulation for Your Mill?
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--brand-grey-slate)' }}>
                Our in-house technical lab will prepare tailored concentration recipes based on your liquor ratio.
              </p>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenRfq()}
            >
              <Sparkles size={16} />
              <span>Inquire with Lab Technicians</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

