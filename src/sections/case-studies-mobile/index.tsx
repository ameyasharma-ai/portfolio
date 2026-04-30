import { AdvertisingMobile } from './advertising';
import { DesignMobile } from './design';
import { CodeGraphMobile } from './codegraph';

export function CaseStudiesMobile() {
  return (
    <section 
      id="case-studies-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            CASE STUDIES
          </h2>
          <p className="font-heading text-3xl text-foreground">
            Curated Work
          </p>
        </div>
        
        {/* Design Case Study */}
        <div className="mb-10">
          <DesignMobile />
        </div>
        
        {/* Advertising Case Study */}
        <div className="mb-10">
          <AdvertisingMobile />
        </div>

        {/* CodeGraph Case Study */}
        <div>
          <CodeGraphMobile />
        </div>
      </div>
    </section>
  );
}