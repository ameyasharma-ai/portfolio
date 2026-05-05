import { useEffect, useRef, useState } from 'react';

interface UseVideoViewportOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

interface UseVideoViewportReturn {
  isInViewport: boolean;
}

export function useVideoViewport(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  options: UseVideoViewportOptions = {}
): UseVideoViewportReturn {
  const {
    threshold = 0.5,
    rootMargin = '0px',
    enabled = true
  } = options;

  const [isInViewport, setIsInViewport] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle viewport detection
  useEffect(() => {
    if (!enabled || !videoRef.current) {

      return;
    }

    const video = videoRef.current;


    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inViewport = entry.isIntersecting;

          setIsInViewport(inViewport);
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    // Start observing
    observerRef.current.observe(video);


    // Cleanup function
    return () => {
      if (observerRef.current) {

        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [enabled, threshold, rootMargin, videoRef]);

  return {
    isInViewport
  };
}