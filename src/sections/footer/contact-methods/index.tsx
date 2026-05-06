import { useState } from "react";

export function ContactMethods() {
  const [copied, setCopied] = useState(false);

  const email = "sharmaameya999@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ameyasharma999/', '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/ameyasharma-ai', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col gap-3 w-full mt-8">
      {/* 3-Column Horizontal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Email Card */}
        <div className="group relative p-[1px] rounded-xl overflow-hidden bg-border/50 hover:bg-primary/30 transition-all duration-500">
          <div className="relative flex flex-col items-center gap-2 p-4 bg-card/50 rounded-xl backdrop-blur-sm group-hover:bg-primary/5 transition-all duration-500 h-full text-center">
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[8px] text-primary uppercase tracking-[0.3em] font-heading mb-1">Email</span>
              <button 
                onClick={handleCopyEmail}
                className="font-body text-[10px] text-foreground font-light truncate hover:text-primary transition-colors cursor-pointer"
              >
                {copied ? "Copied!" : "sharmaameya..."}
              </button>
            </div>
          </div>
        </div>

        {/* LinkedIn Card */}
        <button 
          onClick={handleLinkedInClick}
          className="group relative p-[1px] rounded-xl overflow-hidden bg-border/50 hover:bg-primary/30 transition-all duration-500 text-left cursor-pointer"
        >
          <div className="relative flex flex-col items-center gap-2 p-4 bg-card/50 rounded-xl backdrop-blur-sm group-hover:bg-primary/5 transition-all duration-500 h-full text-center">
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[8px] text-primary uppercase tracking-[0.3em] font-heading mb-1">LinkedIn</span>
              <span className="font-body text-[10px] text-foreground font-light truncate">/in/ameya...</span>
            </div>
          </div>
        </button>

        {/* GitHub Card */}
        <button 
          onClick={handleGithubClick}
          className="group relative p-[1px] rounded-xl overflow-hidden bg-border/50 hover:bg-primary/30 transition-all duration-500 text-left cursor-pointer"
        >
          <div className="relative flex flex-col items-center gap-2 p-4 bg-card/50 rounded-xl backdrop-blur-sm group-hover:bg-primary/5 transition-all duration-500 h-full text-center">
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[8px] text-primary uppercase tracking-[0.3em] font-heading mb-1">GitHub</span>
              <span className="font-body text-[10px] text-foreground font-light truncate">@ameyasharma</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}