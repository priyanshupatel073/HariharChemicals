import React, { useState } from 'react';
import { DYEING_PROCESS } from '../data/chemicalsData';
import { 
  FlaskConical, 
  Flame, 
  Droplets, 
  RotateCw, 
  Thermometer, 
  AlertCircle, 
  CheckCircle2, 
  FileText,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function DyeingProcessGuide() {
  const [activeTab, setActiveTab] = useState('process'); // 'process', 'dissolving', 'diazotisation'

  return (
    <section id="dyeing-guide" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Flame size={14} />
            <span>Industrial Technical Protocol</span>
          </div>
          <h2 className="section-title">
            Cellulosic Dyeing &amp; Diazotisation Guide
          </h2>
          <p className="section-description">
            Complete technical instructions for master dyers. Master the in-situ synthesis of azoic colors on cotton, linen, viscose, and jute with certified batch recipes.
          </p>
        </div>

        {/* Protocol Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('process')}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.92rem',
              fontWeight: activeTab === 'process' ? 800 : 600,
              backgroundColor: activeTab === 'process' ? 'var(--brand-red)' : '#FFFFFF',
              color: activeTab === 'process' ? '#FFFFFF' : 'var(--brand-grey-dark)',
              border: '1px solid',
              borderColor: activeTab === 'process' ? 'var(--brand-red)' : 'var(--brand-grey-light)',
              cursor: 'pointer',
              transition: 'all 0.18s ease'
            }}
          >
            4-Stage Dyeing Workflow
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('dissolving')}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.92rem',
              fontWeight: activeTab === 'dissolving' ? 800 : 600,
              backgroundColor: activeTab === 'dissolving' ? 'var(--brand-red)' : '#FFFFFF',
              color: activeTab === 'dissolving' ? '#FFFFFF' : 'var(--brand-grey-dark)',
              border: '1px solid',
              borderColor: activeTab === 'dissolving' ? 'var(--brand-red)' : 'var(--brand-grey-light)',
              cursor: 'pointer',
              transition: 'all 0.18s ease'
            }}
          >
            Hot vs. Cold Dissolving Methods
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('diazotisation')}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.92rem',
              fontWeight: activeTab === 'diazotisation' ? 800 : 600,
              backgroundColor: activeTab === 'diazotisation' ? 'var(--brand-red)' : '#FFFFFF',
              color: activeTab === 'diazotisation' ? '#FFFFFF' : 'var(--brand-grey-dark)',
              border: '1px solid',
              borderColor: activeTab === 'diazotisation' ? 'var(--brand-red)' : 'var(--brand-grey-light)',
              cursor: 'pointer',
              transition: 'all 0.18s ease'
            }}
          >
            Diazotisation Methods 1 &amp; 2
          </button>
        </div>

        {/* Tab 1: 4-Stage Process */}
        {activeTab === 'process' && (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginBottom: '40px'
              }}
            >
              {DYEING_PROCESS.stages.map((stage) => (
                <div
                  key={stage.step}
                  className="card-clean"
                  style={{
                    padding: '28px',
                    backgroundColor: '#FFFFFF',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--brand-red-light)',
                      color: 'var(--brand-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 900,
                      marginBottom: '16px',
                      border: '1px solid var(--brand-red-border)'
                    }}
                  >
                    0{stage.step}
                  </div>

                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '10px' }}>
                    {stage.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6 }}>
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Substantivity & Process Pretreatment Notes */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '28px 32px',
                border: '1px solid var(--brand-grey-light)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '32px'
              }}
              className="protocol-notes-grid"
            >
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Droplets size={18} color="var(--brand-red)" />
                  Pretreatment &amp; Scouring Specification
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '14px' }}>
                  The material for impregnation whether in yarn form or piece goods should be given a thorough scouring treatment at boil with <strong>Soda Ash</strong>, <strong>Caustic Soda</strong>, and a detergent such as <strong>Harithol T pdr. H/Conc</strong> followed by thorough washing and complete drying.
                </p>
                <div style={{ fontSize: '0.84rem', color: 'var(--brand-grey-medium)', fontStyle: 'italic' }}>
                  * Insufficient scouring leaves residual wax &amp; oils on cotton, reducing substantivity and causing cloudy shades.
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={18} color="var(--brand-red)" />
                  Key Substantivity Determinants
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {DYEING_PROCESS.substantivityFactors.map((f, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--brand-grey-slate)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="var(--brand-red)" flexShrink={0} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Dissolving Methods */}
        {activeTab === 'dissolving' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '28px'
            }}
            className="protocol-dual-grid"
          >
            {/* Method A: Hot Dissolving */}
            <div className="card-clean" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '4px', backgroundColor: 'var(--brand-red-light)', color: 'var(--brand-red-dark)', fontSize: '0.78rem', fontWeight: 800, marginBottom: '14px' }}>
                <Flame size={14} /> METHOD A: HOT DISSOLVING
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '14px' }}>
                Turkey Red Oil (TRO) &amp; Boiling Caustic
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '20px' }}>
                In this method Harithols are dissolved by pasting with equal quantity of Turkey Red Oil (50%) and water to get a smooth consistency and then dissolved by the addition of required quantity of caustic soda and boiling water. The resulting contents are boiled, if necessary, to get a crystal-clear solution.
              </p>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)', marginBottom: '16px' }}>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
                  Crucial Technical Directive:
                </h5>
                <p style={{ fontSize: '0.82rem', color: 'var(--brand-grey-slate)', lineHeight: 1.5 }}>
                  Formaldehyde (40%) should only be added to this concentrated solution <strong>after cooling to room temperature</strong>. Adding formaldehyde while hot leads to precipitation and condensation resin formation! (Never add formaldehyde to Naphthol AS-G).
                </p>
              </div>
            </div>

            {/* Method B: Cold Dissolving */}
            <div className="card-clean" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '4px', backgroundColor: 'var(--bg-tertiary)', color: 'var(--brand-grey-dark)', fontSize: '0.78rem', fontWeight: 800, marginBottom: '14px' }}>
                <Droplets size={14} /> METHOD B: COLD DISSOLVING
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '14px' }}>
                Methylated Spirit &amp; Concentrated Alkali
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '20px' }}>
                Harithol is placed in a tall narrow container (to minimize evaporation of spirit) and pasted with methylated spirit overwich caustic soda is added. Harithol is instantaneously dissolved on addition of cold water while stirring.
              </p>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--brand-grey-light)', marginBottom: '16px' }}>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
                  Impregnation Bath Dilution:
                </h5>
                <p style={{ fontSize: '0.82rem', color: 'var(--brand-grey-slate)', lineHeight: 1.5 }}>
                  After 10 minutes, the solution obtained is diluted with water containing the required quantity of Turkey Red Oil (minimum 4 ml/l for padding, 12.5 ml/l for tub liquoring) and caustic soda to protect the bath against air oxidation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Diazotisation Methods */}
        {activeTab === 'diazotisation' && (
          <div className="card-clean" style={{ padding: '36px', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-grey-dark)' }}>
                  Standard Industrial Diazotisation Protocols
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--brand-grey-slate)', marginTop: '4px' }}>
                  Fast Bases are transformed into diazonium salts with sodium nitrite in an acidic medium before coupling with Harithols.
                </p>
              </div>

              <span className="cas-tag" style={{ color: 'var(--brand-red)' }}>
                Temperature Strictly 0°C – 15°C
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }} className="protocol-dual-grid">
              {/* Method 1 */}
              <div style={{ border: '1px solid var(--brand-grey-light)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--bg-secondary)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-red-dark)', marginBottom: '10px' }}>
                  Diazotisation Method 1: Soluble Bases
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6, marginBottom: '14px' }}>
                  Applicable for Fast Yellow GC, Orange GC, Scarlet G, Scarlet RC, Red RC, Red TR, Red R Flakes, Garnet GBC, and Blue B/BB.
                </p>
                <div style={{ fontSize: '0.82rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6 }}>
                  1. Paste required Fast Base with water; dissolve with hydrochloric acid (32°Tw).<br/>
                  2. Cool solution to specified temperature (5°C–15°C).<br/>
                  3. Add pre-dissolved Sodium Nitrite (1:1) in a thin stream whilst stirring continuously.<br/>
                  4. Maintain for 20–30 minutes, neutralize excess mineral acid with Sodium Acetate crystals, and add Acetic Acid (50%) or Aluminium Sulphate buffer before developing.
                </div>
              </div>

              {/* Method 2 */}
              <div style={{ border: '1px solid var(--brand-grey-light)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--bg-secondary)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '10px' }}>
                  Diazotisation Method 2: Insoluble Hydrochloride Bases
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6, marginBottom: '14px' }}>
                  Applicable for Fast Orange GR, Fast Red B, Fast Bordeaux GP, and Violet B where hydrochloride is sparingly soluble in water.
                </p>
                <div style={{ fontSize: '0.82rem', color: 'var(--brand-grey-slate)', lineHeight: 1.6 }}>
                  1. Fast Base is thoroughly pasted with a little water and Sodium Nitrite solution (1:1).<br/>
                  2. Hot or cold water is added with stirring.<br/>
                  3. This slurry is poured directly into the solution of hydrochloric acid (32°Tw) under constant agitation.<br/>
                  4. Maintain temperature strictly at 10°C–15°C using flake ice for 20 minutes before sodium acetate buffering.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 840px) {
          .protocol-notes-grid, .protocol-dual-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
