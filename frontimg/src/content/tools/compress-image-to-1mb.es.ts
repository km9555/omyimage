import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-1mb (variant of compress-image,
 * 1 MB). Target query: «Comprimir imagen a 1 MB»; secondary «reducir foto a
 * 1 MB». Angle: fotos de teléfono a resolución completa — por qué pesan
 * tanto y cómo caben en 1 MB.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-1mb",
  locale: "es",
  name: "Comprimir imagen a 1 MB",
  tagline:
    "Comprime fotos de teléfono a menos de 1 MB, casi siempre sin perder ni un píxel de resolución. Para portales, correo y apps de chat: gratis, por lotes y privado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 1 MB – resolución completa | oMyImage",
  metaDescription:
    "Comprimir imagen a 1 MB gratis y sin registro: reduce tu foto a 1 MB conservando la resolución completa, para portales, plataformas educativas y correo.",

  intro:
    "Una foto de un teléfono actual pesa entre 3 y 8 MB, y muchos sitios rechazan cualquier archivo de más de 1 MB: portales en línea y plataformas educativas, foros y anuncios clasificados, tickets de soporte, sistemas de correo antiguos. A diferencia de los límites estrictos de 20 KB o 50 KB, 1 MB alcanza para conservar una foto a resolución completa; solo hay que guardarla de forma más eficiente. Agrega tus fotos y cada una vuelve como JPG de menos de 1 MB, a tamaño completo siempre que quepa y apenas más pequeña cuando no.",

  sections: [
    {
      heading: "Por qué las fotos del teléfono pesan 3–8 MB",
      id: "why-big",
      body: [
        "Las cámaras de los teléfonos guardan los JPG con una calidad muy alta, a menudo del 90–95 %, para no perder nada antes de editar. Con 12 megapíxeles o más, esa calidad cuesta varios megabytes por foto, y buena parte se gasta en ruido del sensor y en texturas finas que no ves al tamaño normal de visualización.",
        "Volver a guardar con una calidad un poco menor elimina casi todo ese desperdicio. En una foto típica de 12 megapíxeles, bajar de 1 MB requiere una calidad de alrededor del 75–85 % —una diferencia que te costaría ver poniendo las dos lado a lado— y se conservan los 4000 × 3000 píxeles completos.",
      ],
    },
    {
      heading: "Cuando 1 MB no alcanza para el tamaño completo",
      id: "when-shrinks",
      body: [
        "Las escenas con muchísimo detalle —follaje, grava, multitudes, fotos nocturnas llenas de ruido— y las fotos de 48 o 50 megapíxeles pueden seguir pasando de 1 MB incluso con una calidad moderada. Entonces la herramienta también reduce un poco las dimensiones, eligiendo el tamaño más grande que cabe y no un valor fijo, así que una foto puede salir con 3200 píxeles de ancho en lugar de 4000.",
        "Aun así es mucha más resolución de la que muestra cualquier pantalla o vista previa de subida. La lista de resultados te avisa cada vez que una imagen se redimensionó, para que nada cambie sin que lo sepas.",
      ],
    },
    {
      heading: "Dónde aparece el límite de 1 MB",
      id: "where",
      body: [
        "Las solicitudes en línea que aceptan fotos completas en vez de fotos tipo carnet, las plataformas educativas de escuelas y universidades, los portales de trámites, los foros, los anuncios de marketplaces y los sistemas de soporte suelen limitar los adjuntos a 1 MB o 2 MB. Muchos sistemas de correo también fallan cuando un mensaje supera los 10–20 MB, que son apenas tres o cuatro fotos de teléfono sin comprimir.",
        "Reducir cada foto a 1 MB antes de adjuntarla mantiene todo dentro de esos límites sin cambiar las imágenes a simple vista.",
      ],
    },
    {
      heading: "¿1 MB, 1000 KB o 1024 KB?",
      id: "units",
      body: [
        "Algunos sitios escriben el límite como 1 MB y otros como 1000 KB o 1024 KB. Esta herramienta mantiene el archivo por debajo de 1.000.000 bytes, la lectura más estricta de todas, así que las cumple todas. Tu equipo puede mostrar el resultado como unos 0,95 MB: esa pequeña diferencia es el margen de seguridad.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 1 MB",
  steps: [
    { title: "Agrega tus fotos", description: "Selecciona o arrastra fotos JPG, PNG o WEBP directamente desde tu teléfono o cámara." },
    { title: "Comprime a menos de 1 MB", description: "El límite de 1 MB ya está configurado; cámbialo a 2 MB o 500 KB si tu sitio pide otra cosa." },
    { title: "Descarga", description: "Cada foto vuelve con menos de 1 MB, a resolución completa siempre que quepa." },
  ],

  features: [
    { icon: "photo_camera", title: "Conserva la resolución completa", description: "La mayoría de las fotos de teléfono caben en menos de 1 MB sin perder un píxel: solo se quita la calidad desperdiciada." },
    { icon: "speed", title: "Lotes rápidos", description: "Comprime un álbum entero de una vez; cada foto se procesa por separado y el conjunto se descarga en un ZIP." },
    { icon: "lock", title: "Tus fotos privadas siguen privadas", description: "Tus imágenes se procesan en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una foto a 1 MB?", a: "Agrega la foto y pulsa «Comprimir»: el límite de 1 MB ya está configurado. Descargas un JPG de menos de 1 MB con la mejor calidad que cabe." },
    { q: "¿Una foto de 1 MB se sigue imprimiendo bien?", a: "Sí, en tamaños de impresión normales. Cuando una foto conserva su resolución completa por debajo de 1 MB, se imprime como el original en tamaño postal y en A4." },
    { q: "¿Cuántos píxeles puede tener una foto de 1 MB?", a: "Normalmente los 12 megapíxeles completos de una foto de teléfono, unos 4000 × 3000. Las fotos con muchísimo detalle o muy alta resolución pueden quedar en unos 3000 píxeles de ancho para caber." },
    { q: "¿Puedo reducir una foto de 10 MB a 1 MB?", a: "Sí. Los archivos grandes no son problema: la herramienta los abre en tu navegador y busca la mejor combinación de calidad y tamaño por debajo de 1 MB." },
    { q: "¿Comprimir a 1 MB elimina los datos de ubicación?", a: "En cada foto que se vuelve a guardar, sí: un JPG nuevo no lleva metadatos EXIF, ubicación GPS incluida. Un JPG que ya pesaba menos de 1 MB se te devuelve intacto, con sus metadatos; para quitar la ubicación de esos, usa «Eliminar metadatos»." },
    { q: "¿Puedo comprimir capturas de pantalla a 1 MB?", a: "Sí. Las capturas suelen ser PNG y pueden pesar sorprendentemente mucho; se convierten a JPG de menos de 1 MB y cualquier transparencia se rellena de blanco." },
    { q: "¿1 MB es lo mismo que 1000 KB?", a: "En las unidades que usa la mayoría de los sitios, sí. La herramienta mantiene los archivos por debajo de 1.000.000 bytes, así que también cumplen un límite escrito como 1024 KB." },
    { q: "¿Cómo dejo una foto en menos de 1 MB para una solicitud en línea?", a: "Sube aquí la foto, comprímela con el límite ya configurado y adjunta el archivo descargado. Revisa también si el portal exige un formato concreto, como JPG." },
  ],

  security:
    "Tus fotos se quedan en tu dispositivo. La compresión a 1 MB se hace en tu navegador: no se sube, guarda ni comparte nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se borra en aproximadamente una hora.",
};

export default content;
