import React, { useState } from 'react';

const BENEFITS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Expert-led sessions with certified physiotherapists',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Flexible morning & evening slots available',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    text: 'Quick WhatsApp confirmation within minutes',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!phone.trim()) newErrors.phone = 'Phone number is required.';
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

    const message = `Hello Synergy Health Care & Research Center! 👋\n\nNew Patient Inquiry:\nName: ${name}\nPhone: ${phone}\n\nSent from the Synergy website.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918800404272?text=${encoded}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="book" className="w-full py-16 sm:py-24 px-4" style={{ backgroundColor: '#F4F7F4' }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C0392B' }}>
            Easy Booking
          </p>
          <h2
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: '#2D4A1E' }}
          >
            Book an Appointment
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full" style={{ backgroundColor: '#C0392B' }} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: Benefits panel */}
          <div
            className="rounded-3xl p-6 sm:p-8 lg:p-10"
            style={{ backgroundColor: '#1B4D3E' }}
          >
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Why Choose Synergy?</h3>
            <p className="text-white/60 text-sm mb-5">
              Trusted by thousands of patients across Ghaziabad for expert care.
            </p>

            {/* Benefits — all on desktop, 2 on mobile */}
            <div className="flex flex-col gap-4">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.text}
                  className={`flex items-start gap-3 ${i >= 2 ? 'hidden sm:flex' : ''}`}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#A8D8B9' }}
                  >
                    {b.icon}
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed pt-1">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Doctor callout */}
            <div
              className="mt-6 pt-5 border-t flex items-center gap-4"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              >
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase font-bold tracking-wider">HOD</p>
                <p className="text-white font-bold">Dr. Ashish Kumar</p>
                <a
                  href="tel:+918800404272"
                  className="text-xs font-semibold"
                  style={{ color: '#A8D8B9' }}
                >
                  +91-8800404272
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-7 sm:p-10 flex flex-col gap-6"
            noValidate
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="patient-name"
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#1B4D3E' }}
              >
                Full Name <span style={{ color: '#C0392B' }}>*</span>
              </label>
              <input
                id="patient-name"
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                }}
                className="px-4 py-3.5 rounded-xl border-2 text-base outline-none transition-all duration-200"
                style={{
                  borderColor: errors.name ? '#C0392B' : '#e8e8e8',
                  color: '#333',
                  backgroundColor: '#fafafa',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1B4D3E';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.name ? '#C0392B' : '#e8e8e8';
                  e.target.style.backgroundColor = '#fafafa';
                }}
              />
              {errors.name && (
                <span className="text-xs font-medium flex items-center gap-1" style={{ color: '#C0392B' }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="patient-phone"
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#1B4D3E' }}
              >
                Phone Number <span style={{ color: '#C0392B' }}>*</span>
              </label>
              <input
                id="patient-phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                }}
                className="px-4 py-3.5 rounded-xl border-2 text-base outline-none transition-all duration-200"
                style={{
                  borderColor: errors.phone ? '#C0392B' : '#e8e8e8',
                  color: '#333',
                  backgroundColor: '#fafafa',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1B4D3E';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.phone ? '#C0392B' : '#e8e8e8';
                  e.target.style.backgroundColor = '#fafafa';
                }}
              />
              {errors.phone && (
                <span className="text-xs font-medium flex items-center gap-1" style={{ color: '#C0392B' }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.phone}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-base tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2.5"
              style={{ backgroundColor: '#25D366' }}
            >
              {submitted ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </>
              )}
            </button>

            <p className="text-xs text-center" style={{ color: '#aaa' }}>
              You will be redirected to WhatsApp to complete your appointment request.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
