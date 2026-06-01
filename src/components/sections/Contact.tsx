"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "100px 5%", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Get in Touch</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            START YOUR <span className="gradient-text">PROJECT</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            Tell us about your brand and we&apos;ll get back within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div
            className="glass-card reveal"
            style={{ padding: "64px", textAlign: "center" }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎬</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "var(--text-primary)",
                marginBottom: "12px",
              }}
            >
              MESSAGE RECEIVED
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
              Thanks, {form.name}! We&apos;ll review your brief and reach out within 24 hours. Keep an eye on {form.email}.
            </p>
          </div>
        ) : (
          <div className="glass-card reveal" style={{ padding: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Name */}
              <div style={{ gridColumn: "span 1" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Your Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Arjun Mehta"
                  className="form-input"
                />
              </div>
              {/* Email */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="arjun@brand.com"
                  className="form-input"
                />
              </div>
              {/* Phone */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="form-input"
                />
              </div>
              {/* Service */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Service Needed
                </label>
                <select name="service" value={form.service} onChange={handleChange} className="form-input">
                  <option value="">Select a service…</option>
                  <option>Product Photography</option>
                  <option>Brand Videography</option>
                  <option>3D Rendering & CGI</option>
                  <option>Web Development</option>
                  <option>Performance Marketing</option>
                  <option>Brand Identity Design</option>
                  <option>Social Media Management</option>
                  <option>Other / Multiple Services</option>
                </select>
              </div>
              {/* Budget */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Budget Range
                </label>
                <select name="budget" value={form.budget} onChange={handleChange} className="form-input">
                  <option value="">Select budget range…</option>
                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹75,000</option>
                  <option>₹75,000 – ₹2,00,000</option>
                  <option>₹2,00,000 – ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>
              </div>
              {/* Message */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Tell Us About Your Project *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your brand, goals, timeline, and anything else that helps us understand what you need…"
                  className="form-input"
                  style={{ resize: "vertical" }}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.email || !form.message}
              className="btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "24px",
                opacity: loading || !form.name || !form.email || !form.message ? 0.6 : 1,
                cursor: loading || !form.name || !form.email || !form.message ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Sending…" : "Send Project Brief →"}
            </button>

            <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "16px" }}>
              Or reach us directly:{" "}
              <a href="tel:+918073924479" style={{ color: "var(--blue-light)", textDecoration: "none" }}>
                +91 8073 924 479
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
