const AboutSection = () => {
  return (
    <section className="relative py-32 bg-transparent">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          We Build Brands That Click. Delivering ROI-driven digital transformation
          by mastering the convergence of Design Systems, Emerging Tech, and
          Growth Marketing.
        </h2>

        <p className="mt-8 font-poppins text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis
          iaculis hendrerit.
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
