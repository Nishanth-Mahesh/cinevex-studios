"use client";

// ─── EDIT HERO CONTENT HERE ────────────────────────────────────
const HEADLINE_LINE1 = "WE CRAFT";
const HEADLINE_LINE2 = "EXTRAORDINARY";
const HEADLINE_LINE3 = "BRAND STORIES";
const SUBHEADLINE = "Premium creative agency delivering luxury visuals, immersive brand films, and performance-driven digital experiences for India's most ambitious brands.";
const CTA_PRIMARY = "Start Your Project";
const CTA_SECONDARY = "View Our Work";
// ──────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "calc(36px + 72px + 60px)", // announcement bar + navbar + breathing room
        paddingBottom: "80px",
        paddingLeft: "5%",
        paddingRight: "5%",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="hero-glow"
        style={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,115,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <span className="section-label">Cinevex Studios · Est. 2022</span>
        </div>

        <h1
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 10vw, 9rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            marginBottom: "32px",
            marginTop: "16px",
          }}
        >
          <span style={{ display: "block", color: "var(--text-primary)" }}>{HEADLINE_LINE1}</span>
          <span
            className="gradient-text"
            style={{ display: "block" }}
          >
            {HEADLINE_LINE2}
          </span>
          <span style={{ display: "block", color: "var(--text-primary)" }}>{HEADLINE_LINE3}</span>
        </h1>

        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: "580px",
            marginBottom: "40px",
          }}
        >
          {SUBHEADLINE}
        </p>

        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}
        >
          <a href="#contact" className="btn-primary">
            {CTA_PRIMARY} →
          </a>
          <a href="#portfolio" className="btn-secondary">
            {CTA_SECONDARY}
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="reveal"
          style={{
            marginTop: "72px",
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {[
            { value: "50+", label: "Brands Served" },
            { value: "3×", label: "Average ROAS" },
            { value: "98%", label: "Client Retention" },
            { value: "5★", label: "Google Rating" },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #0052cc, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.5px",
                  marginTop: "4px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
