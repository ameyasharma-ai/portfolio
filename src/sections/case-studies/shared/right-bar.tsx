import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ProjectData } from "../types";

interface RightBarProps {
  projectData: ProjectData;
}

export function RightBar({ projectData }: RightBarProps) {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const prevProjectDataRef = useRef<ProjectData | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    
    // Check if the projectData has actually changed
    const hasChanged = prevProjectDataRef.current && 
      prevProjectDataRef.current.title !== projectData.title;

    if (hasChanged) {
      // Animate content transition
      const tl = gsap.timeline();
      
      tl
        // Fade out and slide up current content
        .to(content, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out"
        })
        // Update content happens here (React will re-render)
        .call(() => {
          // Force a re-render by updating the key or triggering a state change
          // The content change happens automatically via React
        })
        // Fade in and slide down new content
        .fromTo(content, 
          { 
            opacity: 0, 
            y: 20 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          }
        );
    } else if (!prevProjectDataRef.current) {
      // Initial render - just fade in
      gsap.fromTo(content, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Update the previous data reference
    prevProjectDataRef.current = projectData;
  }, [projectData]);

  const handleLiveDemoClick = () => {
    window.open(projectData.buttons.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLearnMoreClick = () => {
    // Save scroll position before navigating
    sessionStorage.setItem('homeScrollY', window.scrollY.toString());
    navigate(projectData.buttons.detailPath);
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div ref={contentRef} className="flex flex-col h-full">
        {/* Header - Hidden on screens < 1390px */}
        <div className="mb-6 hidden [@media(min-width:1390px)]:block">
          <h3 className="font-heading text-2xl text-foreground mb-2">
            {projectData.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {projectData.description}
          </p>
        </div>

        {/* Dynamic Sections - Hidden on screens < 1390px */}
        <div className="flex-1 hidden [@media(min-width:1390px)]:block">
          {projectData.sections.map((section, index) => (
            <div key={`${projectData.title}-${section.title}-${index}`} className={index === projectData.sections.length - 1 ? "" : "mb-6"}>
              <h4 className="font-heading text-lg text-foreground mb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={`${projectData.title}-${section.title}-${itemIndex}`} className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Buttons - Always visible, but positioning adjusts based on screen size */}
        <div className="flex items-center gap-6 mt-0 [@media(min-width:1390px)]:mt-6 justify-start">
          <button
            onClick={handleLiveDemoClick}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg font-body text-sm text-foreground hover:border-ring transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </button>
          <button
            onClick={handleLearnMoreClick}
            className="font-heading text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer"
          >
            Learn More
            <ArrowRight className="w-5 h-5 mb-1" />
          </button>
        </div>
      </div>
    </div>
  );
}