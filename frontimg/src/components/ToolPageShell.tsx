import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { SeoContent } from "@/components/SeoContent";
import { I18nScope } from "@/i18n/I18nScope";
import { DEFAULT_LOCALE, LOCALE_TAG } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { toolPath } from "@/i18n/slugs";
import { localeHome, toolHref } from "@/lib/i18n/links";
import { absoluteUrl, SITE } from "@/lib/site";
import { relatedTools, TOOLS_BY_ID } from "@/lib/tools";
import type { ToolPageContent } from "@/content/tools/types";

/**
 * The structure of a tool page, in ONE place. Ported from oMyPDF.
 *
 * Before localization, 27 of oMyImage's 30 hand-built tool pages were the same
 * ~145-line file differing only in copy and the tool component. This owns that
 * layout — breadcrumbs, hero, the tool slot, the related-tools strip, the
 * long-form SEO block, and the SoftwareApplication + HowTo structured data — so
 * restyling it here restyles every tool in every language.
 *
 * Copy comes from `src/content/tools/<toolId>.<locale>.ts`; the tool's own
 * micro-copy rides along in `content.ui` and is handed to the children through
 * I18nScope, so it is code-split with this route rather than bundled globally.
 *
 * English markup is byte-identical to the pre-shell pages (verified by diffing
 * the exported HTML text). `inLanguage` is emitted on translated pages only,
 * for the same reason: English JSON-LD never carried it.
 */

/** Home → category → tool. */
export function toolCrumbs(content: ToolPageContent): Crumb[] {
  const t = getT(content.locale);
  const tool = TOOLS_BY_ID[content.toolId];
  const home = localeHome(content.locale);
  const hash = home === "/" ? "/" : home;
  const last =
    content.crumbLabel ??
    (content.locale === DEFAULT_LOCALE ? (tool?.name ?? content.name) : content.name);
  return [
    { label: t("Home"), href: home },
    { label: content.category.label, href: `${hash}#cat-${content.category.id}` },
    { label: last },
  ];
}

/** The long-form SEO block. */
export function ToolSeoBlock({ content }: { content: ToolPageContent }) {
  return (
    <SeoContent
      locale={content.locale}
      toolName={content.seoName ?? content.name}
      intro={content.intro}
      howToTitle={content.howToTitle}
      steps={content.steps}
      features={content.features}
      faqs={content.faqs}
      sections={content.sections}
      security={content.security}
      fullWidthText={content.fullWidthText ?? true}
    />
  );
}

/** SoftwareApplication + HowTo JSON-LD. */
export function ToolSchemas({ content }: { content: ToolPageContent }) {
  const tool = TOOLS_BY_ID[content.toolId];
  const canonical = absoluteUrl(toolPath(content.toolId, content.locale));
  const lang =
    content.locale === DEFAULT_LOCALE ? {} : { inLanguage: LOCALE_TAG[content.locale] };
  const description = content.metaDescription ?? tool?.seoDescription;

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: content.schemaName ?? `${SITE.name} ${content.seoName ?? content.name}`,
    url: canonical,
    ...lang,
    operatingSystem: "All",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(content.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: content.rating.value,
            ratingCount: content.rating.count,
          },
        }
      : {}),
    description,
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: content.howToSchemaName ?? content.howToTitle,
    ...lang,
    step: content.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <>
      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

export function ToolPageShell({
  content,
  children,
}: {
  content: ToolPageContent;
  /** The tool component itself. */
  children: ReactNode;
}) {
  const tool = TOOLS_BY_ID[content.toolId];
  const tagline = content.tagline ?? tool?.seoDescription;

  return (
    <I18nScope locale={content.locale} dict={content.ui}>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={toolCrumbs(content)} locale={content.locale} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">{content.name}</h1>
          {tagline && (
            <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
              {tagline}
            </h2>
          )}
          {content.crossLink && (
            <p data-tool-subtitle className="text-body-sm text-on-surface-variant">
              {content.crossLink.lead}{" "}
              <Link
                href={toolHref(content.crossLink.toolId, content.locale)}
                className="text-secondary hover:underline"
              >
                {content.crossLink.label}
              </Link>
              .
            </p>
          )}
        </header>

        {children}

        {tool && <RelatedTools tools={relatedTools(tool, 4)} locale={content.locale} />}
      </div>

      <ToolSeoBlock content={content} />

      <ToolSchemas content={content} />
    </I18nScope>
  );
}
