import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/jpg-a-pdf-menos-de-100kb (variant of image-to-pdf,
 * 100 KB limit on the whole PDF). Target query: «JPG a PDF de menos de
 * 100 KB». Angle: el límite más estricto, casi siempre para UNA sola página
 * — preparar la foto, escanear o fotografiar.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-100kb",
  locale: "es",
  name: "JPG a PDF de menos de 100 KB",
  tagline:
    "Convierte la foto o el escaneo de un documento en un PDF de menos de 100 KB, para los formularios con el límite de PDF más estricto. Las imágenes se comprimen solo lo que el archivo completo necesita, en tu navegador y sin subir nada.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG a PDF de menos de 100 KB – gratis y online | oMyImage",
  metaDescription:
    "Convierte JPG a PDF de menos de 100 KB gratis y sin registro: una página de certificado o identificación legible, comprimida solo lo justo y en tu navegador.",

  intro:
    "Los formularios que piden un documento «en formato PDF, máximo 100 KB» —un certificado, una identificación, una constancia de ingresos o de estudios, un certificado de calificaciones— casi siempre se refieren a una sola página. Una foto de esa página tomada con el teléfono pesa ya 3–5 MB, así que meterla tal cual en un PDF da un archivo de treinta a cincuenta veces más grande de lo permitido. Esta página arma el PDF y, si pasa de 100 KB, vuelve a comprimir la imagen que contiene solo lo necesario para que todo el archivo entre, con el texto tan nítido como permite el límite.",

  sections: [
    {
      heading: "Qué cabe en un PDF de 100 KB",
      id: "what-fits",
      body: [
        "Una página A4 cabe con holgura: con 100 KB, una página completa de texto mecanografiado conserva unos 800 × 1100 píxeles con buena calidad, y un certificado con más espacio en blanco conserva aún más; suficiente para leer el texto impreso, los sellos y las firmas a un zoom normal. La estructura del PDF ocupa apenas unos kilobytes, así que casi todo el límite se destina a la imagen de la página.",
        "Dos páginas también caben, cada una con menos resolución; a partir de tres, la letra pequeña empieza a verse borrosa. Si un formulario quiere un documento largo en 100 KB, vale la pena comprobar si acepta un archivo por página.",
      ],
    },
    {
      heading: "Preparar la página",
      id: "prepare",
      body: [
        "Coloca el documento plano sobre una superficie oscura, fotografíalo justo desde arriba con luz de día y recorta todo lo que no sea la página. Una hoja limpia y con luz pareja se comprime mucho mejor que una cruzada por una sombra, y el pedazo de mesa que queda alrededor son bytes desperdiciados.",
        "Para un documento sencillo, escrito a máquina o impreso, pasarlo antes a blanco y negro con la herramienta «Imagen en blanco y negro» da un texto claramente más nítido en 100 KB. Deja a color los certificados con sellos y escudos de color.",
      ],
    },
    {
      heading: "Tamaño de página y diseño",
      id: "layout",
      body: [
        "A4 es el valor predeterminado y sirve para la mayoría de los documentos. «Ajustar a la imagen» le da a cada página la forma de la foto, sin márgenes, ideal para identificaciones y recibos. El tamaño de página casi no cambia el peso del archivo —en un PDF así casi todo es la imagen—, así que elige el que se vea mejor.",
        "La casilla del límite se puede cambiar: escribe 99 para los formularios que protestan por cualquier archivo cercano a 100 KB, o cualquier otro número.",
      ],
    },
    {
      heading: "Cuando no cabe",
      id: "too-big",
      body: [
        "Si un documento tiene muchas páginas, 100 KB puede ser simplemente demasiado poco para que sigan legibles. La herramienta igual genera el PDF más pequeño que puede y te avisa si no logró bajar del límite. En ese caso usa la página de 200 KB o de 300 KB si el formulario lo permite, o crea un PDF por página.",
      ],
    },
    {
      heading: "¿Escanear o fotografiar?",
      id: "scan-or-photo",
      body: [
        "Un escáner de cama plana es el punto de partida más limpio: luz pareja, una hoja perfectamente plana y fondo blanco, todo lo cual se comprime bien. Escanear a 150–200 DPI es más que suficiente para un PDF de 100 KB; con valores más altos solo agregas píxeles que se volverán a quitar para que quepa.",
        "El teléfono funciona casi igual de bien si fotografías la página con luz de día, justo desde arriba y sin flash. Las apps de escaneo del teléfono ayudan todavía más al enderezar la hoja y blanquear el papel; exporta el resultado como JPG y agrégalo aquí.",
      ],
    },
  ],

  howToTitle: "Cómo convertir JPG a PDF de menos de 100 KB",
  steps: [
    { title: "Agrega las imágenes de la página", description: "Agrega la foto o el escaneo de tu documento: JPG, PNG, WEBP o GIF." },
    { title: "Revisa el diseño", description: "Elige el tamaño y el orden de las páginas; el límite de 100 KB ya está configurado." },
    { title: "Crea el PDF", description: "Las imágenes se comprimen solo lo necesario y el PDF se descarga con menos de 100 KB." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Límite para el archivo completo", description: "El PDF terminado pesa menos de 100 KB, no solo cada imagen que contiene." },
    { icon: "description", title: "Páginas legibles", description: "Las imágenes se comprimen solo lo que exige el límite, así que el texto sigue nítido." },
    { icon: "lock", title: "Nada se sube", description: "Tus documentos se convierten en PDF dentro de tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo convierto un JPG a un PDF de menos de 100 KB?", a: "Agrega la imagen, revisa el tamaño de página y pulsa «Crear PDF». El límite de 100 KB ya está configurado; la imagen se comprime solo lo necesario." },
    { q: "¿Mi documento se seguirá leyendo?", a: "Con una o dos páginas, sí: con 100 KB, una página A4 conserva detalle suficiente para el texto impreso, los sellos y las firmas." },
    { q: "¿Puedo poner varias páginas en un PDF de 100 KB?", a: "Dos páginas funcionan bien; con más, cada una recibe menos píxeles. Para documentos largos usa un límite mayor si el formulario lo permite." },
    { q: "¿El tamaño de página cambia el peso del archivo?", a: "Apenas. Casi todo el PDF es la imagen; el tamaño de página solo cambia cómo se acomoda." },
    { q: "¿Qué pasa si mi PDF ya pesa menos de 100 KB?", a: "Si las imágenes ya forman un PDF de menos de 100 KB, no se recomprime nada y el PDF se arma con ellas tal como están." },
    { q: "¿100 KB es lo mismo que 0,1 MB?", a: "Sí, 100 KB son 100.000 bytes. El PDF también cumple en los formularios que cuentan 1 KB como 1024 bytes." },
    { q: "¿Se suben mis documentos?", a: "No. El PDF se crea por completo en tu navegador." },
    { q: "¿Es mejor escanear o fotografiar el documento?", a: "Las dos opciones sirven. Un escaneo queda un poco más limpio; una foto con luz de día, tomada justo desde arriba y sin flash, se le acerca mucho." },
    { q: "¿Por qué el formulario rechaza mi PDF aunque pese menos de 100 KB?", a: "Revisa las demás reglas: algunos formularios exigen un número máximo de páginas, un nombre de archivo sin espacios ni acentos, o que el documento esté en blanco y negro. El peso es solo una de las condiciones." },
  ],

  security:
    "Las imágenes de tus documentos se comprimen y se unen en un PDF en tu dispositivo, dentro de tu navegador. No se sube ni se guarda nada en ningún lugar.",
};

export default content;
