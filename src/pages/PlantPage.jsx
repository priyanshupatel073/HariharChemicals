import React from 'react';
import PageBanner from '../components/PageBanner';
import EquipmentExplorer from '../components/EquipmentExplorer';
import { ShieldCheck, Factory, Layers, Award, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/chemicalsData';

export default function PlantPage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="ANKLESHWAR GIDC INFRASTRUCTURE"
        title="Manufacturing Infrastructure &amp; Plant Suites"
        subtitle="Explore our multi-tier chemical synthesis facility situated at Plot J-5248, GIDC Ankleshwar. Engineered for high-volume condensation, low-temperature diazotisation, and sub-45 micron pulverisation."
        onOpenRfq={() => onOpenRfq()}
      />

      {/* Main Equipment Explorer */}
      <EquipmentExplorer />

      {/* Environmental & Process Safety Commitment */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--brand-grey-light)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '36px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              border: '1px solid var(--brand-grey-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="plant-safety-grid"
          >
            <div>
              <span className="section-tag">
                <ShieldCheck size={14} />
                <span>Zero Liquid Discharge &amp; ETP</span>
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '12px' }}>
                Responsible Industrial Chemistry &amp; Waste Management
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '16px' }}>
                Harihar Chemicals maintains rigorous adherence to Gujarat Pollution Control Board (GPCB) guidelines and is connected to the common effluent treatment facility of Ankleshwar Industries Association (AIA).
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--brand-grey-slate)' }}>
                <li>✔ In-house primary neutralization and secondary clarification</li>
                <li>✔ Venturi gas scrubbers for zero acid mist emissions during diazotisation</li>
                <li>✔ Segregated mother liquor evaporation and salt crystallization</li>
                <li>✔ Closed-loop reaction kettle washing minimizing wastewater generation</li>
              </ul>
            </div>

            <div>
              <span className="section-tag">
                <Factory size={14} />
                <span>Facility Technical Specs</span>
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '12px' }}>
                Location &amp; Logistical Advantages
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '16px' }}>
                Located in the heart of the Golden Corridor in Ankleshwar, Gujarat, our facility enjoys unhindered access to fundamental raw materials and rapid transport routes.
              </p>
              <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', padding: '16px', border: '1px solid var(--brand-grey-light)', fontSize: '0.86rem' }}>
                <div style={{ marginBottom: '8px' }}><strong>Highway Access:</strong> National Highway 48 (Delhi-Mumbai Expressway)</div>
                <div style={{ marginBottom: '8px' }}><strong>Container Ports:</strong> Direct transit to Nhava Sheva (JNPT) &amp; Hazira Ports</div>
                <div><strong>In-House Storage:</strong> Temperature-monitored warehouse for 500+ MT raw chemicals</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .plant-safety-grid {
              grid-template-columns: 1fr !important;
              padding: 24px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

