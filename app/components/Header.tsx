"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900 font-headline">
          Roof Insulation Dublin
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">Services</Link>
          <Link href="/areas" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">Areas We Serve</Link>
          <Link href="/about" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">About</Link>
          <Link href="/contact" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <a className="hidden lg:block text-slate-900 font-bold" href="tel:+35312308892">+353 1 230 8892</a>
          <Link href="/contact" className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg transition-all active:scale-95">
            Get Free Quote
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined text-3xl">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link href="/services" className="block text-slate-700 font-medium" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/areas" className="block text-slate-700 font-medium" onClick={() => setMenuOpen(false)}>Areas We Serve</Link>
          <Link href="/about" className="block text-slate-700 font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block text-slate-700 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
