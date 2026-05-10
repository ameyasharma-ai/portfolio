import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AvailabilityStatus() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const inTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
      setCurrentTime(inTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 text-xs md:text-sm font-body text-muted-foreground whitespace-nowrap">
      <div className="flex items-center gap-2">
        <div className="relative">
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-foreground font-medium">Available now</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 opacity-60">
        <span>India</span>
        <span>•</span>
        <span>{currentTime} IST</span>
        <span className="hidden xl:inline">•</span>
        <span className="hidden xl:inline">Global projects</span>
      </div>
    </div>
  );
}
