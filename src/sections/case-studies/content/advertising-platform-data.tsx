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
          "• Remote teams lack unified space for coding and brainstorming",
          "• Juggling multiple apps causes friction and context switching"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Real-time collaborative IDE with multi-file sync",
          "• Integrated AI Copilot and multi-language execution",
          "• Shared infinite whiteboard for system architecture",
        ]
      },
      {
        title: "Impact",
        items: [
          "• Seamless bridge between developers and designers",
          "• Zero-latency synchronization across remote teams"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/ameyasharma-ai/inline-frontend/",
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