import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { ReactIcon } from "@/components/icons/skills/react-icon";
import { NodejsIcon } from "@/components/icons/skills/node-js-icon";
import { SocketioIcon } from "@/components/icons/skills/socket-io-icon";
import { OpenrouterIcon } from "@/components/icons/skills/openrouter-icon";
import { ViteIcon } from "@/components/icons/skills/vite-icon";
import type { CaseStudyData } from "../types";

export const advertisingPlatformData: CaseStudyData = {
  projectData: {
    slug: "advertising-platform",
    title: "InLine",
    description: "Built in 4 weeks | Solo development",
    sections: [
      {
        title: "Problem",
        items: [
          "• Lack of unified space for remote teams",
          "• High friction from context switching"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Real-time collaborative IDE & sync",
          "• AI Copilot & multi-language execution",
          "• Shared infinite architecture whiteboard",
        ]
      },
      {
        title: "Impact",
        items: [
          "• 40% reduction in team hand-off friction",
          "• Sub-50ms real-time sync across regions"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/ameyasharma-ai/inline-frontend/",
      liveUrl: "https://inline-frontend.vercel.app",
      detailPath: "/case-studies/advertising-platform"
    }
  },
  techStack: [
    { icon: <ViteIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Vite" },
    { icon: <TypescriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "TypeScript" },
    { icon: <ReactIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "React" },
    { icon: <NodejsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Node.js" },
    { icon: <SocketioIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Socket.IO" },
    { icon: <OpenrouterIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "OpenRouter" }
  ]
};