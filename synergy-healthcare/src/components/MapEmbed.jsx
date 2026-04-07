import React from 'react';

export default function MapEmbed() {
  return (
    <section className="w-full py-16 sm:py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: '#2D4A1E' }}
          >
            Find Us
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ backgroundColor: '#C0392B' }}
          />
          <p className="mt-4 text-base" style={{ color: '#555' }}>
            KA-90, Karpuripuram, Ghaziabad, Uttar Pradesh — India
          </p>
        </div>

        {/* Map iframe */}
        <div
          className="w-full overflow-hidden"
          style={{
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
          }}
        >
          <iframe
            title="Synergy Health Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2095295268074!2d77.4203!3d28.683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf268be3e1bbb%3A0x44e5b6f29d89ede1!2sKarpuri%20Puram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com/?q=KA-90+Karpuripuram+Ghaziabad+Uttar+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#1B4D3E' }}
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
