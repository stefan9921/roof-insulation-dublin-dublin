import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attic & Roof Insulation Dublin | Expert Installers | Free Quote",
  description: "Leading attic and roof insulation specialists in Dublin. SEAI grant approved. Get a free quote for loft, attic & roof insulation. Call +35312308892.",
};

const services = [
  { icon: "roofing", title: "Attic Insulation", desc: "Expertly rolled or blown insulation to stop heat rising out through your ceiling.", slug: "attic-insulation" },
  { icon: "home_repair_service", title: "Roof Insulation", desc: "Rafter-level insulation solutions for converted attics or vaulted ceilings.", slug: "roof-insulation" },
  { icon: "heat_pump", title: "Spray Foam Insulation", desc: "High-performance airtight seal for complex spaces and maximum thermal retention.", slug: "spray-foam-insulation" },
  { icon: "foundation", title: "External Wall Insulation", desc: "The \"wrap\" method to protect and insulate your home's exterior walls effectively.", slug: "external-wall-insulation" },
  { icon: "layers", title: "Cavity Wall Insulation", desc: "Bead injection systems to fill the gaps in your home's masonry walls.", slug: "cavity-wall-insulation" },
  { icon: "euro_symbol", title: "Home Insulation & Grants", desc: "Full SEAI grant assistance to help cover the costs of your home upgrade.", slug: "home-insulation" },
];

const areas = [
  { name: "Dublin", slug: null },
  { name: "Drogheda", slug: "drogheda" },
  { name: "Swords", slug: "swords" },
  { name: "Bray", slug: "bray" },
  { name: "Navan", slug: "navan" },
  { name: "Mullingar", slug: "mullingar" },
];

const testimonials = [
  { text: "The difference in temperature was immediate. Professional crew and they even helped with the SEAI grant paperwork.", name: "John M.", location: "Swords, Dublin" },
  { text: "Fast service and very clean. My attic looks amazing and the house feels much more solid. Highly recommend.", name: "Sarah O'B.", location: "Drogheda" },
  { text: "Very informative survey and the quote was very competitive. The energy bill savings are already showing!", name: "David R.", location: "Bray" },
];

const faqs = [
  "How long does an attic insulation installation take?",
  "Can I still use my attic for storage?",
  "What SEAI grants are available for insulation?",
  "Does your company handle the grant paperwork?",
  "What is the life expectancy of the insulation?",
];

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-pale-sage">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold text-sm">
              <span className="material-symbols-outlined text-sm">verified</span>
              SEAI GRANT APPROVED SPECIALISTS
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Professional Attic &amp; Roof Insulation in Dublin
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              SEAI grant approved specialists. Reduce heat loss by up to 30% and save on energy bills with Dublin&apos;s leading insulation experts.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2">
                Get Your Free Quote
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="tel:+35312308892" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all">
                Call Us Today
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img alt="Attic insulation installation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGyhiTIMv6DcNKye4Jn8uGPyht6UyUoqdnPGQ7-XnyYUQeXmtSVUN7-bezIMN9cvS5eAFIjoXdRk9JkdNHTdvVug24X01I73q0ij0UvS5nJ4uW2oAMScrjJBtk2_Hvl5ZIvkO30niAIkzwJN-P9zN7BmuQYZYP9-xadVk2rfpfh8QXWoQS3OYdQC284naKWn0jr75pIlRJ3rTcz_TIZqdcC2_fvY6knvvMpD9nQI-WsyylKytB_TfcZ4_f1dWtNRTG3XfDX2jTj8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">energy_savings_leaf</span>
              </div>
              <div>
                <p className="text-on-surface font-bold">Save up to 30%</p>
                <p className="text-sm text-on-surface-variant">On annual heating bills</p>
              </div>
            </div>
          </div>
        </div>
        {/* Trust Badges */}
        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "award_star", text: "SEAI Approved" },
              { icon: "calendar_today", text: "10+ Years Experience" },
              { icon: "request_quote", text: "Free Survey & Quote" },
              { icon: "map", text: "Full Dublin Coverage" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-4 bg-white/50 backdrop-blur p-4 rounded-xl border border-white/20">
                <span className="material-symbols-outlined text-primary-container text-3xl">{b.icon}</span>
                <span className="font-bold text-on-surface">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface">Our Insulation Services</h2>
            <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug} className="group bg-surface p-8 rounded-2xl hover:bg-surface-container-low transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-6 block">{s.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-on-surface">{s.title}</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center text-primary-container font-bold group-hover:gap-2 transition-all">
                  Learn More <span className="material-symbols-outlined ml-1">chevron_right</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface">Why Choose Roof Insulation Dublin?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">We combine technical expertise with local Dublin knowledge to provide the most efficient thermal solutions for Irish homes.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  { icon: "check_circle", title: "Certified Professionals", desc: "Fully trained and registered installers ensuring peak performance." },
                  { icon: "savings", title: "SEAI Grant Assistance", desc: "We handle the paperwork to get you the maximum funding available." },
                  { icon: "verified_user", title: "Premium Materials", desc: "Using only the highest-rated sustainable insulation products." },
                  { icon: "thumb_up", title: "Guaranteed Workmanship", desc: "All our installations come with a comprehensive quality guarantee." },
                ].map((item) => (
                  <div key={item.title} className="space-y-3">
                    <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img alt="Modern insulated home" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4mfKSF51OEjRi9y6mAT2Gnr9wAwHUEUWZKQC_LGLCK1S2-12F3mfmw6QTvHWNv5NOB838Z4d5TEjyeBAfJ9YwoCvlXXo4lLywJDM5oNXom0xmcUOrVa5fUL3l_CmE7PtgI1ClQq5QoKmSNrd9YH-re8mW31JDOhvB-Pnqkj7Wzt7jz7Wt_SvumGA7ilMk4cJezithS9CzqH-hhwtVQk-W6igDcLZiWQNHcjDULPeXpCHUJJKjGH7M0nK60Usqslvr3iSd6U-dqOk" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-12">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((a) => (
              a.slug ? (
                <Link key={a.name} href={`/areas/${a.slug}`} className="px-8 py-3 bg-surface-container text-on-surface-variant rounded-full font-bold hover:bg-secondary-container transition-colors">
                  {a.name}
                </Link>
              ) : (
                <span key={a.name} className="px-8 py-3 bg-secondary-container text-on-secondary-container rounded-full font-bold shadow-sm">
                  {a.name}
                </span>
              )
            ))}
          </div>
          <div className="mt-12 text-on-surface-variant flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">location_on</span>
            And surrounding areas across the Greater Dublin Area
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-pale-sage">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
                <div className="flex text-primary-container">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-bold text-on-surface">{t.name}</p>
                    <p className="text-xs text-on-surface-variant">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white text-center md:text-left">
              Ready to Insulate Your Home?
            </h2>
            <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-primary-container transition-all shadow-xl">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((q) => (
              <div key={q} className="bg-surface rounded-xl border border-outline-variant/20 overflow-hidden">
                <button className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-on-surface">
                  {q}
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
