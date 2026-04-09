import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import MapEmbed from './components/MapEmbed';
import ErrorBoundary from './components/ErrorBoundary';
import StickyMobileCTA from './components/StickyMobileCTA';

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
      <div className="w-full min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
        <Navbar />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <ContactSection />
          <ContactForm />
          <MapEmbed />
        </main>

        <StickyMobileCTA />

        {/* Footer */}
        <footer
          id="footer"
          className="w-full pt-16 pb-24 sm:pb-12 px-4"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
              {/* Brand column */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/logo.png"
                    alt="Synergy Logo"
                    className="w-12 h-12 rounded-full object-contain bg-white/5 p-1"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <p className="text-white font-bold tracking-widest text-lg" style={{ letterSpacing: '0.15em' }}>
                      SYNERGY
                    </p>
                    <p className="text-white/60 text-sm">Health Care &amp; Research Center</p>
                  </div>
                </div>
                <p className="text-white/70 text-base leading-relaxed max-w-sm mb-6">
                  Providing expert physiotherapy and rehabilitation services in Ghaziabad with over a decade of excellence in patient care.
                </p>
                <div className="flex gap-4">
                  <p className="text-white/50 text-sm italic border-l-2 pl-3" style={{ borderColor: 'var(--color-accent)' }}>Cure. Care. Commitment.</p>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                <div className="flex flex-col gap-3">
                  {FOOTER_LINKS.map(({ label, id }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className="text-white/70 hover:text-white text-base text-left transition-colors duration-200 w-fit flex items-center gap-2 group"
                    >
                      <span style={{ color: 'var(--color-accent)' }} className="opacity-0 group-hover:opacity-100 transition-opacity transition-transform group-hover:translate-x-1">→</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
                <div className="flex flex-col gap-3">
                  {FOOTER_SERVICES.map((s) => (
                    <span key={s} className="text-white/70 text-base flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary-light)' }}></span>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Synergy Health Care. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4" style={{ color: 'var(--color-primary-light)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                KA-90, Karpuripuram, Ghaziabad (U.P.)
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
