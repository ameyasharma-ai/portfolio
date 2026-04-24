import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { useDrawerStore } from "@/stores/drawerStore";

export function HomeInfoGrid({ children }: { children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const { open: openDrawer } = useDrawerStore();

  const originalEmail = "sharmaameya999@gmail.com";
  const emailDisplay =
    "sharmaameya999" + String.fromCharCode(8203) + "@" + "gmail.com";

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
    openDrawer();
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 gap-x-4 items-end relative pointer-events-none">
      
      {/* LEFT */}
      <div className="flex flex-col gap-3 items-start pointer-events-auto order-1">
        <ArrowButton onClick={handleConnectClick}>
          let's connect
        </ArrowButton>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="transition p-1 hover:bg-accent rounded cursor-pointer shrink-0"
            aria-label="Copy email address"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-[#b3b3b3] hover:text-foreground" />
            )}
          </button>

          <span className="font-body font-light text-sm md:text-base text-[#b3b3b3] break-all">
            {emailDisplay}
          </span>
        </div>
      </div>

      {/* CENTER - Availability Status */}
      {children && (
        <div className="pointer-events-auto flex justify-start lg:justify-center order-3 lg:order-2 md:col-span-2 lg:col-span-1 pt-2 lg:pt-0">
          {children}
        </div>
      )}

      {/* RIGHT */}
      <div className="hidden md:flex flex-col items-end max-w-sm ml-auto text-right pointer-events-auto order-2 lg:order-3">
        <p className="font-body font-light text-base md:text-lg text-[#b3b3b3] leading-relaxed">
          I build fast, scalable web apps <br />
          and integrate AI into real products
        </p>
      </div>

    </div>
  );
}