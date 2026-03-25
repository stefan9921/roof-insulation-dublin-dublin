"use client";
import { useState, FormEvent } from "react";

export default function HeroContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 text-center">
        <div className="py-8 space-y-4">
          <span className="material-symbols-outlined text-primary-container text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <h3 className="text-2xl font-headline font-extrabold text-on-surface">Thank You!</h3>
          <p className="text-on-surface-variant">Your message has been sent successfully. We&apos;ll get back to you within 24 hours with your free quote.</p>
          <p className="text-sm text-on-surface-variant">Need urgent help? Call <a href="tel:+35312308892" className="font-bold text-primary hover:underline">+353 1 230 8892</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
      <h3 className="text-xl font-headline font-extrabold text-on-surface mb-1">Get Your Free Quote</h3>
      <p className="text-sm text-on-surface-variant mb-5">Free survey &amp; no obligation estimate</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Full Name" />
        </div>
        <div>
          <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Phone Number" />
        </div>
        <div>
          <input type="email" required className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Email Address" />
        </div>
        <div>
          <select className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm">
            <option value="">Select Service...</option>
            <option>Attic Insulation</option>
            <option>Roof Insulation</option>
            <option>Spray Foam Insulation</option>
            <option>External Wall Insulation</option>
            <option>Cavity Wall Insulation</option>
            <option>Home Insulation &amp; Grants</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Tell us about your project..."></textarea>
        </div>
        <button type="submit" className="w-full bg-primary-container text-white px-6 py-3.5 rounded-lg font-bold text-base hover:shadow-xl transition-all active:scale-[0.98]">
          Get Free Quote →
        </button>
      </form>
      <p className="text-xs text-on-surface-variant text-center mt-3">Or call <a href="tel:+35312308892" className="font-bold text-primary hover:underline">+353 1 230 8892</a></p>
    </div>
  );
}
