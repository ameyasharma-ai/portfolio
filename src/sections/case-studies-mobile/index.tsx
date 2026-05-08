import { AdvertisingMobile } from './advertising';
import { DesignMobile } from './design';
import { CodeGraphMobile } from './codegraph';
import { motion } from 'framer-motion';

export function CaseStudiesMobile() {
  return (
    <section 
      id="case-studies-mobile" 
      className="w-full px-6 mt-32"
    >
      <div className="w-full max-w-lg mx-auto">
        {/* Section Title */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary">
              Selected Work
            </p>
          </motion.div>
          <h2 className="font-heading text-[16vw] leading-[0.8] text-foreground uppercase tracking-tighter">
            Building <br /> <span className="text-primary italic">Systems</span> <br /> that scale
          </h2>
        </div>
        
        <div className="space-y-24">
          {/* Design Case Study */}
          <DesignMobile />
          
          {/* Advertising Case Study */}
          <AdvertisingMobile />

          {/* CodeGraph Case Study */}
          <CodeGraphMobile />
        </div>
      </div>
    </section>
  );
}