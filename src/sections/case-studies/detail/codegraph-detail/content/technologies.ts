import type { ContentSection } from "./types";

export const technologiesContent: ContentSection = {
  id: "technologies",
  title: "Technologies Used 🛠️",
  content: "",
  subsections: [
    {
      title: "Frontend & Framework",
      content: "• **Next.js 15** - React framework for production-grade apps\n• **TypeScript** - Type-safe development across the stack\n• **React Flow** - Highly customizable graph visualization engine\n• **Tailwind CSS v4** - Modern, high-performance styling\n• **Lucide React** - Sleek, consistent icon system"
    },
    {
      title: "Database & AI",
      content: "• **Supabase (PostgreSQL)** - High-performance caching and persistence layer\n• **OpenRouter API** - Access to Gemini 2.0 Flash for architectural analysis"
    },
    {
      title: "Infrastructure & API",
      content: "• **GitHub REST API** - Recursive repository tree and content extraction\n• **Vercel** - Edge-ready frontend and serverless API deployment"
    },
    {
      title: "DevOps & Tooling",
      content: "• **GitHub Actions** - Automated CI/CD for seamless production updates\n• **ESLint & Prettier** - Strict code quality and formatting standards"
    }
  ]
};
