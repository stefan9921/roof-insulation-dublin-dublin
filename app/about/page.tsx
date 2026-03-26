import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Roof Insulation Dublin | Your Trusted Insulation Partner",
  description: "Learn about Roof Insulation Dublin — experienced insulation contractors serving Dublin and surrounding areas. SEAI registered.",
  openGraph: {
    title: "About Roof Insulation Dublin | Your Trusted Insulation Partner",
    description: "Learn about Roof Insulation Dublin — experienced insulation contractors serving Dublin and surrounding areas. SEAI registered.",
    url: "https://roofinsulationdublin.ie/about",
    type: "website",
  },
  alternates: { canonical: "https://roofinsulationdublin.ie/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />
        <section className="py-24 bg-pale-sage">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold text-sm mb-6">
                <span className="material-symbols-outlined text-sm mr-2">info</span> ABOUT US
              </span>
              <h1 className="text-5xl font-headline font-extrabold text-on-surface mb-6">About Roof Insulation Dublin</h1>
              <p className="text-xl text-on-surface-variant leading-relaxed">Dublin&apos;s trusted insulation specialists, dedicated to making Irish homes warmer, more energy-efficient, and more comfortable.</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface">Our Story</h2>
              <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
                <p>Roof Insulation Dublin was founded with a simple mission: to help Irish homeowners reduce their energy bills and live more comfortably through professional insulation solutions. We saw too many Dublin families paying sky-high heating bills because their homes were leaking heat through uninsulated attics, walls, and roofs.</p>
                <p>With over 10 years of experience, our SEAI-registered team has insulated thousands of homes across Dublin and surrounding counties. We specialise in <Link href="/services/attic-insulation" className="text-primary font-semibold underline">attic insulation</Link>, <Link href="/services/roof-insulation" className="text-primary font-semibold underline">roof insulation</Link>, <Link href="/services/spray-foam-insulation" className="text-primary font-semibold underline">spray foam insulation</Link>, <Link href="/services/external-wall-insulation" className="text-primary font-semibold underline">external wall insulation</Link>, and <Link href="/services/cavity-wall-insulation" className="text-primary font-semibold underline">cavity wall insulation</Link>.</p>
                <p>We take pride in our workmanship, our customer service, and our commitment to using only the highest-quality, sustainably sourced materials. Every project starts with a free home survey where we identify heat loss areas and recommend the most cost-effective solutions for your property.</p>
                <p>As SEAI Registered Contractors, we handle all the <Link href="/services/home-insulation" className="text-primary font-semibold underline">grant paperwork</Link> for you, ensuring you receive the maximum SEAI funding available. From our base at 77 Sir John Rogerson&apos;s Quay in Dublin 2, we serve the entire Greater Dublin Area including <Link href="/areas/drogheda" className="text-primary font-semibold underline">Drogheda</Link>, <Link href="/areas/swords" className="text-primary font-semibold underline">Swords</Link>, <Link href="/areas/bray" className="text-primary font-semibold underline">Bray</Link>, <Link href="/areas/navan" className="text-primary font-semibold underline">Navan</Link>, and <Link href="/areas/mullingar" className="text-primary font-semibold underline">Mullingar</Link>.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img alt="Our team at work" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4mfKSF51OEjRi9y6mAT2Gnr9wAwHUEUWZKQC_LGLCK1S2-12F3mfmw6QTvHWNv5NOB838Z4d5TEjyeBAfJ9YwoCvlXXo4lLywJDM5oNXom0xmcUOrVa5fUL3l_CmE7PtgI1ClQq5QoKmSNrd9YH-re8mW31JDOhvB-Pnqkj7Wzt7jz7Wt_SvumGA7ilMk4cJezithS9CzqH-hhwtVQk-W6igDcLZiWQNHcjDULPeXpCHUJJKjGH7M0nK60Usqslvr3iSd6U-dqOk" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-16">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "award_star", title: "SEAI Registered", desc: "Fully registered and approved SEAI contractors." },
                { icon: "groups", title: "Expert Team", desc: "Trained professionals with years of experience." },
                { icon: "workspace_premium", title: "Quality Materials", desc: "Only the best insulation products on the market." },
                { icon: "handshake", title: "Customer First", desc: "Transparent pricing and exceptional aftercare." },
              ].map((item) => (
                <div key={item.title} className="text-center space-y-4">
                  <span className="material-symbols-outlined text-5xl text-primary-container">{item.icon}</span>
                  <h3 className="text-xl font-bold text-on-surface">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-6">Our Values</h2>
            <p className="text-center text-on-surface-variant text-lg max-w-2xl mx-auto mb-16">Every decision we make is guided by these core principles.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "eco", title: "Sustainability", desc: "We use eco-friendly, sustainably sourced insulation materials that reduce carbon emissions and help Ireland meet its climate goals. A well-insulated home is a greener home." },
                { icon: "precision_manufacturing", title: "Precision", desc: "Every installation is carried out to the highest standards. We measure, assess, and install with meticulous attention to detail, ensuring maximum thermal performance." },
                { icon: "volunteer_activism", title: "Community", desc: "We're proud to serve communities across Dublin and beyond. We believe every family deserves a warm, energy-efficient home, and we work hard to make insulation accessible through SEAI grant assistance." },
              ].map((v) => (
                <div key={v.title} className="bg-surface p-8 rounded-2xl space-y-4 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-5xl text-primary-container">{v.icon}</span>
                  <h3 className="text-xl font-bold text-on-surface">{v.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-container py-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8">Ready to Work With Us?</h2>
            <Link href="/contact" className="bg-white text-primary font-bold px-12 py-5 rounded-lg text-xl hover:bg-[#f9f9f9] transition-colors shadow-2xl inline-block">
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
