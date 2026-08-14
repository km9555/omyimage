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
import { Base64ToImageTool } from "./Base64ToImageTool";

const tool = getTool("base64-to-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Paste", description: "Paste a data URI or raw Base64 string into the input box." },
  { title: "Preview", description: "The decoded image appears instantly, with its dimensions and a validity check." },
  { title: "Download", description: "Download the original image, or convert it to PNG, JPG or WEBP first." },
];

const features: Feature[] = [
  { icon: "image", title: "Instant decode", description: "Auto-detects PNG, JPG, GIF, WEBP, BMP and SVG from the string and previews it as you type." },
  { icon: "sync_alt", title: "Convert on download", description: "Save the decoded image as-is, or re-encode it to PNG, JPG or WEBP with quality control." },
  { icon: "lock", title: "100% private", description: "Decoding happens entirely in your browser — nothing is uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What input does it accept?", a: "Both full data URIs (data:image/png;base64,…) and raw Base64 strings. The image type is auto-detected for raw input." },
  { q: "Can I convert the format?", a: "Yes. Download the original, or choose PNG, JPG or WEBP to re-encode before downloading." },
  { q: "What if my string is invalid?", a: "You'll see a clear message — double-check you copied the entire Base64 string." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and decoding happens locally in your browser — nothing is uploaded." },
  { q: "Do I need to include the data URI prefix?", a: "No. Paste either the bare Base64 string or the full data URI beginning with 'data:image/…;base64,' — the prefix is detected and handled. Including it does help, because it declares the format explicitly rather than leaving it to be inferred." },
  { q: "Why does my string fail to decode?", a: "Usually whitespace or line breaks introduced when it was copied out of a log, an email or a JSON file. Truncation is the other common cause — long strings get cut off by editors and terminals. A valid Base64 string's length is always a multiple of four, with '=' padding at the end if needed." },
  { q: "Where do these strings normally come from?", a: "API responses that return images inline, JSON payloads, database columns storing images as text, HTML and CSS source you are debugging, email source, configuration files, and log output. Anywhere binary had to travel through a text-only channel." },
  { q: "What format will I get back?", a: "Whatever the original was — the data URI carries the MIME type, so a PNG decodes to a PNG and a JPG to a JPG. If the string has no prefix the format is inferred from the decoded bytes' magic number." },
  { q: "Is there a size limit?", a: "Only your browser's memory. Very long strings can be slow to paste and to decode, since the whole thing has to be held in the page. Multi-megabyte images encoded as text are unwieldy by nature rather than by any limit here." },
  { q: "Is my data sent anywhere?", a: "No. Decoding happens in your browser, which matters because these strings routinely come out of API responses, internal systems and logs — the sort of material that should not be pasted into a remote service." },
];

const sections: SeoSection[] = [
  {
    heading: "Turning text back into a picture",
    id: "what",
    body: [
      "Base64 exists so binary data can travel through channels built for text. That is why images turn up as long character strings inside API responses, JSON payloads, HTML source, CSS files, database columns and email bodies — at some point the picture had to fit somewhere that only accepted text.",
      "Decoding reverses the transformation exactly. Base64 is lossless: four characters map back to three bytes, and what comes out is byte-for-byte the original file. Nothing is approximated and no quality is lost, so the decoded image is identical to the one that was encoded.",
      "The usual moment you need this is debugging — you have a response or a log line containing what should be an image and you want to see whether it is the right one, or indeed a valid image at all.",
    ],
  },
  {
    heading: "Why a string fails to decode",
    id: "troubleshooting",
    body: [
      "The overwhelming majority of failures are copy-and-paste damage rather than genuinely corrupt data. Log viewers, email clients and terminals insert line breaks into long strings; text editors soft-wrap; JSON escapes get left in. Any stray character breaks the decode.",
      "Truncation is the other frequent cause. Consoles and log systems often cut long values off, sometimes with an ellipsis and sometimes silently, so you have a fragment that looks complete. A valid Base64 string always has a length divisible by four, padded with one or two '=' characters at the end if necessary — if yours does not, it is incomplete.",
      "Watch for URL-safe Base64 as well. Some systems substitute '-' and '_' for '+' and '/' so the string can appear in a URL, and those variants need converting back before a standard decoder will accept them.",
    ],
  },
  {
    heading: "With or without the prefix",
    id: "prefix",
    body: [
      "A full data URI looks like 'data:image/png;base64,' followed by the payload. That prefix is not part of the encoding — it is a declaration telling the browser what the decoded bytes represent, which is how an img tag knows to treat the result as a PNG rather than a JPG.",
      "Both forms work here. If the prefix is present it is used to determine the output format, which is the most reliable result. Without it, the format is worked out from the decoded bytes themselves, since every image format begins with a recognisable signature.",
    ],
  },
  {
    heading: "Decoded locally, deliberately",
    id: "privacy",
    body: [
      "Everything happens inside your browser tab. That is not an incidental detail for this tool in particular, because of where these strings tend to come from: internal API responses, production logs, database exports and configuration files.",
      "Pasting that material into a website that processes it server-side means handing over whatever the payload contains, along with whatever context surrounds it. Here the string is decoded in the page and the resulting image is offered as a download — nothing is transmitted, and there is no server-side copy to worry about afterwards.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Base64 to Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "254" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert Base64 to an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Base64 to Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert a Base64 string or data URI back into an image online — preview it instantly and download as PNG, JPG or WEBP. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <Base64ToImageTool />

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
        toolName="Base64 to Image"
        intro="Turn a Base64 string back into a real image file. oMyImage's Base64 to Image tool decodes a data URI or raw Base64 right in your browser, previews it instantly, and lets you download it as-is or convert it to PNG, JPG or WEBP. Nothing is uploaded, so your data stays private."
        howToTitle="How to convert Base64 to an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your data stays private. Base64 decoding happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
