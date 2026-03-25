export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://roof-insulation-dublin-dublin.vercel.app/#business",
  name: "Roof Insulation Dublin",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGyhiTIMv6DcNKye4Jn8uGPyht6UyUoqdnPGQ7-XnyYUQeXmtSVUN7-bezIMN9cvS5eAFIjoXdRk9JkdNHTdvVug24X01I73q0ij0UvS5nJ4uW2oAMScrjJBtk2_Hvl5ZIvkO30niAIkzwJN-P9zN7BmuQYZYP9-xadVk2rfpfh8QXWoQS3OYdQC284naKWn0jr75pIlRJ3rTcz_TIZqdcC2_fvY6knvvMpD9nQI-WsyylKytB_TfcZ4_f1dWtNRTG3XfDX2jTj8",
  telephone: "+35312308892",
  email: "info@roofinsulationdublin.ie",
  url: "https://roof-insulation-dublin-dublin.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "77 Sir John Rogerson's Quay, Grand Canal Dock",
    addressLocality: "Dublin",
    addressRegion: "Dublin",
    postalCode: "D02 VK60",
    addressCountry: "IE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 53.3438, longitude: -6.2388 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Dublin" },
    { "@type": "City", name: "Drogheda" },
    { "@type": "City", name: "Swords" },
    { "@type": "City", name: "Bray" },
    { "@type": "City", name: "Navan" },
    { "@type": "City", name: "Mullingar" },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Roof Insulation Dublin",
  url: "https://roof-insulation-dublin-dublin.vercel.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://roof-insulation-dublin-dublin.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name, description, url,
    provider: { "@id": "https://roof-insulation-dublin-dublin.vercel.app/#business" },
    areaServed: { "@type": "City", name: "Dublin" },
  };
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
