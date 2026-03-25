import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-black text-white font-headline">Roof Insulation Dublin</div>
          <p className="text-slate-400 font-medium">Dublin&apos;s most trusted partner for energy efficiency and thermal comfort.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Company Info</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/about">About Us</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/contact">Contact Us</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/services/attic-insulation">Attic Insulation</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/services/roof-insulation">Roof Insulation</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/services/spray-foam-insulation">Spray Foam</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/services/home-insulation">Grants</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Areas</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/areas/drogheda">Drogheda</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/areas/swords">Swords</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/areas/bray">Bray</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/areas/navan">Navan</Link></li>
            <li><Link className="text-slate-400 hover:text-orange-400 transition-colors" href="/areas/mullingar">Mullingar</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-slate-800">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Roof Insulation Dublin. All rights reserved.</p>
      </div>
    </footer>
  );
}
