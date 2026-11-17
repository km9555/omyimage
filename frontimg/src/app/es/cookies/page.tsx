import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";

/**
 * Spanish cookie policy (Política de cookies) — the same structure and the
 * same section ids as /cookies, with only the prose translated. The ids are
 * the TOC anchors and a contract across locales: never rename one on a single
 * side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5). Neutral
 * Spanish, "tú". The banner and footer labels are quoted exactly as the
 * Spanish UI renders them (i18n-es-brief.md glossary).
 *
 * Storage keys, cookie names and domains stay in Latin — the reader has to
 * match them against what their own browser shows. Browser MENU paths ARE
 * translated, because a reader running Chrome in Spanish sees
 * "Privacidad y seguridad".
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "es",
    title: "Política de cookies | oMyImage",
    description:
      "Qué guarda oMyImage en tu navegador, por qué y cómo controlarlo. Por defecto, solo lo necesario: la analítica sigue desactivada hasta que la permitas.",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. Qué son las cookies" },
  { id: "consent", title: "2. Tu consentimiento" },
  { id: "types", title: "3. Qué guardamos" },
  { id: "third", title: "4. Cookies de terceros" },
  { id: "control", title: "5. Cómo controlar las cookies" },
  { id: "changes", title: "6. Cambios en esta política" },
  { id: "contact", title: "7. Contacto" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="es"
      title="Política de cookies"
      subtitle="Qué guarda oMyImage en tu navegador, por qué lo guarda y cómo cambiar de opinión."
      updated="09/11/2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. Qué son las cookies">
        <LegalCallout>
          oMyImage no instala cookies propias. Lo que guarda es un puñado de entradas de{" "}
          <strong>almacenamiento local</strong> que nunca salen de tu dispositivo y, solo si lo
          permites, cookies de analítica de Google. Tus imágenes no intervienen en nada de esto.
        </LegalCallout>
        <LegalP>
          Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo cuando
          lo visitas. Se usan mucho para que los sitios funcionen, para recordar tus preferencias y
          para que los propietarios sepan cómo se usa su sitio. Una cookie puede ser «de sesión», que
          se borra al cerrar el navegador, o «persistente», que se mantiene durante un tiempo
          determinado o hasta que la borres.
        </LegalP>
        <LegalP>
          Entre las tecnologías muy parecidas están el almacenamiento web (<code>localStorage</code>{" "}
          y <code>sessionStorage</code>) y las balizas web (píxeles). Esta política usa «cookies»
          para referirse a todas ellas, porque la pregunta práctica (qué se guarda en tu dispositivo
          y quién puede leerlo) es la misma.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Tu consentimiento">
        <LegalP>
          En tu primera visita aparece un banner de consentimiento en la parte inferior de la página.
          No se carga nada opcional antes de que respondas. Tienes tres opciones:
        </LegalP>
        <LegalUl>
          <li>
            <strong>«Aceptar todo»</strong>: almacenamiento necesario más analítica. Se carga Google
            Analytics, nuestro propio servidor cuenta las visitas a páginas y los usos de
            herramientas, y podemos ver, de forma agregada, qué herramientas se usan.
          </li>
          <li>
            <strong>«Rechazar todo»</strong>: solo almacenamiento necesario. Google Analytics nunca
            se carga, nuestro propio recuento permanece desactivado y no se recopilan datos de
            analítica de tu visita.
          </li>
          <li>
            <strong>«Personalizar»</strong>: eliges categoría por categoría. El almacenamiento
            necesario no se puede desactivar, porque sin él el sitio no podría recordar tu tema ni,
            de hecho, esta misma elección.
          </li>
        </LegalUl>
        <LegalP>
          Tu respuesta se guarda en tu dispositivo en <code>omyimage_cookie_consent</code> y{" "}
          <code>omyimage_cookie_prefs</code>. Puedes cambiarla en cualquier momento con el enlace{" "}
          <strong>«Configuración de cookies»</strong> del pie de cualquier página. Como los scripts de
          analítica solo se pueden añadir o quitar al cargar de nuevo la página, cambiar ese ajuste en
          concreto recarga la página.
        </LegalP>
        <LegalP>
          No usamos cookies publicitarias ni de seguimiento entre sitios, y no compartimos tus datos
          con redes publicitarias.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. Qué guardamos">
        <LegalSubsection title="Necesarias: siempre activas">
          <LegalP>
            Son entradas de <code>localStorage</code>, no cookies: las escribe el sitio, solo las lee
            el sitio y nunca se transmiten a nosotros ni a nadie más. No se pueden desactivar, porque
            son lo que permite que la interfaz recuerde algo. Si borras los datos del sitio en tu
            navegador, se eliminan todas.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code>: si elegiste el modo claro o el oscuro.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> y <code>omyimage_cookie_prefs</code>: tu respuesta
              al banner de consentimiento, para no preguntarte en cada página.
            </li>
            <li>
              <code>omyimage:favorites</code> y las herramientas usadas recientemente: para que tus
              accesos directos se conserven.
            </li>
            <li>
              <code>omyimage:currency</code>: la moneda que elegiste en la página de precios.
            </li>
            <li>
              <code>omyimage:premium-usage</code>: un recuento local de los usos de herramientas
              premium de hoy.
            </li>
          </LegalUl>
          <LegalP>
            Cloudflare, que sirve y protege el sitio, también puede instalar sus propias cookies
            estrictamente necesarias para limitar el uso y detectar bots. Se describen en la sección
            4.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Analítica: solo con tu consentimiento">
          <LegalP>
            Si aceptas la analítica, cargamos Google Analytics 4 para entender de forma agregada cómo
            se usa el sitio: qué herramientas son populares, qué páginas dan error y,
            aproximadamente, de dónde vienen los visitantes. Lo usamos para decidir qué crear y qué
            corregir. Nunca se usa para identificarte y no intentamos relacionarlo con nada de lo que
            procesas.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code>: distinguen usuarios y sesiones únicos. Caducan a
              los 2 años.
            </li>
            <li>
              <code>_gid</code>: distingue usuarios dentro de un intervalo de 24 horas. Caduca a las
              24 horas.
            </li>
          </LegalUl>
          <LegalP>
            Si rechazas la analítica, o simplemente nunca respondes al banner, el script de Google
            Analytics no se solicita en absoluto: estas cookies nunca llegan a crearse, en lugar de
            crearse y luego ignorarse.
          </LegalP>
          <LegalP>
            Solo si aceptas la analítica, nuestro propio servidor también cuenta las visitas a
            páginas y los usos de herramientas: ruta de la página, nombre de la herramienta, hora,
            país, tipo de dispositivo, sitio de procedencia y un hash de visitante que cambia cada
            día y se borra a las 48 horas. Los usos de herramientas llevan además un hash
            independiente de tu dirección IP, que cambia cada día y se queda en el registro de ese
            uso. No se recopilan nombres, contenido ni tamaño de los archivos, y este recuento no
            instala ninguna cookie. Si has iniciado sesión, los usos de herramientas se vinculan a tu
            cuenta. La sección 4 de nuestra{" "}
            <Link href={`${localeHref("/privacy", "es")}#collect`} className="text-secondary hover:underline">
              Política de privacidad
            </Link>{" "}
            tiene los detalles.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Publicidad: no se usa">
          <LegalP>
            <strong>No</strong> usamos cookies publicitarias ni de seguimiento. oMyImage no muestra
            anuncios y no comparte tu navegación con redes publicitarias. El interruptor de
            publicidad existe en el banner de consentimiento para que tu preferencia ya quede
            registrada si eso cambia algún día; hoy no controla nada.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Cookies de terceros">
        <LegalP>
          Estos son los únicos terceros que pueden guardar algo en tu navegador en oMyImage. Cada uno
          se rige por su propia política:
        </LegalP>
        <LegalTable
          headers={["Servicio", "Finalidad", "Política de privacidad"]}
          rows={[
            [
              "Cloudflare",
              "Cookies de seguridad y rendimiento estrictamente necesarias (límites de uso, detección de bots)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Cookies de analítica, instaladas solo después de que aceptes la analítica",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Sirve la fuente de iconos. No instala cookies, pero Google recibe tu dirección IP, igual que en cualquier sitio que use esa fuente",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (opcional)",
              "Solo si usas la importación desde Google Drive. El token de acceso se guarda en memoria durante esa visita y nunca se almacena",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (opcional)",
              "Solo si usas la importación desde Dropbox. Su selector se abre en una ventana emergente de Dropbox; no se vincula ninguna cuenta ni se emite ningún token",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          Las importaciones desde la nube se describen por completo en las secciones 7 y 8 de nuestra{" "}
          <Link href={`${localeHref("/privacy", "es")}#google-drive`} className="text-secondary hover:underline">
            Política de privacidad
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. Cómo controlar las cookies">
        <LegalSubsection title="En oMyImage">
          <LegalP>
            Usa el enlace <strong>«Configuración de cookies»</strong> del pie de cualquier página.
            Vuelve a abrir el banner de consentimiento con tus opciones actuales cargadas, para que
            puedas cambiar una categoría sin restablecer las demás.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="En tu navegador">
          <LegalP>
            Todos los navegadores principales te permiten ver, bloquear y eliminar cookies y datos de
            sitios. Si lo bloqueas todo, también se borrarán las entradas necesarias descritas
            arriba, así que el sitio olvidará tu tema y volverá a preguntarte por las cookies:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies de terceros
            </li>
            <li>
              <strong>Firefox:</strong> Ajustes → Privacidad &amp; Seguridad → Cookies y datos del
              sitio
            </li>
            <li>
              <strong>Safari:</strong> Ajustes → Privacidad → Gestionar datos de sitios web
            </li>
            <li>
              <strong>Edge:</strong> Configuración → Cookies y permisos del sitio → Administrar y
              eliminar cookies
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Desactivar Google Analytics en todas partes">
          <LegalP>
            Para desactivar Google Analytics en todos los sitios, no solo en este, instala el{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              complemento de inhabilitación para navegadores de Google Analytics
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Cambios en esta política">
        <LegalP>
          Podemos actualizar esta política a medida que cambie el servicio. La fecha de «Última
          actualización» que aparece arriba siempre corresponde a la versión vigente, y los cambios
          importantes se reflejarán aquí antes de que entren en vigor.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Contacto">
        <LegalP>
          Puedes enviarnos tus preguntas sobre las cookies o sobre esta política a través de las
          opciones de nuestra{" "}
          <Link href={localeHref("/contact", "es")} className="text-secondary hover:underline">
            página de contacto
          </Link>
          . Consulta también nuestra{" "}
          <Link href={localeHref("/privacy", "es")} className="text-secondary hover:underline">
            Política de privacidad
          </Link>{" "}
          y nuestros{" "}
          <Link href={localeHref("/terms", "es")} className="text-secondary hover:underline">
            Términos del servicio
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
