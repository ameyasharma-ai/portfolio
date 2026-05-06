import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import RainbowButton from '@/components/magicui/rainbow-button';
import { useSubmitForm } from '@/hooks/useSubmitForm';

export function ContactForm() {
  const { isSubmitting, isSubmitSuccessful, isSuccess, message, handleSubmit } = useSubmitForm();

  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

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

  if (isSubmitSuccessful) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-20 px-8"
      >
        {isSuccess ? (
          <div className="space-y-8">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-10">
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-4xl uppercase tracking-tighter text-foreground">Message Received</h3>
            <p className="font-body text-muted-foreground text-xl font-light leading-relaxed max-w-sm mx-auto">{message}</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-10">
              <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="font-heading text-4xl uppercase tracking-tighter text-foreground">Submission Failed</h3>
            <p className="font-body text-muted-foreground text-xl font-light leading-relaxed max-w-sm mx-auto">{message}</p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" />

      {/* Name Field */}
      <div className="space-y-4">
        <label className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-transparent border-b border-border/50 py-4 focus:border-primary outline-none transition-colors font-body text-xl font-light placeholder:text-muted-foreground/30"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-4">
        <label className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          className="w-full bg-transparent border-b border-border/50 py-4 focus:border-primary outline-none transition-colors font-body text-xl font-light placeholder:text-muted-foreground/30"
        />
      </div>

      {/* Message */}
      <div className="space-y-4">
        <label className="font-heading text-[11px] uppercase tracking-[0.4em] text-primary">Project details</label>
        <textarea
          name="message"
          placeholder="What are you building? What problem are you solving? What does success look like?"
          required
          className="w-full bg-transparent border-b border-border/50 py-4 focus:border-primary outline-none transition-colors font-body text-xl font-light placeholder:text-muted-foreground/30 resize-none h-40"
        />
      </div>

      {/* Button */}
      <div className="pt-8">
        <RainbowButton
          type="submit"
          size="lg"
          className="w-full font-heading h-16 text-[11px] uppercase tracking-widest pt-1 rounded-2xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Start Your Project"}
        </RainbowButton>
      </div>
    </form>
  );
}