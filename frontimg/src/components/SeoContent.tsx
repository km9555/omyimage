import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";

export interface HowToStep {
  title: string;
  description: string;
}
export interface Feature {
  icon: string;
  title: string;
  description: string;
}
export interface Faq {
  q: string;
  a: string;
}

export interface SeoContentProps {
  toolName: string;
  intro: string;
  howToTitle: string;
  steps: HowToStep[];
  features: Feature[];
  faqs: Faq[];
  security?: string;
  fullWidthText?: boolean;
}

/**
 * SEO content block rendered on EVERY tool page (intro, How-To, features, FAQ).
 * Also emits FAQPage structured data. Wrapped in <div data-seo-content> as the
 * single stable mount point for future long-form copy.
 */
export function SeoContent({
  toolName,
  intro,
  howToTitle,
  steps,
  features,
  faqs,
  security,
  fullWidthText = false,
}: SeoContentProps) {
  const proseWidth = fullWidthText ? "" : "max-w-3xl";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div
      data-seo-content
      className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter py-stack-lg flex flex-col gap-stack-lg"
    >
      {/* Intro */}
      <section>
        <p className={`text-body-lg text-on-surface-variant ${proseWidth}`}>{intro}</p>
      </section>

      {/* How-to */}
      <section className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow border border-outline-variant/30">
        <h2 className="text-headline-md font-semibold text-primary mb-stack-md">
          {howToTitle}
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-label-sm font-label-sm font-bold">
                {i + 1}
              </span>
              <h3 className="text-body-lg font-semibold text-primary">{step.title}</h3>
              <p className="text-body-md text-on-surface-variant">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-headline-md font-semibold text-primary mb-stack-md">
          {toolName} features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface-container-lowest rounded-lg p-6 border border-outline-variant/30 ambient-shadow"
            >
              <Icon name={feature.icon} fill className="text-3xl text-secondary mb-2" />
              <h3 className="text-body-lg font-semibold text-primary">{feature.title}</h3>
              <p className="mt-1 text-body-md text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Security / trust — inverted accent panel. */}
      {security && (
        <section className="bg-on-primary-fixed text-primary-fixed-dim rounded-xl p-8">
          <h2 className="text-headline-md font-semibold text-white mb-2">
            Security &amp; privacy
          </h2>
          <p className={`text-body-md text-primary-fixed-dim ${proseWidth}`}>{security}</p>
        </section>
      )}

      {/* FAQ */}
      <section>
        <h2 className="text-headline-md font-semibold text-primary mb-stack-md">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-3 max-w-3xl">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-outline-variant/40 bg-surface-container-lowest"
            >
              <summary className="cursor-pointer px-6 py-4 text-body-md font-semibold text-primary hover:text-secondary transition-colors">
                {item.q}
              </summary>
              <p className="px-6 pb-4 text-body-md text-on-surface-variant">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <JsonLd data={faqSchema} />
    </div>
  );
}
