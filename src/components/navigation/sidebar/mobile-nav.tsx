import { navigationItems } from "@/constants/index";
import { useNavigationStore, type MobileSectionId } from "@/stores/navigationStore";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";
import RainbowButton from '@/components/magicui/rainbow-button';

interface MobileNavProps {
  onNavigationClick: () => void; // Callback to close sidebar
}

// Mapping from mobile href to section IDs
const MOBILE_HREF_TO_SECTION_MAP: Record<string, MobileSectionId> = {
  '#home-mobile': 'home-mobile',
  '#services': 'services',
  '#case-studies-mobile': 'case-studies-mobile',
  '#skills-mobile': 'skills-mobile',
  '#about-me-mobile': 'about-me-mobile',
  '#footer': 'footer',
};

export function MobileNav({ onNavigationClick }: MobileNavProps) {
  const { setIsNavigating, setActiveSection } = useNavigationStore();

  const handleNavClick = (item: typeof navigationItems[0]) => {
    // Handle section navigation for other links using mobile links
    const mobileHref = item.mobileLink;
    if (mobileHref.startsWith('#')) {
      const targetId = mobileHref.substring(1); // Remove the #
      const targetElement = document.getElementById(targetId);
      const targetSectionId = MOBILE_HREF_TO_SECTION_MAP[mobileHref];
      
      if (targetElement && targetSectionId) {
        // Start navigation state (pauses section tracking)
        setIsNavigating(true);
        
        // Immediately set the target section for better UX
        setActiveSection(targetSectionId);
        
        // Start smooth scroll using Lenis
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
          targetElement.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
          setTimeout(() => {
            setIsNavigating(false);
          }, 1000);
        }
        
        // Close sidebar after navigation
        onNavigationClick();
      }
    }
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
    onNavigationClick();
  };

  return (
    <nav className="flex flex-col gap-2 flex-1 p-4">
      {navigationItems.map((item) => {
        if (item.name === "Contact") return null;

        return (
          <button
            key={item.name}
            onClick={() => handleNavClick(item)}
            className="flex items-center gap-3 py-3 text-xl font-heading text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none border-b rounded-s-none rounded-e-none text-left cursor-pointer"
          >
            <span>{item.name}</span>
          </button>
        );
      })}

      <button
        onClick={openResume}
        className="flex items-center gap-3 py-3 text-xl font-heading text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none border-b rounded-s-none rounded-e-none text-left cursor-pointer text-primary"
      >
        <span>My Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
      </button>

      {navigationItems
        .filter((item) => item.name === "Contact")
        .map((item) => (
          <RainbowButton
            key={item.name}
            onClick={() => handleNavClick(item)}
            size="lg"
            className="w-full font-heading pt-0.5 text-md mt-4"
            variant="outline"
          >
            {item.name}
          </RainbowButton>
        ))}
    </nav>
  );
}