import { MobileHome } from "@/sections/home-mobile";
import { ServicesSection } from "@/sections/services";
import { CaseStudiesMobile } from "@/sections/case-studies-mobile";
import { SkillsMobile } from "@/sections/skills-mobile";
import { AboutMeMobile } from "@/sections/about-me-mobile";
import { MobileFooter } from "@/sections/footer-mobile";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CTASection } from "@/components/ui/cta-section";
import { useEffect, useState } from "react";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";
import { motion, AnimatePresence } from "framer-motion";

export function MobileHomePage() {
  const [isRestoring, setIsRestoring] = useState(!!sessionStorage.getItem('homeScrollY'));

  // Restore scroll position when returning from case study detail page
  useEffect(() => {
    const savedY = sessionStorage.getItem('homeScrollY');
    if (savedY) {
      const scrollY = parseInt(savedY, 10);
      
      const restoreScroll = () => {
        if (globalLenis) {
          globalLenis.scrollTo(scrollY, { immediate: true });
          window.scrollTo(0, scrollY);
          sessionStorage.removeItem('homeScrollY');
          sessionStorage.removeItem('caseStudyReturn');
          
          setTimeout(() => setIsRestoring(false), 50);
        } else {
          window.scrollTo(0, scrollY);
          requestAnimationFrame(restoreScroll);
        }
      };

      restoreScroll();
    } else {
      setIsRestoring(false);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isRestoring && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background"
          />
        )}
      </AnimatePresence>

      <div className={`flex min-h-svh flex-col ${isRestoring ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
        {/* Global Progressive Blur at top of screen */}
        <ProgressiveBlur
          direction="top"
          className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
          blurIntensity={1}
        />
        
        {/* Add the existing Sidebar component */}
        <Sidebar />
        
        {/* Mobile Home Section */}
        <MobileHome />

        <CTASection 
          title="I build products that drive results."
          subtitle="Fast, scalable web apps and AI systems for ambitious founders."
          className="py-12"
        />
        
        <ServicesSection />

        <CTASection 
          title="Ready to ship?"
          subtitle="Let's turn your vision into a production-grade product."
          className="py-12"
        />
        
        {/* Mobile Case Studies Section */}
        <CaseStudiesMobile />

        <CTASection 
          title="Scale your operation."
          subtitle="Automate with AI and build systems that grow with you."
          className="py-12"
        />

        {/* Mobile Skills Section */}
        <SkillsMobile />

        {/* Mobile About Me Section */}
        <AboutMeMobile />

        {/* Mobile Footer Section */}
        <MobileFooter />
      </div>
    </>
  );
}