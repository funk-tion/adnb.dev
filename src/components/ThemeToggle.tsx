"use client";

import { toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={(e) => toggleTheme(e.clientX, e.clientY)}
      className="text-sm text-muted transition-colors hover:text-signal"
    >
      <span className="when-light">dark</span>
      <span className="when-dark">light</span>
    </button>
  );
}
