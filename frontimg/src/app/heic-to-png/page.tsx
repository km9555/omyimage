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
import { HeicTool } from "../heic-to-jpg/HeicTool";

const tool = getTool("heic-to-png")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  {
    title: "Add your HEIC photos",
    description: "Drop in .heic or .heif files straight from your iPhone or iCloud download. Batches are fine.",
  },
  {
    title: "PNG is already selected",
    description: "The output is lossless, so there is no quality slider to set. Switch to JPG instead if you would rather have a smaller file.",
  },
  {
    title: "Convert and download",
    description: "One photo downloads on its own; several arrive together as a ZIP.",
  },
];

const features: Feature[] = [
  {
    icon: "high_quality",
    title: "Lossless output",
    description:
      "PNG stores every pixel exactly as decoded from the HEIC, with no second round of compression damage.",
  },
  {
    icon: "burst_mode",
    title: "Whole camera rolls",
    description:
      "Convert a batch in one pass and get a single ZIP back rather than downloading photo by photo.",
  },
  {
    icon: "devices",
    title: "Opens anywhere",
    description:
      "PNG has been universally supported since the 1990s — Windows, Android, Office, every editor and every browser.",
  },
];

const sections: SeoSection[] = [
  {
    heading: "Why convert HEIC to PNG?",
    id: "why",
    body: [
      "HEIC is what an iPhone has saved photos in by default since iOS 11, and it stores roughly twice the image in the same space as JPG. The catch is that it is built on the HEVC/H.265 video codec, which is covered by patent pools — so most browsers, a great deal of Windows software and plenty of Android apps simply refuse to open a .heic file without an extra codec install.",
      "PNG is the opposite kind of format: unremarkable, ancient by software standards, and understood by absolutely everything. Choosing it over JPG comes down to one thing — PNG is lossless. The HEIC was already lossily compressed when your phone wrote it, and converting to JPG compresses it a second time. Converting to PNG does not, so what you get is exactly what the decoder produced. For a photo you intend to edit, retouch, print or archive, that matters.",
      "The trade is file size. A HEIC that occupies 2 MB on your phone can easily become a 10–15 MB PNG, because PNG never discards anything. If you only need to email the photo or post it, JPG is the better destination and the size difference is dramatic.",
    ],
  },
  {
    heading: "Why this one runs on our server",
    id: "server",
    body: [
      "Almost every tool on oMyImage works inside your browser tab. HEIC is the exception, and the reason is legal rather than technical. Every JavaScript HEIC decoder in existence — heic2any, heic-decode, heic-convert, libheif-js — is the same libheif library underneath, and libheif is LGPL-3.0. Putting that in a browser bundle counts as distribution, which brings obligations a minified webpack chunk cannot satisfy.",
      "So the decoding happens on our server instead, where running the library is not distribution. Your file is sent over an encrypted HTTPS connection, converted, and deleted immediately afterwards. We do not keep it, index it or use it for anything else. This is the only category of tool here that works that way, and the pages that do say so plainly rather than claiming a privacy property they do not have.",
    ],
  },
  {
    heading: "Stopping your iPhone from making HEICs",
    id: "iphone",
    body: [
      "If you would rather not convert every time, the phone can be told to stop. Under Settings, in the Camera section, the Formats screen offers 'Most Compatible' — choose it and the camera writes JPG from then on. You lose some storage efficiency and it does not touch the photos you already have, but new shots stop being a problem.",
      "There is a second setting worth knowing about. Under Photos, the option to transfer to Mac or PC can be set to 'Automatic', which converts HEIC to JPG as it copies. If it is set to 'Keep Originals' you get the .heic files unchanged, which is often where a folder of unopenable photos comes from in the first place.",
    ],
  },
  {
    heading: "PNG or JPG for iPhone photos?",
    id: "png-or-jpg",
    body: [
      "Choose PNG when the photo is going into an editor, when you will re-save it more than once, when it contains text or a screenshot-like flat area that JPG would blur, or when you want an archival copy that will not degrade further.",
      "Choose JPG when the photo is a normal camera snapshot destined for email, a message, a website or a print service. It is a fraction of the size and the quality difference is invisible at sensible settings. The toggle above switches between the two without re-uploading, so you can try both.",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Does converting HEIC to PNG lose quality?",
    a: "The PNG step is lossless, so nothing is lost there. Bear in mind the HEIC itself was lossily compressed by your phone, so converting preserves the photo exactly as it currently is rather than restoring detail the camera already discarded.",
  },
  {
    q: "Why is the PNG so much larger than the HEIC?",
    a: "Because PNG stores everything and HEIC is extremely efficient at throwing away what the eye will not miss. A five- to eight-fold size increase is normal. Convert to JPG instead if size matters more than losslessness.",
  },
  {
    q: "Is my photo uploaded?",
    a: "Yes, for this tool specifically. Browsers cannot decode HEIC and the only JavaScript decoders are LGPL-licensed libheif, which we cannot ship to your browser. Your file goes over HTTPS to our server, is converted and is deleted right afterwards.",
  },
  {
    q: "Can I convert a whole camera roll at once?",
    a: "Yes. Add as many .heic or .heif files as you like and they are converted one after another, then delivered as a single ZIP.",
  },
  {
    q: "Does it work with .heif files too?",
    a: "Yes. HEIF is the container and HEIC is the HEVC-encoded flavour Apple uses. Both extensions are accepted.",
  },
  {
    q: "Will the photo's date and location be kept?",
    a: "The image itself converts faithfully, but EXIF metadata such as capture date and GPS coordinates is not carried into the PNG. If you need to inspect that data first, the Image Metadata Viewer reads it directly from a HEIC without converting.",
  },
  {
    q: "How do I stop my iPhone saving HEIC in the first place?",
    a: "In Settings, open Camera then Formats and choose 'Most Compatible'. New photos will be saved as JPG. Existing HEIC files are unaffected, so you will still need to convert those.",
  },
  {
    q: "Is it free?",
    a: "Yes — no account, no watermark and no cap on the number of photos.",
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE.name} HEIC to PNG`,
    url: canonical,
    operatingSystem: "All",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "563" },
    description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert HEIC to PNG",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Convert", href: "/#cat-convert" },
            { label: tool.name },
          ]}
        />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">HEIC to PNG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            {tool.seoDescription}
          </h2>
          <p data-tool-subtitle className="text-body-sm text-on-surface-variant">
            Want a smaller file instead?{" "}
            <Link href="/heic-to-jpg" className="text-secondary hover:underline">
              Convert HEIC to JPG
            </Link>
            .
          </p>
        </header>

        <HeicTool defaultTarget="image/png" />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/${r.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift"
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: toolColorTint(r) }}
                  >
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
        toolName="HEIC to PNG"
        intro="Turn the .heic photos your iPhone produces into PNG files that open on anything. PNG is lossless, so the converted image is exactly what came out of the decoder — no second round of compression on top of what the camera already did. Add one photo or a whole camera roll."
        howToTitle="How to convert HEIC to PNG"
        steps={steps}
        features={features}
        faqs={faqs}
        sections={sections}
        fullWidthText
        security="HEIC decoding cannot run in a browser — every JavaScript decoder is LGPL-licensed libheif, which we are not able to ship to your device. Your photo is therefore sent to our server over an encrypted HTTPS connection, converted, and deleted straight afterwards. It is never stored, indexed or used for anything else."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
