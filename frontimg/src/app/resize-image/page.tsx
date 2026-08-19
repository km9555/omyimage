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
  { q: "What size should images be for a website?", a: "Match the space they actually occupy. A full-width hero on a desktop layout rarely needs more than 1920px wide; an in-article image usually 800–1200px; a thumbnail 300–400px. Then double it only if you are serving a dedicated 2× asset to high-density screens." },
  { q: "What is the difference between resizing and compressing?", a: "Resizing changes how many pixels there are; compressing changes how efficiently those pixels are stored. For web images resizing is usually the bigger win, because a photo displayed at 800px wide but stored at 4000px is carrying twenty-five times the pixels it can show. Doing both gives the smallest result." },
  { q: "Why does my enlarged image look blurry?", a: "Because the detail does not exist. Scaling up can only interpolate between pixels that are already there, so edges soften and texture smears. If you genuinely need a larger image, the AI Upscaler reconstructs plausible detail rather than simply stretching what is present." },
  { q: "Can I resize to an exact width and height?", a: "Yes — turn off 'Keep aspect ratio' and set both. Be aware the image will stretch if your numbers do not match its proportions. To fill an exact box without distortion, crop first and then resize." },
  { q: "Does resizing change the file format?", a: "Only if you ask it to. You can keep the original format or export to JPG, PNG or WEBP. Converting to WEBP at the same time is a common way to get both fewer pixels and a smaller file in one pass." },
];

const sections: SeoSection[] = [
  {
    heading: "Pixels, dimensions and file size",
    id: "basics",
    body: [
      "An image's dimensions are how many pixels wide and tall it is; its file size is how many bytes those pixels take to store. The two are related but not the same thing, and confusing them is the most common reason people end up with images that are still too heavy after 'making them smaller'.",
      "Resizing attacks the first number. Halving both width and height leaves a quarter of the pixels, and the file usually shrinks by a similar proportion — a much larger effect than any compression setting can achieve on its own. This is why resizing first and compressing second gives dramatically better results than compressing alone.",
      "The reference point that matters is the space the image actually occupies on screen. A 4000-pixel-wide photograph shown in a 800-pixel column is delivering twenty-five times more data than the display can use, and no amount of clever compression recovers that waste.",
    ],
  },
  {
    heading: "Downscaling is safe; upscaling is not",
    id: "direction",
    body: [
      "Making an image smaller is a well-behaved operation. The resampler averages groups of pixels down into fewer, and the result is generally sharper and cleaner than the original at its new size. You can downscale aggressively without visible harm.",
      "Enlarging is a fundamentally different problem, because the detail you are asking for was never captured. Interpolation can only guess at values between the pixels that exist, so edges go soft and fine texture turns to mush. A 20–25% enlargement is usually acceptable; doubling is visibly degraded.",
      "If you truly need a larger image, an AI upscaler is the only approach that helps, because it synthesises plausible detail from a trained model rather than stretching what is there. Even then, it is inventing information, which matters if the image is evidentiary or technical.",
    ],
  },
  {
    heading: "Aspect ratio, and what happens when you break it",
    id: "aspect",
    body: [
      "Aspect ratio is the relationship between width and height. Keep it locked and your image scales proportionally — a 3:2 photo stays 3:2 and simply gets smaller. Unlock it and you can force any dimensions you like, at the cost of stretching or squashing everything in the frame. Faces make this obvious immediately; landscapes hide it for a while and then look subtly wrong.",
      "When you need an image to fit an exact box that does not match its proportions, the right sequence is crop then resize, not stretch. Cropping discards the parts outside your target shape, leaving the remaining content undistorted, and resizing then brings it to the pixel dimensions you need.",
    ],
  },
  {
    heading: "Resizing a whole batch",
    id: "batch",
    body: [
      "Setting dimensions once and applying them across a folder is the normal case for product catalogues, gallery uploads and any site with a fixed image slot. Percentage mode is often the better choice for a mixed batch, because it scales each image relative to its own size rather than forcing everything to identical dimensions — useful when portrait and landscape shots are mixed together.",
      "Everything is processed in your browser and delivered as a single ZIP, so a hundred images is one download rather than a hundred. Nothing is uploaded unless an image is too large for a browser tab to paint — which depends on its resolution rather than its file size.",
    ],
  },
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
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Optimize", href: "/#cat-optimize" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Resize Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Resize JPG, PNG, WEBP and GIF images online — by exact pixels or percentage, with aspect-ratio lock and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ResizeTool />

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
        toolName="Resize Image"
        intro="Need an image at an exact size for a profile picture, a thumbnail, or a print? oMyImage's Resize Image tool lets you set precise pixel dimensions or scale by percentage, with an aspect-ratio lock so nothing looks stretched. Resize a single image or a whole batch at once, choose your output format, and download. Everything runs in your browser, so your images stay private."
        howToTitle="How to resize an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Resizing happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
