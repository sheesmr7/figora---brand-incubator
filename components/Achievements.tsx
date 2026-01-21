import React from 'react';
import FadeIn from './FadeIn';

const Achievements: React.FC = () => {
  const stats = [
    { label: 'Clients', value: '30+' },
    { label: 'Countries', value: '3+' },
    { label: 'ROAS', value: '175' }
  ];

  return (
    <section className="relative py-32 bg-transparent">
      <div className="container mx-auto px-6">

        <FadeIn>
          <h2 className="text-center text-5xl md:text-6xl font-poppins tracking-tight text-white mb-20">
            Achievement,
            <span className="text-purple-500"> Documented.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.12}>
              <div className="
                group relative rounded-2xl
                bg-gradient-to-br from-purple-900/40 to-purple-950/60
                border border-purple-500/20
                backdrop-blur-md
                p-12 text-center
                transition-all duration-300 ease-out
                hover:border-purple-500/40
                hover:scale-[1.03]
                hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
              ">
                <div className="text-6xl md:text-7xl font-extrabold mb-4 text-purple-400 group-hover:text-purple-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg font-medium group-hover:text-gray-100">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            We build brands that click—delivering ROI-driven digital transformation
            by mastering the convergence of <span className="text-purple-400">Design Systems</span>,
            <span className="text-purple-400"> Emerging Technology</span>, and
            <span className="text-purple-400"> Growth Marketing</span>.
          </p>
        </FadeIn>

      </div>
    </section>
  );
};

export default Achievements;
