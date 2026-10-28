import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteProgressBar() {
  const [animating, setAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 320);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!animating) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 99999,
        backgroundColor: 'transparent',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#D32F2F',
          boxShadow: '0 0 10px rgba(211, 47, 47, 0.8)',
          animation: 'routeProgress 0.32s ease-out forwards'
        }}
      />
      <style>{`
        @keyframes routeProgress {
          0% { width: 0%; }
          60% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

