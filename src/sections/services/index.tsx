import { Check } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";

const competencies = [
  {
    title: "Real-Time AI & Voice",
    description:
      "Low-latency speech-to-speech pipelines, multi-provider LLM failover, and edge inference built for production.",
    features: [
      "<1.5s WebSocket Voice AI (Groot OS)",
      "10+ Model Failover & TF-IDF RAG",
      "<200ms Barge-In & WebRTC AEC (Robot)",
      "60 FPS YOLOv8 & YuNet Vision",
    ],
    tier: "Track 01",
  },
  {
    title: "Full-Stack TypeScript",
    description:
      "Production React and Next.js 15 applications with real-time state sync, AST tooling, and measurable web speed.",
    features: [
      "Lighthouse 68 → 94 (Pixalytix Intern)",
      "<20ms Socket.io Sync (InLine)",
      "AST Dependency Graphs (CodeGraph)",
      "Next.js 15 App Router & Tailwind",
    ],
    tier: "Core Focus",
  },
  {
    title: "Backend & Automation",
    description:
      "High-throughput FastAPI and Node.js services, indexed PostgreSQL queries, and resilient 24/7 worker pipelines.",
    features: [
      "32% Lower SQL Latency (GDSC NITP)",
      "Redis Sessions & Input Validation",
      "Auto Site Builder + Vercel API (Arclane)",
      "Docker, Pytest & Git CI/CD Hygiene",
    ],
    tier: "Track 03",
  },
];

export function ServicesSection() {
  const { open: openDrawer } = useDrawerStore();

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-primary mb-4 tracking-widest uppercase">
            Engineering Competencies
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground">
            Proven across 1,614+ commits &amp; live systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((item) => (
            <div
              key={item.title}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                item.tier === "Core Focus"
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border"
              } hover:border-primary/50 transition-colors duration-200 group`}
            >
              {item.tier === "Core Focus" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-heading uppercase tracking-widest rounded-full">
                  Primary Stack
                </div>
              )}

              <div className="mb-6">
                <span className="font-heading text-xs uppercase tracking-widest text-primary/60">
                  {item.tier}
                </span>
                <h3 className="font-heading text-3xl text-foreground mt-2">
                  {item.title}
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed font-light">
                {item.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/80 font-body font-light"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openDrawer()}
                className={`w-full py-4 rounded-2xl font-heading text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  item.tier === "Core Focus"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                Schedule Interview
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
