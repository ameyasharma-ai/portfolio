import { motion } from "framer-motion";
import { useDrawerStore } from "@/stores/drawerStore";
import { Rocket, Zap, Target, ArrowRight, ShieldCheck, Cpu, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FunnelSectionProps {
  className?: string;
}

/**
 * Section 1: Results & Performance
 * Focuses on trust and high-power results.
 */
export function ResultsBanner({ className }: FunnelSectionProps) {
  const { open: openDrawer } = useDrawerStore();

  return (
    <section className={cn("py-24 px-6 md:px-12 lg:px-16 overflow-hidden", className)}>
      <div className="max-w-[1400px] mx-auto">
        <div className="relative group">
          {/* Animated Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-[2.5rem] opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 will-change-[filter,opacity]" />
          
          <div className="relative bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden shadow-2xl will-change-transform">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-heading uppercase tracking-widest">
                <Zap className="w-3 h-3" />
                Performance First
              </div>
              
              <h2 className="text-4xl md:text-6xl font-heading leading-tight tracking-tighter uppercase">
                Drive results with <span className="text-primary">high-performance</span> systems.
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                I build fast, scalable web products that help businesses grow and launch in weeks, not months. Architecture designed for speed and conversion.
              </p>

              <button
                onClick={() => openDrawer()}
                className="group/btn relative px-8 py-4 bg-foreground text-background rounded-xl font-heading text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Launch Your Project <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Performance Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto relative z-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-background/50 border border-border/50 rounded-2xl flex flex-col items-center text-center gap-2 will-change-transform"
              >
                <Cpu className="w-6 h-6 text-primary mb-2" />
                <span className="text-3xl font-heading">99.9%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Reliability</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-background/50 border border-border/50 rounded-2xl flex flex-col items-center text-center gap-2 will-change-transform"
              >
                <TrendingUp className="w-6 h-6 text-primary mb-2" />
                <span className="text-3xl font-heading">2X</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Performance</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-background/50 border border-border/50 rounded-2xl flex flex-col items-center text-center gap-2 col-span-2 will-change-transform"
              >
                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                <span className="text-xl font-heading uppercase">Enterprise Grade</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Security Defaults</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Section 2: Process Bridge
 * Focuses on the journey from idea to ship.
 */
export function ProcessBridge({ className }: FunnelSectionProps) {
  const { open: openDrawer } = useDrawerStore();

  const steps = [
    { icon: <Target className="w-5 h-5" />, label: "Strategy", desc: "Defining the core product roadmap." },
    { icon: <Cpu className="w-5 h-5" />, label: "Prototype", desc: "Rapid development of core features." },
    { icon: <Rocket className="w-5 h-5" />, label: "Scale", desc: "Production-grade infrastructure." }
  ];

  return (
    <section className={cn("py-24 px-6 md:px-12 lg:px-16 bg-card/30 border-y border-border/50", className)}>
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading uppercase tracking-tighter">
            From Prototype to <span className="text-primary">Production</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            I'm ready to ship your vision with architecture that scales alongside your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-colors group will-change-[transform,opacity]"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-primary">
                {step.icon}
              </div>
              <h3 className="font-heading text-lg mb-2 uppercase tracking-wide">{step.label}</h3>
              <p className="text-sm text-muted-foreground font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => openDrawer()}
          className="group px-10 py-5 border border-primary text-primary hover:bg-primary hover:text-background rounded-2xl font-heading text-sm uppercase tracking-widest transition-all duration-300"
        >
          Start a Project
        </button>
      </div>
    </section>
  );
}

/**
 * Section 3: Market Dominator
 * The high-impact closer.
 */
export function MarketDominator({ className }: FunnelSectionProps) {
  const { open: openDrawer } = useDrawerStore();

  return (
    <section className={cn("py-32 px-6 md:px-12 lg:px-16", className)}>
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[3rem] p-1 md:p-2 bg-gradient-to-b from-primary/30 to-transparent">
          <div className="bg-background rounded-[2.8rem] p-12 md:p-24 text-center space-y-10 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] uppercase tracking-tighter">
                Ready to <br /> <span className="text-primary italic">dominate</span> <br /> your market?
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                I help founders automate operations and scale with cutting-edge AI integrations.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <button
                onClick={() => openDrawer()}
                className="px-12 py-6 bg-primary text-primary-foreground rounded-2xl font-heading text-lg uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)]"
              >
                Start a Project
              </button>
              
              <div className="flex items-center gap-3 text-xs font-heading uppercase tracking-widest text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Q3-Q4 2026 Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
