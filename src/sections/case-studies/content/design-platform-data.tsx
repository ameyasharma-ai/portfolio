import { ReactIcon } from "@/components/icons/skills/react-icon";
import { ViteIcon } from "@/components/icons/skills/vite-icon";
import { PythonIcon } from "@/components/icons/skills/python-icon";
import { FastAPIIcon } from "@/components/icons/skills/fast-api-icon";
import { OpenrouterIcon } from "@/components/icons/skills/openrouter-icon";
import { VercelIcon } from "@/components/icons/skills/vercel-icon";
import type { CaseStudyData } from "../types";

export const designPlatformData: CaseStudyData = {
  projectData: {
    slug: "design-platform",
    title: "Groot",
    description: "Multi-persona AI platform | Real-time voice interaction | 3D mathematical visualizer",
    sections: [
      {
        title: "Problem",
        items: [
          "• Traditional AI assistants feel robotic and lack personality",
          "• Free-tier APIs suffer from rate limits and high latency"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Multi-persona AI with real-time WebSockets",
          "• Dynamic Knowledge Base & Voice Activity Detection",
          "• Auto-failover LLM routing for high availability"
        ]
      },
      {
        title: "Impact",
        items: [
          "• Achieved ultra-low latency conversational flow",
          "• Seamless 3D audio-reactive visualization via Web Audio API"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/ameyasharma-ai/groot-frontend",
      liveUrl: "https://groot-frontend-orpin.vercel.app",
      detailPath: "/case-studies/design-platform"
    }
  },
  techStack: [
    { icon: <ReactIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "React 19" },
    { icon: <ViteIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Vite" },
    { icon: <PythonIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Python" },
    { icon: <FastAPIIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "FastAPI" },
    { icon: <OpenrouterIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "OpenRouter" },
    { icon: <VercelIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Vercel" }
  ]
};