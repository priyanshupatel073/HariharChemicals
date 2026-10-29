import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { COMPANY_INFO } from '../data/chemicalsData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Send,
  CheckCircle2,
  ShieldCheck,
  FileDown,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ContactPage({ onOpenRfq }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Technical Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waUrl = `https://wa.me/919427103220?text=${encodeURIComponent(`Hello Harihar Chemicals, I am contacting you from the website regarding: ${formState.subject}`)}`;

  return (
    <div>
      <PageBanner
        tag="ANKLESHWAR GIDC FACILITY"
        title="Contact Plant &amp; Corporate Office"
        subtitle="Direct access to our factory director, technical sales, and sample dispatch team at Plot J-5248, GIDC Ankleshwar, Gujarat."
        onOpenRfq={() => onOpenRfq && onOpenRfq()}
      />

      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '48px',
              marginBottom: '64px'
            }}
            className="contact-layout-grid"
          >
            {/* Contact Details Column */}
            <div>
              <span className="section-tag">
                <MapPin size={14} />
                <span>FACTORY LOCATION &amp; DIRECTOR</span>
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--brand-grey-dark)', marginBottom: '14px' }}>
                Direct Communication With Our Plant Team
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--brand-grey-slate)', lineHeight: 1.65, marginBottom: '28px' }}>
                Whether you need technical dissolving assistance, full container lot quotes, or an official shade matching test, our Ankleshwar operations are here to assist.
              </p>

              {/* Director Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid var(--brand-grey-light)',
                  marginBottom: '28px'
                }}
              >
                <div style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-red)', marginBottom: '4px' }}>
                  DIRECTOR &amp; PRINCIPAL CONTACT
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-grey-dark)' }}>
                  Mr. Prakash C Rawal
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--brand-grey-medium)', marginBottom: '14px' }}>
                  Director • Operations, Synthesis &amp; Global Procurement
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                  <a
                    href="tel:+919427103220"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--brand-grey-dark)',
                      textDecoration: 'none',
                      fontWeight: 700
                    }}
                  >
                    <Phone size={16} color="var(--brand-red)" />
                    <span>+91 94271 03220 (Mobile / WhatsApp)</span>
                  </a>

                  <a
                    href="https://wa.me/919427103220"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '6px',
                      padding: '8px 14px',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      width: 'fit-content'
                    }}
                  >
                    <WhatsAppIcon size={16} color="#FFFFFF" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Plant Address */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Building2 size={20} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Manufacturing Plant &amp; Registered Office:</strong>
                    <div style={{ color: 'var(--brand-grey-slate)', marginTop: '2px', lineHeight: 1.5 }}>
                      {COMPANY_INFO.registeredAddress}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={20} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Landline &amp; Toll Free:</strong>
                    <div style={{ color: 'var(--brand-grey-slate)' }}>
                      {COMPANY_INFO.phoneLandlines.join(' • ')} (Toll Free: {COMPANY_INFO.tollFree})
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={20} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Direct Email Endpoints:</strong>
                    <div style={{ color: 'var(--brand-grey-slate)' }}>
                      {COMPANY_INFO.emails.join(' | ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message & Inquiry Form */}
            <div
              className="card-clean"
              style={{
                padding: '36px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--brand-grey-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
                    Send Factory Inquiry
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--brand-grey-slate)', marginBottom: '24px' }}>
                    Fill out this direct dispatch inquiry form or request our commercial price list.
                  </p>

                  <div className="contact-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="form-input"
                        placeholder="e.g. Anil Kumar"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="form-input"
                        placeholder="e.g. Modern Dyeing Mills"
                      />
                    </div>
                  </div>

                  <div className="contact-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="form-input"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="form-input"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Subject</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="form-select"
                    >
                      <option value="Commercial Dyestuff Quotation">Commercial Dyestuff Quotation</option>
                      <option value="Analytical Sample Request (1 kg)">Analytical Sample Request (1 kg)</option>
                      <option value="Custom Shade Matching Formulation">Custom Shade Matching Formulation</option>
                      <option value="Export FCL Freight Inquiry">Export FCL Freight Inquiry</option>
                      <option value="Technical Dyehouse Advisory">Technical Dyehouse Advisory</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Detailed Requirements:</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="form-textarea"
                      placeholder="Please specify product grade, target color shade, volume, or delivery requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '1rem', fontWeight: 700 }}
                  >
                    <Send size={16} />
                    <span>Send Message to Plant</span>
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
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
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--brand-grey-dark)', marginBottom: '8px' }}>
                    Inquiry Received!
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--brand-grey-slate)', marginBottom: '24px' }}>
                    Thank you <strong>{formState.name}</strong>. Our commercial team will get back to you promptly at <strong>{formState.email}</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--brand-grey-light)'
            }}
          >
            <div style={{ padding: '16px 24px', backgroundColor: 'var(--brand-grey-dark)', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                <MapPin size={16} color="var(--brand-red)" />
                G.I.D.C. Industrial Estate, Ankleshwar, Bharuch, Gujarat (INDIA)
              </div>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Golden Corridor Chemical Hub</span>
            </div>
            <iframe
              title="Harihar Chemicals Ankleshwar GIDC Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14840.457813292415!2d73.0035048!3d21.6318919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be02082f42a59f9%3A0x6e2dfbce11a76865!2sGIDC%2C%20Ankleshwar%2C%20Gujarat%20393002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-layout-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 576px) {
            .contact-form-2col {
              grid-template-columns: 1fr !important;
              gap: 10px !important;
            }
            .contact-layout-grid > div:last-child {
              padding: 20px 16px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

