"use client";

// ─── EDIT PORTFOLIO ITEMS HERE ────────────────────────────────
const items = [
  {
    title: "Luxe Skincare Campaign",
    category: "Product Photography",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
  },
  {
    title: "Tech Startup Brand Film",
    category: "Brand Videography",
    img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80",
  },
  {
    title: "Sneaker Drop 3D Render",
    category: "3D Rendering",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    title: "Restaurant Identity System",
    category: "Brand Identity",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    title: "Fashion E-Commerce Shoot",
    category: "Product Photography",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
  },
  {
    title: "SaaS Landing Page",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  },
];
// ──────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "100px 5%", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Our Work</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            SELECTED <span className="gradient-text">PROJECTS</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto" }}>
            A glimpse into the brands we&apos;ve elevated. Every pixel has a purpose.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`portfolio-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }}
            >
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,13,26,0.85) 0%, transparent 50%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#60a5fa",
                    marginBottom: "6px",
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "white",
                    letterSpacing: "0.03em",
                  }}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://www.instagram.com/cinevexstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            See More on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
