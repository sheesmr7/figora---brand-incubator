import AboutSection from './AboutSection';
import Achievements from './Achievements';

const AboutAndAchievements = () => {
  return (
    <section className="relative z-10 mt-[-1px]">
      
      {/* CURVED TOP EDGE */}
      <div className="absolute top-0 left-0 w-full h-24 bg-transparent z-20">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#05010d] rounded-t-[80px]" />
      </div>

      {/* DARK GRADIENT SURFACE */}
      <div
        className="relative pt-24"
        style={{
          background: `
            radial-gradient(
              900px 900px at 85% 12%,
              rgba(147, 51, 234, 0.55),
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
      </div>
    </section>
  );
};

export default AboutAndAchievements;
