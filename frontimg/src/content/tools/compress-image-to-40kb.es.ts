import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-40kb (variant of compress-image,
 * preset targetKb 40). Primary query: «Comprimir imagen a 40 KB»; secondary:
 * «reducir foto a 40 KB». Angle: 40 KB as the SAFE target inside a
 * "20–50 KB" photo range, digitising a printed photo, and colour casts.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-40kb",
  locale: "es",
  name: "Comprimir imagen a 40 KB",
  tagline:
    "Comprime una foto a menos de 40 KB para solicitudes en línea: una cara nítida y natural con un límite exacto, y una apuesta segura para campos de foto de «20–50 KB». Gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 40 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 40 KB: foto tipo carnet con tonos naturales, segura para campos de 20 a 50 KB. Reduce tu foto a 40 KB gratis, en tu navegador y sin registro.",

  intro:
    "40 KB es un límite de foto por derecho propio en muchos formularios de solicitud, y también la cifra sensata a la que apuntar cuando un formulario pide una foto «de entre 20 KB y 50 KB»: holgadamente por encima del mínimo y holgadamente por debajo del máximo. Con este peso, una foto tipo carnet conserva tonos de piel naturales y detalle claro alrededor de los ojos. Agrega tu foto y obtendrás un JPG de menos de 40 KB con la calidad más alta que cabe.",

  sections: [
    {
      heading: "Un objetivo seguro dentro de un rango de 20–50 KB",
      id: "inside-range",
      body: [
        "Apuntar justo al tope de un rango es arriesgado: un archivo de 49,9 KB en un equipo puede contarse como 51 KB en un formulario que mide de otra forma. 40 KB deja margen por ambos lados, así que la foto se acepta cuente como cuente el formulario, y aun así lleva el doble de detalle que un archivo de 20 KB.",
        "Si el formulario indica el rango y alguno de tus archivos ya está dentro, no hace falta volver a comprimirlo: solo hay que cambiar los que quedan fuera.",
      ],
    },
    {
      heading: "Qué conserva una foto de 40 KB",
      id: "detail",
      body: [
        "Una foto de cabeza y hombros de unos 400 × 500 píxeles cabe en 40 KB con buena calidad: suficiente para que las pestañas y los mechones de cabello se distingan uno por uno, y de sobra para que la foto se imprima nítida en una credencial o en un comprobante de examen.",
        "Recorta a cabeza y hombros antes de comprimir, para que el presupuesto se gaste en la cara y no en la habitación que hay detrás.",
      ],
    },
    {
      heading: "Usar una foto carnet impresa",
      id: "printed-photo",
      body: [
        "Si solo tienes una foto impresa de estudio, ponla plana con luz de día y fotografíala desde justo encima, con el teléfono paralelo a ella. Inclina la copia un poco lejos de la ventana si ves reflejos, y haz que la foto llene el encuadre.",
        "Recorta el borde blanco y la mesa antes de comprimir. Una copia limpia de una foto impresa se comprime bien, porque las fotos de estudio ya tienen iluminación pareja y fondo liso.",
      ],
    },
    {
      heading: "Colores naturales",
      id: "colours",
      body: [
        "Las lámparas de interior vuelven la piel anaranjada, y algunas cámaras de teléfono tiñen las caras de azul o de verde. Los formularios que revisan las fotos a veces rechazan un tono de color muy marcado, y la compresión no puede corregirlo. Toma la foto con luz de día cerca de una ventana, con las luces del techo apagadas, y los colores saldrán naturales.",
      ],
    },
    {
      heading: "Una sola foto para varios formularios",
      id: "several-forms",
      body: [
        "Casi todo el mundo necesita la misma foto tipo carnet para más de una solicitud, y cada formulario fija su propio límite. Guarda la foto original —el archivo a tamaño completo de tu teléfono o del estudio— en una carpeta segura y crea cada versión para subir a partir de ella: 40 KB para este formulario, 20 KB o 100 KB para el siguiente.",
        "Volver a comprimir una copia ya comprimida pierde un poco más de detalle cada vez, así que una foto que se apretó a 20 KB y luego tiene que pesar 40 KB nunca se verá tan bien como una hecha desde el original. Nombra cada versión según su peso, por ejemplo foto_40kb.jpg, para subir el archivo correcto a cada formulario.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una foto a 40 KB",
  steps: [
    { title: "Agrega tu foto", description: "Recórtala a cabeza y hombros y agrégala: JPG, PNG o WebP." },
    { title: "Comprime a menos de 40 KB", description: "El límite de 40 KB ya está puesto; cámbialo si tu formulario necesita otro número." },
    { title: "Descargar", description: "Descarga el JPG y adjúntalo a tu solicitud." },
  ],

  features: [
    { icon: "face", title: "Caras naturales y nítidas", description: "Unos 400 × 500 píxeles con buena calidad: tonos de piel y detalle fino conservados." },
    { icon: "verified_user", title: "Seguro dentro de rangos", description: "40 KB pasa en campos de foto de 20–50 KB con margen por ambos lados." },
    { icon: "lock", title: "Privado", description: "Tu foto se comprime en tu navegador y no sale de tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una foto a 40 KB?", a: "Agrégala aquí y haz clic en «Comprimir»: el límite de 40 KB ya está puesto. Obtienes un JPG de menos de 40 KB con la calidad más alta que cabe." },
    { q: "Mi formulario dice de 20 a 50 KB: ¿40 KB está bien?", a: "Sí. 40 KB queda con seguridad dentro del rango, cuente como cuente el formulario los kilobytes." },
    { q: "¿Cuántos píxeles tiene una foto de 40 KB?", a: "Normalmente unos 400 × 500 píxeles para una foto de cabeza y hombros. Las fotos más grandes se reducen automáticamente hasta que caben." },
    { q: "¿Cómo convierto una foto carnet impresa en un archivo?", a: "Fotografíala plana, con luz de día y desde justo encima, evitando reflejos; recorta el borde y comprímela aquí." },
    { q: "¿Por qué mi foto se ve anaranjada o azulada?", a: "La luz de interior y algunos ajustes del teléfono tiñen la foto. Vuelve a tomarla con luz de día; la compresión mantiene los colores tal como están y no puede corregirlos." },
    { q: "¿Una foto de 40 KB se imprime bien en una credencial?", a: "Sí. Las credenciales y los comprobantes imprimen la foto en pequeño, y 40 KB es detalle más que suficiente para eso." },
    { q: "¿40 KB es lo mismo que 0,04 MB?", a: "Sí, 40 KB son 40 000 bytes. El archivo también pasa en formularios que cuentan 1 KB como 1024 bytes." },
    { q: "¿Conviene guardar la foto original después de comprimirla?", a: "Sí. Crea cada tamaño que necesites a partir del original, no de una copia comprimida: cada ronda de compresión extra pierde algo de detalle." },
  ],

  security:
    "Tu foto se comprime en tu propio dispositivo, dentro del navegador. Con fotos de tamaño normal no se sube ni se almacena nada en ninguna parte. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, llega a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
