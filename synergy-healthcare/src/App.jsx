import React from 'react';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import MapEmbed from './components/MapEmbed';
import ErrorBoundary from './components/ErrorBoundary';

const FOOTER_SERVICES = [
  'Pain Management',
  'Sports Rehabilitation',
  'Post-Surgery Recovery',
  'Neurological Rehab',
  'Pediatric Physiotherapy',
  'Electrotherapy',
];

const FOOTER_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
  { label: 'Book Appointment', id: 'book' },
  { label: 'Find Us', id: 'location' },
];

export default function App() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen" style={{ backgroundColor: '#F4F7F4' }}>
        <Navbar />

        <div style={{ paddingTop: '0px' }}>
          <HeroScene />
          <ServicesSection />
          <ContactSection />
          <ContactForm />
          <MapEmbed />
        </div>

        {/* Footer */}
        <footer
          className="w-full pt-16 pb-8 px-4"
          style={{ backgroundColor: '#1B4D3E' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              {/* Brand column */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/logo.png"
                    alt="Synergy Logo"
                    className="w-10 h-10 rounded-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <p className="text-white font-bold tracking-widest text-sm" style={{ letterSpacing: '0.15em' }}>
                      SYNERGY
                    </p>
                    <p className="text-white/50 text-xs">Health Care &amp; Research Center</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Providing expert physiotherapy and rehabilitation services in Ghaziabad since over a decade.
                </p>
                <p className="mt-4 text-white/40 text-xs italic">Cure. Care. Commitment.</p>
              </div>

              {/* Quick links */}
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">Quick Links</p>
                <div className="flex flex-col gap-2.5">
                  {FOOTER_LINKS.map(({ label, id }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className="text-white/65 hover:text-white text-sm text-left transition-colors duration-200 w-fit"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">Our Services</p>
                <div className="flex flex-col gap-2.5">
                  {FOOTER_SERVICES.map((s) => (
                    <span key={s} className="text-white/65 text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                © {new Date().getFullYear()} Synergy Health Care. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  KA-90, Karpuripuram, Ghaziabad (U.P.)
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
