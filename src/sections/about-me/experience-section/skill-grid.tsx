import { useState, useEffect } from 'react';
import gitBranchIcon from '../../../assets/gitBranchIcon.svg';
import plugIcon from '../../../assets/plugIcon.svg';
import ragDocIcon from '../../../assets/ragDocIcon.svg';
import langchainIcon from '../../../assets/langachainIcon.svg';
import layersIcon from '../../../assets/layersIcon.svg';
import shieldCheckIcon from '../../../assets/shieldCheckIcon.svg';
import codeIcon from '../../../assets/codeIcon.svg';
import cpuIcon from '../../../assets/cpuIcon.svg';
import creditCardIcon from '../../../assets/creditCardIcon.svg';
import buildingIcon from '../../../assets/buildingIcon.svg';
import { useVerticalScroll } from './useVerticalScroll';
import { useHorizontalScrollSkills } from './useHorizontalScrollSkills';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  text: string;
  icon: string;
}

export function SkillGrid() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1381);
    };

    // Check initial size
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const skills: SkillItem[] = [
    { text: "ML Pipelines", icon: gitBranchIcon },
    { text: "Multi-platform Integrations", icon: plugIcon },
    { text: "RAG Systems", icon: ragDocIcon },
    { text: "LangChain", icon: langchainIcon },
    { text: "Multi-tenant SaaS", icon: layersIcon },
    { text: "Enterprise Data Governance", icon: shieldCheckIcon },
    { text: "Full-stack Dev", icon: codeIcon },
    { text: "ML Algorithms", icon: cpuIcon },
    { text: "Payment Processing", icon: creditCardIcon },
    { text: "System Architecture", icon: buildingIcon },
  ];

  if (isLargeScreen) {
    return <VerticalSkillGrid skills={skills} />;
  }

  return <HorizontalSkillGrid skills={skills} />;
}

// Vertical version for large screens (>= 1381px) - existing implementation
function VerticalSkillGrid({ skills }: { skills: SkillItem[] }) {
  const { 
    trackRef, 
    viewportRef, 
    showTopShadow, 
    showBottomShadow,
    scrollProgress,
    isScrolling
  } = useVerticalScroll();

  // Add console logging to test vertical progress


  return (
    <div className="relative flex flex-col gap-3 flex-1 max-h-[553px]">
      {/* Vertical Scroll Progress Bar - appears when scrolling */}
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -right-[14px] top-0 bottom-0 w-2 z-20"
          >
            <div className="h-full w-1 bg-gray-800 rounded-full">
              <ScrollProgress
                orientation="vertical"
                progress={scrollProgress}
                className="h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full"
                springOptions={{
                  stiffness: 280,
                  damping: 25,
                  restDelta: 0.001
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top scroll shadow */}
      <div 
        className={`absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
          showTopShadow ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Scrollable viewport (mask) - overflow hidden to let GSAP control movement */}
      <div ref={viewportRef} className="flex-1 overflow-hidden">
        {/* Vertical track */}
        <div
          ref={trackRef}
          className="flex flex-col gap-3 will-change-transform"
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative min-h-52 border border-border rounded-[2rem] font-body text-sm text-muted-foreground w-full text-center flex items-center justify-center flex-shrink-0 flex-col gap-3 pl-6"
            >
              {/* Left stripe with rotated text */}
              <div className="absolute -left-px -top-px -bottom-px w-8 bg-[#353739] rounded-l-[2rem] flex items-center justify-center">
                <span className="text-white font-heading text-lg transform rotate-270 translate-x-1 whitespace-nowrap">
                  experience
                </span>
              </div>
              
              <img 
                src={skill.icon} 
                alt={skill.text}
                className="w-24 h-24 flex-shrink-0"
              />
              <span className="whitespace-nowrap mt-4">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll shadow */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
          showBottomShadow ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

// Horizontal version for smaller screens (< 1381px) - updated with GSAP horizontal scroll
function HorizontalSkillGrid({ skills }: { skills: SkillItem[] }) {
  const { 
    trackRef, 
    viewportRef, 
    showLeftShadow, 
    showRightShadow,
    scrollProgress,
    isScrolling
  } = useHorizontalScrollSkills();

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Horizontal Scroll Progress Bar - positioned above the content */}
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[-10px] left-0 right-0 z-20"
          >
            <div className="h-1 bg-gray-800 rounded-full">
              <ScrollProgress
                progress={scrollProgress}
                className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full"
                springOptions={{
                  stiffness: 280,
                  damping: 25,
                  restDelta: 0.001
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skill cards container with scroll shadows */}
      <div className="flex-1 min-h-0 relative">
        {/* Left scroll shadow */}
        <div 
          className={`absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showLeftShadow ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Scrollable viewport (mask) */}
        <div ref={viewportRef} className="w-full h-full overflow-hidden">
          {/* Horizontal track */}
          <div
            ref={trackRef}
            className="flex gap-3 h-full w-max will-change-transform pb-4"
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="relative min-h-52 min-w-60 border border-border rounded-[2rem] font-body text-sm text-muted-foreground text-center flex items-center justify-center flex-shrink-0 flex-col gap-3 pb-6"
              >
                {/* Bottom stripe with horizontal text */}
                <div className="absolute -left-px -right-px -bottom-px h-8 bg-[#353739] rounded-b-[2rem] flex items-center justify-center">
                  <span className="text-white font-heading text-lg whitespace-nowrap">
                    experience
                  </span>
                </div>
                
                <img 
                  src={skill.icon} 
                  alt={skill.text}
                  className="w-24 h-24 flex-shrink-0"
                />
                <span className="whitespace-nowrap mt-4">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right scroll shadow */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showRightShadow ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}