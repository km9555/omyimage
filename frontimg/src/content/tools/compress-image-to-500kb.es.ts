import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-500kb (variant of compress-image,
 * 500 KB). Target query: «Comprimir imagen a 500 KB»; secondary «reducir foto
 * a 500 KB». Angle: medio mega sin pérdida visible — capturas, tiendas
 * online, sitios web y correo.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-500kb",
  locale: "es",
  name: "Comprimir imagen a 500 KB",
  tagline:
    "Comprime fotos, capturas de pantalla y escaneos a menos de 500 KB sin pérdida visible: para portales, correo, tiendas online y sitios web. Lotes completos de una vez, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 500 KB – sin perder calidad | oMyImage",
  metaDescription:
    "Comprimir imagen a 500 KB gratis y online: reduce tu foto a 500 KB sin pérdida visible, con capturas nítidas, para portales, tiendas, sitios web y correo.",

  intro:
    "500 KB —medio megabyte— es el límite de subida de muchos portales de empleo y de educación, tiendas online, foros y plataformas escolares, y un tope sensato para las imágenes de un sitio web. Es un presupuesto generoso: la mayoría de las fotos vuelven viéndose exactamente igual que el original, solo que con una fracción del peso. Agrega una imagen o cien, y cada una se guarda como JPG de menos de 500 KB con la mayor calidad que cabe.",

  sections: [
    {
      heading: "Medio megabyte da para mucho",
      id: "plenty",
      body: [
        "Una foto de teléfono de 12 megapíxeles suele pesar entre 3 y 5 MB. Por debajo de 500 KB normalmente conserva unos 2000 × 1500 píxeles o más, con una calidad en la que no notas la diferencia en la pantalla de un teléfono o de un PC. Las texturas finas, como pasto, grava o una camisa estampada, son las más difíciles de comprimir; solo en esos casos la herramienta reduce las dimensiones, y únicamente si no queda otra.",
        "Como el límite es amplio, no hace falta recortar ni preparar la foto antes. Agrégala tal como está.",
      ],
    },
    {
      heading: "Capturas de pantalla con texto nítido",
      id: "screenshots",
      body: [
        "Las capturas de pantalla suelen guardarse en PNG, y una de pantalla completa puede ocupar varios megabytes. Convertida a JPG de menos de 500 KB, el texto se mantiene nítido a tamaño real, así que la captura de un recibo, de un chat o de un mensaje de error se sigue leyendo sin esfuerzo.",
        "Para capturas que son sobre todo color plano con texto —un documento o una página de ajustes—, WEBP deja el texto aún más limpio con el mismo peso. Elige WEBP en el ajuste de formato si el sitio donde vas a subirla lo acepta.",
      ],
    },
    {
      heading: "Imágenes para sitios web y tiendas online",
      id: "websites",
      body: [
        "Cada imagen de una página web tiene que descargarse antes de aparecer, así que las fotos pesadas vuelven lentas las páginas, sobre todo con la conexión de datos del teléfono. 500 KB es un máximo razonable para un banner grande o una foto de producto; las imágenes pequeñas, como las miniaturas, deberían pesar mucho menos.",
        "Las fotos de producto para marketplaces también encajan bien con este límite: conservan detalle suficiente para que el cliente amplíe texturas y etiquetas, y a la vez se suben rápido.",
      ],
    },
    {
      heading: "Muchos archivos a la vez",
      id: "batch",
      body: [
        "Agrega una carpeta entera —un juego de fotos de producto, las imágenes de un anuncio, un álbum para mandar por correo— y todas se comprimen a menos de 500 KB de una sola vez. Descárgalas una por una o juntas en un ZIP. Las imágenes que ya son JPG de menos de 500 KB se quedan intactas.",
      ],
    },
    {
      heading: "Enviar fotos por correo electrónico",
      id: "email",
      body: [
        "La mayoría de los servicios de correo limitan los adjuntos a unos 20–25 MB por mensaje, y los adjuntos crecen alrededor de un tercio al enviarse, porque el correo los codifica como texto. Diez fotos de teléfono de 4 MB cada una no pasan; esas mismas diez a 500 KB forman un mensaje de unos 7 MB que cualquier servicio acepta.",
        "Quien las recibe sigue teniendo fotos lo bastante grandes para verlas a pantalla completa e imprimirlas en tamaño postal, sin esperar una descarga enorme.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 500 KB",
  steps: [
    { title: "Agrega tus imágenes", description: "Selecciona o arrastra una o varias fotos, capturas o escaneos: JPG, PNG o WEBP." },
    { title: "Comprime a menos de 500 KB", description: "El límite de 500 KB ya está configurado; elige JPG o WEBP." },
    { title: "Descarga", description: "Descarga cada imagen, o todas juntas en un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Sin pérdida visible", description: "Con medio megabyte disponible, las fotos conservan su aspecto completo y casi toda su resolución." },
    { icon: "screenshot_monitor", title: "Capturas nítidas", description: "Las capturas PNG pesadas se convierten en archivos JPG o WEBP ligeros con el texto legible." },
    { icon: "lock", title: "Privado", description: "La compresión ocurre en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una imagen a 500 KB?", a: "Agrégala aquí y pulsa «Comprimir»: el límite de 500 KB ya está configurado. El resultado es un JPG de menos de 500 KB con la mejor calidad que cabe." },
    { q: "¿Notaré alguna diferencia con 500 KB?", a: "Normalmente no. En la mayoría de las fotos, 500 KB bastan para que se vean idénticas al original en la pantalla de un teléfono o de un PC." },
    { q: "¿500 KB es un buen peso para las imágenes de un sitio web?", a: "Como máximo para banners grandes y fotos de producto, sí. Las imágenes más pequeñas, como las miniaturas, deberían quedar muy por debajo de 100 KB." },
    { q: "¿Elijo JPG o WEBP?", a: "JPG funciona en todas partes. WEBP da algo más de calidad con el mismo peso y conviene para sitios web, pero algunos formularios y apps antiguas no lo aceptan." },
    { q: "¿500 KB es lo mismo que 0,5 MB?", a: "Sí. 500 KB son 500.000 bytes, es decir, medio megabyte. El archivo también queda dentro del límite en los sitios que cuentan 1 KB como 1024 bytes." },
    { q: "¿El texto pequeño de una captura sigue siendo legible?", a: "Sí. Con 500 KB, una captura de pantalla completa conserva su resolución total en casi todos los casos, así que el texto queda tan nítido como en el original." },
    { q: "¿Puedo reducir 50 fotos a 500 KB cada una de una vez?", a: "Sí. Agrégalas todas juntas; cada una vuelve con menos de 500 KB y puedes descargarlas en un único archivo ZIP." },
    { q: "¿Cuántas fotos de 500 KB caben en un correo?", a: "Con un límite típico de 25 MB para adjuntos, unas 35–40, porque los adjuntos crecen cerca de un tercio al enviarse. Para más, manda varios correos o comparte un enlace." },
    { q: "¿Se suben mis fotos a algún servidor?", a: "Con imágenes de tamaño normal, no: todo se comprime en tu navegador. Solo una imagen de más de unos 16 megapíxeles va a nuestro servidor, que la borra en aproximadamente una hora." },
  ],

  security:
    "Las fotos, capturas y escaneos se comprimen en tu dispositivo, dentro de tu navegador. Con fotos de tamaño normal no se sube ni se guarda nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se borra en aproximadamente una hora.",
};

export default content;
