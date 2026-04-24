import { useState, useEffect } from 'react';
import { SimpleTextCard } from './simple-text-card';
import { AchievementCard } from './achievement-card';
import { TrustIndicator } from './trust-indicator';
import { QuoteCard } from './quote-card';
import { ExperienceSection } from './experience-section';
import { ProfileSection } from './profile-section';
import { FeatureCard } from './feature-card';
import { AvailabilityCard } from './availability-card';

// Icons
import zapIcon from '../../assets/zapIcon.svg';
import rocketIcon from '../../assets/rocketIcon.svg';

export function AboutMe() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1381);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isLargeScreen) {
    return (
      <section id="about-me" className="py-20 px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-4">

            {/* STRONGER TOP LEFT */}
            <SimpleTextCard text="AUTOMATE WITH AI" />

            {/* ACHIEVEMENTS (sharper positioning) */}
            <AchievementCard
              title={<>TOP 2%<br />AI FORGE<br />COHORT 5</>}
              description="Selected from 500+ applicants"
              className="row-span-2"
            />

            <AchievementCard
              title={<>PATENT<br />WINNER<br />2023</>}
              description="IP Hatch Global Winner"
              className="row-span-2"
            />

            <AchievementCard
              title={<>TOP 7%<br />SKY LABS<br />FINALIST</>}
              description="Out of 250+ teams"
              className="row-span-2"
            />

            {/* QUOTE (already upgraded earlier) */}
            <QuoteCard />

            {/* TRUST */}
            <TrustIndicator />

            {/* EXPERIENCE */}
            <ExperienceSection />

            {/* PROFILE (centerpiece) */}
            <ProfileSection />

            {/* FEATURE CARDS (cleaner, sharper) */}
            <FeatureCard
              icon={zapIcon}
              text={<>SCALABLE<br />SYSTEMS</>}
              altText="Scalable systems"
              variant="text-left-icon-right"
            />

            <FeatureCard
              icon={rocketIcon}
              text={<>IDEA →<br />PRODUCTION</>}
              altText="Idea to production"
              variant="text-right-icon-left"
            />

            {/* AVAILABILITY */}
            <AvailabilityCard />

            {/* BOTTOM RIGHT */}
            <SimpleTextCard text="PRODUCTION-READY ARCHITECTURE" />

          </div>
        </div>
      </section>
    );
  }

  // 🔽 MOBILE / TABLET VERSION
  return (
    <section id="about-me" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">

          {/* ACHIEVEMENTS */}
          <div className="grid grid-cols-3 gap-4">
            <AchievementCard
              title={<>TOP 2%<br />AI FORGE</>}
              description="500+ applicants"
            />
            <AchievementCard
              title={<>PATENT<br />WINNER</>}
              description="IP Hatch 2023"
            />
            <AchievementCard
              title={<>TOP 7%<br />SKY LABS</>}
              description="250+ teams"
            />
          </div>

          {/* PROFILE */}
          <div className="w-full">
            <ProfileSection />
          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 [@media(min-width:1175px)]:grid-cols-3 gap-4">
              <FeatureCard
                icon={rocketIcon}
                text={<>IDEA →<br />PRODUCTION</>}
                altText="Idea to production"
                variant="text-right-icon-left"
              />
              <FeatureCard
                icon={zapIcon}
                text={<>SCALABLE<br />SYSTEMS</>}
                altText="Scalable systems"
                variant="text-left-icon-right"
              />

              <div className="hidden [@media(min-width:1175px)]:block">
                <SimpleTextCard text="PRODUCTION-READY ARCHITECTURE" />
              </div>
            </div>

            <div className="[@media(min-width:1175px)]:hidden">
              <SimpleTextCard text="PRODUCTION-READY ARCHITECTURE" />
            </div>
          </div>

          {/* QUOTE + TRUST */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="col-start-1 row-start-1">
              <SimpleTextCard text="AUTOMATE WITH AI" />
            </div>

            <div className="col-start-1 row-start-2">
              <TrustIndicator />
            </div>

            <div className="col-start-2 col-span-2 row-start-1 row-span-2">
              <QuoteCard />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="w-full">
            <ExperienceSection />
          </div>

        </div>
      </div>
    </section>
  );
}