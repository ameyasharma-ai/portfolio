import { AdvertisingPlatformVideo } from "../../case-studies/content/advertising-platform-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { advertisingPlatformData } from "../../case-studies/content/advertising-platform-data";
import { useNavigate } from "react-router";
import { globalLenis } from "@/components/providers/smooth-scroll-provider";

export function AdvertisingMobile() {
  const navigate = useNavigate();

  return (
    <div className="w-full group">
      {/* 1. Heading */}
      <div className="mb-6">
        <h3 className="font-heading text-3xl text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors">
          InLine
        </h3>
        <p className="font-heading text-[10px] text-primary uppercase tracking-[0.2em] mt-1">
          Collaborative Workspace
        </p>
      </div>

      {/* 2. Video */}
      <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-border shadow-xl mb-8 bg-black">
        <AdvertisingPlatformVideo />
      </div>

      {/* 3. Details/Buttons */}
      <div className="space-y-6">
        <p className="font-body text-sm text-muted-foreground leading-relaxed font-light line-clamp-3">
          State-of-the-art collaborative coding environment with live terminal sandboxes and whiteboards.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              const scrollY = globalLenis ? globalLenis.scroll : window.scrollY;
              sessionStorage.setItem('homeScrollY', scrollY.toString());
              navigate('/case-studies/advertising');
            }}
            className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-heading text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10"
          >
            Full Case Study
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => window.open("https://inline-v1.vercel.app", "_blank")}
              className="py-3 bg-card border border-border rounded-xl font-heading text-[9px] uppercase tracking-widest text-foreground"
            >
              Live Demo
            </button>
            <button
              onClick={() => window.open("https://github.com/ameyasharma-ai/inline-v1", "_blank")}
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