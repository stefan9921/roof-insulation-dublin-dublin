import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroContactForm from "../../components/HeroContactForm";
import Breadcrumbs from "../../components/Breadcrumbs";
import { generateServiceSchema, generateFAQSchema } from "../../components/SchemaMarkup";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const baseUrl = "https://roofinsulationdublin.ie";

const servicesData: Record<string, {
  title: string; h1: string; metaTitle: string; metaDesc: string;
  heroImg: string; heroAlt: string;
  intro: string[]; benefits: string[];
  contentHtml: string;
  costTable?: { size: string; cost: string; grant: string; net: string }[];
  faqs: { q: string; a: string }[];
  otherServices: { icon: string; title: string; slug: string; desc: string }[];
}> = {
  "attic-insulation": {
    title: "Attic Insulation",
    h1: "Attic Insulation Services in Dublin",
    metaTitle: "Attic Insulation Dublin | Cost, Grants & Expert Installation",
    metaDesc: "Professional attic insulation in Dublin. SEAI grants available. Reduce heat loss by up to 30%. Free survey & quote.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIAAF6pMBb25joef8qhmI9autFEWVCZ154qZWR8wDbiDx2nIPi2y-hjV41pfWMqvD9OhLSzg7Kc0avn0UH8luga_tdwInGCFjGtGFvBJQxl3-GjuggX8JmoG0IwLOHvU7SjXiaLLLJdpG3vb9Hb-sRJRjd9dCeT_kk4Gvgt-oGMjONSdOU6qr5i9J9CcbCLPNy_VX45UXzBu-zGH1nzk1RmO-mP6BZFudXpRzRkO2Vnl3ihETiVr0ZL5IabjHiBArT4biUCAR4G1U",
    heroAlt: "Attic insulation installation",
    intro: [
      "Did you know that up to 30% of your home's heat can escape through an uninsulated roof? It's like leaving a window wide open all winter. In Dublin's damp climate, proper insulation isn't just about warmth—it's about protecting your home's structural integrity.",
      "Our premium mineral wool and spray foam solutions create a high-performance thermal envelope, trapping heat where it belongs: inside your living space."
    ],
    benefits: ["Reduce Heat Loss (Up to 30%)", "Lower Energy Bills Permanently", "Quick & Clean Installation", "SEAI Grants Available"],
    contentHtml: `<h2>Attic Insulation for Dublin Homes</h2>
<p>Most Dublin homes lose a significant amount of heat through the roof. Whether you live in a period terrace in the city centre or a modern semi-detached in <a href="/areas/swords">Swords</a> or <a href="/areas/bray">Bray</a>, attic insulation is typically the single most cost-effective energy upgrade you can make.</p>
<p>We use two main methods: mineral wool rolls for standard loft spaces, and <a href="/services/spray-foam-insulation">spray foam insulation</a> for irregular shapes, converted attics, or where an airtight seal is needed. Both are installed by our SEAI-registered team with minimal disruption to your day.</p>
<p>For the best results, we recommend combining attic insulation with <a href="/services/cavity-wall-insulation">cavity wall insulation</a> or <a href="/services/external-wall-insulation">external wall insulation</a>. A whole-house approach can cut your heating bills by 40-60%—read more on our <a href="/services/home-insulation">home insulation & grants</a> page.</p>
<p>We serve all areas across Dublin and beyond, including <a href="/areas/drogheda">Drogheda</a>, <a href="/areas/navan">Navan</a>, and <a href="/areas/mullingar">Mullingar</a>. <a href="/contact">Get a free quote</a> today.</p>`,
    costTable: [
      { size: "Small Terraced House", cost: "€1,100", grant: "€800", net: "€300" },
      { size: "Semi-Detached", cost: "€1,800", grant: "€1,200", net: "€600" },
      { size: "Large Detached", cost: "€2,400", grant: "€1,500", net: "€900" },
    ],
    faqs: [
      { q: "How long does attic insulation last?", a: "High-quality mineral wool and fiberglass insulation can last 80 to 100 years. However, we recommend a check-up every 15-20 years to ensure settling hasn't reduced its thermal efficiency." },
      { q: "What is the best material for my attic?", a: "It depends on your attic's usage. For standard lofts, roll-out mineral wool is cost-effective. For complex shapes or drafty areas, spray foam provides a superior airtight seal." },
      { q: "Can I still use my attic for storage?", a: "Yes! We can install \"raised flooring\" or attic stilts that sit above the insulation layers, allowing you to store items without compressing the materials." },
      { q: "How much can I save on bills?", a: "The average Dublin household saves between 20% and 30% on their annual heating costs. Most homeowners see the installation pay for itself through energy savings within 3-5 years." },
      { q: "How do I apply for the SEAI grant?", a: "As SEAI Registered Contractors, we handle the technical paperwork for you. You can apply through the SEAI website, and we provide the required BER assessments and certification upon completion." },
    ],
    otherServices: [
      { icon: "roofing", title: "Roof Insulation", slug: "roof-insulation", desc: "Targeted insulation solutions directly under the roof membrane." },
      { icon: "heat_pump", title: "Spray Foam Insulation", slug: "spray-foam-insulation", desc: "Advanced airtight sealing for irregular spaces and hard-to-reach areas." },
      { icon: "layers", title: "Cavity Wall Insulation", slug: "cavity-wall-insulation", desc: "Reducing heat loss through your external walls for whole-home comfort." },
    ],
  },
  "roof-insulation": {
    title: "Roof Insulation",
    h1: "Roof Insulation Services in Dublin",
    metaTitle: "Roof Insulation Dublin & Ireland | Professional Installers",
    metaDesc: "Expert roof insulation services across Dublin and Ireland. Reduce energy bills and improve comfort. Free quote available.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGyhiTIMv6DcNKye4Jn8uGPyht6UyUoqdnPGQ7-XnyYUQeXmtSVUN7-bezIMN9cvS5eAFIjoXdRk9JkdNHTdvVug24X01I73q0ij0UvS5nJ4uW2oAMScrjJBtk2_Hvl5ZIvkO30niAIkzwJN-P9zN7BmuQYZYP9-xadVk2rfpfh8QXWoQS3OYdQC284naKWn0jr75pIlRJ3rTcz_TIZqdcC2_fvY6knvvMpD9nQI-WsyylKytB_TfcZ4_f1dWtNRTG3XfDX2jTj8",
    heroAlt: "Roof insulation installation",
    intro: [
      "Your roof is the first line of defence against Ireland's unpredictable weather. Without proper insulation at rafter level, you're losing valuable heat and paying more than you need to.",
      "Our rafter-level insulation solutions are ideal for converted attics, vaulted ceilings, and rooms-in-roof constructions where traditional loft insulation isn't suitable."
    ],
    benefits: ["Ideal for Converted Attics", "Maintains Room Height", "Superior Thermal Performance", "SEAI Grant Eligible"],
    contentHtml: `<h2>Roof Insulation for Dublin Properties</h2>
<p>Roof insulation differs from <a href="/services/attic-insulation">attic insulation</a> in one important way: it's installed between or under the rafters rather than on the loft floor. This makes it the right choice for converted attics, rooms in the roof, and vaulted ceilings where you need the space directly under the roof to be warm.</p>
<p>For maximum performance, many homeowners pair rafter-level insulation with <a href="/services/spray-foam-insulation">spray foam</a>, which provides both thermal and airtight properties in a single application. We also recommend addressing your walls—<a href="/services/external-wall-insulation">external wall insulation</a> or <a href="/services/cavity-wall-insulation">cavity wall insulation</a>—for a complete thermal envelope.</p>
<p>Our team works across Dublin and surrounding counties, regularly completing projects in <a href="/areas/swords">Swords</a>, <a href="/areas/bray">Bray</a>, <a href="/areas/drogheda">Drogheda</a>, and <a href="/areas/navan">Navan</a>. <a href="/contact">Book your free survey</a> to find out what your home needs.</p>`,
    faqs: [
      { q: "What's the difference between roof and attic insulation?", a: "Attic insulation goes on the floor of your loft. Roof insulation is installed between or under the rafters, making it ideal for converted attics or rooms in the roof." },
      { q: "How long does roof insulation take?", a: "Most residential roof insulation projects take 1-2 days depending on the size and complexity of the roof structure." },
      { q: "Will it affect my roof tiles?", a: "No. Our insulation is installed from the inside, between or under the rafters, so your roof covering remains completely untouched." },
    ],
    otherServices: [
      { icon: "roofing", title: "Attic Insulation", slug: "attic-insulation", desc: "Expertly rolled or blown insulation to stop heat rising through your ceiling." },
      { icon: "heat_pump", title: "Spray Foam Insulation", slug: "spray-foam-insulation", desc: "High-performance airtight seal for complex spaces." },
      { icon: "foundation", title: "External Wall Insulation", slug: "external-wall-insulation", desc: "Protect and insulate your home's exterior walls." },
    ],
  },
  "spray-foam-insulation": {
    title: "Spray Foam Insulation",
    h1: "Spray Foam Insulation in Dublin",
    metaTitle: "Spray Foam Insulation Dublin | Attic & Roof Foam Specialists",
    metaDesc: "Professional spray foam insulation for attics and roofs in Dublin. Long-lasting thermal barrier. Get your free quote today.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIAAF6pMBb25joef8qhmI9autFEWVCZ154qZWR8wDbiDx2nIPi2y-hjV41pfWMqvD9OhLSzg7Kc0avn0UH8luga_tdwInGCFjGtGFvBJQxl3-GjuggX8JmoG0IwLOHvU7SjXiaLLLJdpG3vb9Hb-sRJRjd9dCeT_kk4Gvgt-oGMjONSdOU6qr5i9J9CcbCLPNy_VX45UXzBu-zGH1nzk1RmO-mP6BZFudXpRzRkO2Vnl3ihETiVr0ZL5IabjHiBArT4biUCAR4G1U",
    heroAlt: "Spray foam insulation",
    intro: [
      "Spray foam insulation delivers the highest R-value per inch of any insulation type available. It expands to fill every gap, crack, and cavity, creating a completely airtight thermal barrier.",
      "Whether you have an awkward attic shape, hard-to-reach spaces, or simply want the best thermal performance money can buy, spray foam is the answer."
    ],
    benefits: ["Highest R-Value Per Inch", "Airtight Seal", "Moisture Barrier", "Long-Lasting (50+ Years)"],
    contentHtml: `<h2>Spray Foam Insulation Across Dublin</h2>
<p>Spray foam is the premium choice when standard insulation won't cut it. It's particularly effective for <a href="/services/roof-insulation">roof insulation</a> at rafter level, where it bonds directly to the underside of the roof deck, creating a seamless thermal and moisture barrier.</p>
<p>It also works brilliantly in combination with <a href="/services/attic-insulation">attic insulation</a>—we often use spray foam on tricky gable walls and around pipes, then mineral wool on the main loft floor. For homes with solid walls, pairing spray foam with <a href="/services/external-wall-insulation">external wall insulation</a> gives you the best energy rating possible.</p>
<p>We install spray foam insulation for homeowners in <a href="/areas/swords">Swords</a>, <a href="/areas/drogheda">Drogheda</a>, <a href="/areas/bray">Bray</a>, <a href="/areas/navan">Navan</a>, and <a href="/areas/mullingar">Mullingar</a>. Check our <a href="/services/home-insulation">grants page</a> to see what SEAI funding you could access, or <a href="/contact">request a free quote</a>.</p>`,
    faqs: [
      { q: "Is spray foam insulation safe?", a: "Yes. Once cured (within 24 hours), spray foam is completely inert and safe. It's used in millions of homes worldwide." },
      { q: "How much does spray foam cost?", a: "Spray foam typically costs more than traditional insulation but offers superior performance. Contact us for a precise quote based on your property." },
      { q: "Can spray foam cause damp?", a: "When correctly installed by certified professionals like us, spray foam actually helps prevent condensation and damp issues." },
    ],
    otherServices: [
      { icon: "roofing", title: "Attic Insulation", slug: "attic-insulation", desc: "Cost-effective rolled or blown insulation for standard lofts." },
      { icon: "home_repair_service", title: "Roof Insulation", slug: "roof-insulation", desc: "Rafter-level solutions for converted attics." },
      { icon: "layers", title: "Cavity Wall Insulation", slug: "cavity-wall-insulation", desc: "Fill the gaps in your masonry walls." },
    ],
  },
  "external-wall-insulation": {
    title: "External Wall Insulation",
    h1: "External Wall Insulation in Dublin",
    metaTitle: "External Wall Insulation Dublin | SEAI Grant Approved",
    metaDesc: "Transform your home with external wall insulation in Dublin. SEAI grants available. Improve BER rating and cut heating costs.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4mfKSF51OEjRi9y6mAT2Gnr9wAwHUEUWZKQC_LGLCK1S2-12F3mfmw6QTvHWNv5NOB838Z4d5TEjyeBAfJ9YwoCvlXXo4lLywJDM5oNXom0xmcUOrVa5fUL3l_CmE7PtgI1ClQq5QoKmSNrd9YH-re8mW31JDOhvB-Pnqkj7Wzt7jz7Wt_SvumGA7ilMk4cJezithS9CzqH-hhwtVQk-W6igDcLZiWQNHcjDULPeXpCHUJJKjGH7M0nK60Usqslvr3iSd6U-dqOk",
    heroAlt: "External wall insulation",
    intro: [
      "External wall insulation wraps your home in a thermal blanket, dramatically reducing heat loss through solid walls. It's the most effective solution for older homes without cavity walls.",
      "The system also gives your home a fresh, modern appearance with a range of render finishes available in multiple colours."
    ],
    benefits: ["Eliminates Thermal Bridging", "Fresh Exterior Finish", "Major BER Improvement", "Generous SEAI Grants"],
    contentHtml: `<h2>External Wall Insulation in Dublin</h2>
<p>External wall insulation (EWI) is the go-to solution for older Dublin homes built with solid walls that have no cavity to fill. Unlike <a href="/services/cavity-wall-insulation">cavity wall insulation</a>, EWI wraps the outside of your home in insulated boards finished with a protective render, eliminating thermal bridging entirely.</p>
<p>Many homeowners combine EWI with <a href="/services/attic-insulation">attic insulation</a> for maximum impact. When you insulate both the walls and the roof, you create a complete thermal envelope that can boost your BER rating by two or three grades. See our <a href="/services/home-insulation">home insulation & grants guide</a> for the full breakdown of available SEAI funding.</p>
<p>We carry out external wall insulation projects across Dublin and surrounding areas including <a href="/areas/swords">Swords</a>, <a href="/areas/bray">Bray</a>, <a href="/areas/drogheda">Drogheda</a>, and <a href="/areas/mullingar">Mullingar</a>. <a href="/contact">Contact us</a> for a free survey and quote.</p>`,
    faqs: [
      { q: "How long does external wall insulation take?", a: "A typical semi-detached house takes 7-10 working days, depending on weather conditions and the complexity of the building." },
      { q: "Will it change the look of my house?", a: "Yes—for the better! You can choose from a wide range of render colours and textures to give your home a modern, refreshed appearance." },
      { q: "What grants are available?", a: "SEAI offers substantial grants for external wall insulation. Contact us for the latest figures and we'll help you apply." },
    ],
    otherServices: [
      { icon: "layers", title: "Cavity Wall Insulation", slug: "cavity-wall-insulation", desc: "For homes with cavity walls—quick and affordable." },
      { icon: "roofing", title: "Attic Insulation", slug: "attic-insulation", desc: "Stop heat escaping through your ceiling." },
      { icon: "euro_symbol", title: "Home Insulation & Grants", slug: "home-insulation", desc: "Full grant assistance for your upgrade." },
    ],
  },
  "cavity-wall-insulation": {
    title: "Cavity Wall Insulation",
    h1: "Cavity Wall Insulation in Dublin",
    metaTitle: "Cavity Wall Insulation Dublin | Fast & Affordable",
    metaDesc: "Affordable cavity wall insulation in Dublin. Quick installation with minimal disruption. SEAI grants may apply. Call for a free quote.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4mfKSF51OEjRi9y6mAT2Gnr9wAwHUEUWZKQC_LGLCK1S2-12F3mfmw6QTvHWNv5NOB838Z4d5TEjyeBAfJ9YwoCvlXXo4lLywJDM5oNXom0xmcUOrVa5fUL3l_CmE7PtgI1ClQq5QoKmSNrd9YH-re8mW31JDOhvB-Pnqkj7Wzt7jz7Wt_SvumGA7ilMk4cJezithS9CzqH-hhwtVQk-W6igDcLZiWQNHcjDULPeXpCHUJJKjGH7M0nK60Usqslvr3iSd6U-dqOk",
    heroAlt: "Cavity wall insulation",
    intro: [
      "If your home was built after the 1930s, chances are it has cavity walls—two layers of brick or block with a gap between them. Filling that gap with insulation is one of the quickest wins for energy efficiency.",
      "Our bead injection system fills every void completely, and the whole process takes just a few hours with no mess inside your home."
    ],
    benefits: ["Completed in Hours", "No Internal Disruption", "Immediate Warmth Improvement", "Cost-Effective Solution"],
    contentHtml: `<h2>Cavity Wall Insulation for Dublin Homes</h2>
<p>If your home was built between the 1930s and early 2000s, there's a good chance it has unfilled cavity walls. Filling these cavities with insulation beads is one of the fastest and most affordable upgrades available. Unlike <a href="/services/external-wall-insulation">external wall insulation</a>, there's no change to your home's appearance—small holes are drilled in the outer mortar, beads are pumped in, and the holes are sealed.</p>
<p>For the biggest savings, pair cavity wall insulation with <a href="/services/attic-insulation">attic insulation</a>. Together, these two measures can reduce your heating bills by 40% or more. If you also have a converted attic, consider adding <a href="/services/roof-insulation">roof insulation</a> at rafter level.</p>
<p>We regularly insulate homes in <a href="/areas/swords">Swords</a>, <a href="/areas/drogheda">Drogheda</a>, <a href="/areas/navan">Navan</a>, <a href="/areas/bray">Bray</a>, and <a href="/areas/mullingar">Mullingar</a>. Visit our <a href="/services/home-insulation">home insulation & grants</a> page for SEAI grant details, or <a href="/contact">get in touch</a> for a free survey.</p>`,
    faqs: [
      { q: "How do I know if I have cavity walls?", a: "Most homes built after the 1930s have cavity walls. We can confirm during our free survey by measuring the wall thickness or using a borescope." },
      { q: "How long does it take?", a: "Cavity wall insulation typically takes just 2-4 hours for a standard home. It's one of the quickest insulation upgrades available." },
      { q: "Is it messy?", a: "Not at all. Small holes are drilled in the external mortar joints, the insulation beads are pumped in, and the holes are neatly filled. No work is needed inside your home." },
    ],
    otherServices: [
      { icon: "foundation", title: "External Wall Insulation", slug: "external-wall-insulation", desc: "For solid-wall homes without cavities." },
      { icon: "roofing", title: "Attic Insulation", slug: "attic-insulation", desc: "Stop heat rising out through your ceiling." },
      { icon: "heat_pump", title: "Spray Foam Insulation", slug: "spray-foam-insulation", desc: "Maximum performance airtight seal." },
    ],
  },
  "home-insulation": {
    title: "Home Insulation & Grants",
    h1: "Complete Home Insulation Services in Dublin",
    metaTitle: "Home Insulation Dublin | Grants, Services & Free Survey",
    metaDesc: "Full home insulation services in Dublin. Expert advice on SEAI insulation grants. Attic, wall & roof insulation under one roof.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4mfKSF51OEjRi9y6mAT2Gnr9wAwHUEUWZKQC_LGLCK1S2-12F3mfmw6QTvHWNv5NOB838Z4d5TEjyeBAfJ9YwoCvlXXo4lLywJDM5oNXom0xmcUOrVa5fUL3l_CmE7PtgI1ClQq5QoKmSNrd9YH-re8mW31JDOhvB-Pnqkj7Wzt7jz7Wt_SvumGA7ilMk4cJezithS9CzqH-hhwtVQk-W6igDcLZiWQNHcjDULPeXpCHUJJKjGH7M0nK60Usqslvr3iSd6U-dqOk",
    heroAlt: "Home insulation",
    intro: [
      "A whole-home approach to insulation delivers the best results. By addressing attic, walls, and floors together, you create a complete thermal envelope that maximises energy savings.",
      "We specialise in helping Dublin homeowners navigate the SEAI Better Energy Home grants, ensuring you get the maximum financial support for your insulation upgrade."
    ],
    benefits: ["Whole-Home Approach", "Maximum Grant Assistance", "Single Contractor Convenience", "Best Overall Savings"],
    contentHtml: `<h2>Complete Home Insulation & SEAI Grants</h2>
<p>The most effective way to insulate your home is to address everything at once. Start with <a href="/services/attic-insulation">attic insulation</a> to stop heat rising through the roof, then tackle your walls with either <a href="/services/cavity-wall-insulation">cavity wall insulation</a> (for homes with cavities) or <a href="/services/external-wall-insulation">external wall insulation</a> (for solid-wall properties).</p>
<p>For converted attics and vaulted ceilings, <a href="/services/roof-insulation">roof insulation</a> at rafter level keeps the room directly under the roof comfortable. And if you want the ultimate airtight seal, <a href="/services/spray-foam-insulation">spray foam insulation</a> delivers the highest R-value per inch of any material on the market.</p>
<p>SEAI grants cover a significant portion of the cost. As SEAI Registered Contractors, we handle all the paperwork and guide you through the application. We work with homeowners across Dublin and beyond, including <a href="/areas/swords">Swords</a>, <a href="/areas/drogheda">Drogheda</a>, <a href="/areas/bray">Bray</a>, <a href="/areas/navan">Navan</a>, and <a href="/areas/mullingar">Mullingar</a>. <a href="/contact">Request your free survey</a> today.</p>`,
    faqs: [
      { q: "What SEAI grants are available?", a: "SEAI offers grants for attic insulation, cavity wall, external wall, and internal dry lining. The amounts vary by measure. We'll help you understand exactly what you're eligible for." },
      { q: "Can I do multiple insulation types at once?", a: "Absolutely—and we recommend it. A combined approach gives the best energy savings and may qualify you for higher grant rates under the SEAI scheme." },
      { q: "How much can I save overall?", a: "A full home insulation upgrade can reduce your heating bills by 40-60%. Combined with SEAI grants, the payback period is typically 3-5 years." },
    ],
    otherServices: [
      { icon: "roofing", title: "Attic Insulation", slug: "attic-insulation", desc: "The most popular starting point for home insulation." },
      { icon: "foundation", title: "External Wall Insulation", slug: "external-wall-insulation", desc: "Transform your home's exterior and efficiency." },
      { icon: "heat_pump", title: "Spray Foam Insulation", slug: "spray-foam-insulation", desc: "Premium airtight insulation solution." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesData[slug];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    openGraph: {
      title: s.metaTitle,
      description: s.metaDesc,
      url: `${baseUrl}/services/${slug}`,
      type: "website",
    },
    alternates: { canonical: `${baseUrl}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = servicesData[slug];
  if (!s) notFound();

  const serviceSchema = generateServiceSchema(s.title, s.metaDesc, `${baseUrl}/services/${slug}`);
  const faqSchema = generateFAQSchema(s.faqs.map(f => ({ q: f.q, a: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[614px] flex items-center overflow-visible lg:overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt={s.heroAlt} className="w-full h-full object-cover" src={s.heroImg} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1c]/90 via-[#1a1c1c]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-10 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold text-sm tracking-wide uppercase">
                  <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  SEAI Grant Approved
                </span>
                <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-white leading-tight tracking-tighter">
                  {s.h1}
                </h1>
                <p className="text-lg text-white/90 max-w-xl font-medium">
                  Professional {s.title.toLowerCase()} by Dublin&apos;s leading experts. Save up to 30% on energy bills and access generous SEAI grants today.
                </p>
                <div className="flex items-center gap-6 text-white/90 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container">verified</span>
                    <span className="text-sm font-bold">SEAI Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container">history</span>
                    <span className="text-sm font-bold">15+ Years Experience</span>
                  </div>
                </div>
              </div>
              <div>
                <HeroContactForm />
              </div>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: s.title, href: `/services/${slug}` }]} />

        {/* Why Section */}
        <section className="py-24 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Why Choose {s.title}?</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                {s.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-bold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Cozy insulated home" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYeCrLADLqvhBQX6HqRHOjiTvQL05YVLg48j7T3tcgLHmRwpYOzRSVaS5jn9W3mFgbzqFzQpDBdISkCdQVW4J81RJa3kueqrr7xt2n7I7tmxYWBcKuHY3JHCiLN5LRu1jdL-n7YdIQnJ9lack9gcebVcIPur23fgRf3kneJKTDu2yFHUfXYUZgIzLCDdK6zQQV-hVtjc71fwMWYRMMAgOF55edP2BEcEshivY02od0EQAdF_EFpTJd574PnWkAHFfX5evI1ZpIXU" />
              </div>
            </div>
          </div>
        </section>

        {/* Content with Internal Links */}
        <section className="py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none text-on-surface-variant [&_h2]:text-3xl [&_h2]:font-headline [&_h2]:font-extrabold [&_h2]:text-on-surface [&_h2]:mb-6 [&_p]:mb-6 [&_p]:leading-relaxed [&_a]:text-primary [&_a]:font-semibold [&_a]:underline [&_a]:decoration-primary/30 hover:[&_a]:decoration-primary"
              dangerouslySetInnerHTML={{ __html: s.contentHtml }}
            />
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">Our 4-Step Installation Process</h2>
              <p className="text-on-surface-variant text-lg italic">Professional, transparent, and hassle-free from start to finish.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "1", title: "Free Home Survey", desc: "We assess your current insulation levels and identify heat loss areas." },
                { num: "2", title: "Tailored Quote", desc: "Receive a detailed breakdown of costs, material options, and potential SEAI grant deductions." },
                { num: "3", title: "Expert Installation", desc: "Our SEAI-registered team installs your insulation quickly, with minimal disruption." },
                { num: "4", title: "Post-Install Check", desc: "A final quality audit ensures optimal coverage and efficiency." },
              ].map((step) => (
                <div key={step.num} className="group relative bg-[#f3f3f3] p-8 rounded-xl transition-all hover:bg-white hover:shadow-2xl">
                  <div className="w-16 h-16 bg-primary-container text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform">{step.num}</div>
                  <h3 className="text-xl font-headline font-bold mb-4">{step.title}</h3>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Table (if available) */}
        {s.costTable && (
          <section className="py-24 bg-[#f3f3f3]">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-12">{s.title} Cost in Dublin</h2>
              <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-on-surface text-white">
                      <th className="p-6 font-headline font-bold">Average Home Size</th>
                      <th className="p-6 font-headline font-bold">Typical Cost</th>
                      <th className="p-6 font-headline font-bold">SEAI Grant Amount</th>
                      <th className="p-6 font-headline font-bold">Net Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {s.costTable.map((row) => (
                      <tr key={row.size} className="hover:bg-[#eee] transition-colors">
                        <td className="p-6 font-semibold">{row.size}</td>
                        <td className="p-6">{row.cost}</td>
                        <td className="p-6 text-secondary font-bold">{row.grant}</td>
                        <td className="p-6 font-headline font-bold text-primary">{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 text-center">
                <p className="text-on-surface-variant mb-6 text-sm italic">*Costs are illustrative estimates. Actual pricing subject to survey.</p>
                <Link href="/contact" className="bg-primary-container text-on-primary px-10 py-4 rounded font-bold text-lg hover:scale-105 transition-transform shadow-lg inline-block">
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface text-center mb-16">{s.title} FAQs</h2>
            <div className="space-y-4">
              {s.faqs.map((faq) => (
                <details key={faq.q} className="group bg-[#f3f3f3] rounded-xl p-6 cursor-pointer">
                  <summary className="flex items-center justify-between font-headline font-bold text-lg">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary-container py-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8">Ready to Get Started?</h2>
            <Link href="/contact" className="bg-white text-primary font-bold px-12 py-5 rounded-lg text-xl hover:bg-[#f9f9f9] transition-colors shadow-2xl inline-block">
              Book Your Free Survey
            </Link>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-24 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-12">Our Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {s.otherServices.map((os) => (
                <Link key={os.slug} href={`/services/${os.slug}`} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-outline-variant/10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">{os.icon}</span>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-primary">arrow_forward</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{os.title}</h3>
                  <p className="text-on-surface-variant text-sm">{os.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
