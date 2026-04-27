import { SEO } from "@/components/seo/SEO";
import { getCaseStudyStructuredData } from "@/utils/structured-data";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { DesignPlatformDetail } from "@/sections/case-studies/detail/design-platform-detail";
import { AdvertisingPlatformDetail } from "@/sections/case-studies/detail/advertising-platform-detail";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Get case study metadata based on slug
  const getCaseStudyMeta = (slug: string | undefined) => {
    switch (slug) {
      case "design-platform":
        return {
          title: "Groot Case Study",
          description: "Patent-winning AI-powered design solution for T-shirt brands. Built with Next.js, Three.js, OpenCV, and advanced LLMs.",
          image: "https://www.stavrossymeonidis.dev/case-studies/design-platform-og.jpg",
          datePublished: "2024-01-01"
        };
      case "advertising-platform":
        return {
          title: "Automated Ad Campaign Platform Case Study",
          description: "Email-powered integration platform transforming Microsoft Forms into automated campaign setups across multiple advertising platforms.",
          image: "https://www.stavrossymeonidis.dev/case-studies/advertising-platform-og.jpg",
          datePublished: "2024-06-01"
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
          url={`https://www.stavrossymeonidis.dev/case-studies/${slug}`}
          type="article"
          image={caseStudyMeta.image}
          jsonLd={getCaseStudyStructuredData({
            ...caseStudyMeta,
            url: `https://www.stavrossymeonidis.dev/case-studies/${slug}`
          })}
        />
      )}
      <div className="min-h-screen bg-background">
        {renderCaseStudyDetail()}
      </div>
    </>
  );
}