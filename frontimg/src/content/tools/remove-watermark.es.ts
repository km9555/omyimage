import type { ToolPageContent } from "@/content/tools/types";
import object from "@/content/tools/remove-object.es";

/**
 * Spanish copy for /es/quitar-marca-de-agua. Target query «Quitar marca de
 * agua» — 22.2K ES / 33.1K MX at KD ≤ 11 (Nov 2026): a priority page.
 * Secondaries «eliminar marca de agua» and «borrar marca de agua». Neutral
 * Spanish, tú. Same engine as /es/eliminar-objetos-de-fotos (MI-GAN in the
 * browser), opening with the box tool. The copy asks people to use it only on
 * images they own or may edit (derechos de autor).
 */
const content: ToolPageContent = {
  toolId: "remove-watermark",
  locale: "es",
  name: "Quitar marca de agua",
  tagline:
    "Quita marcas de agua, logos, textos y fechas de tus fotos: márcalos y la IA rellena la zona para que encaje con el resto de la imagen. Gratis y sin subir nada: funciona en tu navegador.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Quitar marca de agua – gratis y online | oMyImage",
  metaDescription:
    "Quitar marca de agua online y gratis: marca logos, textos o fechas y la IA rellena la zona. Elimina marcas de agua en tu navegador, sin subir nada.",

  intro:
    "Una marca de agua es un texto o un logo superpuesto a una imagen, y quitarla significa reconstruir los píxeles que tapaba. «Quitar marca de agua» lo hace con un modelo de IA, MI-GAN de Picsart AI Research, que funciona dentro de tu navegador: dibuja un recuadro alrededor de la marca de agua o pinta encima, haz clic en «Quitar marca de agua» y la zona se rellena a partir de lo que la rodea en alrededor de un segundo. Está pensada para tus propias imágenes: el logo de una foto de producto antigua, la fecha impresa en una copia escaneada, el texto de una captura de pantalla que hiciste tú. Puedes eliminar la marca de agua online y gratis, y nada de lo que abres se sube nunca a ningún servidor.",

  sections: [
    {
      heading: "Cómo marcar la marca de agua",
      id: "marking",
      body: [
        "La herramienta se abre con el Recuadro seleccionado, porque la mayoría de las marcas de agua ocupan un rectángulo: arrástralo de una esquina de la marca a la opuesta. Para un texto que sigue una curva o está repartido, cambia al Pincel y pinta sobre cada letra. Cubre también el contorno, la sombra y cualquier resplandor, o quedará un rastro tenue de las letras.",
        "Puedes marcar varias marcas de agua antes de quitarlas (por ejemplo, un logo en una esquina y una dirección web en otra) y cada una se rellena por separado.",
      ],
    },
    {
      heading: "Qué se borra limpiamente y qué no",
      id: "expectations",
      body: [
        "La IA no descubre lo que había debajo de la marca de agua; pinta lo que sugiere la imagen alrededor. Eso funciona muy bien con marcas pequeñas sobre cielo, agua, paredes, césped, fondos lisos de estudio y fondos desenfocados: los logos en una esquina, las fechas, las firmas y los textos cortos suelen desaparecer sin dejar rastro.",
        "Las marcas de agua grandes y semitransparentes que cruzan en diagonal toda la foto son más difíciles: el modelo tiene que inventar zonas amplias de detalle, así que el resultado queda más suave y puede emborronar caras, textos y patrones finos. Elimínalas en secciones más pequeñas y comprueba el resultado con «Mantén pulsado para ver el original».",
      ],
    },
    {
      heading: "Úsala solo en imágenes que puedas editar",
      id: "responsible",
      body: [
        "Las marcas de agua de los bancos de imágenes y de las vistas previas de los fotógrafos protegen el trabajo y los ingresos de otra persona. Quitarlas para usar la imagen sin pagar infringe los derechos de autor en la mayoría de los países, tanto en España como en América Latina: en ese caso, compra la licencia de la imagen. Esta herramienta es para tus propias fotos y para imágenes que tengas permiso para modificar: el logo antiguo de tu empresa, la fecha que añadió tu cámara o una marca de agua que pusiste en tu propio portafolio antes de perder el original.",
      ],
    },
    {
      heading: "Fechas impresas en fotos antiguas",
      id: "date-stamps",
      body: [
        "Las cámaras de carrete y las primeras cámaras digitales imprimían la fecha en dígitos naranjas en una esquina. Escanea la copia, dibuja un recuadro alrededor de la fecha y quítala. Las copias antiguas suelen tener también polvo y rayones; márcalos con un pincel pequeño y elimínalos en la misma pasada.",
      ],
    },
    {
      heading: "Textos y logos en capturas de pantalla y fotos de producto",
      id: "text",
      body: [
        "Las fotos de producto de tus propios anuncios anteriores suelen llevar el nombre de una tienda antigua o una etiqueta promocional; las capturas de pantalla muestran nombres de usuario, notificaciones y horas. Márcalos con el Recuadro y quítalos. En zonas de color liso, como un fondo blanco de producto o el panel sencillo de una app, el relleno es prácticamente invisible.",
      ],
    },
    {
      heading: "Eliminar o borrar una marca de agua sin instalar nada",
      id: "no-install",
      body: [
        "No necesitas descargar ningún programa ni crear una cuenta. Abres la página en el navegador de tu PC, Mac o teléfono (Windows, macOS, Android o iPhone), añades la imagen, borras la marca de agua y descargas el resultado. Si una primera pasada deja una sombra visible, deshaz, amplía un poco la marca para cubrir el contorno y vuelve a intentarlo: cada intento tarda alrededor de un segundo.",
      ],
    },
    {
      heading: "IA que funciona en tu navegador",
      id: "on-device",
      body: [
        "Las herramientas online para quitar marcas de agua suelen subir tu imagen y limitar cuántas puedes procesar gratis. Esta, en cambio, descarga el modelo de IA en tu navegador (unos 27 MB desde nuestro propio sitio, una sola vez; tu navegador lo guarda) y hace cada eliminación en tu dispositivo. Por eso no hay límite ni subida, y por eso sigue funcionando sin conexión una vez cargado el modelo.",
      ],
    },
    {
      heading: "Calidad, deshacer y formatos",
      id: "quality",
      body: [
        "Solo cambian las zonas marcadas; todos los demás píxeles se guardan exactamente como estaban, con el tamaño completo de la imagen hasta 16,7 megapíxeles. Cada eliminación se puede deshacer y rehacer, con los botones o con Ctrl+Z y Ctrl+Shift+Z, y «Empezar de nuevo» vuelve al original. Descarga en el formato original o en JPG, PNG o WEBP.",
        "Si lo que quieres es poner tu propia marca de agua en tus fotos, usa «Marca de agua».",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Tu imagen se edita por completo en tu navegador, con un modelo que funciona en tu dispositivo. No se sube nada y no se guarda nada cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo quitar una marca de agua de una foto",
  steps: [
    { title: "Añade tu foto", description: "Elige una imagen JPG, PNG o WEBP." },
    { title: "Marca la marca de agua", description: "Arrastra un recuadro a su alrededor o pinta sobre cada letra con el pincel." },
    { title: "Quita y descarga", description: "Haz clic en «Quitar marca de agua», compara con el original y luego en «Descargar imagen»." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Recuadro o pincel", description: "Marca un logo de un solo arrastre o pinta sobre un texto disperso." },
    { icon: "smart_toy", title: "Relleno con IA en un segundo", description: "La zona se reconstruye a partir de la imagen que la rodea." },
    { icon: "lock", title: "Sin subida y sin límite", description: "La IA funciona en tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo quito una marca de agua de una foto?", a: "Añade la foto, arrastra un recuadro alrededor de la marca de agua y haz clic en «Quitar marca de agua». Después descarga la imagen limpia." },
    { q: "¿Puedo quitar marcas de agua gratis?", a: "Sí. Sin cuenta, sin ninguna marca de agua nuestra y sin límite diario: la IA funciona en tu dispositivo." },
    { q: "¿Se sube mi imagen?", a: "No. El modelo se descarga en tu navegador y tu imagen nunca sale de tu dispositivo." },
    { q: "¿Puede eliminar un logo?", a: "Sí. Encierra el logo en un recuadro, incluida cualquier sombra o contorno, y quítalo." },
    { q: "¿Puede borrar la fecha de una foto?", a: "Sí. Dibuja un recuadro alrededor de la fecha y quítala; funciona especialmente bien con copias escaneadas." },
    { q: "¿Puede quitar texto de una imagen?", a: "Sí. Pinta sobre el texto con el pincel, o enciérralo en un recuadro si está en una sola línea." },
    { q: "¿Por qué se sigue viendo una marca de agua grande?", a: "Las marcas grandes y transparentes sobre zonas con mucho detalle son difíciles de reconstruir. Elimínalas en secciones más pequeñas y marca también el contorno." },
    { q: "¿Recupera los píxeles originales?", a: "No. Pinta lo que sugiere el entorno, que en fondos lisos normalmente no se distingue del original." },
    { q: "¿Es legal quitar una marca de agua?", a: "En tus propias imágenes, o en las que tengas permiso para editar, sí. Quitarla para usar la foto de otra persona sin licencia suele infringir los derechos de autor." },
    { q: "¿Puedo deshacer una eliminación?", a: "Sí: «Deshacer», «Rehacer» y «Empezar de nuevo», o Ctrl+Z y Ctrl+Shift+Z." },
    { q: "¿Baja la calidad de la imagen?", a: "No. Solo cambian las zonas marcadas, y la imagen mantiene su tamaño hasta 16,7 megapíxeles." },
    { q: "¿Funciona en el teléfono?", a: "Sí. Dibuja el recuadro o pinta con el dedo; cada eliminación tarda unos segundos." },
    { q: "¿Puede quitar marcas de agua de videos?", a: "No: funciona con fotos en JPG, PNG y WEBP." },
    { q: "¿Tengo que instalar un programa?", a: "No. Quitas la marca de agua online, en el navegador, en Windows, macOS, Android o iPhone. Solo el modelo de IA se descarga una vez en la primera visita." },
  ],

  security:
    "Tu imagen se edita por completo en tu navegador, con un modelo que funciona en tu dispositivo. No se sube, no se guarda y no se rastrea nada.",

  // InpaintTool.tsx is shared with remove-object; each route only has its own
  // tool's ui in scope, so this page reuses the remove-object translations.
  ui: object.ui,
};

export default content;
