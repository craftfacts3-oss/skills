export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl tracking-wider text-[var(--color-brand-gold)]">
              DON
            </span>
            <span className="font-display text-xl tracking-wider text-[var(--color-brand-teal)]">
              QUINTO
            </span>
          </div>

          {/* Tagline */}
          <p className="text-white/30 text-xs tracking-widest uppercase text-center">
            Breakfast · Garnachas · Bistrobar
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs tracking-widest uppercase text-white/40">
            <a href="#menu" className="hover:text-[var(--color-brand-teal)] transition-colors">
              Menu
            </a>
            <a href="#about" className="hover:text-[var(--color-brand-teal)] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[var(--color-brand-teal)] transition-colors">
              Contact
            </a>
            <a
              href="https://instagram.com/donquintotx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brand-teal)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Don Quinto · 100 N Main St #100, Midland, TX 79701
          </p>
        </div>
      </div>
    </footer>
  );
}
