import Link from "next/link";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { absoluteUrl, ORG_ID, ORGANIZATION_SCHEMA, SITE } from "@/lib/site";
import { liveToolCount } from "@/lib/tools";

/**
 * /about — who runs oMyImage and how it handles files. English only for now
 * (like the blog): `localeHref("/about", locale)` falls back to this page
 * until a locale ships a twin in i18n/status.ts.
 *
 * Added by the 2026-11-14 SEO audit. /about returned 404, and the site asks
 * people to upload ID and passport photos, so "who is behind this and what
 * happens to my file" needed one page that answers it plainly. Every claim
 * here mirrors something the code or the privacy policy already does — keep
 * it that way when editing: no invented history, team size or numbers.
 */
export const metadata = pageMetadata({
  englishPath: "/about",
  locale: "en",
  title: "About oMyImage — Free Image Tools That Run in Your Browser",
  description:
    "What oMyImage is, who runs it, how your images are processed and deleted, and how the free tools are paid for.",
});

const PRINCIPLES = [
  {
    icon: "devices",
    title: "Your browser does the work",
    body: "Compressing, resizing, cropping, converting and most editing run on your own device using JavaScript and WebAssembly. For those tools the image is never uploaded, which is also why they are fast.",
  },
  {
    icon: "cloud",
    title: "The server only when it must",
    body: "Three things need a server: files over 15 MB, which a browser tab cannot process reliably; Remove Background and Upscale Image, whose models are too heavy for a browser; and HEIC conversion, whose decoder cannot be shipped to browsers under its licence. Each of those pages says so before you start.",
  },
  {
    icon: "auto_delete",
    title: "Deleted within about an hour",
    body: "Files processed on the server are removed automatically within roughly an hour. There are no backups of your images; they are never used to train models, and never sold, shared or published.",
  },
  {
    icon: "lock",
    title: "No account needed",
    body: "Every tool works without signing up. An account is optional.",
  },
];

export default function AboutPage() {
  const tools = liveToolCount();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION_SCHEMA,
      {
        "@type": "AboutPage",
        "@id": `${absoluteUrl("/about")}#page`,
        url: absoluteUrl("/about"),
        name: `About ${SITE.name}`,
        about: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
      },
    ],
  };

  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter py-12">
      <div className="max-w-2xl">
        <p className="text-label-sm font-label-sm uppercase tracking-widest text-secondary mb-3">About</p>
        <h1 className="text-display-md font-black text-primary mb-3">About oMyImage</h1>
        <p className="text-body-lg text-on-surface-variant">
          oMyImage is a free online image toolkit: {tools} tools to compress, resize, crop, convert and edit
          photos and to make GIFs, in English, Portuguese, Hindi, Russian and Indonesian. It is built so that
          most of the time your image never leaves your device.
        </p>
      </div>

      <section className="mt-10 max-w-3xl flex flex-col gap-4">
        <h2 className="text-headline-md font-bold text-primary">Who runs it</h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          oMyImage is made by the small independent team behind{" "}
          <a href="https://omypdf.com" className="text-secondary hover:underline">
            oMyPDF
          </a>
          , a free PDF toolkit built the same way. The two sites share one backend for the few jobs that need a
          server. We build, test and support every tool ourselves, and several guides on the{" "}
          <Link href="/blog" className="text-secondary hover:underline">
            blog
          </Link>{" "}
          include our own measurements made with the same libraries the tools use.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-headline-md font-bold text-primary mb-6">How your images are handled</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-surface-variant bg-surface-container-lowest p-6 ambient-shadow flex flex-col gap-3"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full bg-secondary/15">
                <Icon name={p.icon} className="text-[22px] text-secondary" />
              </span>
              <h3 className="text-body-lg font-bold text-primary">{p.title}</h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl flex flex-col gap-4">
        <h2 className="text-headline-md font-bold text-primary">How it is paid for</h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          All tools are free today and nothing is chargeable. Paid plans are planned for very large files and
          heavier AI use; the{" "}
          <Link href="/pricing" className="text-secondary hover:underline">
            pricing page
          </Link>{" "}
          shows what they will cover. We do not sell data, and the details of what
          we measure are in the{" "}
          <Link href="/privacy" className="text-secondary hover:underline">
            privacy policy
          </Link>
          .
        </p>

        <h2 className="text-headline-md font-bold text-primary mt-6">Built on open source</h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          The in-browser tools rely on open-source projects such as ONNX Runtime Web and MediaPipe for the AI
          features. Every bundled library and its licence is listed in our{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            open-source notices
          </a>
          .
        </p>

        <h2 className="text-headline-md font-bold text-primary mt-6">Get in touch</h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Found a bug, got an odd result, or have a question about your data? Email{" "}
          {/* i18n-raw: an email address */}
          <a href="mailto:support@omyimage.com" className="text-secondary hover:underline">
            support@omyimage.com
          </a>{" "}
          or see the{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>
          . We usually reply within two business days.
        </p>
      </section>

      <JsonLd data={schema} />
    </div>
  );
}
