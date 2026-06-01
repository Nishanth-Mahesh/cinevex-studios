"use client";

// ─── EDIT FOOTER CONTENT HERE ─────────────────────────────────
const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Product Photography", href: "#services" },
  { label: "Brand Videography", href: "#services" },
  { label: "3D Rendering", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "Performance Marketing", href: "#services" },
];

const socialLinks = [
  { icon: "📸", name: "Instagram", href: "https://www.instagram.com/cinevexstudios?igsh=eWphcmxvc3F5dXhz" },
  { icon: "💼", name: "LinkedIn", href: "https://www.linkedin.com/in/cinevex-studios-b78b44412/" },
  { icon: "🎬", name: "YouTube", href: "https://www.youtube.com/@CinevexStudios" },
];
// ──────────────────────────────────────────────────────────────

const linkStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  marginBottom: "12px",
  textDecoration: "none",
  color: "rgba(255,255,255,0.5)",
  transition: "color 0.2s ease",
  fontFamily: "var(--font-body)",
};

export default function Footer() {
  return (
    <footer style={{ background: "#060D1A", color: "white" }} className="px-[5%] pt-16 pb-8">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            height: "1px",
            marginBottom: "64px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,102,255,0.4), rgba(26,115,255,0.6), rgba(0,102,255,0.4), transparent)",
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12" style={{ marginBottom: "64px" }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #0052cc, #1a73ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                }}
              >
                🎬
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.05em",
                  background: "linear-gradient(135deg,#60A5FA,#93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CINEVEX STUDIOS
              </span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.4)",
                marginBottom: "20px",
                maxWidth: "260px",
              }}
            >
              One Partner. Unlimited Possibilities. Premium creative agency crafting extraordinary brand experiences.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { icon: "📧", text: "contactcinevexstudios@gmail.com", href: "mailto:contactcinevexstudios@gmail.com" },
                { icon: "📞", text: "+91 8073 924 479", href: "tel:+918073924479" },
                { icon: "📍", text: "Mysore, Karnataka, India", href: "https://maps.google.com/?q=Mysore,Karnataka,India" },
                { icon: "🌐", text: "cinevexstudios.com", href: "https://cinevexstudios.com" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h4>
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "20px",
              }}
            >
              Services
            </h4>
            {serviceLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "20px",
              }}
            >
              Connect
            </h4>
            {socialLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "10px" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                <span>{l.icon}</span>
                <span>{l.name}</span>
              </a>
            ))}
            <div
              style={{
                marginTop: "20px",
                padding: "14px 18px",
                borderRadius: "14px",
                background: "rgba(0,102,255,0.08)",
                border: "1px solid rgba(0,102,255,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Business Hours
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>Mon – Sat · 9 AM – 7 PM IST</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
            © 2025 Cinevex Studios · Crafted with precision · All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(0,102,255,0.2)";
                  el.style.borderColor = "rgba(0,102,255,0.4)";
                  el.style.color = "white";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "";
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.color = "rgba(255,255,255,0.45)";
                  el.style.transform = "";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
