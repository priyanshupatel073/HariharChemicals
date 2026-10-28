import React, { useState } from 'react';
import { NAPHTHOL_PRODUCTS, FAST_BASE_PRODUCTS, SHADE_COMBINATIONS } from '../data/chemicalsData';
import { 
  Palette, 
  Sparkles, 
  FileDown, 
  Info, 
  Check, 
  Layers, 
  Sliders, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';

export default function ShadeCardExplorer({ onSelectRecipeForRfq }) {
  const [selectedNaphtholCode, setSelectedNaphtholCode] = useState('AS');
  const [selectedBaseCode, setSelectedBaseCode] = useState('Scarlet G');
  const [activeDepth, setActiveDepth] = useState('4%'); // '1%' or '4%'

  // Find current combination or fallback
  const currentCombination = SHADE_COMBINATIONS.find(
    (c) => c.naphtholCode === selectedNaphtholCode && c.baseCode === selectedBaseCode
  ) || SHADE_COMBINATIONS.find((c) => c.naphtholCode === selectedNaphtholCode) || SHADE_COMBINATIONS[0];

  const currentNaphthol = NAPHTHOL_PRODUCTS.find((n) => n.code === selectedNaphtholCode) || NAPHTHOL_PRODUCTS[0];
  const currentBase = FAST_BASE_PRODUCTS.find((b) => b.code === selectedBaseCode) || FAST_BASE_PRODUCTS[0];

  // All pairings available for the currently selected Naphthol
  const naphtholPairings = SHADE_COMBINATIONS.filter((c) => c.naphtholCode === selectedNaphtholCode);

  return (
    <section id="shade-card" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Palette size={14} />
            <span>Interactive Industrial Shade Card</span>
          </div>
          <h2 className="section-title">
            Naphthol &amp; Fast Base Coupling Matrix
          </h2>
          <p className="section-description">
            Explore authentic in-situ azoic pigment development across 1% and 4% dyeing depths. 
            Calibrated directly from Harihar's physical shade cards with cotton absorption rates and ISO fastness ratings.
          </p>
        </div>

        {/* Interactive Shade Card Workstation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '36px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            border: '1px solid var(--brand-grey-light)',
            boxShadow: 'var(--shadow-md)'
          }}
          className="shade-card-grid"
        >
          {/* Controls Column (Left) */}
          <div>
            {/* Step 1: Select Naphthol (Harithol) */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  1. Select Harithol / Naphthol (Grounding):
                </label>
                <span className="ci-badge">C.I. {currentNaphthol.ciNo}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 1fr))', gap: '8px' }}>
                {NAPHTHOL_PRODUCTS.map((n) => {
                  const isSelected = n.code === selectedNaphtholCode;
                  return (
                    <button
                      key={n.code}
                      type="button"
                      onClick={() => setSelectedNaphtholCode(n.code)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        fontWeight: isSelected ? 800 : 600,
                        backgroundColor: isSelected ? 'var(--brand-red)' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : 'var(--brand-grey-dark)',
                        border: isSelected ? '1px solid var(--brand-red)' : '1px solid var(--brand-grey-light)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? 'var(--shadow-red-glow)' : 'none'
                      }}
                    >
                      {n.code}
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.68rem',
                          fontWeight: 400,
                          opacity: isSelected ? 0.9 : 0.65,
                          marginTop: '2px'
                        }}
                      >
                        Sub: {n.substantivity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Fast Colour Base (Developing) */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  2. Select Fast Colour Base (Diazo Coupling):
                </label>
                <span style={{ fontSize: '0.8rem', color: 'var(--brand-red)', fontWeight: 700 }}>
                  {currentBase.diazotisationMethod.split(' ')[0]} {currentBase.diazotisationMethod.split(' ')[1]}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                  gap: '8px',
                  maxHeight: '260px',
                  overflowY: 'auto',
                  paddingRight: '6px'
                }}
              >
                {FAST_BASE_PRODUCTS.map((b) => {
                  const isSelected = b.code === selectedBaseCode;
                  return (
                    <button
                      key={b.code}
                      type="button"
                      onClick={() => setSelectedBaseCode(b.code)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 10px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontWeight: isSelected ? 800 : 500,
                        backgroundColor: isSelected ? 'var(--brand-grey-dark)' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : 'var(--brand-grey-dark)',
                        border: isSelected ? '1px solid var(--brand-grey-dark)' : '1px solid var(--brand-grey-light)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: b.shadeHex,
                          flexShrink: 0,
                          border: '1px solid rgba(0,0,0,0.2)'
                        }}
                      />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {b.code}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Depth Selector Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-grey-dark)' }}>
                Dyeing Depth:
              </span>
              <div style={{ display: 'inline-flex', backgroundColor: '#FFFFFF', padding: '3px', borderRadius: '6px', border: '1px solid var(--brand-grey-light)' }}>
                <button
                  type="button"
                  onClick={() => setActiveDepth('1%')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: activeDepth === '1%' ? 'var(--brand-red)' : 'transparent',
                    color: activeDepth === '1%' ? '#FFFFFF' : 'var(--brand-grey-slate)'
                  }}
                >
                  1% Light Depth
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDepth('4%')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: activeDepth === '4%' ? 'var(--brand-red)' : 'transparent',
                    color: activeDepth === '4%' ? '#FFFFFF' : 'var(--brand-grey-slate)'
                  }}
                >
                  4% Full Commercial Shade
                </button>
              </div>
            </div>
          </div>

          {/* Result Swatch & Technical Fastness Card (Right) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              border: '1px solid var(--brand-grey-light)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand-red)' }}>
                    Synthesized In-Situ Shade Swatch
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                    {currentNaphthol.name.split('(')[0]} + {currentBase.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--brand-grey-medium)' }}>
                    Shade Family: <strong>{currentCombination.shadeFamily}</strong>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="cas-tag">Cotton / Cellulosic</span>
                  <div style={{ fontSize: '0.74rem', color: 'var(--brand-grey-medium)', marginTop: '4px' }}>
                    Liquor Ratio 1:20
                  </div>
                </div>
              </div>

              {/* Dual Visual Swatch (1% vs 4%) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginBottom: '24px'
                }}
              >
                {/* 1% Swatch */}
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: activeDepth === '1%' ? '2px solid var(--brand-red)' : '1px solid var(--brand-grey-light)',
                    boxShadow: activeDepth === '1%' ? '0 0 14px var(--brand-red-glow)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <div
                    style={{
                      height: '110px',
                      backgroundColor: currentCombination.color1Pct || currentCombination.colorHex,
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(4px)',
                        color: '#FFFFFF',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      1% Depth
                    </div>
                  </div>
                  <div style={{ padding: '8px 10px', backgroundColor: 'var(--bg-tertiary)', fontSize: '0.75rem', textAlign: 'center', color: 'var(--brand-grey-slate)' }}>
                    Tender Tone
                  </div>
                </div>

                {/* 4% Swatch */}
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: activeDepth === '4%' ? '2px solid var(--brand-red)' : '1px solid var(--brand-grey-light)',
                    boxShadow: activeDepth === '4%' ? '0 0 14px var(--brand-red-glow)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <div
                    style={{
                      height: '110px',
                      backgroundColor: currentCombination.color4Pct || currentCombination.colorHex,
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(4px)',
                        color: '#FFFFFF',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      4% Depth (Full Shade)
                    </div>
                  </div>
                  <div style={{ padding: '8px 10px', backgroundColor: 'var(--bg-tertiary)', fontSize: '0.75rem', textAlign: 'center', color: 'var(--brand-grey-slate)' }}>
                    Maximum Brilliance
                  </div>
                </div>
              </div>

              {/* Dye Bath Recipe & Absorption Metrics */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  marginBottom: '20px',
                  border: '1px solid var(--brand-grey-light)'
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Calibrated Bath Parameters (MLR 1:20)
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block' }}>Harithol Absorbed</span>
                    <strong>{currentCombination.haritholAbsorbed}</strong> / 100 kg
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block' }}>Harithol Conc.</span>
                    <strong>{currentCombination.dyeBathHarithol}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', display: 'block' }}>Fast Base Conc.</span>
                    <strong>{currentCombination.dyeBathBase}</strong>
                  </div>
                </div>
              </div>

              {/* Fastness Properties Radar / Score Cards */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  ISO Fastness Ratings (Scale 1–8 for Light, 1–5 for Wash/Chemical)
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '10px 4px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>LIGHT</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand-red)', marginTop: '2px' }}>
                      {currentCombination.lightFastness}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '10px 4px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>SODA BOIL</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                      {currentCombination.sodaBoil}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '10px 4px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>CHLORINE</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                      {currentCombination.chlorine}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '10px 4px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>PEROXIDE</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                      {currentCombination.peroxide}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '10px 4px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>HOT PRESS</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginTop: '2px' }}>
                      {currentCombination.hotPressing}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onSelectRecipeForRfq({
                  name: `${currentNaphthol.name} + ${currentBase.name}`,
                  cas: `${currentNaphthol.cas} / ${currentBase.cas}`,
                  code: `${currentNaphthol.code} + ${currentBase.code}`
                })}
                style={{ flex: 1 }}
              >
                <Sparkles size={16} />
                <span>Request Sample Recipe</span>
              </button>

              <a
                href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '12px 16px' }}
                title="Download 15-Page Official Shade Card"
              >
                <FileDown size={16} color="var(--brand-red)" />
                <span className="d-none-sm">PDF Card</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .shade-card-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

