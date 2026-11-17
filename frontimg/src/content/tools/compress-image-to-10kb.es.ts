import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-10kb (variant of compress-image,
 * preset targetKb 10). Primary query: «Comprimir imagen a 10 KB»; secondary:
 * «reducir foto a 10 KB», «firma de 10 KB». Angle: the tightest limit forms
 * use — signature and thumbprint fields — and what has to go to get there.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-10kb",
  locale: "es",
  name: "Comprimir imagen a 10 KB",
  tagline:
    "Deja una firma, una huella dactilar o una foto pequeña por debajo de 10 KB, el límite más estricto que usan los formularios en línea. La herramienta recorta calidad y tamaño paso a paso hasta que el archivo cabe, en tu navegador y sin subirlo.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 10 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 10 KB para el campo de firma o huella de un formulario: el JPG más legible que cabe. Reduce tu foto a 10 KB gratis y sin subirla.",

  intro:
    "10 KB es el tamaño de archivo más pequeño que piden los formularios en línea, y aparece justo donde la imagen también es pequeña: el recuadro de la firma en una solicitud de examen o de empleo, la huella del pulgar, el campo de foto de un sistema de registro antiguo. Una foto tomada con el teléfono pesa entre trescientas y quinientas veces más, así que bajar de 10 KB tiene menos que ver con una compresión ingeniosa y más con quedarse solo con lo que el formulario necesita. Agrega tu imagen y obtendrás un JPG de menos de 10 KB: la versión más clara que cabe en ese espacio.",

  sections: [
    {
      heading: "Qué tan pequeño es realmente 10 KB",
      id: "how-small",
      body: [
        "10 KB son 10 000 bytes. Una firma limpia en tinta negra sobre papel blanco, recortada al ras y de unos 300 × 120 píxeles, cabe con holgura. Una foto de cabeza y hombros también cabe, pero solo a unos 200 × 250 píxeles: más o menos el tamaño con que se imprime en un comprobante de examen, y poco más.",
        "La herramienta busca primero la calidad JPG más alta que queda por debajo de 10 KB. Cuando ni siquiera la calidad más baja razonable es suficiente, reduce las dimensiones en píxeles en pasos pequeños y vuelve a buscar, de modo que siempre recibes un archivo por debajo del límite en lugar de un error.",
      ],
    },
    {
      heading: "Prepara la imagen antes de apretarla",
      id: "prepare",
      body: [
        "Cada píxel que no necesitas cuesta bytes que no te sobran. Recorta la firma de modo que la tinta casi toque los bordes, y recorta una foto a cabeza y hombros. En el caso de una firma, pásala antes a blanco y negro con la herramienta «Imagen en blanco y negro»: el ruido de color del papel y de la iluminación ocupa espacio sin aportar nada.",
        "Firma con un bolígrafo oscuro sobre papel blanco liso y fotografíala con luz de día, desde justo encima. Un original limpio y con buen contraste se comprime mucho mejor que uno gris y con sombras, y el resultado sigue siendo legible.",
      ],
    },
    {
      heading: "Huellas dactilares",
      id: "thumb",
      body: [
        "Presiona el pulgar sobre un cojín de tinta y luego una sola vez, con firmeza, sobre papel blanco; si lo giras un poco se ve más superficie de la huella. Fotografíala de cerca con buena luz para que las crestas salgan nítidas y recórtala a la huella misma antes de comprimir.",
        "Después de comprimir, amplía al 100 %: las líneas de las crestas deben seguir viéndose. Si se convirtieron en una mancha oscura, revisa si el campo de verdad exige 10 KB; las huellas suelen tener más margen que las firmas, y un presupuesto mayor conserva el detalle.",
      ],
    },
    {
      heading: "Cuando el resultado se ve demasiado tosco",
      id: "rough",
      body: [
        "Los bordes pixelados alrededor de las letras indican que el archivo tuvo que comprimirse muchísimo. Recorta más, sube el contraste o empieza de nuevo con un original mejor. Un archivo que queda justo por debajo del límite con una calidad decente se ve mucho mejor que una imagen grande aplastada para que quepa.",
        "Revisa también las demás reglas del formulario. Muchos campos indican dimensiones en píxeles además de un peso; primero redimensiona a esas medidas con la herramienta «Redimensionar imagen» y después comprime, para que el formulario reciba exactamente lo que pide.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 10 KB",
  steps: [
    { title: "Recorta y agrega la imagen", description: "Recorta la firma o la foto al ras y agrégala: JPG, PNG o WebP." },
    { title: "Comprime a menos de 10 KB", description: "El límite de 10 KB ya está puesto. La calidad y el tamaño se reducen solo lo necesario." },
    { title: "Revisa y descarga", description: "Amplía la imagen para comprobar que se lee bien y luego descarga el JPG." },
  ],

  features: [
    { icon: "draw", title: "Pensado para firmas", description: "Las imágenes pequeñas en blanco y negro, como firmas y huellas, siguen siendo legibles por debajo de 10 KB." },
    { icon: "crop", title: "Achica solo si hace falta", description: "Primero se prueba con la calidad; las dimensiones bajan solo si el archivo todavía no cabe." },
    { icon: "lock", title: "Se queda en tu dispositivo", description: "Tu firma se comprime en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una firma a 10 KB?", a: "Recórtala al ras, agrégala aquí y haz clic en «Comprimir»: el límite de 10 KB ya está puesto. Pasarla antes a blanco y negro da el resultado más limpio." },
    { q: "¿De verdad cabe una foto en 10 KB?", a: "Sí, en tamaño de foto carnet impresa: unos 200 × 250 píxeles. Alcanza para los recuadros de foto pequeños de comprobantes y formularios de identificación, pero no para nada más grande." },
    { q: "¿Cómo fotografío una huella dactilar para un formulario en línea?", a: "Marca la huella en papel blanco con un cojín de tinta, fotografíala de cerca con luz de día, recorta a la huella y comprime. Comprueba al 100 % de zoom que las crestas siguen visibles." },
    { q: "¿Por qué mi firma de 10 KB se ve borrosa?", a: "Normalmente el original tenía demasiado espacio alrededor, o papel gris y sombras. Recorta más, pásala a blanco y negro y vuelve a comprimir a partir del original." },
    { q: "¿El archivo debe ser JPG o PNG para un límite de 10 KB?", a: "JPG. Es lo que aceptan casi todos los formularios, y el límite de tamaño de esta herramienta siempre produce un JPG (o un WebP si lo eliges)." },
    { q: "¿Qué pasa si mi archivo ya pesa menos de 10 KB?", a: "Si ya es un JPG por debajo del límite, lo recibes sin cambios: no tiene sentido volver a comprimirlo." },
    { q: "¿10 KB es lo mismo que 0,01 MB?", a: "Sí. 10 KB son 10 000 bytes, es decir, 0,01 MB. La herramienta cuenta 1 KB como 1000 bytes, así que el archivo también queda por debajo del límite en formularios que cuentan 1024." },
  ],

  security:
    "Las firmas, las huellas y las fotos se comprimen en tu dispositivo, dentro de tu navegador. Nada se sube ni se guarda. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se envía a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
