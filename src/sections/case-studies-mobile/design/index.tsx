import { DesignPlatformVideo } from "../../case-studies/content/design-platform-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { designPlatformData } from "../../case-studies/content/design-platform-data";

export function DesignMobile() {
  return (
    <div className="w-full space-y-6">
      {/* Title and Description */}
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          AI Design Platform
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          AI-powered design solution for T-shirt brands
        </p>
      </div>
      
      {/* Video Container without bento-square class - 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <DesignPlatformVideo />
      </div>
      
      {/* Bottom Bar with tech stack */}
      <div className="bg-card border border-border rounded-2xl p-4">
        <BottomBar techStack={designPlatformData.techStack} />
      </div>
      
      {/* Right Bar with buttons */}
      <div className="w-full">
        <RightBar projectData={designPlatformData.projectData} />
      </div>
    </div>
  );
}