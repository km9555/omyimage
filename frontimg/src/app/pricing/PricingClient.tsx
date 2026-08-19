"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

/**
 * Pricing page. Prices mirror oMyPDF's.
 *
 * There is no checkout: oMyImage has no billing or auth layer yet, so every paid
 * CTA renders disabled as "Coming soon". Nothing here should imply a purchase is
 * possible — wire `ctaHref` to a real checkout only once billing exists.
 */

// ── Currency configuration ─────────────────────────────────────────────────
// Prices are CURATED per market (not live FX) so they stay "pretty" and sit
// comfortably under the incumbents in every region. A raw FX conversion would
// make India more expensive than local competitors, so INR is PPP-discounted.

type CurrencyCode = "USD" | "EUR" | "GBP" | "INR";
type Billing = "monthly" | "yearly";

interface CurrencyDef {
  code: CurrencyCode;
  symbol: string;
  label: string;
  decimals: number;
}

const CURRENCIES: Record<CurrencyCode, CurrencyDef> = {
  USD: { code: "USD", symbol: "$", label: "USD", decimals: 2 },
  EUR: { code: "EUR", symbol: "€", label: "EUR", decimals: 2 },
  GBP: { code: "GBP", symbol: "£", label: "GBP", decimals: 2 },
  INR: { code: "INR", symbol: "₹", label: "INR", decimals: 0 },
};

const PRICES: Record<"plus" | "pro", Record<CurrencyCode, Record<Billing, number>>> = {
  plus: {
    USD: { monthly: 2.99, yearly: 1.99 },
    EUR: { monthly: 2.99, yearly: 1.99 },
    GBP: { monthly: 2.49, yearly: 1.79 },
    INR: { monthly: 199, yearly: 99 },
  },
  pro: {
    USD: { monthly: 5.99, yearly: 3.49 },
    EUR: { monthly: 5.99, yearly: 3.49 },
    GBP: { monthly: 4.99, yearly: 2.99 },
    INR: { monthly: 399, yearly: 159 },
  },
};

// Country → currency. Eurozone members map to EUR; everything else defaults USD.
const EUROZONE = new Set([
  "AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU",
  "MT", "NL", "PT", "SK", "SI", "ES",
]);

function currencyForCountry(loc: string): CurrencyCode {
  if (loc === "IN") return "INR";
  if (loc === "GB") return "GBP";
  if (EUROZONE.has(loc)) return "EUR";
  return "USD";
}

function formatMoney(amount: number, cur: CurrencyDef): string {
  const fixed = amount.toFixed(cur.decimals);
  // Thousands separators (matters for INR yearly totals like ₹1,188).
  const [int, dec] = fixed.split(".");
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${cur.symbol}${dec ? `${withSep}.${dec}` : withSep}`;
}

const STORAGE_KEY = "omyimage:currency";

// ── Plan definitions ───────────────────────────────────────────────────────

interface Plan {
  id: "free" | "plus" | "pro";
  name: string;
  badge?: string;
  tagline: string;
  priceKey: "plus" | "pro" | null; // null = free
  cta: string;
  ctaHref: string;
  highlight: boolean;
  /** Not purchasable — renders a disabled button instead of a link. */
  comingSoon?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Everything you need for everyday images.",
    priceKey: null,
    cta: "Start using the tools",
    ctaHref: "/",
    highlight: false,
    features: [
      "All 30 tools, no account needed",
      "Unlimited in-browser processing, no daily cap",
      "Server processing for files up to 100 MB",
      "10 AI runs / day",
      "Batch up to 20 files",
      "Results download straight to your device",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    badge: "Most popular",
    tagline: "For regular users who want more headroom.",
    priceKey: "plus",
    cta: "Coming soon",
    ctaHref: "/signup",
    highlight: true,
    comingSoon: true,
    features: [
      "Everything in Free",
      "Server processing for files up to 200 MB",
      "100 AI runs / day",
      "Batch up to 100 files",
      "Priority server processing",
      "24-hour download links",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Coming soon",
    tagline: "Unlimited AI, the largest files, priority speed.",
    priceKey: "pro",
    cta: "Coming soon",
    ctaHref: "/signup",
    highlight: false,
    comingSoon: true,
    features: [
      "Everything in Plus",
      "Server processing for files up to 300 MB",
      "Unlimited AI runs",
      "Unlimited batch size",
      "Top-priority processing queue",
      "7-day download links",
    ],
  },
];

const FAQS = [
  {
    q: "Do I need an account to use oMyImage?",
    a: "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.",
  },
  {
    q: "Is the free tier really free?",
    a: "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.",
  },
  {
    q: "When can I buy Plus or Pro?",
    a: "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.",
  },
  {
    q: "Why are prices different in my country?",
    a: "Prices are set per market rather than converted at the day's exchange rate, so they stay fair locally instead of tracking currency swings.",
  },
  {
    q: "What counts as an AI run?",
    a: "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.",
  },
  {
    q: "Why do the paid plans only raise the file size a little?",
    a: "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.",
  },
  {
    q: "What decides whether an image is processed in my browser or on your server?",
    a: "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.",
  },
  {
    q: "Are my images kept?",
    a: "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.",
  },
];

export function PricingClient() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // On mount: restore a saved currency choice, else guess once from the CDN's
  // geo hint. Failure is fine — USD is a sane default.
  useEffect(() => {
    let cancelled = false;
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage unavailable (private mode) — fall through to detection */
    }
    if (saved && saved in CURRENCIES) {
      setCurrency(saved as CurrencyCode);
      return;
    }
    fetch("https://www.cloudflare.com/cdn-cgi/trace")
      .then((r) => r.text())
      .then((txt) => {
        if (cancelled) return;
        const loc = /^loc=([A-Z]{2})$/m.exec(txt)?.[1];
        if (loc) setCurrency(currencyForCountry(loc));
      })
      .catch(() => {
        /* offline or blocked — keep USD */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const pickCurrency = (c: CurrencyCode) => {
    setCurrency(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* non-fatal */
    }
  };

  const cur = CURRENCIES[currency];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-container-low text-center px-margin-mobile md:px-gutter py-16 md:py-20">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 30%, var(--color-secondary) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1 text-label-sm font-label-sm text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Every tool is free today — no account needed
          </span>
          <h1 className="mt-5 text-display-lg-mobile md:text-display-lg font-black tracking-tight text-primary">
            Simple, honest pricing.
          </h1>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            Start free and stay free for everyday work. Paid plans are on the way for people who need
            bigger files and more AI runs.
          </p>
        </div>
      </section>

      {/* ── Controls ─────────────────────────────────────────────────────── */}
      <section className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-10 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 rounded-lg bg-surface-container p-1">
            {(["monthly", "yearly"] as Billing[]).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBilling(b)}
                className={`rounded-md px-4 py-2 text-body-md font-semibold capitalize transition-colors ${
                  billing === b
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {b}
                {b === "yearly" && (
                  <span className="ml-1.5 rounded-full bg-secondary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-on-secondary-fixed-variant">
                    Save 33%
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Currency selector */}
          <div className="inline-flex items-center gap-1 rounded-lg border border-surface-variant bg-surface-container-lowest p-1">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => pickCurrency(c)}
                aria-pressed={currency === c}
                className={`rounded-md px-3 py-1.5 text-label-sm font-label-sm font-semibold transition-colors ${
                  currency === c
                    ? "bg-secondary text-on-secondary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {CURRENCIES[c].label}
              </button>
            ))}
          </div>
        </div>
        {billing === "yearly" && (
          <p className="mt-3 text-center text-label-sm font-label-sm text-on-surface-variant">
            Yearly prices are shown per month, billed annually.
          </p>
        )}
      </section>

      {/* ── Plans ────────────────────────────────────────────────────────── */}
      <section className="max-w-content mx-auto px-margin-mobile md:px-gutter py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => {
            const price = plan.priceKey ? PRICES[plan.priceKey][currency][billing] : 0;
            const isFree = plan.priceKey === null;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border bg-surface-container-lowest p-6 ambient-shadow ${
                  plan.highlight ? "border-secondary shadow-lg shadow-secondary/10" : "border-surface-variant"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-label-sm font-label-sm font-bold uppercase tracking-wide ${
                      plan.highlight
                        ? "bg-secondary text-on-secondary"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <h2 className="text-headline-md font-bold text-primary mt-2">{plan.name}</h2>
                <p className="mt-1 text-body-sm text-on-surface-variant min-h-[2.5em]">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-display-md font-black text-primary">
                    {isFree ? formatMoney(0, cur) : formatMoney(price, cur)}
                  </span>
                  {!isFree && (
                    <span className="text-body-sm text-on-surface-variant">/ month</span>
                  )}
                </div>
                <p className="mt-1 text-label-sm font-label-sm text-on-surface-variant">
                  {isFree
                    ? "Free forever"
                    : billing === "yearly"
                      ? `Billed annually — ${formatMoney(price * 12, cur)} / year`
                      : "Billed monthly"}
                </p>

                {plan.comingSoon ? (
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title="Paid plans aren't available yet"
                    className="mt-6 w-full rounded-lg bg-surface-container px-6 py-3 text-body-md font-semibold text-on-surface-variant cursor-not-allowed"
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <Link
                    href={plan.ctaHref}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-body-md font-semibold text-on-secondary shadow-md shadow-secondary/30 hover:bg-secondary-container transition-colors"
                  >
                    {plan.cta} <Icon name="arrow_forward" className="text-[19px]" />
                  </Link>
                )}

                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-body-sm text-on-surface">
                      <Icon
                        name="check_circle"
                        fill
                        className="text-[18px] text-secondary shrink-0 mt-0.5"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-body-sm text-on-surface-variant">
          Paid plans aren&apos;t available to purchase yet — the prices above are what we intend to
          charge when they launch. Everything on{" "}
          <Link href="/" className="text-secondary hover:underline">
            oMyImage
          </Link>{" "}
          is free to use in the meantime.
        </p>
      </section>

      {/* ── Trust ────────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-y border-surface-variant py-14">
        <div className="max-w-content mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "lock",
              title: "Private by default",
              body: "Most tools run entirely in your browser — your images never leave your device.",
            },
            {
              icon: "bolt",
              title: "No account needed",
              body: "Open a tool and go. Sign-up has never been required to use oMyImage.",
            },
            {
              icon: "auto_delete",
              title: "Deleted automatically",
              // Worded to stay true once Plus/Pro ship: Free stores nothing at
              // all, and the paid tiers' 24-hour / 7-day figures ARE the
              // retention. "Within the hour" would contradict them on launch.
              body: "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.",
            },
          ].map((t) => (
            <div key={t.title} className="flex flex-col items-center gap-2">
              <span className="grid place-items-center w-12 h-12 rounded-full bg-secondary/15">
                <Icon name={t.icon} className="text-[24px] text-secondary" />
              </span>
              <h3 className="text-body-lg font-bold text-primary">{t.title}</h3>
              <p className="text-body-sm text-on-surface-variant max-w-xs">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="max-w-[760px] mx-auto px-margin-mobile md:px-gutter py-16 w-full">
        <h2 className="text-headline-md md:text-display-lg-mobile font-bold text-primary text-center mb-8">
          Questions
        </h2>
        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-surface-variant bg-surface-container-lowest overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface-container transition-colors"
                >
                  <span className="text-body-md font-semibold text-primary">{faq.q}</span>
                  <Icon
                    name="expand_more"
                    className={`text-[22px] text-on-surface-variant shrink-0 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="px-5 pb-4 text-body-md text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-t border-surface-variant py-16">
        <div className="max-w-content mx-auto px-margin-mobile md:px-gutter text-center">
          <h2 className="text-headline-md md:text-display-lg-mobile font-bold text-primary">
            Start now — no card, no account.
          </h2>
          <p className="mt-3 text-body-lg text-on-surface-variant max-w-xl mx-auto">
            All 30 tools are free to use today. Paid plans will add headroom, not gatekeeping.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3.5 text-body-md font-semibold text-on-secondary shadow-md shadow-secondary/30 hover:bg-secondary-container transition-colors"
          >
            Browse all tools <Icon name="arrow_forward" className="text-[19px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
