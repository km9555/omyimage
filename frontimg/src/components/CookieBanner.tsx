"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import {
  type CookiePrefs,
  REOPEN_EVENT,
  getStoredConsent,
  getStoredPrefs,
  storePrefs,
} from "@/lib/cookie-consent";

const CATEGORIES: { id: keyof CookiePrefs | "necessary"; title: string; desc: string; locked?: boolean }[] = [
  {
    id: "necessary",
    title: "Necessary cookies",
    locked: true,
    desc: "Required for core site features such as security, remembering your theme, and storing your cookie choice.",
  },
  {
    id: "analytics",
    title: "Analytics cookies",
    desc: "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.",
  },
  {
    id: "advertising",
    title: "Advertising cookies",
    desc: "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.",
  },
  {
    id: "functional",
    title: "Functional cookies",
    desc: "Enable enhanced features such as saved preferences and a more personalised experience.",
  },
];

const DEFAULT_PREFS: CookiePrefs = { analytics: false, advertising: false, functional: false };

function ConsentCheckbox({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <span className="relative block w-5 h-5 shrink-0 mt-0.5">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-default"
        aria-label={disabled ? "Always on" : undefined}
      />
      <span className="pointer-events-none absolute inset-0 rounded-md border-2 border-outline-variant bg-surface-container-lowest transition-colors peer-checked:border-secondary peer-checked:bg-secondary peer-disabled:opacity-90" />
      <Icon
        name="check"
        className="pointer-events-none absolute inset-0 grid place-items-center text-[14px] text-on-secondary opacity-0 peer-checked:opacity-100 transition-opacity"
      />
    </span>
  );
}

export function CookieBanner() {
  // Rendered in the server HTML (visible by default) so it paints with the first
  // contentful paint instead of popping in at hydration. Returning visitors never
  // see it: the pre-paint script in layout.tsx sets html[data-cookie-choice] from
  // localStorage and globals.css hides #cookie-banner before React loads.
  const [visible, setVisible] = useState(true);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(DEFAULT_PREFS);

  useEffect(() => {
    if (getStoredConsent() !== null) setVisible(false);

    const handler = () => {
      document.documentElement.removeAttribute("data-cookie-choice");
      setPrefs(getStoredPrefs() ?? DEFAULT_PREFS);
      setCustomizing(false);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, handler);
    return () => window.removeEventListener(REOPEN_EVENT, handler);
  }, []);

  const apply = (p: CookiePrefs) => {
    const wasAnalytics = getStoredConsent() === "accepted";
    storePrefs(p);
    document.documentElement.setAttribute("data-cookie-choice", "1");
    setVisible(false);
    // GA only (un)loads on a fresh page, so reload when analytics actually flips.
    if (p.analytics !== wasAnalytics) window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className={`fixed z-50 inset-x-0 flex justify-center px-3 sm:px-4 ${
        customizing ? "inset-y-0 items-center" : "bottom-0 pb-3 sm:pb-6"
      }`}
    >
      <div
        className={`w-full ${
          customizing ? "sm:max-w-3xl" : "sm:max-w-2xl"
        } max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-variant bg-surface-container-lowest shadow-2xl ambient-shadow p-5 ${
          customizing ? "sm:p-5" : "sm:p-6"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="hidden sm:grid place-items-center w-9 h-9 rounded-xl bg-secondary/10 shrink-0">
            <Icon name="cookie" fill className="text-[20px] text-secondary" />
          </span>
          <div className="min-w-0">
            <h2 className="text-title-md font-bold text-primary">We value your privacy</h2>
            <p className="mt-1.5 text-body-sm text-on-surface-variant leading-relaxed">
              oMyImage uses a small number of cookies. The necessary ones keep the site working;
              analytics cookies are optional and off until you allow them. Your images are never
              involved either way.{" "}
              <Link
                href="/cookies"
                className="text-secondary font-semibold hover:underline whitespace-nowrap"
              >
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>

        {customizing && (
          <div className="mt-3 flex flex-col gap-2">
            {CATEGORIES.map((cat) => {
              const checked = cat.locked ? true : prefs[cat.id as keyof CookiePrefs];
              return (
                <label
                  key={cat.id}
                  className={`flex items-start gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest p-3 transition-colors ${
                    cat.locked
                      ? "cursor-default"
                      : "cursor-pointer hover:border-outline-variant hover:bg-surface-container/40"
                  }`}
                >
                  <ConsentCheckbox
                    checked={checked}
                    disabled={cat.locked}
                    onChange={
                      cat.locked
                        ? undefined
                        : (v) => setPrefs((p) => ({ ...p, [cat.id as keyof CookiePrefs]: v }))
                    }
                  />
                  <div className="min-w-0">
                    <p className="text-body-md font-semibold text-primary">{cat.title}</p>
                    <p className="mt-0.5 text-body-sm text-on-surface-variant leading-snug">
                      {cat.desc}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        )}

        <div className={`${customizing ? "mt-4" : "mt-5"} flex flex-wrap items-center gap-2`}>
          {!customizing ? (
            <>
              <button
                type="button"
                onClick={() => apply({ analytics: true, advertising: true, functional: true })}
                className="px-[16px] py-[8px] rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary text-body-sm font-semibold transition-colors"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => apply(DEFAULT_PREFS)}
                className="px-[16px] py-[8px] rounded-lg border border-surface-variant text-on-surface text-body-sm font-semibold hover:bg-surface-container transition-colors"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="px-[13px] py-[8px] rounded-lg border border-surface-variant bg-surface-container/50 text-on-surface-variant text-body-sm font-semibold hover:bg-surface-container transition-colors"
              >
                Customize
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => apply(prefs)}
                className="px-[18px] py-[9px] rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary text-body-sm font-semibold transition-colors"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(false)}
                className="px-[18px] py-[9px] rounded-lg border border-surface-variant text-on-surface text-body-sm font-semibold hover:bg-surface-container transition-colors"
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
