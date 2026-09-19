/**
 * The shape of a tool page's COPY — the only thing that differs between
 * locales. Structure lives in `src/components/ToolPageShell.tsx`, behaviour in
 * the tool's own component; both are shared by every locale.
 *
 * One module per tool per locale: `src/content/tools/<toolId>.<locale>.ts`.
 * Ported from oMyPDF, plus the two fields oMyImage pages carry that oMyPDF's
 * do not (a per-page `rating`, and a tagline that may inherit the registry's
 * seoDescription).
 */
import type { Locale } from "@/i18n/config";
import type { Faq, Feature, HowToStep, SeoSection } from "@/components/SeoContent";
import type { Dict } from "@/i18n/t";

export interface ToolPageContent {
  /** Tool registry id. */
  toolId: string;
  locale: Locale;

  /** The `<h1>`, and the default for `seoName`. */
  name: string;
  /**
   * The product name for the "<seoName> features" heading and the
   * SoftwareApplication schema, when it differs from the h1.
   */
  seoName?: string;
  /**
   * The `<h2>` sub-headline under the h1. English modules may omit it to
   * inherit `tool.seoDescription` (several pages print exactly that);
   * translated modules must set it.
   */
  tagline?: string;
  /**
   * Category crumb between Home and the tool. `id` is the home-page pill
   * fragment (`#cat-optimize`).
   */
  category: { id: string; label: string };
  /**
   * One-line pointer to a sibling tool, under the tagline — "Want a smaller
   * file instead? Convert HEIC to JPG." Renders `{lead} <Link>{label}</Link>.`
   * and links through toolHref, so it stays inside the locale once the target
   * has shipped there.
   */
  crossLink?: { lead: string; label: string; toolId: string };
  /**
   * Last breadcrumb. English modules omit it and inherit the registry `name`
   * (which may differ from the h1: "All-in-One Image Editor" vs "Image
   * Editor"); translated modules default to `name`.
   */
  crumbLabel?: string;

  /**
   * Page `<title>` and description. English modules omit both and inherit
   * `tool.seoTitle` / `tool.seoDescription` from the registry, so English SEO
   * keeps one source of truth. Translated modules MUST set them — nothing
   * else fails when they are missing (oMyPDF conversion.md §4.22).
   */
  metaTitle?: string;
  metaDescription?: string;

  // ── Long-form SEO block ──────────────────────────────────────────────
  intro: string;
  sections?: SeoSection[];
  howToTitle: string;
  steps: HowToStep[];
  features: Feature[];
  faqs: Faq[];
  security?: string;
  fullWidthText?: boolean;

  // ── Structured data ──────────────────────────────────────────────────
  /** SoftwareApplication name. Defaults to "oMyImage <seoName ?? name>". */
  schemaName?: string;
  /** HowTo schema name. Defaults to `howToTitle`. */
  howToSchemaName?: string;
  /** AggregateRating. Identical in every locale — it is one product. */
  rating?: { value: string; count: string };

  /**
   * This tool's micro-copy, keyed by the English source string. Supplied to
   * the tool's components through I18nScope, so it is code-split with this
   * route instead of shipping to every page. English modules omit it.
   */
  ui?: Dict;
}
