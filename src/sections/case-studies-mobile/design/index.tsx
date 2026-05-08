import { DesignPlatformVideo } from "../../case-studies/content/design-platform-video";
import { useNavigate } from "react-router";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

export function DesignMobile() {
  const navigate = useNavigate();

  return (
    <div className="w-full group">
      {/* 1. Heading */}
      <div className="mb-6">
        <h3 className="font-heading text-3xl text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors">
          Groot
        </h3>
        <p className="font-heading text-[10px] text-primary uppercase tracking-[0.2em] mt-1">
          Immersive AI Platform
        </p>
      </div>

      {/* 2. Video */}
      <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-border shadow-xl mb-8 bg-black">
        <DesignPlatformVideo />
      </div>

      {/* 3. Details/Buttons */}
      <div className="space-y-6">
        <p className="font-body text-sm text-muted-foreground leading-relaxed font-light line-clamp-3">
          An advanced conversational AI platform featuring real-time voice interactions and 3D visualizers.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              const scrollY = globalLenis ? globalLenis.scroll : window.scrollY;
              sessionStorage.setItem('homeScrollY', scrollY.toString());
              navigate('/case-studies/design-platform');
            }}
            className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-heading text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10"
          >
            Full Case Study
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => window.open("https://groot-frontend-orpin.vercel.app", "_blank")}
              className="py-3 bg-card border border-border rounded-xl font-heading text-[9px] uppercase tracking-widest text-foreground"
            >
              Live Demo
            </button>
            <button
              onClick={() => window.open("https://github.com/ameyasharma-ai/groot-frontend", "_blank")}
              className="py-3 bg-card border border-border rounded-xl font-heading text-[9px] uppercase tracking-widest text-foreground"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}