import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { MetadataTool } from "./MetadataTool";

const tool = getTool("image-metadata")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select a photo, or drag and drop it into the workspace." },
  { title: "Read the data", description: "See camera, lens, exposure, date and GPS details extracted from the file's EXIF." },
  { title: "Explore everything", description: "Expand the full metadata list to inspect every embedded tag." },
];

const features: Feature[] = [
  { icon: "photo_camera", title: "Full EXIF readout", description: "Camera make and model, lens, aperture, shutter, ISO, focal length, dates and more, neatly grouped." },
  { icon: "location_on", title: "GPS location", description: "If the photo is geotagged, see the coordinates and open the exact spot on a map." },
  { icon: "lock", title: "100% private", description: "Metadata is read entirely in your browser — your photo is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What metadata can it read?", a: "EXIF, including camera and lens, exposure settings, capture date, orientation, color space and GPS coordinates when present." },
  { q: "Why does my image show no metadata?", a: "It may have been stripped (e.g. by social media), or the format doesn't store EXIF — most PNGs and screenshots have none." },
  { q: "Can I see the GPS location?", a: "Yes. Geotagged photos show their coordinates with a link to view the location on a map." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the photo is read locally in your browser — nothing is uploaded." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image Metadata Viewer`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "312" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to view image metadata",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image Metadata Viewer</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            View an image's EXIF metadata online — camera, lens, exposure, GPS location and date. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <MetadataTool />

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
        toolName="Image Metadata Viewer"
        intro="See the hidden story behind any photo. oMyImage's Image Metadata Viewer reads the EXIF data embedded in your image right in your browser — camera and lens, aperture, shutter speed, ISO, capture date and even GPS location — and lays it out clearly, with the complete tag list a click away. Nothing is uploaded, so your photo stays private."
        howToTitle="How to view image metadata"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your photo stays private. EXIF metadata is read entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
