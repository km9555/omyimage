"use client";

import { REOPEN_EVENT, clearConsent } from "@/lib/cookie-consent";

/**
 * Footer control that reopens the consent banner.
 *
 * Split out of Footer so the footer itself stays a server component — it is
 * otherwise entirely static markup, and this is the only interactive part of it.
 *
 * Clearing the stored choice before firing the event matters: the banner hides
 * itself whenever a stored consent exists, and globals.css hides it outright
 * while html[data-cookie-choice] is set. The listener removes that attribute;
 * clearing storage is what stops the banner immediately re-hiding itself.
 */
export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => {
        clearConsent();
        window.dispatchEvent(new Event(REOPEN_EVENT));
      }}
      className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
    >
      Cookie Settings
    </button>
  );
}
