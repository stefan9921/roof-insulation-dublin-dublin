"use client";

export default function HeroContactForm() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
      <h3 className="text-xl font-headline font-extrabold text-on-surface mb-1">Get Your Free Quote</h3>
      <p className="text-sm text-on-surface-variant mb-5">Free survey &amp; no obligation estimate</p>
      <form className="space-y-4">
        <div>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Full Name" />
        </div>
        <div>
          <input type="tel" className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Phone Number" />
        </div>
        <div>
          <input type="email" className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all text-sm" placeholder="Email Address" />
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
