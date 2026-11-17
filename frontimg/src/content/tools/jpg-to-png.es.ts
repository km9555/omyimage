import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/jpg-a-png.
 *
 * Head term "JPG a PNG" (9.9K ES / 22.2K MX) — Spanish converter queries take
 * the "X a Y" form. Secondary "convertir JPG a PNG", used in the intro, a
 * heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-png",
  locale: "es",
  name: "JPG a PNG",
  tagline:
    "Convierte imágenes JPG a PNG sin pérdida online, por lotes y sin perder calidad. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG a PNG – convertir gratis y sin pérdida | oMyImage",
  metaDescription:
    "JPG a PNG gratis y sin registro: convierte JPG a PNG sin pérdida, por lotes y directo en tu navegador. Ideal para editar, logotipos y gráficos. Sin subir nada.",

  intro:
    "¿Necesitas una copia sin pérdida de un JPG para editar o para trabajo gráfico? Con el convertidor JPG a PNG de oMyImage puedes convertir JPG a PNG limpio directamente en tu navegador, de uno en uno o por lotes. PNG no tiene pérdida y admite transparencia, así que es perfecto cuando no quieres más compresión. Sin subir archivos, sin registro y con resultados al instante.",

  sections: [
    {
      heading: "Lo que hace y lo que no hace esta conversión",
      id: "expectations",
      body: [
        "Convertir JPG a PNG cambia el contenedor, no el contenido. A partir de ahora PNG guardará la imagen sin pérdida, lo cual es realmente útil, pero no puede deshacer la compresión que el JPG ya aplicó. Si el original tiene bloques visibles en el cielo o un halo alrededor del texto, el PNG lo reproducirá fielmente.",
        "Piénsalo como congelar la imagen donde está. Cada guardado posterior es sin pérdida, así que la degradación deja de acumularse. Ese es el beneficio real, y por eso esta conversión va al principio de un flujo de edición y no al final.",
      ],
    },
    {
      heading: "Por qué los diseñadores convierten JPG a PNG antes de editar",
      id: "editing",
      body: [
        "JPG castiga la repetición. Abres un JPG, lo recortas, lo guardas, lo vuelves a abrir, ajustas los niveles, guardas de nuevo… y en cada ciclo se vuelve a codificar toda la imagen y se pierde un poco más. Tras unas cuantas pasadas el daño es evidente, sobre todo en los degradados suaves y alrededor de los bordes.",
        "PNG no tiene esa penalización. Una vez convertido, puedes guardar tantas veces como quieras sin pérdida acumulada, lo que lo convierte en el formato de trabajo lógico para todo lo que estés modificando. La otra mitad del motivo es la transparencia: no puedes borrar un fondo hasta dejarlo en nada mientras el archivo sea JPG, porque el formato no tiene dónde registrarlo. Convertir primero le da al canal alfa un lugar donde existir.",
      ],
    },
    {
      heading: "¿PNG o WEBP?",
      id: "webp",
      body: [
        "Si conviertes para editar o porque un sistema lo exige, PNG es lo correcto y el tamaño del archivo es simplemente el precio. Si el motivo es que quieres transparencia en una página web, WEBP suele ser mejor destino: admite un canal alfa completo como PNG, pero con una fracción del tamaño, y todos los navegadores actuales lo decodifican.",
        "La división práctica es el destino. PNG para archivos maestros, editores y todo lo que vaya a imprenta o a archivo. WEBP para todo lo que se sirva a un navegador. Convertir un JPG a un PNG de varios megabytes y luego ponerlo en un sitio web es un error común y costoso.",
      ],
    },
    {
      heading: "Capturas de pantalla y texto",
      id: "screenshots",
      body: [
        "Si tienes una captura de pantalla que se guardó como JPG, convertirla a PNG evita que empeore, pero no hará más nítido el texto que ya está borroso. JPG maneja mal los bordes de alto contraste, y las letras no son más que bordes de alto contraste, así que la característica pelusa alrededor de los caracteres ya forma parte de la imagen.",
        "La lección para la próxima vez es capturar en PNG desde el principio. La herramienta de capturas de cualquier sistema operativo puede configurarse para hacerlo, y en capturas de interfaces PNG suele ser a la vez más nítido y más ligero que el JPG equivalente.",
      ],
    },
  ],

  howToTitle: "Cómo convertir JPG a PNG",
  steps: [
    { title: "Sube tus JPG", description: "Selecciona una o varias imágenes JPG, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Revisa", description: "PNG no tiene pérdida, así que no hay ajustes de calidad que elegir: solo confirma tus archivos." },
    { title: "Convierte y descarga", description: "Haz clic en Convertir: un JPG se descarga como PNG y varios se descargan juntos en un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "JPG → PNG por lotes", description: "Convierte muchos JPG a PNG a la vez y descárgalos todos en un solo archivo ZIP." },
    { icon: "high_quality", title: "Salida sin pérdida", description: "PNG es un formato sin pérdida, así que tus imágenes convertidas conservan cada píxel de detalle." },
    { icon: "lock", title: "Privado e instantáneo", description: "La conversión se ejecuta localmente en tu navegador: tus JPG nunca salen de tu dispositivo." },
  ],

  faqs: [
    { q: "¿Por qué convertir JPG a PNG?", a: "PNG no tiene pérdida y admite transparencia, algo útil para editar, para logotipos y para gráficos en los que no quieres artefactos de compresión JPG." },
    { q: "¿El PNG pesará más que el JPG?", a: "Normalmente sí: PNG no tiene pérdida, así que las imágenes fotográficas crecen. A cambio, no hay más pérdida de calidad." },
    { q: "¿Puedo convertir varios JPG a la vez?", a: "Sí. Agrega todos los que quieras: varios archivos se descargan juntos en un ZIP." },
    { q: "¿Es gratis y privado?", a: "Completamente. Sin registro, sin marca de agua, y cada imagen se procesa en tu navegador." },
    { q: "¿Convertir JPG a PNG mejora la calidad?", a: "No, y es el malentendido más común sobre esta conversión. PNG no tiene pérdida, así que conserva la imagen a la perfección, pero el JPG ya había descartado detalle al crearse, y ese detalle ya no está. Obtienes una copia fiel y sin pérdida de una imagen con pérdida, no un original restaurado." },
    { q: "¿Añade transparencia?", a: "No por sí solo. PNG admite canal alfa, pero un JPG no tiene transparencia que trasladar, así que el resultado es totalmente opaco. Lo que hace la conversión es darte un archivo capaz de guardar transparencia en cuanto lo edites; por eso los diseñadores convierten antes de recortar un fondo." },
    { q: "¿Por qué el PNG pesa tanto más?", a: "Porque PNG nunca descarta datos. Una foto JPG de 500 KB suele convertirse en un PNG de 3 a 5 MB. Es el costo esperado de un formato sin pérdida y no indica que algo haya salido mal." },
    { q: "¿Cuándo debo convertir JPG a PNG?", a: "Antes de editar, cuando vayas a guardar varias veces y no quieras más degradación; cuando necesites añadir transparencia; cuando un sistema exija PNG específicamente; y en capturas de pantalla o imágenes con mucho texto donde los artefactos JPG son visibles." },
    { q: "¿La conversión elimina los artefactos de compresión JPG?", a: "No. Los bloques, las bandas y los halos alrededor de los bordes ya forman parte de los datos de la imagen, y PNG los guarda fielmente. Solo un modelo de restauración con IA puede atenuarlos, e incluso eso es reconstrucción, no recuperación." },
    { q: "¿Se suben mis JPG?", a: "No. La conversión de JPG a PNG se hace por completo en tu navegador con HTML canvas. Tus archivos no se envían a ningún servidor, no se guardan y no se rastrean." },
    { q: "¿Cómo consigo un PNG con fondo transparente a partir de un JPG?", a: "Convertir solo no basta, porque el fondo blanco del JPG son píxeles blancos reales. Usa la herramienta «Quitar fondo»: recorta el motivo y entrega directamente un PNG con fondo transparente." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La conversión de JPG a PNG se hace por completo en tu navegador con HTML canvas: no se sube nada. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // Drop hint from app/jpg-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG images here": "o suelta aquí imágenes JPG",
  },
};

export default content;
