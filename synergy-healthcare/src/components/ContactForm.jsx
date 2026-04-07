import React, { useState } from 'react';

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
    <section className="w-full py-16 sm:py-20 px-4" style={{ backgroundColor: '#F4F7F4' }}>
      <div className="max-w-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: '#2D4A1E' }}
          >
            Book an Appointment
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ backgroundColor: '#C0392B' }}
          />
          <p className="mt-4 text-base" style={{ color: '#555' }}>
            Fill in your details and we&apos;ll connect with you on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-7 sm:p-10 flex flex-col gap-6"
          noValidate
        >
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="patient-name"
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1B4D3E' }}
            >
              Full Name *
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
              className="px-4 py-3 rounded-xl border-2 text-base outline-none transition-all duration-200 focus:shadow-md"
              style={{
                borderColor: errors.name ? '#C0392B' : '#e0e0e0',
                color: '#333',
                backgroundColor: '#fff',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#1B4D3E')}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.name ? '#C0392B' : '#e0e0e0')
              }
            />
            {errors.name && (
              <span className="text-xs font-medium" style={{ color: '#C0392B' }}>
                {errors.name}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="patient-phone"
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1B4D3E' }}
            >
              Phone Number *
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
              className="px-4 py-3 rounded-xl border-2 text-base outline-none transition-all duration-200 focus:shadow-md"
              style={{
                borderColor: errors.phone ? '#C0392B' : '#e0e0e0',
                color: '#333',
                backgroundColor: '#fff',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#1B4D3E')}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.phone ? '#C0392B' : '#e0e0e0')
              }
            />
            {errors.phone && (
              <span className="text-xs font-medium" style={{ color: '#C0392B' }}>
                {errors.phone}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold text-base sm:text-lg tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
            style={{ backgroundColor: '#25D366' }}
          >
            {submitted ? (
              <>✅ Opening WhatsApp...</>
            ) : (
              <>Send via WhatsApp 💬</>
            )}
          </button>

          <p className="text-xs text-center" style={{ color: '#888' }}>
            You will be redirected to WhatsApp to complete your message.
          </p>
        </form>
      </div>
    </section>
  );
}
