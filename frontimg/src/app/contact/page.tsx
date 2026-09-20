import type { Metadata } from "next";
import { ContactBody } from "./ContactBody";
import { pageAlternates } from "@/lib/i18n/tool-meta";

/* The body moved to ContactBody so `/pt/contato` can render the same markup.
   This metadata is unchanged apart from the hreflang cluster, which appears
   only once a translated /contact exists (tool-meta.ts header). */
const languages = pageAlternates("/contact");

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the oMyImage team — support, bug reports, privacy questions and business enquiries.",
  alternates: languages ? { canonical: "/contact", languages } : { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactBody />;
}
