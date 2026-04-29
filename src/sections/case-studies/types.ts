export interface TechStackItem {
  icon: React.ReactNode;
  name: string;
}

export interface ProjectSection {
  title: string;
  items: string[];
}

export interface ProjectButtons {
  githubUrl: string;
  liveUrl: string;
  detailPath: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  sections: ProjectSection[];
  buttons: ProjectButtons;
}

export interface CaseStudyData {
  projectData: ProjectData;
  techStack: TechStackItem[];
}