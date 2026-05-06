import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";
import { useSubmitForm } from "@/hooks/useSubmitForm";
import RainbowButton from '@/components/magicui/rainbow-button';

const drawerVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
  },
};

export function GlobalDrawer() {
  const { isOpen, close } = useDrawerStore();
  const { isSubmitting, isSubmitSuccessful, isSuccess, message, handleSubmit, resetFormState } = useSubmitForm();

  // Confetti effect on success
  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isSubmitSuccessful, isSuccess]);

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && close()} repositionInputs={false}>
      <DrawerContent className="mx-0 w-full h-[100dvh] p-0 rounded-none border-none bg-background overflow-hidden z-[100]">
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-full relative"
        >
          {/* Close Button Desktop */}
          <button
            onClick={close}
            className="absolute top-10 right-10 p-4 hover:bg-accent rounded-full transition-colors z-[110] hidden lg:block"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-y-auto lg:overflow-hidden">
            
            {/* Left Column - Info & Booking */}
            <div className="lg:col-span-7 p-8 md:p-16 lg:p-32 flex flex-col justify-center bg-card/30 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border/50">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
              </div>
              
              {/* Close Button Mobile */}
              <button
                onClick={close}
                className="absolute top-8 left-8 p-3 hover:bg-accent rounded-full transition-colors z-[110] lg:hidden"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div variants={itemVariants} className="relative z-10 max-w-2xl">
                <h2 className="font-heading text-6xl md:text-8xl text-foreground mb-10 uppercase tracking-tighter leading-[0.85]">
                  Let's build <br /> <span className="text-primary">your next big idea.</span>
                </h2>
                <p className="font-body text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
                  I design and build high-performance products that drive business growth. Ready to turn your vision into a production-grade reality?
                </p>

                <div className="space-y-16">
                  <div>
                    <button 
                      onClick={() => window.open('https://calendly.com/ameyasharma', '_blank')}
                      className="group flex flex-col items-start gap-1 px-8 py-6 bg-primary text-primary-foreground rounded-[2rem] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20 cursor-pointer"
                    >
                      <span className="font-heading text-xl uppercase tracking-widest">Book a Strategy Call</span>
                      <span className="font-body text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold">15 MIN • VIDEO CALL</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <div>
                      <p className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary mb-4">Email</p>
                      <a href="mailto:sharmaameya999@gmail.com" className="font-body text-base text-foreground hover:text-primary transition-colors">
                        sharmaameya999@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary mb-4">LinkedIn</p>
                      <a href="https://linkedin.com/in/ameyasharma999" target="_blank" rel="noopener noreferrer" className="font-body text-base text-foreground hover:text-primary transition-colors">
                        /in/ameyasharma999
                      </a>
                    </div>
                    <div>
                      <p className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary mb-4">GitHub</p>
                      <a href="https://github.com/ameyasharma-ai" target="_blank" rel="noopener noreferrer" className="font-body text-base text-foreground hover:text-primary transition-colors">
                        @ameyasharma-ai
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-5 p-8 md:p-16 lg:p-32 flex flex-col justify-center bg-background relative">
              {isSubmitSuccessful ? (
                <motion.div variants={itemVariants} className="text-center max-w-sm mx-auto">
                  {isSuccess ? (
                    <div className="space-y-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-10">
                        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-4xl uppercase tracking-tighter text-foreground">Message Received</h3>
                      <p className="font-body text-muted-foreground text-xl font-light leading-relaxed">{message}</p>
                      <button 
                        onClick={close} 
                        className="mt-10 px-8 py-4 border border-border rounded-xl font-heading text-[10px] uppercase tracking-widest text-foreground hover:bg-accent transition-colors"
                      >
                        Close Window
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-10">
                        <X className="w-12 h-12 text-red-500" />
                      </div>
                      <h3 className="font-heading text-4xl uppercase tracking-tighter text-foreground">Error</h3>
                      <p className="font-body text-muted-foreground text-xl font-light leading-relaxed">{message}</p>
                      <button 
                        onClick={resetFormState} 
                        className="mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-heading text-[10px] uppercase tracking-widest transition-colors"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto lg:mx-0">
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <input type="text" name="_gotcha" className="hidden" />
                    
                    <div className="space-y-4">
                      <label className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full bg-transparent border-b border-border/50 py-6 focus:border-primary outline-none transition-colors font-body text-xl font-light placeholder:text-muted-foreground/30"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        className="w-full bg-transparent border-b border-border/50 py-6 focus:border-primary outline-none transition-colors font-body text-xl font-light placeholder:text-muted-foreground/30"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary">Project details</label>
                      <textarea
                        name="message"
                        placeholder="What are you building? What problem are you solving? What does success look like?"
                        required
                        className="w-full bg-transparent border-b border-border/50 py-6 focus:border-primary outline-none transition-colors font-body text-xl font-light placeholder:text-muted-foreground/30 resize-none h-40"
                      />
                    </div>

                    <div className="pt-10">
                      <RainbowButton
                        type="submit"
                        size="lg"
                        className="w-full font-heading h-20 text-[11px] uppercase tracking-[0.2em] pt-1 rounded-2xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Start Your Project"}
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