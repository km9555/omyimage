"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

/**
 * Building blocks shared by the admin pages. Everything here is plain divs and
 * CSS — no chart library — so the admin chunks stay small, and none of it is
 * imported outside /admin, so visitors never download it.
 */

// ── Page chrome ──────────────────────────────────────────────────────────────

export function AdminHeader({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-1">
        <Link
          href="/admin"
          className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline"
        >
          <Icon name="arrow_back" className="text-[18px]" /> Admin
        </Link>
        <h1 className="text-headline-lg font-black text-primary">{title}</h1>
      </div>
      {right}
    </div>
  );
}

export function Card({
  title,
  action,
  children,
  className = "",
}: {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex min-w-0 flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5 ${className}`}
    >
      {(title || action) && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          {title && <h2 className="text-title-md font-semibold text-primary">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

// ── Numbers ──────────────────────────────────────────────────────────────────

export const fmt = (n: number) => n.toLocaleString();

/** "+12%" against the previous period, coloured; "+N" when there was nothing before. */
function Delta({ current, previous, label }: { current: number; previous: number; label: string }) {
  if (current === previous) {
    return (
      <span className="text-label-sm font-label-sm text-on-surface-variant" title={`${fmt(previous)} ${label}`}>
        No change {label}
      </span>
    );
  }
  const up = current > previous;
  const text =
    previous === 0 ? `+${fmt(current)}` : `${up ? "+" : "−"}${Math.abs(Math.round(((current - previous) / previous) * 100))}%`;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-label-sm font-label-sm ${
        up ? "text-chip-teal-ink" : "text-error"
      }`}
      title={`${fmt(previous)} ${label}`}
    >
      <Icon name={up ? "trending_up" : "trending_down"} className="text-[15px]" />
      {text} {label}
    </span>
  );
}

export function StatTile({
  icon,
  label,
  value,
  delta,
  hint,
}: {
  icon: string;
  label: string;
  value: number | string;
  delta?: { current: number; previous: number; label: string };
  hint?: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4">
      <span className="flex items-center gap-2 text-sm leading-tight text-on-surface-variant">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-chip-sky-bg text-chip-sky-ink">
          <Icon name={icon} className="text-[17px]" />
        </span>
        {/* Wraps rather than truncating: on a phone two tiles share a row. */}
        <span className="min-w-0">{label}</span>
      </span>
      <span className="text-headline-md font-black text-primary tabular-nums">
        {typeof value === "number" ? fmt(value) : value}
      </span>
      {delta ? <Delta {...delta} /> : hint ? <span className="text-label-sm font-label-sm text-on-surface-variant">{hint}</span> : null}
    </div>
  );
}

// ── Charts ───────────────────────────────────────────────────────────────────

export interface Bar {
  key: string;
  value: number;
  /** Native tooltip — exact figures on hover. */
  title: string;
}

/**
 * Vertical bars for a short daily series (7–90 points). A 90-day range gets
 * thinner bars rather than a scroll: the container is fluid and the gap
 * shrinks with the count.
 */
export function MiniBars({
  bars,
  height = "h-36",
  tone = "bg-chip-teal-ink/80",
  emptyText = "Nothing recorded yet.",
}: {
  bars: Bar[];
  height?: string;
  tone?: string;
  emptyText?: string;
}) {
  const max = Math.max(1, ...bars.map((b) => b.value));
  if (bars.every((b) => b.value === 0)) {
    return (
      <div className={`flex ${height} items-center justify-center rounded-lg bg-surface-container/50`}>
        <span className="text-sm text-on-surface-variant">{emptyText}</span>
      </div>
    );
  }
  return (
    <div className={`flex ${height} items-end ${bars.length > 45 ? "gap-px" : "gap-1"}`} role="img" aria-label={bars.map((b) => b.title).join("; ")}>
      {bars.map((b) => (
        // h-full is required: a percentage height resolves against the parent,
        // and an auto-height flex column collapses it to 0.
        <div key={b.key} className="group flex h-full min-w-0 flex-1 flex-col justify-end" title={b.title}>
          <div
            className={`w-full rounded-t-sm ${tone} transition-opacity group-hover:opacity-70`}
            style={{ height: `${b.value === 0 ? 0 : Math.max((b.value / max) * 100, 3)}%` }}
          />
        </div>
      ))}
    </div>
  );
}

/** Axis labels under a MiniBars: first, middle and last day. */
export function BarAxis({ days }: { days: string[] }) {
  if (days.length === 0) return null;
  const pick = [days[0], days[Math.floor(days.length / 2)], days[days.length - 1]];
  return (
    <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant tabular-nums">
      {pick.map((d, i) => (
        <span key={`${d}-${i}`}>{shortDay(d)}</span>
      ))}
    </div>
  );
}

/** Horizontal bars for a ranked list ("most-used tools", "top pages"). */
export function RankList({
  rows,
  emptyText = "Nothing recorded yet.",
  tone = "bg-chip-teal-ink/80",
}: {
  rows: { key: string; label: ReactNode; count: number; title?: string }[];
  emptyText?: string;
  tone?: string;
}) {
  if (rows.length === 0) return <p className="text-sm text-on-surface-variant">{emptyText}</p>;
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <ul className="flex flex-col gap-2">
      {rows.map((r) => (
        <li key={r.key} className="flex min-w-0 items-center gap-3" title={r.title}>
          <span className="w-2/5 min-w-0 shrink-0 truncate text-sm text-on-surface">{r.label}</span>
          <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-surface-container">
            <span className={`block h-full rounded-full ${tone}`} style={{ width: `${(r.count / max) * 100}%` }} />
          </span>
          <span className="w-14 shrink-0 text-right text-sm tabular-nums text-on-surface-variant">
            {fmt(r.count)}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── Countries ────────────────────────────────────────────────────────────────

let regionNames: Intl.DisplayNames | null = null;

/** "IN" → "India", via the browser's own data (no country table shipped). */
export function countryName(code: string | null): string {
  if (!code) return "Unknown";
  try {
    regionNames ??= new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code) ?? code;
  } catch {
    return code;
  }
}

/** Regional-indicator pair for an ISO code. Rendered with the self-hosted flag face. */
export function Flag({ code, className = "" }: { code: string | null; className?: string }) {
  if (!code || !/^[A-Z]{2}$/.test(code)) {
    return <Icon name="public" className={`text-[16px] text-on-surface-variant ${className}`} />;
  }
  const emoji = String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
  return (
    <span className={`flag-emoji ${className}`} aria-hidden="true">
      {emoji}
    </span>
  );
}

// ── Dates ────────────────────────────────────────────────────────────────────

export function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

/** "2026-10-04" (a UTC day from the API) → "4 Oct". Parsed as UTC so it never slips a day. */
export function shortDay(day: string): string {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString(undefined, {
    day: "numeric", month: "short", timeZone: "UTC",
  });
}

/** "just now", "5 min ago", "3 h ago", "2 d ago", then a date. */
export function relativeTime(iso: string | null): string {
  if (!iso) return "Never";
  const s = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return "Just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86_400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 30 * 86_400) return `${Math.floor(s / 86_400)} d ago`;
  return formatDate(iso);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let v = bytes / 1024;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
  return `${v.toFixed(v < 10 ? 1 : 0)} ${units[i]}`;
}

const UPPER = new Set(["jpg", "jpeg", "png", "webp", "gif", "heic", "svg", "bmp", "avif", "html", "ocr", "ai"]);

/** "png-to-webp" → "PNG to WEBP". */
export function niceTool(slug: string): string {
  return slug
    .split("-")
    .map((w, i) => {
      if (UPPER.has(w)) return w.toUpperCase();
      if (i > 0 && (w === "to" || w === "in")) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}
