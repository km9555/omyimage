import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/foto-de-perfil-whatsapp (variant of resize-image).
 * Target query: «foto de perfil de WhatsApp» (14.8K/mo, MX, KD 0) – priority page;
 * secondary «foto de perfil de WhatsApp sin recortar».
 */
const content: ToolPageContent = {
  toolId: "whatsapp-dp-resizer",
  locale: "es",
  name: "Foto de perfil de WhatsApp sin recortar",
  tagline:
    "Pon una foto completa como foto de perfil de WhatsApp sin recortarla: encajada en un cuadrado con un color de fondo, o recortada para llenarlo. 500 × 500 px, gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Foto de perfil de WhatsApp sin recortar, gratis | oMyImage",
  metaDescription:
    "Pon tu foto de perfil de WhatsApp completa, sin recortar: encaja la foto en un cuadrado de 500 × 500 px con el fondo que elijas. También para grupos y Business.",

  intro:
    "WhatsApp solo acepta fotos de perfil cuadradas. Si eliges una foto de grupo muy ancha o una foto de cuerpo entero en vertical, te obliga a recortar casi todo. Esta herramienta resuelve el problema al revés: encaja la foto completa dentro de un cuadrado y rellena el espacio libre con un color, así WhatsApp ya no tiene nada que cortar. Agrega una foto, elige el color del borde y descarga una imagen de 500 × 500 píxeles que entra entera como foto de perfil de WhatsApp, sin recortar a nadie.",

  sections: [
    {
      heading: "Tu foto de perfil completa, sin recortar",
      id: "no-crop",
      body: [
        "La herramienta se abre con la opción «Rellenar con borde» activada. Tu foto se reduce hasta que cabe entera en el cuadrado, y las franjas de arriba y abajo —o de los lados— se rellenan con el color del borde, blanco por defecto. Cuando WhatsApp muestra después el cuadro de recorte, este ya abarca toda la imagen: solo tienes que confirmar y nadie del borde de la foto se queda fuera.",
        "Elige un color de borde que combine con la foto: el blanco y el negro son neutros, y un color tomado de la propia foto suele verse más natural que cualquiera de los dos. Cambia a «Recortar y rellenar» si prefieres un primer plano que ocupe todo el círculo.",
      ],
    },
    {
      heading: "El círculo oculta las esquinas",
      id: "circle",
      body: [
        "WhatsApp muestra las fotos de perfil como un círculo, tanto en la lista de chats como en tu perfil, así que las esquinas del cuadrado nunca se ven. Las caras o los textos que estén cerca de las esquinas quedan cortados; mantén lo importante en el centro.",
        "Con una foto rellenada, el círculo recorta casi solo el borde de color, y por eso este método funciona tan bien. Eso sí, una foto de grupo muy ancha se verá pequeña dentro del círculo. Si las caras quedan diminutas, recorta antes un poco la foto para que las personas ocupen más espacio en el encuadre.",
      ],
    },
    {
      heading: "Qué tamaño usar para la foto de perfil de WhatsApp",
      id: "size",
      body: [
        "WhatsApp no publica un tamaño oficial para la foto de perfil y vuelve a comprimir cualquier imagen que subas. 500 × 500 píxeles es un tamaño muy usado que se ve nítido en el teléfono sin pesar de más; 192 × 192 píxeles suele citarse como el mínimo que todavía se ve aceptable. Si quieres un cuadrado más grande, cambia el ancho y el alto debajo de la plantilla, por ejemplo a 1080 × 1080. Los dos valores deben ser iguales para que la imagen siga siendo cuadrada.",
        "El mismo tamaño sirve para la foto de perfil de WhatsApp Business. Ahí un logotipo suele verse mejor con un borde blanco alrededor, para que el círculo no corte las letras.",
      ],
    },
    {
      heading: "Cómo ponerla como foto de perfil",
      id: "set",
      body: [
        "Guarda la imagen descargada en tu teléfono, abre WhatsApp, entra en Ajustes y toca tu foto de perfil. Luego elige Editar o el icono de la cámara y selecciona la imagen en tu galería. Como ya es cuadrada, el paso de recorte no cambia nada. En una PC, descárgala ahí mismo y elígela de la misma forma en WhatsApp Web o en la aplicación de escritorio.",
      ],
    },
    {
      heading: "Fotos para grupos y estados",
      id: "groups",
      body: [
        "Las fotos de grupo también son cuadrados que se muestran como círculo. Con el mismo truco, una foto completa del equipo, de la familia o el logotipo de un club queda visible entera como imagen del grupo. Para un estado, que es una imagen vertical a pantalla completa, usa en su lugar la plantilla WhatsApp Status (1080 × 1920) de la lista de plantillas.",
      ],
    },
  ],

  howToTitle: "Cómo poner una foto completa de perfil en WhatsApp",
  steps: [
    { title: "Agrega tu foto", description: "Selecciona un JPG, PNG, WEBP, GIF o BMP, con cualquier forma: vertical, horizontal o panorámica." },
    { title: "Elige el color del borde", description: "«Rellenar con borde» ya está activado; elige blanco, negro o cualquier color para el espacio libre." },
    { title: "Descarga y ponla", description: "Descarga la imagen cuadrada y ponla como foto de perfil, sin tener que recortar nada." },
  ],

  features: [
    { icon: "crop_square", title: "Sin recortar", description: "La foto completa cabe en el cuadrado, así WhatsApp no tiene nada que cortar." },
    { icon: "palette", title: "Cualquier color de borde", description: "Rellena el espacio libre con blanco, negro o un color que combine con la foto." },
    { icon: "lock", title: "Privado", description: "Tu foto se redimensiona en tu dispositivo y nunca se sube." },
  ],

  faqs: [
    { q: "¿Cómo pongo una foto completa de perfil en WhatsApp sin recortarla?", a: "Agrégala aquí con «Rellenar con borde» seleccionado. La foto completa se encaja en un cuadrado con un color de fondo, así el paso de recorte de WhatsApp la conserva entera." },
    { q: "¿Cuál es el tamaño correcto de la foto de perfil de WhatsApp?", a: "WhatsApp no tiene un tamaño oficial. 500 × 500 píxeles es una opción habitual que se ve nítida; 192 × 192 píxeles suele citarse como el mínimo." },
    { q: "¿Por qué WhatsApp recorta mi foto?", a: "Porque solo acepta imágenes cuadradas y las muestra como círculo. Una foto ancha o alta tiene que recortarse, a menos que antes la rellenes hasta formar un cuadrado." },
    { q: "¿Puedo elegir el color de fondo?", a: "Sí. El blanco viene por defecto; en «Color del borde» puedes elegir negro o cualquier otro color." },
    { q: "¿Funciona con WhatsApp Business?", a: "Sí. Las fotos de perfil de WhatsApp Business también son cuadrados que se ven como círculo; los logotipos lucen mejor con un borde blanco alrededor." },
    { q: "¿Puedo crear una foto de grupo con esta herramienta?", a: "Sí. Las fotos de grupo también son cuadrados que se muestran como círculo, y al rellenar con borde la foto del grupo o el logotipo se ve completo." },
    { q: "¿WhatsApp le baja la calidad a la foto?", a: "WhatsApp comprime las fotos de perfil por su cuenta. Partir de un cuadrado nítido de 500 × 500 píxeles o más da el mejor resultado después de esa compresión." },
    { q: "¿Por qué mi foto de perfil de WhatsApp se ve borrosa?", a: "Casi siempre la imagen original era demasiado pequeña, o se recortó mucho y luego se amplió. Empieza con una foto de al menos 500 píxeles en el lado corto y rellénala con borde en lugar de usar un recorte pequeño." },
    { q: "¿Se sube mi foto a algún servidor?", a: "No. Se redimensiona en tu navegador; solo tú la pones en WhatsApp." },
  ],

  security:
    "Tu foto se redimensiona por completo en tu navegador. Las imágenes muy grandes pueden procesarse en nuestro servidor y se eliminan de inmediato; no se guarda nada.",
};

export default content;
