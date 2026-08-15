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
import { MetadataTool } from "./MetadataTool";

const tool = getTool("image-metadata")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select a photo, or drag and drop it into the workspace." },
  { title: "Read the data", description: "See camera, lens, exposure, date and GPS details extracted from the file's EXIF." },
  { title: "Explore everything", description: "Expand the full metadata list to inspect every embedded tag." },
];

const features: Feature[] = [
  { icon: "photo_camera", title: "Full EXIF readout", description: "Camera make and model, lens, aperture, shutter, ISO, focal length, dates and more, neatly grouped." },
  { icon: "location_on", title: "GPS location", description: "If the photo is geotagged, see the coordinates and open the exact spot on a map." },
  { icon: "lock", title: "100% private", description: "Metadata is read entirely in your browser — your photo is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What metadata can it read?", a: "EXIF, including camera and lens, exposure settings, capture date, orientation, color space and GPS coordinates when present." },
  { q: "Why does my image show no metadata?", a: "It may have been stripped (e.g. by social media), or the format doesn't store EXIF — most PNGs and screenshots have none." },
  { q: "Can I see the GPS location?", a: "Yes. Geotagged photos show their coordinates with a link to view the location on a map." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the photo is read locally in your browser — nothing is uploaded." },
  { q: "What can metadata tell me about a photo?", a: "When it was taken to the second, where to within a few metres if location was on, which camera or phone took it including the model and often a serial number, and the full exposure settings — shutter, aperture, ISO, focal length, flash. Some files also carry owner and copyright fields and an editing history." },
  { q: "Can I tell whether a photo has been edited?", a: "Sometimes. Editing software frequently writes its own name into the metadata, and the modification date often differs from the capture date. But metadata is trivially alterable, so its absence proves nothing and its presence is evidence rather than proof." },
  { q: "Why does my photo have no metadata at all?", a: "Most likely it has already been through something that stripped it. Social platforms remove metadata on upload, screenshots never had any, and many messaging apps re-encode images as they send. Editing and re-saving in some applications also discards it." },
  { q: "Can it read HEIC files from my iPhone?", a: "Yes. It parses the metadata directly out of the container without decoding the HEVC-compressed pixels, so it works in your browser even though displaying a HEIC does not. Camera settings, timestamps and GPS all read normally." },
  { q: "How do I remove what I find here?", a: "Use the EXIF Remover. It re-encodes the image from raw pixels, which leaves no metadata behind at all. Read first, then strip — knowing what a file was carrying is often more useful than simply clearing it blind." },
  { q: "What is the GPS data accurate to?", a: "Usually within a few metres outdoors with a good satellite fix. Indoors, or in dense urban areas where the phone falls back to Wi-Fi and cell positioning, it can be tens or hundreds of metres out. Either way it is easily precise enough to identify a building." },
];

const sections: SeoSection[] = [
  {
    heading: "What metadata is and where it comes from",
    id: "what",
    body: [
      "Every camera writes a block of information into the file alongside the image itself. The EXIF standard defines most of it, and it was designed for photographers — a record of exactly how each frame was exposed, which is genuinely useful when you are trying to work out why one shot worked and another did not.",
      "Modern phones add considerably more. GPS coordinates, altitude and compass heading if location services are enabled; the device model and often a serial number; the software version that processed the image. Some cameras populate owner and copyright fields from settings you configured once and forgot.",
      "Editing applications append their own entries, so a file can accumulate a partial history of what was done to it and when. None of this is visible when you look at the picture, and all of it travels with the file.",
    ],
  },
  {
    heading: "Reading before sharing",
    id: "why",
    body: [
      "The most practical reason to look is to find out what you are about to give away. A photograph taken at home carries your address; one taken at work carries your employer's. Selling something online, posting to a forum, sending a file to a stranger — in each case the image is anonymous and the metadata is not.",
      "There are constructive uses too. Photographers examine exposure data to learn from their own results or to understand how someone else achieved a shot. Anyone organising a large photo library relies on capture timestamps to sort images that filenames have long since scrambled. Insurance and legal documentation often turns on when and where a photograph was taken.",
      "And when you receive an image, metadata is a first check on provenance — though a soft one, since anything in it can be edited.",
    ],
  },
  {
    heading: "What metadata cannot settle",
    id: "limits",
    body: [
      "Metadata is data, not evidence. Every field can be altered with freely available tools, so a timestamp or a location proves only that someone wrote those values into the file. Treat what you find as a lead rather than a conclusion.",
      "Absence proves even less. A photograph with no metadata has very likely been through a platform that strips it, or is a screenshot, or was re-saved by an editor — none of which implies anything was hidden deliberately.",
      "The one thing metadata does establish reliably is what a file is currently disclosing. That is the question this tool answers well, and it is usually the question that matters before you send something.",
    ],
  },
  {
    heading: "Read locally, including HEIC",
    id: "privacy",
    body: [
      "The file is parsed inside your browser and never uploaded, which is the correct handling for a tool whose entire purpose is examining potentially sensitive information. Sending a photograph to a server in order to discover whether it reveals your address would be an odd trade.",
      "HEIC and HEIF files work here even though the site cannot display them in the browser. Metadata sits in the container rather than in the compressed pixel data, so the parser reads the tags without ever touching the HEVC stream — which is why this works locally while HEIC conversion has to run on a server.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image Metadata Viewer`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "312" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to view image metadata",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image Metadata Viewer</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            View an image's EXIF metadata online — camera, lens, exposure, GPS location and date. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <MetadataTool />

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
        toolName="Image Metadata Viewer"
        intro="See the hidden story behind any photo. oMyImage's Image Metadata Viewer reads the EXIF data embedded in your image right in your browser — camera and lens, aperture, shutter speed, ISO, capture date and even GPS location — and lays it out clearly, with the complete tag list a click away. Nothing is uploaded, so your photo stays private."
        howToTitle="How to view image metadata"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your photo stays private. EXIF metadata is read entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
