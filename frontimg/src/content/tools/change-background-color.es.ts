import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/cambiar-fondo-foto (variant of remove-background: rembg
 * cut-out, then a colour composited in the browser). Target query «Cambiar
 * fondo de foto» (Nov 2026), secondaries «fondo blanco foto» (1.3K ES /
 * 2.9K MX) and «cambiar color de fondo». Neutral Spanish, tú. No authority
 * acceptance claimed; extra Spanish-only section on CV and profile photos.
 */
const content: ToolPageContent = {
  toolId: "change-background-color",
  locale: "es",
  name: "Cambiar fondo de foto",
  tagline:
    "Cambia el fondo de una foto a blanco, azul, rojo o el color que quieras. La IA recorta a la persona o el objeto y tú pruebas colores al instante: pensado para fotos de pasaporte, identificación y perfil.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Cambiar fondo de foto – fondo blanco gratis | oMyImage",
  metaDescription:
    "Cambiar fondo de foto con IA: pon un fondo blanco, azul, rojo o de cualquier color. Ideal para foto carnet, currículum y perfil. Gratis, sin marca de agua.",

  intro:
    "Los formularios y las oficinas que expiden documentos son estrictos con una cosa más que con ninguna otra: el fondo. Unos piden blanco liso, otros azul claro, otros rojo, y una foto tomada delante de la pared de la cocina se rechaza. Esta herramienta recorta a la persona (o un producto) con un modelo de IA y la coloca sobre un color sólido de tu elección, para que una foto hecha en casa se convierta en una foto de identificación o de perfil utilizable. El recorte se hace una sola vez; después, cambiar entre blanco, azul, rojo o cualquier color personalizado es instantáneo y gratis. Así puedes cambiar el color de fondo o, simplemente, poner la foto con fondo blanco.",

  sections: [
    {
      heading: "¿Qué color de fondo piden los formularios?",
      id: "colours",
      body: [
        "El blanco o un gris muy claro es el requisito más común para las fotos de pasaporte y visa en todo el mundo, incluidos la mayoría de los de la India, Estados Unidos y el Reino Unido. El azul claro es habitual en algunos documentos nacionales de identidad y en credenciales de estudiante o de empleado. Los fondos rojos o azules son el estándar en las pas foto de Indonesia, donde la institución fija el color.",
        "Sigue siempre la instrucción exacta de tu documento: esta herramienta te da el color, pero no puede saber cuál pide tu oficina. Los cuatro colores de identificación de la parte superior de los ajustes son un punto de partida, y debajo puedes elegir cualquier otro color.",
      ],
    },
    {
      heading: "Cómo se reemplaza el fondo",
      id: "how",
      body: [
        "Primero, un modelo de segmentación con IA en nuestro servidor encuentra al sujeto (la persona, con su pelo y sus hombros, o el producto) y lo devuelve recortado, con el entorno transparente. Después, tu navegador coloca ese recorte sobre el color que elegiste y guarda un JPG.",
        "Como el segundo paso ocurre en tu dispositivo, cambiar el color no vuelve a ejecutar la IA: puedes comparar blanco, azul y rojo en unos segundos, y solo el primer paso cuenta como una pasada de IA.",
      ],
    },
    {
      heading: "Un borde limpio alrededor del pelo",
      id: "edges",
      body: [
        "El pelo es la parte más difícil de cualquier recorte. Fotografía a la persona delante de un fondo que contraste con su pelo (una pared clara detrás de un pelo oscuro, o al revés) y evita el contraluz de una ventana, que hace brillar el borde del pelo.",
        "Asegúrate de que los hombros y la parte de arriba de la cabeza queden completamente dentro de la foto, con algo de espacio alrededor. Un recorte no puede reconstruir la parte de una cabeza que el encuadre original dejó fuera, y las normas de las fotos de pasaporte suelen exigir de todos modos un margen sobre la cabeza.",
      ],
    },
    {
      heading: "Después del fondo",
      id: "next",
      body: [
        "Las fotos de identificación suelen tener también reglas de tamaño. Cuando el fondo esté bien, recorta la foto a las proporciones requeridas con «Recortar imagen» y, si el formulario limita el tamaño del archivo, redúcelo por debajo del límite en una de las páginas para comprimir una imagen a un tamaño en KB (por ejemplo, «Comprimir imagen a 50 KB»): los formularios de exámenes y trámites en línea a menudo piden menos de 50 KB o 100 KB.",
        "Si necesitas directamente una foto carnet con las medidas listas para imprimir, «Foto carnet» combina el cambio de fondo, el encuadre de la cara y una hoja de impresión en un solo paso.",
      ],
    },
    {
      heading: "Fondo blanco para tu foto de currículum o de perfil",
      id: "cv",
      body: [
        "Un fondo liso y tranquilo hace que una foto de currículum, de LinkedIn o de una plataforma de empleo se vea más profesional. El blanco es lo más neutro; un gris claro o un azul suave dan algo más de calidez sin distraer. Prueba varios tonos con el selector de color y compáralos antes de descargar.",
        "Para que el resultado se vea natural, usa una foto con buena luz frontal y sin sombras fuertes en la pared de detrás. Si la ropa es del mismo color que el fondo que vas a poner, elige otro tono para que los hombros no se confundan con él.",
      ],
    },
  ],

  howToTitle: "Cómo cambiar el color de fondo de una foto",
  steps: [
    { title: "Sube la foto", description: "Selecciona un JPG, PNG o WEBP en el que la persona o el objeto se vean con claridad." },
    { title: "Quita el fondo", description: "Pulsa «Cambiar fondo»: la IA recorta al sujeto en unos segundos." },
    { title: "Elige un color y descarga", description: "Prueba al instante blanco, azul, rojo o cualquier otro color y luego descarga el JPG." },
  ],

  features: [
    { icon: "format_color_fill", title: "Cualquier color, al instante", description: "Los colores de identificación blanco, azul y rojo a un toque, más un selector para cualquier otro, sin pasadas de IA extra por color." },
    { icon: "badge", title: "Pensado para fotos de identificación", description: "Un recorte limpio alrededor del pelo y los hombros sobre el color liso que piden los formularios." },
    { icon: "verified_user", title: "Sin marca de agua", description: "Gratis y sin nada estampado en el resultado." },
  ],

  faqs: [
    { q: "¿Cómo pongo una foto con fondo blanco?", a: "Sube la foto y pulsa «Cambiar fondo». El blanco viene seleccionado de inicio, así que en cuanto aparezca el recorte puedes descargar directamente el JPG con fondo blanco." },
    { q: "¿Puedo poner el fondo azul o rojo para una foto de identificación?", a: "Sí. Después del recorte, toca la muestra azul o roja, o elige cualquier tono con el selector de color. El cambio es instantáneo." },
    { q: "¿Cambiar el color gasta otra pasada de IA?", a: "No. Solo el primer paso, encontrar al sujeto, se ejecuta en nuestro servidor. Probar otros colores después ocurre en tu navegador." },
    { q: "¿La foto cumplirá las normas del pasaporte?", a: "El fondo quedará liso y uniforme, que es la parte que controla esta herramienta. El tamaño, la posición de la cabeza, la iluminación y la expresión son reglas aparte que debes comprobar para tu documento." },
    { q: "¿Puedo usarla para fotos de producto?", a: "Sí. Los marketplaces suelen exigir un fondo blanco puro; la herramienta recorta el producto y lo pone sobre blanco igual que hace con una persona." },
    { q: "¿Por qué el resultado es JPG y no PNG?", a: "Un fondo de color sólido no tiene transparencia que conservar, y casi todos los formularios piden JPG. Para un recorte con fondo transparente, usa «Quitar fondo»." },
    { q: "¿Se guarda mi foto?", a: "Solo por poco tiempo. El recorte se hace en nuestro servidor, se guarda tras un enlace privado y se borra automáticamente en menos de una hora; el color se aplica en tu dispositivo." },
    { q: "¿Sirve para la foto del currículum?", a: "Sí. Un fondo liso y discreto (blanco, gris claro o un azul suave) hace que una foto de currículum o de LinkedIn se vea más profesional. Elige el color con el selector y compara varios tonos antes de descargar." },
  ],

  security:
    "La eliminación del fondo se ejecuta en nuestro servidor con el motor de código abierto rembg; el resultado se guarda solo un breve tiempo tras un enlace de descarga privado y se borra automáticamente en menos de una hora. El nuevo color se aplica en tu navegador, y nada se comparte ni se reutiliza.",
};

export default content;
