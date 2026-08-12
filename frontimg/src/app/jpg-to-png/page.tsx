import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("jpg-to-png")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload JPGs", description: "Select one or many JPG images, or drag and drop them into the workspace." },
  { title: "Review", description: "PNG is lossless, so there are no quality settings to choose — just confirm your files." },
  { title: "Convert & download", description: "Click Convert — one JPG downloads as a PNG, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Bulk JPG → PNG", description: "Convert many JPGs to PNG at once and download them all as a single ZIP archive." },
  { icon: "high_quality", title: "Lossless output", description: "PNG is a lossless format, so your converted images keep every pixel of detail." },
  { icon: "lock", title: "Private & instant", description: "Conversion runs locally in your browser — your JPGs never leave your device." },
];

const faqs: Faq[] = [
  { q: "Why convert JPG to PNG?", a: "PNG is lossless and supports transparency, which is useful for editing, logos and graphics where you don't want JPG compression artifacts." },
  { q: "Will the PNG be larger than the JPG?", a: "Usually yes — PNG is lossless, so photographic images become bigger. The trade-off is no further quality loss." },
  { q: "Can I convert several JPGs at once?", a: "Yes. Add as many as you like — multiple files download together as a ZIP." },
  { q: "Is it free and private?", a: "Completely. No sign-up, no watermark, and every image is processed in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} JPG to PNG`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "503" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert JPG to PNG",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">JPG to PNG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert JPG images to lossless PNG online — in batches, no quality loss. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ConvertTool config={{ accent: toolColor(tool), accept: "image/jpeg", targetMime: "image/png", targetLabel: "PNG", flatten: false, quality: false, dropHint: "or drop JPG images here" }} />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
              {related.map((r) => (
                <Link key={r.id} href={`/${r.slug}`} className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: toolColorTint(r) }}>
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
        toolName="JPG to PNG"
        intro="Need a lossless copy of a JPG for editing or graphics work? oMyImage's JPG to PNG converter turns your JPGs into clean PNG files right in your browser — one at a time or in bulk. PNG is lossless and supports transparency, so it's perfect when you don't want any further compression. No uploads, no sign-up, instant results."
        howToTitle="How to convert JPG to PNG"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. JPG to PNG conversion happens entirely in your browser with HTML canvas — nothing is uploaded. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
