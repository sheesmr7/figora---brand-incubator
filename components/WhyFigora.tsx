import React from 'react';
import FadeIn from './FadeIn';

const WhyFigora: React.FC = () => {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      img: 'https://picsum.photos/400/500?v=41',
    },
    {
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      img: 'https://picsum.photos/400/500?grayscale&v=42',
    },
    {
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      img: 'https://picsum.photos/400/500?v=43',
    },
    {
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      img: 'https://picsum.photos/400/500?v=44',
    },
  ];

  return (
    <section
      id="team"
      className="py-32"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f6f0ff 100%)',
      }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-gray-900">
            Why <span className="text-purple-600">Figora?</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From the visionary heart of{' '}
            <span className="text-purple-600 font-medium">Thrissur</span>, we are a
            crew defined by confident action and unwavering aspiration. We don’t
            follow change—
            <span className="text-purple-600 font-medium"> we anticipate it.</span>
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We believe growth is a reciprocal journey. Our team’s brilliance fuels
            the transformative impact we promise, ensuring your brand’s story
            unfolds with{' '}
            <span className="text-purple-600 font-medium">
              measurable excellence.
            </span>
          </p>
        </FadeIn>

        {/* Image Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">

                {/* Image */}
                <div className="w-full max-w-[240px] overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <h4 className="text-sm font-semibold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-xs text-purple-600 mt-1">
                  {member.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyFigora;
