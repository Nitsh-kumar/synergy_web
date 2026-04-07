import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
  { label: 'Find Us', id: 'location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{ backgroundColor: '#1B4D3E' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Name */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 focus:outline-none">
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
            <div className="flex flex-col text-left">
              <span
                className="text-white font-bold text-base sm:text-lg leading-tight"
                style={{ letterSpacing: '0.15em' }}
              >
                SYNERGY
              </span>
              <span className="text-white/70 text-xs sm:text-sm font-light leading-tight">
                Health Care &amp; Research Center
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-4 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/10 text-sm font-medium transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA + Mobile quick-call + hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop Book Now */}
            <button
              onClick={() => scrollTo('book')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: '#C0392B' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </button>

            {/* Mobile: quick call button */}
            <a
              href="tel:+918800404272"
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors duration-200 hover:bg-white/10"
              aria-label="Call us"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-0.5 bg-white rounded transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : '' }}
              />
              <span
                className="block w-5 h-0.5 bg-white rounded my-1 transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-white rounded transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : '' }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '300px' : '0' }}
        >
          <div className="pb-4 pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1 mt-2">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-white/80 hover:text-white hover:bg-white/10 text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('book')}
                className="flex items-center gap-2 mt-2 px-5 py-3 rounded-xl text-white text-sm font-bold w-full justify-center transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#C0392B' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
