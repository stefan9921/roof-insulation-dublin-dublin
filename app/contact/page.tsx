"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 bg-pale-sage">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-headline font-extrabold text-on-surface mb-6">Contact Us</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">Get in touch for a free insulation survey and quote. We&apos;re here to help you save energy and money.</p>
          </div>
        </section>

        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-primary-container text-7xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <h2 className="text-3xl font-headline font-extrabold text-on-surface">Thank You!</h2>
                  <p className="text-lg text-on-surface-variant max-w-md mx-auto">Your message has been sent successfully. We&apos;ll get back to you within 24 hours with your free quote.</p>
                  <p className="text-on-surface-variant">Need urgent help? Call <a href="tel:+35312308892" className="font-bold text-primary hover:underline">+353 1 230 8892</a></p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-primary font-bold hover:underline">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-8">Send Us a Message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">Full Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">Phone Number</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all" placeholder="+353 1 234 5678" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">Service Interested In</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all">
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
                      <label className="block text-sm font-bold text-on-surface mb-2">Message</label>
                      <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" className="bg-primary-container text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all active:scale-95">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">phone</span>
                  <div>
                    <h3 className="font-bold text-on-surface">Phone</h3>
                    <a href="tel:+35312308892" className="text-on-surface-variant hover:text-primary-container transition-colors">+353 1 230 8892</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">mail</span>
                  <div>
                    <h3 className="font-bold text-on-surface">Email</h3>
                    <p className="text-on-surface-variant">info@roofinsulationdublin.ie</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">location_on</span>
                  <div>
                    <h3 className="font-bold text-on-surface">Address</h3>
                    <p className="text-on-surface-variant">77 Sir John Rogerson&apos;s Quay,<br />Grand Canal Dock, Dublin 2,<br />D02 VK60</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">schedule</span>
                  <div>
                    <h3 className="font-bold text-on-surface">Opening Hours</h3>
                    <p className="text-on-surface-variant">Mon-Fri: 8am - 6pm<br />Sat: 9am - 1pm<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
