import React from 'react';
import FadeIn from './FadeIn';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-32 pb-16 overflow-hidden font-poppins">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="container mx-auto px-6">
        {/* CTA SECTION */}
        <FadeIn className="text-center mb-32">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center text-purple-500 text-xl">
              ✦
            </div>
          </div>

          <h2 className="text-purple-500 text-3xl md:text-4xl font-extrabold uppercase tracking-wide leading-tight">
            SHOULDN&apos;T YOUR BRAND&apos;S STORY BE THE ONE <br />
            EVERYONE REMEMBERS?
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-6 text-sm md:text-base">
            Memorable stories are expertly crafted, not accidental. Ready to amplify your voice and leave a lasting impression? Let&apos;s start.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="group flex items-center gap-3 px-7 py-3 rounded-full bg-purple-600 text-white font-medium hover:scale-105 transition-transform">
              Connect with us to start.
              <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center group-hover:bg-purple-400 transition-colors">
                ↗
              </span>
            </button>
          </div>
        </FadeIn>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-t border-white/10 pt-20">
          {/* BRAND COLUMN */}
          <div>
            {/* FIGORA LOGO — SVG ONLY */}
            <img
              src="/public/figo svg 4.svg"
              alt="Figora"
              className="h-10 mb-6 select-none"
              draggable={false}
            />

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Premier digital marketing agency delivering high-ROI solutions through strategic thinking, emerging technology, and growth-focused execution.
            </p>

            <div className="flex gap-3">
              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-purple-600/90 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
              >
                <FaWhatsapp size={16} />
              </a>

              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-purple-600/90 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-purple-600/90 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Solutions', 'Works', 'About', 'Careers', 'Contact'].map((link) => (
                <li
                  key={link}
                  className="hover:text-purple-500 transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                'Branding',
                'SEO',
                'Social Media',
                'Performance Marketing',
                'Production',
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-purple-500 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="text-white font-semibold mb-6">Location</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kerala, India <br />
              Working globally with brands worldwide.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>© 2024 Figora. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
