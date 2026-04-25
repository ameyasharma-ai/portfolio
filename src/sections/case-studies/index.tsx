import { motion } from "framer-motion";
import { TransitionLayout } from './transition-layout';

export function CaseStudies() {
  return (
    <section 
      id="case-studies" 
      className="py-20 px-6 md:px-12 lg:px-16 relative"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title - Now gets pinned with the rest */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-body text-lg font-light text-primary mb-4">
            CASE STUDIES
          </h2>
          <p className="font-heading text-5xl text-foreground">
            Curated Work
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TransitionLayout />
        </motion.div>
      </div>
    </section>
  );
}