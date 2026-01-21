import React, { useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'The Ethos of Metawave', type: 'Design System', img: 'https://picsum.photos/800/600?v=10' },
    { title: 'Beyond Identity', type: 'Growth Marketing', img: 'https://picsum.photos/800/600?v=11' },
    { title: 'Digital Frontier', type: 'Tech Stack', img: 'https://picsum.photos/800/600?v=12' },
    { title: 'Visual Narratives', type: 'Branding', img: 'https://picsum.photos/800/600?v=13' },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const speed = 0.5; // auto-scroll speed

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;

    const animate = () => {
      track.scrollLeft += speed;

      // seamless loop
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollManual = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: dir === 'right' ? 400 : -400,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative py-32 overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 relative">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Our Story <span className="text-purple-500 italic">Portfolio</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto italic">
            Each project is a testament to our commitment to excellence and innovation.
          </p>
        </FadeIn>

        {/* LEFT BUTTON */}
        <button
          onClick={() => scrollManual('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     w-12 h-12 rounded-full bg-black/60 backdrop-blur
                     border border-white/10 text-white hover:bg-purple-600 transition"
        >
          ←
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scrollManual('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     w-12 h-12 rounded-full bg-black/60 backdrop-blur
                     border border-white/10 text-white hover:bg-purple-600 transition"
        >
          →
        </button>

        {/* SCROLL TRACK — MUST BE SCROLLABLE */}
        <div
          ref={trackRef}
          className="
            flex gap-8 overflow-x-scroll scrollbar-hide scroll-smooth
            select-none
          "
        >
          {[...projects, ...projects].map((p, i) => (
            <div
              key={i}
              className="min-w-[320px] sm:min-w-[380px] lg:min-w-[420px]
                         group relative overflow-hidden rounded-3xl
                         bg-glass border border-white/5"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale
                             transition-all duration-700
                             group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05010d]
                              via-transparent to-transparent flex flex-col
                              justify-end p-6">
                <span className="inline-block bg-purple-600/80 text-[10px]
                                 uppercase font-bold tracking-widest px-3
                                 py-1 rounded-full mb-3 w-fit">
                  {p.type}
                </span>

                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm opacity-0
                              group-hover:opacity-100 translate-y-2
                              group-hover:translate-y-0 transition-all duration-300">
                  View Case Study →
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
