import type { Locale } from "@/i18n/config";

/**
 * Locale-aware number, date and byte formatting. Ported from oMyPDF.
 *
 * `n.toLocaleString()` with no argument follows the BROWSER's locale, not the
 * page's — so a Brazilian page would show "1,475" to a visitor whose browser
 * is set to English, and "1.475 characters" to an English reader whose browser
 * is set to Portuguese. Always pass the page locale (conversion.md §4.16).
 *
 * Measured, not assumed — ICU for the bare `pt` tag gives:
 *   number   1.234.567,89   (dot groups, comma decimal — the Brazilian form)
 *   short    04/09/2026     (zero-padded, four-digit year: already the form a
 *                            Brazilian document uses, so no override needed)
 *   medium   4 de set. de 2026
 */
const numberCache = new Map<string, Intl.NumberFormat>();

export function formatNumber(value: number, locale: Locale): string {
  let fmt = numberCache.get(locale);
  if (!fmt) {
    fmt = new Intl.NumberFormat(locale);
    numberCache.set(locale, fmt);
  }
  return fmt.format(value);
}

const dateCache = new Map<string, Intl.DateTimeFormat>();

/**
 * Locales whose short date ICU gets ORDERED right and FORMED wrong.
 *
 * `dateStyle: "short"` for `hi` gives "4/8/26": day first, which is correct for
 * India, and Latin digits (ICU does not use Devanagari numerals for a bare
 * `hi`, which is also correct) — but a form no Indian document, invoice or bank
 * statement uses. India writes dd/mm/yyyy, zero-padded, four-digit year.
 *
 * Portuguese needs no entry: ICU already gives it "04/09/2026".
 */
const SHORT_DATE_OVERRIDE: Partial<Record<Locale, Intl.DateTimeFormatOptions>> = {
  hi: { day: "2-digit", month: "2-digit", year: "numeric" },
};

/** Short numeric date in the page's locale — "9/4/26" in English, "04/09/2026" in Portuguese. */
export function formatDate(value: Date | number, locale: Locale): string {
  let fmt = dateCache.get(locale);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat(locale, SHORT_DATE_OVERRIDE[locale] ?? { dateStyle: "short" });
    dateCache.set(locale, fmt);
  }
  return fmt.format(value);
}

const dateTimeCache = new Map<string, Intl.DateTimeFormat>();

/** Date + time, e.g. an EXIF capture timestamp. */
export function formatDateTime(value: Date | number, locale: Locale): string {
  let fmt = dateTimeCache.get(locale);
  if (!fmt) {
    const short = SHORT_DATE_OVERRIDE[locale];
    fmt = new Intl.DateTimeFormat(
      locale,
      short
        ? { ...short, hour: "2-digit", minute: "2-digit", second: "2-digit" }
        : { dateStyle: "short", timeStyle: "medium" },
    );
    dateTimeCache.set(locale, fmt);
  }
  return fmt.format(value);
}

const longDateCache = new Map<string, Intl.DateTimeFormat>();

/** Spelled-out date for use inside a sentence — "August 23, 2026" / "23 de agosto de 2026". */
export function formatLongDate(value: Date | number, locale: Locale): string {
  let fmt = longDateCache.get(locale);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" });
    longDateCache.set(locale, fmt);
  }
  return fmt.format(value);
}

const fixedCache = new Map<string, Intl.NumberFormat>();

function fixed(value: number, digits: number, locale: Locale): string {
  const key = `${locale}:${digits}`;
  let fmt = fixedCache.get(key);
  if (!fmt) {
    fmt = new Intl.NumberFormat(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
      useGrouping: false,
    });
    fixedCache.set(key, fmt);
  }
  return fmt.format(value);
}

/**
 * Byte-size unit symbols per locale.
 *
 * Latin B/KB/MB is right for English, Portuguese and Hindi — all three use the
 * Latin abbreviations in practice, and Hindi keeps format and unit names Latin
 * by rule (conversion.md §9.2).
 *
 * Russian does not. Cyrillic Б/КБ/МБ is the form used in Windows, on Yandex,
 * and in every Russian file manager; "6 KB" beside «6 изображений» reads like
 * a string someone forgot. GOST prefers КиБ/МиБ for binary multiples, but no
 * consumer product writes that, so this follows the convention people actually
 * see rather than the standard.
 */
const BYTE_UNITS: Partial<Record<Locale, { b: string; kb: string; mb: string }>> = {
  ru: { b: "Б", kb: "КБ", mb: "МБ" },
};

const DEFAULT_BYTE_UNITS = { b: "B", kb: "KB", mb: "MB" };

/**
 * "2.45 MB" in English, "2,45 MB" in Portuguese, "2,45 МБ" in Russian.
 *
 * English output is byte-identical to the original `formatBytes` in
 * lib/image/file-naming.ts (which stays the English implementation and is what
 * this delegates to for `en`), so moving a component onto the hook changes
 * nothing for English readers.
 */
export function formatBytesIn(n: number, locale: Locale): string {
  const u = BYTE_UNITS[locale] ?? DEFAULT_BYTE_UNITS;
  if (locale === "en") {
    if (n < 1024) return `${n} ${u.b}`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} ${u.kb}`;
    return `${(n / (1024 * 1024)).toFixed(2)} ${u.mb}`;
  }
  if (n < 1024) return `${n} ${u.b}`;
  if (n < 1024 * 1024) return `${fixed(n / 1024, 0, locale)} ${u.kb}`;
  return `${fixed(n / (1024 * 1024), 2, locale)} ${u.mb}`;
}
