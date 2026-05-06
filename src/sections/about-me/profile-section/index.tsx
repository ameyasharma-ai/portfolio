import { SocialLinks } from './social-links';

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center gap-12 [@media(min-width:685px)]:flex-row [@media(min-width:685px)]:items-center w-full">
      {/* Profile Image - left side on desktop */}
      <div className="w-64 h-64 flex-shrink-0 relative">
        <img
          src="/profile-dev.jpg"
          alt="Ameya Sharma"
          className="w-full h-full object-cover rounded-[2rem] border border-border"
        />
        <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-[10px] font-heading uppercase tracking-widest">
          Lead Dev
        </div>
      </div>

      {/* Text - bottom row on mobile, right side on desktop */}
      <div className="flex flex-col text-center [@media(min-width:685px)]:text-left flex-1">
        <h3 className="font-heading text-4xl text-foreground mb-1">
          Ameya Sharma
        </h3>
        <p className="font-body text-xs font-light text-primary mb-6 uppercase tracking-[0.4em]">
          AI SYSTEMS ENGINEER
        </p>

        <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 font-light max-w-sm italic">
          "I build systems that drive revenue and unlock scale. Every solution starts with one question: 'What business outcome does this create?'"
        </p>

        <div className="flex justify-center [@media(min-width:685px)]:justify-start">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}