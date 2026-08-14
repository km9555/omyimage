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
import { WatermarkTool } from "./WatermarkTool";

const tool = getTool("watermark-image")!;
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
  { title: "Design the watermark", description: "Type text or upload a logo, then set position, size, opacity and rotation with a live preview." },
  { title: "Apply & download", description: "Click Watermark — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "title", title: "Text or logo", description: "Stamp custom text — with font, color and outline — or overlay your own transparent PNG logo." },
  { icon: "grid_view", title: "Full placement control", description: "Pick any of nine positions, set the margin, opacity and rotation, and see it update live before you export." },
  { icon: "lock", title: "Private & batch", description: "Apply the same watermark to a whole batch at once, entirely in your browser — images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Can I watermark with my own logo?", a: "Yes. Switch to ‘Logo’, upload a PNG (transparent works best), and set its size, position and opacity." },
  { q: "Can I watermark many images at once?", a: "Yes. The same watermark is applied to every image you add, and they download together as a ZIP." },
  { q: "Will the watermark be readable on any image?", a: "Enable the text outline for legibility on busy backgrounds, and adjust opacity and color to taste." },
  { q: "Does it change my original images?", a: "No. Your originals are untouched; the tool produces new watermarked copies in your browser." },
  { q: "Is it free and private?", a: "Yes. No sign-up or watermark from us, and every image is processed locally in your browser." },
  { q: "Where should I place a watermark?", a: "A single corner mark is the least intrusive and the easiest to crop off. A tiled or diagonal mark across the middle is far harder to remove but competes with the picture. Match the choice to the risk: portfolio previews and proofs justify the intrusive version, finished client work usually does not." },
  { q: "What opacity works best?", a: "Between 30% and 50% for most images. Low enough that the photograph still reads, high enough to survive a screenshot. Below about 20% a watermark can vanish entirely against a busy or bright area, which defeats the point." },
  { q: "Can a watermark be removed?", a: "A determined person with editing software can remove or reduce almost any watermark, and AI inpainting has made that easier. A watermark deters casual copying and asserts authorship; it is not copy protection. Marks that overlap the subject are meaningfully harder to remove than ones sitting on empty background." },
  { q: "Should I use text or a logo?", a: "Text is quicker and scales cleanly — a name, handle or domain is often enough. A logo carries brand recognition and looks more finished. If you use a logo, a transparent PNG is essential; a JPG logo brings its own white box along with it." },
  { q: "Will the watermark hurt image quality?", a: "The watermark itself is drawn onto the image, so nothing is degraded beyond that. If you export as JPG the re-encoding costs a little quality as usual; export as PNG to avoid it. Either way, keep an unwatermarked master — the mark cannot be removed from your own copy afterwards." },
  { q: "Can I watermark a whole batch identically?", a: "Yes, and that is the normal case. Set the text or logo, position and opacity once and apply it across every file; they come back as a single ZIP. Position is relative, so mixed portrait and landscape images each get the mark in the correct corner." },
];

const sections: SeoSection[] = [
  {
    heading: "What a watermark actually achieves",
    id: "purpose",
    body: [
      "A watermark does three jobs, and it is worth being clear about which one you need. It deters casual reuse, because most people who would happily save an unmarked image will not bother with a marked one. It attributes the work, so that when an image does travel, your name travels with it. And it marks proofs, letting you show a client the picture while making the unlicensed version unattractive to use.",
      "What it does not do is prevent theft. Anyone with editing software and a little patience can remove a watermark, and AI-based inpainting has lowered that bar considerably. Treating a watermark as copy protection leads to marks so heavy they ruin the photograph while still not stopping anyone determined.",
      "The realistic goal is friction and attribution. Once you frame it that way, the design choices become much easier.",
    ],
  },
  {
    heading: "Placement and the crop problem",
    id: "placement",
    body: [
      "A mark in a corner is discreet and looks professional, which is why it is the default for finished work. Its weakness is obvious: a corner is trivially cropped away, and the image survives the operation looking fine.",
      "Tiling the mark across the frame, or running it diagonally through the centre, solves that at a cost. Now removal means retouching over the subject rather than cropping around it, which is real work. But the photograph is harder to look at, so this belongs on proofs, previews and portfolio pieces rather than on delivered work.",
      "A middle path many photographers use: place a single mark so that it overlaps the subject rather than sitting on empty background. It is far less intrusive than tiling, and much harder to remove cleanly than a corner mark.",
    ],
  },
  {
    heading: "Opacity, size and contrast",
    id: "design",
    body: [
      "Opacity around 30–50% is the range where a watermark reads without dominating. The trap is testing it on one image and applying it to a hundred: a white mark at 35% is clearly visible on a dark photograph and effectively invisible on a bright sky. If your batch is varied, check the brightest and darkest images before committing.",
      "Size matters less than people expect. A mark occupying roughly 10–20% of the frame's width is legible on a phone without shouting. Very small marks are easy to crop and easy to miss; very large ones stop being a watermark and start being a poster.",
      "For logos, use a transparent PNG. A logo saved as JPG carries a white rectangle with it, which looks like a mistake on any image that is not white behind the mark.",
    ],
  },
  {
    heading: "Keep an unmarked master",
    id: "workflow",
    body: [
      "Watermarking is destructive — the mark becomes part of the pixels and cannot be lifted out later. Always work from a copy and keep the clean original, because the moment you need to license the image properly, print it, or supply it to a client, the watermarked version is useless.",
      "The sensible order is edit, then resize for the destination, then watermark last. Watermarking before resizing means the mark gets scaled with everything else and often ends up illegible on the smaller output.",
      "Everything here runs in your browser, so the unmarked original never leaves your device — which matters, since you are usually watermarking precisely because you do not want the image circulating freely.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Watermark Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "564" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to watermark an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Watermark Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Add a text or logo watermark to your images online — with position, opacity and rotation control, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <WatermarkTool />

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
        toolName="Watermark Image"
        intro="Protect your photos and brand your visuals with a custom watermark. oMyImage's Watermark Image tool lets you add text — with your choice of font, color and outline — or overlay your own logo, then position it exactly with live preview, opacity and rotation. Watermark a single image or a whole batch at once. Everything runs in your browser, so your images stay private."
        howToTitle="How to watermark an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Watermarking happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
