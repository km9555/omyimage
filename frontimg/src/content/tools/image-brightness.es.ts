import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.es";

/**
 * Spanish copy for /es/ajustar-brillo-imagen. Target query: «Ajustar brillo de
 * imagen» (neutral Spanish, ES + MX, Nov 2026); «brillo y contraste» sits
 * beside it in the metaTitle, and «aclarar una foto» / «subir el brillo»
 * appear in a heading and an FAQ. The English name (Brightness & Contrast)
 * becomes the query; contrast and saturation are explained in the body.
 */
const content: ToolPageContent = {
  toolId: "image-brightness",
  locale: "es",
  name: "Ajustar brillo de imagen",
  tagline:
    "Aclara una foto oscura, dale fuerza con el contraste y haz los colores más vivos o más suaves con la saturación, con vista previa en vivo y un antes y después rápido. Gratis, en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Ajustar brillo de imagen – brillo y contraste | oMyImage",
  metaDescription:
    "Ajustar brillo de imagen online y gratis: sube el brillo, el contraste y la saturación con vista previa en vivo. Varias fotos a la vez, sin subir nada.",

  intro:
    "La mayoría de las fotos decepcionantes no están desenfocadas: están un poco oscuras, apagadas o grises. Tres controles arreglan casi todo eso. Con «Ajustar brillo de imagen» de oMyImage cambias el brillo, el contraste y la saturación de imágenes JPG, PNG y WebP, ves el cambio en vivo mientras arrastras y puedes mantener pulsado un botón para volver a ver el original. Aplica los mismos ajustes a un lote entero para que una serie de fotos de producto o de vacaciones quede uniforme.",

  sections: [
    {
      heading: "Los tres controles",
      id: "sliders",
      body: [
        "El brillo sube o baja todos los tonos en la misma medida: muévelo a la derecha para rescatar una foto subexpuesta y a la izquierda para calmar una demasiado clara. El contraste separa los tonos del gris medio (las zonas oscuras se oscurecen y las claras se aclaran), lo que da profundidad a una imagen plana y brumosa; moverlo a la izquierda suaviza una imagen demasiado dura.",
        "La saturación controla lo vivos que son los colores. Súbela para comida, flores y paisajes; bájala para un aspecto apagado, como de película. En −100 la imagen queda completamente en blanco y negro. «Restablecer» devuelve los tres controles a cero.",
      ],
    },
    {
      heading: "Arreglar problemas habituales",
      id: "fixes",
      body: [
        "Una foto de interior oscura: brillo de +20 a +40 y contraste +10 para que no se vea lavada. Un paisaje gris y brumoso: contraste de +20 a +30 y saturación +15. Una foto de un documento hecha con el teléfono para un formulario: brillo +15 y contraste +40 dejan el papel blanco y el texto oscuro y legible. Una foto de mediodía demasiado dura: contraste −15 y saturación −10.",
        "Los pasos pequeños funcionan mejor. Los valores de brillo altos llevan las zonas claras a blanco puro, y ese detalle ya no se puede recuperar; vigila en la vista previa los cielos y la ropa blanca.",
      ],
    },
    {
      heading: "Antes y después",
      id: "compare",
      body: [
        "Mantén pulsado «Mantén pulsado para ver el original», debajo de la vista previa, para mostrar la imagen sin tocar; suéltalo para volver a ver tus ajustes. Comparar a menudo es la forma más fácil de no pasarse, porque el ojo se acostumbra enseguida a una imagen más clara o más colorida.",
      ],
    },
    {
      heading: "Lotes uniformes",
      id: "batch",
      body: [
        "Agrega una serie completa de imágenes y a cada una se le aplican los mismos ajustes, así que las fotos tomadas con la misma luz quedan iguales: útil para catálogos de productos, fotos de inmuebles y álbumes. La vista previa usa la primera imagen; cada archivo de la lista tiene su propio botón de descarga, y varios se descargan juntos en un ZIP.",
      ],
    },
    {
      heading: "Formatos y calidad",
      id: "formats",
      body: [
        "El resultado mantiene el formato original salvo que elijas otro. PNG guarda los píxeles ajustados exactamente; JPG y WebP usan el control de calidad. Las zonas transparentes siguen siendo transparentes en PNG y WebP. Para un blanco y negro con un control más fino de la mezcla, usa «Imagen en blanco y negro»; para un negativo, «Invertir colores de imagen».",
      ],
    },
    {
      heading: "Subir el brillo para imprimir y para pantallas",
      id: "print",
      body: [
        "Las fotos se ven más oscuras en papel que en una pantalla retroiluminada, así que las imágenes que vas a imprimir suelen necesitar un poco más de brillo (de +10 a +20 es lo habitual) y algo más de contraste. Para pantallas, revisa el resultado en el dispositivo donde se va a ver: los teléfonos suelen ser más brillantes que las pantallas de las laptops, y una foto que se ve bien en uno puede verse apagada en el otro.",
      ],
    },
    {
      heading: "Fotos de documentos para trámites y solicitudes",
      id: "documents",
      body: [
        "Si tienes que subir a un portal en línea la foto de un formulario, un comprobante o un certificado, seguro que conoces el problema: el papel se ve gris y la letra pálida. Un poco más de brillo y bastante más contraste dejan la página blanca y el texto bien legible. Si después el archivo es demasiado grande para el límite de subida del portal, redúcelo con «Comprimir imagen».",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada imagen se ajusta por completo en tu navegador. No se sube nada a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo cambiar el brillo de una imagen",
  steps: [
    { title: "Agrega imágenes", description: "Selecciona una o varias imágenes JPG, PNG o WebP." },
    { title: "Ajusta", description: "Mueve los controles de brillo, contraste y saturación; mantén pulsado para comparar." },
    { title: "Aplica y descarga", description: "Haz clic en «Aplicar ajustes» para descargar la imagen, o un ZIP si son varias." },
  ],

  features: [
    { icon: "light_mode", title: "Tres controles clave", description: "Brillo, contraste y saturación, de −100 a +100." },
    { icon: "visibility", title: "Antes y después", description: "Vista previa en vivo, y mantén pulsado para ver el original." },
    { icon: "lock", title: "Sin subir nada", description: "Se ajusta por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo aclaro una foto?", a: "Agrégala, mueve el control «Brillo» hacia la derecha y haz clic en «Aplicar ajustes»." },
    { q: "¿Para qué sirve el contraste?", a: "Separa más los tonos oscuros y claros, lo que da más profundidad a las fotos planas." },
    { q: "¿Para qué sirve la saturación?", a: "Hace los colores más vivos o más apagados; en −100 la foto queda en blanco y negro." },
    { q: "¿Cómo arreglo una foto oscura?", a: "Sube el brillo entre 20 y 40 y añade unos 10 de contraste para que no se vea lavada." },
    { q: "¿Puedo hacer más legible la foto de un documento?", a: "Sí. Un poco más de brillo y bastante más contraste dejan la página blanca y el texto oscuro." },
    { q: "¿Puedo comparar con el original?", a: "Sí. Mantén pulsado el botón que hay debajo de la vista previa para ver el original." },
    { q: "¿Puedo ajustar varias fotos a la vez?", a: "Sí. A todas se les aplican los mismos ajustes y se descargan en un ZIP." },
    { q: "¿Pierde calidad?", a: "PNG conserva cada píxel. JPG y WebP se vuelven a guardar con la calidad que elijas." },
    { q: "¿Se sube mi imagen a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono." },
    { q: "¿Puedo deshacer los cambios?", a: "Restablece los controles antes de descargar; después, conserva tu archivo original." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Cambian los colores al subir el brillo?", a: "Se vuelven más claros, pero mantienen su tono. Solo el control de saturación los hace más o menos vivos." },
    { q: "¿Puedo ajustar el brillo sin tocar el contraste?", a: "Sí. Cada control funciona por separado; deja el contraste y la saturación en cero." },
  ],

  security:
    "Tus imágenes se ajustan por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
