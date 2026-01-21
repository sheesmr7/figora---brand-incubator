import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#05010d] selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Shared dark gradient */}
        <AboutAndAchievements />

        {/* Shared white–purple gradient */}
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
