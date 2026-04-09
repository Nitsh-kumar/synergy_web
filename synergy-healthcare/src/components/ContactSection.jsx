import React from 'react';

const PhoneIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoCard = ({ icon, label, children }) => (
  <div className="flex-1 min-w-[280px] bg-white rounded-3xl p-8 shadow-sm border border-slate-100 reveal flex flex-col items-start gap-4">
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center p-3"
      style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-primary)' }}
    >
      {icon}
    </div>
    <div className="w-full">
      <p className="text-sm font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--color-primary)' }}>
        {label}
      </p>
      <div className="text-slate-700">{children}</div>
    </div>
  </div>
);

export default function ContactSection() {
  const currentHour = new Date().getHours();
  const isSunday = new Date().getDay() === 0;
  const isOpen = !isSunday && currentHour >= 8 && currentHour < 20;

  return (
    <section id="contact" className="w-full py-20 sm:py-28 px-4" style={{ backgroundColor: 'var(--color-light)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>
            Reach Out
          </p>
          <h2
            className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            style={{ color: 'var(--color-secondary)' }}
          >
            Get In Touch
          </h2>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 font-medium">
            We&apos;re here to help you heal and thrive.
          </p>
        </div>

        {/* Info cards */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <InfoCard icon={<PhoneIcon />} label="Phone">
            <a
              href="tel:+918800404272"
              className="text-2xl font-black hover:text-[var(--color-primary)] transition-colors block mb-1"
              style={{ color: 'var(--color-secondary)' }}
            >
              +91-8800404272
            </a>
            <p className="text-base text-slate-500 mb-6 font-medium">
              Tap to call directly
            </p>
            <a
              href="tel:+918800404272"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md w-full justify-center sm:w-auto"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <PhoneIcon /> Call Now
            </a>
          </InfoCard>

          <InfoCard icon={<MapPinIcon />} label="Address">
            <p className="font-bold text-lg text-slate-800 mb-1">
              KA-90, Karpuripuram
            </p>
            <p className="text-base text-slate-500 mb-6 font-medium leading-relaxed">
              Ghaziabad, Uttar Pradesh, India
            </p>
            <a
              href="https://maps.google.com/?q=KA-90+Karpuripuram+Ghaziabad+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-700 text-sm font-bold transition-all hover:bg-slate-50 active:scale-95 border-2 border-slate-200 w-full justify-center sm:w-auto"
            >
              <MapPinIcon /> Directions
            </a>
          </InfoCard>

          <InfoCard icon={<ClockIcon />} label="Timings">
            <div className="flex flex-col gap-3 font-medium text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-slate-500 font-bold">Winter</span>
                <span>8:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-sm uppercase tracking-wider text-slate-500 font-bold">Summer</span>
                <span>6:00 AM – 9:00 PM</span>
              </div>
            </div>
            
            <div className="mt-6 flex gap-2 w-full">
              {isOpen ? (
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-teal-700 bg-teal-50 w-full border border-teal-100">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  Open Now
                </div>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-red-700 bg-red-50 w-full border border-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Closed 
                  {isSunday && ' (Sundays)'}
                </div>
              )}
            </div>
          </InfoCard>
        </div>

        {/* Doctor info card */}
        <div className="mt-12 reveal text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-6 bg-white rounded-[32px] p-4 sm:pr-10 shadow-sm border border-slate-100 max-w-2xl mx-auto">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
            >
              <UserIcon />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: 'var(--color-accent)' }}>
                Head of Department
              </p>
              <p className="font-black text-2xl tracking-tight mb-1" style={{ color: 'var(--color-secondary)' }}>
                Dr. Ashish Kumar
              </p>
              <a
                href="tel:+918800404272"
                className="text-base font-bold underline hover:no-underline"
                style={{ color: 'var(--color-primary)' }}
              >
                PT, MPT (Neuro), Certified Manual Therapist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
