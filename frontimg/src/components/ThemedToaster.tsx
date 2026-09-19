"use client";

import { Toaster } from "sonner";
import { useT } from "@/i18n/I18nScope";
import { useTheme } from "@/lib/theme/ThemeProvider";

/**
 * Sonner toaster wired to the app's light/dark theme.
 *
 * Sonner ships two English accessible names of its own — the region
 * ("Notifications") and every close button ("Close toast"). Neither is a JSX
 * literal in this codebase, so no scan can see them; they were found by
 * reading the DOM of a Portuguese result screen. Both are props.
 */
export function ThemedToaster() {
  const { theme } = useTheme();
  const t = useT();
  return (
    <Toaster
      theme={theme}
      position="bottom-center"
      richColors
      closeButton
      containerAriaLabel={t("Notifications")}
      toastOptions={{ closeButtonAriaLabel: t("Close toast") }}
    />
  );
}
