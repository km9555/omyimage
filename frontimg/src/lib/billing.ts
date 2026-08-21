import { SITE } from "@/lib/site";

/**
 * Region pricing — asks the backend what to quote this visitor, in their own
 * currency.
 *
 * Only the quote half of oMyPDF's `lib/billing.ts` is ported. oMyImage has no
 * checkout yet, so there is nothing here that starts a payment; when billing
 * arrives, bring the rest across rather than growing a second implementation.
 *
 * Why the server decides and the browser does not:
 *
 *   India is priced roughly 40% below every other market (₹1,188/yr for Plus
 *   against $23.88). A currency picker let anyone quote themselves that price,
 *   and — once there is a checkout — pay it. So the country is resolved
 *   server-side by the same geoip lookup that will price the real charge, and
 *   the page renders what it is told. It also means no third party is asked:
 *   the page used to call cloudflare.com/cdn-cgi/trace from the browser, which
 *   sent every visitor's IP to a CDN just to choose a symbol.
 *
 * `api.omyimage.com` is a second nginx server_name in front of the SAME Express
 * process as `api.omypdf.com` (see hosting.md §2), so `/api/billing/region` is
 * served here too and CORS already allows this origin.
 */

export type Tier = "plus" | "pro";

export interface PlanPrice {
  /** Month-to-month price. */
  monthly: number;
  /** Effective price per month when billed annually. */
  yearly: number;
  /** The single charge a yearly purchase makes. */
  yearlyTotal: number;
  /** Percentage saved by paying yearly. */
  savePct: number;
  /** The same two charges in the currency's minor unit. */
  monthlyMinor: number;
  yearlyMinor: number;
}

export interface PriceBook {
  /** ISO 4217 code, e.g. "INR". */
  currency: string;
  /** Decimals to display — 0 for currencies quoted in whole units (₹199, ¥479). */
  decimals: number;
  plans: Record<Tier, PlanPrice>;
}

export interface RegionPrices extends PriceBook {
  /** ISO 3166-1 alpha-2, or null when the region could not be resolved. */
  country: string | null;
}

/**
 * The prices for this visitor's region. Public endpoint — the pricing page is a
 * static export that signed-out visitors read too.
 *
 * The shape is checked rather than trusted: the frontend deploys separately from
 * the backend, so a version that predates the price book can answer this URL,
 * and a half-populated quote would render a page with no prices on it. A
 * rejection here falls back to list prices in USD.
 */
export async function getRegionPrices(): Promise<RegionPrices> {
  const res = await fetch(`${SITE.backendUrl}/api/billing/region`);
  if (!res.ok) throw new Error(`Region prices unavailable (${res.status})`);

  const data = (await res.json()) as RegionPrices;
  const priced = (p: PlanPrice | undefined) =>
    typeof p?.monthly === "number" &&
    typeof p?.yearlyTotal === "number" &&
    Number.isInteger(p?.monthlyMinor) &&
    Number.isInteger(p?.yearlyMinor);

  if (!data?.currency || !priced(data.plans?.plus) || !priced(data.plans?.pro)) {
    throw new Error("Region prices are incomplete.");
  }
  return data;
}
