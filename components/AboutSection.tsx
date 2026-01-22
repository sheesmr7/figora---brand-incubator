const AboutSection = () => {
  return (
    <section className="relative pt-32 pb-16 bg-transparent">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-relaxed md:leading-loose lg:leading-[1.4] tracking-tight">
          We Build Brands That Click. <br className="hidden md:block" />
          Delivering ROI-driven digital transformation <br className="hidden md:block" />
          by mastering the convergence of Design Systems, <br className="hidden md:block" />
          Emerging Tech, and Growth Marketing.
        </h2>

        <p className="mt-8 font-poppins text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          We help brands turn attention into action. By aligning thoughtful design, modern technology, and data-led marketing, we create digital experiences that are clear, compelling, and built to drive measurable results.
        </p>

        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 rounded-full bg-purple-600 text-white hover:scale-105 transition">
            About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
