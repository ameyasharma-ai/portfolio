import { Check } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";

const services = [
  {
    title: "Landing Pages",
    description: "High-converting, performance-optimized landing pages for startups and personal brands.",
    features: ["Custom Design", "SEO Optimized", "Fast Load Times", "Responsive Layout"],
    tier: "Starter"
  },
  {
    title: "SaaS & Web Apps",
    description: "Full-stack scalable applications built with Next.js, AI integration, and robust backends.",
    features: ["AI Integration", "Authentication", "Database Design", "API Development"],
    tier: "Business"
  },
  {
    title: "Custom Solutions",
    description: "Complex enterprise systems, automation pipelines, and specialized AI architectures.",
    features: ["Infrastructure", "Scalability Audit", "Legacy Migration", "Priority Support"],
    tier: "Custom"
  }
];

export function ServicesSection() {
  const { open: openDrawer } = useDrawerStore();

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-primary mb-4 tracking-widest uppercase">
            Services & Offerings
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground">
            I help you build, launch, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                service.tier === 'Business' 
                ? 'bg-primary/5 border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.1)]' 
                : 'bg-card border-border'
              } hover:border-primary/40 transition-all duration-500 group`}
            >
              {service.tier === 'Business' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-heading uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <span className="font-heading text-xs uppercase tracking-widest text-primary/60">
                  {service.tier}
                </span>
                <h3 className="font-heading text-3xl text-foreground mt-2">
                  {service.title}
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed font-light">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80 font-body font-light">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openDrawer()}
                className={`w-full py-4 rounded-2xl font-heading text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  service.tier === 'Business'
                  ? 'bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10'
                  : 'bg-primary/5 border border-primary/10 hover:bg-primary/10 text-foreground'
                }`}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
