import Script from "next/script";

// Measurement ID — overridable via env, with the production property as default
// so analytics work even where NEXT_PUBLIC_GA_ID isn't set (e.g. CF Pages build).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-NL2CFW99NC";

/**
 * Loads the GA4 gtag.js tag. Rendered once from the root layout so every route
 * is covered; GA4's enhanced measurement picks up client-side navigations from
 * the History API, so no manual pageview call per route change is needed.
 *
 * `afterInteractive` keeps the tag off the critical path — it's injected after
 * hydration rather than blocking first paint.
 */
export function GoogleAnalytics() {
  if (!GA_ID) return null;

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
