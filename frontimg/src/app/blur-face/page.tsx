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
import { BlurTool } from "./BlurTool";

const tool = getTool("blur-face")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image, or drag and drop it into the workspace." },
  { title: "Draw over private areas", description: "Drag to draw a box over each face, license plate or detail, and choose blur or pixelate." },
  { title: "Export", description: "Click Export to download the image with the censored areas baked in." },
];

const features: Feature[] = [
  { icon: "blur_on", title: "Blur or pixelate", description: "Choose a smooth blur or a chunky pixelate, and set the strength to fully obscure sensitive details." },
  { icon: "select_all", title: "Multiple areas", description: "Draw as many boxes as you need, undo the last one, or clear them all and start over." },
  { icon: "lock", title: "Truly private", description: "Everything is processed in your browser — the original never leaves your device, and the censoring is permanent in the exported file." },
];

const faqs: Faq[] = [
  { q: "Can I blur more than one face?", a: "Yes. Draw a box over each area you want to hide; you can add as many as you like and undo or clear them." },
  { q: "What's the difference between blur and pixelate?", a: "Blur smoothly softens the area, while pixelate replaces it with large blocks. Both fully obscure details at a high enough strength." },
  { q: "Is the blur permanent?", a: "Yes. The censored areas are rendered directly into the exported image, so they can't be undone by the recipient." },
  { q: "Are my images uploaded?", a: "No. Everything runs locally in your browser; your image is never uploaded." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
  { q: "Can the blur be reversed?", a: "Not by any practical means. Blurring discards the information rather than hiding it, so there is nothing left to recover — unlike a black bar drawn in a layered file, or a pixelation applied at a coarse enough level that AI reconstruction becomes plausible. Once exported, the face is gone from the pixels." },
  { q: "Should I use blur or pixelate?", a: "Blur is the safer choice. Heavy pixelation at a large block size can sometimes be partially reconstructed, because the block averages still carry structure. A strong Gaussian blur leaves far less to work with. Pixelation is more visually obvious that redaction happened, which is occasionally what you want." },
  { q: "How strong should the blur be?", a: "Strong enough that you cannot recognise the person yourself at full zoom. A light blur that merely softens features is not anonymisation — faces remain identifiable to anyone who knows the person, and often to software. If in doubt, go heavier." },
  { q: "Does this remove location data from the photo too?", a: "Yes, as a side effect: the image is redrawn from a canvas, which does not carry EXIF metadata across, so GPS coordinates and camera details are dropped. If metadata is your main concern rather than faces, the EXIF Remover is the dedicated tool." },
  { q: "Do I need to blur faces before posting photos?", a: "It depends where you are and what the photo is. Many jurisdictions treat a recognisable face as personal data, and publishing images of children, patients, bystanders or people in sensitive settings carries real obligations. When you do not have consent, blurring is the simple answer." },
  { q: "Is my photo uploaded?", a: "No. The whole operation runs on a canvas inside your browser, which matters a great deal here — the images people blur are usually exactly the ones that should not be passing through anyone else's server." },
];

const sections: SeoSection[] = [
  {
    heading: "Why blurring beats a black box",
    id: "method",
    body: [
      "A black rectangle drawn over a face in a layered editing file is not redaction — it is a sticker, and anyone who opens the original file can move it. Even flattened, a solid box announces that something was hidden and invites the question of what.",
      "Blurring works differently. It destroys the information in place: the pixels are replaced by an average of their neighbours, and the detail that made the face recognisable no longer exists anywhere in the file. Export it and there is nothing to recover, because nothing was preserved.",
      "That is the property you actually want from redaction. Not concealment, which can be undone, but destruction, which cannot.",
    ],
  },
  {
    heading: "Blur or pixelate",
    id: "blur-vs-pixelate",
    body: [
      "Pixelation replaces regions with large blocks of a single averaged colour. It looks decisive, and for that reason it is the convention in television and journalism, where the audience is meant to understand that something has been withheld.",
      "For genuine anonymisation it is the weaker option. The block averages retain structure — the rough position of eyes, the shape of a jaw, the contrast between hair and skin — and researchers have demonstrated recovering identities from pixelated faces where the block size was not aggressive enough. A strong Gaussian blur leaves considerably less signal behind.",
      "Use pixelation when you want the redaction to be visually obvious, and blur when you want the person to be genuinely unidentifiable. If you need both, pixelate heavily rather than lightly.",
    ],
  },
  {
    heading: "Getting the coverage right",
    id: "coverage",
    body: [
      "The most common mistake is blurring too tightly. A region covering only the eyes leaves the jawline, hairline, ears and skin tone intact, and people are recognised by all of those. Cover the whole head, and extend slightly past the hairline.",
      "The second mistake is blurring too weakly. Judge the result at full zoom rather than at the thumbnail size, because a blur that looks sufficient in a small preview often is not. If you can still tell who it is, so can anyone who knows them.",
      "Remember the rest of the frame too. Name badges, house numbers, licence plates, reflections in windows and the text on a screen behind the subject all identify people, and a photo with a perfectly blurred face and a visible street sign has not achieved much.",
    ],
  },
  {
    heading: "When this matters legally",
    id: "legal",
    body: [
      "Under GDPR and similar regimes a recognisable face is personal data, and publishing it generally needs a lawful basis — consent being the usual one. That obligation applies to organisations far more heavily than to individuals posting holiday photos, but it is real.",
      "The situations where it bites hardest are predictable: photographs including children, images from schools, clinics and care settings, crowd shots used commercially, workplace photography, and anything showing people who did not know they were being photographed. Blurring faces is the cheapest way to remove the question entirely.",
      "Because everything here runs in your browser, the unredacted original never leaves your device — which is the correct handling for exactly this class of image.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Blur Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "389" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to blur a face in a photo",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Blur Face &amp; Censor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Blur or pixelate faces, license plates and private details in your photos online — draw the areas, pick the strength, and export. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <BlurTool />

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
        toolName="Blur Face &amp; Censor"
        intro="Need to hide a face, a name tag or a license plate before sharing a photo? oMyImage's Blur &amp; Censor tool lets you drag boxes over any private detail and blur or pixelate them, with adjustable strength and as many areas as you need. The censoring is baked permanently into the exported image, and everything runs in your browser — your photo is never uploaded."
        howToTitle="How to blur a face in a photo"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Blurring happens entirely in your browser with HTML canvas — nothing is uploaded to a server. The censored result is permanent in the exported file. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}
