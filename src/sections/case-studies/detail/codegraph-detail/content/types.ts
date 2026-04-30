export interface ContentSection {
  id: string;
  title: string;
  content: string;
  subsections?: ContentSubsection[];
  customComponent?: 'next-steps-cta'; // Extensible for future custom components
}

export interface ContentSubsection {
  title: string;
  content: string;
}

export interface CaseStudyContent {
  sections: ContentSection[];
}
