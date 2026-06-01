"use client";
import { useEffect, useRef, useState } from "react";

// ─── EDIT STATS HERE ──────────────────────────────────────────
const stats = [
  { value: 50, suffix: "+", label: "Brands Served", icon: "🏆" },
  { value: 3, suffix: "×", label: "Avg. ROAS Delivered", icon: "📈" },
  { value: 98, suffix: "%", label: "Client Retention Rate", icon: "❤️" },
  { value: 4, suffix: "+", label: "Years of Excellence", icon: "⭐" },
];
// ──────────────────────────────────────────────────────────────

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--bg-secondary)",
        padding: "80px 5%",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
          textAlign: "center",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} className="reveal">
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{s.icon}</div>
            <AnimatedNumber target={s.value} suffix={s.suffix} />
            <div
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginTop: "8px",
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
