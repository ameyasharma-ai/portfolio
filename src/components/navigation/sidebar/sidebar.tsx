import { 
  Menu,
  X
} from "lucide-react";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";
import { useState } from "react";
import { MobileNav } from "./mobile-nav";
import DevLogo from "@/assets/dev-logo.svg";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = () => {
    setIsOpen(false); // Close the sidebar when any navigation item is clicked
  };

  return (
    <>
      {/* Mobile Logo - Left side */}
      <div className="fixed top-7 left-6 z-50 md:hidden">
        <img 
          src={DevLogo} 
          alt="Ameya Sharma Logo" 
          className="w-12 h-12" 
        />
      </div>

      {/* Mobile Hamburger Menu - Right side */}
      <div className="fixed top-7 right-6 z-50 md:hidden">
        <MorphingPopover open={isOpen} onOpenChange={setIsOpen}>
          {/* Trigger - Hamburger Menu */}
          <MorphingPopoverTrigger 
            className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 active:scale-95 rounded-full border border-border hover:border-ring"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </MorphingPopoverTrigger>
          
          {/* Content - Sidebar */}
          <MorphingPopoverContent 
            className="fixed rounded-2xl shadow-xl flex flex-col"
            style={{
              top: '10px',
              left: '10px',
              right: '10px'
            }}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
              <h2 className="text-xs font-heading text-[#b3b3b3] mt-0.5 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#b3b3b3] rounded-full"></span>
                MENU
              </h2>
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-1.5 bg-card border border-border rounded-md hover:bg-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" style={{ color: '#b3b3b3' }} />
                <span className="text-sm font-body" style={{ color: '#b3b3b3' }}>
                  Close
                </span>
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav onNavigationClick={handleNavigationClick} />
          </MorphingPopoverContent>
        </MorphingPopover>
      </div>
    </>
  );
}