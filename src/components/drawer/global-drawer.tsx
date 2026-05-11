import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { motion, type Variants } from "framer-motion";
import { X, Calendar, ArrowRight, Rocket } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";
import { useSubmitForm } from "@/hooks/useSubmitForm";
import RainbowButton from '@/components/magicui/rainbow-button';
import { Linkedin, Github, Mail } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 30 } 
  },
};

export function GlobalDrawer() {
  const { isOpen, close } = useDrawerStore();
  const { isSubmitting, isSubmitSuccessful, isSuccess, message, handleSubmit, resetFormState } = useSubmitForm();

  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [isSubmitSuccessful, isSuccess]);

  return (
    <Drawer 
      open={isOpen} 
      onOpenChange={(open) => !open && close()} 
      repositionInputs={false}
      direction="bottom"
    >
      <DrawerContent className="mx-0 w-full h-[100svh] p-0 rounded-none border-none bg-background/60 backdrop-blur-3xl overflow-hidden z-[100]">
        
        {/* Technical Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="bg-grid opacity-20" />
          <div className="mesh-gradient opacity-30" />
        </div>

        <div className="w-full h-full relative z-10 flex flex-col overflow-hidden max-w-7xl mx-auto">
          
          {/* Header Area */}
          <div className="w-full px-6 lg:px-8 py-4 lg:py-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary/80">Mission Control</span>
            </div>
            
            <button
              onClick={close}
              className="group p-2 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/[0.08] transition-all hover:rotate-90"
              aria-label="Close"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-foreground/70 group-hover:text-foreground" />
            </button>
          </div>

          <div className="flex-1 min-h-0 flex flex-col p-4 md:p-8 lg:p-12 lg:pt-4 overflow-hidden">
            
            {/* MOBILE VIEW: Minimal (Calendly + Form) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 min-h-0 flex flex-col gap-6 lg:hidden"
            >
               {/* Mobile Calendly */}
               <motion.div variants={itemVariants} className="shrink-0">
                 <button 
                    onClick={() => window.open('https://calendly.com/sharmaameya999/30min', '_blank')}
                    className="w-full flex items-center justify-between px-6 py-5 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-heading text-[10px] uppercase tracking-widest group active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Strategy Call</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </motion.div>

               {/* Mobile Form */}
               <motion.div variants={itemVariants} className="flex-1 min-h-0 flex flex-col">
                  <div className="flex-1 min-h-0 p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
                     <h3 className="font-heading text-lg uppercase tracking-tight text-foreground mb-4 shrink-0">Direct Message</h3>
                     
                     {isSubmitSuccessful ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                          <Rocket className="w-8 h-8 text-primary" />
                          <p className="font-body text-sm text-muted-foreground">{message}</p>
                        </div>
                     ) : (
                        <form onSubmit={handleSubmit} className="flex-1 min-h-0 flex flex-col justify-between">
                          <div className="space-y-4 shrink-0">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required
                              className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-4 focus:border-primary/50 outline-none transition-all font-body text-sm font-light"
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              required
                              className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-4 focus:border-primary/50 outline-none transition-all font-body text-sm font-light"
                            />
                          </div>
                          
                          <div className="flex-1 min-h-0 my-4 flex flex-col">
                            <textarea
                              name="message"
                              placeholder="Project details..."
                              required
                              className="w-full flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 focus:border-primary/50 outline-none transition-all font-body text-sm font-light resize-none"
                            />
                          </div>

                          <RainbowButton
                            type="submit"
                            className="w-full font-heading h-14 text-[10px] uppercase tracking-[0.3em] rounded-xl shrink-0"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </RainbowButton>
                        </form>
                     )}
                  </div>
               </motion.div>
            </motion.div>

            {/* PC VIEW: Bento Grid (Hero + Social + Form) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex flex-1 min-h-0 flex-col gap-6"
            >
              {/* PC HERO BENTO */}
              <motion.div variants={itemVariants} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl relative overflow-hidden group shrink-0">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Rocket className="w-32 h-32 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="font-heading text-5xl text-foreground mb-3 uppercase tracking-tighter leading-none">
                    Ready to <span className="text-primary italic">launch</span> <br /> your vision?
                  </h2>
                  <p className="font-body text-base text-muted-foreground mb-6 font-light leading-relaxed max-w-xl">
                    Architecting high-performance digital products with technical precision.
                  </p>

                  <button 
                    onClick={() => window.open('https://calendly.com/sharmaameya999/30min', '_blank')}
                    className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:brightness-110 active:scale-[0.98] transition-all font-heading text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* PC SOCIAL & FORM GRID */}
              <div className="flex-1 min-h-0 grid grid-cols-12 gap-6 overflow-hidden">
                
                {/* LEFT: SOCIAL BENTO (Col-5) */}
                <motion.div variants={itemVariants} className="col-span-5 flex flex-col min-h-0">
                  <div className="flex-1 min-h-0 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col justify-between">
                    <div className="overflow-hidden flex flex-col">
                      <p className="font-heading text-[9px] uppercase tracking-[0.4em] text-primary/40 mb-6 shrink-0">Connectivity</p>
                      <div className="space-y-2 overflow-y-auto custom-scrollbar">
                          <a href="mailto:sharmaameya999@gmail.com" className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Mail className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Email</span>
                              <span className="text-sm font-body font-light truncate">sharmaameya999@gmail.com</span>
                            </div>
                          </a>
                          <a href="https://linkedin.com/in/ameyasharma999" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">LinkedIn</span>
                              <span className="text-sm font-body font-light">/in/ameyasharma999</span>
                            </div>
                          </a>
                          <a href="https://github.com/ameyasharma-ai" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Github className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">GitHub</span>
                              <span className="text-sm font-body font-light">@ameyasharma-ai</span>
                            </div>
                          </a>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 opacity-50 shrink-0">
                       <p className="font-body text-[9px] text-muted-foreground leading-relaxed">
                         Available Q3 2026.
                       </p>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT: FORM BENTO (Col-7) */}
                <motion.div variants={itemVariants} className="col-span-7 flex flex-col min-h-0">
                  <div className="flex-1 min-h-0 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-xl overflow-hidden flex flex-col">
                    {isSubmitSuccessful ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                          <Rocket className="w-8 h-8 text-primary" />
                          <h3 className="font-heading text-2xl uppercase tracking-tighter text-foreground">Launched</h3>
                          <p className="font-body text-muted-foreground text-sm font-light max-w-xs">{message}</p>
                          <button onClick={resetFormState} className="text-primary font-heading text-[9px] uppercase tracking-widest hover:underline pt-2">New message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex-1 min-h-0 flex flex-col overflow-hidden">
                          <div className="flex items-center justify-between mb-6 shrink-0">
                            <h3 className="font-heading text-xl uppercase tracking-tight text-foreground">Direct Message</h3>
                            <div className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                              <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Fast Reply</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 shrink-0">
                            <div className="space-y-1">
                              <label className="font-heading text-[8px] uppercase tracking-[0.4em] text-primary/40 ml-1">Name</label>
                              <input type="text" name="name" placeholder="Name" required className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-3 focus:border-primary/50 outline-none transition-all font-body text-xs font-light" />
                            </div>
                            <div className="space-y-1">
                              <label className="font-heading text-[8px] uppercase tracking-[0.4em] text-primary/40 ml-1">Email</label>
                              <input type="email" name="email" placeholder="Email" required className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-3 focus:border-primary/50 outline-none transition-all font-body text-xs font-light" />
                            </div>
                          </div>

                          <div className="my-4 flex-1 min-h-0 flex flex-col overflow-hidden">
                            <label className="font-heading text-[8px] uppercase tracking-[0.4em] text-primary/40 ml-1 mb-1 shrink-0">Project Brief</label>
                            <textarea name="message" placeholder="Goals, timeline..." required className="w-full flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 focus:border-primary/50 outline-none transition-all font-body text-xs font-light resize-none min-h-0" />
                          </div>

                          <RainbowButton type="submit" className="w-full font-heading h-12 text-[10px] uppercase tracking-[0.3em] rounded-xl shrink-0 mt-2" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </RainbowButton>
                        </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>

          <div className="py-4 text-center opacity-10 shrink-0">
             <p className="font-heading text-[8px] uppercase tracking-[0.6em]">Innovate • Build • Scale</p>
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}