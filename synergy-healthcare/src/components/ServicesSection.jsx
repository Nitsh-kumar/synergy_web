import React from 'react';

const SERVICES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Pain Management',
    desc: 'Targeted therapy for chronic back pain, neck pain, and joint disorders using advanced techniques.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Sports Rehabilitation',
    desc: 'Get back in the game faster with sport-specific recovery programs and injury prevention.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Post-Surgery Recovery',
    desc: 'Structured rehabilitation protocols to restore strength, mobility, and function after surgery.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Neurological Rehabilitation',
    desc: 'Specialized care for stroke, Parkinson\'s, and other neurological conditions to improve quality of life.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Pediatric Physiotherapy',
    desc: 'Gentle, child-friendly therapy for developmental delays, cerebral palsy, and childhood injuries.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Electrotherapy',
    desc: 'TENS, ultrasound, and IFT therapy for accelerated pain relief and tissue healing.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 sm:py-28 px-4 relative" style={{ backgroundColor: 'white' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[var(--color-primary-light)] opacity-[0.03] rounded-bl-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            What We Offer
          </p>
          <h2
            className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            style={{ color: 'var(--color-secondary)' }}
          >
            Our Services
          </h2>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 font-medium">
            Comprehensive physiotherapy and rehabilitation services tailored to your specific needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className={`group bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(15,118,110,0.08)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 reveal stagger-${(idx % 3) + 1}`}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-[18px] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                  color: 'white' 
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-xl mb-3 tracking-tight"
                style={{ color: 'var(--color-secondary)' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-slate-500 font-medium">
                {service.desc}
              </p>

              {/* Hover accent line */}
              <div
                className="mt-8 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500 ease-out"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
