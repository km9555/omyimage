import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/foto-carnet. Target query «Foto carnet» (33.1K ES, Nov
 * 2026), secondaries «foto DNI» (14.8K ES), «foto tamaño carnet», «foto para
 * pasaporte» and «foto infantil» (6.6K MX). Neutral Spanish, tú.
 *
 * Preset rules (i18n-es-brief): the tool's sizes are 35×45 mm, 2×2 in,
 * 3×4 cm, 4×6 cm, 2×3 cm, 5×7 cm, 33×48 mm and 50×70 mm. There is NO Spanish
 * DNI (26×32 mm) and NO Mexican «infantil» (2.5×3 cm) preset, so the copy
 * says so plainly and never promises one, and it never claims that any
 * authority accepts the result. Framing, sizing and print sheets run in the
 * browser; only the optional background change uses the server.
 */
const content: ToolPageContent = {
  toolId: "passport-photo-maker",
  locale: "es",
  name: "Foto carnet",
  seoName: "Generador de foto carnet",
  tagline:
    "Haz fotos de pasaporte, visa e identificación en casa: la cara se encuadra automáticamente al tamaño que necesitas (35 × 45 mm, 2 × 2 in, 3 × 4 cm y más) y obtienes una foto a 300 DPI más una hoja de impresión con varias copias. Gratis y privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },
  variantsHeading: "Tamaños de foto carnet y de pasaporte",

  metaTitle: "Foto carnet – hacer foto tamaño carnet gratis | oMyImage",
  metaDescription:
    "Haz tu foto carnet online: encuadre automático de la cara, fondo blanco y hoja de impresión a 300 DPI. Foto para pasaporte 35 × 45 mm. Gratis y privado.",

  intro:
    "Una foto carnet es sobre todo una cuestión de geometría: el tamaño de papel correcto, la cabeza a la altura correcta y el espacio justo por encima. Esta herramienta hace esa geometría por ti. Sube una foto nítida de frente, elige el tamaño del documento y la herramienta encuentra la cara, encuadra la cabeza y los hombros con las proporciones que usan las normas de las fotos de pasaporte y genera un JPG listo para imprimir a 300 DPI. Puedes ajustar el encuadre a mano, cambiar el fondo a blanco liso o a otro color, mantener el archivo por debajo de un límite en KB para formularios en línea y descargar una hoja de 10 × 15 cm (4 × 6 in) o A4 con todas las copias que quepan. Sirve para una foto para pasaporte o visa, para credenciales y para muchos trámites; más abajo explicamos qué pasa con la foto DNI y la foto infantil.",

  sections: [
    {
      heading: "Tamaños de foto de pasaporte por país",
      id: "sizes",
      body: [
        "La India, el Reino Unido, la Unión Europea y los países del espacio Schengen, Rusia y Australia usan 35 × 45 mm (3,5 × 4,5 cm) para las fotos de pasaporte, con la cabeza ocupando aproximadamente entre dos tercios y tres cuartos de la altura de la foto. Estados Unidos usa 2 × 2 pulgadas (51 × 51 mm) para pasaportes y visas, y la India usa el mismo tamaño de 2 × 2 pulgadas para visas y tarjetas OCI. Brasil e Indonesia usan 3 × 4 cm para la mayoría de los documentos; Indonesia también usa 2 × 3 y 4 × 6 cm. La foto de pasaporte de Canadá mide 50 × 70 mm y la foto para la visa de China, 33 × 48 mm.",
        "Las normas cambian y son distintas para un pasaporte, una visa o un formulario de examen, así que toma esta lista como punto de partida y consulta las instrucciones vigentes de tu documento. La herramienta incluye todos los tamaños anteriores; elige el que indique tu formulario.",
      ],
    },
    {
      heading: "Foto DNI, foto para pasaporte y foto infantil",
      id: "dni-infantil",
      body: [
        "Mucha gente busca «foto DNI» o «foto infantil», así que conviene ser claro: la herramienta no tiene un formato propio para la foto del DNI español (26 × 32 mm) ni para la foto tamaño infantil que se usa en México (2,5 × 3 cm). Sus tamaños son los de la lista anterior: 35 × 45 mm, 2 × 2 in, 3 × 4 cm, 4 × 6 cm, 2 × 3 cm, 5 × 7 cm, 33 × 48 mm y 50 × 70 mm. No elijas uno parecido para un trámite que pide otro tamaño.",
        "Donde sí encaja bien es en la foto para pasaporte o visado de 35 × 45 mm, el formato habitual en la Unión Europea y el espacio Schengen, en las visas de Estados Unidos (2 × 2 in) y en credenciales, carnés de estudiante o de empresa y formularios en línea que aceptan una foto tuya. Ninguna herramienta puede garantizar que una oficina acepte la foto: cada organismo decide qué admite, así que revisa siempre sus requisitos antes de imprimir o subir el archivo.",
      ],
    },
    {
      heading: "Cómo funciona el encuadre automático",
      id: "framing",
      body: [
        "Un modelo de detección de caras encuentra la cara en tu foto, en tu dispositivo y sin subirla. A partir de la posición de la cara, la herramienta calcula la cabeza completa, desde lo alto del pelo hasta la barbilla, y escala el encuadre para que la cabeza ocupe la parte de la altura que piden las normas de las fotos de pasaporte, centrada de izquierda a derecha y con un poco más de espacio sobre la cabeza que a los lados.",
        "Los peinados, los sombreros y los ángulos poco habituales pueden desviar un poco el cálculo, así que revisa la vista previa. El control «Tamaño de la cabeza» la hace más grande o más pequeña, los controles de posición mueven el encuadre y «Restablecer encuadre» vuelve al resultado automático.",
      ],
    },
    {
      heading: "Cómo hacer una foto carnet que cumpla",
      id: "taking",
      body: [
        "Colócate a un metro más o menos de una pared lisa y clara, mirando de frente a la cámara, con una luz uniforme en la cara: la luz del día de una ventana que tengas delante funciona bien; una luz dura desde arriba, no. Mantén una expresión neutra, con la boca cerrada y los dos ojos abiertos, y quítate las gafas o lentes si las normas de tu documento lo exigen (muchas ya lo hacen).",
        "Pide a otra persona que te haga la foto desde aproximadamente 1,5 metros en lugar de hacerte un selfie con el brazo estirado, que deforma la cara. Haz varias y elige la más nítida: el encuadre se puede corregir aquí; el enfoque, no.",
      ],
    },
    {
      heading: "Imprimir al tamaño correcto",
      id: "printing",
      body: [
        "La foto se guarda a 300 DPI, la resolución que esperan las tiendas de fotografía y las impresoras de fotos, así que se imprime exactamente al tamaño del documento: una foto de 35 × 45 mm mide 413 × 531 píxeles. La hoja de impresión coloca todas las copias que caben en papel fotográfico de 10 × 15 cm (4 × 6 in) o en A4, con líneas grises finas para recortar.",
        "Imprime la hoja al 100 % («tamaño real»), no con «ajustar a la página», o las fotos saldrán un poco más pequeñas. Una copia de 10 × 15 cm es la opción más barata en la mayoría de las tiendas de fotografía y contiene varias fotos de 35 × 45 mm.",
      ],
    },
    {
      heading: "Fotos para solicitudes en línea",
      id: "online",
      body: [
        "Los formularios en línea de exámenes, procesos de selección, visas y documentos de identidad suelen pedir un JPG por debajo de un límite de tamaño, a menudo 50 KB, 100 KB o 200 KB. Escribe el límite en «Tamaño máximo del archivo» y la foto descargada se mantendrá por debajo; el tamaño de impresión sigue siendo correcto aunque haya que reducir píxeles, porque el valor de DPI se ajusta en consecuencia.",
      ],
    },
  ],

  howToTitle: "Cómo hacer una foto tamaño carnet",
  steps: [
    { title: "Sube un retrato", description: "Elige una foto nítida y de frente, en JPG, PNG o WEBP." },
    { title: "Elige el tamaño", description: "Selecciona el tamaño de tu documento; la cara se encuadra automáticamente y puedes ajustarla a mano." },
    { title: "Descarga la foto o la hoja", description: "Guarda la foto individual a 300 DPI o una hoja de 10 × 15 cm o A4 con varias copias para imprimir." },
  ],

  features: [
    { icon: "badge", title: "Encuadre automático", description: "La detección de caras ajusta el tamaño y centra la cabeza como piden las normas de las fotos de pasaporte, en todos los tamaños de documento habituales." },
    { icon: "grid_view", title: "Hojas de impresión", description: "Todas las copias que caben en papel fotográfico de 10 × 15 cm o en A4, con líneas de corte, a 300 DPI." },
    { icon: "lock", title: "Privado por defecto", description: "El encuadre y la impresión ocurren en tu navegador; solo el cambio de fondo opcional usa nuestro servidor." },
  ],

  faqs: [
    { q: "¿Cuánto mide una foto de pasaporte en cm?", a: "3,5 × 4,5 cm (35 × 45 mm) en la India, el Reino Unido, la Unión Europea y muchos otros países. Estados Unidos usa 2 × 2 pulgadas (5,1 × 5,1 cm), y Brasil e Indonesia usan 3 × 4 cm para la mayoría de los documentos." },
    { q: "¿Cuántos píxeles tiene una foto de pasaporte?", a: "A la resolución de impresión habitual de 300 DPI, 35 × 45 mm son 413 × 531 píxeles y 2 × 2 pulgadas son 600 × 600 píxeles. La herramienta guarda exactamente esos tamaños." },
    { q: "¿Puedo poner el fondo blanco?", a: "Sí. Elige «Cambiar color» en «Fondo»; la persona se recorta y se coloca sobre blanco o sobre el color que elijas. Este paso usa una pasada de IA en nuestro servidor." },
    { q: "¿Cómo imprimo varias fotos carnet en una sola hoja?", a: "Descarga la hoja de impresión de 10 × 15 cm o A4 e imprímela al 100 %. Una hoja de 10 × 15 cm contiene varias fotos de 35 × 45 mm, con líneas grises para recortar." },
    { q: "¿Puedo hacer una foto de menos de 50 KB para un formulario en línea?", a: "Sí. Escribe 50 en «Tamaño máximo del archivo» antes de descargar; la foto se mantiene por debajo de 50 KB y su tamaño de impresión sigue siendo correcto." },
    { q: "¿Me aceptarán la foto?", a: "La herramienta acierta con el tamaño y el encuadre. La iluminación, la expresión, las gafas o lentes, la posición de la cabeza y la antigüedad de la foto son normas que debes cumplir al tomarla: consulta las instrucciones de tu documento. Si una oficina admite o no fotos hechas por ti, lo decide ella." },
    { q: "¿Se sube mi foto?", a: "No: la detección de la cara, el encuadre y la impresión funcionan en tu navegador. Solo si cambias el fondo se envía la foto a nuestro servidor, donde el recorte se borra automáticamente en menos de una hora." },
    { q: "¿Puedo usar un selfie?", a: "Mejor no. Un teléfono con el brazo estirado deforma la cara, y la mayoría de las normas piden una foto tomada a unos 1,5 m. Pide a alguien que te la haga, o usa el temporizador y un soporte." },
    { q: "¿Puedo hacer la foto del DNI con esta herramienta?", a: "No hay un formato específico para el DNI español (26 × 32 mm), y no conviene usar otro tamaño parecido. Consulta los requisitos oficiales del DNI y, si necesitas ese tamaño exacto, acude a un estudio fotográfico." },
    { q: "¿Y la foto tamaño infantil para México?", a: "Tampoco hay un formato infantil (2,5 × 3 cm) en la herramienta. Sí tienes 3 × 4 cm, 2 × 3 cm y 4 × 6 cm, entre otros; usa uno solo si el trámite pide exactamente esa medida." },
    { q: "¿Sirve para la foto del currículum?", a: "Sí. Para un currículum no hay un tamaño obligatorio; un encuadre de 35 × 45 mm o 3 × 4 cm con un fondo liso y discreto se ve limpio y encaja bien en el documento. Si lo subes a un portal de empleo con límite de tamaño, indica el máximo en KB." },
  ],

  security:
    "La detección de la cara, el encuadre, el cambio de tamaño y las hojas de impresión funcionan por completo en tu navegador: la foto no sale de tu dispositivo. Si decides cambiar el fondo, la foto se envía una vez por una conexión cifrada a nuestro motor de eliminación de fondo (rembg), y el resultado se borra automáticamente en menos de una hora.",

  ui: {
    // PassportPhotoTool.tsx — document sizes (module scope)
    "35 × 45 mm — passport: India, UK, EU, Russia": "35 × 45 mm – pasaporte y visa: UE, Reino Unido, India, Rusia",
    "2 × 2 in (51 × 51 mm) — US passport and visa": "2 × 2 in (51 × 51 mm) – pasaporte y visa de EE. UU.",
    "3 × 4 cm — documents: Brazil, Indonesia": "3 × 4 cm – documentos: Brasil, Indonesia",
    "4 × 6 cm — pas foto (Indonesia)": "4 × 6 cm – documentos (Indonesia)",
    "2 × 3 cm — pas foto (Indonesia)": "2 × 3 cm – documentos (Indonesia)",
    "5 × 7 cm — document photo (Brazil)": "5 × 7 cm – foto para documentos (Brasil)",
    "33 × 48 mm — China visa": "33 × 48 mm – visa de China",
    "50 × 70 mm — Canada passport": "50 × 70 mm – pasaporte de Canadá",
    "2 × 2 in": "2 × 2 in", // i18n-same
    // PassportPhotoTool.tsx
    "Select a photo": "Seleccionar foto",
    "Please select an image.": "Selecciona una imagen.",
    "or drop a JPG, PNG or WEBP portrait here": "o suelta aquí un retrato JPG, PNG o WEBP",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "No face found — the photo is centred instead. Use the controls to frame it.": "No se encontró ninguna cara: la foto se ha centrado. Usa los controles para encuadrarla.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Processing failed.": "Error al procesar.",
    "Looking for the face…": "Buscando la cara…",
    "Printed size: {size} at 300 DPI ({px})": "Tamaño impreso: {size} a 300 DPI ({px})",
    "The photo has little room above the head, so the frame was moved to fit. Changing the background restores the usual spacing.": "La foto tiene poco espacio sobre la cabeza, así que el encuadre se ha desplazado para que quepa. Al cambiar el fondo se recupera el margen habitual.",
    "Preview": "Vista previa",
    "Photo settings": "Ajustes de la foto",
    "Document size": "Tamaño del documento",
    "Head size": "Tamaño de la cabeza",
    "Move left / right": "Mover a izquierda / derecha",
    "Move up / down": "Mover arriba / abajo",
    "Reset framing": "Restablecer encuadre",
    "Background": "Fondo",
    "Keep original": "Mantener original",
    "Change colour": "Cambiar color",
    "Removing background…": "Quitando el fondo…",
    "Background colour": "Color de fondo",
    "Max file size (optional)": "Tamaño máximo del archivo (opcional)",
    "KB": "KB", // i18n-same
    "For forms with a limit such as 50 KB. Leave empty for the best quality.": "Para formularios con un límite, como 50 KB. Déjalo vacío para obtener la mejor calidad.",
    "Original: {size}": "Original: {size}", // i18n-same
    "Changing the background uses one AI run on our server; everything else stays in your browser.": "Cambiar el fondo usa una pasada de IA en nuestro servidor; todo lo demás se queda en tu navegador.",
    "Download photo": "Descargar foto",
    "Saving…": "Guardando…",
    "Download 4×6 in print sheet ({n} photos)": "Descargar hoja de 10 × 15 cm ({n} fotos)",
    "Download A4 print sheet ({n} photos)": "Descargar hoja A4 ({n} fotos)",
    "Could not get under {size} — the smallest file is used.": "No se pudo bajar de {size}: se usa el archivo más pequeño posible.",
  },
};

export default content;
