import React from 'react';

const DETAILS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'KA-90, Karpuripuram, Ghaziabad, Uttar Pradesh — India',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91-8800404272',
    href: 'tel:+918800404272',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: 'Summer Hours',
    value: 'Mon–Sat: 6:00 AM – 9:00 PM',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    label: 'Winter Hours',
    value: 'Mon–Sat: 8:00 AM – 8:00 PM',
  },
];

export default function MapEmbed() {
  return (
    <section id="location" className="w-full py-16 sm:py-24 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C0392B' }}>
            Our Location
          </p>
          <h2
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: '#2D4A1E' }}
          >
            Find Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full" style={{ backgroundColor: '#C0392B' }} />
        </div>

        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Left: Clinic details */}
          <div
            className="lg:col-span-2 rounded-3xl p-8 flex flex-col justify-between"
            style={{ backgroundColor: '#F4F7F4', border: '1px solid rgba(27,77,62,0.08)' }}
          >
            <div>
              <h3 className="font-bold text-xl mb-6" style={{ color: '#2D4A1E' }}>
                Synergy Health Care &amp; Research Center
              </h3>

              <div className="flex flex-col gap-6">
                {DETAILS.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EBF4EF', color: '#1B4D3E' }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#1B4D3E' }}>
                        {d.label}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="font-semibold text-sm hover:underline" style={{ color: '#333' }}>
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm leading-relaxed" style={{ color: '#333' }}>
                          {d.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closed Sunday badge */}
            <div
              className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold w-fit"
              style={{ backgroundColor: 'rgba(192,57,43,0.1)', color: '#C0392B' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Closed on Sundays
            </div>

            {/* Get directions CTA */}
            <a
              href="https://maps.google.com/?q=KA-90+Karpuripuram+Ghaziabad+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#1B4D3E' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Right: Map */}
          <div
            className="lg:col-span-3 overflow-hidden"
            style={{
              borderRadius: '24px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
            }}
          >
            <iframe
              title="Synergy Health Care Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2095295268074!2d77.4203!3d28.683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf268be3e1bbb%3A0x44e5b6f29d89ede1!2sKarpuri%20Puram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '260px', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
