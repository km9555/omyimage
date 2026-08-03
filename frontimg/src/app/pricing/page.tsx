import type { Metadata } from "next";
import { PricingClient } from "./PricingClient";

// Server wrapper: the pricing UI is a client component (currency/billing state),
// which cannot export `metadata` — so the canonical lives here.
export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for oMyImage. Every tool is free today — no account needed. Plus and Pro plans are on the way for larger files and more AI runs.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingClient />;
}
