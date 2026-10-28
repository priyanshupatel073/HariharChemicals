import React, { useEffect, useRef } from 'react';

/**
 * MolecularCanvas
 * Interactive, high-precision industrial chemical particle background.
 * Renders delicate chemical nodes, benzene-ring bonds, and covalent linkages
 * in the Industrial Crimson (#D32F2F) and Tech Slate (#1E293B / #64748B) palette.
 */
export default function MolecularCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes count based on screen area
    const particleCount = Math.floor((width * height) / 20000);
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 130 };

    // Brand Palette Nodes: Crimson Red, Garnet, Slate Dark, Cool Slate
    const colors = [
      'rgba(211, 47, 47, 0.55)',   // Brand Red
      'rgba(154, 0, 7, 0.45)',     // Brand Red Dark
      'rgba(30, 41, 59, 0.35)',    // Slate Dark
      'rgba(100, 116, 139, 0.28)'  // Slate Cool
    ];

    for (let i = 0; i < Math.max(particleCount, 32); i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.2 + 1.2,
        baseRadius: Math.random() * 2.2 + 1.2,
        color: colors[i % colors.length],
        isAzoNode: i % 5 === 0 // Special pulsating azo chromophore node
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.02;

      // Draw covalent bonds between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce on boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse gentle physics repulsion
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= (dxMouse / (distMouse || 1)) * force * 1.6;
          p1.y -= (dyMouse / (distMouse || 1)) * force * 1.6;
        }

        // Draw node
        ctx.beginPath();
        const pulse = p1.isAzoNode ? Math.sin(tick + i) * 0.8 : 0;
        ctx.arc(p1.x, p1.y, Math.max(1, p1.radius + pulse), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        // Connect bonds
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 115) * 0.22;
            ctx.strokeStyle = p1.isAzoNode || p2.isAzoNode
              ? `rgba(211, 47, 47, ${alpha * 1.4})`
              : `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.85
      }}
    />
  );
}
