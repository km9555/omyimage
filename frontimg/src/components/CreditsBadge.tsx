"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { usePremiumUsage } from "@/lib/premium-usage";
import { useLocale, useT } from "@/i18n/I18nScope";
import { localeHref } from "@/lib/i18n/links";

/**
 * "Credits today" pill — premium (server/AI) runs used vs the daily cap.
 *
 * Counts locally rather than calling an API: image routes are anonymous and
 * unmetered on the server, so there is no server-side count to read yet. The
 * counter itself lives in lib/premium-usage.ts, shared with the dashboard;
 * swapping it for a server-backed hook is a change to that file alone.
 *
 * Styled with the amber chip tokens (a calm counter, not the gold CTA).
 */

export function CreditsBadge({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const { used, limit, unlimited, ready } = usePremiumUsage();
  const t = useT();
  const locale = useLocale();

  const base =
    "inline-flex items-center gap-1.5 rounded-lg border border-chip-amber-border bg-chip-amber-bg text-chip-amber-ink transition-opacity hover:opacity-90";

  const body = (value: string) => (
    <>
      <Icon name="toll" className="text-[16px] shrink-0" fill />
      {compact ? (
        <span className="text-[13px] font-bold leading-none">{value}</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="text-[13px] font-bold">{value}</span>
          <span className="text-[9px] font-semibold uppercase tracking-wide opacity-80">{t("credits")}</span>
        </span>
      )}
    </>
  );

  // Count still loading → the same chip with a dash for the count, so the
  // header does not reflow when the real number lands. No pulse: hydration
  // starts after first paint (scripts/defer-hydration.mjs), and an animation
  // running until then keeps the page "visually incomplete" for Lighthouse.
  if (!ready) {
    return (
      <span aria-hidden="true" className={`${base} ${compact ? "h-9 px-2.5" : "h-10 px-3"} ${className}`}>
        {body(limit === null ? "—" : `–/${limit}`)}
      </span>
    );
  }

  const value = unlimited ? "∞" : `${used}/${limit}`;
  const label = unlimited
    ? t("Unlimited credits")
    : t("{used} of {limit} premium runs used today", { used, limit: limit ?? 0 });

  return (
    <Link
      href={localeHref("/pricing", locale)}
      // Prefetching /pricing on every page load costs more than it saves.
      prefetch={false}
      // Named by its visible text ("0/10"), with the long form as the title,
      // which assistive tech reads as the description. An aria-label of the
      // long form alone hid the visible text from the name (WCAG 2.5.3).
      title={label}
      className={`${base} ${compact ? "h-9 px-2.5" : "h-10 px-3"} ${className}`}
    >
      {body(value)}
    </Link>
  );
}
