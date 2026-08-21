"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getRegionPrices, type PriceBook } from "@/lib/billing";

/**
 * Pricing page. Prices mirror oMyPDF's.
 *
 * There is no checkout: oMyImage has no billing or auth layer yet, so every paid
 * CTA renders disabled as "Coming soon". Nothing here should imply a purchase is
 * possible — wire `ctaHref` to a real checkout only once billing exists.
 */

// ── Pricing ────────────────────────────────────────────────────────────────
// There is no price table here and no currency picker. The backend resolves the
// visitor's country by geoip and answers with the price book for that market;
// this page renders what it is told. India is priced ~40% below everywhere else,
// which is exactly why the browser gets no say — see lib/billing.ts.

type Billing = "monthly" | "yearly";

/**
 * Shown only when the quote cannot be fetched (backend down, or a browser
 * blocking the request). Mirrors the USD entry of OVERRIDES in the backend's
 * lib/pricing.ts — list prices, and the page says so.
 */
const FALLBACK_BOOK: PriceBook = {
  currency: "USD",
  decimals: 2,
  plans: {
    plus: { monthly: 2.99, yearly: 1.99, yearlyTotal: 23.88, savePct: 33, monthlyMinor: 299, yearlyMinor: 2388 },
    pro: { monthly: 5.99, yearly: 3.49, yearlyTotal: 41.88, savePct: 42, monthlyMinor: 599, yearlyMinor: 4188 },
  },
};

/**
 * Format in the visitor's own locale — Intl knows every currency's symbol and
 * grouping (₹1,18,800 in India, 4,29 € in Germany), which a symbol table of ours
 * would only ever approximate. `decimals` comes from the server so whole-unit
 * currencies read ₹199 and ¥479 rather than ₹199.00.
 */
function formatMoney(amount: number, book: PriceBook): string {
  const opts: Intl.NumberFormatOptions = {
    style: "currency",
    currency: book.currency,
    minimumFractionDigits: book.decimals,
    maximumFractionDigits: book.decimals,
  };
  try {
    // narrowSymbol keeps it "$2.99" rather than "US$2.99"; unsupported on older
    // Safari, where the plain symbol is the right thing to fall back to.
    return new Intl.NumberFormat(undefined, { ...opts, currencyDisplay: "narrowSymbol" }).format(amount);
  } catch {
    try {
      return new Intl.NumberFormat(undefined, opts).format(amount);
    } catch {
      return `${book.currency} ${amount.toFixed(book.decimals)}`;
    }
  }
}

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
    a: "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Null until the quote lands, so the page shows placeholders rather than
  // briefly quoting dollars to someone about to be quoted rupees.
  const [book, setBook] = useState<PriceBook | null>(null);

  useEffect(() => {
    let cancelled = false;
    getRegionPrices()
      .then((r) => {
        if (cancelled) return;
        setBook({ currency: r.currency, decimals: r.decimals, plans: r.plans });
      })
      .catch(() => {
        // Backend unreachable, or the request was blocked. Show USD list prices
        // and label them as such rather than an empty page.
        if (!cancelled) setBook(FALLBACK_BOOK);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const prices = book ?? FALLBACK_BOOK;
  const priced = book !== null;
  // The badge should promise the best saving actually on offer, not a number
  // baked in here that a re-priced market would quietly contradict.
  const maxSavePct = Math.max(
    ...PLANS.filter((p) => p.priceKey).map((p) => prices.plans[p.priceKey!].savePct),
  );

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
                    Save {maxSavePct}%
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Where the currency picker used to be: what we're quoting in, as a
              statement of fact. It follows the region, so it needs no control. */}
          <span
            className="inline-flex items-center gap-2 rounded-full border border-surface-variant bg-surface-container-lowest px-4 py-2.5 text-label-md font-medium text-on-surface-variant"
            title="Prices are shown in the currency of your region."
          >
            <Icon name="payments" className="text-[18px]" />
            {priced ? `Prices in ${prices.currency}` : "Loading prices…"}
          </span>
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
            const quote = plan.priceKey ? prices.plans[plan.priceKey] : null;
            const price = quote ? quote[billing] : 0;
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
                    {formatMoney(price, prices)}
                  </span>
                  {!isFree && (
                    <span className="text-body-sm text-on-surface-variant">/ month</span>
                  )}
                </div>
                <p className="mt-1 text-label-sm font-label-sm text-on-surface-variant">
                  {isFree
                    ? "Free forever"
                    : billing === "yearly"
                      /* The server's own annual figure, not price × 12 — the two
                         disagree in rounded currencies (₹99 × 12 ≠ ₹1,188). */
                      ? `Billed annually — ${formatMoney(quote!.yearlyTotal, prices)} / year`
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
