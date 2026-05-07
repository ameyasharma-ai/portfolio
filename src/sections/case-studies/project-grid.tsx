import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { VideoContainer } from "./shared/video-container";
import { designPlatformData } from "./content/design-platform-data";
import { advertisingPlatformData } from "./content/advertising-platform-data";
import { codegraphData } from "./content/codegraph-data";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

const projects = [
  {
    id: "design",
    data: designPlatformData,
    videoType: "design" as const,
    thumbnail: "https://res.cloudinary.com/day7gel9b/video/upload/72C94B09-71C4-4795-BCF3-AD0D8EA6EF16_Copy_vavtfh.jpg"
  },
  {
    id: "advertising",
    data: advertisingPlatformData,
    videoType: "advertising" as const,
    thumbnail: "https://res.cloudinary.com/day7gel9b/video/upload/26DB46C3-6640-4540-B20D-6C3000E35676_Copy_gabigd.jpg"
  },
  {
    id: "codegraph",
    data: codegraphData,
    videoType: "codegraph" as const,
    thumbnail: "https://res.cloudinary.com/day7gel9b/video/upload/387AC562-8E99-45EC-B14F-55A25FD85C1B_Copy_cgwb2v.jpg"
  }
];

export function ProjectGrid() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleLearnMore = (path: string) => {
    const scrollY = globalLenis ? globalLenis.scroll : window.scrollY;
    sessionStorage.setItem('homeScrollY', scrollY.toString());
    navigate(path);
  };

  const handleLiveDemo = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group flex flex-col bg-card border border-border rounded-[2rem] overflow-hidden transition-all duration-300 hover:border-ring"
        >
          {/* Video Preview Container */}
          <div className="relative aspect-video overflow-hidden bg-black/90">
            {/* Video Layer */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {hoveredId === project.id && <VideoContainer activeVideo={project.videoType} />}
            </div>

            {/* Thumbnail Layer */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredId === project.id ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <img 
                src={project.thumbnail} 
                alt={project.data.projectData.title}
                loading="eager"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-primary fill-primary/20 ml-0.5"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors">
                {project.data.projectData.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.data.techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] font-body text-primary/60 uppercase tracking-widest">
                  {tech.name}{i < 2 && i < project.data.techStack.length - 1 ? " •" : ""}
                </span>
              ))}
            </div>

            <p className="font-body text-sm text-[#b3b3b3] mb-6 line-clamp-2 leading-relaxed font-light italic">
              {project.data.projectData.description}
            </p>

            {/* Mini Case Study Details */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {project.data.projectData.sections.slice(0, 3).map((section, sIndex) => (
                <div key={sIndex} className="space-y-1">
                  <h4 className="font-heading text-[10px] uppercase tracking-widest text-primary/70">
                    {section.title}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2">
                    {section.items[0].replace('• ', '')}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
              <div className="flex gap-2">
                <button 
                  onClick={(e) => handleLiveDemo(e, project.data.projectData.buttons.liveUrl)}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-[10px] font-heading uppercase tracking-widest text-primary transition-all cursor-pointer"
                >
                  Live Demo
                </button>
                <button 
                  onClick={(e) => handleLiveDemo(e, project.data.projectData.buttons.githubUrl)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-heading uppercase tracking-widest text-foreground transition-all cursor-pointer"
                >
                  GitHub
                </button>
              </div>

              <button
                onClick={() => handleLearnMore(project.data.projectData.buttons.detailPath)}
                className="flex items-center gap-2 font-heading text-[10px] uppercase tracking-widest text-foreground/60 hover:text-primary transition-all cursor-pointer group/btn"
              >
                Full Study
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
