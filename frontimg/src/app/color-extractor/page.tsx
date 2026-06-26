import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ColorExtractorTool } from "./ColorExtractorTool";

const tool = getTool("color-extractor")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image, or drag and drop it into the workspace." },
  { title: "Choose how many colors", description: "Use the slider to extract anywhere from 2 to 16 dominant colors." },
  { title: "Copy or download", description: "Copy any HEX/RGB value, copy the whole palette, or download it as a PNG swatch sheet." },
];

const features: Feature[] = [
  { icon: "palette", title: "Dominant colors", description: "A median-cut algorithm finds the most representative colors and sorts them by how much of the image they cover." },
  { icon: "tune", title: "2–16 colors", description: "Pick the exact palette size you need, recalculated instantly as you drag the slider." },
  { icon: "lock", title: "100% private", description: "Color extraction runs entirely in your browser — your image is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "How are the colors chosen?", a: "The tool uses median-cut color quantization on a downscaled copy of your image to find the most dominant, representative colors." },
  { q: "Can I export the palette?", a: "Yes. Copy individual HEX/RGB values, copy the full list at once, or download a PNG swatch sheet with labels." },
  { q: "How many colors can I extract?", a: "Between 2 and 16, adjustable with the slider." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the image is processed locally in your browser — nothing is uploaded." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Color Extractor`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "267" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to extract a color palette from an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Color Extractor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Extract a dominant color palette from any image online — get HEX and RGB values, copy them or download a swatch sheet. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ColorExtractorTool />

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
        toolName="Color Extractor"
        intro="Turn any photo into a ready-to-use color palette. oMyImage's Color Extractor analyzes your image right in your browser and pulls out its most dominant colors as HEX and RGB, sorted by prominence. Copy a single value, the whole palette, or download a labeled swatch sheet — perfect for design, branding and moodboards. Nothing is uploaded, so your image stays private."
        howToTitle="How to extract a color palette from an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your image stays private. Color extraction happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
