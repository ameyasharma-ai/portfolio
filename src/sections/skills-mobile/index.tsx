import { SkillCard } from "../skills/skill-card";
import { skillsData } from "../skills/constants";
import { useDrawerStore } from "@/stores/drawerStore";

export function SkillsMobile() {
  const { open: openDrawer } = useDrawerStore();

  const handleLetsTalkClick = () => {
    console.log('🎯 Opening contact drawer from skills mobile section');
    openDrawer();
  };

  return (
    <section 
      id="skills-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            MY SKILLS
          </h2>
          <p className="font-heading text-2xl text-foreground">
            BUILDING PRODUCTION AI SYSTEMS THAT SOLVE REAL PROBLEMS
          </p>
        </div>

        {/* Skills Grid - Mobile optimized: 3 columns */}
        <div className="mb-8">
          <div className="w-full bg-[#353739] p-[1px] rounded-2xl">
            <div className="grid grid-cols-3 gap-[1px] bg-[#353739] rounded-2xl overflow-hidden">
              {skillsData.map((skill, index) => (
                <SkillCard 
                  key={index}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Centered */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="font-body font-light text-[#b3b3b3] text-base">
            Don't see your stack?
          </p>
          <button 
            onClick={handleLetsTalkClick}
            className="px-6 pt-2 pb-1 border border-border rounded-full font-heading text-sm text-foreground hover:border-ring transition-colors duration-300 cursor-pointer hover:opacity-80"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  );
}