import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ResizeTool } from "./ResizeTool";

const tool = getTool("resize-image")!;
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
  { title: "Set the size", description: "Resize by exact pixels or by percentage, and keep the aspect ratio to avoid stretching." },
  { title: "Resize & download", description: "Click Resize — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "straighten", title: "Pixels or percentage", description: "Set an exact width and height, or scale every image by a percentage of its original size." },
  { icon: "link", title: "Lock aspect ratio", description: "Keep proportions so images never look stretched — each file in a batch keeps its own ratio." },
  { icon: "lock", title: "Private & instant", description: "Resizing runs entirely in your browser with HTML canvas — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Can I resize without losing the aspect ratio?", a: "Yes. Keep ‘Keep aspect ratio’ on and each image scales to fit your width/height box without distortion." },
  { q: "Can I resize many images to the same size?", a: "Yes. Set the dimensions or percentage once and it applies to the whole batch; files download together as a ZIP." },
  { q: "Will resizing reduce quality?", a: "Making images smaller stays sharp. Enlarging beyond the original can look soft, since there's no new detail to add." },
  { q: "Which formats are supported?", a: "JPG, PNG, WEBP, GIF and BMP as input; export to JPG, PNG or WEBP (or keep the original format)." },
  { q: "Is it free and private?", a: "Yes. No sign-up or watermark, and every image is resized locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Resize Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "803" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to resize an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 3);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Optimize", href: "/#cat-optimize" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Resize Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Resize JPG, PNG, WEBP and GIF images online — by exact pixels or percentage, with aspect-ratio lock and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ResizeTool />

        {related.length > 0 && (
          <section aria-label="Related tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">Related tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
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
        toolName="Resize Image"
        intro="Need an image at an exact size for a profile picture, a thumbnail, or a print? oMyImage's Resize Image tool lets you set precise pixel dimensions or scale by percentage, with an aspect-ratio lock so nothing looks stretched. Resize a single image or a whole batch at once, choose your output format, and download. Everything runs in your browser, so your images stay private."
        howToTitle="How to resize an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Resizing happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
