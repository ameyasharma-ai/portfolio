import { Marquee } from "@/components/ui/marquee";
import gitBranchIcon from '../../assets/gitBranchIcon.svg';
import plugIcon from '../../assets/plugIcon.svg';
import ragDocIcon from '../../assets/ragDocIcon.svg';
import langchainIcon from '../../assets/langachainIcon.svg';
import layersIcon from '../../assets/layersIcon.svg';
import shieldCheckIcon from '../../assets/shieldCheckIcon.svg';
import codeIcon from '../../assets/codeIcon.svg';
import cpuIcon from '../../assets/cpuIcon.svg';
import creditCardIcon from '../../assets/creditCardIcon.svg';
import buildingIcon from '../../assets/buildingIcon.svg';

interface SkillItem {
  text: string;
  icon: string;
}

export function ExperienceMobile() {
  const skills: SkillItem[] = [
    { text: "ML Pipelines", icon: gitBranchIcon },
    { text: "Multi-platform Integrations", icon: plugIcon },
    { text: "RAG Systems", icon: ragDocIcon },
    { text: "LangChain", icon: langchainIcon },
    { text: "Multi-tenant SaaS", icon: layersIcon },
    { text: "Enterprise Data Governance", icon: shieldCheckIcon },
    { text: "Full-stack Dev", icon: codeIcon },
    { text: "ML Algorithms", icon: cpuIcon },
    { text: "Payment Processing", icon: creditCardIcon },
    { text: "System Architecture", icon: buildingIcon },
  ];

  // Split skills into two rows: first 5, then last 5
  const firstRow = skills.slice(0, 5);
  const secondRow = skills.slice(5, 10);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Two marquee rows */}
      <div className="flex-1 flex flex-col gap-6 edge-to-edge relative">
        {/* Left scroll shadow */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        
        {/* First row marquee - 5 skills */}
        <Marquee
          pauseOnHover
          className="[--duration:40s]"
        >
          {firstRow.map((skill, index) => (
            <div 
              key={index}
              className="relative min-h-52 min-w-60 border border-border rounded-[2rem] font-body text-sm text-muted-foreground text-center flex items-center justify-center flex-shrink-0 flex-col gap-3 pb-6"
            >
              {/* Bottom stripe with horizontal text */}
              <div className="absolute -left-px -right-px -bottom-px h-8 bg-[#353739] rounded-b-[2rem] flex items-center justify-center">
                <span className="text-white font-heading text-lg whitespace-nowrap">
                  experience
                </span>
              </div>
              
              <img 
                src={skill.icon} 
                alt={skill.text}
                className="w-24 h-24 flex-shrink-0"
              />
              <span className="whitespace-nowrap mt-4">{skill.text}</span>
            </div>
          ))}
        </Marquee>

        {/* Second row marquee - 5 skills - REVERSE direction */}
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:40s]"
        >
          {secondRow.map((skill, index) => (
            <div 
              key={index + 5}
              className="relative min-h-52 min-w-60 border border-border rounded-[2rem] font-body text-sm text-muted-foreground text-center flex items-center justify-center flex-shrink-0 flex-col gap-3 pb-6"
            >
              {/* Bottom stripe with horizontal text */}
              <div className="absolute -left-px -right-px -bottom-px h-8 bg-[#353739] rounded-b-[2rem] flex items-center justify-center">
                <span className="text-white font-heading text-lg whitespace-nowrap">
                  experience
                </span>
              </div>
              
              <img 
                src={skill.icon} 
                alt={skill.text}
                className="w-24 h-24 flex-shrink-0"
              />
              <span className="whitespace-nowrap mt-4">{skill.text}</span>
            </div>
          ))}
        </Marquee>

        {/* Right scroll shadow */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}