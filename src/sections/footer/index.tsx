import { ContactForm } from './contact-form';
import { FooterHero } from './footer-hero';
import { FooterBottom } from './footer-bottom';

export function Footer() {
  return (
    <section 
      id="footer" 
      className="py-6 md:py-8 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-3 md:mb-4">
          
          {/* Left Column - Hero Content & Links */}
          <div className="lg:col-span-7">
            <FooterHero />
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-5 bg-card/30 border border-border/50 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </section>
  );
}