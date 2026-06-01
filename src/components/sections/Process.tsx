"use client";
import { useState } from "react";

// ─── EDIT PROCESS STEPS HERE ──────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Discovery Call",
    short: "We listen first.",
    desc: "A focused 30-minute call to understand your brand, goals, audience, and timeline. No templates — every brief is custom.",
    icon: "📞",
  },
  {
    num: "02",
    title: "Strategy & Brief",
    short: "Planning the work.",
    desc: "We build a creative brief, moodboard, and detailed project plan. You approve before a single pixel is made.",
    icon: "📋",
  },
  {
    num: "03",
    title: "Creative Production",
    short: "Craft in motion.",
    desc: "Our team executes with precision — photography, video, design, or development — using our 12-point quality checklist.",
    icon: "🎬",
  },
  {
    num: "04",
    title: "Review & Refinement",
    short: "Your feedback, applied.",
    desc: "You receive a private review link. Two rounds of revisions are included in every project — no nickel-and-diming.",
    icon: "🔍",
  },
  {
    num: "05",
    title: "Delivery & Support",
    short: "Delivered perfectly.",
    desc: "Final assets delivered in all formats you need, with a 14-day support window post-delivery. Done right, always.",
    icon: "🚀",
  },
];
// ──────────────────────────────────────────────────────────────

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" style={{ padding: "100px 5%", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">How We Work</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            OUR <span className="gradient-text">PROCESS</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto" }}>
            Simple. Structured. Stress-free. Here&apos;s how every project unfolds.
          </p>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
          {/* Step list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px 24px",
                  borderRadius: "16px",
                  border: active === i ? "1px solid rgba(0,102,255,0.3)" : "1px solid transparent",
                  background: active === i ? "rgba(0,102,255,0.06)" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: active === i ? "#1a73ff" : "var(--text-secondary)",
                    opacity: active === i ? 1 : 0.4,
                    transition: "all 0.25s ease",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem",
                      color: active === i ? "var(--text-primary)" : "var(--text-secondary)",
                      letterSpacing: "0.03em",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {step.short}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            className="glass-card"
            style={{ padding: "48px", minHeight: "280px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{steps[active].icon}</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                color: "#1a73ff",
                marginBottom: "12px",
              }}
            >
              STEP {steps[active].num}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "0.02em",
              }}
            >
              {steps[active].title}
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
              {steps[active].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
