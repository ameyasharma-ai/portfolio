import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export type ActiveCaseStudy = 'design' | 'advertising' | 'codegraph';

export function useScrollTransition() {
  // Refs for GSAP targeting
  const sectionRef = useRef<HTMLDivElement>(null);
  const designVideoRef = useRef<HTMLDivElement>(null);
  const advertisingVideoRef = useRef<HTMLDivElement>(null);
  const codegraphVideoRef = useRef<HTMLDivElement>(null);
  const rightBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // State to track which case study is currently active
  const [activeCaseStudy, setActiveCaseStudy] = useState<ActiveCaseStudy>('design');

  useLayoutEffect(() => {
    if (!sectionRef.current || !designVideoRef.current || !advertisingVideoRef.current || !codegraphVideoRef.current) {
      return;
    }

    const section = sectionRef.current;
    const designVideo = designVideoRef.current;
    const advertisingVideo = advertisingVideoRef.current;
    const codegraphVideo = codegraphVideoRef.current;

    // Set initial positions and promote to GPU layers immediately
    gsap.set([designVideo, advertisingVideo, codegraphVideo], { 
      force3D: true, 
      willChange: 'transform' 
    });
    
    gsap.set(designVideo, { y: 0, zIndex: 3 });
    gsap.set(advertisingVideo, { y: '100%', zIndex: 2 });
    gsap.set(codegraphVideo, { y: '100%', zIndex: 1 });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: '+=200%', // Increased scroll distance for 3 projects
        pin: true,
        scrub: true, // 1:1 scroll responsiveness for fluid feel
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Use a small buffer to prevent rapid switching at boundaries
          if (progress < 0.32) {
            setActiveCaseStudy(current => (current !== 'design' ? 'design' : current));
          } else if (progress >= 0.34 && progress < 0.65) {
            setActiveCaseStudy(current => (current !== 'advertising' ? 'advertising' : current));
          } else if (progress >= 0.67) {
            setActiveCaseStudy(current => (current !== 'codegraph' ? 'codegraph' : current));
          }
        },
        invalidateOnRefresh: true,
      }
    });

    // Add video transition animations to timeline
    tl
      // --- Transition 1: Design to Advertising ---
      .to(designVideo, {
        y: '-100%',
        duration: 1.5,
        ease: 'power3.inOut'
      }, 0)
      .to(advertisingVideo, {
        y: '0%',
        duration: 1.5,
        ease: 'power3.inOut'
      }, 0)
      
      // --- Transition 2: Advertising to CodeGraph ---
      .to(advertisingVideo, {
        y: '-100%',
        duration: 1.5,
        ease: 'power3.inOut'
      }, 1) // Start at the middle of the timeline
      .to(codegraphVideo, {
        y: '0%',
        duration: 1.5,
        ease: 'power3.inOut'
      }, 1);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, []);

  // Clever Fix: Force a series of refreshes after mount
  // This ensures that all layout shifts (images loading, fonts, etc.) are captured
  useLayoutEffect(() => {
    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 2000);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    // Refs for the components to use
    sectionRef,
    designVideoRef,
    advertisingVideoRef,
    codegraphVideoRef,
    rightBarRef,
    bottomBarRef,
    
    // Current active case study
    activeCaseStudy,
  };
}