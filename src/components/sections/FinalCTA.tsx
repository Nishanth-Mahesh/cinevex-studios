"use client";

export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "100px 5%",
        background: "linear-gradient(135deg, #0a0f1e 0%, #060d1a 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <span className="section-label" style={{ borderColor: "rgba(96,165,250,0.3)", color: "#60a5fa" }}>
            Ready to Begin?
          </span>
        </div>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.95,
            color: "white",
            marginBottom: "24px",
            marginTop: "16px",
          }}
        >
          LET&apos;S BUILD
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #60a5fa, #93c5fd, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SOMETHING
          </span>
          <br />
          ICONIC
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            marginBottom: "40px",
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Your brand deserves more than average. Let&apos;s create visuals that stop the scroll, tell your story, and
          drive real results.
        </p>

        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}
        >
          <a href="#contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: "1rem" }}>
            Start a Project →
          </a>
          <a
            href="https://wa.me/918073924479"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "15px 38px",
              fontSize: "1rem",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            WhatsApp Us
          </a>
        </div>

        <p
          className="reveal"
          style={{
            marginTop: "32px",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Free discovery call · No commitment · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
