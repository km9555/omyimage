import Link from "next/link";
import { ToolDirectory } from "@/components/ToolDirectory";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const steps = [
  {
    title: "Upload",
    description: "Drag & drop your images securely into our processing engine.",
  },
  {
    title: "Transform",
    description: "Pick a tool and let your browser — or our servers — do the heavy lifting.",
  },
  {
    title: "Download",
    description: "Get your optimized images back, ready for your workflow.",
  },
];

/** Plain-language capability list for the About block. */
const capabilities = [
  "Compress JPG, PNG and WEBP images without visible quality loss",
  "Resize, crop, rotate and add borders, in single files or in bulk",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor",
  "Extract text with OCR, read or strip EXIF metadata, pick colours",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy",
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE.name,
    url: SITE.url,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: SITE.description,
  };

  return (
    <>
      <ToolDirectory />

      {/* How it works */}
      <section className="bg-surface-container-low border-t border-surface-variant px-margin-mobile md:px-gutter py-20">
        <div className="max-w-content mx-auto text-center">
          <h2 className="text-headline-md md:text-display-lg-mobile font-bold text-primary mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
            {/* dashed connector (desktop) */}
            <div
              className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] border-t-2 border-dashed border-outline-variant"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-headline-md font-bold mb-6 border ${
                    i === 0
                      ? "bg-secondary text-on-secondary border-secondary"
                      : "bg-surface-container text-on-surface border-surface-variant"
                  }`}
                >
                  {i + 1}
                </div>
                <h3 className="text-body-lg font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-body-md text-on-surface-variant max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        About / purpose block.

        This exists for Google's OAuth app verification as much as for visitors.
        The review rejects a home page that does not state, in plain language,
        (a) what the application is for and (b) how it uses Google user data —
        and it checks that the name here matches the app name on the consent
        screen exactly ("oMyImage"). So: spell the name out, do not abbreviate
        it, and keep the Google Drive paragraph in sync with the scope actually
        requested in lib/google-drive.ts (currently drive.file only).
      */}
      <section
        id="about"
        className="border-t border-surface-variant px-margin-mobile md:px-gutter py-20"
      >
        <div className="max-w-content mx-auto">
          <h2 className="text-headline-md md:text-display-lg-mobile font-bold text-primary mb-6">
            About oMyImage
          </h2>

          <div className="max-w-3xl flex flex-col gap-4 text-body-lg text-on-surface-variant">
            <p>
              <strong className="font-semibold text-primary">oMyImage</strong> is a free
              online image toolkit for everyday image work. It gives you a single place to
              compress, resize, crop, rotate, convert, watermark and edit images — over
              thirty tools, each one a dedicated page that does one job well.
            </p>
            <p>
              Most tools run entirely inside your web browser: your image is processed on
              your own device and is never uploaded anywhere. Larger files, and the AI
              tools that need real hardware, are processed on our servers and deleted
              shortly after the job finishes. oMyImage is free to use and needs no account.
            </p>
          </div>

          <h3 className="mt-10 mb-4 text-body-lg font-semibold text-primary">
            What you can do with oMyImage
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-4xl list-disc pl-5 text-body-md text-on-surface-variant marker:text-secondary">
            {capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h3 className="mt-10 mb-4 text-body-lg font-semibold text-primary">
            How oMyImage uses your Google account
          </h3>
          <div className="max-w-3xl flex flex-col gap-4 text-body-md text-on-surface-variant">
            <p>
              Connecting Google is optional — every tool on oMyImage works without it. It
              exists for one feature:{" "}
              <strong className="font-semibold text-primary">Import from Google Drive</strong>,
              which lets you pick an image already stored in your Drive instead of uploading
              it from your device.
            </p>
            <p>
              When you use it, oMyImage requests the{" "}
              <code className="rounded bg-surface-container px-1.5 py-0.5 font-mono text-body-sm text-on-surface">
                drive.file
              </code>{" "}
              scope. That scope gives the app access only to the specific files you choose in
              Google&apos;s own file picker — it cannot see, browse or search the rest of your
              Drive. The file you pick is downloaded into your browser for the tool you are
              using, and that is all: oMyImage does not modify or delete anything in your
              Drive, does not store your Google files on our servers, does not use Google user
              data to train AI models, and never sells or shares it with third parties.
            </p>
            <p>
              You can revoke access at any time from your{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-secondary underline underline-offset-2"
              >
                Google Account permissions page
              </a>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body-md">
            <Link href="/privacy" className="font-semibold text-secondary underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-semibold text-secondary underline underline-offset-2">
              Terms of Service
            </Link>
            <Link href="/contact" className="font-semibold text-secondary underline underline-offset-2">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema} />
    </>
  );
}
