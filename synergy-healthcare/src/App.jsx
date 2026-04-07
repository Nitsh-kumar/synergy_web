import React from 'react';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import MapEmbed from './components/MapEmbed';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen" style={{ backgroundColor: '#F4F7F4' }}>
        <Navbar />
        {/* Offset for fixed navbar */}
        <div style={{ paddingTop: '0px' }}>
          <HeroScene />
          <ContactSection />
          <ContactForm />
          <MapEmbed />
        </div>

        {/* Footer */}
        <footer
          className="w-full py-16 px-4 text-center text-sm"
          style={{ backgroundColor: '#1B4D3E', color: 'rgba(255,255,255,0.7)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="font-semibold text-white text-xl mb-2 tracking-wide">
              Synergy Health Care &amp; Research Center
            </p>
            <p className="text-base">KA-90, Karpuripuram, Ghaziabad (U.P.) · +91-8800404272</p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                © {new Date().getFullYear()} Synergy Health Care. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
