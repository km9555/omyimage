import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-200kb (variant of compress-image,
 * preset targetKb 200). Primary query: «Comprimir imagen a 200 KB»;
 * secondary: «reducir foto a 200 KB». Angle: a generous budget — full
 * application SETS (photo, ID scan, certificate) and print-worthy photos.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-200kb",
  locale: "es",
  name: "Comprimir imagen a 200 KB",
  tagline:
    "Comprime fotos y documentos escaneados a menos de 200 KB para portales de registro, admisión y empleo. Mantiene las fotos nítidas, procesa un conjunto completo a la vez y nunca sube un archivo.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 200 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 200 KB: foto, identificación y certificados como JPG nítidos para portales de empleo y admisión. Reduce tu foto a 200 KB gratis, sin subirla.",

  intro:
    "200 KB es el límite que usan los portales de registro y admisión, los sistemas de becas y convocatorias y muchos portales de empleo para cada archivo que adjuntas: una fotografía, el escaneo de tu identificación, un certificado, un historial académico. Es el doble del presupuesto de un formulario de 100 KB y cuatro veces el de uno de 50 KB, así que aquí el objetivo no es solo caber, sino caber y seguir pareciéndose al original. Agrega el conjunto completo y cada archivo vuelve como un JPG de menos de 200 KB con la calidad más alta que cabe.",

  sections: [
    {
      heading: "Un límite generoso: aprovéchalo",
      id: "generous",
      body: [
        "A 200 KB, un retrato conserva unos 1200 × 1600 píxeles con calidad alta: lo bastante claro para imprimirlo en tamaño carnet y para hacer zoom en pantalla. Como la herramienta busca la calidad más alta por debajo del límite en lugar de aplicar un ajuste fijo, una foto limpia puede salir con una calidad casi igual a la original, mientras que una con ruido y mucho detalle recibe un poco más de compresión.",
        "Si tu foto ya es un JPG bien comprimido de menos de 200 KB, la recibes sin tocar: no hay motivo para volver a comprimir un archivo que el formulario ya va a aceptar.",
      ],
    },
    {
      heading: "Dónde aparecen los límites de 200 KB",
      id: "where",
      body: [
        "Las convocatorias de empleo público, las inscripciones escolares y universitarias, las solicitudes de becas y muchos portales de empleo limitan cada archivo a unos 100–300 KB, y 200 KB es la cifra más común. Esos mismos formularios suelen pedir varios archivos: una foto formal, una firma, una identificación, un título o una constancia de calificaciones y, a veces, un comprobante de domicilio o una carta de recomendación.",
        "Lee por separado el requisito de cada campo: la foto puede admitir 200 KB mientras que la firma solo admite 20 o 50 KB. Esta página fija 200 KB; las páginas de 20 KB y 50 KB, enlazadas más arriba, ya vienen ajustadas para los campos más pequeños.",
      ],
    },
    {
      heading: "Certificados e identificaciones escaneados de menos de 200 KB",
      id: "scans",
      body: [
        "Un certificado A4 completo fotografiado con el teléfono pesa de 3 a 6 MB, y casi todo ese peso describe la textura del papel y la luz desigual. Fotografíalo plano, con luz de día, llenando el encuadre, y recorta el fondo antes de comprimir; el resultado cabe en 200 KB con el texto y los sellos perfectamente legibles.",
        "Los sellos y las firmas de color en un certificado son un buen motivo para mantenerlo en color. Para páginas de texto simple, pasarlas antes a blanco y negro con la herramienta «Imagen en blanco y negro» deja todavía más presupuesto para unas letras nítidas.",
      ],
    },
    {
      heading: "Revisa cada archivo antes de enviarlo",
      id: "check",
      body: [
        "La lista de resultados muestra el nuevo peso de cada archivo y, cuando hubo que redimensionarlo, sus nuevas dimensiones. Abre uno o dos antes de subirlos: el texto debe leerse al 100 % de zoom, las caras no deben verse corridas ni manchadas y el fondo de color de una foto debe seguir siendo un solo color plano.",
        "Después, cambia el nombre de los archivos si el portal es estricto con los nombres —muchos rechazan espacios, paréntesis, acentos o la letra ñ— y guarda tus originales. Si más adelante un formulario pide otro límite, vuelve a comprimir desde el original y no desde la copia de 200 KB, para que la calidad que se pierde se pierda una sola vez.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 200 KB",
  steps: [
    { title: "Agrega tus archivos", description: "Selecciona o arrastra la foto y los escaneos que necesitas subir: JPG, PNG o WebP." },
    { title: "Comprime a menos de 200 KB", description: "El límite de 200 KB ya está puesto; puedes escribir otro para un campo más estricto." },
    { title: "Descarga el conjunto", description: "Cada archivo pesa menos de 200 KB; descárgalos uno a uno o todos juntos en un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Calidad casi original", description: "Con 200 KB disponibles, las fotos conservan casi toda su resolución y detalle: la herramienta aprovecha todo el presupuesto." },
    { icon: "folder_zip", title: "Toda la solicitud de una vez", description: "Foto, identificación escaneada y certificados en un solo lote, cada uno de menos de 200 KB, descargados juntos en un ZIP." },
    { icon: "lock", title: "Sin subidas", description: "Los documentos de identidad se comprimen en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una foto a 200 KB?", a: "Agrégala y haz clic en «Comprimir»: el límite de 200 KB ya está puesto. Obtienes un JPG de menos de 200 KB con la mejor calidad que cabe." },
    { q: "¿Cómo hago que el escaneo de un certificado pese menos de 200 KB?", a: "Fotografía el certificado plano con luz pareja, recorta todo lo que lo rodea y comprímelo aquí. El texto y los sellos siguen siendo legibles muy por debajo de 200 KB." },
    { q: "¿Una foto de 200 KB sirve para imprimir?", a: "Para tamaño carnet o de identificación, sí: 200 KB conserva píxeles de sobra. Para una impresión grande, usa la foto original." },
    { q: "¿Puedo usar 199 KB o 190 KB en lugar de 200?", a: "Sí. Escribe cualquier número en el campo de tamaño; 200 KB es solo el valor inicial." },
    { q: "¿Y si mi foto ya pesa menos de 200 KB?", a: "Si ya es un JPG por debajo del límite, recibes el original sin tocar. Si no, se convierte a JPG y se mantiene por debajo de 200 KB." },
    { q: "¿JPG o WebP para un límite de 200 KB?", a: "JPG. Los portales de registro y de empleo casi siempre aceptan JPG, mientras que muchos todavía rechazan WebP." },
    { q: "¿Comprimir cambia los colores de la foto?", a: "No de forma visible con este peso. JPG guarda el color con un poco menos de precisión que el brillo, pero a 200 KB la diferencia no se nota." },
  ],

  security:
    "Las fotos, identificaciones y certificados se comprimen en tu dispositivo, dentro de tu navegador. Con tamaños de foto normales no se sube ni se guarda nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se envía a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
