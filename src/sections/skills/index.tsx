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
          <h2 className="font-body text-lg font-light text-primary mb-4 tracking-widest uppercase">
            ADVANCED TECH STACK
          </h2>
          <p className="font-heading text-3xl md:text-4xl text-foreground">
            Production-ready tools for high-performance products.
          </p>
        </div>

        {/* Skills Grid - Lightweight, fluid responsive icon tiles like mobile */}
        <div className="mb-12">
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {skillsData.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-card border border-white/5 hover:border-primary/40 hover:bg-white/[0.03] transition-colors duration-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 [&_svg]:w-8 [&_svg]:h-8">
                    {skill.icon}
                  </div>
                  <span className="font-body text-xs text-muted-foreground group-hover:text-foreground font-light tracking-wide transition-colors duration-200 text-center truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
          <p className="font-body font-light text-muted-foreground text-sm">
            Don't see your stack?
          </p>
          <button 
            onClick={handleLetsTalkClick}
            className="px-6 py-2.5 bg-primary/10 border border-primary/20 rounded-full font-heading text-xs tracking-widest text-primary hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  );
}
