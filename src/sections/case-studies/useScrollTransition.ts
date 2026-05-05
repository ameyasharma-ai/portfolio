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

    // Set initial positions
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
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Precise content switching based on animation progress
          if (self.progress < 0.33) {
            setActiveCaseStudy(current => {
              if (current !== 'design') {
                return 'design';
              }
              return current;
            });
          } else if (self.progress >= 0.33 && self.progress < 0.66) {
            setActiveCaseStudy(current => {
              if (current !== 'advertising') {
                return 'advertising';
              }
              return current;
            });
          } else {
            setActiveCaseStudy(current => {
              if (current !== 'codegraph') {
                return 'codegraph';
              }
              return current;
            });
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
        duration: 1,
        ease: 'power2.inOut'
      }, 0)
      .to(advertisingVideo, {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut'
      }, 0)
      
      // --- Transition 2: Advertising to CodeGraph ---
      .to(advertisingVideo, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut'
      }, 1) // Start at the middle of the timeline
      .to(codegraphVideo, {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut'
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

  // Additional effect to handle window resize
  useLayoutEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
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