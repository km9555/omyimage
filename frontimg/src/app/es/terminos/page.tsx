import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Spanish terms of service (Términos del servicio) — a written twin of /terms
 * (conversion.md §6.5), with the same section ids, the same numbering and the
 * same cross-references (section 14 names sections 5, 8, 9, 10, 11, 15 and 16,
 * so the order is a contract, not a preference).
 *
 * Neutral Spanish for Spain and Latin America, addressed as "tú" like the rest
 * of /es. The disclaimer and liability sections keep their capitalisation, as
 * in every other oMyImage twin: there the all-caps IS the legal convention
 * being followed, and dropping it on one locale would be a substantive change.
 *
 * §15 is translated faithfully and therefore names no country, no company and
 * no court, exactly as the English page does.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/terms",
  locale: "es",
  title: "Términos del servicio | oMyImage",
  description:
    "Los términos que rigen el uso de oMyImage: uso aceptable, tratamiento de archivos, exclusión de garantías, limitación de responsabilidad y ley aplicable.",
});

const toc = [
  { id: "acceptance", title: "1. Aceptación de los Términos" },
  { id: "service", title: "2. Descripción del Servicio" },
  { id: "eligibility", title: "3. Requisitos" },
  { id: "acceptable", title: "4. Uso aceptable" },
  { id: "content", title: "5. Tu Contenido" },
  { id: "files", title: "6. Tratamiento y eliminación de archivos" },
  { id: "availability", title: "7. Disponibilidad y cambios" },
  { id: "warranties", title: "8. Exclusión de garantías" },
  { id: "liability", title: "9. Limitación de responsabilidad" },
  { id: "indemnity", title: "10. Indemnización" },
  { id: "ip", title: "11. Propiedad intelectual" },
  { id: "thirdparty", title: "12. Software y enlaces de terceros" },
  { id: "billing", title: "13. Planes de pago y facturación" },
  { id: "termination", title: "14. Terminación" },
  { id: "governing", title: "15. Ley aplicable" },
  { id: "misc", title: "16. Disposiciones varias" },
  { id: "contact", title: "17. Contacto" },
];

export default function TermsPage() {
  return (
    <LegalShell
      locale="es"
      title="Términos del servicio"
      subtitle={`El acuerdo entre tú y ${SITE.name} cuando usas este sitio web y sus herramientas.`}
      updated="03/08/2026"
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Aceptación de los Términos">
        <LegalP>
          Al acceder a {SITE.name} (el «Servicio») o usarlo, aceptas quedar vinculado por estos
          Términos del servicio (los «Términos»). Si no estás de acuerdo con estos Términos, no debes
          usar el Servicio.
        </LegalP>
        <LegalP>
          Estos Términos se aplican a todos los visitantes, tengas o no una cuenta, y pagues o no por
          algo.
        </LegalP>
      </LegalSection>

      <LegalSection id="service" title="2. Descripción del Servicio">
        <LegalP>
          El Servicio ofrece utilidades de imagen en línea: comprimir, redimensionar, recortar,
          convertir, editar y operaciones relacionadas. La mayoría de las herramientas funcionan por
          completo en tu navegador. Algunas requieren procesamiento en nuestros servidores, como se
          describe en la sección 6 y en nuestra{" "}
          <Link href={localeHref("/privacy", "es")} className="text-secondary hover:underline">
            Política de privacidad
          </Link>
          .
        </LegalP>
        <LegalP>
          El Servicio se ofrece «tal cual» y «según disponibilidad». Podemos añadir, cambiar,
          suspender o retirar cualquier herramienta o función en cualquier momento.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Requisitos">
        <LegalP>
          Para usar el Servicio debes tener capacidad legal para celebrar un acuerdo vinculante en tu
          jurisdicción. Si usas el Servicio en nombre de una organización, declaras que tienes
          autoridad para obligar a esa organización a cumplir estos Términos.
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable" title="4. Uso aceptable">
        <LegalP>Te comprometes a no usar el Servicio para:</LegalP>
        <LegalUl>
          <li>
            subir, procesar o distribuir material ilícito, o material que no tengas derecho a usar,
            incluido el que infrinja derechos de autor, marcas, derechos de privacidad o derechos de
            imagen;
          </li>
          <li>
            procesar material de abuso sexual infantil, imágenes íntimas sin consentimiento, o
            cualquier contenido que muestre o promueva la violencia, el terrorismo o actividades
            ilícitas;
          </li>
          <li>
            crear o manipular imágenes destinadas a engañar, defraudar, suplantar a una persona real
            o falsificar documentos de identidad u oficiales;
          </li>
          <li>
            intentar obtener acceso no autorizado al Servicio, a sus servidores o a sistemas
            relacionados, o sondear, escanear o poner a prueba su vulnerabilidad;
          </li>
          <li>
            interferir en el Servicio o perturbarlo, incluso mediante extracción automatizada de
            datos (scraping), intentos de denegación de servicio o la elusión de límites de uso,
            límites de tamaño de archivo o cuotas de uso;
          </li>
          <li>
            revender, sublicenciar o redistribuir comercialmente el propio Servicio, o usarlo para
            crear un servicio de la competencia; o
          </li>
          <li>usar el Servicio de cualquier forma que infrinja la ley o la normativa aplicable.</li>
        </LegalUl>
        <LegalCallout>
          Eres el único responsable del contenido que procesas y de asegurarte de que tienes derecho
          legal a hacerlo. Podemos bloquear, limitar o denegar el acceso a cualquier persona que
          creamos razonablemente que incumple estos Términos, sin previo aviso y sin responsabilidad
          alguna.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="content" title="5. Tu Contenido">
        <LegalP>
          Conservas toda la propiedad de las imágenes y archivos que procesas («Tu Contenido»). No
          reclamamos ninguna propiedad sobre ellos.
        </LegalP>
        <LegalP>
          Para las herramientas que procesan en nuestros servidores, nos concedes una licencia
          limitada, temporal, mundial y gratuita para almacenar, transmitir y procesar Tu Contenido{" "}
          <strong>únicamente</strong> para realizar la operación que solicitaste y devolverte el
          resultado. Esa licencia termina cuando se elimina el archivo. No usamos Tu Contenido para
          entrenar modelos, y no lo vendemos, compartimos ni publicamos.
        </LegalP>
        <LegalP>
          Declaras y garantizas que eres titular de Tu Contenido o que tienes todos los derechos y
          permisos necesarios para procesarlo a través del Servicio.
        </LegalP>
      </LegalSection>

      <LegalSection id="files" title="6. Tratamiento y eliminación de archivos">
        <LegalP>
          La mayoría de las herramientas procesan los archivos por completo en tu navegador; esos
          archivos nunca se nos transmiten. Los archivos se suben a nuestros servidores solo cuando
          superan el umbral de procesamiento del navegador, cuando usas una herramienta de IA o
          cuando usas la conversión HEIC, que debe ejecutarse en el servidor por motivos de licencia.
        </LegalP>
        <LegalP>
          Los archivos subidos y sus resultados se almacenan de forma transitoria y se eliminan
          automáticamente en aproximadamente una hora. Los enlaces de descarga no se pueden adivinar,
          pero no requieren autenticación: cualquiera que tenga el enlace puede descargar ese archivo
          hasta que caduque, así que trata los enlaces como confidenciales.
        </LegalP>
        <LegalP>
          Eres responsable de conservar tus propias copias. No somos un servicio de almacenamiento ni
          de copias de seguridad, y no garantizamos que ningún archivo procesado siga estando
          disponible.
        </LegalP>
      </LegalSection>

      <LegalSection id="availability" title="7. Disponibilidad y cambios">
        <LegalP>
          No garantizamos que el Servicio sea ininterrumpido, oportuno, seguro o libre de errores. El
          Servicio puede no estar disponible por mantenimiento, actualizaciones o motivos ajenos a
          nuestro control.
        </LegalP>
        <LegalP>
          Las herramientas que dependen del servidor necesitan que su software esté instalado y en
          funcionamiento; cuando no lo está, la herramienta indicará que no está disponible en lugar
          de producir un resultado. Podemos modificar o suspender cualquier parte del Servicio en
          cualquier momento y sin previo aviso.
        </LegalP>
      </LegalSection>

      <LegalSection id="warranties" title="8. Exclusión de garantías">
        <LegalP>
          EL SERVICIO SE PROPORCIONA «TAL CUAL» Y «SEGÚN DISPONIBILIDAD», SIN GARANTÍAS DE NINGÚN
          TIPO, YA SEAN EXPRESAS, IMPLÍCITAS O LEGALES. EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY
          APLICABLE, RECHAZAMOS TODA GARANTÍA, INCLUIDAS LAS GARANTÍAS IMPLÍCITAS DE
          COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO, TITULARIDAD Y NO INFRACCIÓN.
        </LegalP>
        <LegalP>
          NO GARANTIZAMOS QUE EL SERVICIO CUMPLA TUS REQUISITOS, QUE LOS RESULTADOS SEAN EXACTOS O DE
          UNA CALIDAD DETERMINADA, NI QUE SE CORRIJA CUALQUIER DEFECTO. USAS EL SERVICIO BAJO TU
          PROPIO RIESGO Y ERES RESPONSABLE DE VERIFICAR LOS RESULTADOS Y CONSERVAR LOS ORIGINALES
          ANTES DE CONFIAR EN CUALQUIER ARCHIVO PROCESADO.
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitación de responsabilidad">
        <LegalP>
          EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, EN NINGÚN CASO {SITE.name}, SU
          OPERADOR, PROPIETARIOS, COLABORADORES O PROVEEDORES SERÁN RESPONSABLES DE NINGÚN DAÑO
          INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE, EJEMPLAR O PUNITIVO, NI DE NINGUNA PÉRDIDA DE
          BENEFICIOS, INGRESOS, FONDO DE COMERCIO, DATOS, IMÁGENES U OPORTUNIDADES DE NEGOCIO,
          DERIVADOS DE TU USO DEL SERVICIO O DE LA IMPOSIBILIDAD DE USARLO, O RELACIONADOS CON ELLO,
          YA SE BASEN EN UN CONTRATO, RESPONSABILIDAD EXTRACONTRACTUAL, NEGLIGENCIA, RESPONSABILIDAD
          OBJETIVA O CUALQUIER OTRA TEORÍA, E INCLUSO SI SE HUBIERA ADVERTIDO DE LA POSIBILIDAD DE
          TALES DAÑOS.
        </LegalP>
        <LegalP>
          EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, NUESTRA RESPONSABILIDAD TOTAL ACUMULADA
          POR TODAS LAS RECLAMACIONES RELACIONADAS CON EL SERVICIO NO SUPERARÁ LA MAYOR DE ESTAS
          CANTIDADES: (A) EL IMPORTE QUE NOS HAYAS PAGADO EFECTIVAMENTE POR EL SERVICIO EN LOS TRES
          MESES ANTERIORES AL HECHO QUE DIO LUGAR A LA RECLAMACIÓN, O (B) 50 USD.
        </LegalP>
        <LegalP>
          Algunas jurisdicciones no permiten excluir o limitar determinadas garantías o
          responsabilidades. En esos casos, las exclusiones y limitaciones anteriores se aplican solo
          en la medida máxima permitida, y nada de lo dispuesto en estos Términos limita la
          responsabilidad por fraude, ni por muerte o lesiones personales causadas por negligencia,
          cuando la ley prohíba dicha limitación.
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" title="10. Indemnización">
        <LegalP>
          Aceptas indemnizar, defender y mantener indemnes a {SITE.name}, su operador, propietarios y
          colaboradores frente a cualquier reclamación, demanda, daño, pérdida, responsabilidad,
          costo y gasto (incluidos honorarios legales razonables) derivados de o relacionados con:
          (a) Tu Contenido; (b) tu uso o uso indebido del Servicio; (c) tu incumplimiento de estos
          Términos; o (d) tu infracción de cualquier ley o de los derechos de cualquier tercero.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="11. Propiedad intelectual">
        <LegalP>
          El Servicio, incluidos su nombre, su marca, su diseño, su interfaz y su código original, es
          propiedad de su operador y está protegido por las leyes de propiedad intelectual. Estos
          Términos te conceden una licencia limitada, personal, no exclusiva, intransferible y
          revocable para usar el Servicio con el fin previsto. No se concede ningún otro derecho.
        </LegalP>
        <LegalP>
          Puedes usar los resultados que generes a partir de tus propias imágenes para cualquier fin
          lícito, incluso comercial.
        </LegalP>
      </LegalSection>

      <LegalSection id="thirdparty" title="12. Software y enlaces de terceros">
        <LegalP>
          El Servicio se basa en componentes de código abierto, cada uno con la licencia de sus
          respectivos autores. Las atribuciones y los textos completos de las licencias están
          disponibles en nuestros{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            avisos de terceros
          </a>
          . Sus autores proporcionan esos componentes sin garantía.
        </LegalP>
        <LegalP>
          El Servicio puede incluir enlaces a sitios web de terceros. No los controlamos, no los
          respaldamos y no aceptamos ninguna responsabilidad por su contenido, sus prácticas o su
          disponibilidad.
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" title="13. Planes de pago y facturación">
        <LegalP>
          Actualmente el Servicio es gratuito y no hay planes de pago activos. Lo siguiente se
          aplicará si se lanzan planes de pago y cuando eso ocurra.
        </LegalP>
        <LegalUl>
          <li>
            Los precios se muestran antes de la compra y pueden cambiar, con aviso previo, para
            futuros periodos de facturación.
          </li>
          <li>
            Las suscripciones se renuevan automáticamente por el mismo periodo hasta que se cancelan.
            Puedes cancelar en cualquier momento, con efecto al final del periodo en curso.
          </li>
          <li>
            Los pagos los gestionaría un procesador de pagos externo; no recibiríamos ni
            guardaríamos los datos completos de tu tarjeta.
          </li>
          <li>
            Eres responsable de los impuestos que correspondan y de mantener correctos tus datos de
            facturación.
          </li>
          <li>
            Podemos suspender el acceso a las funciones de pago si un pago falla o se revierte.
          </li>
        </LegalUl>
        <LegalP>
          Los reembolsos se rigen por nuestra{" "}
          <Link href={localeHref("/refunds", "es")} className="text-secondary hover:underline">
            Política de reembolsos
          </Link>
          , que forma parte de estos Términos.
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" title="14. Terminación">
        <LegalP>
          Podemos suspender o terminar tu acceso al Servicio en cualquier momento, con o sin aviso,
          si creemos razonablemente que has incumplido estos Términos o que tu uso supone un riesgo
          para el Servicio o para otras personas. Puedes dejar de usar el Servicio en cualquier
          momento.
        </LegalP>
        <LegalP>
          Las secciones que por su naturaleza deban subsistir tras la terminación, incluidas las
          secciones 5, 8, 9, 10, 11, 15 y 16, seguirán vigentes.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing" title="15. Ley aplicable y resolución de conflictos">
        <LegalP>
          Estos Términos se rigen e interpretan conforme a la ley aplicable, sin tener en cuenta los
          principios sobre conflicto de leyes. Cualquier conflicto derivado de estos Términos o del
          Servicio, o relacionado con ellos, se resolverá ante los tribunales de la jurisdicción
          competente.
        </LegalP>
        <LegalP>
          Si eres un consumidor residente en la Unión Europea o en el Reino Unido, también puedes
          beneficiarte de las disposiciones imperativas de la ley del país en el que resides. Nada de
          lo dispuesto en estos Términos afecta a tu derecho como consumidor a acogerte a dichas
          disposiciones imperativas.
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="16. Disposiciones varias">
        <LegalSubsection title="Acuerdo íntegro">
          <LegalP>
            Estos Términos, junto con la Política de privacidad y la Política de reembolsos,
            constituyen el acuerdo íntegro entre tú y nosotros en relación con el Servicio.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Divisibilidad">
          <LegalP>
            Si alguna disposición se considera inaplicable, se modificará en la medida mínima
            necesaria, y las demás disposiciones seguirán plenamente vigentes.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Renuncia">
          <LegalP>
            Que no hagamos valer una disposición no supone renunciar a nuestro derecho a hacerlo más
            adelante.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Cesión">
          <LegalP>
            No puedes ceder estos Términos sin nuestro consentimiento. Nosotros podemos cederlos en
            el marco de una fusión, una adquisición o una venta de activos.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Cambios en estos Términos">
          <LegalP>
            Podemos actualizar estos Términos de vez en cuando. La fecha de «Última actualización»
            que aparece arriba corresponde a la versión vigente, y seguir usando el Servicio después
            de un cambio implica que lo aceptas.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="contact" title="17. Contacto">
        <LegalP>
          Puedes enviarnos tus preguntas sobre estos Términos a través de las opciones de nuestra{" "}
          <Link href={localeHref("/contact", "es")} className="text-secondary hover:underline">
            página de contacto
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
