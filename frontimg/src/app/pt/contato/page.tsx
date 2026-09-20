import { ContactBody } from "@/app/contact/ContactBody";
import { ptContact } from "@/i18n/dictionaries/pt/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "pt",
  title: "Contato — fale com a equipe do oMyImage",
  description:
    "Fale com a equipe do oMyImage: suporte, relato de erros, dúvidas de privacidade e assuntos comerciais. Respondemos em até dois dias úteis.",
});

export default function Page() {
  return <ContactBody locale="pt" dict={ptContact} />;
}
