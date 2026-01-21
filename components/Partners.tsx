import React from 'react';
import FadeIn from './FadeIn';

const Partners: React.FC = () => {
  const logos = Array(8).fill('Alrams');

  return (
    <section className="relative py-32 bg-transparent">
      <div className="container mx-auto px-6 text-center">

        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            The Story <span className="text-purple-500">We Tell</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
            We Build Brands That Click. Delivering ROI-driven digital transformation by
            mastering the convergence of Design Systems, Emerging Tech, and Growth Marketing.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16 gap-x-12 place-items-center">
          {logos.map((logo, i) => (
            <FadeIn key={i} delay={i * 0.05} direction="up">
              <div className="flex flex-col items-center gap-4 text-gray-400">
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

                <span className="text-sm font-medium tracking-wide">
                  {logo}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
