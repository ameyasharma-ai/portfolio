import { TextShimmer } from "@/components/ui/text-shimmer";
import { AvailabilityStatus } from "@/sections/home/content/availability-status";
import { ParticleSphere } from "@/sections/home/model/particle-sphere";
import { useDrawerStore } from "@/stores/drawerStore";
import { motion } from "framer-motion";

export function MobileHome() {
  const { open: openDrawer } = useDrawerStore();

  const handleConnectClick = () => {
    openDrawer();
  };

  return (
    <section
      id="home-mobile"
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-radial from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 opacity-30">
          <ParticleSphere />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <AvailabilityStatus />
        </motion.div>

        {/* Name with Aggressive Type */}
        <h1 className="font-heading text-[18vw] sm:text-8xl leading-[0.8] uppercase tracking-tighter mb-6 flex flex-col items-center">
          <TextShimmer className="block">Ameya</TextShimmer>
          <TextShimmer className="block text-primary">Sharma</TextShimmer>
        </h1>

        {/* Role Tag */}
        <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-10">
          <p className="font-heading text-[10px] text-primary tracking-[0.4em] uppercase">
            AI Systems Engineer
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-16 max-w-[300px] font-light">
          Architecting high-performance <span className="text-foreground">AI ecosystems</span> and scalable digital products.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-[320px]">
          <button
            onClick={handleConnectClick}
            className="w-full py-5 bg-foreground text-background rounded-2xl font-heading text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/10 active:scale-95 transition-transform"
          >
            Start a Project
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl font-heading text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}