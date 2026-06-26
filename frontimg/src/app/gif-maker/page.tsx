import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { GifMakerTool } from "./GifMakerTool";

const tool = getTool("gif-maker")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload frames", description: "Select two or more images, or drag and drop them into the workspace." },
  { title: "Set the timing", description: "Reorder the frames, choose the delay/speed, size and looping, with a live preview." },
  { title: "Create & download", description: "Click Create GIF — your animated GIF builds in the browser and downloads instantly." },
];

const features: Feature[] = [
  { icon: "gif_box", title: "Live animated preview", description: "Watch your animation play at the exact speed before you export — no guesswork." },
  { icon: "speed", title: "Full control", description: "Set the frame delay, output size, looping and background, and reorder frames freely." },
  { icon: "lock", title: "100% private", description: "The GIF is encoded entirely in your browser — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "How many images can I use?", a: "At least two, and as many as you like — each image becomes one frame of the animation." },
  { q: "Can I control the speed?", a: "Yes. The frame-delay slider sets the time per frame, shown in both milliseconds and frames per second." },
  { q: "What if my images are different sizes?", a: "Each frame is fitted (letterboxed) into a common canvas with your chosen background, so the GIF stays consistent." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and the GIF is built locally in your browser." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} GIF Maker`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "335" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to make an animated GIF",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">GIF Maker</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Make an animated GIF from your images online — set the speed, order, size and looping with a live preview. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <GifMakerTool />

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
        toolName="GIF Maker"
        intro="Turn a series of images into a looping animation. oMyImage's GIF Maker builds an animated GIF from your photos right in your browser, with a live preview, adjustable speed, output size, looping and frame reordering. Create slideshows, reaction GIFs or simple animations and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to make an animated GIF"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. The GIF is encoded entirely in your browser with the open-source gifenc library — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
