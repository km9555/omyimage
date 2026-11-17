import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/jpg-a-pdf-menos-de-300kb (variant of image-to-pdf,
 * 300 KB limit on the whole PDF). Target query: «JPG a PDF de menos de
 * 300 KB». Angle: documentos A COLOR de tres a cinco páginas — sellos,
 * escudos, fotos pegadas en formularios.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-300kb",
  locale: "es",
  name: "JPG a PDF de menos de 300 KB",
  tagline:
    "Convierte varias páginas de fotos o escaneos en un solo PDF de menos de 300 KB, con los sellos de color, los escudos y las fotografías todavía claros. Para portales de solicitudes y verificación. En tu navegador, sin subir nada.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG a PDF de menos de 300 KB – a color | oMyImage",
  metaDescription:
    "Convierte JPG a PDF de menos de 300 KB gratis y sin registro: documentos a color de tres a cinco páginas con sellos, escudos y fotos claros, en tu navegador.",

  intro:
    "Un límite de PDF de 300 KB suele indicar un documento más completo: de tres a cinco páginas, a menudo a color —un certificado con escudo, una solicitud con una foto pegada, un juego de recibos—. Esta página reúne tus imágenes en un solo PDF y, si el resultado pasa de 300 KB, las vuelve a comprimir solo lo necesario para que el archivo completo entre. Con 300 KB para repartir, el color se mantiene fiel y los sellos siguen legibles.",

  sections: [
    {
      heading: "Color que se sigue leyendo",
      id: "colour",
      body: [
        "Los sellos y escudos de color son lo que vuelve válidos a muchos documentos, y suelen ser lo primero que se emborrona cuando un archivo se comprime fuerte. Con 300 KB, un documento a color de tres páginas conserva unos 800 × 1100 píxeles por página, así que los sellos azules, los escudos rojos y una fotografía pegada siguen viéndose con claridad.",
        "Si una parte de tu documento es texto mecanografiado simple y otra parte es a color, déjalo todo a color: meter una página en blanco y negro en el PDF ahorra menos de lo que parece, porque el límite se reparte entre todas las páginas de todos modos.",
      ],
    },
    {
      heading: "Cuántas páginas caben",
      id: "pages",
      body: [
        "Tres páginas A4 siguen cómodamente legibles con 300 KB, y cuatro o cinco funcionan para documentos con letra grande o mucho espacio en blanco. El peso se reparte según la superficie de cada imagen, así que un escaneo grande recibe más presupuesto que un recibo pequeño, y todas las páginas terminan con una nitidez parecida.",
        "Para seis páginas o más, usa la página de 500 KB si el portal lo permite, o divide el documento en dos PDF.",
      ],
    },
    {
      heading: "Varios elementos pequeños en una página",
      id: "multi-up",
      body: [
        "Los recibos, las identificaciones y los certificados pequeños desperdician espacio cuando cada uno ocupa una página A4 entera. Pon «Imágenes por página» en 2 o 4 y se acomodan juntos. Así el PDF es más corto y más fácil de revisar, y cada elemento se sigue guardando con su propia resolución.",
      ],
    },
    {
      heading: "Un último vistazo antes de subir",
      id: "check",
      body: [
        "Abre el PDF y amplía cada página. Comprueba que las páginas estén en el orden correcto, que no falte nada en los bordes y que se pueda leer cada sello y cada firma. Si una página se ve claramente peor que las demás, vuelve a tomar esa foto con luz de día y arma el PDF otra vez.",
      ],
    },
    {
      heading: "Formularios con una foto pegada",
      id: "pasted-photo",
      body: [
        "Un formulario de solicitud ya llenado suele llevar una foto tamaño pasaporte pegada en un recuadro, y el portal verifica que la cara se reconozca. Con 300 KB, un formulario de tres páginas conserva esa foto lo bastante clara, siempre que la página en sí esté bien fotografiada.",
        "Fotografía el formulario plano, con luz de día y sin flash, para que la foto brillante no refleje la luz. Si el recuadro de la foto sale con un reflejo, inclina un poco la hoja en dirección contraria a la ventana y vuelve a tomarla.",
      ],
    },
    {
      heading: "Nombrar y subir el archivo",
      id: "upload",
      body: [
        "Los portales suelen rechazar nombres de archivo con espacios o caracteres especiales. Dale al PDF un nombre corto, como formulario_solicitud.pdf, antes de subirlo, y guarda las fotos originales por si tienes que rehacer el PDF con otro límite.",
      ],
    },
  ],

  howToTitle: "Cómo convertir JPG a PDF de menos de 300 KB",
  steps: [
    { title: "Agrega las páginas", description: "Agrega fotos o escaneos de cada página: JPG, PNG, WEBP o GIF." },
    { title: "Organízalas", description: "Fija el orden, el tamaño de página y las imágenes por página; el límite de 300 KB ya está configurado." },
    { title: "Crea el PDF", description: "Descarga un solo PDF de menos de 300 KB, con el color y los sellos claros." },
  ],

  features: [
    { icon: "palette", title: "El color se conserva", description: "Sellos, escudos y fotos siguen claros a color con 300 KB." },
    { icon: "grid_view", title: "Varios elementos por página", description: "Dos o cuatro recibos o tarjetas en una página, cada uno con su propia resolución." },
    { icon: "lock", title: "Nada se sube", description: "Tus documentos se comprimen y se unen en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo hago un PDF de menos de 300 KB a partir de imágenes JPG?", a: "Agrega las imágenes, organízalas y pulsa «Crear PDF». El límite de 300 KB ya está configurado; las imágenes se comprimen solo lo necesario." },
    { q: "¿Cuántas páginas puede tener un PDF de 300 KB?", a: "Tres páginas A4 siguen legibles a color; cuatro o cinco funcionan si la letra es grande. Los documentos más largos también caben, con menos detalle por página." },
    { q: "¿Los sellos de color seguirán visibles?", a: "Sí. Con 300 KB, un documento a color conserva detalle suficiente para sellos, escudos y fotos pegadas." },
    { q: "¿Puedo poner dos recibos en una misma página?", a: "Sí. Elige 2 o 4 en «Imágenes por página»." },
    { q: "¿Por qué una página se ve más borrosa que las demás?", a: "Casi siempre esa foto se tomó con peor luz. Vuelve a tomarla con luz de día y arma el PDF otra vez." },
    { q: "¿300 KB es lo mismo que 0,3 MB?", a: "Sí, 300 KB son 300.000 bytes. El PDF también cumple en los portales que cuentan 1 KB como 1024 bytes." },
    { q: "¿Se suben mis archivos?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿La foto pegada en mi formulario se seguirá reconociendo?", a: "Sí, con 300 KB para un formulario de hasta tres o cuatro páginas, siempre que lo hayas fotografiado sin reflejos sobre la foto." },
    { q: "¿Puedo mezclar escaneos y fotos del teléfono en el mismo PDF?", a: "Sí. Cada imagen se ajusta al mismo tamaño de página y el límite se reparte según su superficie, así que un escaneo grande y una foto pequeña quedan con una nitidez parecida." },
  ],

  security:
    "Las imágenes de tus documentos se comprimen y se unen en un PDF en tu dispositivo, dentro de tu navegador. No se sube ni se guarda nada en ningún lugar.",
};

export default content;
