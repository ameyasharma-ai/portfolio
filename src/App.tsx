import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Routes, Route, useLocation } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { MobileHomePage } from "@/pages/MobileHomePage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useLoadingStore } from "@/stores/loadingStore";
import { useDrawerStore } from "@/stores/drawerStore";
import { useEffect, useLayoutEffect } from "react";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

function DesktopApp() {
  const complete = useLoadingStore(state => state.complete);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    // For the home page, we rely on Spline (ParticleSphere) and Preloader to call complete().
    // We add a safety timeout of 5s as a fallback.
    // For other pages, we call complete after a short delay since they don't have Spline.
    const delay = isHomePage ? 5000 : 500;
    const timer = setTimeout(() => {
      complete();
    }, delay);
    return () => clearTimeout(timer);
  }, [complete, isHomePage]);

  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </SmoothScrollProvider>
  );
}

function MobileApp() {
  const complete = useLoadingStore(state => state.complete);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      complete();
    }, 100);
    return () => clearTimeout(timer);
  }, [complete]);

  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<MobileHomePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </SmoothScrollProvider>
  );
}

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Preloader } from "@/components/ui/preloader";
import { GlobalBackground } from "@/components/providers/global-background";

function App() {
  const { isMobile } = useBreakpoint();
  const { isTransitionFinished } = useLoadingStore();
  const { isOpen: isDrawerOpen } = useDrawerStore();

  const shouldLock = !isTransitionFinished || isDrawerOpen;

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    
    if (shouldLock) {
      root.classList.add('is-locked');
      root.setAttribute('data-locked', 'true');
      if (globalLenis) globalLenis.stop();
    } else {
      root.classList.remove('is-locked');
      root.removeAttribute('data-locked');
      if (globalLenis) globalLenis.start();
    }
    
    return () => {
      root.classList.remove('is-locked');
      root.removeAttribute('data-locked');
    };
  }, [shouldLock]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalBackground />
      <Preloader />
      <SvgFilters />
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <GlobalDrawer />
      <WhatsAppButton />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
