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

      <JsonLd data={schema} />
    </>
  );
}
