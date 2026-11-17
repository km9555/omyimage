import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Spanish refund policy (Política de reembolsos) — a written twin of /refunds
 * (conversion.md §6.5), with the same section ids. Neutral Spanish, "tú".
 *
 * The consumer-law paragraph keeps the EU/UK 14-day withdrawal right exactly
 * as the English page states it and adds nothing — no Spanish (LGDCU) or
 * Mexican (PROFECO / LFPC) specifics. §10 already says a stronger local right
 * prevails, and inventing a specific claim about a law we have not had
 * reviewed would be a worse error than the omission.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "es",
  title: "Política de reembolsos | oMyImage",
  description:
    "Política de reembolsos de oMyImage: cómo funcionan los reembolsos en los planes de pago, el plazo para solicitarlos y qué se puede reembolsar y qué no.",
});

const toc = [
  { id: "status", title: "1. Situación actual" },
  { id: "free", title: "2. El servicio gratuito" },
  { id: "window", title: "3. Plazo de reembolso" },
  { id: "eligible", title: "4. Qué se reembolsa" },
  { id: "noteligible", title: "5. Qué no se reembolsa" },
  { id: "request", title: "6. Cómo solicitarlo" },
  { id: "processing", title: "7. Tramitación y plazos" },
  { id: "cancellation", title: "8. Cancelación y reembolso" },
  { id: "chargebacks", title: "9. Contracargos" },
  { id: "consumer", title: "10. Derechos legales" },
  { id: "changes", title: "11. Cambios" },
  { id: "contact", title: "12. Contacto" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="es"
      title="Política de reembolsos"
      subtitle={`Cómo funcionan los reembolsos en los planes de pago de ${SITE.name}.`}
      updated="03/08/2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Situación actual">
        <LegalCallout>
          <strong>Todavía no hay planes de pago.</strong> Todas las herramientas de {SITE.name} son
          gratis por ahora, así que no hay nada que cobrar ni nada que reembolsar. Esta política se
          publica por adelantado para que las condiciones estén claras antes de que se lance
          cualquier plan de pago.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. El servicio gratuito">
        <LegalP>
          El plan gratuito es gratis. No tiene ningún cargo, ninguna prueba que se convierta en un
          plan de pago ni ningún método de pago guardado. Nunca se te cobrará por usar las
          herramientas gratuitas.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Plazo de reembolso">
        <LegalP>
          Cuando se lancen los planes de pago, podrás solicitar el reembolso completo de tu pago más
          reciente en un plazo de <strong>7 días</strong> desde ese cargo, con sujeción a las
          condiciones que se indican a continuación.
        </LegalP>
        <LegalP>
          Como los planes se cobran por adelantado por un periodo fijo, los reembolsos se aplican al
          pago que reclamas y no a una parte del periodo.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. Qué da derecho a un reembolso">
        <LegalUl>
          <li>Se te cobró dos veces por el mismo periodo de facturación.</li>
          <li>Se te cobró después de cancelar, por un periodo que empezaba tras la cancelación.</li>
          <li>
            Una función de pago no funcionó como se describía y no pudimos resolverlo en un plazo
            razonable después de que nos lo comunicaras.
          </li>
          <li>
            Te suscribiste por error y no has hecho un uso sustancial de las funciones de pago,
            dentro del plazo de 7 días.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. Qué no da derecho a un reembolso">
        <LegalUl>
          <li>Las solicitudes presentadas más de 7 días después del cargo.</li>
          <li>
            El uso sustancial del cupo de pago durante el periodo de facturación: los planes de pago
            son servicios digitales que se prestan de inmediato tras el pago.
          </li>
          <li>
            La insatisfacción con la calidad del resultado cuando la herramienta funcionó como se
            describía. El plan gratuito existe para que puedas evaluar la calidad antes de pagar.
          </li>
          <li>
            Los problemas causados por tu dispositivo, tu navegador, tu red o por archivos de origen
            dañados o en un formato no compatible.
          </li>
          <li>
            Las caídas o interrupciones ajenas a nuestro control razonable, o el mantenimiento
            programado.
          </li>
          <li>
            Las cuentas suspendidas o cerradas por incumplir nuestros{" "}
            <Link href={localeHref("/terms", "es")} className="text-secondary hover:underline">
              Términos del servicio
            </Link>
            .
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. Cómo solicitar un reembolso">
        <LegalP>
          Escríbenos a través de nuestra{" "}
          <Link href={localeHref("/contact", "es")} className="text-secondary hover:underline">
            página de contacto
          </Link>{" "}
          indicando el correo electrónico que usaste para la compra, la fecha y el importe
          aproximados del cargo y una breve descripción del problema. Contáctanos antes de abrir una
          disputa con tu banco: casi siempre podemos resolverlo más rápido directamente.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Tramitación y plazos">
        <LegalP>
          Intentamos revisar las solicitudes de reembolso en un plazo de 3 días hábiles. Los
          reembolsos aprobados se emiten al método de pago original a través de nuestro procesador de
          pagos. Una vez emitidos, el dinero suele aparecer en 5 a 10 días hábiles, según tu banco o
          el emisor de tu tarjeta; ese último paso escapa a nuestro control.
        </LegalP>
        <LegalP>
          Los reembolsos se hacen en la moneda original de la transacción. No somos responsables de
          las diferencias de tipo de cambio ni de las comisiones que aplique tu banco.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Cancelación y reembolso">
        <LegalP>
          Cancelar una suscripción detiene las renovaciones futuras; no reembolsa automáticamente el
          periodo ya pagado. Al cancelar, conservas el acceso a las funciones de pago hasta el final
          del periodo que ya pagaste, y después la cuenta vuelve al plan gratuito.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Contracargos">
        <LegalP>
          Contáctanos antes de iniciar un contracargo. Los contracargos son costosos de resolver y
          suelen ser más lentos que un reembolso directo. Nos reservamos el derecho de suspender el
          acceso a las funciones de pago mientras haya un contracargo abierto, y de negar el servicio
          de pago en el futuro a las cuentas con disputas fraudulentas.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Derechos legales">
        <LegalP>
          Nada de lo dispuesto en esta política limita los derechos irrenunciables que te otorgue la
          legislación de consumo que te sea aplicable. Cuando la ley local te conceda un derecho de
          desistimiento o de reembolso más amplio que esta política, prevalece esa ley.
        </LegalP>
        <LegalP>
          Si eres consumidor en la Unión Europea o en el Reino Unido, puedes tener un derecho legal de
          desistimiento de un contrato de servicios digitales en un plazo de 14 días. Si nos pides que
          empecemos a prestar el servicio de inmediato, ese derecho puede extinguirse una vez iniciada
          la prestación, en la medida en que la ley lo permita.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Cambios">
        <LegalP>
          Podemos actualizar esta política a medida que evolucione el servicio. La versión aplicable
          es la publicada en el momento de tu compra, y la fecha de «Última actualización» de arriba
          siempre corresponde a la versión vigente.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Contacto">
        <LegalP>
          Para cualquier pregunta sobre facturación o reembolsos, escríbenos a través de nuestra{" "}
          <Link href={localeHref("/contact", "es")} className="text-secondary hover:underline">
            página de contacto
          </Link>
          . Consulta también nuestros{" "}
          <Link href={localeHref("/terms", "es")} className="text-secondary hover:underline">
            Términos del servicio
          </Link>{" "}
          y los{" "}
          <Link href={localeHref("/pricing", "es")} className="text-secondary hover:underline">
            precios
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
