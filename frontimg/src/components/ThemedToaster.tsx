"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/lib/theme/ThemeProvider";

/** Sonner toaster wired to the app's light/dark theme. */
export function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster theme={theme} position="bottom-center" richColors closeButton />;
}
