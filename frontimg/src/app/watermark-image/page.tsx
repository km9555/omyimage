import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { WatermarkTool } from "./WatermarkTool";

const tool = getTool("watermark-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select one or many images, or drag and drop them into the workspace." },
  { title: "Design the watermark", description: "Type text or upload a logo, then set position, size, opacity and rotation with a live preview." },
  { title: "Apply & download", description: "Click Watermark — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "title", title: "Text or logo", description: "Stamp custom text — with font, color and outline — or overlay your own transparent PNG logo." },
  { icon: "grid_view", title: "Full placement control", description: "Pick any of nine positions, set the margin, opacity and rotation, and see it update live before you export." },
  { icon: "lock", title: "Private & batch", description: "Apply the same watermark to a whole batch at once, entirely in your browser — images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Can I watermark with my own logo?", a: "Yes. Switch to ‘Logo’, upload a PNG (transparent works best), and set its size, position and opacity." },
  { q: "Can I watermark many images at once?", a: "Yes. The same watermark is applied to every image you add, and they download together as a ZIP." },
  { q: "Will the watermark be readable on any image?", a: "Enable the text outline for legibility on busy backgrounds, and adjust opacity and color to taste." },
  { q: "Does it change my original images?", a: "No. Your originals are untouched; the tool produces new watermarked copies in your browser." },
  { q: "Is it free and private?", a: "Yes. No sign-up or watermark from us, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Watermark Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "564" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to watermark an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Watermark Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Add a text or logo watermark to your images online — with position, opacity and rotation control, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <WatermarkTool />

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
        toolName="Watermark Image"
        intro="Protect your photos and brand your visuals with a custom watermark. oMyImage's Watermark Image tool lets you add text — with your choice of font, color and outline — or overlay your own logo, then position it exactly with live preview, opacity and rotation. Watermark a single image or a whole batch at once. Everything runs in your browser, so your images stay private."
        howToTitle="How to watermark an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Watermarking happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
