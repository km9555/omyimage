import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { CircleCropTool } from "./CircleCropTool";

const tool = getTool("circle-crop")!;
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
  { title: "Style the circle", description: "Choose a transparent or colored background and an optional colored ring, with a live preview." },
  { title: "Crop & download", description: "Click Circle crop — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "panorama_fish_eye", title: "Perfect round avatars", description: "The largest centered square is clipped to a clean circle — ideal for profile pictures and logos." },
  { icon: "blur_circular", title: "Transparent or framed", description: "Export a transparent PNG/WEBP or add a colored background and a ring around the circle." },
  { icon: "lock", title: "Batch & private", description: "Circle-crop a whole batch at once, entirely in your browser — images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Will the background be transparent?", a: "Yes, by default — export as PNG or WEBP to keep the corners outside the circle transparent. Choose JPG to flatten onto a color." },
  { q: "What if my image isn't square?", a: "The tool automatically takes the largest centered square from your image before cropping it to a circle." },
  { q: "Can I add a ring around the circle?", a: "Yes. Set the ring thickness and color to add a clean border around the circular crop." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Circle Crop Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "352" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to crop an image into a circle",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Circle Crop Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Crop images into a perfect circle online — ideal for avatars and profile pictures, with a transparent background, optional ring and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <CircleCropTool />

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
        toolName="Circle Crop Image"
        intro="Create polished round avatars and profile pictures in seconds. oMyImage's Circle Crop tool takes the largest centered square of your image and clips it to a smooth circle right in your browser, with a transparent background by default plus optional color fills and a ring. Crop one image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to crop an image into a circle"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Circle cropping happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
