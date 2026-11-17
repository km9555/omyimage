import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/unir-gifs. Target query: «Unir GIFs» (neutral Spanish,
 * ES + MX, Nov 2026); «juntar GIFs» and «combinar GIFs» appear in the body
 * as natural variants.
 */
const content: ToolPageContent = {
  toolId: "gif-merger",
  locale: "es",
  name: "Unir GIFs",
  tagline:
    "Junta varios GIF animados en uno solo: ponlos en orden y se reproducen uno detrás de otro, cada fotograma con su propio tiempo. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Unir GIFs – combinar GIFs online gratis | oMyImage",
  metaDescription:
    "Unir GIFs online y gratis: combina varios GIF animados en uno, uno detrás de otro, elige el orden y conserva el tiempo de cada fotograma. Sin subir nada.",

  intro:
    "A veces un GIF no basta: una reacción necesita su respuesta, un tutorial viene en tres clips cortos, o un antes y después funciona mejor como una sola animación. Con «Unir GIFs» de oMyImage los juntas. Agrega dos o más GIF, ponlos en el orden que quieras, elige cómo deben encajar los GIF de distintos tamaños y únelos. El resultado reproduce cada GIF por turno, conserva el tiempo de cada fotograma y se repite en bucle como una sola animación.",

  sections: [
    {
      heading: "Orden y tiempos",
      id: "order",
      body: [
        "Los GIF se reproducen de arriba abajo, en el orden de la lista. Usa las flechas junto a cada GIF para subirlo o bajarlo, la cruz para quitarlo y «Agregar GIFs» para añadir más. La lista muestra el tamaño, el número de fotogramas y la duración de cada GIF, para que puedas planificar la secuencia.",
        "Cada fotograma mantiene su propia duración, así que cada parte se reproduce a su velocidad original, pausas incluidas. El GIF unido se repite como un todo: cuando termina el último GIF, vuelve a empezar el primero.",
      ],
    },
    {
      heading: "GIF de distintos tamaños",
      id: "sizes",
      body: [
        "Un GIF tiene un único tamaño para todos sus fotogramas, así que el GIF unido también necesita uno. Elige el tamaño del primer GIF, el del más grande o el del más pequeño. Los GIF que ya tienen ese tamaño se copian píxel a píxel; los demás se escalan para que encajen.",
        "«Ajustar dentro» mantiene cada fotograma completo y añade bordes donde las formas no coinciden, transparentes o del color que elijas. «Rellenar y recortar» escala cada fotograma para que cubra toda la salida y recorta lo que sobresale: no quedan bordes, pero se pierden los extremos de los GIF con otra proporción.",
      ],
    },
    {
      heading: "Colores y tamaño del archivo",
      id: "colours",
      body: [
        "Un GIF solo puede usar 256 colores a la vez. Cuando los GIF que unes comparten un conjunto pequeño de colores y el mismo tamaño, esos colores se conservan exactamente. Si no, se elige una paleta de 256 colores a partir de todos ellos; los GIF con colores muy distintos, como un dibujo animado y un clip de una foto real, pueden perder un poco de detalle de color.",
        "El archivo unido pesa más o menos lo mismo que todos los GIF sumados. Si es demasiado grande para el sitio al que va, pásalo después por «Comprimir GIF» o por «Redimensionar GIF».",
      ],
    },
    {
      heading: "Ideas",
      id: "ideas",
      body: [
        "Convierte tres grabaciones de pantalla cortas en un tutorial paso a paso. Encadena un GIF con una pregunta y su remate. Pon un clip del antes y otro del después en una sola animación. Vuelve a juntar, en un orden nuevo, las partes de un GIF largo que dividiste con «Cortar GIF». Haz un resumen con los mejores momentos de varios GIF de reacción.",
        "Esta herramienta junta los GIF en el tiempo, uno detrás de otro. Para acortar cada parte antes, usa «Cortar GIF»; para cambiar el ritmo de una parte, usa «Cambiar velocidad de GIF» antes de unirlos.",
      ],
    },
    {
      heading: "Bucles y efecto bumerán",
      id: "loops",
      body: [
        "El GIF unido se repite sin fin como una sola animación, aunque una de las partes estuviera configurada para reproducirse una sola vez. Eso permite un truco sencillo: une un GIF con una copia invertida de sí mismo, hecha con «Invertir GIF», y se reproducirá hacia delante y luego hacia atrás. Unir el mismo GIF dos veces duplica su duración sin cambiar su velocidad, algo práctico cuando un sitio exige una duración mínima.",
      ],
    },
    {
      heading: "Combinar GIFs para presentaciones y redes sociales",
      id: "social",
      body: [
        "Un solo GIF combinado se comparte más fácilmente que varios archivos: en una presentación, una publicación de un foro o un mensaje, toda la secuencia se reproduce de una vez y nadie tiene que abrir varios adjuntos. Vigila el tamaño del archivo, porque muchas plataformas tienen límites, y unas partes cortas dan un resultado ligero.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada GIF se decodifica y el GIF unido se escribe por completo en tu navegador. No se sube nada y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo unir GIFs",
  steps: [
    { title: "Agrega los GIF", description: "Selecciona dos o más GIF animados desde tu PC o tu teléfono." },
    { title: "Define el orden", description: "Sube o baja los GIF y elige el tamaño y cómo encajan los de otros tamaños." },
    { title: "Une y descarga", description: "Haz clic en «Unir GIFs», mira el resultado y descárgalo." },
  ],

  features: [
    { icon: "layers", title: "Uno detrás de otro", description: "Cada GIF se reproduce por turno, cada fotograma con su propio tiempo." },
    { icon: "swap_vert", title: "En cualquier orden", description: "Reordena, agrega o quita GIF antes de unirlos." },
    { icon: "lock", title: "Sin subir nada", description: "Se unen por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo junto varios GIF en uno?", a: "Agrega dos o más GIF, ponlos en orden y haz clic en «Unir GIFs». En el resultado se reproducen uno detrás de otro." },
    { q: "¿Puedo cambiar el orden?", a: "Sí. Usa las flechas hacia arriba y hacia abajo que hay junto a cada GIF." },
    { q: "¿Los GIF mantienen su velocidad?", a: "Sí. Cada fotograma conserva su duración original." },
    { q: "¿Qué pasa si los GIF tienen tamaños distintos?", a: "Elige el tamaño de salida y después «Ajustar dentro» para mantener los fotogramas completos con bordes, o «Rellenar y recortar» para evitar los bordes." },
    { q: "¿Los bordes pueden ser transparentes?", a: "Sí, de forma predeterminada. También puedes elegir un color." },
    { q: "¿Cambiarán los colores?", a: "No, si los GIF comparten pocos colores. Los GIF muy distintos comparten una paleta de 256 colores, lo que puede suavizar un poco los colores." },
    { q: "¿Cuánto pesará el GIF unido?", a: "Más o menos la suma de lo que pesan los GIF. Con «Comprimir GIF» puedes reducirlo después." },
    { q: "¿Puedo poner los GIF uno al lado del otro?", a: "No: esta herramienta une los GIF en el tiempo, uno detrás de otro." },
    { q: "¿Cuántos GIF puedo unir?", a: "Tantos como permita la memoria de tu dispositivo; unas cuantas docenas de GIF cortos no son ningún problema." },
    { q: "¿Se suben mis GIF a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de tu teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Puedo hacer un GIF con efecto bumerán?", a: "Sí. Crea una copia invertida con «Invertir GIF» y une las dos aquí." },
  ],

  security:
    "Tus GIF se unen por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // GifMergerTool.tsx
    "Select GIFs": "Seleccionar GIFs",
    "or drop two or more GIFs here": "o suelta dos o más GIF aquí",
    "Please select GIF files.": "Selecciona archivos GIF.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Add GIFs": "Agregar GIFs",
    "Clear all": "Quitar todo",
    "Remove": "Quitar",
    "Move up": "Subir",
    "Move down": "Bajar",
    "Add at least two GIFs to merge them.": "Agrega al menos dos GIF para unirlos.",
    "Merge settings": "Ajustes de unión",
    "Size": "Tamaño",
    "First GIF": "Primer GIF",
    "Largest": "El más grande",
    "Smallest": "El más pequeño",
    "GIFs of another size": "GIF de otro tamaño",
    "Fit inside": "Ajustar dentro",
    "Fill and crop": "Rellenar y recortar",
    "The whole frame stays visible, with borders where the shapes differ.": "El fotograma se ve completo, con bordes donde las formas no coinciden.",
    "The frame fills the output; edges that stick out are cropped.": "El fotograma llena la salida; los extremos que sobresalen se recortan.",
    "Transparent background": "Fondo transparente",
    "Background colour": "Color de fondo",
    "Merge GIFs": "Unir GIFs",
    "The GIFs play in the order of the list, each frame with its own timing.": "Los GIF se reproducen en el orden de la lista, cada fotograma con su propio tiempo.",
    "Processing failed.": "No se pudo procesar el archivo.",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Output: {w} × {h} px": "Salida: {w} × {h} px",
    "Result": "Resultado",
    "Download GIF": "Descargar GIF",
    "{n} frames": "{n} fotogramas",
    "{s} s": "{s} s", // i18n-same
    "Your files are processed in your browser and never uploaded.": "Tus archivos se procesan en tu navegador y nunca se suben.",
  },
};

export default content;
