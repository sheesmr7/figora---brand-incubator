import { forwardRef } from 'react';
import AboutSection from './AboutSection';
import Achievements from './Achievements';

const AboutAndAchievements = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="relative z-10 mt-[100vh]">
      {/* DARK SECTION */}
      <div className="relative bg-about-gradient rounded-t-[48px]">
        <AboutSection />
        <Achievements /> 
      </div>
      {/* FADE OUT INTO NEXT SECTION */}
      <div className="pointer-events-none h-32 -mt-32 bg-gradient-to-b from-[#05010d] to-transparent" />
    </section>
  );
});

export default AboutAndAchievements;
