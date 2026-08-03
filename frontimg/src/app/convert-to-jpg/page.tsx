import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("convert-to-jpg")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select one or many PNG, WEBP, GIF or BMP images, or drag and drop them in." },
  { title: "Set options", description: "Pick the JPG quality and the background color used to flatten any transparency." },
  { title: "Convert & download", description: "Click Convert — a single JPG downloads instantly, or several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Batch conversion", description: "Convert dozens of PNG, WEBP, GIF or BMP images to JPG at once and download them all as a single ZIP." },
  { icon: "tune", title: "Quality control", description: "Choose the JPG quality from 50% to 100% to balance file size against visual fidelity." },
  { icon: "lock", title: "100% private", description: "Conversion runs entirely in your browser with HTML canvas — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Which formats can I convert to JPG?", a: "PNG, WEBP, GIF and BMP. GIFs are converted using their first frame." },
  { q: "What happens to transparency?", a: "JPG does not support transparency, so transparent areas are filled with the background color you choose (white by default)." },
  { q: "Can I convert many images at once?", a: "Yes. Add as many as you like — a single image downloads as a JPG, and multiple images download together as a ZIP." },
  { q: "Is it really free and private?", a: "Yes. There's no sign-up or watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Convert to JPG`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "734" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert an image to JPG",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Convert to JPG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert PNG, WEBP, GIF and BMP images to JPG online — in batches, with quality control. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ConvertTool config={{ accent: toolColor(tool), accept: "image/png,image/webp,image/gif,image/bmp", targetMime: "image/jpeg", targetLabel: "JPG", flatten: true, quality: true, dropHint: "or drop PNG, WEBP, GIF or BMP images here" }} />

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
        toolName="Convert to JPG"
        intro="Need universally-compatible, lightweight images? oMyImage's Convert to JPG tool turns PNG, WEBP, GIF and BMP files into high-quality JPGs right in your browser. Convert a single image or a whole batch, choose the quality, and pick the background color that replaces any transparency. Nothing is uploaded — it's instant and completely private."
        howToTitle="How to convert an image to JPG"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Conversion to JPG happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
