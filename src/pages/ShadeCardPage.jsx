import React from 'react';
import PageBanner from '../components/PageBanner';
import ShadeCardExplorer from '../components/ShadeCardExplorer';
import { SHADE_COMBINATIONS } from '../data/chemicalsData';
import { FileDown, Sparkles, Palette, ShieldCheck } from 'lucide-react';

export default function ShadeCardPage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="LIVE COLORIMETRIC COUPLING"
        title="Interactive Shade Card Matrix"
        subtitle="Simulate in-situ azoic pigment development by coupling any Naphthol (Harithol) with any Fast Base. Inspect 1% tender tones and 4% full industrial depths."
        onOpenRfq={() => onOpenRfq()}
      />

      {/* Main Interactive Workstation */}
      <ShadeCardExplorer onSelectRecipeForRfq={onOpenRfq} />

      {/* Full Fastness Master Reference Table */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--brand-grey-light)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span className="section-tag">
              <Palette size={14} />
              <span>Full Tabular Archive</span>
            </span>
            <h2 className="section-title">
              Master Azoic Fastness Properties Index
            </h2>
            <p className="section-description">
              Direct transcription of physical shade card tables (pages 7 to 15). Showing cotton absorption per 100 kg, dye bath concentrations at MLR 1:20, and fastness metrics.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--brand-grey-light)',
              overflowX: 'auto',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--brand-grey-dark)', color: '#FFFFFF', borderBottom: '2px solid var(--brand-red)' }}>
                  <th style={{ padding: '14px 16px' }}>Harithol</th>
                  <th style={{ padding: '14px 16px' }}>Fast Base</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>1% Depth</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>4% Depth</th>
                  <th style={{ padding: '14px 16px' }}>Shade Group</th>
                  <th style={{ padding: '14px 16px' }}>Absorbed / 100kg</th>
                  <th style={{ padding: '14px 16px' }}>Light</th>
                  <th style={{ padding: '14px 16px' }}>Soda Boil</th>
                  <th style={{ padding: '14px 16px' }}>Chlorine</th>
                  <th style={{ padding: '14px 16px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {SHADE_COMBINATIONS.map((c, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid var(--brand-grey-light)',
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : 'var(--bg-secondary)'
                    }}
                  >
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand-red)' }}>
                      {c.naphtholName}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--brand-grey-dark)' }}>
                      {c.baseName}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          backgroundColor: c.color1Pct || c.colorHex,
                          border: '1px solid rgba(0,0,0,0.15)',
                          verticalAlign: 'middle'
                        }}
                      />
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          backgroundColor: c.color4Pct || c.colorHex,
                          border: '1px solid rgba(0,0,0,0.15)',
                          verticalAlign: 'middle'
                        }}
                      />
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--brand-grey-slate)' }}>
                      {c.shadeFamily}
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--brand-grey-slate)' }}>
                      {c.haritholAbsorbed}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--brand-red)' }}>
                      {c.lightFastness}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: 700 }}>
                      {c.sodaBoil}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: 700 }}>
                      {c.chlorine}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <button
                        type="button"
                        onClick={() => onOpenRfq({ name: `${c.naphtholName} + ${c.baseName}`, code: `${c.naphtholCode} + ${c.baseCode}` })}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--brand-red)',
                          fontWeight: 700,
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          textDecoration: 'underline'
                        }}
                      >
                        RFQ Recipe
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

