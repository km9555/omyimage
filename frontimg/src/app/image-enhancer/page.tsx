import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { EnhanceTool } from "./EnhanceTool";

const tool = getTool("image-enhancer")!;
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
  { title: "Enhance", description: "Click Enhance — the AI sharpens, denoises and restores detail automatically." },
  { title: "Download", description: "Download your clearer, higher-quality image." },
];

const features: Feature[] = [
  { icon: "auto_awesome", title: "One-click enhance", description: "Automatically sharpen, reduce noise and recover detail in dull or low-quality photos." },
  { icon: "image", title: "Restores compressed images", description: "Cleans up artifacts from heavily compressed JPGs and small web images." },
  { icon: "verified_user", title: "Open-source engine", description: "Powered by Real-ESRGAN — free, open-source and commercial-use friendly." },
];

const faqs: Faq[] = [
  { q: "What does the enhancer do?", a: "It sharpens, denoises and restores detail using the open-source Real-ESRGAN model, then returns a cleaner image." },
  { q: "How is it different from upscaling?", a: "Enhancing focuses on quality (sharpness, noise, artifacts). Upscaling focuses on enlarging the dimensions — though both use Real-ESRGAN." },
  { q: "Why does it run on the server?", a: "The AI is compute-heavy, so it runs on our server rather than in your browser." },
  { q: "Is it free and open-source?", a: "Yes. The engine is open-source and fine for commercial use." },
  { q: "Are my images kept?", a: "No. Results are stored only briefly for your download link and auto-deleted within an hour." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image Enhancer`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "443" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to enhance an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 3);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Image AI", href: "/#cat-ai" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image Enhancer</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Sharpen, denoise and restore detail in low-quality photos automatically with AI. Powered by open-source Real-ESRGAN.
          </h2>
        </header>

        <EnhanceTool />

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
        toolName="Image Enhancer"
        intro="Give blurry, noisy or compressed photos a quick quality boost. oMyImage's Image Enhancer uses the open-source Real-ESRGAN model to sharpen edges, reduce noise and restore detail in a single click. The AI runs on our server, then your improved image downloads — clearer and cleaner than the original."
        howToTitle="How to enhance an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Enhancement runs on our server using the open-source Real-ESRGAN engine. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your images."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
