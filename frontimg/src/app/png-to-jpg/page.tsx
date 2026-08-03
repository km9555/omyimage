import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("png-to-jpg")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload PNGs", description: "Select one or many PNG images, or drag and drop them into the workspace." },
  { title: "Set quality & background", description: "Choose the JPG quality and the color that fills transparent areas." },
  { title: "Convert & download", description: "Click Convert — one PNG downloads as a JPG, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Bulk PNG → JPG", description: "Convert many PNGs to JPG at once and grab them all in a single ZIP — ideal for shrinking screenshot folders." },
  { icon: "compress", title: "Smaller files", description: "JPG is far smaller than PNG for photos. Tune the quality slider to hit the size you need." },
  { icon: "lock", title: "Private & instant", description: "Everything is processed locally in your browser — your PNGs never leave your device." },
];

const faqs: Faq[] = [
  { q: "Why convert PNG to JPG?", a: "JPG files are much smaller for photographic images, making them faster to upload, email and load on the web." },
  { q: "What happens to transparent PNG areas?", a: "JPG can't store transparency, so transparent pixels are filled with the background color you pick (white by default)." },
  { q: "Can I convert several PNGs at once?", a: "Yes. Add as many PNGs as you like — multiple files download together as a ZIP archive." },
  { q: "Does converting reduce quality?", a: "JPG is lossy, but at 90%+ quality the difference is usually invisible while the file is dramatically smaller." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} PNG to JPG`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "688" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert PNG to JPG",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">PNG to JPG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert PNG images to compressed JPG online — in batches, with quality and background control. Free, fast and private in your browser.
          </h2>
        </header>

        <ConvertTool config={{ accent: toolColor(tool), accept: "image/png", targetMime: "image/jpeg", targetLabel: "JPG", flatten: true, quality: true, dropHint: "or drop PNG images here" }} />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
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
        toolName="PNG to JPG"
        intro="PNG is great for graphics, but for photos it produces huge files. oMyImage's PNG to JPG converter turns your PNGs into compact, high-quality JPGs right in your browser — one at a time or in bulk. Pick the quality and the background color that replaces transparency, then download. No uploads, no waiting, no sign-up."
        howToTitle="How to convert PNG to JPG"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. PNG to JPG conversion happens entirely in your browser with HTML canvas — nothing is uploaded. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
