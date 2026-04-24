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
    console.log('🎯 Opening contact drawer from mobile home section');
    openDrawer();
  };

  return (
    <section
      id="home-mobile"
      className="relative w-full flex flex-col items-center justify-top mt-26 px-2.5"
    >
      {/* Container with CSS class for pseudo-element background */}
      <div
        ref={containerRef}
        className="mobile-home-container relative w-full mx-4 p-8 pb-14 flex flex-col items-center"
      >
        {/* Particle Sphere Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: 'inherit' }}>
          <ParticleSphere />
        </div>

        {/* Header */}
        <h1 className="font-heading text-center text-[clamp(2.3rem,8vw,3rem)] leading-[1] mb-1 relative z-10">
          <TextShimmer
            as="span"
            className="block dark:[--base-color:#f2f2f2] dark:[--base-gradient-color:#B2B2B2]"
            duration={1.5}
            spread={5}
          >
            Production Ready Systems
          </TextShimmer>
        </h1>

        {/* Title */}
        <h2 className="font-body font-light text-[#b3b3b3] text-center text-[clamp(0.7rem,3vw,1rem)] tracking-[0.4em] mb-6 uppercase relative z-10">
          FULL-STACK DEVELOPER
        </h2>

        {/* Description Paragraph */}
        <p className="font-body text-center text-base leading-relaxed text-[#b3b3b3] max-w-sm mb-10 relative z-10">
          I build fast, scalable web apps and integrate AI into real products.
        </p>

        {/* Connect Button */}
        <button
          onClick={handleConnectClick}
          className="relative overflow-hidden rounded-full backdrop-blur-sm font-heading border px-10 py-2 text-foreground mb-14 z-10"
        >
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div className="mt-0.5">let's connect</div>
        </button>

        {/* Availability Status */}
        <div className="relative z-10">
          <AvailabilityStatus />
        </div>
      </div>
    </section>
  );
}