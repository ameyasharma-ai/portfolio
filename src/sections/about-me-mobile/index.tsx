
import { ProfileSection } from '../about-me/profile-section';
import { QuoteCard } from '../about-me/quote-card';

export function AboutMeMobile() {
  return (
    <section 
      id="about-me-mobile" 
      className="w-full px-6 mt-32 mb-40"
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
        <div className="p-8 bg-zinc-950 border border-white/10 rounded-[2.5rem] mb-6">
          <ProfileSection />
        </div>



        {/* Quote */}
        <div className="p-8 bg-zinc-950 border border-white/10 rounded-[2.5rem] relative overflow-hidden">
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}