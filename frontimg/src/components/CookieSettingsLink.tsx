"use client";

import { REOPEN_EVENT, clearConsent } from "@/lib/cookie-consent";
import { useT } from "@/i18n/I18nScope";

/**
 * Footer control that reopens the consent banner.
 *
 * Split out of Footer when the footer was a server component. It is a client
 * component now (it reads the locale from the URL), but the split stays.
 *
 * Clearing the stored choice before firing the event matters: the banner hides
 * itself whenever a stored consent exists, and globals.css hides it outright
 * while html[data-cookie-choice] is set. The listener removes that attribute;
 * clearing storage is what stops the banner immediately re-hiding itself.
 */
export function CookieSettingsLink() {
  const t = useT();
  return (
    <button
      type="button"
      onClick={() => {
        clearConsent();
        window.dispatchEvent(new Event(REOPEN_EVENT));
      }}
      className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
    >
      {t("Cookie Settings")}
    </button>
  );
}
