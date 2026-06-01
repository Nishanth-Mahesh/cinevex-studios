"use client";

// ─── EDIT SERVICES HERE ────────────────────────────────────────
const services = [
  {
    icon: "📸",
    title: "Product Photography",
    desc: "Studio-grade, lifestyle & flat-lay photography that makes your products impossible to scroll past.",
    tag: "Most Popular",
  },
  {
    icon: "🎬",
    title: "Brand Videography",
    desc: "Cinematic brand films, product reveal reels, and documentary-style stories that emotionally connect.",
    tag: null,
  },
  {
    icon: "🎞️",
    title: "Reels & Short Content",
    desc: "Platform-native short-form content engineered for virality and maximum organic reach.",
    tag: "Trending",
  },
  {
    icon: "🖥️",
    title: "3D Rendering & CGI",
    desc: "Photorealistic 3D product renders and animations — no physical shoot required.",
    tag: "New",
  },
  {
    icon: "🎨",
    title: "Brand Identity Design",
    desc: "Logo systems, brand guidelines, and visual identities built to last a decade.",
    tag: null,
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "High-performance Next.js websites and landing pages with premium UI/UX design.",
    tag: null,
  },
  {
    icon: "📊",
    title: "Performance Marketing",
    desc: "Meta & Google ad creatives and strategy proven to deliver 3× ROAS for our clients.",
    tag: null,
  },
  {
    icon: "✏️",
    title: "Copywriting & Content",
    desc: "Words that sell — from website copy to ad scripts, we make every word earn its place.",
    tag: null,
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "End-to-end social strategy, content calendar, and community management.",
    tag: null,
  },
  {
    icon: "🎭",
    title: "Event Coverage",
    desc: "Corporate launches, product reveals, and brand events captured with cinematic precision.",
    tag: null,
  },
  {
    icon: "🤖",
    title: "AI-Enhanced Editing",
    desc: "Cutting-edge AI workflows for hyper-realistic retouching, background generation, and rapid delivery.",
    tag: "New",
  },
];
// ──────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 5%", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">What We Do</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            FULL-SPECTRUM{" "}
            <span className="gradient-text">CREATIVE</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            One agency. Every creative need. No compromises.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ padding: "32px", position: "relative" }}
            >
              {s.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#1a73ff",
                    background: "rgba(26,115,255,0.1)",
                    border: "1px solid rgba(26,115,255,0.2)",
                    padding: "4px 10px",
                    borderRadius: "100px",
                  }}
                >
                  {s.tag}
                </span>
              )}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(0,82,204,0.12), rgba(26,115,255,0.2))",
                  border: "1px solid rgba(0,102,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: "20px",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                  letterSpacing: "0.03em",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
