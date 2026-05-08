import { skillsData } from "../skills/constants";
import { useDrawerStore } from "@/stores/drawerStore";

export function SkillsMobile() {
  const { open: openDrawer } = useDrawerStore();

  const handleLetsTalkClick = () => {
    openDrawer();
  };

  return (
    <section 
      id="skills-mobile" 
      className="w-full px-6 mt-32"
    >
      <div className="w-full max-w-lg mx-auto">
        {/* Section Headers */}
        <div className="mb-20">
          <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
            Infrastructure
          </p>
          <h2 className="font-heading text-5xl leading-[0.85] text-foreground uppercase tracking-tighter break-words">
            Built for <br /> <span className="text-primary">Performance</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-6 gap-2">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className="aspect-square bg-zinc-950 border border-white/5 rounded-xl flex items-center justify-center p-2 group active:scale-90 transition-transform"
              >
                <div className="w-full h-full flex items-center justify-center transition-all duration-500 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:md:w-8 [&_svg]:md:h-8">
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-8 bg-card border border-border rounded-[2.5rem] text-center">
          <p className="font-body text-sm text-muted-foreground mb-6 font-light">
            Need a custom integration?
          </p>
          <button 
            onClick={handleLetsTalkClick}
            className="w-full py-4 bg-primary/10 border border-primary/20 rounded-xl font-heading text-[10px] uppercase tracking-widest text-primary hover:bg-primary/20 transition-all cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  );
}