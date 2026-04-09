import React from 'react';

export default function MapEmbed() {
  return (
    <section id="location" className="w-full relative min-h-[500px] h-[60vh] bg-slate-100">
      {/* Map iframe taking full background */}
      <iframe
        title="Synergy Health Care Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2095295268074!2d77.4203!3d28.683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf268be3e1bbb%3A0x44e5b6f29d89ede1!2sKarpuri%20Puram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Floating Info Card */}
      <div className="absolute inset-0 pointer-events-none p-4 flex sm:items-end justify-center sm:justify-start max-w-7xl mx-auto sm:px-6 lg:px-8 pb-10">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 w-full sm:w-[400px] pointer-events-auto shadow-2xl mt-auto translate-y-6 sm:translate-y-0">
          <h3 className="font-bold text-2xl mb-2" style={{ color: 'var(--color-secondary)' }}>
            Find Us
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            KA-90, Karpuripuram<br/>
            Ghaziabad, Uttar Pradesh<br/>
            India
          </p>

          <a
            href="https://maps.google.com/?q=KA-90+Karpuripuram+Ghaziabad+Uttar+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
