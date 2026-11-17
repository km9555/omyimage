import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Spanish privacy policy (Política de privacidad) — a written twin of /privacy
 * (conversion.md §6.5), with the same section ids. `#google-drive` and
 * `#collect` in particular are linked from the cookie policy in every language.
 *
 * Neutral Spanish for Spain and Latin America, addressed as "tú" like the rest
 * of /es. Faithful to the English facts: the English page names no controller,
 * no legal bases under the GDPR (RGPD) and no supervisory authority, so neither
 * does this one. Adding them is a substantive legal change and belongs in
 * /privacy first, then in every twin.
 *
 * Section 7 exists to satisfy Google's OAuth verification, which audits the
 * privacy policy against the scope requested in lib/google-drive.ts. Two
 * things there are deliberately NOT translated:
 *   • the scope URI, which is an identifier; and
 *   • the name of the Google API Services User Data Policy, kept in English
 *     with the Limited Use sentence rendered close to Google's own wording —
 *     that sentence is prescribed, and a loose paraphrase in any language is
 *     what fails a review.
 * Keep this section in sync with the English one whenever the scope changes.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/privacy",
  locale: "es",
  title: "Política de privacidad | oMyImage",
  description:
    "Cómo trata oMyImage tus imágenes y datos: casi todas las herramientas funcionan en tu navegador, los archivos del servidor se borran en una hora y no hay anuncios.",
});

const toc = [
  { id: "summary", title: "Resumen" },
  { id: "images", title: "1. Tus imágenes" },
  { id: "browser", title: "2. Procesamiento en el navegador o en el servidor" },
  { id: "retention", title: "3. Conservación y eliminación" },
  { id: "collect", title: "4. Qué datos recopilamos" },
  { id: "storage", title: "5. Almacenamiento en el navegador" },
  { id: "subprocessors", title: "6. Servicios de terceros" },
  { id: "google-drive", title: "7. Inicio de sesión con Google e importación desde Google Drive" },
  { id: "dropbox", title: "8. Importación desde Dropbox" },
  { id: "future", title: "9. Funciones previstas" },
  { id: "rights", title: "10. Tus derechos" },
  { id: "children", title: "11. Menores" },
  { id: "security", title: "12. Seguridad" },
  { id: "changes", title: "13. Cambios" },
  { id: "contact", title: "14. Contacto" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="es"
      title="Política de privacidad"
      subtitle="Qué pasa con tus imágenes y tus datos cuando usas oMyImage."
      updated="09/11/2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Resumen">
        <LegalCallout>
          La mayoría de las herramientas de oMyImage funcionan <strong>por completo en tu
          navegador</strong>: tus imágenes nunca se suben. Unas pocas herramientas necesitan nuestro
          servidor; esos archivos se procesan, se te devuelven y se eliminan en aproximadamente una
          hora. La cuenta es opcional, no mostramos anuncios y no hacemos seguimiento entre sitios;
          la analítica solo se carga si la permites.
        </LegalCallout>
        <LegalP>
          Esta política lo explica en detalle. Describe lo que el servicio hace hoy e indica con
          claridad cuándo algo está previsto y todavía no está en funcionamiento.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Tus imágenes">
        <LegalP>
          Tus imágenes son tuyas. No reclamamos la propiedad de nada de lo que procesas, no usamos
          tus imágenes para entrenar modelos y no las vendemos, compartimos, publicamos ni
          reutilizamos con ningún fin.
        </LegalP>
        <LegalP>
          Que una imagen salga o no de tu dispositivo depende de la herramienta que uses: consulta la
          sección siguiente.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Procesamiento en el navegador o en el servidor">
        <LegalSubsection title="Procesamiento en tu navegador (sin subida)">
          <LegalP>
            La mayoría de las herramientas usan el motor canvas de tu propio navegador. La imagen se
            lee desde tu dispositivo a la memoria, se procesa localmente y tú la vuelves a guardar.
            No se nos transmite nada, y estas herramientas siguen funcionando aunque nuestro
            servidor esté caído.
          </LegalP>
          <LegalP>
            Esto incluye recortar, redimensionar, girar, comprimir, convertir, marca de agua, memes,
            el editor todo en uno, difuminar, bordes, recorte circular, unir imágenes, herramientas
            de GIF, herramientas de color, ver metadatos e imagen a PDF, con archivos de hasta
            15&nbsp;MB.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Procesamiento en nuestro servidor (con subida)">
          <LegalP>Tu imagen se sube a nuestro servidor en tres casos:</LegalP>
          <LegalUl>
            <li>
              <strong>Archivos de más de 15&nbsp;MB</strong>: a partir de ese tamaño el
              procesamiento en el navegador deja de ser fiable, así que nuestro servidor se encarga
              del trabajo automáticamente.
            </li>
            <li>
              <strong>Las herramientas de IA</strong>: «Quitar fondo» y «Mejorar calidad de imagen»
              ejecutan modelos demasiado pesados para un navegador.
            </li>
            <li>
              <strong>HEIC a JPG, con cualquier tamaño.</strong> Aquí el motivo es de licencia, no
              técnico: los únicos decodificadores HEIC de código abierto no pueden distribuirse a
              los navegadores según su licencia, así que la conversión tiene que hacerse en nuestro
              servidor.
            </li>
          </LegalUl>
          <LegalP>
            Cada una de esas herramientas indica en su propia página que sube el archivo. Si una
            herramienta no lo dice, no sube nada.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Conservación y eliminación">
        <LegalP>
          Las imágenes que se procesan en tu navegador nunca llegan a nosotros, así que no hay nada
          que conservar.
        </LegalP>
        <LegalP>
          En las imágenes procesadas en el servidor, el archivo subido se guarda solo mientras dura
          la conversión y después se descarta. El resultado se almacena brevemente detrás de un
          enlace de descarga privado y se elimina automáticamente en aproximadamente una hora. No
          hacemos copias de seguridad de tus archivos ni los archivamos.
        </LegalP>
        <LegalCallout>
          Los enlaces de descarga no se pueden adivinar, pero no requieren autenticación. Trata cada
          enlace como un secreto: cualquiera que lo tenga puede descargar ese archivo hasta que
          caduque.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. Qué datos recopilamos">
        <LegalP>
          Para usar las herramientas no tienes que darnos tu nombre, tu correo electrónico ni ningún
          otro dato personal. En este sitio no hay boletín ni formulario de contacto. Crear una
          cuenta es opcional; lo que guardamos si lo haces se describe al final de esta sección.
        </LegalP>
        <LegalP>
          Como cualquier servicio web, nuestro servidor y nuestros proveedores de alojamiento
          procesan automáticamente datos técnicos básicos para entregar el sitio: dirección IP,
          agente de usuario (user-agent) del navegador, URL solicitada y marca de tiempo. Se usan
          para responder a la solicitud, aplicar límites de uso y detectar abusos. No creamos
          perfiles con ellos y, salvo el recuento basado en el consentimiento que se describe más
          abajo, no los combinamos con nada más.
        </LegalP>
        <LegalP>
          Usamos <strong>Google Analytics 4</strong>, y solo con tu consentimiento. Mientras no
          aceptes las cookies de analítica, el script ni siquiera se solicita: no se carga para
          luego desactivarse, simplemente no está, así que no se crea ninguna cookie de analítica
          para quien la rechazó o nunca respondió al banner. Lo que recopila es agregado: qué
          herramientas se usan, qué páginas dan error y, aproximadamente, de dónde vienen los
          visitantes. No lo usamos para identificarte ni lo relacionamos con nada de lo que procesas.
        </LegalP>
        <LegalP>
          Si aceptas las cookies de analítica, también contamos en nuestro propio servidor las
          visitas a páginas y los usos de herramientas, para nuestros informes internos de uso. En
          cada registro guardamos:
        </LegalP>
        <LegalUl>
          <li>
            la ruta de la página, o el nombre de la herramienta y si se ejecutó en tu navegador o en
            nuestro servidor;
          </li>
          <li>
            cuándo ocurrió;
          </li>
          <li>
            tu país y tu tipo de dispositivo, que nuestro servidor deduce de tu dirección IP y del
            agente de usuario de tu navegador;
          </li>
          <li>
            el sitio que te remitió, solo por su nombre, en la primera página que abres;
          </li>
          <li>
            en las visitas a páginas, un hash de visitante creado a partir de tu dirección IP y tu
            agente de usuario, para no contar varias veces a la misma persona. Cambia cada día y se
            borra a las 48 horas.
          </li>
        </LegalUl>
        <LegalP>
          Cada uso de una herramienta lleva además un hash independiente de tu dirección IP. También
          cambia cada día, pero se queda en el registro de ese uso. Para esto nunca recopilamos
          nombres, contenido ni tamaño de los archivos, y no se instala ninguna cookie. Si rechazas
          la analítica o nunca respondes al banner, no se envía nada de esto. Si has iniciado
          sesión, vinculamos tus usos de herramientas a tu cuenta.
        </LegalP>
        <LegalP>
          <strong>No hay publicidad ni seguimiento entre sitios.</strong> En oMyImage no hay
          grabación de sesiones, ni píxel publicitario, ni red de anuncios. Puedes cambiar o retirar
          tu consentimiento para la analítica en cualquier momento desde{" "}
          <strong>«Configuración de cookies»</strong> en el pie de página; consulta nuestra{" "}
          <Link href={localeHref("/cookies", "es")} className="text-secondary hover:underline">
            Política de cookies
          </Link>{" "}
          para más detalles.
        </LegalP>

        <LegalSubsection title="Si creas una cuenta">
          <LegalP>
            La cuenta es opcional: todas las herramientas funcionan sin ella. Puedes crearla con un
            correo electrónico y una contraseña, o con el inicio de sesión de Google (sección 7).
            Para una cuenta guardamos:
          </LegalP>
          <LegalUl>
            <li>tu correo electrónico y si lo has verificado;</li>
            <li>tu nombre, si lo escribes o si viene del inicio de sesión con Google;</li>
            <li>
              una contraseña con hash seguro, si te registraste con correo electrónico; nunca
              guardamos la contraseña en sí;
            </li>
            <li>el ID de tu cuenta de Google, si inicias sesión con Google;</li>
            <li>
              el país desde el que se hicieron tu registro y tu visita más reciente, deducido de tu
              dirección IP, y la hora de esa visita.
            </li>
          </LegalUl>
          <LegalP>
            Usamos estos datos para iniciar tu sesión, para enviarte correos de la cuenta, como la
            verificación de tu dirección y el restablecimiento de la contraseña, y para ver de forma
            agregada de qué países vienen nuestros usuarios. No los usamos para publicidad y nunca
            los vendemos. Puedes cambiar tu nombre y tu contraseña en la página de tu cuenta; para
            eliminar tu cuenta, consulta la sección 10.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="storage" title="5. Almacenamiento en el navegador">
        <LegalP>
          oMyImage no instala cookies propias. Usamos el almacenamiento local de tu navegador para
          algunas preferencias funcionales, que se quedan en tu dispositivo y nunca se nos envían:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code>: si elegiste el modo claro o el oscuro.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> y <code>omyimage_cookie_prefs</code>: tu respuesta
            al banner de cookies.
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
          Si borras los datos del sitio en tu navegador, se eliminan todos. Ninguno te identifica.
          Las cookies de terceros (Cloudflare y, si lo permites, Google Analytics) se enumeran en
          nuestra{" "}
          <Link href={localeHref("/cookies", "es")} className="text-secondary hover:underline">
            Política de cookies
          </Link>
          .
        </LegalP>
        <LegalP>
          Si inicias sesión, también guardamos tu token de sesión en el almacenamiento local como{" "}
          <code>omyimage_token</code>. A diferencia de los elementos anteriores, se envía a nuestro
          servidor con tus solicitudes, para que sepamos a qué cuenta pertenecen. Al cerrar sesión
          se elimina.
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Servicios de terceros">
        <LegalP>
          Reducimos los terceros al mínimo. Estos son los únicos que intervienen en el funcionamiento
          de oMyImage:
        </LegalP>
        <LegalTable
          headers={["Servicio", "Finalidad", "Política de privacidad"]}
          rows={[
            ["Cloudflare", "Alojamiento del sitio web, CDN y protección contra DDoS", "cloudflare.com/privacypolicy"],
            ["Contabo", "Alojamiento del servidor para las herramientas que procesan en nuestro servidor, para los datos de las cuentas y para nuestros propios recuentos de uso", "contabo.com/en/legal/privacy-policy"],
            ["Hostinger", "Alojamiento de correo: envía los correos de la cuenta, como la verificación de la dirección y el restablecimiento de la contraseña, y recibe el correo enviado a nuestras direcciones", "hostinger.com/legal/privacy-policy"],
            ["Google Fonts", "Sirve la fuente de iconos que se usa en toda la interfaz", "policies.google.com/privacy"],
            ["Google Analytics", "Medición agregada del uso; solo se carga si aceptas las cookies de analítica", "policies.google.com/privacy"],
            ["Inicio de sesión con Google (opcional)", "Inicia tu sesión, solo si eliges «Continuar con Google»; consulta la sección 7", "policies.google.com/privacy"],
            ["Google Drive (opcional)", "Importa solo los archivos que eliges, y solo cuando lo usas; consulta la sección 7", "policies.google.com/privacy"],
            ["Dropbox (opcional)", "Importa solo los archivos que eliges, y solo cuando lo usas; consulta la sección 8", "dropbox.com/privacy"],
          ]}
        />
        <LegalP>
          Como la fuente de iconos se solicita a la CDN de Google, Google recibe tu dirección IP y tu
          agente de usuario cuando se carga una página, igual que en cualquier sitio que use esa
          fuente. Nuestras dos tipografías de texto se sirven desde nuestro propio dominio y no
          intervienen terceros.
        </LegalP>
      </LegalSection>

      <LegalSection id="google-drive" title="7. Inicio de sesión con Google e importación desde Google Drive">
        <LegalP>
          Conectar Google es opcional, y todas las herramientas de oMyImage funcionan sin hacerlo.
          Usamos Google para dos cosas distintas, cada una con su propio permiso:{" "}
          <strong>iniciar sesión</strong>, si decides crear tu cuenta con Google, e{" "}
          <strong>importar una imagen</strong> que ya tienes en Google Drive en lugar de subirla
          desde tu dispositivo. Conceder uno no concede el otro.
        </LegalP>

        <LegalSubsection title="Iniciar sesión con Google">
          <LegalP>
            Cuando eliges «Continuar con Google», Google te pide que compartas tu perfil básico con
            oMyImage: los permisos (scopes) <code>email</code> y <code>profile</code>. Los usamos una
            sola vez, al iniciar sesión, para leer tu correo electrónico, tu nombre y el ID de tu
            cuenta de Google, y guardamos esos tres datos con tu cuenta como se describe en la
            sección 4. El token de acceso de ese intercambio se usa solo para esa solicitud y no se
            guarda.
          </LegalP>
          <LegalP>
            Iniciar sesión con Google no le da a oMyImage acceso a tu Google Drive, Gmail, contactos
            ni a ningún otro dato de Google.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Importación desde Google Drive: qué pedimos y qué permite">
          <LegalP>
            Cuando eliges «Importar desde Google Drive», solicitamos un único permiso limitado:{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. Ese
            permiso da acceso solo a los archivos concretos que seleccionas en el selector de
            archivos de Google. No nos permite listar, explorar, buscar ni abrir nada más de tu
            Drive, y no nos da ninguna visibilidad de tus carpetas, los nombres de tus archivos ni
            tu almacenamiento en general.
          </LegalP>
          <LegalP>
            Además, en la práctica el permiso funciona en un solo sentido: leemos el archivo que
            elegiste. No creamos, renombramos, modificamos, movemos ni eliminamos nada en tu Drive.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Importación desde Google Drive: qué pasa con el archivo y el token">
          <LegalUl>
            <li>
              El token de acceso que emite Google se guarda en la memoria de tu navegador solo
              durante esa visita. Nunca se transmite a nuestros servidores, nunca se escribe en
              disco y desaparece al cerrar la pestaña.
            </li>
            <li>
              El archivo que eliges se descarga desde Google directamente a tu navegador. A la
              entrada no pasa por nuestros servidores.
            </li>
            <li>
              A partir de ahí, el archivo se trata exactamente igual que uno que hayas arrastrado
              desde tu escritorio: se procesa en tu navegador, o se sube a nuestro servidor solo si
              elegiste una herramienta que indica que sube archivos, con las mismas reglas de
              conservación descritas en las secciones 2 y 3.
            </li>
            <li>
              No guardamos copia de tus archivos de Google, no los indexamos y no conservamos ningún
              registro de lo que importaste.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          El uso y la transferencia a cualquier otra aplicación de la información que oMyImage
          recibe de las API de Google se ajustarán a la{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , incluidos los requisitos de uso limitado (Limited Use). En concreto, no usamos los datos
          de usuario de Google para publicidad, no los vendemos ni los transferimos, y no los usamos
          para entrenar modelos generales ni de inteligencia artificial.
        </LegalCallout>

        <LegalP>
          Puedes retirar este acceso cuando quieras, sin que afecte al resto del sitio, desde la{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            página de permisos de tu cuenta de Google
          </a>
          .
        </LegalP>
        <LegalP>
          Retirarlo no elimina tu cuenta de oMyImage; la sección 10 explica cómo hacerlo.
        </LegalP>
      </LegalSection>

      <LegalSection id="dropbox" title="8. Importación desde Dropbox">
        <LegalP>
          Conectar Dropbox es opcional y funciona igual que Google Drive: solo sirve para que elijas
          una imagen que ya tienes en Dropbox en lugar de subirla desde tu dispositivo. Todas las
          herramientas de oMyImage funcionan sin él, y usarlo no requiere una cuenta de oMyImage.
        </LegalP>

        <LegalP>
          Al elegir «Dropbox» se abre el selector de archivos de Dropbox en una ventana emergente.
          Explorar y seleccionar ocurre por completo dentro de esa ventana, que pertenece a Dropbox:
          nunca vemos tus carpetas, los nombres de tus archivos ni nada que no elijas.
        </LegalP>

        <LegalUl>
          <li>
            No se vincula ninguna cuenta ni se emite ningún token de acceso. A diferencia de la
            importación desde Google Drive, no hay permiso que conceder ni nada que revocar después.
          </li>
          <li>
            Dropbox devuelve un enlace de descarga temporal por cada archivo que elegiste, válido
            durante unas horas. Tu navegador lo usa de inmediato y luego lo olvida; el enlace nunca
            se envía a nuestros servidores ni se escribe en disco.
          </li>
          <li>
            El archivo se descarga desde Dropbox directamente a tu navegador. A la entrada no pasa
            por nuestros servidores.
          </li>
          <li>
            A partir de ahí, el archivo se trata exactamente igual que uno que hayas arrastrado desde
            tu escritorio: se procesa en tu navegador, o se sube a nuestro servidor solo si elegiste
            una herramienta que indica que sube archivos, con las mismas reglas de conservación
            descritas en las secciones 2 y 3.
          </li>
          <li>
            No guardamos copia de tus archivos de Dropbox, no los indexamos y no conservamos ningún
            registro de lo que importaste.
          </li>
        </LegalUl>

        <LegalP>
          Para Dropbox, esto es una visita a Dropbox, y lo que ocurre dentro de esa ventana se rige
          por su propia política de privacidad. El código de Dropbox solo se carga cuando usas el
          botón, así que quien nunca usa esta función no tiene ningún contacto con Dropbox.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="9. Funciones previstas">
        <LegalP>
          Algunas funciones están previstas pero todavía no están disponibles. Las describimos aquí
          por adelantado para que esta política siga siendo fiel a la realidad cuando lleguen, y
          para que sepas qué esperar. <strong>Nada de lo siguiente está activo hoy.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Planes de pago.</strong> Si introducimos planes de pago, los pagos los gestionaría
            un procesador de pagos externo. Los datos de la tarjeta irían directamente a ese
            procesador y nunca llegarían a nuestros servidores ni se guardarían en ellos. Solo
            recibiríamos una referencia de la transacción y su estado.
          </li>
        </LegalUl>
        <LegalP>
          Cuando alguna de estas funciones entre en funcionamiento, esta política se actualizará y la
          fecha de «Última actualización» de arriba cambiará antes de que la función se active.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="10. Tus derechos">
        <LegalP>
          Según dónde vivas, puedes tener derecho a acceder, rectificar, exportar o suprimir los datos
          personales que tengamos sobre ti, y a oponerte a determinados tratamientos. No conservamos
          tus imágenes. Si tienes una cuenta, guardamos los datos de la cuenta enumerados en la
          sección 4; sin cuenta, normalmente no tenemos nada sobre ti que se pueda recuperar.
        </LegalP>
        <LegalP>
          Para ver, exportar o eliminar tus datos, incluidos tu cuenta y todo lo guardado con ella,
          escríbenos usando los datos de nuestra{" "}
          <Link href={localeHref("/contact", "es")} className="text-secondary hover:underline">
            página de contacto
          </Link>{" "}
          y te responderemos en un plazo razonable. También puedes presentar una reclamación ante la
          autoridad de protección de datos de tu país.
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="11. Menores">
        <LegalP>
          oMyImage es una utilidad de uso general y no está dirigida a menores. No recopilamos
          conscientemente datos personales de menores. Como usar las herramientas no requiere cuenta
          ni datos personales, normalmente no hay nada que recopilar.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="12. Seguridad">
        <LegalP>
          El sitio se sirve mediante HTTPS. Las subidas a nuestro servidor se cifran en tránsito, se
          procesan de forma aislada y se eliminan según el calendario descrito más arriba. Aplicamos
          límites de uso y de tamaño de subida para proteger el servicio.
        </LegalP>
        <LegalP>
          Ningún servicio en línea puede prometer una seguridad perfecta. No subas material cuya
          exposición no podrías asumir en el improbable caso de una brecha de seguridad, y recuerda
          que, en la mayoría de las herramientas, la opción más segura ya es la predeterminada,
          porque el archivo nunca sale de tu dispositivo.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="13. Cambios">
        <LegalP>
          Podemos actualizar esta política a medida que evolucione el servicio. La fecha de «Última
          actualización» que aparece arriba siempre corresponde a la versión vigente. Los cambios
          importantes se reflejarán aquí antes de que entren en vigor.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="14. Contacto">
        <LegalP>
          Puedes enviarnos tus preguntas sobre esta política, o sobre cómo se tratan tus datos, a
          través de las opciones de nuestra{" "}
          <Link href={localeHref("/contact", "es")} className="text-secondary hover:underline">
            página de contacto
          </Link>
          . Consulta también nuestros{" "}
          <Link href={localeHref("/terms", "es")} className="text-secondary hover:underline">
            Términos del servicio
          </Link>
          , que rigen tu uso de {SITE.name}.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
