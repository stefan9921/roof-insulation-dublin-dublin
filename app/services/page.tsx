import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Insulation Services | Dublin's Leading Insulation Experts",
  description: "Professional insulation services in Dublin. Attic, roof, spray foam, external wall, cavity wall insulation and SEAI grant assistance. Free survey & quote.",
};

const services = [
  {
    slug: "attic-insulation",
    title: "Attic Insulation",
    icon: "roofing",
    desc: "Up to 30% of your home's heat escapes through an uninsulated roof. Our attic insulation solutions use premium mineral wool and spray foam to create a high-performance thermal envelope.",
    benefits: ["Reduce heat loss by up to 30%", "SEAI grants available", "Quick installation"],
  },
  {
    slug: "roof-insulation",
    title: "Roof Insulation",
    icon: "home",
    desc: "Rafter-level insulation for converted attics, vaulted ceilings, and rooms-in-roof constructions where traditional loft insulation isn't suitable.",
    benefits: ["Ideal for converted attics", "Maintains room height", "Superior thermal performance"],
  },
  {
    slug: "spray-foam-insulation",
    title: "Spray Foam Insulation",
    icon: "heat_pump",
    desc: "The highest R-value per inch of any insulation type. Expands to fill every gap, crack, and cavity, creating a completely airtight thermal barrier.",
    benefits: ["Highest R-value per inch", "Airtight seal", "Lasts 50+ years"],
  },
  {
    slug: "external-wall-insulation",
    title: "External Wall Insulation",
    icon: "foundation",
    desc: "Wraps your home in a thermal blanket while giving it a fresh, modern appearance. The most effective solution for older homes without cavity walls.",
    benefits: ["Eliminates thermal bridging", "Fresh exterior finish", "Generous SEAI grants"],
  },
  {
    slug: "cavity-wall-insulation",
    title: "Cavity Wall Insulation",
    icon: "layers",
    desc: "One of the quickest wins for energy efficiency. Our bead injection system fills every void completely, and the whole process takes just a few hours.",
    benefits: ["Completed in hours", "No internal disruption", "Immediate warmth improvement"],
  },
  {
    slug: "home-insulation",
    title: "Home Insulation & Grants",
    icon: "euro_symbol",
    desc: "A whole-home approach delivers the best results. We help Dublin homeowners navigate SEAI Better Energy Home grants for maximum financial support.",
    benefits: ["Whole-home approach", "Maximum grant assistance", "Best overall savings"],
  },
];

export default function ServicesHub() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-on-surface py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-white tracking-tighter mb-6">
              Our Insulation Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From attic to walls, we offer complete insulation solutions for Dublin homes. All services are SEAI grant eligible.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border border-outline-variant/10 flex flex-col"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {service.icon}
                    </span>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                      arrow_forward
                    </span>
                  </div>
                  <h2 className="text-2xl font-headline font-bold mb-3">{service.title}</h2>
                  <p className="text-on-surface-variant mb-6 flex-grow">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container py-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-headline font-extrabold mb-4">Not Sure Which Insulation You Need?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free home survey and we&apos;ll recommend the best solution for your property.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary font-bold px-12 py-5 rounded-lg text-xl hover:bg-[#f9f9f9] transition-colors shadow-2xl inline-block"
            >
              Book Your Free Survey
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
