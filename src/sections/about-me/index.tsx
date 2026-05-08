
import { AchievementCard } from './achievement-card';
import { QuoteCard } from './quote-card';
import { ProfileSection } from './profile-section';
import { AvailabilityCard } from './availability-card';

export function AboutMe() {
  return (
    <section id="about-me" className="pt-20 pb-40 px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Profile & Bio - 8 columns on large, full on mobile */}
          <div 
            className="lg:col-span-7 bento-square min-h-[500px] flex items-center bg-card border border-border rounded-[3rem] p-10"
          >
            <ProfileSection />
          </div>

          {/* Trust Pillars - 5 columns on large */}
          <div 
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex-1 bg-primary/5 border border-primary/20 rounded-[3rem] p-8 flex flex-col justify-center">
              <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-6">
                Why Hire Me?
              </h3>
              <ul className="space-y-6">
                {[
                  { t: "Business Outcomes", d: "I bridge the gap between complex AI and actual revenue growth." },
                  { t: "Rapid Execution", d: "From idea to production-grade product in weeks, not months." },
                  { t: "Premium Quality", d: "Clean, scalable architecture designed for long-term growth." }
                ].map((item, i) => (
                  <li key={i} className="space-y-1">
                    <p className="font-heading text-lg text-foreground uppercase tracking-tight">{item.t}</p>
                    <p className="font-body text-sm text-muted-foreground font-light">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <AchievementCard
              title={<>PATENT WINNER</>}
              description="IP Hatch Global Winner 2023 | AI Systems"
              className="h-32"
            />
          </div>

          {/* Bottom Row: Quote & Availability */}
          <div 
            className="lg:col-span-8 bento-square min-h-[300px]"
          >
            <QuoteCard />
          </div>

          <div 
            className="lg:col-span-4 bento-square"
          >
            <AvailabilityCard />
          </div>

        </div>
      </div>
    </section>
  );
}