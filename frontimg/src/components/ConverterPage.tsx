/**
 * The entire body of a format-converter page, rendered from `pairs.ts`.
 *
 * Every `src/app/<slug>/page.tsx` for a converter is a five-line stub that
 * defers to this. Static export still needs a real folder per route, but the
 * markup, the structured data and the copy assembly all live here once.
 *
 * Word budget lands around 1,300–1,500 with roughly 60% of it pair-specific:
 * the `unique` block from pairs.ts plus two different format essays, against
 * generated steps/features/boilerplate FAQs.
 */
import Link from "next/link";
import { getTool, toolColor } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { localeHome, toolHref } from "@/lib/i18n/links";
import { categoryNavLabel, toolName } from "@/lib/i18n/tool-labels";
import { SeoContent, type Faq, type SeoSection } from "@/components/SeoContent";
import { ConvertTool } from "@/components/ConvertTool";
import { I18nScope } from "@/i18n/I18nScope";
import { getPair } from "@/lib/converters/pairs";
import { fmt } from "@/lib/converters/formats";
import { converterDict, formatEssay, pairCopy } from "@/lib/converters/i18n";
import { relatedConverters, reversePair } from "@/lib/converters/related";
import {
  buildBoilerplateFaqs,
  buildFeatures,
  buildPrivacyNote,
  buildSecurity,
  buildSteps,
} from "@/lib/converters/copy";

export function ConverterPage({ slug, locale = DEFAULT_LOCALE }: { slug: string; locale?: Locale }) {
  const pair = getPair(slug);
  const tool = getTool(slug);
  if (!tool) {
    throw new Error(`No TOOLS entry for converter "${slug}" — add it to src/lib/tools.ts.`);
  }

  /* One dictionary for the whole page: `getT` uses it for the server markup
     here, and the <I18nScope> below hands the same object to ConvertTool,
     which is a client component with no scope of its own on these routes. */
  const dict = converterDict(locale);
  const t = getT(locale, dict);
  const home = localeHome(locale);

  const from = fmt(pair.from);
  const to = fmt(pair.to);
  const fromLabel = from.label;
  const toLabel = to.label;
  const canonical = absoluteUrl(`/${tool.slug}`);
  const accent = toolColor(tool);

  const copy = pairCopy(pair, locale, {
    seoTitle: tool.seoTitle,
    seoDescription: tool.seoDescription,
  });

  const steps = buildSteps(pair, t);
  const faqs: Faq[] = [...copy.unique.faqs, ...buildBoilerplateFaqs(pair, t)];
  const related = relatedConverters(pair, 4);
  const reverse = reversePair(pair);

  const sections: SeoSection[] = [
    {
      heading: t("Why convert {from} to {to}?", { from: fromLabel, to: toLabel }),
      id: "why",
      body: copy.unique.whyConvert,
    },
    ...copy.unique.notes.map((nb) => ({ heading: nb.heading, body: nb.body })),
    {
      heading: t("{from} and {to}, briefly", { from: fromLabel, to: toLabel }),
      id: "formats",
      body: [formatEssay(pair.from, locale), formatEssay(pair.to, locale)],
    },
  ];

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE.name} ${copy.name}`,
    url: canonical,
    operatingSystem: "All",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pair.rating.value,
      ratingCount: pair.rating.count,
    },
    description: copy.seoDescription,
    // Same rule as the HowTo below and as ToolPageShell: only on translated
    // pages, so English markup is unchanged.
    ...(locale === DEFAULT_LOCALE ? {} : { inLanguage: locale }),
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t("How to convert {from} to {to}", { from: fromLabel, to: toLabel }),
    /* Tells a crawler which language this HowTo is written in. English pages
       omit it, so their markup is byte-identical to the pre-i18n build. */
    ...(locale === DEFAULT_LOCALE ? {} : { inLanguage: locale }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs
          items={[
            { label: t("Home"), href: home },
            { label: categoryNavLabel("convert", locale), href: `${home}#cat-convert` },
            { label: toolName(tool, locale) },
          ]}
          locale={locale}
        />

        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">{copy.name}</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            {copy.seoDescription}
          </h2>
          {/* Reciprocal link, above the fold. Useful to the reader, and it
              gives every pair page one guaranteed inbound link from its twin. */}
          {reverse && (
            <p data-tool-subtitle className="text-body-sm text-on-surface-variant">
              {t("Going the other way?")}{" "}
              <Link href={toolHref(reverse.slug, locale)} className="text-secondary hover:underline">
                {t("Convert {name}", {
                  name: pairCopy(reverse, locale, { seoTitle: "", seoDescription: "" }).name,
                })}
              </Link>
              .
            </p>
          )}
        </header>

        <I18nScope locale={locale} dict={dict ?? undefined}>
        <ConvertTool
          config={{
            accent,
            accept: from.accept,
            targetMime: assertCanvasMime(pair.slug, pair.engine.target),
            targetLabel: to.label,
            flatten: pair.flatten,
            quality: pair.quality,
    metadata: pair.metadata,
            dropHint: t("or drop {from} images here", { from: fromLabel }),
            sourceKinds: pair.sourceKinds,
            sourceLabel: from.label,
            serverFallback: pair.engine.serverFallback,
            privacyNote: buildPrivacyNote(pair, t),
          }}
        />
        </I18nScope>

        <RelatedTools tools={related} locale={locale} />
      </div>

      <SeoContent
        locale={locale}
        toolName={copy.name}
        intro={copy.unique.intro}
        howToTitle={t("How to convert {from} to {to}", { from: fromLabel, to: toLabel })}
        steps={steps}
        features={buildFeatures(pair, t)}
        faqs={faqs}
        sections={sections}
        security={buildSecurity(pair, t)}
        fullWidthText
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

/**
 * ConvertTool only speaks canvas MIME types today. Phases 2–3 add `encoder`
 * and `server` targets; until then a pair declaring one is a build-time error
 * rather than a page that renders and then fails on click.
 */
function assertCanvasMime(
  slug: string,
  target: ReturnType<typeof getPair>["engine"]["target"],
) {
  if (target.kind !== "canvas") {
    throw new Error(
      `Converter "${slug}" declares a "${target.kind}" target, which ConvertTool cannot render yet.`,
    );
  }
  return target.mime;
}
