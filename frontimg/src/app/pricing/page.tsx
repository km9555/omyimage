import { PricingClient } from "./PricingClient";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// Server wrapper: the pricing UI is a client component (currency/billing state),
// which cannot export `metadata` — so the canonical and social card live here.
export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "en",
  title: "Pricing | oMyImage",
  description:
    "Simple, transparent pricing for oMyImage. Every tool is free today — no account needed. Plus and Pro plans are on the way for larger files and more AI runs.",
});

export default function PricingPage() {
  return <PricingClient />;
}
