import { 
  Menu,
  X
} from "lucide-react";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";


export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Lock Effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      globalLenis?.stop();
    } else {
      document.body.style.overflow = '';
      globalLenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      globalLenis?.start();
    };
  }, [isOpen]);

  const handleNavigationClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Logo - Left side */}
      <div className="fixed top-7 left-6 z-50 md:hidden">
        <img 
          src="/jsm-logo.png" 
          alt="Ameya Sharma Logo" 
          className="w-12 h-12" 
        />
      </div>

      {/* Mobile Hamburger Menu - Right side */}
      <div className="fixed top-7 right-6 z-50 md:hidden">
        <MorphingPopover open={isOpen} onOpenChange={setIsOpen}>
          {/* Trigger - Hamburger Menu */}
          <MorphingPopoverTrigger 
            className="flex items-center justify-center p-3 transition-all duration-500 hover:scale-105 active:scale-90 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </MorphingPopoverTrigger>
          
          {/* Content - Sidebar */}
          <MorphingPopoverContent 
            className="fixed inset-0 w-full h-[100dvh] rounded-none border-none bg-zinc-950/95 backdrop-blur-2xl z-[100] flex flex-col overflow-hidden"
          >
            {/* Creative Watermark - Vertical Scrolling Studio Marquee */}
            <div className="absolute inset-0 flex flex-row items-center justify-center pointer-events-none opacity-[0.03] select-none">
              <div className="flex flex-col gap-0 animate-vertical-scroll">
                {[...Array(6)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-[22vw] font-heading uppercase leading-none whitespace-nowrap -rotate-90 py-32"
                    style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
                  >
                    AMEYA SHARMA
                  </span>
                ))}
              </div>
            </div>

            {/* Top Bar */}
            <div className="relative z-[110] px-8 pt-[4vh] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary">Portfolio v3.0</span>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all active:scale-90"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            
            {/* Navigation Content */}
            <div className="relative z-10 flex-1 flex flex-col pt-[6vh]">
              <MobileNav onNavigationClick={handleNavigationClick} />
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </MorphingPopoverContent>
        </MorphingPopover>
      </div>
    </>
  );
}