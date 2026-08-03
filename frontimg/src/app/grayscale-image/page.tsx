import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { GrayscaleTool } from "./GrayscaleTool";

const tool = getTool("grayscale-image")!;
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
  { title: "Adjust intensity", description: "Use the slider for a full black-and-white look or a partial desaturation, with a live preview." },
  { title: "Convert & download", description: "Click Grayscale — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "filter_b_and_w", title: "Adjustable intensity", description: "Go fully black & white or partially desaturate with a smooth 0–100% slider and instant preview." },
  { icon: "burst_mode", title: "Batch convert", description: "Apply the same grayscale to a whole batch of JPG, PNG or WEBP images and download them as a ZIP." },
  { icon: "lock", title: "100% private", description: "Everything runs in your browser with HTML canvas — your images are never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What does the intensity slider do?", a: "At 100% the image is fully black and white; lower values blend the original colors with gray for a faded, partially-desaturated look." },
  { q: "Can I grayscale many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Which formats are supported?", a: "JPG, PNG and WEBP, and you can choose the output format independently of the input." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Grayscale Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "318" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert an image to grayscale",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Grayscale Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert images to grayscale (black &amp; white) online — with adjustable intensity, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <GrayscaleTool />

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
        toolName="Grayscale Image"
        intro="Give your photos a timeless black-and-white look. oMyImage's Grayscale Image tool desaturates any image right in your browser, with an intensity slider for everything from a subtle fade to a full monochrome conversion. Process one image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to convert an image to grayscale"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Grayscale conversion happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
