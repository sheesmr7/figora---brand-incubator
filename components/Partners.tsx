import React from 'react';
import FadeIn from './FadeIn';

const Partners: React.FC = () => {
  const logos = Array(8).fill('Alrams');

  return (
    <section className="relative py-32 bg-transparent overflow-hidden font-poppins">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            The Story <span className="text-purple-500">We Tell</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
            We Build Brands That Click. Delivering ROI-driven digital transformation by
            mastering the convergence of Design Systems, Emerging Tech, and Growth Marketing.
          </p>
        </FadeIn>

        {/* MARQUEE WRAPPER */}
        <div className="mt-24 space-y-12">

          {/* ROW 1 — LEFT TO RIGHT */}
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee-right w-max">
              {[...logos, ...logos].map((logo, i) => (
                <div key={`top-${i}`} className="flex flex-col items-center gap-4 text-gray-400 min-w-[120px]">
                  <LogoIcon />
                  <span className="text-sm font-medium tracking-wide">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 — RIGHT TO LEFT */}
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee-left w-max">
              {[...logos, ...logos].map((logo, i) => (
                <div key={`bottom-${i}`} className="flex flex-col items-center gap-4 text-gray-400 min-w-[120px]">
                  <LogoIcon />
                  <span className="text-sm font-medium tracking-wide">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;

/* Logo SVG */
const LogoIcon = () => (
  <div className="w-10 h-10 flex items-center justify-center">
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    </svg>
  </div>
);
