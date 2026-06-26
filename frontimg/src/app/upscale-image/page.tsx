import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { UpscaleTool } from "./UpscaleTool";

const tool = getTool("upscale-image")!;
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
  { title: "Choose a scale", description: "Pick 2×, 3× or 4× and click Upscale — the AI adds detail as it enlarges." },
  { title: "Download", description: "Download your larger, sharper image." },
];

const features: Feature[] = [
  { icon: "hd", title: "Up to 4× larger", description: "Enlarge small or low-resolution images while the AI reconstructs detail instead of blurring." },
  { icon: "auto_awesome", title: "Detail recovery", description: "Real-ESRGAN restores edges and textures for crisp results, even on heavily compressed photos." },
  { icon: "verified_user", title: "Open-source engine", description: "Powered by Real-ESRGAN — free, open-source and commercial-use friendly." },
];

const faqs: Faq[] = [
  { q: "How much can I enlarge an image?", a: "Up to 4×. A 500×500 image becomes 2000×2000, with AI-reconstructed detail rather than a soft blur." },
  { q: "Which engine is used?", a: "Real-ESRGAN, an open-source super-resolution model that's fine for commercial use." },
  { q: "Why does it take a few seconds?", a: "Upscaling is compute-heavy and runs on our server. Larger images and higher scales take longer." },
  { q: "Will it fix a very blurry photo?", a: "It improves sharpness and detail noticeably, but it can't invent information that isn't there in extreme cases." },
  { q: "Are my images kept?", a: "No. Results are stored only briefly for your download link and auto-deleted within an hour." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Upscale Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "612" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to upscale an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 3);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Image AI", href: "/#cat-ai" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Upscale Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Enlarge images up to 4× with AI that adds real detail instead of blurring. Powered by open-source Real-ESRGAN.
          </h2>
        </header>

        <UpscaleTool />

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
        toolName="Upscale Image"
        intro="Make small or low-resolution images bigger without the blur. oMyImage's Upscale Image tool uses the open-source Real-ESRGAN model to enlarge photos up to 4×, reconstructing edges and textures so the result stays sharp. It runs on our server because the AI is compute-heavy, then downloads as a high-resolution image."
        howToTitle="How to upscale an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Upscaling runs on our server using the open-source Real-ESRGAN engine. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your images."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
