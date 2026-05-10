"use client"
import { useDrawerStore } from "@/stores/drawerStore";
import { motion } from "framer-motion";
import { TextShimmer } from "@/components/ui/text-shimmer";

export function HomeTitle() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const { open: openDrawer } = useDrawerStore();

  const handleStartProject = () => {
    openDrawer();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      className="w-full pointer-events-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl">

          <motion.div 
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <TextShimmer className="text-[10px] md:text-xs font-heading uppercase tracking-widest">
              Available for Q2 Projects
            </TextShimmer>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-heading text-left text-[clamp(2rem,7vw,4.5rem)] leading-[0.9] tracking-tight text-foreground"
          >
            I build high-performance <br />
            <span className="text-gradient">AI & Web Products</span> <br />
            that drive growth.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-left text-base md:text-lg text-muted-foreground max-w-2xl font-body font-light leading-relaxed"
          >
            Premium full-stack development for startups and ambitious founders. 
            I help businesses launch scalable AI systems and production-grade web applications in weeks, not months.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >

            <button
              onClick={handleStartProject}
              className="group relative px-8 py-4 rounded-xl font-heading text-sm uppercase tracking-widest bg-primary text-primary-foreground
                shadow-xl shadow-primary/20
                hover:bg-primary/90 hover:scale-[1.02]
                active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>

            <button
              onClick={() => handleScroll("case-studies")}
              className="px-8 py-4 rounded-xl font-heading text-sm uppercase tracking-widest text-foreground
                backdrop-blur-md bg-transparent border border-primary/20
                hover:bg-primary/5 hover:border-primary/40
                active:scale-95 transition-all duration-300 cursor-pointer"
            >
              View My Work
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-heading text-sm uppercase tracking-widest text-primary
                bg-primary/5 border border-primary/10
                hover:bg-primary/10 hover:border-primary/30
                active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>

          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-6 flex items-center gap-6 text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-heading"
          >
            <span>• Fast Delivery</span>
            <span>• Scalable Code</span>
            <span>• Performance First</span>
          </motion.div>

      </div>
    </motion.div>
  )
}