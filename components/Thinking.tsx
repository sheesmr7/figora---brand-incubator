import React from 'react';
import FadeIn from './FadeIn';

const Thinking: React.FC = () => {
  const posts = [
    { title: 'Brand Audit & Strategy', date: 'May 26, 2025', img: 'https://picsum.photos/800/450?v=71' },
    { title: 'Brand Audit & Strategy', date: 'May 26, 2025', img: 'https://picsum.photos/800/450?v=72' },
    { title: 'Brand Audit', date: 'May 26, 2025', img: 'https://picsum.photos/600/450?v=73' },
    { title: 'Brand Audit', date: 'May 26, 2025', img: 'https://picsum.photos/600/450?v=74' },
    { title: 'Brand Audit', date: 'May 26, 2025', img: 'https://picsum.photos/600/450?v=75' },
  ];

  return (
    <section
      id="thinking"
      className="py-32"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f6f0ff 100%)' }}
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            What We’re <span className="text-purple-600">Thinking</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis
            iaculis hendrerit.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto space-y-8">

          {/* TOP ROW — 2 WIDE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(0, 2).map((post, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[16/9] cursor-pointer">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                  {/* Text */}
                  <div className="absolute bottom-5 left-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-white text-lg font-semibold">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-1">
                      {post.date}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* BOTTOM ROW — 3 SMALLER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(2).map((post, i) => (
              <FadeIn key={i} delay={0.16 + i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                  {/* Text */}
                  <div className="absolute bottom-5 left-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-white text-base font-semibold">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-1">
                      {post.date}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

        {/* CTA */}
        <FadeIn className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 px-7 py-3 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-all">
            Explore More
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 group-hover:bg-purple-400 transition-colors">
              ↗
            </span>
          </button>
        </FadeIn>

      </div>
    </section>
  );
};

export default Thinking;
