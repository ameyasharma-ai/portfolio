import { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigationStore, type DesktopSectionId } from "@/stores/navigationStore";
import { useDrawerStore } from "@/stores/drawerStore";
import type { TabProps } from "./types";

// Mapping from desktop href to section IDs
const DESKTOP_HREF_TO_SECTION_MAP: Record<string, DesktopSectionId> = {
  '#home': 'home',
  '#how-i-work': 'how-i-work',
  '#case-studies': 'case-studies',
  '#skills': 'skills',
  '#about-me': 'about-me',
};

export const Tab = ({ children, setPosition, href, isActive }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { setIsNavigating, setActiveSection } = useNavigationStore();
  const { open: openDrawer } = useDrawerStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Always prevent default for all navigation items
    
    // Handle Contact button specifically
    if (href === '#contact') {
      openDrawer();
      return;
    }
    
    // Handle section navigation for other links using desktop section IDs
    if (href.startsWith('#')) {
      const targetId = href.substring(1); // Remove the #
      const targetElement = document.getElementById(targetId);
      const targetSectionId = DESKTOP_HREF_TO_SECTION_MAP[href];
      
      if (targetElement && targetSectionId) {
        // Start navigation state (pauses section tracking)
        setIsNavigating(true);
        
        // Immediately set the target section for better UX
        setActiveSection(targetSectionId);
        
        // Start smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // End navigation state after scroll completes
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000); // 1 second should be enough for smooth scroll
      }
    }
  };

  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 rounded-full"
      animate={{
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)"
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
    >
      <a
        href={href}
        onClick={handleClick}
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-foreground mix-blend-difference whitespace-nowrap"
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </a>
    </motion.li>
  );
};