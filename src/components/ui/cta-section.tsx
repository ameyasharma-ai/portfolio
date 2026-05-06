import { useDrawerStore } from "@/stores/drawerStore";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

export function CTASection({ 
  title = "Ready to build something exceptional?",
  subtitle = "I'm currently accepting new projects. Let's discuss your vision and see how we can drive results together.",
  buttonText = "Start a Project",
  className = ""
}: CTASectionProps) {
  const { open: openDrawer } = useDrawerStore();

  return (
    <section className={`py-24 px-6 md:px-12 lg:px-16 ${className}`}>
      <div
        className="w-full max-w-5xl mx-auto bg-card border border-border rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-black/20"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6 leading-tight uppercase tracking-tighter">
            {title}
          </h2>
          <p className="font-body text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {subtitle}
          </p>
          <button
            onClick={() => openDrawer()}
            className="px-10 py-5 bg-white text-black rounded-2xl font-heading text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
