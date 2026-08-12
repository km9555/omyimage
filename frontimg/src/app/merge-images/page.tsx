import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { MergeTool } from "./MergeTool";

const tool = getTool("merge-images")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select two or more images, or drag and drop them into the workspace." },
  { title: "Arrange & style", description: "Pick side-by-side, stacked or grid, reorder the images, and set spacing and background." },
  { title: "Merge & download", description: "Click Merge — the combined image downloads instantly as PNG, JPG or WEBP." },
];

const features: Feature[] = [
  { icon: "grid_view", title: "Three layouts", description: "Combine photos side by side, stacked vertically, or in a clean grid with adjustable columns." },
  { icon: "space_bar", title: "Spacing & background", description: "Add space between images and a solid or transparent background, with a live preview." },
  { icon: "lock", title: "100% private", description: "Merging runs entirely in your browser with HTML canvas — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "How many images can I merge?", a: "As many as you like — add two or more and arrange them side by side, stacked, or in a grid." },
  { q: "Can I reorder the images?", a: "Yes. Use the up and down arrows in the list to set the exact order before merging." },
  { q: "Can I keep a transparent background?", a: "Yes. Choose a transparent background and export as PNG or WEBP to keep the spacing see-through." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Merge Images`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "289" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to merge images into one",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Merge Images</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Combine multiple images into one online — side by side, stacked or in a grid, with spacing, background and reordering. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <MergeTool />

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
        toolName="Merge Images"
        intro="Combine several photos into a single image in seconds. oMyImage's Merge Images tool joins your pictures side by side, stacked, or in a grid right in your browser, with control over order, spacing and background. Build collages, before-and-afters or comparison sheets and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to merge images into one"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Merging happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
