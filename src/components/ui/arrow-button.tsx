import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ArrowButton({ children, onClick, className }: ArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        "relative overflow-hidden font-heading z-10 cursor-pointer text-sm pl-6 rounded-full glass-texture flex items-center justify-between",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Expanding background circle (now vertically centred & anchored right) */}
      <motion.div
        className="absolute right-1 top-1/2 -translate-y-1/2 h-[34px] rounded-full cursor-glass-effect"
        initial={{ width: 34 }}
        animate={{ width: isHovered ? 'calc(100% - 8px)' : 34 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: 'right center' }}
      />



      {/* Text */}
      <motion.span
        className="relative z-10 mt-1"
        animate={{ color: "#f2f2f2" }}
        transition={{ duration: 0.4, ease: "linear" }}
      >
        {children}
      </motion.span>

      {/* Arrow chip */}
      <motion.div
        className="relative z-10 rounded-full p-1 m-1"
        animate={{ x: isHovered ? -16 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ArrowRight className="w-6 h-6 text-[#f2f2f2]" />
      </motion.div>
    </motion.button>
  );
}
