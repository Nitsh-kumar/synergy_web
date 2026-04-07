import React from 'react';

const InfoCard = ({ icon, label, value, extra }) => (
  <div
    className="flex-1 min-w-[260px] bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
    style={{ borderLeft: '5px solid #1B4D3E' }}
  >
    <div className="flex items-start gap-4">
      <div
        className="text-3xl sm:text-4xl flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#F4F7F4' }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: '#1B4D3E' }}
        >
          {label}
        </span>
        <span className="font-semibold text-base sm:text-lg" style={{ color: '#333333' }}>
          {value}
        </span>
        {extra && <div className="mt-2">{extra}</div>}
      </div>
    </div>
  </div>
);

export default function ContactSection() {
  return (
    <section className="w-full py-16 sm:py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: '#2D4A1E' }}
          >
            Get In Touch
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ backgroundColor: '#C0392B' }}
          />
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#666' }}>
            We&apos;re here to help you heal and thrive.
          </p>
        </div>

        {/* Cards row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
          {/* Phone */}
          <InfoCard
            icon="📞"
            label="Phone"
            value="+91-8800404272"
          />

          {/* Address */}
          <InfoCard
            icon="📍"
            label="Address"
            value="KA-90, Karpuripuram, Ghaziabad (U.P.)"
          />

          {/* Timings */}
          <InfoCard
            icon="⏰"
            label="Timings"
            value={
              <div className="flex flex-col gap-1">
                <span className="text-sm sm:text-base">
                  <strong>Winter:</strong> 8:00 AM – 8:00 PM
                </span>
                <span className="text-sm sm:text-base">
                  <strong>Summer:</strong> 6:00 AM – 9:00 PM
                </span>
              </div>
            }
            extra={
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full animate-pulse-badge"
                style={{ backgroundColor: '#C0392B' }}
              >
                Sunday Closed
              </span>
            }
          />
        </div>

        {/* Doctor info */}
        <div className="mt-10 text-center">
          <p
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#C0392B' }}
          >
            Dr. Ashish Kumar (HOD) — Mob: +91-8800404272
          </p>
        </div>
      </div>
    </section>
  );
}
