import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/cuadricula-instagram (variant of split-image, preset
 * mode "instagram"). No ui block: the tool's labels live in split-image.es.ts.
 *
 * Primary query "Cuadrícula para Instagram"; secondary "dividir foto para
 * Instagram", "carrusel de Instagram". Facts as in the English page: profile
 * grid shows 3:4 thumbnails, three per row, newest top-left (since January
 * 2025); feed photos are stored 1080 px wide. The "_post-01" file suffix comes
 * from the code, only the example stem is localised.
 */
const content: ToolPageContent = {
  toolId: "instagram-grid-maker",
  locale: "es",
  name: "Cuadrícula para Instagram",
  tagline:
    "Convierte una foto en una cuadrícula de perfil de Instagram sin cortes visibles (3, 6, 9 o hasta 15 publicaciones) o en un carrusel panorámico que fluye al deslizar. Recortada a los formatos de Instagram, a 1080 px y numerada en orden de publicación.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Cuadrícula para Instagram – dividir foto gratis | oMyImage",
  metaDescription:
    "Crea una cuadrícula para Instagram: divide una foto para Instagram en 3 a 15 publicaciones o en un carrusel, a 1080 px y numeradas. Gratis y sin subir nada.",

  intro:
    "Una cuadrícula para Instagram es una imagen grande repartida entre varias publicaciones, de modo que tu perfil la muestra completa mientras cada publicación se sostiene sola en el feed. Hacerlo a mano implica recortar a un formato poco habitual, cortar la foto en tercios exactos, redimensionar cada parte y acordarse de subirlas al revés. Esta herramienta lo hace todo: elige cuántas filas quieres, escoge el formato de publicación, arrastra la foto para encuadrarla y descarga las publicaciones ya numeradas en el orden en que debes compartirlas. También crea carruseles sin cortes visibles: un panorama ancho dividido en diapositivas que encajan al deslizar.",

  sections: [
    {
      heading: "Cómo funciona la cuadrícula del perfil",
      id: "profile-grid",
      body: [
        "Tu perfil muestra las publicaciones de tres en tres por fila, de la más reciente a la más antigua, empezando arriba a la izquierda. Desde enero de 2025, las miniaturas son rectángulos verticales 3:4 en lugar de cuadrados. Corta una imagen en tres columnas, publica las partes en el orden correcto y el perfil la mostrará como una sola imagen.",
        "Una fila necesita 3 publicaciones, dos filas 6 y tres filas 9. Esta herramienta llega hasta cinco filas (15 publicaciones), que es más o menos lo que un perfil muestra en la pantalla del teléfono sin desplazarse.",
      ],
    },
    {
      heading: "Qué formato de publicación elegir",
      id: "shapes",
      body: [
        "3:4 (1080 × 1440 píxeles) es la forma de las miniaturas de la cuadrícula, así que lo que ves en la vista previa es exactamente lo que muestra tu perfil, sin perder nada entre publicaciones. 4:5 (1080 × 1350) es la clásica publicación vertical del feed; la cuadrícula le recorta alrededor de un 3 % por cada lado, así que las uniones saltan muy ligeramente. Las publicaciones cuadradas 1:1 pierden un octavo de su ancho por cada lado en la cuadrícula, algo que se nota en las líneas que pasan de una publicación a otra.",
        "Elige 3:4, salvo que tu app de Instagram recorte las fotos 3:4 a 4:5 al subirlas; en ese caso elige 4:5, que todas las versiones de la app aceptan sin recortar.",
      ],
    },
    {
      heading: "Publicar en el orden correcto",
      id: "order",
      body: [
        "Como la publicación más reciente aparece arriba a la izquierda, el rompecabezas se publica al revés: la parte 1 es la esquina inferior derecha y se sube primero, y la parte de arriba a la izquierda se sube al final. Los archivos están numerados así (foto_post-01.jpg, foto_post-02.jpg, etc.) y la vista previa muestra los mismos números sobre cada parte.",
        "Publícalas todas de una vez y, después, sube las siguientes publicaciones en grupos de tres: una sola publicación extra desplaza todas las partes un lugar y rompe la imagen. Las publicaciones fijadas siempre ocupan los primeros lugares de la cuadrícula, así que desfíjalas mientras publicas o fija una fila completa de tres.",
      ],
    },
    {
      heading: "Carruseles sin cortes visibles",
      id: "carousel",
      body: [
        "Elige «Carrusel» para cortar una imagen ancha en entre 2 y 10 diapositivas en una sola fila. Agrégalas a una publicación en orden numérico; al deslizar, cada diapositiva continúa exactamente donde terminó la anterior, así que un paisaje, una foto de grupo o un banner largo se ven como una sola imagen continua. Las diapositivas 4:5 ocupan la mayor parte de la pantalla del teléfono; las cuadradas van bien con panoramas anchos que de otro modo necesitarían muchas diapositivas.",
      ],
    },
    {
      heading: "Cómo encuadrar la foto para dividirla",
      id: "framing",
      body: [
        "La cuadrícula completa tiene una sola forma (tres publicaciones 3:4 a lo ancho y tres filas hacia abajo forman un retrato 3:4, mientras que una sola fila de tres forma una franja ancha 9:4), así que la mayoría de las fotos tienen más imagen de la que cabe. La parte que queda fuera de la cuadrícula aparece sombreada en la vista previa. Arrastra la foto, o usa los controles de posición, para elegir qué entra en las publicaciones, y mantén las caras y los textos lejos de las líneas de corte, donde quedarían divididos entre dos publicaciones.",
      ],
    },
    {
      heading: "Tamaño y calidad",
      id: "quality",
      body: [
        "Cada publicación sale con 1080 píxeles de ancho, el ancho con el que Instagram guarda las fotos del feed, así que la app no las vuelve a reducir. Una foto con menos píxeles conserva su propia resolución en lugar de ampliarse. Las publicaciones se guardan por defecto en JPG con calidad del 92 %; Instagram vuelve a comprimir todo lo que se sube, así que un ajuste más alto rara vez se nota, pero tienes PNG si prefieres entregar los píxeles intactos.",
      ],
    },
    {
      heading: "Ideas para publicaciones en cuadrícula",
      id: "ideas",
      body: [
        "Las marcas usan una cuadrícula para anunciar un lanzamiento o una oferta con una imagen potente que se adueña del perfil. Los fotógrafos publican un paisaje repartido en una fila de tres. Los artistas revelan un dibujo grande por partes a lo largo de un día. Los organizadores de eventos convierten un cartel en un 3 × 3 imposible de pasar por alto, y los viajeros hacen un carrusel con un panorama completo en lugar de recortarlo para que quepa.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Tu foto se corta y se redimensiona por completo en tu navegador. No se sube nada a nuestros servidores y no se conserva nada cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo hacer una cuadrícula para Instagram",
  steps: [
    { title: "Agregar la foto", description: "Elige una imagen JPG, PNG o WEBP." },
    { title: "Configurar la cuadrícula", description: "Elige el número de filas y el formato de publicación, y arrastra la foto para encuadrarla." },
    { title: "Descargar y publicar", description: "Haz clic en «Crear la cuadrícula» y publica las partes en orden numérico, empezando por la 1." },
  ],

  features: [
    { icon: "photo_library", title: "Cuadrícula o carrusel", description: "Una cuadrícula de perfil de 3 de ancho con hasta 15 publicaciones, o un carrusel de hasta 10 diapositivas." },
    { icon: "check", title: "Numeradas para publicar", description: "Los archivos y la vista previa muestran el orden en que debes publicarlas." },
    { icon: "lock", title: "Sin subidas", description: "Todo se hace en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo hago una publicación en cuadrícula en Instagram?", a: "Agrega tu foto, elige las filas y el formato, haz clic en «Crear la cuadrícula» y publica las partes en orden numérico empezando por la 1." },
    { q: "¿Qué parte publico primero?", a: "La número 1, que es la parte de abajo a la derecha. La de arriba a la izquierda va al final, porque Instagram muestra primero la publicación más reciente." },
    { q: "¿De qué tamaño es cada publicación?", a: "1080 × 1440 px en 3:4, 1080 × 1350 px en 4:5 y 1080 × 1080 px en cuadrado, o menos si tu foto tiene menos píxeles." },
    { q: "¿Uso 3:4 o 4:5?", a: "3:4 coincide exactamente con la cuadrícula del perfil. Usa 4:5 si tu app recorta las fotos 3:4 al subirlas." },
    { q: "¿Cuántas publicaciones puede tener una cuadrícula?", a: "Tres por fila, desde una fila (3 publicaciones) hasta cinco filas (15 publicaciones)." },
    { q: "¿Por qué mi cuadrícula se ve rota?", a: "Normalmente porque una publicación fijada o una publicación suelta posterior la desplazó. Desfija las publicaciones mientras publicas y agrega las nuevas de tres en tres." },
    { q: "¿Qué es un carrusel sin cortes visibles?", a: "Una imagen ancha dividida en las diapositivas de una sola publicación, de modo que continúa de una diapositiva a otra al deslizar." },
    { q: "¿Cuántas diapositivas de carrusel puedo hacer?", a: "De 2 a 10, en 4:5 o en cuadrado." },
    { q: "¿Puedo elegir qué parte de la foto se usa?", a: "Sí. Arrastra la foto en la vista previa o usa los controles de posición; la parte sombreada queda fuera." },
    { q: "¿Instagram reducirá la calidad?", a: "Vuelve a comprimir todo lo que se sube, pero las publicaciones de 1080 píxeles de ancho no se redimensionan de nuevo, lo que las mantiene lo más nítidas posible." },
    { q: "¿Se sube mi foto?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí. Descarga el ZIP, ábrelo en la app de archivos de tu teléfono y comparte las publicaciones en Instagram desde ahí." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Puedo dividir una foto para Instagram en solo tres partes?", a: "Sí. Elige una sola fila: la foto se divide en tres publicaciones que forman una franja ancha 9:4 en tu perfil, ideal para un paisaje." },
  ],

  security:
    "Tu foto se corta y se redimensiona por completo en tu navegador. No se sube, se guarda ni se rastrea nada.",
};

export default content;
