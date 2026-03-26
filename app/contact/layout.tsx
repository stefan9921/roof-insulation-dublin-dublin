import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Roof Insulation Dublin | Get a Free Quote",
  description: "Get in touch with Roof Insulation Dublin for a free insulation quote. Call +35312308892 or fill out our contact form.",
  openGraph: {
    title: "Contact Roof Insulation Dublin | Get a Free Quote",
    description: "Get in touch with Roof Insulation Dublin for a free insulation quote. Call +35312308892 or fill out our contact form.",
    url: "https://roofinsulationdublin.ie/contact",
    type: "website",
  },
  alternates: { canonical: "https://roofinsulationdublin.ie/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
