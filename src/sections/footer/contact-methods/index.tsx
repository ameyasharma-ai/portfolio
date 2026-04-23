import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { GithubIcon } from '@/components/icons/socials/github-icon';
import { LinkedinIcon } from '@/components/icons/socials/linkedin-icon';
import emailIcon from '../../../assets/email-icon.svg';

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
    <div className="flex flex-col gap-4 mt-8">
      {/* Email Row */}
      <div className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5">
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <img src={emailIcon} alt="Email" className="w-6 h-6" />
        </div>
        <span className="font-body text-foreground flex-1">
          {email}
        </span>
        <button
          onClick={handleCopyEmail}
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent cursor-pointer transition-colors"
          aria-label="Copy email address"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>

      {/* LinkedIn Row */}
      <div className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5">
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <LinkedinIcon className="w-6 h-6 text-background" />
        </div>
        <span className="font-body text-foreground flex-1 text-left">
          ameyasharma999
        </span>
        <button
          onClick={handleLinkedInClick}
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent cursor-pointer transition-colors"
          aria-label="Open LinkedIn profile"
        >
          <ExternalLink className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* GitHub Row */}
      <div className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5">
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <GithubIcon className="w-6 h-6 text-background" />
        </div>
        <span className="font-body text-foreground flex-1 text-left">
          @ameyasharma-ai
        </span>
        <button
          onClick={handleGithubClick}
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent cursor-pointer transition-colors"
          aria-label="Open GitHub profile"
        >
          <ExternalLink className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}