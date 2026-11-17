import { ContactBody } from "@/app/contact/ContactBody";
import { esContact } from "@/i18n/dictionaries/es/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "es",
  title: "Contacto — habla con el equipo de oMyImage",
  description:
    "Escribe al equipo de oMyImage: soporte, reporte de errores, dudas de privacidad y asuntos comerciales. Respondemos en un plazo de dos días hábiles.",
});

export default function Page() {
  return <ContactBody locale="es" dict={esContact} />;
}
