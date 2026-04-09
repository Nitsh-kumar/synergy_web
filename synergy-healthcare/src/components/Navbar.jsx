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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-primary)] shadow-xl shadow-black/10 py-3' : 'bg-transparent py-5'
      } ${menuOpen ? 'bg-[var(--color-primary)]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo + Name */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-white rounded-full p-1 shadow-sm">
              <img
                src="/logo.png"
                alt="Synergy Health Care Logo"
                className="w-full h-full object-contain rounded-full"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className={`flex flex-col text-left transition-colors duration-300 ${scrolled || menuOpen ? 'text-white' : 'text-slate-800'}`}>
              <span className="font-bold text-base sm:text-lg leading-tight tracking-[0.1em]">
                SYNERGY
              </span>
              <span className="text-xs sm:text-sm font-medium leading-tight opacity-80">
                Health Care &amp; Research Center
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-slate-700 hover:text-[var(--color-primary)] hover:bg-black/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA + Mobile quick-call + hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop Book Now */}
            <button
              onClick={() => scrollTo('book')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </button>

            {/* Hamburger */}
            <button
              className={`lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-full transition-colors duration-200 ${
                scrolled || menuOpen ? 'bg-white/10 text-white' : 'bg-black/5 text-slate-800'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled || menuOpen ? 'bg-white' : 'bg-current'}`}
                style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : '' }}
              />
              <span
                className={`block w-5 h-0.5 rounded my-1.5 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white' : 'bg-current'}`}
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled || menuOpen ? 'bg-white' : 'bg-current'}`}
                style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : '' }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: menuOpen ? '400px' : '0', opacity: menuOpen ? 1 : 0 }}
        >
          <div className="pb-6 pt-4 border-t border-white/10 mt-2">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-white/90 hover:text-white hover:bg-white/10 text-left px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-200"
                >
                  {label}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-4 px-2">
                <a
                  href="tel:+918800404272"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl text-white text-sm font-bold bg-white/10 active:scale-95 transition-transform"
                >
                  Call Now
                </a>
                <button
                  onClick={() => scrollTo('book')}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl text-white text-sm font-bold active:scale-95 transition-transform shadow-lg"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
