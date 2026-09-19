"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { useT } from "@/i18n/I18nScope";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const t = useT();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — render a stable placeholder until mounted.
  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t("Switch to light mode") : t("Switch to dark mode")}
      title={isDark ? t("Light mode") : t("Dark mode")}
      className={`flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors ${className}`}
    >
      <Icon
        name={isDark ? "light_mode" : "dark_mode"}
        className="text-[20px]"
        fill={isDark}
      />
    </button>
  );
}
