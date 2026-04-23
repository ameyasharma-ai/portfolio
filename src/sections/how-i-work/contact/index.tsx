import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  // Original email for copy functionality
  const originalEmail = "sharmaameya999@gmail.com";

  // Email with invisible characters to prevent mobile auto-detection
  const emailDisplay = "info" + String.fromCharCode(8203) + "@" + String.fromCharCode(8203) + "stavrossymeonidis.dev";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(originalEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4">
      <h3 className="font-heading text-lg [@media(min-width:414px)]:text-2xl mb-3 text-[#f2f2f2]">Let's work together</h3>

      <div className="text-[#f2f2f2] text-xl font-light">
        EMAIL
      </div>

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
        <span className="font-body font-light text-base whitespace-nowrap text-[#b3b3b3]">
          {emailDisplay}
        </span>
      </div>
    </div>
  );
}