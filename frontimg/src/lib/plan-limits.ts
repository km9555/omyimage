/**
 * Plan names and allowances, in one place.
 *
 * These MUST agree with three other things, and there is no runtime check that
 * they do — so change them together:
 *   • the pricing page (`app/pricing/PricingClient.tsx`)
 *   • the `omyimage.plans` table (backend migration `img_002_plan_axes.sql`)
 *   • `IMAGE_MAX_UPLOAD_MB` on the backend, which is the Free tier's real cap
 *
 * oMyPDF learned this the hard way: its dashboard kept a private copy of the
 * limits keyed on a retired tier scheme, so every `plus` customer fell through
 * to the free defaults and was told they were on Free with 10 conversions a day.
 * One module, imported everywhere, is the fix.
 */

export type PlanId = "free" | "plus" | "pro";

export const PLAN_DISPLAY_NAMES: Record<string, string> = {
  free: "Free",
  plus: "Plus",
  pro: "Pro",
};

/**
 * Server-side AI runs per day — Remove Background and Upscale Image. `null`
 * means unlimited.
 *
 * `null` is deliberately not `Infinity` or a big number: a nullish-coalescing
 * fallback like `limit ?? 10` would silently collapse "unlimited" into the free
 * allowance and downgrade the best customers. Only a MISSING plan should fall
 * back — see `premiumDailyLimit`.
 */
export const PLAN_PREMIUM_DAILY: Record<string, number | null> = {
  free: 10,
  plus: 100,
  pro: null,
};

/** Server-side upload ceiling per plan, in MB. Free's is the live backend cap. */
export const PLAN_MAX_UPLOAD_MB: Record<string, number> = {
  free: 100,
  plus: 200,
  pro: 300,
};

/** Daily AI-run allowance for a plan. Unknown plan → Free. `null` = unlimited. */
export function premiumDailyLimit(plan: string | null | undefined): number | null {
  const key = plan ?? "free";
  return key in PLAN_PREMIUM_DAILY ? PLAN_PREMIUM_DAILY[key] : PLAN_PREMIUM_DAILY.free;
}

/** Human sentence for the allowance, so the copy can't drift from the numbers. */
/**
 * "10 AI runs per day". Takes the caller's translator (it is a plain function,
 * so it cannot call useT() itself); English when omitted. Plan NAMES below are
 * product names and stay untranslated (conversion.md §5).
 */
export function planAllowanceLabel(
  plan: string | null | undefined,
  t: (key: string, vars?: Record<string, string | number>) => string = englishT,
): string {
  const limit = premiumDailyLimit(plan);
  return limit === null ? t("Unlimited AI runs") : t("{n} AI runs per day", { n: limit });
}

function englishT(key: string, vars?: Record<string, string | number>): string {
  return key.replace(/\{(\w+)\}/g, (m, k: string) => (vars && k in vars ? String(vars[k]) : m));
}

/** Display name for a plan, defaulting to Free for anything unrecognised. */
export function planLabel(plan: string | null | undefined): string {
  return PLAN_DISPLAY_NAMES[plan ?? "free"] ?? "Free";
}
