import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { AddBorderTool } from "./AddBorderTool";

const tool = getTool("add-border")!;
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
  { title: "Style the border", description: "Set the thickness, color and optional rounded corners with a live preview." },
  { title: "Apply & download", description: "Click Add border — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "crop_din", title: "Scalable thickness", description: "Border size is a percentage of the shortest side, so it looks consistent on any image dimension." },
  { icon: "rounded_corner", title: "Color & rounded corners", description: "Choose any border color and add rounded inner corners for a polished, modern frame." },
  { icon: "lock", title: "Batch & private", description: "Frame a whole batch at once, entirely in your browser — images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "How is the thickness measured?", a: "As a percentage of the image's shortest side, so the same setting gives a proportional border on images of any size." },
  { q: "Can I round the corners?", a: "Yes. The corner-rounding slider rounds the inner image corners against the border for a softer look." },
  { q: "Can I add borders to many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Add Border to Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "241" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to add a border to an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Add Border to Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Add a colored border or frame to your images online — with adjustable thickness, rounded corners, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <AddBorderTool />

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
        toolName="Add Border to Image"
        intro="Frame your photos for a clean, finished look. oMyImage's Add Border tool wraps any image in a colored border right in your browser, with control over thickness, color and rounded corners and a live preview. Frame a single image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to add a border to an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Adding borders happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
