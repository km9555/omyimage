import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { BlurImageTool } from "./BlurImageTool";

const tool = getTool("blur-image")!;
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
  { title: "Set the strength", description: "Drag the blur slider and watch the live preview update instantly." },
  { title: "Apply & download", description: "Click Blur — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "lens_blur", title: "Adjustable strength", description: "Smoothly blur from a soft 1px haze to a heavy 50px Gaussian blur, with a live preview." },
  { icon: "burst_mode", title: "Batch blur", description: "Apply the same blur to a whole batch of JPG, PNG or WEBP images and download them as a ZIP." },
  { icon: "lock", title: "100% private", description: "Everything runs in your browser with HTML canvas — your images are never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "Is this a Gaussian blur?", a: "Yes — it uses the browser's native Gaussian blur filter for a smooth, high-quality result at any strength." },
  { q: "Can I blur just part of the image?", a: "This tool blurs the whole image. To blur only faces or specific regions, use our Blur Face tool instead." },
  { q: "Can I blur many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Blur Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "276" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to blur an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Blur Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Blur an image online with an adjustable Gaussian blur, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <BlurImageTool />

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
        toolName="Blur Image"
        intro="Soften a background, anonymize a scene or create a frosted effect. oMyImage's Blur Image tool applies a smooth Gaussian blur to your photos right in your browser, with a slider to dial in exactly the strength you want and a live preview. Blur one image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to blur an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Blurring happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
