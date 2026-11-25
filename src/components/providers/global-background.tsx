'use client';
import { useEffect, useRef } from 'react';

export function GlobalBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
          spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="premium-bg-container">
        <div className="bg-grid" />
        <div className="mesh-gradient" />
      </div>
      <div ref={spotlightRef} className="mouse-spotlight" />
    </>
  );
}
