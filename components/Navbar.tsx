import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/80 backdrop-blur-lg border-b border-black/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* FIGORA LOGO — SVG ONLY */}
        <img
          src="/public/figo svg 2.svg"
          alt="Figora"
          className="h-9 md:h-10 select-none"
          draggable={false}
        />

        <div className="hidden md:flex items-center space-x-10">
          {['About', 'Service', 'Portfolio', 'Team', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
