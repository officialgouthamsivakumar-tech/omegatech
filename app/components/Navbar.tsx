"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#equipment", label: "Equipment" },
  { href: "#coverage", label: "Coverage" },
  { href: "#amc", label: "AMC" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center shrink-0">
              <span className="text-white font-black text-base leading-none">Ω</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">OMEGA</div>
              <div className="text-orange-500 text-[10px] leading-tight tracking-wider">TECHNICAL SOLUTIONS</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-600 hover:bg-orange-500 text-white text-sm px-4 py-2 rounded transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-800 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-white text-sm px-2 py-2 rounded hover:bg-slate-800 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-orange-600 hover:bg-orange-500 text-white text-sm px-4 py-2.5 rounded transition-colors font-medium text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
