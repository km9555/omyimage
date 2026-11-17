import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/generador-de-memes.
 *
 * Primary query "Generador de memes"; the English loanword "Meme generator"
 * (18.1K/mo) is typed just as often, so it sits beside it in the metaTitle.
 * Secondary: "crear memes". The default captions ("TEXTO SUPERIOR" /
 * "TEXTO INFERIOR") are drawn INTO the exported image, so they are ui keys.
 */
const content: ToolPageContent = {
  toolId: "meme-generator",
  locale: "es",
  name: "Generador de memes",
  tagline:
    "Crea memes online: agrega los clásicos textos arriba y abajo a cualquier imagen con vista previa en vivo y exporta en PNG, JPG o WEBP. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Generador de memes – Meme generator gratis | oMyImage",
  metaDescription:
    "Generador de memes gratis: crea memes con tu propia imagen, agrega texto arriba y abajo, ajusta fuente y colores y descarga en PNG o JPG. Sin registro.",

  intro:
    "Convierte cualquier imagen en un meme en segundos. El generador de memes de oMyImage agrega los clásicos textos en negrita con contorno, arriba y abajo, a tus propias fotos o plantillas, con control total sobre la fuente, el tamaño y los colores y una vista previa en vivo mientras escribes. Los textos largos se ajustan solos en varias líneas. Crea memes y expórtalos en PNG, JPG o WEBP, todo en tu navegador y sin subir nada.",

  sections: [
    {
      heading: "Por qué los memes se ven como se ven",
      id: "convention",
      body: [
        "Las mayúsculas blancas y gruesas con contorno negro no son tanto una elección estética como un problema técnico ya resuelto. Un texto puesto sobre una fotografía tiene que seguir siendo legible sin importar lo que haya debajo, y ningún color por sí solo lo consigue: el blanco desaparece contra el cielo y el negro contra una sombra.",
        "El contorno lo resuelve porque garantiza un borde en el tono opuesto allí donde caiga cada letra. Impact, o cualquier sans serif gruesa y condensada, aporta la otra mitad: las letras son lo bastante estrechas para que una frase entera quepa a lo ancho de la imagen y lo bastante gruesas para sobrevivir a una compresión agresiva.",
        "El resultado se reconoce al instante, y eso en sí mismo es útil. El formato anuncia qué tipo de imagen es antes de que nadie haya leído una sola palabra.",
      ],
    },
    {
      heading: "Texto arriba, texto abajo, y por qué",
      id: "structure",
      body: [
        "La estructura de dos líneas es planteamiento y remate, y funciona porque la vista lee la imagen entre ambas. El texto superior plantea la situación, la imagen aporta el contexto y la línea inferior remata el chiste: esa pequeña pausa hace un trabajo cómico real.",
        "Por eso meterlo todo en una sola línea suele quedar plano, y por eso los textos muy largos fallan: cuando el lector llega al final, ya dejó de mirar la imagen. Las líneas cortas, idealmente de menos de unas ocho palabras cada una, mantienen el ritmo.",
        "El diseño alternativo, con una franja blanca encima o debajo de la imagen, sirve para pies de foto más largos y comentarios, y deja la fotografía despejada. Se lee más como un pie de foto que como un meme, y a veces ese es el tono adecuado.",
      ],
    },
    {
      heading: "Ajustes de exportación que sobreviven al compartir",
      id: "export",
      body: [
        "Unos 800 píxeles de ancho es el punto ideal en la práctica. Los memes se ven en el teléfono y todas las plataformas vuelven a codificar lo que subes, así que exportar a 4000 píxeles no aporta nada: el primer servicio que toque la imagen simplemente lo descartará.",
        "Vale la pena entender esa recodificación, porque explica el deterioro típico de un meme muy compartido. Cada plataforma vuelve a comprimir la imagen, los artefactos se acumulan sobre otros artefactos y, tras suficientes saltos, la imagen se ve visiblemente dañada. No puedes evitarlo, pero partir de una imagen limpia y de tamaño razonable lo retrasa bastante.",
        "Exporta en JPG con calidad alta los memes fotográficos, o en PNG si la imagen es un gráfico plano o una captura de pantalla: así los bordes del texto quedan más nítidos.",
      ],
    },
    {
      heading: "Todo se queda en tu dispositivo",
      id: "privacy",
      body: [
        "La imagen se compone en un canvas dentro de tu navegador, así que no se sube nada. Conviene saberlo, porque muchísimos memes se hacen con material privado (una captura de un chat de grupo, una foto de un compañero de trabajo, algo del álbum familiar) que nadie quiere entregar a un servidor solo para añadir dos líneas de texto.",
        "Además, la herramienta sigue funcionando sin conexión una vez cargada la página, y no hay cola, ni límite de uso, ni cuenta.",
      ],
    },
  ],

  howToTitle: "Cómo crear un meme",
  steps: [
    { title: "Subir", description: "Selecciona una imagen o plantilla de meme, o arrástrala al área de trabajo." },
    { title: "Escribir los textos", description: "Escribe el texto superior y el inferior y ajusta la fuente, el tamaño, el color y el contorno con la vista previa en vivo." },
    { title: "Exportar", description: "Haz clic en «Exportar meme» para descargar tu meme en PNG, JPG o WEBP." },
  ],

  features: [
    { icon: "text_fields", title: "Texto de meme clásico", description: "Textos en negrita estilo Impact con contorno negro, mayúsculas automáticas y salto de línea automático para los textos largos." },
    { icon: "palette", title: "Estilo completo", description: "Cambia la fuente, el tamaño, el color del texto y el color y grosor del contorno para lograr cualquier estilo de meme." },
    { icon: "lock", title: "Privado e instantáneo", description: "Tu meme se genera por completo en tu navegador: la imagen nunca se sube a ningún sitio." },
  ],

  faqs: [
    { q: "¿Puedo usar mi propia imagen?", a: "Sí. Sube cualquier JPG, PNG, WEBP o GIF y agrega tus textos: no hay un catálogo fijo de plantillas." },
    { q: "¿Los textos largos se ajustan?", a: "Sí. Los textos se reparten automáticamente en varias líneas para que siempre quepan en el ancho de la imagen." },
    { q: "¿En qué formato puedo exportar?", a: "PNG (sin pérdida), JPG (más ligero) o WEBP." },
    { q: "¿El generador de memes es gratis?", a: "Totalmente gratis, sin marca de agua y sin registro." },
    { q: "¿Mis imágenes son privadas?", a: "Sí. Todo se genera localmente en tu navegador; no se sube nada." },
    { q: "¿Por qué el texto de los memes siempre es blanco con contorno negro?", a: "Porque es la única combinación que sigue siendo legible sobre cualquier imagen. El blanco solo desaparece en un cielo claro; el negro solo, en la sombra. El contorno garantiza contraste con lo que haya detrás, y por eso la convención lleva veinte años sin cambiar." },
    { q: "¿Qué fuente debo usar?", a: "Impact es la clásica, y lo es por algo: condensada, gruesa y legible en tamaños pequeños, de modo que incluso una línea larga cabe a lo ancho de la imagen. Cualquier sans serif gruesa y condensada cumple la misma función si Impact no está disponible." },
    { q: "¿El texto va dentro de la imagen o encima?", a: "Dentro es el formato estándar y se comparte mejor, porque el meme es una sola imagen sin nada que se pueda separar. El texto en una franja arriba y abajo sirve para textos más largos y deja la imagen despejada, algo importante cuando la propia imagen lleva el chiste." },
    { q: "¿De qué tamaño debo exportar?", a: "Unos 800 píxeles de ancho son más que suficientes. Los memes se ven en el teléfono y cada plataforma por la que pasan los vuelve a comprimir, así que un archivo muy grande no aporta nada y solo tarda más en subirse." },
    { q: "¿Por qué mi meme se ve peor después de publicarlo?", a: "Porque las plataformas vuelven a codificar cada imagen subida, y cada vez que se comparte se comprime de nuevo. Ese daño acumulado es justo lo que da a los memes muy compartidos su aspecto deslavado y pixelado. Partir de una imagen limpia y de tamaño razonable frena el deterioro." },
    { q: "¿Puedo usar cualquier imagen?", a: "Técnicamente sí. Ten en cuenta que las fotografías tienen dueño y que un meme con la foto o la imagen de una persona puede plantear cuestiones de derechos de autor y de derecho a la propia imagen si se usa con fines comerciales. Para uso personal y en redes sociales rara vez es un problema práctico." },
    { q: "¿Puedo crear memes desde el teléfono?", a: "Sí. El generador de memes funciona en el navegador del teléfono: elige una imagen de tu galería, escribe los textos y descarga el meme terminado para enviarlo por WhatsApp o publicarlo." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. Los memes se generan por completo en tu navegador con canvas HTML: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // MemeTool.tsx — default captions, drawn INTO the image
    "TOP TEXT": "TEXTO SUPERIOR",
    "BOTTOM TEXT": "TEXTO INFERIOR",
    // MemeTool.tsx
    "Couldn't read that image.": "No se pudo leer esa imagen.",
    "Please select an image file.": "Selecciona un archivo de imagen.",
    "Select an image": "Seleccionar imagen",
    "Change image": "Cambiar imagen",
    "Meme exported — download started.": "Meme exportado: la descarga comenzó.",
    "Export failed.": "Error al exportar.",
    "or drop a JPG, PNG, WEBP or GIF here": "o suelta aquí un JPG, PNG, WEBP o GIF",
    "Meme settings": "Ajustes del meme",
    "Meme Settings": "Ajustes del meme",
    "Export": "Exportar",
    "Exporting…": "Exportando…",
    "Long captions wrap automatically. Everything runs in your browser.":
      "Los textos largos se ajustan automáticamente. Todo se ejecuta en tu navegador.",
    "Export meme": "Exportar meme",
    "Caption": "Texto",
    "Top text": "Texto superior",
    "Bottom text": "Texto inferior",
    "Font": "Fuente",
    "Size": "Tamaño",
    "UPPERCASE": "MAYÚSCULAS",
    "Style": "Estilo",
    "Text color": "Color del texto",
    "Outline color": "Color del contorno",
    "Outline thickness": "Grosor del contorno",
    "Quality": "Calidad",
    "PNG (lossless)": "PNG (sin pérdida)",
    "JPG (smaller)": "JPG (más ligero)",
  },
};

export default content;
