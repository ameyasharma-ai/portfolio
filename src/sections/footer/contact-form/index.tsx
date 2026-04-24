import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import RainbowButton from '@/components/magicui/rainbow-button';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

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
        setMessage("You're in — I’ll get back to you shortly.");
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

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg border border-border">
        {isSuccess ? (
          <>
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">You're in</h3>
            <p className="font-body text-muted-foreground mb-6">{message}</p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Submission failed</h3>
            <p className="font-body text-muted-foreground mb-6">{message}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" />

      {/* Name Field */}
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-2">
          Project details
        </label>
        <textarea
          name="message"
          placeholder="What are you building? What problem are you solving? What does success look like?"
          rows={8}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors resize-none"
        />
      </div>

      {/* Button */}
      <RainbowButton
        type="submit"
        size="lg"
        className="w-full font-heading pt-0.5"
        variant="outline"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Start the conversation"}
      </RainbowButton>
    </form>
  );
}