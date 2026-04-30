import { CodeGraphVideo } from "../../case-studies/content/codegraph-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { codegraphData } from "../../case-studies/content/codegraph-data";

export function CodeGraphMobile() {
  return (
    <div className="w-full space-y-6">
      {/* Title and Description */}
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          CodeGraph
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          AI-Powered Codebase Visualizer
        </p>
      </div>
      
      {/* Video Container without bento-square class - 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <CodeGraphVideo />
      </div>
      
      {/* Bottom Bar with tech stack */}
      <div className="bg-card border border-border rounded-2xl p-4">
        <BottomBar techStack={codegraphData.techStack} />
      </div>
      
      {/* Right Bar with buttons */}
      <div className="w-full">
        <RightBar projectData={codegraphData.projectData} />
      </div>
    </div>
  );
}
