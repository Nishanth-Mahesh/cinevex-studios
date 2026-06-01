"use client";

// ─── EDIT ANNOUNCEMENTS HERE ───────────────────────────────────
const announcements = [
  "🎬 Now Booking: Brand Films for Q3 2025",
  "📸 Product Photography Packages Starting ₹15,000",
  "🌐 New Web Portfolio: cinevexstudios.com",
  "✨ 3D Render Services Now Available",
  "🏆 50+ Premium Brands Served Across India",
  "📱 Social Media Content Creation — Monthly Plans Live",
  "🎯 Performance Marketing: Proven 3× ROAS for Clients",
  "🚀 Limited Slots Open — Book Your Discovery Call Today",
];
// ──────────────────────────────────────────────────────────────

export default function AnnouncementBar() {
  // Duplicate for seamless loop
  const items = [...announcements, ...announcements];

  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {items.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
