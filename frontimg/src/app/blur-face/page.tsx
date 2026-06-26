import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { BlurTool } from "./BlurTool";

const tool = getTool("blur-face")!;
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
  { title: "Draw over private areas", description: "Drag to draw a box over each face, license plate or detail, and choose blur or pixelate." },
  { title: "Export", description: "Click Export to download the image with the censored areas baked in." },
];

const features: Feature[] = [
  { icon: "blur_on", title: "Blur or pixelate", description: "Choose a smooth blur or a chunky pixelate, and set the strength to fully obscure sensitive details." },
  { icon: "select_all", title: "Multiple areas", description: "Draw as many boxes as you need, undo the last one, or clear them all and start over." },
  { icon: "lock", title: "Truly private", description: "Everything is processed in your browser — the original never leaves your device, and the censoring is permanent in the exported file." },
];

const faqs: Faq[] = [
  { q: "Can I blur more than one face?", a: "Yes. Draw a box over each area you want to hide; you can add as many as you like and undo or clear them." },
  { q: "What's the difference between blur and pixelate?", a: "Blur smoothly softens the area, while pixelate replaces it with large blocks. Both fully obscure details at a high enough strength." },
  { q: "Is the blur permanent?", a: "Yes. The censored areas are rendered directly into the exported image, so they can't be undone by the recipient." },
  { q: "Are my images uploaded?", a: "No. Everything runs locally in your browser; your image is never uploaded." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Blur Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "389" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to blur a face in a photo",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 3);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Blur Face &amp; Censor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Blur or pixelate faces, license plates and private details in your photos online — draw the areas, pick the strength, and export. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <BlurTool />

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
        toolName="Blur Face &amp; Censor"
        intro="Need to hide a face, a name tag or a license plate before sharing a photo? oMyImage's Blur &amp; Censor tool lets you drag boxes over any private detail and blur or pixelate them, with adjustable strength and as many areas as you need. The censoring is baked permanently into the exported image, and everything runs in your browser — your photo is never uploaded."
        howToTitle="How to blur a face in a photo"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Blurring happens entirely in your browser with HTML canvas — nothing is uploaded to a server. The censored result is permanent in the exported file. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
