"use client";

// ─── EDIT REASONS HERE ────────────────────────────────────────
const reasons = [
  {
    icon: "🎯",
    title: "Strategy-First Creative",
    desc: "Every visual decision is rooted in your brand goals and target audience — beauty that actually converts.",
  },
  {
    icon: "⚡",
    title: "Lightning-Fast Turnaround",
    desc: "Most agencies take weeks. We deliver premium results in days without sacrificing an inch of quality.",
  },
  {
    icon: "🤝",
    title: "One Point of Contact",
    desc: "No account managers playing telephone. You work directly with the creative team from day one.",
  },
  {
    icon: "📐",
    title: "Pixel-Perfect Standards",
    desc: "We don't deliver 'good enough.' Every asset goes through our 12-point quality checklist before you see it.",
  },
  {
    icon: "🔒",
    title: "Transparent Pricing",
    desc: "Fixed-scope quotes, no hidden fees, no surprise invoices. What we quote is what you pay.",
  },
  {
    icon: "♾️",
    title: "Long-Term Partnership",
    desc: "98% of our clients renew. We invest in understanding your brand deeply so every project is better than the last.",
  },
];
// ──────────────────────────────────────────────────────────────

export default function WhyCinevex() {
  return (
    <section
      id="about"
      style={{ padding: "100px 5%", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Why Choose Us</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            THE{" "}
            <span className="gradient-text">CINEVEX</span>
            {" "}DIFFERENCE
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            What separates us from every other creative agency you&apos;ve worked with.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ padding: "36px" }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>{r.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.7rem",
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                  letterSpacing: "0.03em",
                }}
              >
                {r.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
