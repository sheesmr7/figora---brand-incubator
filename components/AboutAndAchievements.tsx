// AboutAndAchievements.tsx
import AboutSection from './AboutSection';
import Achievements from './Achievements';

const AboutAndAchievements = () => {
  return (
    <section
      className="relative overflow-hidden py-1"
      style={{
        background: `
          radial-gradient(
            900px 900px at 85% 12%,
            rgba(147, 51, 234, 0.65),
            rgba(0, 0, 0, 0) 60%
          ),
          linear-gradient(
            135deg,
            #000000 0%,
            #05010d 30%,
            #1a0630 60%,
            #000000 100%
          )
        `,
      }}
    >
      <AboutSection />
      <Achievements />
    </section>
  );
};

export default AboutAndAchievements;
