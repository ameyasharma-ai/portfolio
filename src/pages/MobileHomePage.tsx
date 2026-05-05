import { MobileHome } from "@/sections/home-mobile";
import { HowIWorkMobile } from "@/sections/how-i-work-mobile";
import { CaseStudiesMobile } from "@/sections/case-studies-mobile";
import { SkillsMobile } from "@/sections/skills-mobile";
import { AboutMeMobile } from "@/sections/about-me-mobile";
import { MobileFooter } from "@/sections/footer-mobile";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useEffect } from "react";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

export function MobileHomePage() {
  // Restore scroll position when returning from case study detail page
  useEffect(() => {
    const savedY = sessionStorage.getItem('homeScrollY');
    if (savedY) {
      const scrollY = parseInt(savedY, 10);
      // Use requestAnimationFrame to ensure DOM is rendered before scrolling
      requestAnimationFrame(() => {
        if (globalLenis) {
          globalLenis.scrollTo(scrollY, { immediate: true });
        } else {
          window.scrollTo(0, scrollY);
        }
      });
      // Clean up after restoring
      sessionStorage.removeItem('homeScrollY');
      sessionStorage.removeItem('caseStudyReturn');
    }
  }, []);
  return (
    <div className="flex min-h-svh flex-col">
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
      
      {/* Mobile How I Work Section */}
      <HowIWorkMobile />
      
      {/* Mobile Case Studies Section */}
      <CaseStudiesMobile />

      {/* Mobile Skills Section */}
      <SkillsMobile />

      {/* Mobile About Me Section */}
      <AboutMeMobile />

      {/* Mobile Footer Section */}
      <MobileFooter />
    </div>
  );
}