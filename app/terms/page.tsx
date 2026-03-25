import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Roof Insulation Dublin",
  description: "Terms and conditions for Roof Insulation Dublin services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-pale-sage">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl font-headline font-extrabold text-on-surface">Terms &amp; Conditions</h1>
          </div>
        </section>
        <section className="py-16 bg-surface-container-lowest">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg text-on-surface-variant">
            <p className="text-sm text-on-surface-variant mb-8">Last updated: January 2025</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">1. Services</h2>
            <p>Roof Insulation Dublin provides residential and commercial insulation services including attic insulation, roof insulation, spray foam insulation, external wall insulation, cavity wall insulation, and related grant assistance services.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">2. Quotes &amp; Pricing</h2>
            <p>All quotes are valid for 30 days from the date of issue. Prices are subject to change based on survey findings. Final pricing will be confirmed before any work commences.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">3. SEAI Grants</h2>
            <p>While we assist with SEAI grant applications, approval and payment of grants is at the sole discretion of SEAI. We cannot guarantee grant approval or amounts.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">4. Workmanship Guarantee</h2>
            <p>All installations come with our workmanship guarantee. The duration and terms of this guarantee will be specified in your individual contract.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">5. Cancellations</h2>
            <p>Cancellations must be made at least 48 hours before the scheduled installation date. Late cancellations may incur a fee to cover preparation costs.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">6. Liability</h2>
            <p>We carry full public liability insurance. Our liability is limited to the value of the contract. We are not liable for pre-existing structural issues discovered during installation.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">7. Governing Law</h2>
            <p>These terms are governed by the laws of Ireland. Any disputes shall be subject to the jurisdiction of the Irish courts.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
