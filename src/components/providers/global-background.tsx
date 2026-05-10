'use client';
import { useEffect, useRef } from 'react';

export function GlobalBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="premium-bg-container">
        <div className="bg-grid" />
        <div className="mesh-gradient" />
      </div>
      <div ref={spotlightRef} className="mouse-spotlight" />
      <div className="noise-overlay" />
    </>
  );
}
