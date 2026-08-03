import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { RemoveExifTool } from "./RemoveExifTool";

const tool = getTool("remove-exif")!;
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
  { title: "Pick the output", description: "Keep the original format or convert, and set the quality for JPG/WEBP." },
  { title: "Clean & download", description: "Click Remove metadata — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "shield", title: "Strips GPS & camera data", description: "Removes EXIF, GPS location, camera, lens and timestamp data by fully re-encoding the pixels." },
  { icon: "burst_mode", title: "Batch cleaning", description: "Clean a whole batch of JPG, PNG or WEBP images at once and download them as a ZIP." },
  { icon: "lock", title: "100% private", description: "Everything runs in your browser — your images are never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What metadata is removed?", a: "All embedded EXIF/IPTC/XMP data, including GPS location, camera and lens model, and capture date — the output keeps only the pixels." },
  { q: "Does it reduce image quality?", a: "The image is re-encoded, so set the quality to 100% for a virtually identical result. The default of 95% is a safe balance." },
  { q: "Can I clean many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} EXIF Data Remover`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "377" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to remove EXIF data from an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">EXIF Data Remover</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Remove EXIF and metadata — including GPS location — from images online before you share them. Batch supported, free, fast and 100% private in your browser.
          </h2>
        </header>

        <RemoveExifTool />

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
        toolName="EXIF Data Remover"
        intro="Protect your privacy before sharing photos. oMyImage's EXIF Data Remover strips the hidden metadata from your images — GPS location, camera and lens model, software and timestamps — by re-encoding them right in your browser. Clean one image or a whole batch and download instantly. Nothing is uploaded, so your photos and their data stay private."
        howToTitle="How to remove EXIF data from an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Metadata removal happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
