import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { open: openDrawer } = useDrawerStore();

  const originalEmail = "sharmaameya999@gmail.com";
  const emailDisplay = "sharmaameya999@gmail.com";

  // Copy handler (prevents drawer opening)
  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation(); // 🔥 IMPORTANT

    try {
      await navigator.clipboard.writeText(originalEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Failed to copy
    }
  };

  // Whole section click → open drawer
  const handleOpenDrawer = () => {
    openDrawer();
  };

  return (
    <div
      onClick={handleOpenDrawer}
      className="w-full h-full flex flex-col items-center justify-center text-center gap-4 cursor-pointer"
    >
      <h3 className="font-heading text-lg [@media(min-width:414px)]:text-2xl mb-3 text-[#f2f2f2]">
        LET'S BUILD SOMETHING REAL
      </h3>

      <div className="text-[#f2f2f2] text-xl font-light">
        EMAIL
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="transition-all p-1 hover:bg-accent rounded z-10 cursor-pointer"
          aria-label="Copy email address"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-[#b3b3b3] hover:text-foreground" />
          )}
        </button>

        <span className="font-body font-light text-base text-[#b3b3b3] break-all">
          {emailDisplay}
        </span>
      </div>
    </div>
  );
}