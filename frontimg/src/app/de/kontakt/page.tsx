import { ContactBody } from "@/app/contact/ContactBody";
import { deContact } from "@/i18n/dictionaries/de/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "de",
  title: "Kontakt — schreiben Sie dem oMyImage-Team",
  description:
    "Schreiben Sie dem oMyImage-Team: Support, Fehlermeldungen, Fragen zum Datenschutz und geschäftliche Anfragen. Wir antworten innerhalb von zwei Werktagen.",
});

export default function Page() {
  return <ContactBody locale="de" dict={deContact} />;
}
