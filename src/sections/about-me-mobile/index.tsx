
import { ProfileSection } from '../about-me/profile-section';
import { QuoteCard } from '../about-me/quote-card';

export function AboutMeMobile() {
  return (
    <section 
      id="about-me-mobile" 
      className="w-full px-6 mt-32 mb-20"
    >
      <div className="w-full max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
            The Person
          </p>
          <h2 className="font-heading text-5xl leading-[0.85] text-foreground uppercase tracking-tighter break-words">
            Visionary <br /> <span className="text-primary">Engineering</span>
          </h2>
        </div>

        {/* Profile Card */}
        <div className="p-8 bg-card border border-border rounded-[2.5rem] mb-6">
          <ProfileSection />
        </div>

        {/* Awards Bento */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="p-8 bg-card border border-border rounded-[2.5rem]">
            <p className="font-heading text-[10px] uppercase tracking-widest text-primary mb-2">Recognition</p>
            <div className="space-y-6 mt-6">
              <div>
                <h4 className="font-heading text-lg text-foreground uppercase">Patent Winner</h4>
                <p className="font-body text-xs text-muted-foreground">IP Hatch Global Winner 2023</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <h4 className="font-heading text-lg text-foreground uppercase">Top 2% AI Forge</h4>
                <p className="font-body text-xs text-muted-foreground">Selected from 500+ applicants</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <h4 className="font-heading text-lg text-foreground uppercase">Top 7% Sky Labs</h4>
                <p className="font-body text-xs text-muted-foreground">Finalist out of 250+ teams</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="p-8 bg-primary text-primary-foreground rounded-[2.5rem] relative overflow-hidden">
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}