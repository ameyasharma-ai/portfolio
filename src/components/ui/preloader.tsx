import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoadingStore } from "@/stores/loadingStore";
import { Zap } from "lucide-react";
import { CRITICAL_ASSETS, preloadImages } from "@/utils/asset-preloader";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

export function Preloader() {
  const { isLoading, setTransitionFinished } = useLoadingStore();
  const [minTimeReached, setMinTimeReached] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [counter, setCounter] = useState(0);

  // Preload assets and manage loading state
  useEffect(() => {
    // Minimum 2.5s for premium feel
    const timer = setTimeout(() => {
      setMinTimeReached(true);
    }, 2500);

    // Preload critical images
    preloadImages(CRITICAL_ASSETS).then(() => {
      setAssetsLoaded(true);
    });

    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < 99) return prev + 1;
        return prev;
      });
    }, 25);

    // Pre-paint pass: force browser to rasterize ALL page tiles by scrolling
    // through the entire document while the preloader overlay (z-9999) is opaque.
    // The browser's compositor only rasterizes tiles near the current viewport. 
    // By scrolling to each viewport-height chunk, we force every tile row to be
    // painted. This eliminates first-scroll jank at section boundaries.
    // The user sees nothing because the fixed preloader covers everything.
    // We temporarily stop Lenis to prevent it from fighting the scroll positions.
    const prePaintTimer = setTimeout(() => {
      // Pause Lenis so it doesn't interfere with our programmatic scrolling
      if (globalLenis) globalLenis.stop();
      
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const steps = Math.ceil(docHeight / viewHeight);
      const timeouts: ReturnType<typeof setTimeout>[] = [];
      
      for (let i = 1; i <= steps; i++) {
        const t = setTimeout(() => {
          window.scrollTo(0, i * viewHeight);
        }, i * 32); // ~2 frames per step for rasterizer to process
        timeouts.push(t);
      }

      // After all steps, scroll back to top and resume Lenis
      const returnTimeout = setTimeout(() => {
        window.scrollTo(0, 0);
        if (globalLenis) globalLenis.start();
      }, (steps + 1) * 32 + 50);
      timeouts.push(returnTimeout);

      // Store timeouts for cleanup
      (window as any).__prePaintTimeouts = timeouts;
    }, 500); // Wait for React DOM commit + Lenis init

    return () => {
      clearTimeout(timer);
      clearTimeout(prePaintTimer);
      clearInterval(interval);
      // Clean up any pending pre-paint scroll timeouts
      const pendingTimeouts = (window as any).__prePaintTimeouts;
      if (pendingTimeouts) {
        pendingTimeouts.forEach((t: ReturnType<typeof setTimeout>) => clearTimeout(t));
        delete (window as any).__prePaintTimeouts;
      }
    };
  }, []);

  // Sync completion with store
  useEffect(() => {
    if (!isLoading && minTimeReached) {
      // Small delay to allow exit animation to begin
      const timer = setTimeout(() => {
        setTransitionFinished(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, minTimeReached, setTransitionFinished]);

  const shouldShow = isLoading || !minTimeReached || !assetsLoaded;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden px-6"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

          <div className="relative w-full max-w-sm space-y-8">
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-full border border-primary/20 border-t-primary flex items-center justify-center"
              >
                <Zap className="w-5 h-5 text-primary" />
              </motion.div>
              
              <div className="text-center space-y-1">
                <h2 className="text-sm font-heading tracking-[0.4em] uppercase text-white/90">
                  Initializing
                </h2>
                <div className="text-[10px] font-heading tracking-[0.6em] uppercase text-primary animate-pulse">
                  High Power Systems
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-end text-[10px] font-heading uppercase tracking-widest text-white/40">
                <span>System Status</span>
                <span className="text-primary tabular-nums">{counter}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${counter}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
