import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { getPersonStructuredData, getWebSiteStructuredData } from "@/utils/structured-data";
import { Home } from "@/sections/home";
import { HowIWork } from "@/sections/how-i-work";
import { CaseStudies } from "@/sections/case-studies";
import { Skills } from "@/sections/skills";
import { AboutMe } from "@/sections/about-me";
import { Footer } from "@/sections/footer";
import { useSectionTracker } from "@/hooks/useSectionTracker";

export function HomePage() {
  useSectionTracker();

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
        title="Ameya Sharma - Patent-Winning Full-Stack Developer"
        description="Patent-winning full-stack developer specializing in AI automation, enterprise solutions, and production-ready systems. Building streamlined operations with cutting-edge technology."
        url="https://www.kolzo.in"
        jsonLd={structuredData}
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Home />
          <HowIWork />
          <CaseStudies />
          <Skills />
          <AboutMe />
          <Footer />
        </main>
      </div>
    </>
  );
}