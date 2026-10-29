import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 300);
    }, 450);

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
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: fading ? 'none' : 'all'
      }}
    >
      {/* Minimalist Logo Emblem with Spinning Ring */}
      <div
        style={{
          position: 'relative',
          width: '58px',
          height: '58px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Subtle Minimalist Spinner Track & Accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2.5px solid rgba(211, 47, 47, 0.15)',
            borderTopColor: '#D32F2F',
            animation: 'hc-spin 0.75s linear infinite'
          }}
        />

        {/* Minimalist Trademark Emblem */}
        <img
          src="/images/cropped/harihar_round_logo.png"
          alt="Harihar"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            objectFit: 'contain'
          }}
        />
      </div>

      <style>{`
        @keyframes hc-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

