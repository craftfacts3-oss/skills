export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient/texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, #2BBFBF22 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #C9A22722 0%, transparent 50%)",
        }}
      />

      {/* Decorative border lines */}
      <div className="absolute top-24 left-6 right-6 bottom-6 border border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="text-[var(--color-brand-teal)] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Midland, Texas · Now Open
        </p>

        {/* Main headline */}
        <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-none tracking-wider mb-4">
          <span className="text-white">THE WAIT IS </span>
          <br />
          <span className="text-[var(--color-brand-gold)]">ALMOST OVER.</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-[var(--color-brand-gold)]" />
          <div className="w-2 h-2 rotate-45 bg-[var(--color-brand-gold)]" />
          <div className="h-px w-16 bg-[var(--color-brand-gold)]" />
        </div>

        {/* Subheadline */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 uppercase tracking-wide font-medium">
          Garnachas, Drinks, and a Menu That Keeps the Table Full.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="px-8 py-4 bg-[var(--color-brand-teal)] text-black font-semibold tracking-widest uppercase text-sm rounded-full hover:bg-white transition-colors"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-semibold tracking-widest uppercase text-sm rounded-full hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors"
          >
            Find Us
          </a>
        </div>

        {/* Address */}
        <p className="mt-16 text-white/40 text-sm tracking-widest uppercase">
          100 N Main St #100 · Midland, TX 79701
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
