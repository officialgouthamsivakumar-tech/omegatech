"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#weighing", label: "Weighing" },
  { href: "#amc", label: "AMC" },
  { href: "#equipment", label: "Equipment" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/omega-logo.jpeg"
              width={130}
              height={36}
              alt="Omega Technical Solutions Limited"
              className="object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-blue-700 text-sm transition-colors tracking-wide font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 hover:text-gray-900 p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-blue-700 text-sm px-2 py-2.5 transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
