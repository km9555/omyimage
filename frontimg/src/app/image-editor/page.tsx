import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { AllInOneEditor } from "./AllInOneEditor";

const tool = getTool("image-editor")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Open an image", description: "Select an image, or drag and drop it into the editor." },
  { title: "Pick a tool", description: "Click any icon in the ribbon — crop, rotate, adjust, blur, border, round, watermark or draw — and tweak its options with a live preview." },
  { title: "Apply & repeat", description: "Apply each edit to stack changes, with full undo/redo, then chain as many tools as you like." },
  { title: "Export", description: "Download the final image as PNG, JPG or WEBP." },
];

const features: Feature[] = [
  { icon: "dashboard_customize", title: "Every tool in one place", description: "Crop, resize, rotate, flip, adjust, filter, grayscale, blur, border, round, watermark and draw — without leaving the page." },
  { icon: "history", title: "Undo & redo", description: "Apply edits one after another and step backward or forward freely, or revert to the original at any time." },
  { icon: "lock", title: "100% private", description: "The whole editor runs in your browser with HTML canvas — your image is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What can I do in the editor?", a: "Crop and resize, rotate and flip, adjust brightness/contrast/saturation/hue with filter presets, grayscale, blur, add a border, round into a circle, add a text or logo watermark, and draw or annotate — all on one image." },
  { q: "Can I undo a change?", a: "Yes. Every applied edit is added to a history you can undo and redo, and you can revert to the original at any time." },
  { q: "Will I lose quality?", a: "Edits are composited on a full-resolution canvas. Export as PNG for lossless output, or JPG/WEBP with a quality slider." },
  { q: "Do I need to install anything or sign up?", a: "No. It's a free online editor that runs entirely in your browser — no sign-up, no installation, and your image never leaves your device." },
  { q: "Is it really private?", a: "Yes. All editing happens locally in your browser; nothing is uploaded or stored." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} All-in-One Image Editor`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "612" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to edit an image online",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">All-in-One Image Editor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Edit images online in one place — crop, resize, rotate, adjust, filter, blur, add borders, round, watermark and draw, with undo/redo. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <AllInOneEditor />

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
        toolName="All-in-One Image Editor"
        intro="One editor for everything. oMyImage's All-in-One Image Editor brings crop, resize, rotate and flip, color adjustments and filters, grayscale, blur, borders, circle crop, text and logo watermarks, and freehand drawing together on a single canvas. Apply edits in any order, undo and redo freely, and export once when you're done. It all runs in your browser, so your image stays completely private."
        howToTitle="How to edit an image online"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your image stays private. The entire editor runs in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
