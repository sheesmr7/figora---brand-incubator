import React from 'react';
import FadeIn from './FadeIn';

type HeroProps = {
  released: boolean;
};

const Hero: React.FC<HeroProps> = ({ released }) => {
  return (
    <section
      className={`
        ${released ? 'relative' : 'fixed inset-0'}
        z-0
        min-h-screen flex flex-col items-center justify-center
        pt-24 overflow-hidden bg-white font-poppins
        transition-[position] duration-300
      `}
    >
      {/* Ambient Gradient Glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-500/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-indigo-500/20 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 text-center flex flex-col items-center relative z-10">
        <FadeIn duration={1}>
          <img
            src="/figo svg 2.svg"
            alt="Figora"
            className="w-[340px] md:w-[740px] lg:w-[860px] xl:w-[920px]"
            draggable={false}
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-lg md:text-2xl font-light tracking-wide text-gray-700">
            Marketing is{' '}
            <span className="font-semibold text-indigo-600">Clarity</span>{' '}
            <span className="font-semibold text-purple-600">Conversion</span>{' '}
            <span className="font-semibold text-pink-600">Capital</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <button
            className="
              mt-12 px-10 py-4 rounded-full
              bg-gradient-to-r
              from-[#8B5CF6]
              via-[#A855F7]
              to-[#D946EF]
              text-white font-semibold text-lg
              shadow-[0_10px_40px_rgba(168,85,247,0.45)]
              hover:scale-105 transition-all
            "
          >
            Begin Your Journey
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
