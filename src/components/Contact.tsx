export default function Contact() {
  const hours = [
    { day: "Monday – Wednesday", time: "8:00 AM – 9:00 PM" },
    { day: "Thursday – Friday", time: "8:00 AM – 10:00 PM" },
    { day: "Saturday", time: "9:00 AM – 10:00 PM" },
    { day: "Sunday", time: "9:00 AM – 8:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-brand-teal)] text-xs tracking-[0.3em] uppercase mb-3">
            Come See Us
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white tracking-wider">
            FIND US
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-[var(--color-brand-gold)]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-brand-gold)]" />
            <div className="h-px w-12 bg-[var(--color-brand-gold)]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Address + Hours */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-[var(--color-brand-gold)] text-xs tracking-[0.2em] uppercase mb-4">
                Location
              </h3>
              <p className="text-white text-lg font-medium">100 N Main St #100</p>
              <p className="text-white/60">Midland, TX 79701</p>
              <a
                href="https://maps.google.com/?q=100+N+Main+St+%23100+Midland+TX+79701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[var(--color-brand-teal)] text-sm hover:underline"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-[var(--color-brand-gold)] text-xs tracking-[0.2em] uppercase mb-4">
                Hours
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center gap-4">
                    <span className="text-white/60 text-sm">{h.day}</span>
                    <span className="text-white text-sm font-medium shrink-0">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-[var(--color-brand-gold)] text-xs tracking-[0.2em] uppercase mb-4">
                Follow Along
              </h3>
              <a
                href="https://instagram.com/donquintotx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[var(--color-brand-teal)] transition-colors group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm font-medium">@donquintotx</span>
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-white/10 min-h-[400px]">
            <iframe
              title="Don Quinto location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.9!2d-102.0779!3d31.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f904e7a7a7a7a7%3A0x0!2s100%20N%20Main%20St%20%23100%2C%20Midland%2C%20TX%2079701!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
