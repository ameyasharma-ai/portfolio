import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { getPersonStructuredData, getWebSiteStructuredData } from "@/utils/structured-data";
import { Home } from "@/sections/home";
import { useSectionTracker } from "@/hooks/useSectionTracker";
import { useEffect, useState, lazy, Suspense } from "react";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load sections below the fold
const ResultsBanner = lazy(() => import("@/components/ui/conversion-funnel").then(m => ({ default: m.ResultsBanner })));
const ProcessBridge = lazy(() => import("@/components/ui/conversion-funnel").then(m => ({ default: m.ProcessBridge })));
const MarketDominator = lazy(() => import("@/components/ui/conversion-funnel").then(m => ({ default: m.MarketDominator })));
const ServicesSection = lazy(() => import("@/sections/services").then(m => ({ default: m.ServicesSection })));
const CaseStudies = lazy(() => import("@/sections/case-studies").then(m => ({ default: m.CaseStudies })));
const Skills = lazy(() => import("@/sections/skills").then(m => ({ default: m.Skills })));
const AboutMe = lazy(() => import("@/sections/about-me").then(m => ({ default: m.AboutMe })));
const Footer = lazy(() => import("@/sections/footer").then(m => ({ default: m.Footer })));

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
        <main>
          <Home />
          <Suspense fallback={<div className="h-40" />}>
            <ResultsBanner />
            <ServicesSection />
            <ProcessBridge />
            <CaseStudies />
            <MarketDominator />
            <Skills />
            <AboutMe />
            <Footer />
          </Suspense>
        </main>
      </div>
    </>
  );
}