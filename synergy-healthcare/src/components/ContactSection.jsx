import React from 'react';

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoCard = ({ icon, label, children, accent }) => (
  <div
    className="flex-1 min-w-[240px] bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    style={{ border: '1px solid rgba(27,77,62,0.08)', borderTop: `3px solid ${accent || '#1B4D3E'}` }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
      style={{ backgroundColor: '#EBF4EF', color: '#1B4D3E' }}
    >
      {icon}
    </div>
    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#1B4D3E' }}>
      {label}
    </p>
    <div style={{ color: '#333' }}>{children}</div>
  </div>
);

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C0392B' }}>
            Reach Out
          </p>
          <h2
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: '#2D4A1E' }}
          >
            Get In Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full" style={{ backgroundColor: '#C0392B' }} />
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#666' }}>
            We&apos;re here to help you heal and thrive.
          </p>
        </div>

        {/* Info cards */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center">
          <InfoCard icon={<PhoneIcon />} label="Phone">
            <a
              href="tel:+918800404272"
              className="text-lg font-bold hover:underline transition-colors"
              style={{ color: '#1B4D3E' }}
            >
              +91-8800404272
            </a>
            <p className="text-sm mt-1" style={{ color: '#888' }}>
              Tap to call directly
            </p>
            <a
              href="tel:+918800404272"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-white text-xs font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: '#1B4D3E' }}
            >
              <PhoneIcon /> Call Now
            </a>
          </InfoCard>

          <InfoCard icon={<MapPinIcon />} label="Address">
            <p className="font-semibold text-base" style={{ color: '#333' }}>
              KA-90, Karpuripuram
            </p>
            <p className="text-sm mt-1" style={{ color: '#888' }}>
              Ghaziabad, Uttar Pradesh, India
            </p>
            <a
              href="https://maps.google.com/?q=KA-90+Karpuripuram+Ghaziabad+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-white text-xs font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: '#1B4D3E' }}
            >
              <MapPinIcon /> Get Directions
            </a>
          </InfoCard>

          <InfoCard icon={<ClockIcon />} label="Timings" accent="#C0392B">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase" style={{ color: '#1B4D3E' }}>Winter</span>
                <span className="text-sm" style={{ color: '#333' }}>8:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase" style={{ color: '#1B4D3E' }}>Summer</span>
                <span className="text-sm" style={{ color: '#333' }}>6:00 AM – 9:00 PM</span>
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider text-white px-3 py-1.5 rounded-full animate-pulse-badge"
              style={{ backgroundColor: '#C0392B' }}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Closed on Sundays
            </span>
          </InfoCard>
        </div>

        {/* Doctor info card */}
        <div className="mt-10">
          <div
            className="max-w-lg mx-auto rounded-2xl p-6 flex items-center gap-5"
            style={{ backgroundColor: '#EBF4EF', border: '1px solid rgba(27,77,62,0.12)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#1B4D3E', color: 'white' }}
            >
              <UserIcon />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#1B4D3E' }}>
                Head of Department
              </p>
              <p className="font-bold text-lg" style={{ color: '#2D4A1E' }}>
                Dr. Ashish Kumar
              </p>
              <a
                href="tel:+918800404272"
                className="text-sm font-medium hover:underline"
                style={{ color: '#C0392B' }}
              >
                +91-8800404272
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
