import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/socials/github-icon";
import type { ProjectData } from "../types";

interface RightBarProps {
  projectData: ProjectData;
}

export function RightBar({ projectData }: RightBarProps) {
  const navigate = useNavigate();

  const handleLiveDemoClick = () => {
    window.open(projectData.buttons.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open(projectData.buttons.githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLearnMoreClick = () => {
    // Save scroll position before navigating
    sessionStorage.setItem('homeScrollY', window.scrollY.toString());
    navigate(projectData.buttons.detailPath);
  };

  return (
    <div className="w-full h-full flex flex-col min-h-0 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={projectData.title}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1] // Custom quintic ease-out for premium feel
          }}
          className="flex flex-col h-full min-h-0"
        >
          {/* Header - Hidden on screens < 1390px */}
          <div className="mb-6 hidden [@media(min-width:1390px)]:block flex-shrink-0">
            <h3 className="font-heading text-2xl text-foreground mb-2">
              {projectData.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {projectData.description}
            </p>
          </div>

          {/* Dynamic Sections - Hidden on screens < 1390px, Scrollable if content overflows */}
          <div className="flex-1 hidden [@media(min-width:1390px)]:block overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] min-h-0 pr-2">
            {projectData.sections.map((section, index) => (
              <div key={`${projectData.title}-${section.title}-${index}`} className={index === projectData.sections.length - 1 ? "" : "mb-6"}>
                <h4 className="font-heading text-lg text-foreground mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={`${projectData.title}-${section.title}-${itemIndex}`} className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Buttons - Always visible, pinned to bottom on PC */}
          <div className="flex flex-wrap items-center gap-4 [@media(min-width:1390px)]:gap-6 mt-4 [@media(min-width:1390px)]:mt-6 justify-start flex-shrink-0 bg-card">
            <button
              onClick={handleLiveDemoClick}
              className="flex items-center gap-2 px-3 py-1.5 [@media(min-width:1390px)]:px-4 [@media(min-width:1390px)]:py-2 border border-border rounded-lg font-body text-xs [@media(min-width:1390px)]:text-sm text-foreground hover:border-ring transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
            
            <button
              onClick={handleGithubClick}
              className="flex items-center gap-2 px-3 py-1.5 [@media(min-width:1390px)]:px-4 [@media(min-width:1390px)]:py-2 border border-border rounded-lg font-body text-xs [@media(min-width:1390px)]:text-sm text-foreground hover:border-ring transition-colors cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </button>

            <button
              onClick={handleLearnMoreClick}
              className="font-heading text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer text-xs [@media(min-width:1390px)]:text-sm"
            >
              Learn More
              <ArrowRight className="w-4 h-4 [@media(min-width:1390px)]:w-5 [@media(min-width:1390px)]:h-5 mb-1" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}