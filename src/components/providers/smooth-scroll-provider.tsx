import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useBreakpoint } from '@/hooks/useBreakpoint';

gsap.registerPlugin(ScrollTrigger);

export let globalLenis: Lenis | null = null;

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    // Initialize Lenis with differentiated settings for a premium desktop feel
    const lenis = new Lenis({
      duration: isMobile ? 1.5 : 4.0, // Extremely slow on desktop
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: isMobile ? 1 : 0.4, // Extremely slow speed on PC
      touchMultiplier: 1.5,
    });

    globalLenis = lenis;

    // Integrate with existing GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));

    // Cleanup
    return () => {
      globalLenis = null;
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <>{children}</>;
}