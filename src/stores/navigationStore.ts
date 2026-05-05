import { create } from 'zustand';

// Desktop Section IDs
type DesktopSectionId = 'home' | 'how-i-work' | 'case-studies' | 'skills' | 'about-me';

// Mobile Section IDs  
type MobileSectionId = 'home-mobile' | 'how-i-work-mobile' | 'case-studies-mobile' | 'skills-mobile' | 'about-me-mobile';

// Combined Section IDs
type SectionId = DesktopSectionId | MobileSectionId;

// Navigation item names from the constants
type NavigationItem = "Home" | "How I Work" | "Case Studies" | "Skills" | "About me";

// Mapping from desktop section IDs to navigation item names
const DESKTOP_SECTION_TO_NAV_MAP: Record<DesktopSectionId, NavigationItem> = {
  'home': "Home",
  'how-i-work': "How I Work",
  'case-studies': "Case Studies",
  'skills': "Skills",
  'about-me': "About me",
};

// Mapping from mobile section IDs to navigation item names
const MOBILE_SECTION_TO_NAV_MAP: Record<MobileSectionId, NavigationItem> = {
  'home-mobile': "Home",
  'how-i-work-mobile': "How I Work",
  'case-studies-mobile': "Case Studies",
  'skills-mobile': "Skills",
  'about-me-mobile': "About me",
};

// Helper function to detect if we're on mobile
const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

interface NavigationState {
  activeSection: SectionId | null;
  isNavigating: boolean;
  setActiveSection: (sectionId: SectionId | null) => void;
  setIsNavigating: (navigating: boolean) => void;
  getActiveNavigationItem: () => NavigationItem | null;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  activeSection: null,
  isNavigating: false,
  
  setActiveSection: (sectionId: SectionId | null) => {
    set({ activeSection: sectionId });
  },
  
  setIsNavigating: (navigating: boolean) => {
    set({ isNavigating: navigating });
  },
  
  getActiveNavigationItem: () => {
    const { activeSection } = get();
    if (!activeSection) return null;
    
    // Check if it's a mobile section
    if (activeSection.includes('-mobile')) {
      return MOBILE_SECTION_TO_NAV_MAP[activeSection as MobileSectionId] || null;
    }
    
    // Otherwise it's a desktop section
    return DESKTOP_SECTION_TO_NAV_MAP[activeSection as DesktopSectionId] || null;
  },
}));

// Export mappings and helper functions for use in other components
export { 
  DESKTOP_SECTION_TO_NAV_MAP, 
  MOBILE_SECTION_TO_NAV_MAP,
  isMobile
};
export type { SectionId, NavigationItem, DesktopSectionId, MobileSectionId };