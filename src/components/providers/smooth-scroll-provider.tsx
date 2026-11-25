import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useBreakpoint } from '@/hooks/useBreakpoint';

import { useLoadingStore } from '@/stores/loadingStore';

gsap.registerPlugin(ScrollTrigger);

export let globalLenis: Lenis | null = null;

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const { isMobile } = useBreakpoint();
  const isTransitionFinished = useLoadingStore(state => state.isTransitionFinished);

  useEffect(() => {
    // Natural, responsive smooth scrolling for desktop & mobile
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    globalLenis = lenis;

    // Integrate with existing GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    // Crucial: lagSmoothing(0) prevents GSAP from clamping or jumping frame timestamps during FPS dips
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      globalLenis = null;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, [isMobile]); // Reinitialize if breakpoint changes

  // Monitor loading state changes
  useEffect(() => {
    if (globalLenis) {
      if (!isTransitionFinished) {
        globalLenis.stop();
      } else {
        globalLenis.start();
      }
    }
  }, [isTransitionFinished]);

  return <>{children}</>;
}