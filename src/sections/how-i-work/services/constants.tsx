import type { Service } from "./types";
import { SparklesIcon } from "@/components/icons/services/sparkles-icon";
import { LinkIcon } from "@/components/icons/services/link-icon";
import { BrainIcon } from "@/components/icons/services/brain-icon";
import { BarsIcon } from "@/components/icons/services/bars-icon";
import { MobileIcon } from "@/components/icons/services/mobile-icon";
import { CloudIcon } from "@/components/icons/services/cloud-icon";
import { DataIcon } from "@/components/icons/services/data-icon";
import { CartIcon } from "@/components/icons/services/cart-icon";
import { DollarIcon } from "@/components/icons/services/dollar-icon";

export const services: Service[] = [
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "AI-Powered Web Apps",
    description:
      "Build modern applications with AI features like chat, automation, and intelligent workflows using OpenAI and vector databases."
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "API Integrations",
    description:
      "Seamlessly connect third-party services, payments, and external APIs to create fully functional and scalable products."
  },
  {
    icon: <BrainIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Full-Stack Development",
    description:
      "End-to-end development using Next.js, Node.js, and modern databases to build fast, scalable, and production-ready apps."
  },
  {
    icon: <BarsIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "SaaS MVP Development",
    description:
      "Turn your idea into a working SaaS product with authentication, dashboards, and core features—ready to launch quickly."
  },
  {
    icon: <MobileIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Responsive Frontends",
    description:
      "Pixel-perfect, high-performance UIs built with React, Tailwind, and modern design systems."
  },
  {
    icon: <CloudIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Deployment & DevOps",
    description:
      "Deploy and manage applications using Vercel, Docker, and cloud platforms with optimized performance and scalability."
  },
  {
    icon: <DataIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Database & Backend Systems",
    description:
      "Design efficient backend systems with Prisma, PostgreSQL, and scalable APIs for real-world applications."
  },
  {
    icon: <CartIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Performance Optimization",
    description:
      "Improve speed, SEO, and Core Web Vitals to deliver smooth, fast-loading user experiences."
  },
  {
    icon: <DollarIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Product Thinking",
    description:
      "Beyond code—I help shape ideas into usable products with clean UX, scalability, and real-world usability in mind."
  }
];