import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./service-card";
import { services } from "./constants";
import { useHorizontalScroll } from "./useHorizontalScroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion, AnimatePresence } from "framer-motion";
import { useDrawerStore } from "@/stores/drawerStore";

export function Services() {
  const { 
    trackRef, 
    viewportRef, 
    showLeftShadow, 
    showRightShadow,
    scrollProgress,
    isScrolling
  } = useHorizontalScroll();
  const { open: openDrawer } = useDrawerStore();

  const handleRequestServiceClick = () => {
    openDrawer();
  };

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col relative">
      {/* Horizontal Scroll Progress Bar - positioned right under top border */}
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[-32px] left-[-2rem] right-[-2rem] z-20 px-8"
          >
            <div className="h-1 bg-gray-800 rounded-full">
              <ScrollProgress
                progress={scrollProgress}
                className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full"
                springOptions={{
                  stiffness: 280,
                  damping: 25,
                  restDelta: 0.001
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <button
        type="button"
        onClick={handleRequestServiceClick}
        className="font-heading text-xl mb-8 text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer"
        aria-label="Request Service"
      >
        Request Service
        <ArrowRight className="w-7 h-7 mb-1" aria-hidden="true" />
      </button>

      {/* Card container viewport with scroll shadows */}
      <div className="flex-1 min-h-0 relative edge-to-edge">
        {/* Left scroll shadow */}
        <div 
          className={`absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showLeftShadow ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Scrollable viewport (mask) */}
        <div ref={viewportRef} className="w-full h-full overflow-hidden">
          {/* Horizontal track */}
          <div
            ref={trackRef}
            className="flex gap-6 h-full w-max will-change-transform"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                iconBg={service.iconBg}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Right scroll shadow */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showRightShadow ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
