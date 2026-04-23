"use client";

import { useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-wider text-[var(--color-brand-gold)]">
            DON
          </span>
          <span className="font-display text-2xl tracking-wider text-[var(--color-brand-teal)]">
            QUINTO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-[var(--color-brand-teal)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 text-sm font-medium tracking-widest uppercase bg-[var(--color-brand-gold)] text-black rounded-full hover:bg-[var(--color-brand-teal)] hover:text-white transition-colors"
          >
            Visit Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-[var(--color-brand-teal)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2 text-sm font-medium tracking-widest uppercase bg-[var(--color-brand-gold)] text-black rounded-full text-center hover:bg-[var(--color-brand-teal)] hover:text-white transition-colors"
          >
            Visit Us
          </a>
        </nav>
      )}
    </header>
  );
}
