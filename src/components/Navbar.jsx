import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  FileDown, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Download,
  Flame,
  ArrowRight
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

  const navLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Shade Card', path: '/shade-card' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Quality Lab', path: '/quality' },
    { label: 'Applications', path: '/applications' },
    { label: 'Dyeing Guide', path: '/dyeing-process' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
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
      {/* Top Industrial Verification Bar */}
      <div
        style={{
          backgroundColor: 'var(--brand-grey-dark)',
          color: '#94A3B8',
          fontSize: '0.8rem',
          padding: '6px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E2E8F0' }}>
              <ShieldCheck size={14} color="#D32F2F" />
              <strong style={{ color: '#FFFFFF' }}>ISO 9001:2015</strong> Certified Chemical Facility
            </span>
            <span style={{ display: 'none', md: 'inline', alignItems: 'center', gap: '6px' }} className="d-none-sm">
              <MapPin size={13} color="#D32F2F" />
              Plot J-5248, G.I.D.C. Ankleshwar, Gujarat (INDIA)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneMobile.replace(/\s+/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#E2E8F0',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              <Phone size={13} color="#D32F2F" />
              <span>{COMPANY_INFO.phoneMobile}</span>
            </a>
            <span style={{ opacity: 0.4 }} className="d-none-sm">|</span>
            <span className="d-none-sm" style={{ color: '#94A3B8' }}>
              Toll Free: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.tollFree}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--brand-grey-light)',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transition: 'all 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '78px' }}>
          {/* Logo Section */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}
          >
            {/* Hexagonal HC Emblem */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #D32F2F 0%, #9A0007 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(211, 47, 47, 0.35)',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.05em', lineHeight: 1, opacity: 0.9 }}>HC</span>
              <span style={{ fontSize: '1.05rem', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>HC</span>
              <div
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  width: '16px',
                  height: '2px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '1px'
                }}
              />
            </div>

            {/* Typography */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  style={{
                    fontSize: 'clamp(0.92rem, 3.8vw, 1.28rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: 'var(--brand-grey-dark)',
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.15
                  }}
                >
                  HARIHAR
                </span>
                <span
                  style={{
                    fontSize: 'clamp(0.92rem, 3.8vw, 1.28rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--brand-red)',
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.15
                  }}
                >
                  CHEMICALS
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <span
                  style={{
                    fontSize: 'clamp(0.58rem, 2.2vw, 0.68rem)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-grey-medium)'
                  }}
                >
                  Naphthols, Bases &amp; Dyes
                </span>
                <span
                  className="d-none-xs"
                  style={{
                    fontSize: '0.62rem',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--brand-red-light)',
                    color: 'var(--brand-red-dark)',
                    fontWeight: 700
                  }}
                >
                  Est. 1997
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="d-none-lg"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.92rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? 'var(--brand-red)' : 'var(--brand-grey-slate)',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    position: 'relative',
                    transition: 'all 0.18s ease',
                    backgroundColor: active ? 'var(--brand-red-light)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--brand-red)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--brand-grey-slate)';
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

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Download Documents Dropdown */}
            <div style={{ position: 'relative' }} className="d-none-sm">
              <button
                type="button"
                onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 14px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--brand-grey-light)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--brand-grey-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease'
                }}
              >
                <Download size={14} color="var(--brand-red)" />
                <span>Tech Docs</span>
                <ChevronDown size={14} style={{ transform: docsDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {docsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    width: '240px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--brand-grey-light)',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '8px',
                    zIndex: 1100
                  }}
                >
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
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <FileDown size={16} color="var(--brand-red)" />
                    <div>
                      <div>Official Shade Card</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 400 }}>PDF • Recipes &amp; Fastness</div>
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
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <FileDown size={16} color="var(--brand-red)" />
                    <div>
                      <div>Corporate Brochure</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-grey-medium)', fontWeight: 400 }}>PDF • Plant &amp; Packaging Specs</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Primary RFQ CTA */}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => onOpenRfq()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                letterSpacing: '0.01em',
                boxShadow: 'var(--shadow-red-glow)',
                padding: '7px 12px',
                fontSize: '0.82rem'
              }}
            >
              <Sparkles size={14} />
              <span><span className="d-none-sm">Request </span>RFQ</span>
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
                flexShrink: 0
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid var(--brand-grey-light)',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: active ? 700 : 500,
                      color: active ? 'var(--brand-red)' : 'var(--brand-grey-dark)',
                      backgroundColor: active ? 'var(--brand-red-light)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} color={active ? 'var(--brand-red)' : '#94A3B8'} />
                  </Link>
                );
              })}

              <div style={{ borderTop: '1px solid var(--brand-grey-light)', paddingTop: '16px', marginTop: '8px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-grey-medium)', marginBottom: '10px' }}>
                  TECHNICAL DOWNLOADS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/docs/Harihar_Chemicals_Shade_Card.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}
                  >
                    <FileDown size={16} color="var(--brand-red)" />
                    Download Official Shade Card (PDF)
                  </a>
                  <a
                    href="/docs/Harihar_Chemicals_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'var(--brand-grey-dark)',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}
                  >
                    <FileDown size={16} color="var(--brand-red)" />
                    Download Corporate Brochure (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive helper styles for Navbar */}
      <style>{`
        @media (max-width: 992px) {
          .d-none-lg { display: none !important; }
        }
        @media (min-width: 993px) {
          .d-mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .d-none-sm { display: none !important; }
        }
        @media (max-width: 480px) {
          .d-none-xs { display: none !important; }
        }
      `}</style>
    </header>
  );
}
