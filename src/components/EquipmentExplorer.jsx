import React, { useState } from 'react';
import { EQUIPMENT_REGISTRY } from '../data/chemicalsData';
import { 
  FlaskConical, 
  Filter, 
  Activity, 
  ShieldCheck, 
  Boxes, 
  Search, 
  Layers, 
  Check, 
  Thermometer, 
  Gauge, 
  Settings, 
  Sparkles,
  Camera
} from 'lucide-react';

export default function EquipmentExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = [
    <FlaskConical size={18} key="0" />,
    <Thermometer size={18} key="1" />,
    <Filter size={18} key="2" />,
    <Boxes size={18} key="3" />,
    <Activity size={18} key="4" />
  ];

  const currentCategory = EQUIPMENT_REGISTRY[activeTab] || EQUIPMENT_REGISTRY[0];

  const displayedItems = searchQuery.trim() === ''
    ? currentCategory.items
    : currentCategory.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.moc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.capacity.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section id="manufacturing" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Industrial Synthesis Suites</span>
          </div>
          <h2 className="section-title">
            State-of-the-Art Chemical Plant &amp; Infrastructure
          </h2>
          <p className="section-description">
            Located in the premier chemical industrial hub of G.I.D.C. Ankleshwar, our specialized multi-tier manufacturing plant is engineered for precision diazotisation, automated filtration, and high-purity dyestuff micronisation.
          </p>
        </div>

        {/* Global Facility Metrics Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '48px'
          }}
        >
          <div
            className="card-clean"
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: 'var(--brand-red-light)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <FlaskConical size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                SS-316 &amp; GLR Suites
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-grey-medium)' }}>
                3,000 L to 8,000 L reaction batteries
              </div>
            </div>
          </div>

          <div
            className="card-clean"
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: 'var(--brand-red-light)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Thermometer size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                25 MT / 24 Hr Ice Plant
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-grey-medium)' }}>
                Cryogenic diazo control at 0°C–10°C
              </div>
            </div>
          </div>

          <div
            className="card-clean"
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: 'var(--brand-red-light)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Activity size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                Auto IR Dyeing Machines
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-grey-medium)' }}>
                Computerized shade &amp; Delta-E match
              </div>
            </div>
          </div>

          <div
            className="card-clean"
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: 'var(--brand-red-light)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-grey-dark)' }}>
                Zero-Liquid Discharge
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-grey-medium)' }}>
                Full CETP Ankleshwar integration
              </div>
            </div>
          </div>
        </div>

        {/* Plant Imagery Montage - Reserved Blank Spaces */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '24px',
            marginBottom: '48px'
          }}
          className="plant-montage-grid"
        >
          {/* Real Photo: Manufacturing Core Jacketed Reactors */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--brand-grey-light)',
              height: '320px',
              backgroundColor: '#0F172A'
            }}
          >
            <img
              src="/images/cropped/reaction_vessels.jpg"
              alt="High-Volume Jacketed Reaction Vessels & Synthesis Reactors at Harihar Chemicals"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 40%',
                display: 'block'
              }}
            />
            {/* Subtle Gradient Overlay & Technical Label */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px 20px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.75) 30%, rgba(15, 23, 42, 0.95) 100%)',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#F87171', letterSpacing: '0.04em', marginBottom: '2px' }}>
                Manufacturing Core
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>
                High-Volume Jacketed Reaction Vessels &amp; Distillation Towers
              </div>
            </div>
          </div>

          {/* Real Photo: Analytical Testing IR Dyeing Machine */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--brand-grey-light)',
              height: '320px',
              backgroundColor: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/images/cropped/ir_dyeing_machine.png"
              alt="Automatic Infra-Red Dyeing & Color Matching Machine at Harihar Chemicals"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '16px 20px 64px 20px',
                display: 'block'
              }}
            />
            {/* Subtle Gradient Overlay & Technical Label */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px 20px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.75) 30%, rgba(15, 23, 42, 0.95) 100%)',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#F87171', letterSpacing: '0.04em', marginBottom: '2px' }}>
                Analytical Testing
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>
                Automatic Infra-Red Dyeing &amp; TLC Purity Development Suite
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs & Interactive Explorer */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '28px'
          }}
        >
          {EQUIPMENT_REGISTRY.map((cat, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.86rem',
                  fontWeight: isSelected ? 800 : 500,
                  backgroundColor: isSelected ? 'var(--brand-red)' : 'var(--bg-secondary)',
                  color: isSelected ? '#FFFFFF' : 'var(--brand-grey-dark)',
                  border: isSelected ? '1px solid var(--brand-red)' : '1px solid var(--brand-grey-light)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease'
                }}
              >
                {categoryIcons[idx]}
                <span>{cat.category.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Current Category Overview Banner */}
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 28px',
            marginBottom: '32px',
            border: '1px solid var(--brand-grey-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '4px' }}>
              {currentCategory.category}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)' }}>
              {currentCategory.description}
            </p>
          </div>

          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--brand-grey-medium)' }} />
            <input
              type="text"
              placeholder="Search category equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '36px', fontSize: '0.86rem', padding: '8px 12px 8px 36px' }}
            />
          </div>
        </div>

        {/* Equipment Items Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
          className="equipment-items-grid"
        >
          {displayedItems.map((item, idx) => (
            <div
              key={item.name}
              className="card-clean"
              style={{
                padding: '26px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--brand-grey-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span className="cas-tag" style={{ color: 'var(--brand-red)', fontWeight: 700 }}>
                    Unit #{idx + 1}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--brand-grey-medium)', fontWeight: 600 }}>
                    {item.operationalTemp}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '8px', lineHeight: 1.3 }}>
                  {item.name}
                </h4>

                <p style={{ fontSize: '0.86rem', color: 'var(--brand-grey-slate)', marginBottom: '16px', lineHeight: 1.55 }}>
                  {item.purpose}
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: '6px', padding: '12px 14px', fontSize: '0.82rem', border: '1px solid var(--brand-grey-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--brand-grey-medium)' }}>Capacity:</span>
                  <strong style={{ color: 'var(--brand-grey-dark)' }}>{item.capacity}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--brand-grey-medium)' }}>MOC / Tech:</span>
                  <strong style={{ color: 'var(--brand-grey-dark)' }}>{item.moc}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .plant-montage-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

