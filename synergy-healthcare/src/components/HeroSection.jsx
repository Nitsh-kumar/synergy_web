import React, { useEffect, useRef } from 'react';

const STATS = [
  { value: '18+', label: 'Years Exp.' },
  { value: '15K+', label: 'Patients' },
  { value: '99%', label: 'Recovery' },
];

export default function HeroSection() {
  const ctaRef = useRef(null);

  useEffect(() => {
    // Optional: Add simple CSS intersection observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const bookAppointment = () =>
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  const viewServices = () =>
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex items-center min-h-[100svh]"
      style={{ backgroundColor: 'var(--color-light)' }}
    >
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-light)] via-[var(--color-light)] to-transparent opacity-90 sm:opacity-100 z-10 sm:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-light)] via-transparent to-transparent opacity-100 z-10 sm:hidden" />
        <img 
          src="/hero.png" 
          alt="Physiotherapy Treatment" 
          className="w-full h-full object-cover object-right sm:object-center opacity-40 sm:opacity-100"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 relative pt-20 pb-16 sm:py-0">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 glass-panel animate-fade-in-up"
          >
            <span className="w-2 h-2 rounded-full animate-pulse-badge" style={{ backgroundColor: 'var(--color-accent)' }} />
            <span style={{ color: 'var(--color-secondary)' }}>Ghaziabad&apos;s Trusted Center</span>
          </div>

          {/* Heading */}
          <h1
            className="font-black leading-tight mb-4 animate-fade-in-up stagger-1 text-5xl sm:text-6xl lg:text-7xl"
            style={{ color: 'var(--color-secondary)' }}
          >
            Expert{' '}
            <span style={{ color: 'var(--color-primary)' }}>Physiotherapy</span>
            <br />
            &amp; Rehabilitation
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium mb-8 leading-relaxed animate-fade-in-up stagger-2" style={{ color: 'var(--color-dark)' }}>
            Healing Ghaziabad, One Step at a Time.
            <br />
            <span className="text-base font-normal mt-1 block" style={{ color: 'var(--color-primary-dark)', opacity: 0.8 }}>
              Advanced pain management &amp; post-surgery rehabilitation.
            </span>
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up stagger-3">
            <button
              onClick={bookAppointment}
              className="px-8 py-4 rounded-xl text-white font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg flex justify-center items-center gap-2 w-full sm:w-auto"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              Book Appointment →
            </button>
            <button
              onClick={viewServices}
              className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-black/5 active:scale-95 w-full sm:w-auto text-center"
              style={{
                color: 'var(--color-secondary)',
                border: '2px solid var(--color-primary-light)',
              }}
            >
              Our Services
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg border-t border-black/10 pt-8 animate-fade-in-up stagger-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-black text-2xl sm:text-3xl tracking-tight" style={{ color: 'var(--color-primary)' }}>{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold opacity-70 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Scroll hint */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex justify-center z-20" style={{ color: 'var(--color-primary)' }}>
          <svg className="w-8 h-8 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
    </section>
  );
}
