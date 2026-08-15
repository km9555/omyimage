import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import {
  SeoContent,
  type HowToStep,
  type Faq,
  type Feature,
  type SeoSection,
} from "@/components/SeoContent";
import { CompressTool } from "./CompressTool";

const tool = getTool("compress-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select one or many JPG, PNG or WEBP images, or drag and drop them in." },
  { title: "Choose settings", description: "Pick an output format and quality, and optionally shrink very large images." },
  { title: "Compress & download", description: "Click Compress — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Batch compression", description: "Compress dozens of images at once and download them all as a single ZIP, each showing how much was saved." },
  { icon: "tune", title: "Quality & format control", description: "Convert to WEBP for the smallest files, or keep your format and dial in the exact quality you want." },
  { icon: "lock", title: "100% private", description: "Compression runs in your browser — images under 15 MB are never uploaded anywhere." },
];

const faqs: Faq[] = [
  { q: "How much smaller will my images get?", a: "It depends on the image and settings. Converting photos to WEBP at 70–80% quality often cuts size by 50–80% with little visible change, and PNG graphics typically drop by 60–80% at the default quality." },
  { q: "How does PNG compression work?", a: "PNG can't throw away detail the way JPG does, so it shrinks a different way: by reducing how many distinct colors the image uses. At the default 70% we quantize to 128 colors with dithering, which is usually invisible on illustrations, logos and screenshots. Set the quality to 95% or above to keep the PNG perfectly lossless." },
  { q: "Which format gives the smallest files?", a: "WEBP usually produces the smallest files at a given quality, followed by JPG. PNG stays the best choice for sharp-edged graphics, flat colors and transparency." },
  { q: "Will compression reduce quality?", a: "JPG and WEBP are lossy, so very low quality shows artifacts; PNG loses colors rather than detail. The default 70% is a strong balance; raise it for critical images." },
  { q: "Why did one of my images not get smaller?", a: "Because it was already optimised. If nothing we produce beats the file you gave us, we hand your original back untouched and label it — a compressor that returns a bigger file has failed at its job." },
  { q: "Can I compress many images at once?", a: "Yes. Add as many as you like — multiple files download together as a ZIP, each labelled with the percentage saved." },
  { q: "Is it free and private?", a: "Completely. No sign-up or watermark, and every image under 15 MB is compressed locally in your browser." },
  { q: "What quality setting should I use?", a: "70–80% is the right starting point for photographs on a website and is where most of the saving happens. Go to 90% or above for product photography, hero images and anything a customer will zoom into. Below about 60% you start to see blocking in skies and smooth gradients." },
  { q: "Does compressing an image reduce its dimensions?", a: "No. Compression changes how the pixels are stored, not how many there are — a 4000×3000 photo stays 4000×3000. If you also want fewer pixels, use the Resize tool, which is usually the bigger win for web images." },
  { q: "Will compression strip my EXIF data?", a: "Re-encoding drops most metadata, including camera settings and GPS coordinates, as a side effect. If removing that data is the actual goal, the EXIF Remover is the tool built for it and is explicit about what it clears." },
  { q: "Can I compress the same image twice?", a: "You can, but you should not. Each lossy pass discards detail permanently and the damage accumulates, so a twice-compressed JPG looks noticeably worse than one compressed once at the equivalent setting. Always start from the best original you have." },
];

const sections: SeoSection[] = [
  {
    heading: "Why image compression matters more than anything else on a page",
    id: "why",
    body: [
      "Images are almost always the heaviest thing a web page loads — routinely more than the HTML, CSS and JavaScript put together. That makes them the dominant factor in Largest Contentful Paint, the Core Web Vital that measures how long a visitor waits before the main content appears. Halving your image weight typically does more for perceived speed than any amount of code optimisation.",
      "The cost is not only speed. Most of the world browses on mobile data, and an uncompressed hero image spends someone's data allowance to deliver detail their screen cannot resolve. A 4 MB photograph displayed in a 800-pixel-wide column is delivering roughly ten times the information the display can use.",
      "Compression is the cheapest of the available fixes because it requires no change to your layout, your markup or your workflow. The image looks the same and weighs a fraction as much.",
    ],
  },
  {
    heading: "Lossy and lossless: two different mechanisms",
    id: "how",
    body: [
      "JPG and WebP are lossy. They analyse the image, discard information the human visual system is least sensitive to — mostly fine colour variation — and store what remains. That is why they achieve such large reductions on photographs, and why pushing the quality too low produces the blocky halos you see around high-contrast edges.",
      "PNG cannot work that way; it is lossless by definition, so it shrinks by reducing how many distinct colours the image uses. Our PNG path quantises the palette and dithers the result, which is essentially invisible on logos, screenshots and flat illustration, and quite visible on a photograph with a smooth sky. Setting the quality to 95% or above keeps PNG perfectly lossless and simply optimises the encoding.",
      "This is why the format matters as much as the slider. A screenshot compressed as JPG will look worse and weigh more than the same screenshot as an optimised PNG, and a photograph stored as PNG will be several times larger than it needs to be.",
    ],
  },
  {
    heading: "Choosing the output format",
    id: "format",
    body: [
      "WebP produces the smallest file at a given quality and supports transparency, and every current browser decodes it. It is the default choice for anything going onto a web page.",
      "JPG is slightly larger but universally accepted, including by software that has never heard of WebP. Choose it for email attachments, upload forms, print services and anything leaving the web.",
      "PNG is the right answer for sharp-edged content — logos, line art, screenshots, diagrams — and for anything needing transparency preserved losslessly. Do not use it for photographs unless you have a specific reason.",
    ],
  },
  {
    heading: "When your image will not compress further",
    id: "already-optimised",
    body: [
      "Sometimes the tool hands your original back and says so. That is deliberate: if nothing we can produce beats the file you supplied, returning a larger 'compressed' version would be a failure dressed up as a result.",
      "It usually means the image has already been through an optimiser, or that it is a small graphic where the format's fixed overhead dominates. Very small PNGs in particular have a floor below which the header and palette are most of the file. In those cases the remaining wins are elsewhere — resizing to the dimensions actually displayed, or switching format entirely.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Compress Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "912" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to compress an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Optimize", href: "/#cat-optimize" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Compress Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Compress JPG, PNG and WEBP images online — shrink file size with quality control and batch support, see how much you saved. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <CompressTool />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
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
        toolName="Compress Image"
        intro="Big image files slow down websites, fill up storage and clog email attachments. oMyImage's Compress Image tool shrinks JPG, PNG and WEBP files right in your browser — convert to WEBP for the smallest size, control the quality, and optionally downscale very large photos. PNGs are compressed properly, by reducing colors with dithering rather than just re-saving them. Compress one image or a whole batch, and see exactly how much you saved."
        howToTitle="How to compress an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Images under 15 MB are compressed entirely in your browser and never leave your device; larger files are processed on our server and deleted straight after. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
