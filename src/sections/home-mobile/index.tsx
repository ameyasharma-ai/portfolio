import { useRef } from "react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AvailabilityStatus } from "@/sections/home/content/availability-status";
import { ParticleSphere } from "@/sections/home/model/particle-sphere";
import { useDrawerStore } from "@/stores/drawerStore";

export function MobileHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open: openDrawer } = useDrawerStore();

  const handleConnectClick = () => {
    openDrawer();
  };

  return (
    <section
      id="home-mobile"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 px-6"
    >
      {/* Particle Sphere Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <ParticleSphere />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="mb-8 scale-90">
          <AvailabilityStatus />
        </div>

        {/* Name with Huge Type */}
        <h1 className="font-heading text-6xl sm:text-7xl leading-[0.85] uppercase tracking-tighter mb-4">
          <TextShimmer
            as="span"
            className="block dark:[--base-color:#f2f2f2] dark:[--base-gradient-color:#B2B2B2]"
          >
            Ameya <br /> Sharma
          </TextShimmer>
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-[10px] text-primary tracking-[0.4em] uppercase mb-12">
          AI Systems Engineer
        </p>

        {/* Description */}
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-16 max-w-[280px] font-light">
          Building high-performance AI systems and scalable web products.
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 gap-4 w-full px-4">
          <button
            onClick={handleConnectClick}
            className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-heading text-[11px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
          >
            Let's connect
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-card border border-border rounded-2xl font-heading text-[11px] uppercase tracking-widest flex items-center justify-center gap-2"
          >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}