import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roof Insulation Dublin | Professional Attic & Roof Specialists",
  description: "Leading attic and roof insulation specialists in Dublin. SEAI grant approved. Get a free quote for loft, attic & roof insulation. Call +35312308892.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Inter:wght@400;500;600&family=Manrope:wght@400;700;800&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
