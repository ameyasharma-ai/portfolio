import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { ReactIcon } from "@/components/icons/skills/react-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";
import { OpenrouterIcon } from "@/components/icons/skills/openrouter-icon";
import { GithubIcon } from "@/components/icons/socials/github-icon";
import type { CaseStudyData } from "../types";

export const codegraphData: CaseStudyData = {
  projectData: {
    slug: "codegraph",
    title: "CodeGraph",
    description: "AI Codebase Visualizer | 3D Dependency Graphs | Smart Caching",
    sections: [
      {
        title: "Problem",
        items: [
          "• Manual import tracing is slow and prone to errors",
          "• Sensitive tokens often leak in client-side analysis",
          "• Large repos cause high parsing overhead"
        ]
      },
      {
        title: "Solution",
        items: [
          "• 3D mapping using Next.js and React Flow",
          "• Secure Server-Side Proxy for API isolation",
          "• Sub-second reloads via Supabase caching"
        ]
      },
      {
        title: "Impact",
        items: [
          "• Instant visualization of complex architectures",
          "• One-click analysis of any GitHub repo",
          "• Enterprise-grade security for AI credentials"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/ameyasharma-ai/codegraph",
      liveUrl: "https://codegraph-eight.vercel.app",
      detailPath: "/case-studies/codegraph"
    }
  },
  techStack: [
    { icon: <NextjsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Next.js 15" },
    { icon: <TypescriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "TypeScript" },
    { icon: <ReactIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "React Flow" },
    { icon: <SupabaseIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Supabase" },
    { icon: <OpenrouterIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "OpenRouter" },
    { icon: <GithubIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "GitHub API" }
  ]
};
