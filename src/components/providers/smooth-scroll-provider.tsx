import { useEffect } from 'react';
import Lenis from 'lenis';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useLoadingStore } from '@/stores/loadingStore';

export let globalLenis: Lenis | null = null;

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const { isMobile } = useBreakpoint();
  const isTransitionFinished = useLoadingStore(state => state.isTransitionFinished);

  useEffect(() => {
    // Native compositor scrolling for zero-jitter, fluid desktop & mobile experience (just like mobile)
    // while keeping Lenis for smooth programmatic anchor jumps (scrollTo)
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: false,
      autoRaf: true,
      touchMultiplier: 1.5,
    });

    globalLenis = lenis;

    // Cleanup
    return () => {
      globalLenis = null;
      lenis.destroy();
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