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
import { RotateTool } from "./RotateTool";

const tool = getTool("rotate-image")!;
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
  { title: "Rotate or flip", description: "Use the 90° buttons, flip horizontally or vertically, or set any custom angle with the slider." },
  { title: "Rotate & download", description: "Choose an output format and click Rotate — one image downloads directly, several as a ZIP." },
];

const features: Feature[] = [
  { icon: "rotate_90_degrees_cw", title: "Rotate & flip", description: "Turn images left or right in 90° steps, flip them horizontally or vertically, or dial in any angle from 0–359°." },
  { icon: "burst_mode", title: "Batch rotation", description: "Apply the same rotation to many images at once and download them all in a single ZIP." },
  { icon: "palette", title: "Format & background", description: "Export as JPG, PNG or WEBP, and choose a transparent, white, black or custom background for angled corners." },
];

const faqs: Faq[] = [
  { q: "Can I rotate by a custom angle?", a: "Yes. Use the 90° buttons for quick turns, or the angle slider to set any value from 0 to 359 degrees." },
  { q: "What is the background option for?", a: "When you rotate by an angle that isn't a multiple of 90°, the corners become empty. The background fills them — transparent (PNG/WEBP), white, black, or a custom color." },
  { q: "Can I rotate many images at once?", a: "Yes. Add as many as you like; the same rotation and flip apply to all, and multiple files download together as a ZIP." },
  { q: "Will rotating lose quality?", a: "90° and 180° rotations are lossless. For other angles or when exporting to JPG, you can set the quality. PNG/WEBP stay sharp." },
  { q: "Is it free and private?", a: "Yes. No sign-up or watermark, and every image is rotated locally in your browser." },
  { q: "Why do my photos appear sideways on some devices but not others?", a: "Because the camera stored the picture in its sensor's orientation and added an EXIF tag saying which way up it should be shown. Software that reads the tag displays it correctly; software that ignores it shows the raw sideways image. Rotating here bakes the correct orientation into the pixels, so every viewer agrees." },
  { q: "What is auto-orient?", a: "It reads that EXIF orientation tag and applies the rotation it describes, then clears the tag. It is the right choice for a batch of phone photos that look fine in your gallery and wrong everywhere else — it fixes them without you having to judge each one." },
  { q: "Can I rotate by an arbitrary angle?", a: "Yes. Straightening a crooked horizon usually needs only a degree or two. Be aware that any angle other than a multiple of 90° leaves triangular gaps at the corners, which are filled with your chosen background colour — most people crop slightly afterwards to remove them." },
  { q: "Does flipping change the image quality?", a: "No. Horizontal and vertical flips, like 90° and 180° rotations, simply rearrange existing pixels — nothing is resampled, so the result is pixel-for-pixel identical to the original in quality terms." },
  { q: "Can I rotate a whole folder at once?", a: "Yes. Apply the same rotation across a batch, or use auto-orient to let each photo's own EXIF tag decide. Files come back as a single ZIP." },
];

const sections: SeoSection[] = [
  {
    heading: "The EXIF orientation problem",
    id: "exif",
    body: [
      "The most common reason a photo appears rotated is not that it was taken wrongly — it is that the camera saved it sideways on purpose. Phone sensors have a fixed orientation, so when you turn the phone the sensor does not turn with it. Rather than rewriting the pixels, the camera records an EXIF orientation tag describing how the viewer should rotate the image before displaying it.",
      "This works perfectly until the image meets software that ignores the tag. Older content management systems, some upload forms, certain email clients and a great deal of custom software read the raw pixels and show you a photo lying on its side. The frustrating part is that it looks correct in your phone gallery and on your desktop, so the problem only appears after you have published it.",
      "Rotating with this tool writes the orientation into the pixels themselves and clears the tag, which removes the ambiguity entirely. Every viewer then shows the same thing, because there is nothing left to interpret.",
    ],
  },
  {
    heading: "Right-angle rotations are free",
    id: "lossless",
    body: [
      "Turning an image by 90, 180 or 270 degrees moves each pixel to a new position without changing its value. No interpolation happens, so there is no softening and no quality cost at all — the rotated image is exactly as sharp as the original. The same applies to horizontal and vertical flips.",
      "Arbitrary angles are different. Rotating by 3 degrees means most output pixels fall between input pixels, so their values have to be interpolated from the neighbours. The effect is very slight for small corrections but it is real, and it compounds if you rotate the same file repeatedly. Straighten once, from the original, rather than nudging it a degree at a time across several sessions.",
    ],
  },
  {
    heading: "Straightening a crooked horizon",
    id: "straighten",
    body: [
      "A tilted horizon is one of those flaws the eye notices without being able to name, and it is usually only a degree or two out. Small corrections make a disproportionate difference to how considered a photograph looks.",
      "Because rotating at an angle turns the rectangle within its frame, the corners no longer reach the edges and you are left with triangular gaps. Those are filled with the background colour you choose. In practice most people crop in slightly afterwards to cut them off, which costs a little of the frame — so if you know a shot is crooked, it is worth leaving a bit of room around the subject when you take it.",
    ],
  },
  {
    heading: "Rotating a batch",
    id: "batch",
    body: [
      "Scanned documents fed through the sheet feeder the wrong way round, a burst of photos taken with the phone held sideways, a set of product shots that all need the same quarter turn — these are the normal cases for applying one rotation across many files at once.",
      "When the images need different corrections, auto-orient is usually the better tool, because it reads each file's own EXIF tag rather than applying one blanket rotation. Everything runs in your browser and comes back as a single ZIP.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Rotate Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "596" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to rotate an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Optimize", href: "/#cat-optimize" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Rotate Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Rotate and flip JPG, PNG, WEBP and GIF images online — 90° steps or any custom angle, with a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <RotateTool />

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
        toolName="Rotate Image"
        intro="Straighten a sideways photo or spin a graphic to exactly the angle you need. oMyImage's Rotate Image tool lets you turn images in 90° steps, flip them, or set any custom angle with a live preview — one image or a whole batch at once. Choose your output format and background, then download. It all happens in your browser, so your images stay private."
        howToTitle="How to rotate an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Rotation happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
