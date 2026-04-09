import React, { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the sticky CTA when we get to the footer or booking form
      const bookSection = document.getElementById('book');
      const footerSection = document.getElementById('footer');
      
      if (!bookSection && !footerSection) return;
      
      const bookRect = bookSection?.getBoundingClientRect();
      const footerRect = footerSection?.getBoundingClientRect();
      
      // If book section or footer are visible in the viewport, hide the sticky CTA
      if (
        (bookRect && bookRect.top < window.innerHeight && bookRect.bottom > 0) ||
        (footerRect && footerRect.top < window.innerHeight && footerRect.bottom > 0)
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glass-dark px-4 py-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
        <a
          href="tel:+918800404272"
          className="flex-1 flex justify-center items-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm tracking-wide bg-white/10 active:scale-95 transition-transform border border-white/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <button
          onClick={scrollToBook}
          className="flex-[2] flex justify-center items-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm tracking-wide active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#E8604C' }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
