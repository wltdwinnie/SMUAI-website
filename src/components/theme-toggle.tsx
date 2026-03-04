"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isClient) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-muted"
      aria-label="Toggle theme"
    >
      {current === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{current === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
