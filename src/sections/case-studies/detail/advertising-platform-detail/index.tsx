import { useNavigate } from "react-router";
import { useLayoutEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/socials/github-icon";
import { VideoContainer } from "../../shared/video-container";
import { NextStepsButton } from "@/components/ui/next-steps-button";
import { useDrawerStore } from "@/stores/drawerStore";
import { advertisingPlatformContent } from "./content";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

export function AdvertisingPlatformDetail() {
  const navigate = useNavigate();
  const { open: openDrawer } = useDrawerStore();

  // Scroll to top when component mounts before painting
  useLayoutEffect(() => {
    if (globalLenis) {
      globalLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Save that we came from a case study so back nav knows to restore scroll
    sessionStorage.setItem('caseStudyReturn', 'true');
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleFrontendClick = () => {
    window.open("https://github.com/ameyasharma-ai/inline-frontend", '_blank', 'noopener,noreferrer');
  };

  const handleBackendClick = () => {
    window.open("https://github.com/ameyasharma-ai/inline-backend", '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = () => {
    window.open("https://inline-frontend.vercel.app", '_blank', 'noopener,noreferrer');
  };

  const handleGetInTouchClick = () => {
    console.log('🎯 Opening contact drawer from case study detail');
    openDrawer();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Update the URL hash without adding to browser history
    window.history.replaceState(null, '', `#${id}`);

    if (globalLenis) {
      globalLenis.scrollTo(`#${id}`, { 
        offset: -100,
        duration: 1.5
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Custom component renderer
  const renderCustomComponent = (section: typeof advertisingPlatformContent.sections[0]) => {
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
      {/* Back Button and Project Links */}
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button
            onClick={handleLiveClick}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            Live Demo
          </button>
          
          <button
            onClick={handleFrontendClick}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm border border-border rounded-lg hover:border-ring transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 shrink-0" />
            Frontend
          </button>
          
          <button
            onClick={handleBackendClick}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm border border-border rounded-lg hover:border-ring transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 shrink-0" />
            Backend
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="font-heading text-xl md:text-3xl text-foreground mb-4">
        InLine: Real-Time Collaborative Workspace
      </h1>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
        State-of-the-art, real-time collaborative coding and brainstorming environment that bridges the gap between developers and designers, featuring a code editor, AI copilot, live terminal sandboxes, and an integrated infinite whiteboard.
      </p>

      {/* Video Container */}
      <div className="mb-8">
        <VideoContainer activeVideo="advertising" />
      </div>

      {/* Tech Stack */}
      <p className="font-body text-sm text-muted-foreground mb-12">
        Vite • TypeScript • React 18 • Node.js • Express • Socket.IO • CodeMirror 6 • TLDraw • Judge0 API • OpenRouter API
      </p>

      {/* Quick Nav - Visible on Mobile, Hidden on Desktop (since it has sidebar) */}
      <div className="md:hidden mb-12 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-3 min-w-max">
          {advertisingPlatformContent.sections.map((section) => (
            <a
              key={`quick-nav-${section.id}`}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className="px-4 py-2 bg-card border border-border rounded-full text-xs font-body text-muted-foreground hover:text-foreground hover:border-ring transition-all"
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>

      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-6 gap-8">
        {/* Left Column - Main Content (full width on mobile, 80% on desktop) */}
        <div className="col-span-6 md:col-span-4 space-y-16">
          {advertisingPlatformContent.sections.map((section) => (
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
            {advertisingPlatformContent.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
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