import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { CropTool } from "./CropTool";

const tool = getTool("crop-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: tool.seoTitle,
    description: tool.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: tool.seoTitle,
    description: tool.seoDescription,
  },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image, or drag and drop it into the workspace." },
  { title: "Select the crop", description: "Drag the box to move it and the handles to resize, or lock an aspect ratio like 1:1 or 16:9." },
  { title: "Crop & download", description: "Choose an output format and click Crop & download — it's done instantly in your browser." },
];

const features: Feature[] = [
  {
    icon: "crop_free",
    title: "Free crop or fixed ratios",
    description: "Crop freely, type exact pixel dimensions, or lock to 1:1, 4:3, 3:2, 16:9 and more for perfect social or print sizes.",
  },
  {
    icon: "bolt",
    title: "Instant & in-browser",
    description: "Cropping runs entirely on your device with HTML canvas — no upload, no waiting, no quality loss from a round trip.",
  },
  {
    icon: "image",
    title: "Any common format",
    description: "Works with JPG, PNG, WEBP, GIF and BMP, and lets you export as JPG, PNG or WEBP with adjustable quality.",
  },
];

const faqs: Faq[] = [
  { q: "Is the oMyImage crop tool free?", a: "Yes. Cropping images is 100% free, with no watermark on the output and no sign-up required." },
  { q: "Do my images get uploaded?", a: "No. Crop runs entirely in your browser using HTML canvas — your image never leaves your device." },
  { q: "Can I crop to a specific size?", a: "Yes. Type exact width, height, X and Y values in pixels, or lock an aspect ratio and drag the handles to size it visually." },
  { q: "Which formats can I export to?", a: "JPG, PNG or WEBP. Choose 'Same as original' to keep the input format (GIF and BMP export as PNG since canvas output is a still image)." },
  { q: "Will cropping reduce quality?", a: "No. Cropping only removes pixels outside your selection. For JPG and WEBP you can also pick the export quality." },
];

export default function CropImagePage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE.name} Crop Image`,
    url: canonical,
    operatingSystem: "All",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "512" },
    description: tool.seoDescription,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to crop an image",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Optimize", href: "/#cat-optimize" },
            { label: tool.name },
          ]}
        />

        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Crop Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Crop JPG, PNG, WEBP and GIF images online — drag to select, lock an aspect ratio, or
            enter exact pixels. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <CropTool />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/${r.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift"
                >
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
        toolName="Crop Image"
        intro="Need to cut an image down to the perfect frame or a precise size? oMyImage's Crop Image tool lets you drag a selection over your photo, lock it to a ratio like 1:1 for profile pictures or 16:9 for thumbnails, or type exact pixel dimensions. Cropping happens entirely in your browser, so your images stay private and the result is instant."
        howToTitle="How to crop an image"
        steps={steps}
        features={features}
        faqs={faqs}
        fullWidthText
        security="Your images stay private. Cropping is performed entirely in your browser with HTML canvas — nothing is ever uploaded to a server. When you close the tab, the image is gone from memory. No storage, no tracking of your files."
      />

      <JsonLd data={softwareSchema} />
      <JsonLd data={howToSchema} />
    </>
  );
}
