import { navigationItems } from "@/constants/index";
import { useNavigationStore, type MobileSectionId } from "@/stores/navigationStore";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";
import { useDrawerStore } from "@/stores/drawerStore";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface MobileNavProps {
  onNavigationClick: () => void;
}

const MOBILE_HREF_TO_SECTION_MAP: Record<string, MobileSectionId> = {
  '#home-mobile': 'home-mobile',
  '#services': 'services',
  '#case-studies-mobile': 'case-studies-mobile',
  '#skills-mobile': 'skills-mobile',
  '#about-me-mobile': 'about-me-mobile',
  '#footer': 'footer',
};

const menuTransition = {
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
};

export function MobileNav({ onNavigationClick }: MobileNavProps) {
  const { setIsNavigating, setActiveSection } = useNavigationStore();
  const { open: openDrawer } = useDrawerStore();

  const handleNavClick = (item: typeof navigationItems[0]) => {
    const mobileHref = item.mobileLink;
    if (!mobileHref || !mobileHref.startsWith('#')) return;

    const targetId = mobileHref.substring(1);
    const targetElement = document.getElementById(targetId);
    const targetSectionId = MOBILE_HREF_TO_SECTION_MAP[mobileHref];

    // Close the menu first to unlock scrolling and allow animations
    onNavigationClick();

    // Use a small timeout to ensure the menu state change doesn't interrupt the scroll trigger
    setTimeout(() => {
      if (targetElement) {
        setIsNavigating(true);
        if (targetSectionId) setActiveSection(targetSectionId);

        if (globalLenis) {
          globalLenis.scrollTo(`#${targetId}`, {
            duration: 1.5,
            offset: -40,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            onComplete: () => {
              setIsNavigating(false);
            }
          });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => setIsNavigating(false), 1000);
        }
      }
    }, 100);
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
    onNavigationClick();
  };

  const handleContactClick = () => {
    onNavigationClick();
    openDrawer();
  };

  return (
    <div className="flex flex-col h-full justify-between pb-[4vh] overflow-y-auto overflow-x-hidden">
      {/* Navigation Links - Responsively Scaled "Registry" Style */}
      <div className="flex flex-col px-8 gap-0 border-l border-white/5 ml-8 mt-[2vh]">
        {navigationItems.map((item, idx) => {
          if (item.name === "Contact") return null;

          return (
            <motion.button
              key={item.name}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...menuTransition, delay: idx * 0.05 }}
              onClick={() => handleNavClick(item)}
              className="group flex items-center gap-6 py-[2vh] md:py-[3vh] text-left relative"
            >
              {/* Registry Index */}
              <div className="flex flex-col items-center absolute -left-[41px]">
                <span className="font-heading text-[10px] text-primary/40 group-hover:text-primary transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <span className="font-heading text-[8vw] sm:text-5xl text-foreground/60 group-hover:text-foreground uppercase tracking-tighter transition-all duration-300 leading-none">
                {item.name}
              </span>
            </motion.button>
          );
        })}

        <motion.button
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...menuTransition, delay: 0.3 }}
          onClick={openResume}
          className="group flex items-center gap-6 py-[2vh] md:py-[3vh] text-left relative"
        >
          <div className="flex flex-col items-center absolute -left-[41px]">
            <span className="font-heading text-[10px] text-primary/40 group-hover:text-primary">
              EX
            </span>
          </div>
          <span className="font-heading text-[6vw] sm:text-2xl text-primary/60 group-hover:text-primary uppercase tracking-tighter transition-all duration-300 leading-none">
            Archive / Resume
          </span>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1" />
        </motion.button>
      </div>

      {/* Footer Info - Responsively Scaled */}
      <div className="px-8 space-y-[3vh] mt-[2vh]">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...menuTransition, delay: 0.4 }}
          className="flex flex-col gap-[2vh]"
        >
          {/* Muted 60% Intensity Button - Viewport Height Scaled */}
          <button
            onClick={handleContactClick}
            className="w-full font-heading h-[8vh] max-h-16 min-h-[48px] text-[10px] uppercase tracking-[0.4em] rounded-2xl bg-zinc-900 text-foreground border border-white/10 hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-2xl shadow-black/50"
          >
            Start Project
          </button>

          <div className="flex items-center gap-6 justify-center">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/ameyasharma-ai" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/ameyasharma999" },
              { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/ameyasharma07_" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:sharmaameya999@gmail.com" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 active:scale-90"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground/10 font-heading px-2 pb-1">
          <span>Mumbai // 19:55</span>
          <span>Index © 2026</span>
        </div>
      </div>
    </div>
  );
}