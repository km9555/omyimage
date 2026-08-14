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
import { RemoveExifTool } from "./RemoveExifTool";

const tool = getTool("remove-exif")!;
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
  { title: "Pick the output", description: "Keep the original format or convert, and set the quality for JPG/WEBP." },
  { title: "Clean & download", description: "Click Remove metadata — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "shield", title: "Strips GPS & camera data", description: "Removes EXIF, GPS location, camera, lens and timestamp data by fully re-encoding the pixels." },
  { icon: "burst_mode", title: "Batch cleaning", description: "Clean a whole batch of JPG, PNG or WEBP images at once and download them as a ZIP." },
  { icon: "lock", title: "100% private", description: "Everything runs in your browser — your images are never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What metadata is removed?", a: "All embedded EXIF/IPTC/XMP data, including GPS location, camera and lens model, and capture date — the output keeps only the pixels." },
  { q: "Does it reduce image quality?", a: "The image is re-encoded, so set the quality to 100% for a virtually identical result. The default of 95% is a safe balance." },
  { q: "Can I clean many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
  { q: "What exactly is stored in EXIF data?", a: "Far more than most people expect: GPS coordinates accurate to a few metres, the exact date and time, the camera or phone model and serial number, lens and exposure settings, and on some devices the owner name, copyright field and a thumbnail of the original image." },
  { q: "Do social networks strip EXIF automatically?", a: "The big ones generally do on upload, but you should not rely on it. Direct messages, cloud links, email attachments, forums, marketplace listings and personal websites frequently pass the file through untouched — and those are exactly the places people share photos of things at their home address." },
  { q: "Will removing EXIF change how the photo looks?", a: "Only in one respect. The orientation tag is metadata too, so stripping it can make a photo that displayed upright appear sideways. Rotate the image first so the correct orientation is baked into the pixels, then remove the metadata." },
  { q: "Does this remove a hidden watermark or tracking code?", a: "No. It clears standard metadata fields. Steganographic marks embedded in the pixels themselves are a different thing entirely and survive metadata removal — they would survive most edits, in fact." },
  { q: "Can I recover the metadata afterwards?", a: "Not from the stripped file. Keep your original if the capture date or location matters to you — for organising a photo library, for insurance documentation, or simply for remembering where a picture was taken." },
  { q: "How can I check what my photo contains first?", a: "Use the Image Metadata Viewer. It reads every tag your file carries, including GPS coordinates plotted on a map, entirely in your browser. Looking before you strip is usually worth the extra step." },
];

const sections: SeoSection[] = [
  {
    heading: "What your photos are carrying",
    id: "what",
    body: [
      "Every photograph a phone or camera takes arrives with a block of metadata attached. The EXIF standard covers the technical fields — shutter speed, aperture, ISO, focal length, camera model — which are useful and harmless. What sits alongside them is the part worth thinking about.",
      "GPS coordinates are the significant one. If location services were enabled, the file records where the picture was taken to within a few metres, along with the exact date and time. A photograph taken in your living room carries your home address in a form any software can read instantly.",
      "There is more: device serial numbers that link separate photographs to the same camera, owner and copyright fields that some cameras populate automatically, editing history from certain applications, and on some devices an embedded thumbnail of the original — which occasionally survives cropping and shows what you cropped out.",
    ],
  },
  {
    heading: "Where the risk actually is",
    id: "risk",
    body: [
      "Major social platforms strip metadata when you upload, so a photo posted to a public feed is usually clean. That creates a false sense of safety, because the places where photos most often leak location are the ones nobody thinks about.",
      "Direct messages and chat apps frequently forward the original file. So do email attachments, links to cloud storage, uploads to forums and marketplace listings, images sent to a print service, and anything you host on your own site. Selling furniture online with photographs taken at home is the classic case: the listing is anonymous and the file is not.",
      "The other overlooked route is professional. Photographs supplied to a client, a journalist, an insurer or a legal process carry whatever they carry, and the recipient can read it whether or not that was intended.",
    ],
  },
  {
    heading: "The orientation trap",
    id: "orientation",
    body: [
      "One EXIF field is doing real work: the orientation tag. Phone sensors are fixed, so when you rotate the phone the image is stored sideways and a tag records which way up it should be displayed.",
      "Strip the metadata and that instruction disappears with it, so a photo that looked correct everywhere can suddenly appear rotated. Nothing has corrupted — the pixels were always sideways, and the note explaining that has been removed.",
      "The fix is order of operations. Run the image through the Rotate tool first, using auto-orient to bake the correct orientation into the pixels, and then strip the metadata. After that the file needs no instruction, because it is stored the right way up.",
    ],
  },
  {
    heading: "How stripping works here",
    id: "how",
    body: [
      "The image is decoded to a canvas and re-encoded from those raw pixels. Canvas has no concept of metadata, so nothing carries across — the output contains the picture and nothing else. This is thorough by construction rather than by maintaining a list of fields to delete.",
      "It happens entirely inside your browser, which matters given the purpose. Uploading a photograph to a server in order to remove its location data would rather defeat the exercise; here the file never leaves your device, and there is no copy anywhere holding the coordinates you were trying to remove.",
      "Batches are handled the same way and returned as a single ZIP, which is the normal case when preparing a set of listing photographs or clearing a folder before sharing it.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} EXIF Data Remover`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "377" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to remove EXIF data from an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">EXIF Data Remover</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Remove EXIF and metadata — including GPS location — from images online before you share them. Batch supported, free, fast and 100% private in your browser.
          </h2>
        </header>

        <RemoveExifTool />

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
        toolName="EXIF Data Remover"
        intro="Protect your privacy before sharing photos. oMyImage's EXIF Data Remover strips the hidden metadata from your images — GPS location, camera and lens model, software and timestamps — by re-encoding them right in your browser. Clean one image or a whole batch and download instantly. Nothing is uploaded, so your photos and their data stay private."
        howToTitle="How to remove EXIF data from an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Metadata removal happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
