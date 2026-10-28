import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 400);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0F172A',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: fading ? 'none' : 'all'
      }}
    >
      {/* Authentic Harihar Chemicals Emblem */}
      <div
        style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 0 35px rgba(211, 47, 47, 0.6)',
          marginBottom: '20px',
          backgroundColor: '#FFFFFF',
          padding: '4px'
        }}
      >
        <img
          src="/images/cropped/harihar_round_logo.png"
          alt="Harihar Chemicals Logo"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.05em', color: '#FFFFFF' }}>
          HARIHAR <span style={{ color: '#D32F2F' }}>CHEMICALS</span>
        </div>
        <div style={{ fontSize: '0.78rem', color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
          Precision Naphthols, Bases &amp; Dyes
        </div>
      </div>

      {/* Progress Line */}
      <div
        style={{
          width: '180px',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginTop: '28px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '60%',
            backgroundColor: '#D32F2F',
            borderRadius: '2px',
            animation: 'shimmer 1.2s infinite linear'
          }}
        />
      </div>
    </div>
  );
}

