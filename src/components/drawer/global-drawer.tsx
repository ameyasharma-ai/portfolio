import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Confetti
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mnjllele", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setMessage("Thanks — I’ll get back to you shortly.");
      } else {
        setIsSuccess(false);
        setMessage(data?.errors?.[0]?.message || "Something went wrong.");
      }
    } catch {
      setIsSuccess(false);
      setMessage("Network error. Please try again.");
    }

    setIsSubmitting(false);
    setIsSubmitSuccessful(true);
  };

  const handleReset = () => {
    setIsSubmitSuccessful(false);
    setIsSuccess(false);
    setMessage("");
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && close()} repositionInputs={false}>
      <DrawerContent className="mx-2.5 max-w-none sm:max-w-fit sm:mx-auto p-4 sm:p-6 rounded-2xl shadow-xl">
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-[480px] space-y-4 sm:space-y-6"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <DrawerHeader className="px-0 space-y-2.5 relative">
              <DrawerClose asChild>
                <button
                  className="absolute -top-2 -right-2 p-2 hover:bg-accent rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </DrawerClose>

              <DrawerTitle className="text-2xl font-heading tracking-tight mt-6">
                {isSubmitSuccessful
                  ? isSuccess
                    ? "Message received"
                    : "Something went wrong"
                  : "Start a project"}
              </DrawerTitle>

              {!isSubmitSuccessful && (
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  If you're building something meaningful, let's talk. I focus on systems that actually ship and create real business impact.
                </p>
              )}
            </DrawerHeader>
          </motion.div>

          {/* Success / Error */}
          {isSubmitSuccessful && (
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
              {isSuccess ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-body text-muted-foreground mb-6">{message}</p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-body text-muted-foreground mb-6">{message}</p>
                  <button
                    onClick={handleReset}
                    className="font-body text-primary hover:text-primary/80 transition-colors"
                  >
                    Try again
                  </button>
                </>
              )}
            </motion.div>
          )}

          {/* Form */}
          {!isSubmitSuccessful && (
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-6">

                {/* Honeypot (anti-spam) */}
                <input type="text" name="_gotcha" className="hidden" />

                <motion.div variants={itemVariants}>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    placeholder="What are you building? What problem are you trying to solve?"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg resize-none h-28 sm:h-36"
                  />
                </motion.div>

                <DrawerFooter className="flex flex-col gap-3 px-0">
                  <motion.div variants={itemVariants}>
                    <RainbowButton
                      type="submit"
                      size="lg"
                      className="w-full font-heading pt-0.5"
                      variant="outline"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Start the conversation"}
                    </RainbowButton>
                  </motion.div>
                </DrawerFooter>
              </form>
            </motion.div>
          )}
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}