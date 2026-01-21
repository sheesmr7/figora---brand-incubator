import React from 'react';
import FadeIn from './FadeIn';

const DraftSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#05010d] overflow-hidden"
    >
      {/* Subtle Purple Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-700/20 blur-[200px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <span className="text-purple-500 text-3xl">✦</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Draft Your Next Chapter
            <br />
            <span className="text-purple-500">with Figora</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10">
            Start your career with Figora and be part of a team that shapes the
            future of digital marketing.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group flex items-center gap-3 px-7 py-3 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-all">
              Draft Your Resume
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 group-hover:bg-purple-400 transition-colors">
                ↗
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DraftSection;
