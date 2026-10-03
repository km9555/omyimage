import { isLocale } from "@/i18n/config";
import { pageShippedIn } from "@/i18n/status";

export type Language = {
  code: string;
  label: string;
  flag: string;
  available: boolean;
};

/**
 * Every language the switchers list, in their own script (endonyms).
 *
 * The order follows the audience, not the alphabet: after English it is the
 * analytics country split (India 13.0%, Brazil 9.1%, Indonesia 9.0%, Russia
 * 6.2%, Japan 5.8%). Portuguese stays ahead of Hindi because it shipped first
 * and is complete, while Hindi is still a pilot — a visitor scanning the list
 * should meet the finished locales first.
 *
 * `available` is DERIVED, never hand-flipped: a language goes live in the
 * switchers the moment its home page is listed in i18n/status.ts, because
 * that is the page swapLocale falls back to for any page not yet translated.
 * Listing a locale as available before its home exists would send the visitor
 * nowhere.
 */
const PLANNED: Omit<Language, "available">[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  // 🇧🇷, matching LOCALE_LABEL in i18n/config.ts: the copy is Brazilian.
  { code: "pt", label: "Português", flag: "🇧🇷" },
  // 🇮🇳: Hindi, served under /hi with ENGLISH slugs (see i18n/slugs.ts).
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const LANGUAGES: Language[] = PLANNED.map((l) => ({
  ...l,
  available: l.code === "en" || (isLocale(l.code) && pageShippedIn("/", l.code)),
}));
