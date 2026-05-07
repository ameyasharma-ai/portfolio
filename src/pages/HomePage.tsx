import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { getPersonStructuredData, getWebSiteStructuredData } from "@/utils/structured-data";
import { Home } from "@/sections/home";
import { CaseStudies } from "@/sections/case-studies";
import { Skills } from "@/sections/skills";
import { AboutMe } from "@/sections/about-me";
import { Footer } from "@/sections/footer";
import { useSectionTracker } from "@/hooks/useSectionTracker";
import { useEffect, useState } from "react";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";
import { ServicesSection } from "@/sections/services";
import { ResultsBanner, ProcessBridge, MarketDominator } from "@/components/ui/conversion-funnel";
import { motion, AnimatePresence } from "framer-motion";

export function HomePage() {
  const [isRestoring, setIsRestoring] = useState(!!sessionStorage.getItem('homeScrollY'));
  useSectionTracker();

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
          
          // Delay showing content until after scroll is set
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

  // Combine structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonStructuredData(),
      getWebSiteStructuredData()
    ]
  };

  return (
    <>
      <SEO 
        title="Ameya Sharma | Premium AI & Web Developer for Hire"
        description="Build high-performance AI systems and scalable web applications that drive growth. Premium full-stack development for ambitious startups and founders."
        url="https://www.kolzo.in"
        jsonLd={structuredData}
      />
      
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
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Home />
          <ResultsBanner />
          <ServicesSection />
          <ProcessBridge />
          <CaseStudies />
          <MarketDominator />
          <Skills />
          <AboutMe />
          <Footer />
        </main>
      </div>
    </>
  );
}