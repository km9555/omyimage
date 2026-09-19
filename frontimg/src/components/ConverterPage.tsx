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
import { getPair } from "@/lib/converters/pairs";
import { fmt } from "@/lib/converters/formats";
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

  const t = getT(locale);
  const home = localeHome(locale);

  const from = fmt(pair.from);
  const to = fmt(pair.to);
  const canonical = absoluteUrl(`/${tool.slug}`);
  const accent = toolColor(tool);

  const steps = buildSteps(pair);
  const faqs: Faq[] = [...pair.unique.faqs, ...buildBoilerplateFaqs(pair)];
  const related = relatedConverters(pair, 4);
  const reverse = reversePair(pair);

  const sections: SeoSection[] = [
    {
      heading: `Why convert ${from.label} to ${to.label}?`,
      id: "why",
      body: pair.unique.whyConvert,
    },
    ...pair.unique.notes.map((nb) => ({ heading: nb.heading, body: nb.body })),
    {
      heading: `${from.label} and ${to.label}, briefly`,
      id: "formats",
      body: [from.essay, to.essay],
    },
  ];

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE.name} ${pair.name}`,
    url: canonical,
    operatingSystem: "All",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pair.rating.value,
      ratingCount: pair.rating.count,
    },
    description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to convert ${from.label} to ${to.label}`,
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
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">{pair.name}</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            {tool.seoDescription}
          </h2>
          {/* Reciprocal link, above the fold. Useful to the reader, and it
              gives every pair page one guaranteed inbound link from its twin. */}
          {reverse && (
            <p data-tool-subtitle className="text-body-sm text-on-surface-variant">
              Going the other way?{" "}
              <Link href={toolHref(reverse.slug, locale)} className="text-secondary hover:underline">
                Convert {reverse.name}
              </Link>
              .
            </p>
          )}
        </header>

        <ConvertTool
          config={{
            accent,
            accept: from.accept,
            targetMime: assertCanvasMime(pair.slug, pair.engine.target),
            targetLabel: to.label,
            flatten: pair.flatten,
            quality: pair.quality,
    metadata: pair.metadata,
            dropHint: `or drop ${from.label} images here`,
            sourceKinds: pair.sourceKinds,
            sourceLabel: from.label,
            serverFallback: pair.engine.serverFallback,
            privacyNote: buildPrivacyNote(pair),
          }}
        />

        <RelatedTools tools={related} locale={locale} />
      </div>

      <SeoContent
        locale={locale}
        toolName={pair.name}
        intro={pair.unique.intro}
        howToTitle={`How to convert ${from.label} to ${to.label}`}
        steps={steps}
        features={buildFeatures(pair)}
        faqs={faqs}
        sections={sections}
        security={buildSecurity(pair)}
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
