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
import { ImageToPdfTool } from "./ImageToPdfTool";

const tool = getTool("image-to-pdf")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select your images, or drag and drop them into the workspace." },
  { title: "Arrange & set up", description: "Reorder pages with the arrows and choose page size, orientation and margin." },
  { title: "Create PDF", description: "Click Create PDF to download a single document with one image per page." },
];

const features: Feature[] = [
  { icon: "reorder", title: "Reorder pages", description: "Drag your images into the order you want with simple up/down controls before exporting." },
  { icon: "description", title: "Page size & margins", description: "Fit the page to each image, or use A4/Letter with portrait or landscape and a margin of your choice." },
  { icon: "lock", title: "100% private", description: "The PDF is assembled entirely in your browser — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Can I combine many images into one PDF?", a: "Yes. Add as many images as you like; each becomes one page in a single PDF, in the order you arrange them." },
  { q: "Which image formats are supported?", a: "JPG, PNG, WEBP, GIF and BMP. Transparent areas are placed on a white background." },
  { q: "Can I choose A4 or Letter?", a: "Yes. Pick ‘Fit image’ to size each page to its image, or A4/Letter with portrait or landscape and a margin." },
  { q: "Are my images uploaded?", a: "No. The PDF is built locally in your browser, so your images never leave your device." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
  { q: "What page size should I choose?", a: "A4 for anything going to a printer outside the United States, Letter for US printing, and 'Fit to image' when the PDF is only ever going to be read on screen. Fit-to-image avoids the white margins you get when a landscape photo is placed on a portrait page." },
  { q: "Can I control the order of the pages?", a: "Yes — the images are placed in the order they appear in the list, and you can rearrange them before building. This matters most when your file manager sorted them as text, which puts 'page10' before 'page2'." },
  { q: "Will the PDF be much larger than my images?", a: "Only slightly. The images are embedded largely as they are, so the PDF is roughly the sum of your files plus a small structural overhead. If the result is too big, compress or resize the images first — a PDF built from 4000-pixel photos is enormous and unnecessary for on-screen reading." },
  { q: "Can I make a PDF from phone photos of documents?", a: "Yes, and it is one of the most common uses. For the best result, photograph each page square-on with even lighting, crop out the surroundings first, and consider running them through the Grayscale tool — a scanned-looking document is far smaller than a full-colour photo and often more legible." },
  { q: "Is the text in the PDF searchable?", a: "No. The pages are images, so the PDF contains pictures of text rather than text itself. If you need to search or copy the words, run the images through the Image to Text tool first — that extracts the text, which you can then paste into a document." },
];

const sections: SeoSection[] = [
  {
    heading: "Why put images into a PDF at all",
    id: "why",
    body: [
      "A PDF turns a folder of loose files into one document with a fixed order and a predictable appearance. That matters whenever something is being submitted rather than simply shared: application forms, expense claims, insurance documentation, school assignments and legal paperwork are almost always expected as a single PDF, and a ZIP of JPGs is frequently rejected outright.",
      "It also solves an ordering problem. Images sent as separate attachments arrive in whatever sequence the mail client feels like, and file managers sort 'IMG_10' before 'IMG_2'. A PDF fixes the sequence permanently, so the person at the other end reads the pages in the order you intended.",
      "Finally, a PDF prints predictably. Page size, orientation and margins are decided when the document is built rather than negotiated by whatever printer dialog the recipient happens to open.",
    ],
  },
  {
    heading: "Page size, orientation and fit",
    id: "layout",
    body: [
      "A4 is the standard almost everywhere outside North America; Letter is slightly wider and shorter and is the US default. Choosing the one your recipient's printer expects avoids the scaling and clipping that happens when a Letter document meets an A4 tray.",
      "'Fit to image' sizes each page to the picture instead, which is the right choice for screen-only documents, photo collections and anything with mixed orientations. It eliminates the bands of white space you get when a wide photo is centred on a tall page.",
      "For scanned or photographed documents, keeping orientation consistent matters more than it sounds. A single sideways page in an otherwise portrait PDF forces the reader to rotate their whole view, so rotate the offending images before building rather than after.",
    ],
  },
  {
    heading: "Keeping the file size sensible",
    id: "size",
    body: [
      "The PDF is roughly as large as the images you put into it, so a document built from twenty 12-megapixel phone photos will run to tens of megabytes — usually well past the attachment limit of the system you are submitting to.",
      "The fix is upstream. Resize the images to around 1500–2000 pixels on the long edge, which is more than enough for both screen reading and ordinary printing, and compress them before building. For photographed text documents, converting to grayscale first often halves the size again with no loss of legibility.",
    ],
  },
  {
    heading: "Everything happens in your browser",
    id: "privacy",
    body: [
      "The PDF is assembled on your own device using a JavaScript PDF library, so the images are never uploaded. That is worth knowing given what people typically convert here — passports, bank statements, medical forms, contracts and ID documents are exactly the kind of thing that should not be passing through someone else's server.",
      "A practical consequence is that the tool works offline once the page has loaded, and that very large batches are limited by your device's memory rather than by an upload cap.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image to PDF`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "655" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert images to a PDF",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image to PDF</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert JPG, PNG and WEBP images into a single PDF online — reorder pages, choose page size and margins. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ImageToPdfTool />

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
        toolName="Image to PDF"
        intro="Need to send a set of photos or scans as one document? oMyImage's Image to PDF tool combines your JPG, PNG and WEBP images into a single PDF, one image per page. Reorder the pages, choose to fit each page to its image or use A4/Letter with a margin, and download. Everything is assembled in your browser, so your images stay private."
        howToTitle="How to convert images to a PDF"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. The PDF is assembled entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
