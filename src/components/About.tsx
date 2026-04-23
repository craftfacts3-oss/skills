export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-[var(--color-brand-teal)] text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white tracking-wider leading-none mb-8">
              BOLD FLAVORS.<br />
              <span className="text-[var(--color-brand-gold)]">DEEP ROOTS.</span>
            </h2>

            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                Don Quinto was born from a simple belief: that the best meals are the ones shared
                at a table that never empties. Rooted in the vibrant traditions of Mexican street
                food and elevated with a modern bistrobar spirit, we bring bold, unapologetic
                flavor to every plate.
              </p>
              <p>
                From the first tortilla pressed to the last mezcal poured, every detail at Don
                Quinto honors the craft behind Mexican cuisine — the grandmothers who perfected
                the salsas, the markets that inspired our garnachas, and the culture that makes
                every meal a celebration.
              </p>
              <p>
                We are proud to call Midland, Texas home. Come hungry, come as you are, and stay
                as long as you like.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="font-display text-4xl text-[var(--color-brand-teal)]">3</p>
                <p className="text-white/40 text-sm uppercase tracking-wider mt-1">Concepts</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-display text-4xl text-[var(--color-brand-gold)]">1</p>
                <p className="text-white/40 text-sm uppercase tracking-wider mt-1">Location</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-display text-4xl text-[var(--color-brand-salmon)]">∞</p>
                <p className="text-white/40 text-sm uppercase tracking-wider mt-1">Flavor</p>
              </div>
            </div>
          </div>

          {/* Decorative brand element */}
          <div className="relative flex items-center justify-center">
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle, #2BBFBF15 0%, #C9A22715 50%, transparent 70%)",
                border: "1px solid rgba(201,162,39,0.2)",
              }}
            >
              <div
                className="w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(43,191,191,0.2)" }}
              >
                <div className="text-center px-6">
                  <p className="font-display text-5xl md:text-6xl tracking-[0.2em] text-[var(--color-brand-gold)]">
                    DON
                  </p>
                  <p className="font-display text-5xl md:text-6xl tracking-[0.15em] text-[var(--color-brand-teal)]">
                    QUINTO
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                    <p className="text-white/40 text-xs tracking-widest uppercase">
                      Midland · TX
                    </p>
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                  <p className="mt-2 text-white/30 text-[10px] tracking-[0.2em] uppercase">
                    Breakfast · Garnachas · Bistrobar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
