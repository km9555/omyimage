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
import { AddBorderTool } from "./AddBorderTool";

const tool = getTool("add-border")!;
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
  { title: "Style the border", description: "Set the thickness, color and optional rounded corners with a live preview." },
  { title: "Apply & download", description: "Click Add border — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "crop_din", title: "Scalable thickness", description: "Border size is a percentage of the shortest side, so it looks consistent on any image dimension." },
  { icon: "rounded_corner", title: "Color & rounded corners", description: "Choose any border color and add rounded inner corners for a polished, modern frame." },
  { icon: "lock", title: "Batch & private", description: "Frame a whole batch at once, entirely in your browser — images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "How is the thickness measured?", a: "As a percentage of the image's shortest side, so the same setting gives a proportional border on images of any size." },
  { q: "Can I round the corners?", a: "Yes. The corner-rounding slider rounds the inner image corners against the border for a softer look." },
  { q: "Can I add borders to many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
  { q: "Why add a border to a photo?", a: "Three common reasons: to stop a light image bleeding into a light page so it reads as a defined object, to make a non-square photo fit a square slot without cropping anything, and to give a set of images a consistent finished look." },
  { q: "How do I fit a photo into a square post without cropping?", a: "Add an uneven border — padding on the short sides until the total is square. Nothing is cut off; the picture simply floats in a frame. This is the standard way to post a landscape or portrait photo to a square feed and keep the whole composition." },
  { q: "What colour border works best?", a: "White for a clean gallery look, black for photographs with dark tones or a cinematic feel, and a brand colour for anything published as a set. If the photo will sit on a coloured page, matching the border to that colour makes it appear borderless while still giving the image breathing room." },
  { q: "How thick should the border be?", a: "Two to five per cent of the image width for a subtle frame — enough to define the edge without being a design element. Ten per cent or more reads as a deliberate mat, the kind used for prints and gallery walls. Thin borders on very large images can disappear entirely once the image is scaled down." },
  { q: "Does adding a border change the image dimensions?", a: "Yes. The border is added around the image rather than drawn over it, so the output is larger than the input by twice the border thickness in each direction. If you need an exact final size, resize the image down first and let the border bring it back up." },
  { q: "Can I use a transparent border?", a: "Yes, if you export as PNG or WEBP. That effectively pads the image with empty space, which is useful when you need to change the aspect ratio for a layout without introducing a visible frame." },
];

const sections: SeoSection[] = [
  {
    heading: "What a border is actually for",
    id: "why",
    body: [
      "The most practical reason is separation. A photograph with pale edges placed on a white page has no visible boundary — the sky runs into the background and the image stops looking like an object. A thin border restores the edge and the picture reads as intentional rather than as a mistake in the layout.",
      "The second reason is fitting. Social platforms, marketplaces and print services frequently want a specific aspect ratio, and the default remedy is to crop. Padding with a border gets you the ratio while keeping the entire composition, which matters when the thing you cropped was the point of the photograph.",
      "The third is consistency. A set of images from different cameras, at different sizes, framed identically starts to look like a collection rather than an assortment.",
    ],
  },
  {
    heading: "Choosing thickness",
    id: "thickness",
    body: [
      "Think in percentages rather than pixels, because a 20-pixel border is prominent on a 600-pixel image and invisible on a 4000-pixel one. Two to five per cent of the width is the range for a subtle frame that defines the edge without becoming a feature.",
      "Ten per cent and above reads as a mat — the wide margin used around gallery prints, which gives an image room and a certain formality. It is a deliberate look rather than a default, and it works better on a considered photograph than on a snapshot.",
      "One thing to check: if the image will be displayed much smaller than its native size, a thin border can vanish entirely in the downscale. Test at the size it will actually appear.",
    ],
  },
  {
    heading: "Padding to a different aspect ratio",
    id: "aspect",
    body: [
      "An uneven border is the tool for making a photograph fit a shape it was not taken in. Add padding to the short sides only and a 3:2 landscape becomes a 1:1 square with the full frame intact.",
      "This is how most people post horizontal photographs to square feeds without losing the edges of the composition, and how portrait shots get into widescreen presentation slides. The alternative — cropping — always costs you something, and often the something is the reason you took the picture.",
      "Choosing the padding colour thoughtfully makes the result look designed rather than patched. White or black are safe; sampling a colour from the photograph itself often looks best.",
    ],
  },
  {
    heading: "Colour choices",
    id: "colour",
    body: [
      "White is the default for good reason — it is what gallery mats and print borders use, and it makes photographs feel cleaner. It also disappears on a white page, which is either exactly what you want or exactly what you were trying to avoid, so check the destination.",
      "Black suits images with dark tones, high contrast or a cinematic quality, and it gives a photograph weight. A brand colour ties a published set together and is the usual choice for social content that needs to look like it came from the same place.",
      "Transparent padding, available when you export as PNG or WEBP, is the option people forget. It changes the aspect ratio without adding anything visible, which is often the right answer when the image is going into a layout that will supply its own background.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Add Border to Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "241" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to add a border to an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Add Border to Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Add a colored border or frame to your images online — with adjustable thickness, rounded corners, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <AddBorderTool />

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
        toolName="Add Border to Image"
        intro="Frame your photos for a clean, finished look. oMyImage's Add Border tool wraps any image in a colored border right in your browser, with control over thickness, color and rounded corners and a live preview. Frame a single image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to add a border to an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Adding borders happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
