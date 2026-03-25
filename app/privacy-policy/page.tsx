import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Roof Insulation Dublin",
  description: "Privacy policy for Roof Insulation Dublin. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-pale-sage">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl font-headline font-extrabold text-on-surface">Privacy Policy</h1>
          </div>
        </section>
        <section className="py-16 bg-surface-container-lowest">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg text-on-surface-variant">
            <p className="text-sm text-on-surface-variant mb-8">Last updated: January 2025</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">1. Information We Collect</h2>
            <p>When you contact us for a quote or use our services, we may collect: your name, email address, phone number, property address, and details about your insulation requirements.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your personal information to: provide quotes, schedule surveys and installations, communicate about our services, process SEAI grant applications on your behalf, and improve our services.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">3. Data Sharing</h2>
            <p>We do not sell your personal data. We may share information with SEAI for grant processing purposes, and with trusted third-party service providers who assist in our operations.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">5. Your Rights</h2>
            <p>Under GDPR, you have the right to access, rectify, erase, restrict processing of, and port your personal data. You also have the right to object to processing and to withdraw consent.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">6. Cookies</h2>
            <p>Our website uses cookies to improve your browsing experience. You can control cookie settings through your browser preferences.</p>
            <h2 className="text-2xl font-headline font-bold text-on-surface mt-8 mb-4">7. Contact Us</h2>
            <p>For any privacy-related queries, contact us at: Roof Insulation Dublin, 77 Sir John Rogerson&apos;s Quay, Grand Canal Dock, Dublin 2, D02 VK60. Phone: +353 1 230 8892.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
