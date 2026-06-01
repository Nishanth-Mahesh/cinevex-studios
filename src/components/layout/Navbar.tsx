"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// ─── EDIT NAV LINKS HERE ───────────────────────────────────────
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
// ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "36px", // offset for announcement bar
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 5%",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #0052cc, #1a73ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              boxShadow: "0 4px 16px rgba(0,102,255,0.3)",
            }}
          >
            🎬
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              letterSpacing: "0.05em",
              color: "var(--text-primary)",
            }}
          >
            CINEVEX STUDIOS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: "8px 16px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: "100px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-primary)";
                el.style.background = "var(--glass)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-secondary)";
                el.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Toggle + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "10px 22px", fontSize: "0.85rem" }}
          >
            Start a Project
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "var(--glass)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "0",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          borderTop: menuOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <div style={{ padding: "16px 5%", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 16px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "12px",
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ justifyContent: "center", marginTop: "8px" }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
