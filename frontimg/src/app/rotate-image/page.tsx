import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { RotateTool } from "./RotateTool";

const tool = getTool("rotate-image")!;
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
  { title: "Rotate or flip", description: "Use the 90° buttons, flip horizontally or vertically, or set any custom angle with the slider." },
  { title: "Rotate & download", description: "Choose an output format and click Rotate — one image downloads directly, several as a ZIP." },
];

const features: Feature[] = [
  { icon: "rotate_90_degrees_cw", title: "Rotate & flip", description: "Turn images left or right in 90° steps, flip them horizontally or vertically, or dial in any angle from 0–359°." },
  { icon: "burst_mode", title: "Batch rotation", description: "Apply the same rotation to many images at once and download them all in a single ZIP." },
  { icon: "palette", title: "Format & background", description: "Export as JPG, PNG or WEBP, and choose a transparent, white, black or custom background for angled corners." },
];

const faqs: Faq[] = [
  { q: "Can I rotate by a custom angle?", a: "Yes. Use the 90° buttons for quick turns, or the angle slider to set any value from 0 to 359 degrees." },
  { q: "What is the background option for?", a: "When you rotate by an angle that isn't a multiple of 90°, the corners become empty. The background fills them — transparent (PNG/WEBP), white, black, or a custom color." },
  { q: "Can I rotate many images at once?", a: "Yes. Add as many as you like; the same rotation and flip apply to all, and multiple files download together as a ZIP." },
  { q: "Will rotating lose quality?", a: "90° and 180° rotations are lossless. For other angles or when exporting to JPG, you can set the quality. PNG/WEBP stay sharp." },
  { q: "Is it free and private?", a: "Yes. No sign-up or watermark, and every image is rotated locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Rotate Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "596" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to rotate an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Optimize", href: "/#cat-optimize" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Rotate Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Rotate and flip JPG, PNG, WEBP and GIF images online — 90° steps or any custom angle, with a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <RotateTool />

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
        toolName="Rotate Image"
        intro="Straighten a sideways photo or spin a graphic to exactly the angle you need. oMyImage's Rotate Image tool lets you turn images in 90° steps, flip them, or set any custom angle with a live preview — one image or a whole batch at once. Choose your output format and background, then download. It all happens in your browser, so your images stay private."
        howToTitle="How to rotate an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Rotation happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
