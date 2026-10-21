import { ContactBody } from "./ContactBody";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/* The body moved to ContactBody so `/pt/contato` can render the same markup.
   Metadata comes from pageMetadata like the twin's, so the social card names
   this page — set by hand, it inherited the home page's og:url and og:title. */
export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "en",
  title: "Contact | oMyImage",
  description:
    "Get in touch with the oMyImage team — support, bug reports, privacy questions and business enquiries.",
});

export default function ContactPage() {
  return <ContactBody />;
}
