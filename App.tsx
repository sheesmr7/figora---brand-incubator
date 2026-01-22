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
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHero(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05010d] overflow-x-hidden">
      <Navbar />

      {/* FIXED HERO — ONLY INITIALLY */}
      {showHero && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Hero />
        </div>
      )}

      <main className="relative z-10">
        {/* Spacer = hero height */}
        <div ref={sentinelRef} className="h-screen" />

        <AboutAndAchievements />
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
