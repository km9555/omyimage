import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/video-a-gif.
 *
 * Target query «video a GIF» (6.6K ES / 8.1K MX) leads the h1. «MP4 a GIF»
 * (8.1K ES / 6.6K MX) is as big but narrower, so it sits in the metaTitle,
 * the intro, a heading and an FAQ. «convertir video a GIF» appears in the
 * metaDescription and the how-to title. Written «video» (no accent): the
 * form both Mexico and the query itself use.
 */
const content: ToolPageContent = {
  toolId: "video-to-gif",
  locale: "es",
  name: "Video a GIF",
  tagline:
    "Convierte un fragmento de un video MP4, WEBM o MOV en un GIF que se repite sin fin: recórtalo, elige los fotogramas por segundo y el tamaño, y mira el resultado antes de descargarlo. Gratis, y el video nunca sale de tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Video a GIF – Convertir MP4 a GIF online gratis | oMyImage",
  metaDescription:
    "Convertir video a GIF gratis: recorta tu MP4, WEBM o MOV, elige fotogramas por segundo y ancho, y descarga el GIF. Sin registro y sin subir tu video.",

  intro:
    "Un GIF se reproduce en cualquier lugar donde cabe una imagen: chats, foros, correos, presentaciones y cuadros de comentarios que nunca reproducirían un video por sí solos. El convertidor «Video a GIF» de oMyImage recorta el momento que quieres de un archivo de video y lo convierte en un GIF que se repite sin fin, ya sea de MP4 a GIF, de WEBM o de MOV. Agrega el video, marca el inicio y el final mientras lo ves, elige qué tan fluido y qué tan grande debe ser, y descarga el GIF. El video lo decodifica tu propio navegador, así que nunca se sube a ningún sitio.",

  sections: [
    {
      heading: "Elegir el momento",
      id: "trim",
      body: [
        "Los GIF funcionan mejor como bucles cortos: una reacción, un producto que gira, un paso de un tutorial, el remate de un clip. Reproduce el video y pulsa «Empezar aquí» y «Terminar aquí» en el momento justo, o escribe los tiempos en segundos. La herramienta empieza con los primeros cinco segundos seleccionados, porque la mayoría de los buenos GIF duran menos que eso.",
        "Cada segundo cuenta para el tamaño del archivo. Un GIF guarda cada fotograma como una imagen, así que un clip de 10 segundos tiene el doble de fotogramas que uno de 5, y pesa más o menos el doble. Recortar hasta dejar solo la parte que la gente necesita ver es el mayor ahorro de todos.",
      ],
    },
    {
      heading: "Fotogramas por segundo y ancho",
      id: "settings",
      body: [
        "Los fotogramas por segundo deciden qué tan fluido se ve el movimiento. 10 fps es la sensación clásica de GIF y mantiene los archivos pequeños; 15 fps se nota bastante más fluido en movimientos rápidos; 20–25 fps se acercan al video, pero duplican o más la cantidad de fotogramas. Para grabaciones de pantalla y escenas lentas, 5–10 fps suelen bastar.",
        "El ancho es la otra gran palanca. 480 píxeles de ancho sirven para la mayoría de los chats y páginas; 320 va bien para reacciones e inserciones pequeñas; 640 o el ancho original son para tutoriales en los que el texto pequeño tiene que seguir siendo legible. El alto sigue la forma del propio video, así que nada se deforma.",
      ],
    },
    {
      heading: "Calidad y tamaño del archivo",
      id: "quality",
      body: [
        "El GIF solo puede mostrar 256 colores, que aquí se eligen una sola vez para todo el clip, de modo que los colores se mantienen estables de un fotograma a otro. «Alta» conserva los 256 y solo ignora el parpadeo más leve; «Media» usa 128 colores y congela los cambios pequeños entre fotogramas; «Archivo pequeño» va más allá, lo que conviene a escenas sencillas y grabaciones de pantalla.",
        "Por dentro, cada fotograma posterior al primero guarda solo los píxeles que cambiaron, y el resto se ve a través desde el fotograma anterior. El ruido del video arruina ese truco; por eso los ajustes más bajos tratan los cambios diminutos como si no hubiera cambio, y por eso reducen tanto el tamaño con grabaciones reales.",
      ],
    },
    {
      heading: "MP4 a GIF, WEBM y MOV: qué videos funcionan",
      id: "formats",
      body: [
        "Funciona cualquier video que tu navegador pueda reproducir: MP4 (H.264), WEBM (VP8, VP9 o AV1) y la mayoría de los archivos MOV. Los videos de iPhone grabados en HEVC solo se reproducen donde el sistema admite HEVC, como Safari en un Mac o un iPhone; en otros lugares puede aparecer un error. Si configuras la cámara del iPhone en «Más compatible» (Ajustes, Cámara, Formatos), graba en H.264, que funciona en todas partes.",
        "El sonido se pierde, porque el GIF no tiene audio. Se conservan la relación de aspecto, los colores y los tiempos del clip, y el GIF se repite sin fin a menos que desmarques «Repetir sin fin».",
      ],
    },
    {
      heading: "Clips largos y memoria",
      id: "limits",
      body: [
        "Los fotogramas se guardan en memoria hasta que se escribe el GIF, así que los clips muy largos o muy grandes tienen un límite. Si la herramienta dice que el clip es demasiado largo para ese tamaño, acórtalo, baja los fotogramas por segundo o elige un ancho menor; el panel muestra cuántos fotogramas vas a generar. Para cualquier cosa de más de medio minuto, el GIF rara vez es el formato adecuado: un MP4 corto pesará menos y se verá mejor. Para convertir un video a GIF con buena calidad, la regla es sencilla: mantenlo corto.",
      ],
    },
  ],

  howToTitle: "Cómo convertir un video a GIF",
  steps: [
    { title: "Agrega un video", description: "Selecciona un archivo MP4, WEBM o MOV de tu PC o de tu teléfono." },
    { title: "Recorta y configura", description: "Marca el inicio y el final, y luego elige los fotogramas por segundo, el ancho y la calidad." },
    { title: "Crea el GIF", description: "Haz clic en «Crear GIF», revisa la vista previa y descárgalo." },
  ],

  features: [
    { icon: "gif_box", title: "Recorta el momento justo", description: "Marca el inicio y el final mientras el video se reproduce, con precisión de una décima de segundo." },
    { icon: "tune", title: "Tamaño bajo control", description: "Los fotogramas por segundo, el ancho y los niveles de calidad mantienen el GIF lo más ligero posible." },
    { icon: "lock", title: "Nada se sube", description: "Tu propio navegador decodifica y convierte tu video." },
  ],

  faqs: [
    { q: "¿Cómo convierto un video a GIF?", a: "Agrega el video, marca el inicio y el final, elige los fotogramas por segundo y el ancho, y haz clic en «Crear GIF». Revisa la vista previa y descárgalo." },
    { q: "¿Puedo convertir MP4 a GIF?", a: "Sí. El MP4 con H.264 funciona en todos los navegadores; WEBM y MOV también funcionan." },
    { q: "¿Por qué no se abre mi video de iPhone?", a: "Probablemente está en HEVC, que algunos navegadores no pueden reproducir. Usa Safari o configura la cámara del iPhone en «Más compatible» para que grabe en H.264." },
    { q: "¿Cuánto puede durar el GIF?", a: "Lo mejor es que sea corto: unos pocos segundos. Los clips más largos son posibles con menos fotogramas por segundo y menos ancho; la herramienta te avisa cuando un clip es demasiado largo para ese tamaño." },
    { q: "¿Cómo hago el GIF más ligero?", a: "Recórtalo, baja los fotogramas por segundo a 10 fps, elige un ancho menor, como 320 o 480 píxeles, y selecciona «Media» o «Archivo pequeño»." },
    { q: "¿El GIF conserva el sonido?", a: "No. El GIF no tiene audio, así que el sonido se pierde." },
    { q: "¿El GIF se repite en bucle?", a: "Sí, sin fin de forma predeterminada. Desmarca «Repetir sin fin» para que se reproduzca una sola vez." },
    { q: "¿Cuántos fotogramas por segundo debo usar?", a: "10 fps para la mayoría de los clips, 15 fps para movimientos rápidos y 5–10 fps para grabaciones de pantalla." },
    { q: "¿Se sube mi video?", a: "No. Se decodifica y se convierte en GIF por completo dentro de tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en un navegador del teléfono, con los videos que ese navegador pueda reproducir. En el teléfono, los clips más cortos se procesan más rápido." },
    { q: "¿El GIF lleva marca de agua?", a: "No. El GIF no incluye ningún logotipo, y no necesitas cuenta ni registro." },
  ],

  security:
    "Tu propio navegador decodifica el video y el GIF se crea en tu dispositivo. No se sube, no se guarda ni se rastrea nada.",

  ui: {
    // VideoToGifTool.tsx
    "Select a video": "Seleccionar un video",
    "or drop an MP4, WEBM or MOV video here": "o suelta aquí un video MP4, WEBM o MOV",
    "Please select a video file.": "Selecciona un archivo de video.",
    "This video can't be played in your browser.": "Este video no se puede reproducir en tu navegador.",
    "Processing failed.": "No se pudo procesar.",
    "Clear video": "Quitar video",
    "Change video": "Cambiar video",
    "GIF settings": "Ajustes del GIF",
    "Make GIF": "Crear GIF",
    "Download GIF": "Descargar GIF",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Your GIF will appear here.": "Tu GIF aparecerá aquí.",
    "Video": "Video", // i18n-same
    "GIF": "GIF", // i18n-same
    "Start here": "Empezar aquí",
    "End here": "Terminar aquí",
    "Start": "Inicio",
    "End": "Final",
    "Clip (seconds)": "Fragmento (segundos)",
    "{len} s of {total} s. Use Start here and End here while the video plays.":
      "{len} s de {total} s. Usa «Empezar aquí» y «Terminar aquí» mientras se reproduce el video.",
    "Frames per second": "Fotogramas por segundo",
    "Width (px)": "Ancho (px)",
    "Original ({w})": "Original ({w})", // i18n-same
    "Loop forever": "Repetir sin fin",
    "Quality": "Calidad",
    "{n} frames": "{n} fotogramas",
    "{n} frames at {w} × {h} px": "{n} fotogramas de {w} × {h} px",
    "Too long for this size — shorten the clip, lower the frame rate or the width.":
      "Demasiado largo para este tamaño: acorta el fragmento o baja los fotogramas por segundo o el ancho.",
    "Your video is converted in your browser and never uploaded.": "Tu video se convierte en tu navegador y nunca se sube.",
    // QUALITY_LABEL (module scope)
    "High": "Alta",
    "Medium": "Media",
    "Small file": "Archivo pequeño",
  },
};

export default content;
