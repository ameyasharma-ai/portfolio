import { SkillCard } from "./skill-card";
import { skillsData } from "./constants";
import { useDrawerStore } from "@/stores/drawerStore";

export function Skills() {
  const { open: openDrawer } = useDrawerStore();

  const handleLetsTalkClick = () => {
    openDrawer();
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            MY SKILLS
          </h2>
          <p className="font-heading text-2xl text-foreground">
            BUILDING PRODUCTION AI SYSTEMS THAT SOLVE REAL PROBLEMS
          </p>
        </div>

        {/* Skills Grid - Responsive: 3 columns on smaller screens, 6 on larger */}
        <div className="mb-12">
          <div className="w-full max-w-6xl mx-auto bg-[#353739] p-[1px] rounded-2xl">
            <div className="grid grid-cols-3 [@media(min-width:937px)]:grid-cols-6 gap-[1px] bg-[#353739] rounded-2xl overflow-hidden">
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

        {/* Bottom Section */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
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
  )
}