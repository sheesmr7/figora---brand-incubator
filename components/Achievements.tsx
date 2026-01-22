import React, { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: 'Clients', value: '30+' },
  { label: 'Countries', value: '3+' },
  { label: 'ROAS', value: '175' },
];

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounts(stats.map(() => 0));
          animateCounts();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    stats.forEach((stat, index) => {
      const targetValue = parseInt(stat.value.replace('+', ''), 10);
      const duration = 1200;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * targetValue);

        setCounts(prev => {
          const next = [...prev];
          next[index] = current;
          return next;
        });

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    });
  };

  return (
    <section className="relative pt-16 pb-20 bg-transparent">
      <div className="container mx-auto px-6" ref={containerRef}>

        {/* HEADING — NO TRANSFORM */}
        <FadeIn direction="none">
          <h2 className="text-center text-5xl md:text-6xl font-poppins tracking-tight text-white mb-20">
            Achievement,
            <span className="text-purple-500"> Documented.</span>
          </h2>
        </FadeIn>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.12}>
              <div
                className="
                  group relative rounded-2xl
                  bg-gradient-to-br from-purple-900/40 to-purple-950/60
                  border border-purple-500/20
                  backdrop-blur-md
                  p-12 text-center
                  transition-all duration-300 ease-out
                  hover:border-purple-500/40
                  hover:scale-[1.03]
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
                "
              >
                <div className="text-6xl md:text-7xl font-extrabold mb-4 text-purple-400 group-hover:text-purple-300">
                  {counts[idx]}
                  {stat.value.includes('+') && '+'}
                </div>

                <div className="text-gray-300 text-lg font-medium group-hover:text-gray-100">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* DESCRIPTION */}
        <FadeIn delay={0.4}>
          <p className="text-center text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            We build brands that click—delivering ROI-driven digital transformation
            by mastering the convergence of{' '}
            <span className="text-purple-400 font-medium">Design Systems</span>,{' '}
            <span className="text-purple-400 font-medium">Emerging Technology</span>, and{' '}
            <span className="text-purple-400 font-medium">Growth Marketing</span>.
          </p>
        </FadeIn>

      </div>
    </section>
  );
};

export default Achievements;
