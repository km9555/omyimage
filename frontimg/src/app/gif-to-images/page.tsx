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
import { GifToImagesTool } from "./GifToImagesTool";

const tool = getTool("gif-to-images")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload a GIF", description: "Select an animated GIF, or drag and drop it into the workspace." },
  { title: "See the frames", description: "Every frame is extracted and fully composited — preview them in a grid." },
  { title: "Download", description: "Save all frames as a ZIP in PNG, JPG or WEBP, or click any single frame to download it." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Every frame", description: "Splits an animated GIF into all of its individual frames, fully composited so each is a complete image." },
  { icon: "folder_zip", title: "Bulk ZIP download", description: "Export every frame at once as a numbered ZIP in PNG, JPG or WEBP." },
  { icon: "lock", title: "100% private", description: "Frames are extracted entirely in your browser — your GIF is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "Are the frames complete images?", a: "Yes. Each frame is composited with the proper disposal handling, so partial frames are merged into full images." },
  { q: "What formats can I export to?", a: "PNG (with transparency), JPG (with a background color) or WEBP." },
  { q: "Can I download just one frame?", a: "Yes. Click any frame in the grid to download it individually, or use the button to download all frames as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the GIF is processed locally in your browser — nothing is uploaded." },
  { q: "Why would I want the individual frames?", a: "To pick one good still out of an animation, to edit a specific frame and rebuild the loop, to study motion frame by frame, to remove a frame you did not want, or simply because you needed a static image and only had the GIF." },
  { q: "Will I get every frame?", a: "Yes — the GIF is decoded properly rather than sampled, so you get each stored frame in order. A three-second loop at 10 frames per second gives thirty images, numbered so the sequence is preserved." },
  { q: "Which export format should I choose?", a: "PNG in almost every case. GIF frames are already limited to 256 colours, and PNG stores them losslessly so nothing further is degraded — it also keeps GIF's transparency. JPG would add compression artefacts on top of the palette limitation and cannot hold transparency at all." },
  { q: "Why do some frames look partial or transparent?", a: "Because GIF stores frames as differences from the previous one — only the pixels that changed. The decoder composites them back into complete images, which is what you receive. If you have ever seen a raw GIF frame in another tool showing only a fragment, that is why." },
  { q: "Can I rebuild a GIF after editing the frames?", a: "Yes. Extract here, edit the frames you want, then feed them back through the GIF Maker to reassemble the loop. That round trip is the usual way to fix or clean up an existing animation." },
  { q: "Does a very long GIF work?", a: "Generally yes, though a GIF with hundreds of frames produces hundreds of files and takes longer to decode and ZIP. Everything happens in your browser, so the practical limit is your device's memory rather than an upload cap." },
];

const sections: SeoSection[] = [
  {
    heading: "What extracting frames gives you",
    id: "why",
    body: [
      "An animated GIF is a stack of still images with timing information. Pulling them apart gives you each of those stills as a normal image file, which is what you need whenever the animation is not the thing you actually want.",
      "The most common case is finding one good frame. A reaction GIF contains a moment you want as a static picture; a screen recording contains the one state of the interface you need for documentation; a stop-motion sequence contains the single frame that came out best.",
      "The second is repair. Something is wrong with an existing GIF — a stray frame, a watermark, a wrong colour — and you cannot fix it while it remains an animation. Extract, correct the frames in question, and rebuild.",
    ],
  },
  {
    heading: "How GIF frames are actually stored",
    id: "decoding",
    body: [
      "GIF is more economical than it first appears. Rather than storing every frame in full, it records only the region that changed since the previous one, along with an instruction about what to do with the area underneath — leave it, restore the background, or restore what was there before.",
      "This is why naive frame extraction produces fragments: a tool that simply reads each stored block gets a partial image with transparent gaps, not the picture you see when the GIF plays. Proper decoding means compositing each frame onto the accumulated state of the ones before it.",
      "That is what happens here, so the images you get back are complete frames exactly as they appear during playback, in order and correctly numbered.",
    ],
  },
  {
    heading: "Why PNG is the right output",
    id: "format",
    body: [
      "GIF frames have already been reduced to a palette of at most 256 colours. That reduction is baked in and cannot be undone, so the goal when extracting is simply to avoid making anything worse.",
      "PNG is lossless, which means the frames arrive exactly as the decoder produced them. It also handles GIF's transparency correctly, so frames with see-through areas keep them rather than gaining a white background.",
      "JPG would be the wrong choice on both counts — it would add its own compression artefacts on top of the palette limitation, and it cannot store transparency at all. If you need smaller files afterwards, convert the extracted PNGs deliberately rather than losing quality by default.",
    ],
  },
  {
    heading: "The extract-edit-rebuild loop",
    id: "workflow",
    body: [
      "Extracting and rebuilding is the practical way to modify an animation you did not create. Pull the frames out here, make whatever change you need — crop them, adjust the colour, remove the ones you do not want, blur something sensitive — and then feed the result through the GIF Maker.",
      "One thing to preserve on the way back: timing. Note the original frame delay before you start, because rebuilding at a different rate changes the character of the animation, sometimes drastically. And keep the frame numbering intact, since the order they are added in is the order they will play.",
      "Everything runs in your browser at both ends, so a GIF containing something you would rather not upload can be taken apart and put back together without leaving your machine.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} GIF to Images`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "228" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to extract frames from a GIF",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">GIF to Images</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Extract every frame of an animated GIF online — download them all as a ZIP in PNG, JPG or WEBP, or grab a single frame. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <GifToImagesTool />

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
        toolName="GIF to Images"
        intro="Break an animated GIF back into individual pictures. oMyImage's GIF to Images tool extracts every frame of a GIF right in your browser — fully composited so each frame is a complete image — and lets you download them all as a ZIP or one at a time, in PNG, JPG or WEBP. Nothing is uploaded, so your GIF stays private."
        howToTitle="How to extract frames from a GIF"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your GIF stays private. Frame extraction happens entirely in your browser with the open-source gifuct-js library — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
