import { motion, AnimatePresence } from "framer-motion";
import type { TechStackItem } from "../types";

interface BottomBarProps {
  techStack: TechStackItem[];
}

export function BottomBar({ techStack }: BottomBarProps) {
  // Use the first item's name as a key for the entire stack transition
  const stackKey = techStack.length > 0 ? techStack[0].name : "empty";

  return (
    <div className="w-full h-full flex items-center justify-center p-4 [@media(min-width:1390px)]:p-6 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={stackKey}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          transition={{ 
            scale: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.6, ease: "easeOut" },
            filter: { duration: 0.6, ease: "easeOut" }
          }}
          className="w-full max-w-4xl"
        >
          {/* Desktop Layout (screens ≥600px) - Single row with justify-between */}
          <div className="hidden min-[600px]:flex items-center justify-between w-full">
            {techStack.map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="flex flex-col items-center gap-4">
                {tech.icon}
                <span className="font-body text-sm font-light text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Layout (screens <600px) - 3-column grid for perfect alignment */}
          <div className="min-[600px]:hidden grid grid-cols-3 gap-y-6 gap-x-4 w-full">
            {techStack.map((tech, index) => (
              <div key={`${tech.name}-mobile-${index}`} className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center [&>svg]:w-8 [&>svg]:h-8">
                  {tech.icon}
                </div>
                <span className="font-body text-xs font-light text-foreground text-center whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}