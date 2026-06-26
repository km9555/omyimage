import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { Base64ToImageTool } from "./Base64ToImageTool";

const tool = getTool("base64-to-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Paste", description: "Paste a data URI or raw Base64 string into the input box." },
  { title: "Preview", description: "The decoded image appears instantly, with its dimensions and a validity check." },
  { title: "Download", description: "Download the original image, or convert it to PNG, JPG or WEBP first." },
];

const features: Feature[] = [
  { icon: "image", title: "Instant decode", description: "Auto-detects PNG, JPG, GIF, WEBP, BMP and SVG from the string and previews it as you type." },
  { icon: "sync_alt", title: "Convert on download", description: "Save the decoded image as-is, or re-encode it to PNG, JPG or WEBP with quality control." },
  { icon: "lock", title: "100% private", description: "Decoding happens entirely in your browser — nothing is uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What input does it accept?", a: "Both full data URIs (data:image/png;base64,…) and raw Base64 strings. The image type is auto-detected for raw input." },
  { q: "Can I convert the format?", a: "Yes. Download the original, or choose PNG, JPG or WEBP to re-encode before downloading." },
  { q: "What if my string is invalid?", a: "You'll see a clear message — double-check you copied the entire Base64 string." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and decoding happens locally in your browser — nothing is uploaded." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Base64 to Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "254" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert Base64 to an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Base64 to Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert a Base64 string or data URI back into an image online — preview it instantly and download as PNG, JPG or WEBP. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <Base64ToImageTool />

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
        toolName="Base64 to Image"
        intro="Turn a Base64 string back into a real image file. oMyImage's Base64 to Image tool decodes a data URI or raw Base64 right in your browser, previews it instantly, and lets you download it as-is or convert it to PNG, JPG or WEBP. Nothing is uploaded, so your data stays private."
        howToTitle="How to convert Base64 to an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your data stays private. Base64 decoding happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
