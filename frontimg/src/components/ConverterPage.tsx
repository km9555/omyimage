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
import { getTool, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
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

export function ConverterPage({ slug }: { slug: string }) {
  const pair = getPair(slug);
  const tool = getTool(slug);
  if (!tool) {
    throw new Error(`No TOOLS entry for converter "${slug}" — add it to src/lib/tools.ts.`);
  }

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
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Convert", href: "/#cat-convert" },
            { label: tool.name },
          ]}
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
              <Link href={`/${reverse.slug}`} className="text-secondary hover:underline">
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
            dropHint: `or drop ${from.label} images here`,
            sourceKinds: pair.sourceKinds,
            sourceLabel: from.label,
            serverFallback: pair.engine.serverFallback,
            privacyNote: buildPrivacyNote(pair),
          }}
        />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/${r.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift"
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: toolColorTint(r) }}
                  >
                    <Icon name={r.icon} fill className="text-2xl" style={{ color: toolColor(r) }} />
                  </span>
                  <span className="text-body-md font-semibold text-primary">{r.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <SeoContent
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
