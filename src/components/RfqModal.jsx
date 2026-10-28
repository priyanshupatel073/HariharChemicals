import React, { useState, useEffect } from 'react';
import { NAPHTHOL_PRODUCTS, FAST_BASE_PRODUCTS, COMPANY_INFO } from '../data/chemicalsData';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  FileDown, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  Building2,
  Package,
  Layers
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function RfqModal({ isOpen, onClose, preselectedProduct }) {
  if (!isOpen) return null;

  const defaultChem = preselectedProduct ? preselectedProduct.name : NAPHTHOL_PRODUCTS[0].name;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    chemical: defaultChem,
    volume: '25 kg (Pilot Batch)',
    packaging: '25 kg Multi-Wall Craft Bags',
    application: 'Cellulosic Yarn Dyeing',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    incoterm: 'FOB Nhava Sheva / Ex-Works Ankleshwar',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [rfqRefNumber, setRfqRefNumber] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({
        ...prev,
        chemical: preselectedProduct.name
      }));
    }
  }, [preselectedProduct]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `HC-RFQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqRefNumber(ref);
    setSubmitted(true);
  };

  // WhatsApp formatted inquiry URL
  const waMessage = encodeURIComponent(
    `*NEW INDUSTRIAL CHEMICAL RFQ*\n` +
    `Reference: ${rfqRefNumber || 'Direct Inquiry'}\n` +
    `Product: ${formData.chemical}\n` +
    `Volume: ${formData.volume}\n` +
    `Packaging: ${formData.packaging}\n` +
    `Application: ${formData.application}\n` +
    `Company: ${formData.companyName || 'Not specified'}\n` +
    `Contact: ${formData.fullName} (${formData.phone})\n` +
    `Email: ${formData.email}\n` +
    `Country: ${formData.country}\n` +
    `Notes: ${formData.message || 'Please provide quotation, COA, and dispatch lead time.'}`
  );

  const waUrl = `https://wa.me/919427103220?text=${waMessage}`;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.82)',
        backdropFilter: 'blur(10px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          border: '1px solid var(--brand-grey-light)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--brand-grey-medium)',
            padding: '4px',
            zIndex: 10
          }}
        >
          <X size={22} />
        </button>

        {/* Modal Top Crimson Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--brand-red-dark) 0%, var(--brand-red) 100%)',
            color: '#FFFFFF',
            padding: '28px 32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '2px 8px', borderRadius: '4px' }}>
              Harihar Chemicals • GIDC Ankleshwar
            </span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Request Technical Quotation &amp; Sample (RFQ)
          </h2>
          <p style={{ fontSize: '0.86rem', opacity: 0.9, marginTop: '4px' }}>
            Receive commercial pricing, lot COA, and dispatch schedule directly from our factory director.
          </p>

          {/* Stepper Indicator */}
          {!submitted && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <div
                style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: step >= 1 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)'
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: step >= 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          {!submitted ? (
            <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handleSubmit}>
              {/* STEP 1: Chemical & Technical Parameters */}
              {step === 1 && (
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    Step 1 of 2: Chemical &amp; Order Parameters
                  </div>

                  {/* Chemical Selector */}
                  <div className="form-group">
                    <label className="form-label">Target Chemical / Dyestuff:</label>
                    <select
                      name="chemical"
                      value={formData.chemical}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <optgroup label="Naphthols (Harithols)">
                        {NAPHTHOL_PRODUCTS.map(n => (
                          <option key={n.id} value={n.name}>{n.name} (C.I. {n.ciNo})</option>
                        ))}
                      </optgroup>
                      <optgroup label="Fast Colour Bases">
                        {FAST_BASE_PRODUCTS.map(b => (
                          <option key={b.id} value={b.name}>{b.name} (C.I. {b.ciNo})</option>
                        ))}
                      </optgroup>
                      <optgroup label="Custom Blends">
                        <option value="Custom Azoic Dye Shade Matching">Custom Azoic Dye Shade Matching</option>
                        <option value="Complete Naphthol + Fast Base Combo">Complete Naphthol + Fast Base Combo</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Volume & Packaging */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Required Batch Volume:</label>
                      <select
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="1 kg (Analytical Sample)">1 kg (Analytical Sample)</option>
                        <option value="25 kg (Pilot Batch)">25 kg (Pilot Batch)</option>
                        <option value="250 kg (Commercial Lot)">250 kg (Commercial Lot)</option>
                        <option value="1,000 kg (1 Metric Ton)">1,000 kg (1 Metric Ton)</option>
                        <option value="5,000 kg (5 Metric Tons)">5,000 kg (5 Metric Tons)</option>
                        <option value="FCL Ocean Freight (20+ MT)">FCL Ocean Freight (20+ MT)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Packaging:</label>
                      <select
                        name="packaging"
                        value={formData.packaging}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="25 kg Multi-Wall Craft Bags">25 kg Multi-Wall Craft Bags</option>
                        <option value="25 kg Corrugated Fiber Drums">25 kg Corrugated Fiber Drums</option>
                        <option value="100 kg Heavy-Duty Blue HDPE Drums">100 kg Heavy-Duty Blue HDPE Drums</option>
                        <option value="1 kg Laminated Moisture Barrier Pouches">1 kg Laminated Moisture Barrier Pouches</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Application */}
                  <div className="form-group">
                    <label className="form-label">Primary Application / Fiber:</label>
                    <select
                      name="application"
                      value={formData.application}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Cellulosic Yarn Dyeing">Cellulosic Yarn Dyeing (Cotton / Linen / Viscose)</option>
                      <option value="Fabric Roller & Screen Printing">Fabric Roller &amp; Screen Printing</option>
                      <option value="Bed Sheets & Bath Towels">Bed Sheets &amp; Bath Towels (High Bleach Fastness)</option>
                      <option value="Carpets & Heavy Textiles">Carpets &amp; Heavy Textiles (High UV / Light Fastness)</option>
                      <option value="Traditional Ethnic Wear & Lungi">Traditional Ethnic Wear &amp; Lungi</option>
                      <option value="Insoluble Azoic Pigments & Inks">Insoluble Azoic Pigments &amp; Inks</option>
                    </select>
                  </div>

                  {/* Step 1 Actions */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ padding: '12px 28px' }}
                    >
                      <span>Proceed to Contact Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Buyer & Dispatch Information */}
              {step === 2 && (
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    Step 2 of 2: Buyer Contact &amp; Dispatch Logistics
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Ramesh Patel"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company / Mill Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Gujarat Textile Mills Ltd."
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="procurement@company.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Destination Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="India"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">IncoTerm Preference</label>
                      <select
                        name="incoterm"
                        value={formData.incoterm}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Ex-Works Ankleshwar GIDC">Ex-Works Ankleshwar GIDC</option>
                        <option value="FOB Nhava Sheva (JNPT Mumbai)">FOB Nhava Sheva (JNPT Mumbai)</option>
                        <option value="CIF Destination Port">CIF Destination Port</option>
                        <option value="Door Delivery (Domestic India)">Door Delivery (Domestic India)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Technical Notes / Custom Fastness Needs:</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Specify required shade depth, fastness requirements, or target delivery date..."
                    />
                  </div>

                  {/* Step 2 Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ padding: '12px 28px' }}
                    >
                      <Send size={16} />
                      <span>Submit Official RFQ</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* SUBMISSION CONFIRMATION SCREEN */
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#DCFCE7',
                  color: '#16A34A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px auto'
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <span className="ci-badge" style={{ marginBottom: '8px' }}>
                Ref: {rfqRefNumber}
              </span>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginTop: '8px', marginBottom: '8px' }}>
                Technical RFQ Successfully Registered!
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                Thank you <strong>{formData.fullName}</strong>. Your inquiry for <strong>{formData.volume}</strong> of <strong>{formData.chemical}</strong> has been logged with our Ankleshwar commercial office.
              </p>

              {/* Direct Instant Connect Options */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  marginBottom: '24px',
                  border: '1px solid var(--brand-grey-light)',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-grey-dark)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Accelerate Your Order via Direct Communication:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      justifyContent: 'center'
                    }}
                  >
                    <WhatsAppIcon size={20} color="#FFFFFF" />
                    <span>Send this RFQ via WhatsApp to Director (+91 94271 03220)</span>
                  </a>

                  <a
                    href={`mailto:hariharchem3@yahoo.com?subject=${encodeURIComponent(`RFQ [${rfqRefNumber}] - ${formData.chemical} - ${formData.companyName}`)}&body=${waMessage}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '11px 16px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--brand-grey-light)',
                      color: 'var(--brand-grey-dark)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      justifyContent: 'center'
                    }}
                  >
                    <Mail size={16} color="var(--brand-red)" />
                    <span>Email Direct to Plant (hariharchem3@yahoo.com)</span>
                  </a>
                </div>
              </div>

              {/* Instant Technical Downloads */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <FileDown size={15} color="var(--brand-red)" />
                  <span>Download Shade Card</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline-red btn-sm"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    onClose();
                  }}
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

