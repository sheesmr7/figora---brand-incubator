import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndAchievements from './components/AboutAndAchievements';
import SolutionsAndPartners from './components/SolutionsAndPartners';
import Portfolio from './components/Portfolio';
import WhyFigora from './components/WhyFigora';
import DraftSection from './components/DraftSection';
import Thinking from './components/Thinking';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [heroReleased, setHeroReleased] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();

      // when About + Achievements section scrolls out of view (top leaves viewport)
      setHeroReleased(rect.top <= 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <Hero released={heroReleased} />

      <main className="relative z-10">
        <AboutAndAchievements ref={aboutRef} />
        <SolutionsAndPartners />
        <Portfolio />
        <WhyFigora />
        <DraftSection />
        <Thinking />
      </main>

      <Footer />
    </div>
  );
};

export default App;
