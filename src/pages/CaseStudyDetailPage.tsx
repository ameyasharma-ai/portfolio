import { SEO } from "@/components/seo/SEO";
import { getCaseStudyStructuredData } from "@/utils/structured-data";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { DesignPlatformDetail } from "@/sections/case-studies/detail/design-platform-detail";
import { AdvertisingPlatformDetail } from "@/sections/case-studies/detail/advertising-platform-detail";
import { CodeGraphDetail } from "@/sections/case-studies/detail/codegraph-detail";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Get case study metadata based on slug
  const getCaseStudyMeta = (slug: string | undefined) => {
    switch (slug) {
      case "design-platform":
        return {
          title: "Groot Case Study",
          description: "Immersive AI Voice Assistant Platform. Built with React 19, FastAPI, WebSockets, and advanced LLMs via OpenRouter.",
          image: "https://www.kolzo.in/case-studies/design-platform-og.jpg",
          datePublished: "2024-01-01"
        };
      case "advertising-platform":
        return {
          title: "InLine: Real-Time Collaborative Workspace Case Study",
          description: "State-of-the-art, real-time collaborative coding and brainstorming environment featuring a code editor, AI copilot, live terminal sandboxes, and an integrated infinite whiteboard.",
          image: "https://www.kolzo.in/case-studies/inline-thumbnail.png",
          datePublished: "2024-11-01"
        };
      case "codegraph":
        return {
          title: "CodeGraph: AI-Powered Codebase Visualizer Case Study",
          description: "Production-grade codebase visualization tool that transforms complex GitHub repositories into interactive 3D dependency graphs with AI-powered insights.",
          image: "https://www.kolzo.in/case-studies/codegraph-thumbnail.png", // Assuming existence or placeholder
          datePublished: "2024-12-01"
        };
      default:
        return null;
    }
  };

  const caseStudyMeta = getCaseStudyMeta(slug);

  // Route to appropriate detail component based on slug
  const renderCaseStudyDetail = () => {
    switch (slug) {
      case "design-platform":
        return <DesignPlatformDetail />;
      case "advertising-platform":
        return <AdvertisingPlatformDetail />;
      case "codegraph":
        return <CodeGraphDetail />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-heading mb-4">Case Study Not Found</h1>
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {caseStudyMeta && (
        <SEO
          title={caseStudyMeta.title}
          description={caseStudyMeta.description}
          url={`https://www.kolzo.in/case-studies/${slug}`}
          type="article"
          image={caseStudyMeta.image}
          jsonLd={getCaseStudyStructuredData({
            ...caseStudyMeta,
            url: `https://www.kolzo.in/case-studies/${slug}`
          })}
        />
      )}
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {renderCaseStudyDetail()}
      </motion.div>
    </>
  );
}