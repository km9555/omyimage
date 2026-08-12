import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { GifToImagesTool } from "./GifToImagesTool";

const tool = getTool("gif-to-images")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload a GIF", description: "Select an animated GIF, or drag and drop it into the workspace." },
  { title: "See the frames", description: "Every frame is extracted and fully composited — preview them in a grid." },
  { title: "Download", description: "Save all frames as a ZIP in PNG, JPG or WEBP, or click any single frame to download it." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Every frame", description: "Splits an animated GIF into all of its individual frames, fully composited so each is a complete image." },
  { icon: "folder_zip", title: "Bulk ZIP download", description: "Export every frame at once as a numbered ZIP in PNG, JPG or WEBP." },
  { icon: "lock", title: "100% private", description: "Frames are extracted entirely in your browser — your GIF is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "Are the frames complete images?", a: "Yes. Each frame is composited with the proper disposal handling, so partial frames are merged into full images." },
  { q: "What formats can I export to?", a: "PNG (with transparency), JPG (with a background color) or WEBP." },
  { q: "Can I download just one frame?", a: "Yes. Click any frame in the grid to download it individually, or use the button to download all frames as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the GIF is processed locally in your browser — nothing is uploaded." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} GIF to Images`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "228" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to extract frames from a GIF",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">GIF to Images</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Extract every frame of an animated GIF online — download them all as a ZIP in PNG, JPG or WEBP, or grab a single frame. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <GifToImagesTool />

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
        toolName="GIF to Images"
        intro="Break an animated GIF back into individual pictures. oMyImage's GIF to Images tool extracts every frame of a GIF right in your browser — fully composited so each frame is a complete image — and lets you download them all as a ZIP or one at a time, in PNG, JPG or WEBP. Nothing is uploaded, so your GIF stays private."
        howToTitle="How to extract frames from a GIF"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your GIF stays private. Frame extraction happens entirely in your browser with the open-source gifuct-js library — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
