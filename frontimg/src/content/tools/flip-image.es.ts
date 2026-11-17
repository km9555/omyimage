import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/voltear-imagen (variant of rotate-image, preset flipH).
 * Target query: «Voltear imagen» (590 ES / 880 MX, Nov 2026); secondary
 * «imagen en espejo» / «efecto espejo» and «invertir imagen horizontal». In
 * Spanish «invertir imagen» can mean either mirroring or inverting colours,
 * so the page uses it only with «horizontal/vertical» and points to
 * «Invertir colores de imagen» once for the colour meaning.
 */
const content: ToolPageContent = {
  toolId: "flip-image",
  locale: "es",
  name: "Voltear imagen",
  tagline:
    "Voltea una imagen en horizontal o en vertical: selfis en espejo, texto al revés y fotos de producto con un clic. Varias imágenes a la vez, JPG, PNG y WebP, y todo se queda en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Voltear imagen – efecto espejo online gratis | oMyImage",
  metaDescription:
    "Voltear imagen online y gratis: pon una foto en espejo o invierte una imagen en horizontal o vertical, y corrige selfis y texto al revés, sin subirla.",

  intro:
    "Voltear una imagen es darle la vuelta como en un espejo: el volteo horizontal intercambia izquierda y derecha, como si la miraras reflejada, y el volteo vertical la pone boca abajo, igual que el agua refleja la orilla. Esta página se abre con el espejo horizontal ya activado, porque es lo que necesita casi todo el mundo: quitar el efecto espejo de un selfi de la cámara frontal, corregir un texto que se lee al revés o hacer que todas las fotos de una serie miren hacia el mismo lado. Agrega una imagen o una carpeta entera, revisa la vista previa y descarga el resultado.",

  sections: [
    {
      heading: "¿Voltear o girar? Cuál necesitas",
      id: "flip-vs-rotate",
      body: [
        "Girar hace rotar toda la imagen alrededor de su centro, de modo que una foto tumbada se puede poner derecha; no se refleja nada. Voltear la refleja, así que el texto se lee al revés y la mano izquierda de una persona pasa a ser la derecha.",
        "Una prueba rápida: si la foto está derecha pero mira hacia el lado equivocado, necesitas voltearla. Si está de lado o boca abajo pero por lo demás es correcta, necesitas girarla. Los controles de las dos cosas están en el mismo panel, así que puedes hacer una, la otra o las dos a la vez.",
      ],
    },
    {
      heading: "Por qué los selfis salen en espejo",
      id: "selfies",
      body: [
        "La cámara frontal del teléfono te muestra una vista previa en espejo porque es como estás acostumbrado a verte en un espejo, y muchos teléfonos también guardan la foto así. El resultado es una imagen en la que el texto de tu camiseta o de un cartel detrás de ti se lee al revés, y tu raya del pelo queda del lado que los demás no ven.",
        "Un volteo horizontal la deja como te ve todo el mundo. Algunos teléfonos tienen un ajuste para guardar a partir de ahora las fotos de la cámara frontal sin efecto espejo; para las fotos que ya hiciste, voltearlas aquí es la solución más rápida.",
      ],
    },
    {
      heading: "Buenas razones para poner una imagen en espejo",
      id: "uses",
      body: [
        "Los diseñadores voltean las fotos de producto para que todos los artículos de una cuadrícula miren hacia el mismo lado, y voltean los retratos para que la persona mire hacia el interior de la página y no hacia fuera. Docentes y aficionados a las manualidades ponen imágenes en espejo para transferencias con plancha y serigrafía, donde la impresión va invertida. Los artistas voltean un dibujo para descubrir errores de proporción que su ojo ya no ve.",
        "El volteo en sí no cambia ningún píxel, solo su orden, así que volver a voltear devuelve la disposición original. Guarda en PNG para que el archivo quede exactamente sin pérdida; la salida en JPG se vuelve a guardar con un ajuste de calidad alto.",
      ],
    },
    {
      heading: "Cuándo no conviene voltear",
      id: "text-and-logos",
      body: [
        "Un volteo horizontal invierte todo lo que hay en la imagen, también la escritura. Los logotipos, las señales de tráfico, las matrículas y las etiquetas de precio salen al revés, así que una foto de producto con un envase impreso suele quedar mejor como está, o bien voltéala y revisa los textos antes de publicarla.",
        "Las capturas de pantalla casi nunca deben voltearse: si una aparece de lado, lo que necesita es un giro. Y en un retrato, recuerda que las caras no son perfectamente simétricas; una foto volteada de alguien a quien conoces bien puede parecerte un poco extraña, aunque sea exactamente como esa persona se ve en el espejo.",
      ],
    },
    {
      heading: "Invertir una imagen en horizontal no es invertir sus colores",
      id: "not-invert",
      body: [
        "En español, «invertir una imagen» se usa a veces para las dos cosas. Invertir la imagen en horizontal o en vertical, es decir, voltearla, intercambia los lados y deja los colores igual. Invertir los colores, en cambio, convierte cada color en su opuesto (el negro pasa a blanco, como en un negativo) y deja la disposición sin tocar. Si eso es lo que buscas, usa «Invertir colores de imagen».",
      ],
    },
    {
      heading: "Muchas fotos, el mismo volteo",
      id: "batch",
      body: [
        "Puedes agregar una serie completa de imágenes JPG, PNG o WebP y voltearlas todas de la misma forma en un solo paso: útil para un catálogo en el que todos los productos deben mirar hacia el mismo lado o para una tanda de selfis hechos con la cámara frontal. Cada imagen mantiene su tamaño, la vista previa muestra el resultado antes de descargar y, si son varias, las recibes juntas en un archivo ZIP.",
      ],
    },
  ],

  howToTitle: "Cómo voltear una imagen",
  steps: [
    { title: "Agrega tus imágenes", description: "Selecciona o suelta uno o varios archivos JPG, PNG o WebP." },
    { title: "Elige la dirección", description: "El espejo horizontal está activado; cambia a vertical o combínalo con un giro si hace falta." },
    { title: "Descarga", description: "Descarga la imagen volteada, o todas juntas en un ZIP." },
  ],

  features: [
    { icon: "flip", title: "Horizontal o vertical", description: "Espejo de izquierda a derecha o de arriba abajo, por separado o a la vez, con vista previa en vivo." },
    { icon: "burst_mode", title: "Una serie entera a la vez", description: "Voltea igual todas las imágenes de un lote y descárgalas juntas." },
    { icon: "lock", title: "Nunca se sube", description: "El volteo se hace en tu navegador, así que tus fotos se quedan en tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo volteo una imagen en horizontal?", a: "Agrega la imagen (el espejo horizontal ya está activado), revisa la vista previa y descárgala. No hace falta nada más." },
    { q: "¿Qué diferencia hay entre voltear y poner en espejo?", a: "En la práctica, ninguna. «Espejo» suele referirse al volteo horizontal; «voltear» también puede significar el vertical, que esta página también ofrece." },
    { q: "¿Cómo quito el efecto espejo de un selfi?", a: "Voltéalo en horizontal. Las cámaras frontales suelen guardar una imagen en espejo, y un volteo horizontal te muestra como te ven los demás." },
    { q: "¿Puedo voltear una imagen en vertical?", a: "Sí. Activa el volteo vertical en los ajustes, solo o junto con el horizontal." },
    { q: "¿Puedo voltear muchas imágenes a la vez?", a: "Sí. Agrega un lote entero; todas las imágenes se voltean igual y puedes descargarlas en un ZIP." },
    { q: "¿Un PNG transparente sigue siendo transparente?", a: "Sí, siempre que mantengas PNG o WebP como formato de salida. JPG no tiene transparencia, así que las zonas transparentes se rellenarían con un color de fondo." },
    { q: "¿Voltear corrige un texto que se lee al revés?", a: "Sí: un volteo horizontal convierte la escritura en espejo en texto normal, siempre que el texto estuviera realmente en espejo y no fotografiado en ángulo a través de un cristal." },
    { q: "¿Voltear una imagen es lo mismo que invertir sus colores?", a: "No. Voltear intercambia izquierda y derecha; invertir los colores convierte cada color en su opuesto. Para los colores está «Invertir colores de imagen»." },
  ],

  security:
    "Tus imágenes nunca salen de tu dispositivo. El volteo se hace por completo en tu navegador, sin subir ni guardar nada.",
};

export default content;
