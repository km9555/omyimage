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
import { CircleCropTool } from "./CircleCropTool";

const tool = getTool("circle-crop")!;
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
  { title: "Style the circle", description: "Choose a transparent or colored background and an optional colored ring, with a live preview." },
  { title: "Crop & download", description: "Click Circle crop — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "panorama_fish_eye", title: "Perfect round avatars", description: "The largest centered square is clipped to a clean circle — ideal for profile pictures and logos." },
  { icon: "blur_circular", title: "Transparent or framed", description: "Export a transparent PNG/WEBP or add a colored background and a ring around the circle." },
  { icon: "lock", title: "Batch & private", description: "Circle-crop a whole batch at once, entirely in your browser — images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Will the background be transparent?", a: "Yes, by default — export as PNG or WEBP to keep the corners outside the circle transparent. Choose JPG to flatten onto a color." },
  { q: "What if my image isn't square?", a: "The tool automatically takes the largest centered square from your image before cropping it to a circle." },
  { q: "Can I add a ring around the circle?", a: "Yes. Set the ring thickness and color to add a clean border around the circular crop." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
  { q: "Why does my circle crop have a white square behind it?", a: "Because you exported as JPG. JPG has no transparency, so everything outside the circle has to be filled with a solid colour. Export as PNG or WEBP instead and the corners stay genuinely transparent." },
  { q: "What size should a profile picture be?", a: "Somewhere around 400×400 to 800×800 covers essentially every platform. They all downscale to their own display size, so supplying more than about 800 pixels gains nothing, while supplying less than about 200 looks soft on a high-density screen." },
  { q: "Do I need to circle-crop for a profile picture at all?", a: "Usually not — most platforms apply their own circular mask to whatever square you upload. Doing it yourself matters when you need the round image somewhere that will not mask it for you: a website, a slide, a PDF, an email signature or a printed document." },
  { q: "How do I get the crop centred on a face?", a: "Position the circle so the eyes sit slightly above the middle rather than dead centre. Centring on the whole head tends to leave too much space above and crop the chin. Leave a little room around the head rather than filling the circle edge to edge." },
  { q: "When is a ring worth adding?", a: "When the image will sit on a background of similar tone — without it the edge of a pale portrait can disappear against a pale page and the head appears to float. Keep it thin; a heavy ring competes with the subject." },
  { q: "Will the image lose quality?", a: "No. Cropping keeps the remaining pixels exactly as they were. The only quality cost is the export step, and choosing PNG avoids even that." },
];

const sections: SeoSection[] = [
  {
    heading: "Transparency is the whole point",
    id: "transparency",
    body: [
      "A circular crop is only genuinely circular if the corners are transparent. Otherwise you have a square image with a circle drawn on it, and the moment it sits on a background of a different colour the square becomes visible.",
      "That makes the export format the most important decision here, and the one people most often get wrong. PNG and WEBP both carry an alpha channel and keep the corners empty. JPG has no alpha channel at all, so the area outside the circle must be filled with something — which is why a JPG circle crop arrives with a white box around it.",
      "If you know the image will always sit on a known solid colour, filling with that colour works fine. If it might go anywhere, use PNG.",
    ],
  },
  {
    heading: "Where round images are actually needed",
    id: "uses",
    body: [
      "Most social platforms mask avatars into circles themselves, so uploading a square is enough. The cases that need a real circular crop are the ones where nothing will do the masking for you.",
      "That covers team pages and author bylines on a website, headshots on presentation slides, contributor photos in a PDF or report, logos and badges, email signatures, and printed materials. In all of these you are placing an image file directly, and if its corners are not transparent they will show.",
      "It is also handy for product shots and icons where a round crop simply looks more finished than a rectangle floating in a layout.",
    ],
  },
  {
    heading: "Composing inside a circle",
    id: "composition",
    body: [
      "A circle crops more aggressively than it looks — the corners of the original are gone entirely, so anything near an edge disappears. Compose with more room around the subject than you would for a rectangular crop.",
      "For portraits, the reliable placement is eyes slightly above centre with a little space above the head. Centring the whole head mathematically tends to leave an awkward gap at the top and cut the chin. Fill the circle with the face and it feels claustrophobic; leave a small margin and it reads as a considered portrait.",
      "Start from a square-ish source if you can. Cropping a wide landscape photograph to a circle throws away most of the frame, so a tighter original gives you far more usable resolution in the result.",
    ],
  },
  {
    heading: "Sizing and rings",
    id: "sizing",
    body: [
      "Between 400 and 800 pixels square covers every realistic use. Platforms downscale to their own dimensions, so more resolution than that is wasted bytes; much less and the image looks soft on a high-density display.",
      "A thin ring around the edge solves a specific problem: a light portrait on a light page has no visible boundary, and the head appears to float. A one- or two-pixel ring in a mid tone defines the shape without drawing attention. Thicker rings start to look like a frame, which is a design choice rather than a fix.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Circle Crop Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "352" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to crop an image into a circle",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Circle Crop Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Crop images into a perfect circle online — ideal for avatars and profile pictures, with a transparent background, optional ring and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <CircleCropTool />

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
        toolName="Circle Crop Image"
        intro="Create polished round avatars and profile pictures in seconds. oMyImage's Circle Crop tool takes the largest centered square of your image and clips it to a smooth circle right in your browser, with a transparent background by default plus optional color fills and a ring. Crop one image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to crop an image into a circle"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Circle cropping happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
