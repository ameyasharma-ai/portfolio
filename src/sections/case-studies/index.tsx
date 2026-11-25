import { motion } from "framer-motion";
import { ProjectGrid } from './project-grid';

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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-body text-lg font-light text-primary mb-4 tracking-widest">
            SELECTED PROJECTS
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground">
            Building Systems that Scale
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProjectGrid />
        </motion.div>
      </div>
    </section>
  );
}