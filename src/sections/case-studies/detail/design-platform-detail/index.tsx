import { useNavigate } from "react-router";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/socials/github-icon";
import { VideoContainer } from "../../shared/video-container";
import { NextStepsButton } from "@/components/ui/next-steps-button";
import { useDrawerStore } from "@/stores/drawerStore";
import { designPlatformContent } from "./content";

export function DesignPlatformDetail() {
  const navigate = useNavigate();
  const { open: openDrawer } = useDrawerStore();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleFrontendClick = () => {
    window.open("https://github.com/ameyasharma-ai/groot-frontend", '_blank', 'noopener,noreferrer');
  };

  const handleBackendClick = () => {
    window.open("https://github.com/ameyasharma-ai/groot-backend", '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = () => {
    window.open("https://groot-frontend-orpin.vercel.app", '_blank', 'noopener,noreferrer');
  };

  const handleGetInTouchClick = () => {
    console.log('🎯 Opening contact drawer from case study detail');
    openDrawer();
  };

  // Custom component renderer
  const renderCustomComponent = (section: typeof designPlatformContent.sections[0]) => {
    if (section.customComponent === 'next-steps-cta') {
      return (
        <div className="text-left">
          <h2 className="font-body text-xl text-foreground mb-6">
            {section.content}
          </h2>
          <NextStepsButton onClick={handleGetInTouchClick}>
            Get In Touch
          </NextStepsButton>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Back Button and GitHub Button */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLiveClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </button>
          
          <button
            onClick={handleFrontendClick}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-ring transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            Frontend
          </button>
          
          <button
            onClick={handleBackendClick}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-ring transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            Backend
          </button>
        </div>
      </div>



      {/* Title */}
      <h1 className="font-heading text-xl md:text-3xl text-foreground mb-4">
        Groot: Immersive AI Voice Assistant Platform
      </h1>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
        An advanced, multi-persona conversational AI platform that features real-time voice interactions, dynamic knowledge retrieval, and an interactive 3D mathematical visualizer.
      </p>

      {/* Video Container */}
      <div className="mb-8">
        <VideoContainer activeVideo="design" />
      </div>

      {/* Tech Stack */}
      <p className="font-body text-sm text-muted-foreground mb-12">
        React 19 • Vite • Web Audio API • WebSockets • Python • FastAPI • OpenRouter API • Groq Whisper API • Edge TTS • Scikit-learn
      </p>

      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-6 gap-8">
        {/* Left Column - Main Content (full width on mobile, 80% on desktop) */}
        <div className="col-span-6 md:col-span-4 space-y-16">
          {designPlatformContent.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-heading text-2xl text-foreground mb-6">
                {section.title}
              </h2>

              {section.customComponent ? (
                renderCustomComponent(section)
              ) : (
                <>
                  {section.content && (
                    <div className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                      {section.content}
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, index) => (
                        <div key={index}>
                          <h3 className="font-body text-lg text-foreground mb-3">
                            {subsection.title}
                          </h3>
                          <div className="font-body text-sm text-muted-foreground leading-relaxed">
                            {subsection.content.split('\n').map((line, lineIndex) => (
                              <p key={lineIndex} className="mb-1">
                                {line.split('**').map((part, partIndex) =>
                                  partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </section>
          ))}
        </div>

        {/* Right Column - Navigation (hidden on mobile, 20% on desktop) */}
        <div className="hidden md:block col-span-2 col-start-6">
          <nav className="sticky top-8 space-y-3">
            {designPlatformContent.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}