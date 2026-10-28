import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  FileDown, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { COMPANY_INFO } from '../data/chemicalsData';

export default function Navbar({ onOpenRfq }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDocsDropdownOpen(false);
  }, [location.pathname]);

  // Streamlined, clean, single-line navigation links
  const navLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Shade Card', path: '/shade-card' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Quality', path: '/quality' },
    { label: 'Applications', path: '/applications' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const mobileNavLinks = [
    { label: 'Products Catalog', path: '/products' },
    { label: 'Interactive Shade Card', path: '/shade-card' },
    { label: 'Manufacturing Suites', path: '/manufacturing' },
    { label: 'Quality Control Lab', path: '/quality' },
    { label: 'Textile Applications', path: '/applications' },
    { label: 'Technical Dyeing Guide', path: '/dyeing-process' },
    { label: 'About Harihar', path: '/about' },
    { label: 'Contact & Plant Location', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        transition: 'all 0.25s ease-in-out'
      }}
    >
      {/* Top Utility Verification Bar */}
      <div
        style={{
          backgroundColor: 'var(--brand-grey-dark)',
          color: '#94A3B8',
          fontSize: '0.78rem',
          padding: '6px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E2E8F0', whiteSpace: 'nowrap' }}>
              <ShieldCheck size={13} color="var(--brand-red)" />
              <span><strong style={{ color: '#FFFFFF' }}>ISO 9001:2015</strong> Certified Chemical Facility</span>
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="d-none-sm">•</span>
            <span style={{ alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }} className="d-none-sm">
              <MapPin size={12} color="var(--brand-red)" />
              Plot J-5248, G.I.D.C. Ankleshwar, Gujarat (INDIA)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', whiteSpace: 'nowrap' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneMobile.replace(/\s+/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#E2E8F0',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.78rem'
              }}
            >
              <Phone size={12} color="var(--brand-red)" />
              <span>{COMPANY_INFO.phoneMobile}</span>
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="d-none-sm">•</span>
            <span className="d-none-sm" style={{ color: '#94A3B8', fontSize: '0.78rem' }}>
              Toll Free: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.tollFree}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--brand-grey-light)',
          boxShadow: scrolled ? 'var(--shadow-md)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
          transition: 'all 0.25s ease'
        }}
      >
        <div 
          className="container" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: '72px',
            gap: '16px'
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0
            }}
          >
            {/* Authentic Circular Emblem */}
            <img
              src="/images/cropped/harihar_round_logo.png"
              alt="Harihar Chemicals Logo"
              style={{
                width: '42px',
                height: '42px',
                objectFit: 'contain',
                borderRadius: '50%',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                flexShrink: 0
              }}
            />

            {/* Typography */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', lineHeight: 1 }}>
                <span
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: 'var(--brand-grey-dark)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  HARIHAR
                </span>
                <span
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--brand-red)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  CHEMICALS
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-grey-medium)',
                  marginTop: '3px',
                  lineHeight: 1
                }}
              >
                Naphthols, Bases &amp; Dyes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Single-Line, Minimalist & Aligned) */}
          <div
            className="d-none-lg"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              margin: '0 auto'
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 12px',
                    fontSize: '0.88rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? 'var(--brand-red)' : 'var(--brand-grey-slate)',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    transition: 'all 0.15s ease',
                    backgroundColor: active ? 'var(--brand-red-light)' : 'transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '36px'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = 'var(--brand-red)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = 'var(--brand-grey-slate)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '2px',
                        backgroundColor: 'var(--brand-red)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Area: Tech Docs & RFQ Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Tech Docs Dropdown */}
            <div style={{ position: 'relative' }} className="d-none-sm">
              <button
                type="button"
                onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--brand-grey-light)',
                  borderRadius: '6px',
                  color: 'var(--brand-grey-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                  height: '38px'
                }}
              >
                <FileDown size={14} color="var(--brand-red)" />
                <span>Tech Docs</span>
                <ChevronDown size={13} style={{ transform: docsDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {docsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '6px',
                    width: '260px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--brand-grey-light)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '8px',
                    zIndex: 1100
                  }}
                >
                  <Link
                    to="/dyeing-process"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <BookOpen size={16} color="var(--brand-red)" />
                    <div>
                      <div>Technical Dyeing Guide</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 400 }}>Dissolving &amp; Diazotisation Recipes</div>
                    </div>
                  </Link>

                  <a
                    href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Harihar_Chemicals_Shade_Card.pdf"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <FileDown size={16} color="var(--brand-red)" />
                    <div>
                      <div>Official Shade Card</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 400 }}>15-Page PDF • Recipes &amp; Fastness</div>
                    </div>
                  </a>

                  <a
                    href="/docs/Harihar_Chemicals_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Harihar_Chemicals_Brochure.pdf"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <FileDown size={16} color="var(--brand-red)" />
                    <div>
                      <div>Corporate Brochure</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 400 }}>Plant Specs &amp; Packaging Formats</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Primary RFQ Button (Sleek Minimalist Pill) */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenRfq()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                fontSize: '0.84rem',
                fontWeight: 700,
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                height: '38px',
                boxShadow: 'var(--shadow-red-glow)'
              }}
            >
              <Sparkles size={14} />
              <span>Request RFQ</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="d-mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--brand-grey-dark)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginLeft: '4px'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid var(--brand-grey-light)',
              padding: '18px 20px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {mobileNavLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      fontWeight: active ? 700 : 500,
                      color: active ? 'var(--brand-red)' : 'var(--brand-grey-dark)',
                      backgroundColor: active ? 'var(--brand-red-light)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={15} color={active ? 'var(--brand-red)' : '#94A3B8'} />
                  </Link>
                );
              })}

              <div style={{ borderTop: '1px solid var(--brand-grey-light)', paddingTop: '14px', marginTop: '10px' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--brand-grey-medium)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                  TECHNICAL DOWNLOADS
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <a
                    href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 10px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    <FileDown size={14} color="var(--brand-red)" />
                    Shade Card (PDF)
                  </a>
                  <a
                    href="/docs/Harihar_Chemicals_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 10px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    <FileDown size={14} color="var(--brand-red)" />
                    Brochure (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive helper styles for Navbar */}
      <style>{`
        @media (max-width: 1120px) {
          .d-none-lg { display: none !important; }
        }
        @media (min-width: 1121px) {
          .d-mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .d-none-sm { display: none !important; }
        }
      `}</style>
    </header>
  );
}
