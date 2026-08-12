import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { CompressTool } from "./CompressTool";

const tool = getTool("compress-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select one or many JPG, PNG or WEBP images, or drag and drop them in." },
  { title: "Choose settings", description: "Pick an output format and quality, and optionally shrink very large images." },
  { title: "Compress & download", description: "Click Compress — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Batch compression", description: "Compress dozens of images at once and download them all as a single ZIP, each showing how much was saved." },
  { icon: "tune", title: "Quality & format control", description: "Convert to WEBP for the smallest files, or keep your format and dial in the exact quality you want." },
  { icon: "lock", title: "100% private", description: "Compression runs in your browser — images under 15 MB are never uploaded anywhere." },
];

const faqs: Faq[] = [
  { q: "How much smaller will my images get?", a: "It depends on the image and settings. Converting photos to WEBP at 70–80% quality often cuts size by 50–80% with little visible change, and PNG graphics typically drop by 60–80% at the default quality." },
  { q: "How does PNG compression work?", a: "PNG can't throw away detail the way JPG does, so it shrinks a different way: by reducing how many distinct colors the image uses. At the default 70% we quantize to 128 colors with dithering, which is usually invisible on illustrations, logos and screenshots. Set the quality to 95% or above to keep the PNG perfectly lossless." },
  { q: "Which format gives the smallest files?", a: "WEBP usually produces the smallest files at a given quality, followed by JPG. PNG stays the best choice for sharp-edged graphics, flat colors and transparency." },
  { q: "Will compression reduce quality?", a: "JPG and WEBP are lossy, so very low quality shows artifacts; PNG loses colors rather than detail. The default 70% is a strong balance; raise it for critical images." },
  { q: "Why did one of my images not get smaller?", a: "Because it was already optimised. If nothing we produce beats the file you gave us, we hand your original back untouched and label it — a compressor that returns a bigger file has failed at its job." },
  { q: "Can I compress many images at once?", a: "Yes. Add as many as you like — multiple files download together as a ZIP, each labelled with the percentage saved." },
  { q: "Is it free and private?", a: "Completely. No sign-up or watermark, and every image under 15 MB is compressed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Compress Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "912" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to compress an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Optimize", href: "/#cat-optimize" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Compress Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Compress JPG, PNG and WEBP images online — shrink file size with quality control and batch support, see how much you saved. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <CompressTool />

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
        toolName="Compress Image"
        intro="Big image files slow down websites, fill up storage and clog email attachments. oMyImage's Compress Image tool shrinks JPG, PNG and WEBP files right in your browser — convert to WEBP for the smallest size, control the quality, and optionally downscale very large photos. PNGs are compressed properly, by reducing colors with dithering rather than just re-saving them. Compress one image or a whole batch, and see exactly how much you saved."
        howToTitle="How to compress an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Images under 15 MB are compressed entirely in your browser and never leave your device; larger files are processed on our server and deleted straight after. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
