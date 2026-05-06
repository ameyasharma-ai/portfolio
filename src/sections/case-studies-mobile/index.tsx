import { AdvertisingMobile } from './advertising';
import { DesignMobile } from './design';
import { CodeGraphMobile } from './codegraph';

export function CaseStudiesMobile() {
  return (
    <section 
      id="case-studies-mobile" 
      className="w-full px-6 mt-32"
    >
      <div className="w-full max-w-lg mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
            Selected Work
          </p>
          <h2 className="font-heading text-6xl leading-[0.85] text-foreground uppercase tracking-tighter">
            Building <br /> <span className="text-primary">Systems</span> <br /> that scale
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