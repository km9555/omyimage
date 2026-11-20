import { ContactBody } from "@/app/contact/ContactBody";
import { frContact } from "@/i18n/dictionaries/fr/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "fr",
  title: "Contact — écrivez à l'équipe oMyImage",
  description:
    "Écrivez à l'équipe oMyImage : assistance, signalement de bugs, questions de confidentialité et demandes commerciales. Nous répondons sous deux jours ouvrés.",
});

export default function Page() {
  return <ContactBody locale="fr" dict={frContact} />;
}
