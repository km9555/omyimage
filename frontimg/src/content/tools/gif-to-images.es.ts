import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/gif-a-imagenes.
 *
 * Target query «GIF a imágenes» (convertir / separar GIF en imágenes);
 * secondary «extraer fotogramas de un GIF». Spanish says «fotograma»; «frame»
 * is understood but reads as an anglicism, so the copy uses fotograma.
 */
const content: ToolPageContent = {
  toolId: "gif-to-images",
  locale: "es",
  name: "GIF a imágenes",
  tagline:
    "Extrae todos los fotogramas de un GIF animado en línea: descárgalos juntos en un ZIP en PNG, JPG o WebP, o guarda uno solo. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF a imágenes – Extraer fotogramas de un GIF | oMyImage",
  metaDescription:
    "Convierte un GIF a imágenes: extrae todos los fotogramas de un GIF en PNG, JPG o WebP y descárgalos en un ZIP. Gratis, en tu navegador y sin subir archivos.",

  intro:
    "Pasar un GIF a imágenes significa separar una animación en sus imágenes individuales. La herramienta «GIF a imágenes» de oMyImage extrae todos los fotogramas de un GIF directamente en tu navegador, ya compuestos para que cada uno sea una imagen completa, y te permite descargarlos todos en un ZIP o uno por uno, en PNG, JPG o WebP. No se sube nada, así que tu GIF sigue siendo privado.",

  sections: [
    {
      heading: "Para qué sirve extraer los fotogramas de un GIF",
      id: "why",
      body: [
        "Un GIF animado es una pila de imágenes fijas con información de tiempo. Al separarlo obtienes cada una de esas imágenes como un archivo normal, que es justo lo que necesitas cuando lo que buscas no es la animación.",
        "El caso más común es encontrar un buen fotograma. Un GIF de reacción contiene un momento que quieres como imagen fija; una grabación de pantalla contiene el estado exacto de la interfaz que necesitas para una documentación; una secuencia de stop motion contiene el fotograma que salió mejor.",
        "El segundo es la reparación. Algo falla en un GIF existente (un fotograma de más, una marca de agua, un color equivocado) y no puedes corregirlo mientras siga siendo una animación. Extraes los fotogramas, corriges los que hacen falta y lo vuelves a armar.",
      ],
    },
    {
      heading: "Cómo se guardan en realidad los fotogramas de un GIF",
      id: "decoding",
      body: [
        "El GIF es más ahorrativo de lo que parece. En lugar de guardar cada fotograma completo, registra solo la zona que cambió respecto al anterior, junto con una instrucción sobre qué hacer con el área de debajo: dejarla, restaurar el fondo o restaurar lo que había antes.",
        "Por eso una extracción ingenua produce fragmentos: una herramienta que simplemente lee cada bloque guardado obtiene una imagen parcial con huecos transparentes, no la imagen que ves cuando el GIF se reproduce. Decodificar bien significa componer cada fotograma sobre el estado acumulado de los anteriores.",
        "Eso es lo que ocurre aquí, de modo que las imágenes que recibes son fotogramas completos tal como aparecen durante la reproducción, en orden y bien numerados.",
      ],
    },
    {
      heading: "Por qué PNG es el formato de salida adecuado",
      id: "format",
      body: [
        "Los fotogramas de un GIF ya están reducidos a una paleta de 256 colores como máximo. Esa reducción viene incorporada y no se puede deshacer, así que al extraerlos el objetivo es simplemente no empeorar nada.",
        "PNG no tiene pérdida: los fotogramas llegan exactamente como los generó el decodificador. Además maneja bien la transparencia del GIF, de modo que los fotogramas con zonas transparentes las conservan en lugar de recibir un fondo blanco.",
        "JPG sería la opción equivocada por partida doble: añadiría sus propios artefactos de compresión encima de la limitación de la paleta y no puede guardar transparencia. Si después necesitas archivos más ligeros, convierte los PNG extraídos a propósito en lugar de perder calidad por defecto.",
      ],
    },
    {
      heading: "Extraer, editar y volver a armar",
      id: "workflow",
      body: [
        "Extraer y reconstruir es la forma práctica de modificar una animación que no creaste tú. Saca aquí los fotogramas, haz el cambio que necesites (recortarlos, ajustar el color, quitar los que sobran, difuminar algo sensible) y después pasa el resultado por «Crear GIF».",
        "En el camino de vuelta hay algo que conservar: los tiempos. Anota la duración original de cada fotograma antes de empezar, porque reconstruir a otra velocidad cambia el carácter de la animación, a veces de forma drástica. Y mantén la numeración intacta, porque el orden en que los agregas es el orden en que se reproducirán.",
        "Todo se ejecuta en tu navegador en ambos extremos, así que un GIF con contenido que prefieres no subir se puede desarmar y volver a armar sin que salga de tu equipo.",
      ],
    },
  ],

  howToTitle: "Cómo extraer los fotogramas de un GIF",
  steps: [
    { title: "Sube un GIF", description: "Selecciona un GIF animado, o arrástralo y suéltalo en el área de trabajo." },
    { title: "Mira los fotogramas", description: "Cada fotograma se extrae y se compone por completo; los ves todos en una cuadrícula." },
    { title: "Descarga", description: "Guarda todos los fotogramas en un ZIP en PNG, JPG o WebP, o haz clic en cualquier fotograma para descargarlo solo." },
  ],

  features: [
    { icon: "burst_mode", title: "Todos los fotogramas", description: "Separa un GIF animado en todos sus fotogramas individuales, compuestos por completo para que cada uno sea una imagen entera." },
    { icon: "folder_zip", title: "Descarga masiva en ZIP", description: "Exporta todos los fotogramas a la vez en un ZIP numerado en PNG, JPG o WebP." },
    { icon: "lock", title: "100 % privado", description: "Los fotogramas se extraen por completo en tu navegador: tu GIF nunca se sube a un servidor." },
  ],

  faqs: [
    { q: "¿Los fotogramas son imágenes completas?", a: "Sí. Cada fotograma se compone respetando las instrucciones de eliminación del GIF, así que los fotogramas parciales se combinan en imágenes completas." },
    { q: "¿A qué formatos puedo exportar?", a: "PNG (con transparencia), JPG (con un color de fondo) o WebP." },
    { q: "¿Puedo descargar un solo fotograma?", a: "Sí. Haz clic en cualquier fotograma de la cuadrícula para descargarlo por separado, o usa el botón para descargar todos los fotogramas en un ZIP." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro, y el GIF se procesa localmente en tu navegador: no se sube nada." },
    { q: "¿Para qué quiero los fotogramas por separado?", a: "Para sacar una buena imagen fija de una animación, editar un fotograma concreto y reconstruir el bucle, estudiar un movimiento fotograma a fotograma, eliminar un fotograma que no querías o, simplemente, porque necesitabas una imagen estática y solo tenías el GIF." },
    { q: "¿Obtendré todos los fotogramas?", a: "Sí: el GIF se decodifica por completo en lugar de tomar muestras, así que recibes cada fotograma guardado en orden. Un bucle de tres segundos a 10 fotogramas por segundo da treinta imágenes, numeradas para conservar la secuencia." },
    { q: "¿Qué formato de exportación debo elegir?", a: "PNG en casi todos los casos. Los fotogramas de un GIF ya están limitados a 256 colores y PNG los guarda sin pérdida, así que no se degrada nada más; además conserva la transparencia del GIF. JPG añadiría artefactos de compresión encima de la limitación de la paleta y no admite transparencia." },
    { q: "¿Por qué algunos fotogramas se ven incompletos o transparentes?", a: "Porque el GIF guarda los fotogramas como diferencias respecto al anterior: solo los píxeles que cambiaron. El decodificador los vuelve a componer en imágenes completas, que es lo que recibes aquí. Si alguna vez viste en otra herramienta un fotograma de GIF en bruto que mostraba solo un fragmento, esa es la razón." },
    { q: "¿Puedo reconstruir un GIF después de editar los fotogramas?", a: "Sí. Extráelos aquí, edita los que quieras y vuelve a pasarlos por «Crear GIF» para armar el bucle de nuevo. Ese ida y vuelta es la forma habitual de corregir o limpiar una animación existente." },
    { q: "¿Funciona con un GIF muy largo?", a: "En general sí, aunque un GIF con cientos de fotogramas genera cientos de archivos y tarda más en decodificarse y comprimirse en ZIP. Todo ocurre en tu navegador, así que el límite práctico es la memoria de tu dispositivo, no un límite de subida." },
    { q: "¿Se suben mis GIF a un servidor?", a: "No. El archivo solo se lee y se separa dentro de tu navegador. oMyImage no ve, no guarda ni procesa tu GIF en ningún servidor, así que todo se queda en tu dispositivo." },
  ],

  security:
    "Tu GIF sigue siendo privado. La extracción de fotogramas ocurre por completo en tu navegador con la biblioteca de código abierto gifuct-js: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // GifToImagesTool.tsx
    "Please select a GIF file.": "Selecciona un archivo GIF.",
    "No frames found in this GIF.": "No se encontraron fotogramas en este GIF.",
    "Extracted 1 frame.": "Se extrajo 1 fotograma.",
    "Extracted {n} frames.": "Se extrajeron {n} fotogramas.",
    "Couldn't read that GIF.": "No se pudo leer ese GIF.",
    "Downloaded 1 frame as a ZIP.": "Se descargó 1 fotograma en un ZIP.",
    "Downloaded {n} frames as a ZIP.": "Se descargaron {n} fotogramas en un ZIP.",
    "Couldn't build the ZIP.": "No se pudo crear el ZIP.",
    "Select a GIF": "Seleccionar un GIF",
    "or drop an animated .gif here": "o suelta aquí un .gif animado",
    "1 frame": "1 fotograma",
    "{n} frames": "{n} fotogramas",
    "frame": "fotograma",
    "frames": "fotogramas",
    "Clear GIF": "Quitar GIF",
    "Change GIF": "Cambiar GIF",
    "Frame settings": "Ajustes de los fotogramas",
    "Frame Settings": "Ajustes de los fotogramas",
    "Download frame {n}": "Descargar fotograma {n}",
    "Frame {n}": "Fotograma {n}",
    "showing first {n}, all included in the ZIP": "se muestran los primeros {n}; el ZIP los incluye todos",
    "Click any frame to download it on its own.": "Haz clic en cualquier fotograma para descargarlo solo.",
    "Download 1 frame (ZIP)": "Descargar 1 fotograma (ZIP)",
    "Download all {n} frames (ZIP)": "Descargar los {n} fotogramas (ZIP)",
    "Download": "Descargar",
    "Output": "Salida",
    "Format": "Formato",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    "Working…": "Procesando…",
  },
};

export default content;
