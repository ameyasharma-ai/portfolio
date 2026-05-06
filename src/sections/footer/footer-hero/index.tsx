import { motion } from "framer-motion";
import { ContactMethods } from '../contact-methods';

export function FooterHero() {
  return (
    <div className="flex flex-col">
      <h2 className="font-heading text-6xl md:text-8xl text-foreground mb-8 text-center lg:text-left uppercase tracking-tighter leading-[0.85]">
        Let's build <br /> <span className="text-primary">your next big idea.</span>
      </h2>
      <p className="font-body text-xl md:text-2xl font-light text-muted-foreground leading-relaxed text-center lg:text-left max-w-2xl mb-12">
        I design and build high-performance products that drive business growth. 
        Ready to turn your vision into a production-grade reality?
      </p>
      
      <div className="w-full">
        <motion.a 
          href="https://calendly.com/ameyasharma" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="group relative block p-[1px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/30 via-border to-primary/30 shadow-2xl transition-all duration-500"
        >
          <div className="relative px-8 py-10 md:px-12 md:py-12 bg-card rounded-[2.5rem] flex flex-row items-center gap-8 md:gap-12 group-hover:bg-primary/5 transition-all duration-500">
            {/* Icon Container */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-left flex-1 flex flex-col justify-center overflow-hidden">
              <h4 className="font-heading text-2xl md:text-4xl text-foreground mb-3 uppercase tracking-tighter leading-tight">
                Book a Strategy Call
              </h4>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <p className="font-body text-[10px] md:text-xs text-primary uppercase tracking-[0.3em] font-bold">
                  15 MIN • VIDEO CALL
                </p>
              </div>
            </div>

            {/* Arrow Decoration */}
            <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-full border border-primary/20 items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:translate-x-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </motion.a>

      </div>
    </div>
  );
}