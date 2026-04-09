import React, { useState } from 'react';

const BENEFITS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Expert-led sessions with certified physiotherapists',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Flexible morning & evening slots available',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    text: 'Quick WhatsApp confirmation within minutes',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: 'Personalized treatment plans for every patient',
  },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!phone.trim()) newErrors.phone = 'Please enter your phone number.';
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone.trim()))
      newErrors.phone = 'Please enter a valid phone number.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const message = `Hello Synergy Health Care! 👋\n\nI would like to book an appointment.\nName: ${name}\nPhone: ${phone}\n\nSent from website.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918800404272?text=${encoded}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="book" className="w-full py-20 sm:py-28 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Benefits panel */}
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>
              Easy Booking
            </p>
            <h2
              className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{ color: 'var(--color-secondary)' }}
            >
              Book Your Session
            </h2>
            <p className="text-lg text-slate-600 font-medium mb-10 max-w-lg">
              Secure your appointment quickly. Fill out the form below and we will confirm via WhatsApp in minutes.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-6 mb-10 border-l-2 p-4 pl-6" style={{ borderColor: 'var(--color-primary-light)' }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-primary)' }}
                  >
                    {b.icon}
                  </div>
                  <p className="text-base text-slate-700 font-semibold">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
              
              <div className="flex flex-col relative group">
                <input
                  id="patient-name"
                  type="text"
                  placeholder=" "
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  className="peer w-full px-5 pb-3 pt-7 rounded-2xl border-2 outline-none transition-all duration-300 font-medium text-lg"
                  style={{
                    borderColor: errors.name ? 'var(--color-accent)' : '#E2E8F0',
                    backgroundColor: '#F8FAFC',
                    color: 'var(--color-dark)'
                  }}
                />
                <label
                  htmlFor="patient-name"
                  className="absolute left-5 top-5 text-slate-400 font-semibold transition-all duration-300 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75"
                >
                  Full Name
                </label>
                {errors.name && (
                  <span className="text-sm font-semibold mt-2 px-1 flex items-center gap-1.5" style={{ color: 'var(--color-accent)' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col relative group">
                <input
                  id="patient-phone"
                  type="tel"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                  }}
                  className="peer w-full px-5 pb-3 pt-7 rounded-2xl border-2 outline-none transition-all duration-300 font-medium text-lg"
                  style={{
                    borderColor: errors.phone ? 'var(--color-accent)' : '#E2E8F0',
                    backgroundColor: '#F8FAFC',
                    color: 'var(--color-dark)'
                  }}
                />
                <label
                  htmlFor="patient-phone"
                  className="absolute left-5 top-5 text-slate-400 font-semibold transition-all duration-300 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75"
                >
                  Phone Number
                </label>
                {errors.phone && (
                  <span className="text-sm font-semibold mt-2 px-1 flex items-center gap-1.5" style={{ color: 'var(--color-accent)' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.phone}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 flex items-center justify-center gap-3 mt-4"
                style={{ backgroundColor: '#25D366' }}
              >
                {submitted ? (
                  <>
                    <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
