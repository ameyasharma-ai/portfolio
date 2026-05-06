import { useNavigate } from "react-router";
import { useLayoutEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { VideoContainer } from "../../shared/video-container";
import { NextStepsButton } from "@/components/ui/next-steps-button";
import { useDrawerStore } from "@/stores/drawerStore";
import { codegraphContent } from "./content";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

export function CodeGraphDetail() {
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

  const handleGithubClick = () => {
    window.open("https://github.com/ameyasharma-ai/codegraph", '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = () => {
    window.open("https://codegraph-eight.vercel.app", '_blank', 'noopener,noreferrer');
  };

  const handleGetInTouchClick = () => {
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
  const renderCustomComponent = (section: typeof codegraphContent.sections[0]) => {
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
    <div className="min-h-screen bg-background pb-24">
      {/* Cinematic Hero Section */}
      <section className="relative pt-10 pb-8 px-6 md:px-12 lg:px-16 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackClick}
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-heading text-[10px] uppercase tracking-widest">Back to Projects</span>
          </button>

          {/* 1. Heading First */}
          <h1 className="font-heading text-5xl md:text-8xl text-foreground mb-8 uppercase tracking-tighter leading-[0.85] max-w-4xl">
            CodeGraph
          </h1>

          {/* 2. Video Second */}
          <section className="relative group mb-8 max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-video bg-black">
              <VideoContainer activeVideo="codegraph" />
            </div>
          </section>

          {/* 3. Details Third */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-body text-lg md:text-2xl text-muted-foreground leading-relaxed mb-10 font-light">
                Production-grade codebase visualization tool that transforms complex GitHub repositories into interactive 3D dependency graphs.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleLiveClick}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-heading text-xs uppercase tracking-widest hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-primary/20"
                >
                  Launch Live Demo
                </button>
                <button
                  onClick={handleGithubClick}
                  className="px-8 py-4 bg-card border border-border rounded-xl font-heading text-xs uppercase tracking-widest hover:border-primary/50 transition-all cursor-pointer"
                >
                  View Repository
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-card/30 border border-border/50 rounded-[2rem] p-8">
              <div>
                <p className="font-heading text-[10px] uppercase tracking-widest text-primary mb-2">Role</p>
                <p className="font-body text-base text-foreground font-light">Lead Developer</p>
              </div>
              <div>
                <p className="font-heading text-[10px] uppercase tracking-widest text-primary mb-2">Outcome</p>
                <p className="font-body text-base text-foreground font-light">Sub-Second Caching</p>
              </div>
              <div className="col-span-2 pt-4 border-t border-border/50">
                <p className="font-heading text-[10px] uppercase tracking-widest text-primary mb-3">Core Tech</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js 15', 'TypeScript', 'React Flow', 'Supabase', 'GitHub API'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column - Sales Narrative */}
          <div className="lg:col-span-8 space-y-32">
            
            {/* Dynamic Content Sections */}
            {codegraphContent.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-12 bg-primary/30" />
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {section.customComponent ? (
                  renderCustomComponent(section)
                ) : (
                  <div className="space-y-12">
                    {section.content && (
                      <p className="font-body text-lg text-muted-foreground leading-relaxed font-light">
                        {section.content}
                      </p>
                    )}

                    {section.subsections && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {section.subsections.map((subsection, index) => (
                          <div 
                            key={index}
                            className="p-8 bg-card border border-border rounded-[2rem] hover:border-primary/20 transition-colors"
                          >
                            <h3 className="font-heading text-lg text-foreground mb-4 uppercase tracking-tight">
                              {subsection.title}
                            </h3>
                            <div className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                              {subsection.content.split('\n').map((line, lineIndex) => (
                                <p key={lineIndex} className="mb-2">
                                  {line.replace('**', '').replace('**', '')}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}

            {/* Bottom Conversion Section */}
            <section className="pt-20 border-t border-border/50">
              <div className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden border border-primary/20 bg-card group">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-colors" />
                
                <div className="relative z-10 max-w-3xl text-left">
                  <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8 uppercase tracking-tighter leading-tight">
                    Ready to build <br /> <span className="text-primary">your next big idea?</span>
                  </h2>
                  <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                    I help founders and startups turn complex visions into production-grade reality in weeks.
                  </p>
                  <button 
                    onClick={handleGetInTouchClick}
                    className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-heading text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20 cursor-pointer"
                  >
                    Start Your Project
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-4">
            <aside className="sticky top-32 space-y-12">
              <div>
                <p className="font-heading text-[10px] uppercase tracking-widest text-primary mb-6 ml-1">Section Guide</p>
                <nav className="space-y-4">
                  {codegraphContent.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => handleNavClick(e, section.id)}
                      className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all"
                    >
                      <div className="h-[1px] w-0 bg-primary group-hover:w-8 transition-all duration-300" />
                      <span className="font-body text-sm font-light uppercase tracking-wider">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-8 bg-card border border-border rounded-[2.5rem]">
                <h4 className="font-heading text-sm uppercase tracking-widest text-foreground mb-4">Architecture</h4>
                <p className="font-body text-xs text-muted-foreground mb-6 leading-relaxed">
                  Need to visualize a complex system? I can build custom visualization tools for your tech stack.
                </p>
                <button
                  onClick={handleGetInTouchClick}
                  className="w-full py-4 bg-primary/10 border border-primary/20 rounded-xl font-heading text-[10px] uppercase tracking-widest text-primary hover:bg-primary/20 transition-all cursor-pointer"
                >
                  Book a strategy call
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
