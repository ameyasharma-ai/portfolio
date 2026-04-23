import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { GoogleAdsIcon } from "@/components/icons/skills/google-ads-icon";
import { MetaIcon } from "@/components/icons/skills/meta-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";
import { VercelIcon } from "@/components/icons/skills/vercel-icon";
import type { CaseStudyData } from "../types";

export const advertisingPlatformData: CaseStudyData = {
  projectData: {
    slug: "advertising-platform",
    title: "Ad Platform",
    description: "Built in 6 weeks | Solo development",
    sections: [
      {
        title: "Problem",
        items: [
          "• Manual campaign creation takes weeks",
          "• Human error creates costly mistakes"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Automated form-to-campaign pipeline",
          "• Multi-tenant architecture with smart routing",
          "• Near zero-touch automation for campaign setup",
        ]
      },
      {
        title: "Impact",
        items: [
          "• Eliminates campaign creation errors",
          "• Dramatically reduces setup time"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/ameyasharma-ai/form-automation-dev/",
      detailPath: "/case-studies/advertising-platform"
    }
  },
  techStack: [
    { icon: <TypescriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "TypeScript" },
    { icon: <NextjsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Next.js" },
    { icon: <GoogleAdsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "GoogleAdsAPI" },
    { icon: <MetaIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "MetaAPI" },
    { icon: <VercelIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Vercel" },
    { icon: <SupabaseIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Supabase" }
  ]
};