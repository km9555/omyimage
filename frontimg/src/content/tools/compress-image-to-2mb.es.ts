import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-2mb (variant of compress-image,
 * 2 MB). Target query: «Comprimir imagen a 2 MB»; secondary «reducir foto a
 * 2 MB». Angle: el límite de subida por defecto de PHP, fotos de cámara
 * grandes y la impresión después de comprimir.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-2mb",
  locale: "es",
  name: "Comprimir imagen a 2 MB",
  tagline:
    "Comprime fotos grandes de teléfono y de cámara a menos de 2 MB —casi siempre a resolución completa— para subirlas a sitios web, formularios, foros y correo. Rápido, gratis y privado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 2 MB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 2 MB gratis y sin registro: reduce tu foto a 2 MB, casi siempre a resolución completa, para formularios, foros y sitios web que la rechazan.",

  intro:
    "Los teléfonos actuales toman fotos de 3 a 12 MB, y muchísimos sitios web todavía se detienen en 2 MB por archivo. Esta página comprime tus fotos hasta quedar justo por debajo de esa línea, manteniéndolas lo más parecidas posible al original: en la mayoría de los casos se conserva la resolución completa y solo se elimina el exceso que no se ve. Agrega una foto o un lote entero y cada una vuelve como JPG de menos de 2 MB.",

  sections: [
    {
      heading: "Por qué tantos sitios se detienen en 2 MB",
      id: "why-2mb",
      body: [
        "PHP, el lenguaje detrás de una gran parte de los sitios web, trae por defecto un límite de subida de 2 MB, y muchos sitios nunca lo cambian. Por eso la misma cifra aparece en formularios de contacto, portales de empleo, sistemas escolares, foros y páginas de pequeños negocios: el límite suele venir de la configuración del servidor, no de una decisión sobre lo que necesita una foto.",
        "El efecto práctico es el mismo: un archivo de 2,1 MB se rechaza, a menudo con un error poco claro. Comprimirlo a algo menos de 2 MB lo soluciona sin que la foto se vea más pequeña.",
      ],
    },
    {
      heading: "Resolución completa, en la mayoría de los casos",
      id: "full-res",
      body: [
        "Un JPG de 12 megapíxeles con buena calidad ocupa aproximadamente 2–4 MB. Para bajar de 2 MB, la herramienta primero reduce un poco la calidad del JPG —un cambio que no notarás a los tamaños normales de visualización— y conserva cada píxel. Solo las fotos muy grandes o con muchísimo detalle, como las de 48 o 200 megapíxeles, también se escalan.",
        "Si una foto ya es un JPG de menos de 2 MB, se devuelve sin tocarla.",
      ],
    },
    {
      heading: "Fotos grandes de cámara",
      id: "camera",
      body: [
        "Las fotos que salen directamente de una cámara o del modo de alta resolución de un teléfono pueden pesar 15–30 MB. Si una tiene más píxeles de los que tu navegador puede manejar a la vez —los navegadores del teléfono tienen los límites más bajos—, primero se abre a un tamaño reducido y después se comprime a menos de 2 MB. En cualquier caso, el resultado sigue teniendo varios miles de píxeles de ancho, mucho más de lo que muestra cualquier sitio web.",
        "Las exportaciones en PNG de las apps de edición se comportan igual: una foto PNG de 20 MB se convierte en un JPG de menos de 2 MB sin ningún cambio visible.",
      ],
    },
    {
      heading: "Si un sitio sigue rechazando el archivo",
      id: "rejected",
      body: [
        "Algunos sitios cuentan 2 MB como 2.000.000 bytes y otros como 2.097.152; la herramienta se queda por debajo de 2.000.000, así que ambos lo aceptan. Si la subida sigue fallando, revisa las demás reglas: los formatos permitidos (algunos solo aceptan JPG), un ancho o alto máximo, o un límite para el peso total de todos los archivos juntos en vez de para cada uno.",
      ],
    },
    {
      heading: "¿Una foto de 2 MB sirve todavía para imprimir?",
      id: "print",
      body: [
        "Sí, para impresiones del día a día. Una foto de 12 megapíxeles que conserva su resolución completa por debajo de 2 MB tiene unos 4000 × 3000 píxeles: suficiente para una copia nítida de 10 × 15 cm y para A4 con calidad de laboratorio fotográfico. La ligera bajada de calidad del JPG no se ve en papel a una distancia normal.",
        "Para impresiones grandes o profesionales, guarda y envía el archivo original; la compresión sirve para subir y compartir, no para archivar tus fotos.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una foto a 2 MB",
  steps: [
    { title: "Agrega tus fotos", description: "Selecciona o arrastra fotos grandes: JPG, PNG o WEBP, una o varias." },
    { title: "Comprime a menos de 2 MB", description: "El límite de 2 MB ya está configurado; la calidad solo baja lo necesario." },
    { title: "Descarga y sube", description: "Descarga las fotos una por una o en un ZIP, listas para subir." },
  ],

  features: [
    { icon: "photo_camera", title: "Conserva la resolución", description: "La mayoría de las fotos conservan cada píxel; solo las muy grandes se reducen." },
    { icon: "upload_file", title: "Cumple los límites de subida", description: "Cada archivo queda por debajo de 2.000.000 bytes y se acepta cuente como cuente el sitio los megabytes." },
    { icon: "lock", title: "Privado", description: "Las fotos se comprimen en tu navegador y nunca se envían a un servidor." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una foto a 2 MB?", a: "Agrégala aquí y pulsa «Comprimir»: el límite de 2 MB ya está configurado. Obtienes un JPG de menos de 2 MB, normalmente con la resolución original." },
    { q: "¿Por qué los sitios web limitan las subidas a 2 MB?", a: "A menudo porque 2 MB es el límite de subida por defecto de PHP y muchos sitios lo dejan así. Es una configuración del servidor, no un juicio sobre tu foto." },
    { q: "¿Mi foto va a perder resolución?", a: "Normalmente no. La herramienta baja un poco la calidad del JPG antes de tocar las dimensiones en píxeles, y solo las fotos muy grandes se reducen." },
    { q: "¿Puedo reducir una foto de 20 MB a 2 MB?", a: "Sí. Las fotos grandes se procesan en tu navegador y vuelven con menos de 2 MB, todavía con varios miles de píxeles de ancho." },
    { q: "¿2 MB es lo mismo que 2000 KB o 2048 KB?", a: "Se usan las dos cifras. La herramienta deja el archivo por debajo de 2.000.000 bytes, que queda dentro del límite en cualquiera de los dos casos." },
    { q: "¿Qué pasa si mi foto ya pesa menos de 2 MB?", a: "Si es un JPG de menos de 2 MB, recibes el original sin cambios." },
    { q: "¿Puedo comprimir varias fotos para un mismo formulario?", a: "Sí. Agrégalas todas; cada una vuelve con menos de 2 MB. Si el formulario limita la suma de todos los archivos, elige mejor un límite menor por foto." },
    { q: "¿Puedo imprimir una foto después de comprimirla a 2 MB?", a: "Sí. La mayoría de las fotos conservan su resolución completa, más que suficiente para copias de 10 × 15 cm y A4. Para pósteres o trabajos profesionales, imprime desde el original." },
    { q: "¿Funciona en el teléfono?", a: "Sí. Abre la página en el navegador de tu teléfono, elige las fotos de tu galería y descarga los resultados. Las fotos con demasiados píxeles para el navegador del teléfono se abren primero a un tamaño reducido." },
  ],

  security:
    "Las fotos se comprimen en tu dispositivo, dentro de tu navegador. Con fotos de tamaño normal no se sube ni se guarda nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se borra en aproximadamente una hora.",
};

export default content;
