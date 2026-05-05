import { useRef, useLayoutEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useVerticalScroll() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  
  // Shadow states for vertical scrolling
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(true);

  // Progress tracking states
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useLayoutEffect(() => {
    if (!trackRef.current || !viewportRef.current) return;

    const track = trackRef.current;
    const viewport = viewportRef.current;
    
    // Find the about-me section to use as trigger
    const section = track.closest('section');
    if (!section) return;

    const getDistance = () => {
      const total = track.scrollHeight;          // full height of all skill items
      const visible = viewport.clientHeight;     // the actual masked visible area
      return Math.max(0, total - visible);
    };

    const tween = gsap.to(track, {
      y: () => -getDistance(),
      ease: "none",
      duration: 1, // ignored with scrub; ok to keep simple
    });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",            // pin when section end hits viewport bottom
      end: () => `+=${getDistance()}`,   // scrub exactly the distance needed
      pin: true,
      animation: tween,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        setScrollProgress(prev => {
          if (Math.abs(prev - progress) > 0.005) return progress;
          return prev;
        });

        const scrolling = progress > 0 && progress < 1;
        setIsScrolling(scrolling);
        
        const top = progress > 0.01;
        setShowTopShadow(prev => (prev !== top ? top : prev));
        
        const bottom = progress < 0.99;
        setShowBottomShadow(prev => (prev !== bottom ? bottom : prev));
      },
      onEnter: () => {
        setIsScrolling(true);
      },
      onLeave: () => {
        setIsScrolling(false);
      },
      onEnterBack: () => {
        setIsScrolling(true);
      },
      onLeaveBack: () => {
        setIsScrolling(false);
      },
      // markers: true, // Uncomment for debugging
    });

    // Respect users with reduced motion
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: reduce)", () => {
      st.disable(true);
      tween.progress(0).kill();
    });

    // If images/fonts shift size later, refresh distances
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      mm.kill();
      st.kill();
      tween.kill();
    };
  }, []);

  return { 
    trackRef, 
    viewportRef,
    showTopShadow,
    showBottomShadow,
    scrollProgress,     // Now exposed for testing
    isScrolling         // Now exposed for testing
  };
}