import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve | Insulation Services Across Dublin & Ireland",
  description: "Professional insulation services across Dublin and surrounding areas. Drogheda, Swords, Bray, Navan, Mullingar and more. Free survey & quote.",
};

const areas = [
  {
    slug: "drogheda",
    name: "Drogheda",
    county: "Co. Louth",
    desc: "Covering all of Drogheda from Tullyallen and Termonfeckin to Julianstown and Bettystown. Expert insulation for County Louth homes.",
    stat: "98% Client Satisfaction",
  },
  {
    slug: "swords",
    name: "Swords",
    county: "Co. Dublin",
    desc: "From Rivervalley to Holywell, we've insulated hundreds of homes across Swords. Solutions for both new-builds and established neighbourhoods.",
    stat: "500+ Homes Insulated",
  },
  {
    slug: "bray",
    name: "Bray",
    county: "Co. Wicklow",
    desc: "Serving Bray and surrounding areas with professional insulation services. From seafront properties to homes in the Wicklow hills.",
    stat: "Local Expert Team",
  },
  {
    slug: "navan",
    name: "Navan",
    county: "Co. Meath",
    desc: "Professional insulation services for Navan and County Meath homeowners. Improving comfort and energy efficiency across the Royal County.",
    stat: "€400+ Avg. Annual Savings",
  },
  {
    slug: "mullingar",
    name: "Mullingar",
    county: "Co. Westmeath",
    desc: "Bringing Dublin-quality insulation services to Mullingar and the Midlands. Full SEAI grant assistance included.",
    stat: "Midlands Coverage",
  },
];

export default function AreasHub() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-on-surface py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-white tracking-tighter mb-6">
              Areas We Serve
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional insulation services across Dublin and surrounding counties. Local teams, local knowledge, nationwide standards.
            </p>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-24 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border border-outline-variant/10 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        location_on
                      </span>
                    </div>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                      arrow_forward
                    </span>
                  </div>
                  <h2 className="text-2xl font-headline font-bold mb-1">{area.name}</h2>
                  <p className="text-sm text-primary font-semibold mb-4">{area.county}</p>
                  <p className="text-on-surface-variant mb-6 flex-grow">{area.desc}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                    <span className="text-sm font-bold text-on-surface">{area.stat}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container py-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-headline font-extrabold mb-4">Don&apos;t See Your Area?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We cover all of Dublin and surrounding counties. Get in touch and we&apos;ll confirm coverage for your location.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary font-bold px-12 py-5 rounded-lg text-xl hover:bg-[#f9f9f9] transition-colors shadow-2xl inline-block"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
