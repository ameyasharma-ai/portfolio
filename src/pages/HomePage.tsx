import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { getPersonStructuredData, getWebSiteStructuredData } from "@/utils/structured-data";
import { Home } from "@/sections/home";
import { useSectionTracker } from "@/hooks/useSectionTracker";
import { useEffect, useState } from "react";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";
import { motion, AnimatePresence } from "framer-motion";

// Static imports — all sections are eagerly loaded and rendered during the
// preloader phase (2.5s+) so the browser can rasterize/paint them upfront.
// This eliminates first-scroll jank caused by deferred paint of lazy chunks.
import { CaseStudies } from "@/sections/case-studies";
import { Skills } from "@/sections/skills";
import { AboutMe } from "@/sections/about-me";
import { Footer } from "@/sections/footer";

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
        title="Ameya Sharma | Full-Stack & AI Systems Engineer"
        description="3rd-year B.Tech undergrad at NIT Patna (8.5 CGPA) building real-time voice AI, collaborative developer tools, and Python/TypeScript backends. Open to SWE & AI internships."
        url="https://ameyasharma.me"
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
          <AboutMe />
          <Skills />
          <CaseStudies />
          <Footer />
        </main>
      </div>
    </>
  );
}