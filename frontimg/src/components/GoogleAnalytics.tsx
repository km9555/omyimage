"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getStoredConsent } from "@/lib/cookie-consent";

// Measurement ID — overridable via env, with the production property as default
// so analytics work even where NEXT_PUBLIC_GA_ID isn't set (e.g. CF Pages build).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-NL2CFW99NC";

/**
 * Loads the GA4 gtag.js tag, but ONLY once the visitor has accepted analytics
 * cookies. Until then nothing is requested from googletagmanager.com at all —
 * the tag is not loaded-then-disabled, it is simply absent, so no `_ga` cookie
 * is ever created for a visitor who declined or who never answered the banner.
 *
 * The consent check runs in an effect rather than during render because
 * localStorage does not exist during the static export, and reading it while
 * rendering would desynchronise the server and client trees.
 *
 * CookieBanner reloads the page when the analytics choice flips, which is what
 * makes this mount with the new answer.
 */
export function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(getStoredConsent() === "accepted");
  }, []);

  if (!GA_ID || !accepted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
