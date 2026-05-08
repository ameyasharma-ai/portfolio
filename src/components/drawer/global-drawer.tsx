import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { motion, type Variants } from "framer-motion";
import { X, Calendar, Mail, Linkedin, Github, ArrowRight, Rocket } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";
import { useSubmitForm } from "@/hooks/useSubmitForm";
import RainbowButton from '@/components/magicui/rainbow-button';

const drawerVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
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
    <Drawer open={isOpen} onOpenChange={(open) => !open && close()} repositionInputs={false}>
      <DrawerContent className="mx-0 w-full h-[100svh] p-0 rounded-none border-none bg-[#050505] overflow-hidden z-[100]">
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-full relative overflow-y-auto"
        >
          {/* Header Area */}
          <div className="sticky top-0 z-[110] w-full px-6 py-6 flex items-center justify-between bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary">Available for Q3 2026</span>
            </div>
            <button
              onClick={close}
              className="p-3 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 min-h-full">
            
            {/* Left Column - Content */}
            <div className="lg:col-span-7 px-6 py-12 md:p-16 lg:p-32 flex flex-col justify-center relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] aspect-square bg-radial from-primary/10 via-transparent to-transparent opacity-50 blur-[100px]" />
              </div>
              
              <motion.div variants={itemVariants} className="relative z-10 w-full">
                <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl text-foreground mb-8 uppercase tracking-tighter leading-[0.85]">
                  Let's build <br /> <span className="text-primary italic">the future</span> <br /> together.
                </h2>
                <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 font-light leading-relaxed max-w-xl">
                  Architecting high-performance digital products that scale.
                </p>

                <div className="flex flex-col gap-12">
                  <button 
                    onClick={() => window.open('https://calendly.com/ameyasharma', '_blank')}
                    className="group relative w-full lg:w-fit flex items-center justify-between lg:justify-start gap-8 px-8 py-6 bg-zinc-900 border border-white/10 rounded-2xl hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-2xl shadow-black/50"
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-heading text-lg uppercase tracking-widest text-foreground">Book Strategy Call</span>
                      <span className="font-body text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-primary" /> 15 MIN VIDEO CALL
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="group">
                      <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-2">Email</p>
                      <a href="mailto:sharmaameya999@gmail.com" className="flex items-center gap-2 font-body text-sm text-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4 text-primary/40 group-hover:text-primary" /> sharmaameya999@gmail.com
                      </a>
                    </div>
                    <div className="group">
                      <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-2">LinkedIn</p>
                      <a href="https://linkedin.com/in/ameyasharma999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4 text-primary/40 group-hover:text-primary" /> /in/ameyasharma999
                      </a>
                    </div>
                    <div className="group">
                      <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-2">GitHub</p>
                      <a href="https://github.com/ameyasharma-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4 text-primary/40 group-hover:text-primary" /> @ameyasharma-ai
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-5 px-6 py-12 md:p-16 lg:p-32 flex flex-col justify-center bg-zinc-950/30 border-t lg:border-t-0 lg:border-l border-white/5 relative">
              {isSubmitSuccessful ? (
                <motion.div variants={itemVariants} className="text-center max-w-sm mx-auto">
                  {isSuccess ? (
                    <div className="space-y-8">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                          <Rocket className="w-10 h-10 text-primary" />
                        </motion.div>
                      </div>
                      <h3 className="font-heading text-3xl uppercase tracking-tighter text-foreground">Mission Launched</h3>
                      <p className="font-body text-muted-foreground text-lg font-light leading-relaxed">{message}</p>
                      <button 
                        onClick={close} 
                        className="w-full mt-10 px-8 py-5 bg-zinc-900 border border-white/10 rounded-2xl font-heading text-[10px] uppercase tracking-widest text-foreground hover:bg-zinc-800 transition-colors"
                      >
                        Back to Portfolio
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-8 border border-red-500/20">
                        <X className="w-10 h-10 text-red-500" />
                      </div>
                      <h3 className="font-heading text-3xl uppercase tracking-tighter text-foreground">Launch Aborted</h3>
                      <p className="font-body text-muted-foreground text-lg font-light leading-relaxed">{message}</p>
                      <button 
                        onClick={resetFormState} 
                        className="w-full mt-10 px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-heading text-[10px] uppercase tracking-widest transition-colors"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto lg:mx-0">
                  <div className="mb-12">
                    <h3 className="font-heading text-2xl uppercase tracking-tighter text-foreground">Direct Message</h3>
                    <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-widest">Expected response: <span className="text-primary">&lt; 12 hours</span></p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <input type="text" name="_gotcha" className="hidden" />
                    
                    <div className="space-y-3">
                      <label className="font-heading text-[9px] uppercase tracking-[0.4em] text-primary/60">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-5 focus:border-primary/50 outline-none transition-all font-body text-base font-light placeholder:text-muted-foreground/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="font-heading text-[9px] uppercase tracking-[0.4em] text-primary/60">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        required
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-5 focus:border-primary/50 outline-none transition-all font-body text-base font-light placeholder:text-muted-foreground/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="font-heading text-[9px] uppercase tracking-[0.4em] text-primary/60">Project Details</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project, goals, and timeline..."
                        required
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-5 focus:border-primary/50 outline-none transition-all font-body text-base font-light placeholder:text-muted-foreground/20 resize-none h-40"
                      />
                    </div>

                    <div className="pt-8">
                      <RainbowButton
                        type="submit"
                        size="lg"
                        className="w-full font-heading h-16 text-[10px] uppercase tracking-[0.3em] pt-1 rounded-2xl shadow-2xl shadow-primary/10"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Transmitting..." : "Send Message"}
                      </RainbowButton>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}