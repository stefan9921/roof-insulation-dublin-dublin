import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroContactForm from "../../components/HeroContactForm";
import Breadcrumbs from "../../components/Breadcrumbs";
import { generateFAQSchema } from "../../components/SchemaMarkup";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const areasData: Record<string, {
  name: string; metaTitle: string; metaDesc: string;
  h1: string; heroImg: string; subtext: string;
  whyTitle: string; whyText: string[];
  stats: { value: string; label: string }[];
  localImg: string;
  testimonial: { text: string; name: string; location: string };
  faqs: { q: string; a: string }[];
}> = {
  drogheda: {
    name: "Drogheda",
    metaTitle: "Attic & Roof Insulation Drogheda | Local Insulation Experts",
    metaDesc: "Professional attic and roof insulation in Drogheda. Local service, SEAI approved. Free survey and quote. Call +35312308892.",
    h1: "Insulation Services in Drogheda",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-wVQEUo9Uv59ZhlndVMsJoku7RqyjUgbtiD7rIr6kPpmoi2UWrIbUB4j8cLQ_AJNoY5fO5GQnBfcuJYs_7Bdv16Cd3Sy3mI8YE4ivwMgVKrxCML21cMb-XpEcn7OWIDLg9aCKOEoZZt7Vt_-jYkTSXsURn0QadtQXbY4XwXm1DHefKmVB_pfGLkbKYVDxavsk6UIzNZvuxGwFJnhqL_SeEJOUfub3WLw5CtfC2tzMfs5bm2igyEYMpLVmKJ3Etgh254jBniEFlV8",
    subtext: "Professional thermal solutions for Drogheda homeowners. Save up to 40% on energy bills and access comprehensive SEAI grants today.",
    whyTitle: "Why Drogheda Homeowners Choose Us",
    whyText: [
      "With years of experience across County Louth, we understand the specific architectural needs of Drogheda's diverse housing stock—from heritage properties near the Boyne to modern developments.",
      "Our team specializes in significantly improving your home's BER rating, leading to an average reduction in energy consumption by over 30%.",
    ],
    stats: [{ value: "98%", label: "Client Satisfaction" }, { value: "€400+", label: "Avg. Annual Savings" }],
    localImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfTIJ7_eYXf0RMG1wm-uFK5g_lV-XH0lJ17yx-TjoesYzYx2BEdmZsxxtDWxxWAccip0bLnZHZKJtv1VDiB-P1zE6Al3_wUvksPgkfPikgqMDJrkub10R3j4Jwm53d_PFfp1dp6LD3yYPs4UWh1e3DxM4sD8oYYjp1L8MBLjQdQn8CSE6KiRXTfdm7M8cMyEPKfPO1HHRFojvxAW0flFsUsNAr9PD_eV-TPDoJUO75haMSs4MW9yYwMjbeAS6iBeaRuuM1gclAgE",
    testimonial: { text: "Excellent service from start to finish in Drogheda. The team was punctual, tidy, and our home felt noticeably warmer within 24 hours.", name: "Ciarán O'Reilly", location: "Grange Rath, Drogheda" },
    faqs: [
      { q: "How long does it take?", a: "Most attic insulation projects in Drogheda are completed in a single morning. External wall insulation typically takes 7-10 working days." },
      { q: "Can I get a grant in Louth?", a: "Yes! Residents in Drogheda and throughout Louth are eligible for SEAI Better Energy Home grants." },
      { q: "Will this help my BER rating?", a: "Absolutely. Many clients see their rating jump two full categories after a comprehensive treatment." },
      { q: "Do you cover all of Drogheda?", a: "Yes, we service every part of Drogheda from Tullyallen and Termonfeckin down to Julianstown and Bettystown." },
    ],
  },
  swords: {
    name: "Swords",
    metaTitle: "Attic & Roof Insulation Swords | Local Insulation Experts",
    metaDesc: "Expert attic and roof insulation services in Swords, Co. Dublin. Free quote and SEAI grant assistance.",
    h1: "Insulation Services in Swords",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-wVQEUo9Uv59ZhlndVMsJoku7RqyjUgbtiD7rIr6kPpmoi2UWrIbUB4j8cLQ_AJNoY5fO5GQnBfcuJYs_7Bdv16Cd3Sy3mI8YE4ivwMgVKrxCML21cMb-XpEcn7OWIDLg9aCKOEoZZt7Vt_-jYkTSXsURn0QadtQXbY4XwXm1DHefKmVB_pfGLkbKYVDxavsk6UIzNZvuxGwFJnhqL_SeEJOUfub3WLw5CtfC2tzMfs5bm2igyEYMpLVmKJ3Etgh254jBniEFlV8",
    subtext: "Professional insulation solutions for Swords homeowners. Reduce energy bills and improve home comfort with SEAI-approved contractors.",
    whyTitle: "Why Swords Homeowners Choose Us",
    whyText: [
      "Swords is one of the fastest-growing towns in Ireland, with a mix of new-build estates and established neighbourhoods. We understand the insulation needs of both.",
      "From Rivervalley to Holywell, our team has insulated hundreds of homes across Swords, delivering consistent quality and excellent customer satisfaction.",
    ],
    stats: [{ value: "500+", label: "Homes Insulated" }, { value: "€350+", label: "Avg. Annual Savings" }],
    localImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfTIJ7_eYXf0RMG1wm-uFK5g_lV-XH0lJ17yx-TjoesYzYx2BEdmZsxxtDWxxWAccip0bLnZHZKJtv1VDiB-P1zE6Al3_wUvksPgkfPikgqMDJrkub10R3j4Jwm53d_PFfp1dp6LD3yYPs4UWh1e3DxM4sD8oYYjp1L8MBLjQdQn8CSE6KiRXTfdm7M8cMyEPKfPO1HHRFojvxAW0flFsUsNAr9PD_eV-TPDoJUO75haMSs4MW9yYwMjbeAS6iBeaRuuM1gclAgE",
    testimonial: { text: "Brilliant work on our attic in Swords. The team were clean, efficient, and the house is noticeably warmer.", name: "Mark D.", location: "Swords, Co. Dublin" },
    faqs: [
      { q: "Do you serve all of Swords?", a: "Yes, we cover all areas of Swords including Rivervalley, Holywell, Boroimhe, Applewood, and surrounding estates." },
      { q: "How quickly can you start?", a: "We typically schedule surveys within a week and installations within 2-3 weeks of booking." },
      { q: "Are SEAI grants available?", a: "Yes, all Dublin residents including Swords are eligible for SEAI Better Energy Home grants." },
    ],
  },
  bray: {
    name: "Bray",
    metaTitle: "Attic & Roof Insulation Bray | Local Insulation Experts",
    metaDesc: "Professional attic and roof insulation in Bray, Co. Wicklow. Trusted local installers. Free survey available.",
    h1: "Insulation Services in Bray",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-wVQEUo9Uv59ZhlndVMsJoku7RqyjUgbtiD7rIr6kPpmoi2UWrIbUB4j8cLQ_AJNoY5fO5GQnBfcuJYs_7Bdv16Cd3Sy3mI8YE4ivwMgVKrxCML21cMb-XpEcn7OWIDLg9aCKOEoZZt7Vt_-jYkTSXsURn0QadtQXbY4XwXm1DHefKmVB_pfGLkbKYVDxavsk6UIzNZvuxGwFJnhqL_SeEJOUfub3WLw5CtfC2tzMfs5bm2igyEYMpLVmKJ3Etgh254jBniEFlV8",
    subtext: "Expert insulation services for Bray and North Wicklow homeowners. SEAI registered contractors with free surveys.",
    whyTitle: "Why Bray Homeowners Choose Us",
    whyText: [
      "Bray's coastal location means homes face unique challenges from wind and moisture. Proper insulation is essential for both warmth and protecting your property.",
      "We've worked extensively across Bray, from the seafront Victorian terraces to the newer estates in Southern Cross and Fassaroe.",
    ],
    stats: [{ value: "300+", label: "Bray Homes Done" }, { value: "30%", label: "Avg. Heat Loss Reduction" }],
    localImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfTIJ7_eYXf0RMG1wm-uFK5g_lV-XH0lJ17yx-TjoesYzYx2BEdmZsxxtDWxxWAccip0bLnZHZKJtv1VDiB-P1zE6Al3_wUvksPgkfPikgqMDJrkub10R3j4Jwm53d_PFfp1dp6LD3yYPs4UWh1e3DxM4sD8oYYjp1L8MBLjQdQn8CSE6KiRXTfdm7M8cMyEPKfPO1HHRFojvxAW0flFsUsNAr9PD_eV-TPDoJUO75haMSs4MW9yYwMjbeAS6iBeaRuuM1gclAgE",
    testimonial: { text: "Living by the sea in Bray, our house was always cold. The insulation made a massive difference to our comfort and bills.", name: "David R.", location: "Bray, Co. Wicklow" },
    faqs: [
      { q: "Do you cover North Wicklow?", a: "Yes, we serve Bray, Greystones, Enniskerry, Kilmacanogue, and all surrounding areas." },
      { q: "Are older Bray homes suitable?", a: "Absolutely. We have solutions for every type of property, from Victorian terraces to modern builds." },
      { q: "How do coastal conditions affect insulation?", a: "We use materials specifically suited to Bray's coastal environment, ensuring long-term performance despite moisture and wind exposure." },
    ],
  },
  navan: {
    name: "Navan",
    metaTitle: "Attic & Roof Insulation Navan | Local Insulation Experts",
    metaDesc: "Attic and roof insulation services in Navan, Co. Meath. SEAI registered. Get your free insulation quote today.",
    h1: "Insulation Services in Navan",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-wVQEUo9Uv59ZhlndVMsJoku7RqyjUgbtiD7rIr6kPpmoi2UWrIbUB4j8cLQ_AJNoY5fO5GQnBfcuJYs_7Bdv16Cd3Sy3mI8YE4ivwMgVKrxCML21cMb-XpEcn7OWIDLg9aCKOEoZZt7Vt_-jYkTSXsURn0QadtQXbY4XwXm1DHefKmVB_pfGLkbKYVDxavsk6UIzNZvuxGwFJnhqL_SeEJOUfub3WLw5CtfC2tzMfs5bm2igyEYMpLVmKJ3Etgh254jBniEFlV8",
    subtext: "Professional insulation services for Navan and Co. Meath homeowners. SEAI grant assistance included.",
    whyTitle: "Why Navan Homeowners Choose Us",
    whyText: [
      "Navan has seen significant residential growth over the past two decades. Many of these homes were built to minimum insulation standards that no longer meet today's energy efficiency expectations.",
      "We help Navan homeowners upgrade their insulation to modern standards, reducing energy bills and improving comfort year-round.",
    ],
    stats: [{ value: "200+", label: "Meath Homes Done" }, { value: "€380+", label: "Avg. Annual Savings" }],
    localImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfTIJ7_eYXf0RMG1wm-uFK5g_lV-XH0lJ17yx-TjoesYzYx2BEdmZsxxtDWxxWAccip0bLnZHZKJtv1VDiB-P1zE6Al3_wUvksPgkfPikgqMDJrkub10R3j4Jwm53d_PFfp1dp6LD3yYPs4UWh1e3DxM4sD8oYYjp1L8MBLjQdQn8CSE6KiRXTfdm7M8cMyEPKfPO1HHRFojvxAW0flFsUsNAr9PD_eV-TPDoJUO75haMSs4MW9yYwMjbeAS6iBeaRuuM1gclAgE",
    testimonial: { text: "Great service in Navan. Professional team and the house is so much warmer now. Highly recommend.", name: "Aoife K.", location: "Navan, Co. Meath" },
    faqs: [
      { q: "Do you cover all of Co. Meath?", a: "Yes, we serve Navan, Trim, Kells, Ashbourne, Dunshaughlin, and all surrounding areas in Meath." },
      { q: "Are there grants for Meath residents?", a: "Yes, SEAI grants are available nationwide. We'll help you with the entire application process." },
      { q: "How long does the work take?", a: "Attic insulation is typically done in a morning. Wall insulation takes 1-2 weeks depending on the property." },
    ],
  },
  mullingar: {
    name: "Mullingar",
    metaTitle: "Attic & Roof Insulation Mullingar | Local Insulation Experts",
    metaDesc: "Reliable attic and roof insulation in Mullingar, Co. Westmeath. Energy-efficient solutions with SEAI grant support.",
    h1: "Insulation Services in Mullingar",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-wVQEUo9Uv59ZhlndVMsJoku7RqyjUgbtiD7rIr6kPpmoi2UWrIbUB4j8cLQ_AJNoY5fO5GQnBfcuJYs_7Bdv16Cd3Sy3mI8YE4ivwMgVKrxCML21cMb-XpEcn7OWIDLg9aCKOEoZZt7Vt_-jYkTSXsURn0QadtQXbY4XwXm1DHefKmVB_pfGLkbKYVDxavsk6UIzNZvuxGwFJnhqL_SeEJOUfub3WLw5CtfC2tzMfs5bm2igyEYMpLVmKJ3Etgh254jBniEFlV8",
    subtext: "Expert insulation solutions for Mullingar and Westmeath homeowners. Free surveys and SEAI grant assistance.",
    whyTitle: "Why Mullingar Homeowners Choose Us",
    whyText: [
      "Mullingar's inland location means colder winters and higher heating demands. Proper insulation is one of the best investments you can make for your Westmeath home.",
      "Our experienced team has worked on properties throughout Mullingar and the wider Midlands, from period farmhouses to modern estates.",
    ],
    stats: [{ value: "150+", label: "Westmeath Homes" }, { value: "€420+", label: "Avg. Annual Savings" }],
    localImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfTIJ7_eYXf0RMG1wm-uFK5g_lV-XH0lJ17yx-TjoesYzYx2BEdmZsxxtDWxxWAccip0bLnZHZKJtv1VDiB-P1zE6Al3_wUvksPgkfPikgqMDJrkub10R3j4Jwm53d_PFfp1dp6LD3yYPs4UWh1e3DxM4sD8oYYjp1L8MBLjQdQn8CSE6KiRXTfdm7M8cMyEPKfPO1HHRFojvxAW0flFsUsNAr9PD_eV-TPDoJUO75haMSs4MW9yYwMjbeAS6iBeaRuuM1gclAgE",
    testimonial: { text: "The insulation has transformed our old farmhouse near Mullingar. So much warmer and our oil bills have dropped significantly.", name: "Padraig M.", location: "Mullingar, Co. Westmeath" },
    faqs: [
      { q: "Do you travel to Mullingar?", a: "Yes! We regularly service Mullingar and all of Co. Westmeath. Travel is included in our quotes." },
      { q: "What about older rural homes?", a: "We have extensive experience with older Irish homes and farmhouses. We'll recommend the best solution for your property type." },
      { q: "Are grants available in Westmeath?", a: "Yes, SEAI grants are available to all Irish homeowners regardless of county. We handle the paperwork for you." },
    ],
  },
};

const otherAreas = ["drogheda", "swords", "bray", "navan", "mullingar"];

export function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({ slug }));
}

const baseUrl = "https://roof-insulation-dublin-dublin.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = areasData[slug];
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDesc,
    openGraph: {
      title: a.metaTitle,
      description: a.metaDesc,
      url: `${baseUrl}/areas/${slug}`,
      type: "website",
    },
    alternates: { canonical: `${baseUrl}/areas/${slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areasData[slug];
  if (!a) notFound();

  const faqSchema = generateFAQSchema(a.faqs.map(f => ({ q: f.q, a: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt={`Modern home in ${a.name}`} className="w-full h-full object-cover" src={a.heroImg} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1c]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-sm uppercase tracking-wider">
                Serving {a.name} &amp; Surrounding Areas
              </span>
              <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-white leading-[1.1] tracking-tight">
                {a.h1}
              </h1>
              <p className="text-lg text-zinc-200 max-w-lg leading-relaxed font-light">{a.subtext}</p>
            </div>
            <div className="hidden lg:block">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Areas", href: "/areas" }, { name: a.name, href: `/areas/${slug}` }]} />

      {/* Local Info */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface">{a.whyTitle}</h2>
              <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
                {a.whyText.map((p, i) => <p key={i}>{p}</p>)}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {a.stats.map((s) => (
                    <div key={s.label} className="bg-[#f3f3f3] p-6 rounded-xl">
                      <span className="block text-3xl font-bold text-primary mb-1">{s.value}</span>
                      <span className="text-sm font-medium uppercase tracking-wide">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-tertiary-fixed/30 rounded-[2rem] -rotate-2"></div>
              <img alt={`${a.name} residential area`} className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" src={a.localImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface">Our Services in {a.name}</h2>
            <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "roofing", title: "Attic Insulation", slug: "attic-insulation", desc: "High-performance mineral wool and spray foam solutions designed to trap rising heat." },
              { icon: "foundation", title: "External Wall Insulation", slug: "external-wall-insulation", desc: "Premium thermal boards applied to the exterior of your home." },
              { icon: "layers", title: "Cavity Wall Insulation", slug: "cavity-wall-insulation", desc: "Precision bead insulation injection technology that fills empty wall cavities." },
            ].map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{svc.icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{svc.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 grow">{svc.desc}</p>
                <span className="inline-flex items-center text-primary-container font-bold hover:gap-2 transition-all">
                  Learn More <span className="material-symbols-outlined ml-1">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-surface overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <span className="material-symbols-outlined text-[15rem]">format_quote</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 text-primary mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <blockquote className="text-3xl font-headline font-bold text-on-surface mb-8 leading-tight italic">
            &ldquo;{a.testimonial.text}&rdquo;
          </blockquote>
          <cite className="not-italic">
            <span className="block text-xl font-bold text-on-surface">{a.testimonial.name}</span>
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">{a.testimonial.location}</span>
          </cite>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#f3f3f3]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-16">Insulation FAQs for {a.name}</h2>
          <div className="space-y-4">
            {a.faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl overflow-hidden border border-outline-variant/10">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#e8e8e8] transition-colors">
                  <span className="text-lg font-bold text-on-surface">{faq.q}</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary-container rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">Ready to Upgrade Your {a.name} Home?</h2>
              <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
                Join hundreds of families who are already saving money and staying warmer.
              </p>
              <Link href="/contact" className="bg-white text-primary font-extrabold px-10 py-4 rounded-xl text-lg hover:scale-105 transition-all shadow-lg active:scale-95 inline-block">
                Request a Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl font-headline font-extrabold text-on-surface shrink-0">Other Areas We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otherAreas.filter((s) => s !== slug).map((s) => (
                <Link key={s} href={`/areas/${s}`} className="px-6 py-3 rounded-full bg-[#e8e8e8] text-on-surface font-medium hover:bg-primary-container hover:text-white transition-all">
                  {areasData[s]?.name || s}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
