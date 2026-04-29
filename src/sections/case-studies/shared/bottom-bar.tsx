import { useRef, useEffect } from "react";
import gsap from "gsap";
import type { TechStackItem } from "../types";

interface BottomBarProps {
  techStack: TechStackItem[];
}

export function BottomBar({ techStack }: BottomBarProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const prevTechStackRef = useRef<TechStackItem[] | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    
    // Check if the techStack has actually changed
    const hasChanged = prevTechStackRef.current && 
      prevTechStackRef.current.length > 0 &&
      prevTechStackRef.current[0].name !== techStack[0].name;

    if (hasChanged) {
      // Animate content transition
      const tl = gsap.timeline();
      
      tl
        // Fade out and scale down current content
        .to(content, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out"
        })
        // Update content happens here (React will re-render)
        .call(() => {
          // Force a re-render - the content change happens automatically via React
        })
        // Fade in and scale up new content
        .fromTo(content, 
          { 
            opacity: 0, 
            scale: 0.95 
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          }
        );
    } else if (!prevTechStackRef.current) {
      // Initial render - just fade in
      gsap.fromTo(content, 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    // Update the previous tech stack reference
    prevTechStackRef.current = techStack;
  }, [techStack]);

  // Split tech stack for mobile layout
  const getRowsForMobile = (items: TechStackItem[]) => {
    if (items.length === 6) {
      // Design platform: 3 + 3
      return [items.slice(0, 3), items.slice(3, 6)];
    } else if (items.length === 5) {
      // Advertising platform: 3 + 2
      return [items.slice(0, 3), items.slice(3, 5)];
    }
    // Fallback: split roughly in half
    const mid = Math.ceil(items.length / 2);
    return [items.slice(0, mid), items.slice(mid)];
  };

  const mobileRows = getRowsForMobile(techStack);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 [@media(min-width:1390px)]:p-6">
      <div ref={contentRef} className="w-full max-w-4xl">
        
        {/* Desktop Layout (screens ≥600px) - Single row with justify-between */}
        <div className="hidden min-[600px]:flex items-center justify-between w-full">
          {techStack.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex flex-col items-center gap-4">
              {tech.icon}
              <span className="font-body text-sm font-light text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Layout (screens <600px) - 3-column grid for perfect alignment */}
        <div className="min-[600px]:hidden grid grid-cols-3 gap-y-6 gap-x-4 w-full">
          {techStack.map((tech, index) => (
            <div key={`${tech.name}-mobile-${index}`} className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center [&>svg]:w-8 [&>svg]:h-8">
                {tech.icon}
              </div>
              <span className="font-body text-xs font-light text-foreground text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}