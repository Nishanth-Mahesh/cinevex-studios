"use client";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        background: "var(--glass)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.1rem",
        transition: "all 0.25s ease",
        backdropFilter: "blur(12px)",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,102,255,0.4)";
        el.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "";
        el.style.transform = "";
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
