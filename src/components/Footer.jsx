import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  FileDown, 
  ShieldCheck, 
  Award, 
  Layers, 
  Globe2, 
  ArrowRight,
  ExternalLink,
  Building2,
  Clock,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, NAPHTHOL_PRODUCTS, FAST_BASE_PRODUCTS } from '../data/chemicalsData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onOpenRfq }) {
  return (
    <footer
      style={{
        backgroundColor: 'var(--brand-grey-dark)',
        color: '#94A3B8',
        borderTop: '3px solid var(--brand-red)',
        position: 'relative',
        fontSize: '0.9rem'
      }}
    >
      {/* Upper Industrial Action Banner */}
      <div
        className="footer-cta-banner"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '48px 0',
          backgroundColor: 'rgba(15, 23, 42, 0.6)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-red)' }}>
                GLOBAL SUPPLY &amp; DIRECT MILL SHIPMENTS
              </span>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', marginTop: '4px' }}>
                Need Customized Azoic Formulations or Bulk Delivery?
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', marginTop: '2px' }}>
                Talk directly with our technical director or request comprehensive batch COA analysis.
              </p>
            </div>

            <div className="footer-cta-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenRfq()}
                style={{ fontWeight: 700 }}
              >
                <Sparkles size={16} />
                <span>Submit Technical RFQ</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneMobile.replace(/\s+/g, '')}`}
                className="btn btn-outline-white"
                style={{ fontWeight: 600 }}
              >
                <Phone size={16} color="var(--brand-red)" />
                <span>Call Plant: +91 70417 79000</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="container footer-main-container" style={{ padding: '64px 28px 48px 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr',
            gap: '48px'
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Heritage */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/images/harihar_full_logo_white.png"
                alt="Harihar Chemicals Logo"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '6px' }}>
                "Jay Mahadev" TM • G.I.D.C. Ankleshwar
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.65, color: '#CBD5E1', marginBottom: '20px' }}>
              One of the most reputed and reliable Naphthols and Fast Bases manufacturers and exporters from India. Serving global cellulosic dyeing, textile printing, and pigment industries with unwavering precision.
            </p>

            {/* Group Companies Badges */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '8px' }}>
                Harihar Group Companies:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.84rem' }}>
                <li style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--brand-red)' }}>▸</span> <strong>Harihar Chemicals</strong>
                </li>
                <li style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--brand-red)' }}>▸</span> <strong>Harihar Pharma Chem</strong>
                </li>
                <li style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--brand-red)' }}>▸</span> <strong>Harihar Impex</strong>
                </li>
                <li style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--brand-red)' }}>▸</span> <strong>Astitva Lifecare Sciences</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Chemical Portfolio
                </Link>
              </li>
              <li>
                <Link to="/shade-card" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Interactive Shade Card
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Manufacturing Suites
                </Link>
              </li>
              <li>
                <Link to="/quality" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Quality Control Lab
                </Link>
              </li>
              <li>
                <Link to="/applications" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Textile Applications
                </Link>
              </li>
              <li>
                <Link to="/dyeing-process" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Technical Dyeing Guide
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  About Our Group
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#CBD5E1', textDecoration: 'none', transition: '0.15s' }}>
                  Contact &amp; Plant Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Dyestuffs & Downloads */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Key Dyestuffs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Harithol AS (C.I. 37505)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Harithol AS-G (C.I. 37610)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Harithol AS-SW (C.I. 37565)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Harithol AS-BO (C.I. 37560)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Fast Blue B Base (C.I. 37235)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Fast Yellow GC Base (C.I. 37000)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Fast Scarlet G Base (C.I. 37105)</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Fast Red B Base (C.I. 37130)</Link></li>
            </ul>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}
              >
                <FileDown size={15} color="var(--brand-red)" />
                Official Shade Card (PDF)
              </a>
              <a
                href="/docs/Harihar_Chemicals_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600
                }}
              >
                <FileDown size={15} color="var(--brand-red)" />
                Corporate Brochure (PDF)
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Factory Details */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Plant &amp; Registered Office
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#CBD5E1', lineHeight: 1.5 }}>
                  {COMPANY_INFO.registeredAddress}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={17} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${COMPANY_INFO.phoneMobile.replace(/\s+/g, '')}`} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>
                    {COMPANY_INFO.phoneMobile}
                  </a>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#94A3B8' }}>
                    Mr. Prakash C Rawal (Director)
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={17} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#CBD5E1' }}>
                  {COMPANY_INFO.phoneLandlines.join(' • ')}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={17} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {COMPANY_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.15s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe2 size={17} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#CBD5E1' }}>
                  {COMPANY_INFO.website}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '22px 0',
          backgroundColor: '#090D16',
          fontSize: '0.8rem',
          color: '#64748B'
        }}
      >
        <div className="container footer-legal-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} <strong>Harihar Chemicals Industries</strong>. All Rights Reserved. ISO 9001:2015 Certified.
          </div>

          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <span>Life Member AIA Ankleshwar</span>
            <span>•</span>
            <span>Laghu Udyog Bharati Member</span>
            <span>•</span>
            <span>Government of Gujarat Recognized</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-cta-banner {
            padding: 32px 0 !important;
          }
          .footer-cta-buttons {
            width: 100% !important;
            flex-direction: column !important;
          }
          .footer-cta-buttons .btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .footer-main-container {
            padding: 36px 16px 28px 16px !important;
          }
          .footer-legal-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
}

