"use client";

// ─── EDIT TESTIMONIALS HERE ───────────────────────────────────
const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, Skinia Cosmetics",
    quote:
      "Cinevex transformed our product photography completely. Our conversion rate went up 42% within the first month of using their images on our Shopify store.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Marketing Director, TechFlow SaaS",
    quote:
      "The brand film they created for us still gives me chills. Our investors watched it and one of them said it was the best pitch deck addition they'd seen in years.",
    stars: 5,
  },
  {
    name: "Vikram Sharma",
    role: "CEO, Urban Outfits",
    quote:
      "Three months in, our ROAS on Meta went from 1.2× to 3.8×. The creative quality from Cinevex is simply unmatched at this price point.",
    stars: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Brand Manager, FreshBrew Coffee",
    quote:
      "Fastest turnaround I've ever seen without any quality dip. We briefed them on Monday, approved on Wednesday, and published on Friday. Incredible.",
    stars: 5,
  },
];
// ──────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section style={{ padding: "100px 5%", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Client Stories</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            WHAT CLIENTS <span className="gradient-text">SAY</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ padding: "36px" }}
            >
              <div style={{ color: "#f59e0b", fontSize: "1rem", marginBottom: "16px", letterSpacing: "2px" }}>
                {"★".repeat(t.stars)}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
