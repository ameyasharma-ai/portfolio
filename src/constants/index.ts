export type NavigationItem = {
  name: string;
  link: string;
  mobileLink: string;
};

export const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    link: "#home",
    mobileLink: "#home-mobile"
  },
  {
    name: "Services",
    link: "#services",
    mobileLink: "#services"
  },
  {
    name: "Case Studies",
    link: "#case-studies",
    mobileLink: "#case-studies-mobile"
  },
  {
    name: "Skills",
    link: "#skills",
    mobileLink: "#skills-mobile"
  },
  {
    name: "About",
    link: "#about-me",
    mobileLink: "#about-me-mobile"
  },
  {
    name: "Contact",
    link: "#footer",
    mobileLink: "#footer"
  }
];