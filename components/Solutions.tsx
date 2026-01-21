import React from 'react';
import FadeIn from './FadeIn';

const Solutions: React.FC = () => {
  return (
    <section className="relative py-32 bg-transparent" id="service">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <FadeIn direction="right">
            <h2 className="text-6xl font-bold leading-tight text-gray-900">
              Our <span className="text-purple-600 italic">Solutions</span>
              <br />
              Portfolio.
            </h2>

            <div className="mt-12 h-px w-32 bg-purple-500/60"></div>
          </FadeIn>

          <FadeIn direction="left" className="relative group">
            <div className="overflow-hidden rounded-3xl aspect-video relative shadow-xl shadow-purple-500/10">
              <img
                src="public/fig3.png"
                alt="Team Figora"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <h3 className="text-4xl font-bold tracking-tight text-white">
                  Team Figora.
                </h3>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Solutions;
