import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { useDrawerStore } from "@/stores/drawerStore";

export function HomeInfoGrid() {
  const [copied, setCopied] = useState(false);
  const { open: openDrawer } = useDrawerStore();

  // Original email for copy functionality
  const originalEmail = "sharmaameya999@gmail.com";

  // Email with invisible characters to prevent mobile auto-detection
  const emailDisplay = "sharmaameya999" + String.fromCharCode(8203) + "@" + "gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(originalEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleConnectClick = () => {
    console.log('🎯 Opening contact drawer from home section');
    openDrawer();
  };

  return (
    <div className="grid grid-cols-2 gap-8 px-16 items-center">
      {/* Description - Right column */}
      <div className="flex items-center justify-end order-2">
        <p className="font-body font-light text-[18px] text-[#b3b3b3] leading-relaxed text-left">
          I build fast, scalable web apps<br /> and integrate AI into real products
        </p>
      </div>

      {/* Contact Info - Left column */}
      <div className="flex flex-col gap-3 justify-center items-start order-1">
        <div className="flex flex-col gap-3 w-fit">
          <ArrowButton onClick={handleConnectClick}>let's connect</ArrowButton>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="transition-opacity p-1 hover:bg-accent rounded z-10 cursor-pointer"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-[#b3b3b3] hover:text-foreground" />
              )}
            </button>
            <span className="font-body font-light text-base text-[#b3b3b3]">
              {emailDisplay}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}