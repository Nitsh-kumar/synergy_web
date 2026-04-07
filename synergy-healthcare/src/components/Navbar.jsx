import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: '#1B4D3E' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Synergy Health Care Logo"
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none', backgroundColor: '#C0392B' }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full items-center justify-center"
              >
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className="text-white font-bold tracking-widest text-base sm:text-lg leading-tight"
                style={{ letterSpacing: '0.15em' }}
              >
                SYNERGY
              </span>
              <span className="text-white/80 text-xs sm:text-sm font-light leading-tight">
                Health Care &amp; Research Center
              </span>
            </div>
          </div>

          {/* Right: Tagline */}
          <div className="hidden sm:block">
            <p
              className="text-white/75 italic font-light text-sm sm:text-base"
              style={{ fontStyle: 'italic' }}
            >
              Cure. Care. Commitment.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
