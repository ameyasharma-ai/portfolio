import { useState } from "react";
import { Copy, Check, Info } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { useDrawerStore } from "@/stores/drawerStore";
import { motion } from "framer-motion";

export function HomeInfoGrid({ children }: { children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const { open: openDrawer } = useDrawerStore();

  const emailDisplay = "sharmaameya999@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailDisplay);
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl mx-auto pointer-events-auto mt-12 mb-4"
    >
      <div className="relative group">
        {/* Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Main Dock Container */}
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0 p-2 md:p-3 rounded-[2rem] md:rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          {/* Section 1: Connect & Email */}
          <div className="flex-1 flex items-center gap-4 px-6 py-2 md:py-0 w-full md:w-auto">
            <ArrowButton onClick={handleConnectClick} className="scale-90 md:scale-100">
              let's connect
            </ArrowButton>
            
            <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
            
            <div className="flex items-center gap-2 group/email">
              <button
                onClick={handleCopy}
                className="transition p-2 hover:bg-primary/10 rounded-full cursor-pointer shrink-0"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover/email:text-foreground transition-colors" />
                )}
              </button>
              <span className="font-body font-light text-xs md:text-sm text-muted-foreground group-hover/email:text-foreground transition-colors truncate max-w-[140px] md:max-w-none">
                {emailDisplay}
              </span>
            </div>
          </div>

          {/* Section 2: Availability (Center) */}
          <div className="flex-1 flex items-center justify-center px-8 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 w-full md:w-auto">
             {children}
          </div>

          {/* Section 3: Mission/Info */}
          <div className="flex-1 flex items-center gap-4 px-6 py-2 md:py-0 w-full md:w-auto">
             <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-primary/5 border border-primary/10 shrink-0">
                <Info className="w-4 h-4 text-primary" />
             </div>
             <p className="font-body font-light text-[11px] md:text-xs xl:text-sm text-muted-foreground leading-snug">
                Building fast, scalable <br className="hidden md:block" />
                AI-integrated products.
             </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}