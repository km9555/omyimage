import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { PhotoEditorTool } from "./PhotoEditorTool";

const tool = getTool("photo-editor")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image, or drag and drop it into the workspace." },
  { title: "Edit", description: "Apply a filter preset or fine-tune brightness, contrast, saturation, blur and more — with a live preview." },
  { title: "Export", description: "Rotate or flip if needed, then export your edited image as JPG, PNG or WEBP." },
];

const features: Feature[] = [
  { icon: "auto_fix_high", title: "One-tap filters", description: "Apply Vivid, B&W, Sepia, Cool or Warm looks instantly, or start from Original and adjust by hand." },
  { icon: "tune", title: "Precise adjustments", description: "Fine-tune brightness, contrast, saturation, grayscale, sepia, hue and blur with live sliders." },
  { icon: "lock", title: "Private & instant", description: "Editing runs entirely in your browser with HTML canvas — your photo is never uploaded." },
];

const faqs: Faq[] = [
  { q: "What can I adjust?", a: "Brightness, contrast, saturation, grayscale, sepia, hue and blur, plus quick filter presets and rotate/flip." },
  { q: "Does it work with transparent PNGs?", a: "Yes. Export to PNG or WEBP to keep transparency, or JPG to flatten onto a white background." },
  { q: "Will editing reduce quality?", a: "Adjustments are applied once at full resolution. Exporting to JPG/WEBP is lossy, but you control the quality." },
  { q: "Is it free and private?", a: "Yes. No sign-up or watermark, and every edit happens locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Photo Editor`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "538" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to edit a photo",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 3);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Photo Editor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Edit photos online — apply filters, adjust brightness, contrast, saturation and more, rotate and flip, all with a live preview. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <PhotoEditorTool />

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
        toolName="Photo Editor"
        intro="Give your photos a quick polish without installing anything. oMyImage's Photo Editor lets you apply one-tap filters or fine-tune brightness, contrast, saturation, grayscale, sepia, hue and blur with live sliders, then rotate, flip and export. It all runs in your browser, so your photos stay private and the preview updates instantly."
        howToTitle="How to edit a photo"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your photos stay private. Editing happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
