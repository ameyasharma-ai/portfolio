import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoadingStore } from "@/stores/loadingStore";
import { Zap } from "lucide-react";

export function Preloader() {
  const { isLoading } = useLoadingStore();
  const [minTimeReached, setMinTimeReached] = useState(false);
  const [counter, setCounter] = useState(0);

  // Ensure preloader stays for at least 2.5 seconds for premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeReached(true);
    }, 2500);

    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < 99) return prev + 1;
        return prev;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const shouldShow = isLoading || !minTimeReached;

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
