import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/base64-a-imagen.
 *
 * Head term "Base64 a imagen" — the "X a Y" pattern of the converter family;
 * secondary "convertir Base64 a imagen", used in the intro, a heading and an
 * FAQ. Developers also type the English "base64 to image", mentioned once in
 * an FAQ. Technical audience, so data URI, MIME, JSON and API stay
 * untranslated.
 */
const content: ToolPageContent = {
  toolId: "base64-to-image",
  locale: "es",
  name: "Base64 a imagen",
  tagline:
    "Convierte una cadena Base64 o un data URI de vuelta en una imagen online: vista previa al instante y descarga en PNG, JPG o WEBP. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Base64 a imagen – decodificar data URI gratis | oMyImage",
  metaDescription:
    "Base64 a imagen gratis: pega un data URI o Base64 puro, ve la vista previa al instante y descárgala como PNG, JPG o WEBP. Todo en tu navegador, sin subir nada.",

  intro:
    "Convierte una cadena Base64 de nuevo en un archivo de imagen real. Con la herramienta Base64 a imagen de oMyImage puedes convertir Base64 a imagen: decodifica un data URI o Base64 puro directamente en tu navegador, muestra la vista previa al instante y te permite descargarla tal cual o convertirla a PNG, JPG o WEBP. No se sube nada, así que tus datos siguen siendo privados.",

  sections: [
    {
      heading: "Convertir Base64 a imagen: de texto a imagen otra vez",
      id: "what",
      body: [
        "Base64 existe para que los datos binarios puedan viajar por canales pensados para texto. Por eso las imágenes aparecen como largas cadenas de caracteres dentro de respuestas de API, cargas JSON, código HTML, archivos CSS, columnas de bases de datos y cuerpos de correo: en algún momento la imagen tuvo que caber en un lugar que solo aceptaba texto.",
        "Decodificar revierte la transformación exactamente. Base64 no tiene pérdida: cuatro caracteres vuelven a ser tres bytes, y lo que sale es byte por byte el archivo original. No se aproxima nada ni se pierde calidad, así que la imagen decodificada es idéntica a la que se codificó.",
        "El momento habitual en que necesitas esto es la depuración: tienes una respuesta o una línea de log con lo que debería ser una imagen y quieres ver si es la correcta, o si siquiera es una imagen válida.",
      ],
    },
    {
      heading: "Por qué una cadena no se decodifica",
      id: "troubleshooting",
      body: [
        "La inmensa mayoría de los fallos se deben a daños al copiar y pegar, no a datos realmente corruptos. Los visores de logs, los clientes de correo y las terminales insertan saltos de línea en las cadenas largas; los editores de texto ajustan las líneas; se quedan escapes de JSON. Cualquier carácter extraño rompe la decodificación.",
        "El truncamiento es la otra causa frecuente. Las consolas y los sistemas de logs suelen cortar los valores largos, a veces con puntos suspensivos y a veces sin avisar, así que tienes un fragmento que parece completo. Una cadena Base64 válida siempre tiene una longitud divisible entre cuatro, rellenada con uno o dos caracteres «=» al final si hace falta; si la tuya no la tiene, está incompleta.",
        "Ten cuidado también con el Base64 seguro para URL. Algunos sistemas sustituyen «+» y «/» por «-» y «_» para que la cadena pueda ir en una URL, y esas variantes deben convertirse de nuevo antes de que un decodificador estándar las acepte.",
      ],
    },
    {
      heading: "Con o sin prefijo",
      id: "prefix",
      body: [
        "Un data URI completo tiene el aspecto «data:image/png;base64,» seguido de los datos. Ese prefijo no forma parte de la codificación: es una declaración que le indica al navegador qué representan los bytes decodificados, y así es como una etiqueta img sabe que debe tratar el resultado como PNG y no como JPG.",
        "Aquí funcionan ambas formas. Si el prefijo está presente, se usa para determinar el formato de salida, que es el resultado más fiable. Sin él, el formato se deduce de los propios bytes decodificados, ya que todos los formatos de imagen empiezan con una firma reconocible.",
      ],
    },
    {
      heading: "Decodificado localmente, a propósito",
      id: "privacy",
      body: [
        "Todo ocurre dentro de la pestaña de tu navegador. En esta herramienta en particular no es un detalle menor, por el origen habitual de estas cadenas: respuestas de API internas, logs de producción, exportaciones de bases de datos y archivos de configuración.",
        "Pegar ese material en un sitio web que lo procesa en el servidor significa entregar todo lo que contenga la carga, junto con el contexto que la rodea. Aquí la cadena se decodifica en la página y la imagen resultante se ofrece como descarga: no se transmite nada y no queda ninguna copia en un servidor de la que preocuparse después.",
      ],
    },
  ],

  howToTitle: "Cómo convertir Base64 a imagen",
  steps: [
    { title: "Pega", description: "Pega un data URI o una cadena Base64 pura en el cuadro de entrada." },
    { title: "Revisa la vista previa", description: "La imagen decodificada aparece al instante, con sus dimensiones y una comprobación de validez." },
    { title: "Descarga", description: "Descarga la imagen original, o conviértela primero a PNG, JPG o WEBP." },
  ],

  features: [
    { icon: "image", title: "Decodificación instantánea", description: "Detecta automáticamente PNG, JPG, GIF, WEBP, BMP y SVG a partir de la cadena y muestra la vista previa mientras escribes." },
    { icon: "sync_alt", title: "Conversión al descargar", description: "Guarda la imagen decodificada tal cual, o vuelve a codificarla a PNG, JPG o WEBP con control de calidad." },
    { icon: "lock", title: "100 % privado", description: "La decodificación se hace por completo en tu navegador: no se sube nada a ningún servidor." },
  ],

  faqs: [
    { q: "¿Qué entrada acepta?", a: "Tanto data URI completos (data:image/png;base64,…) como cadenas Base64 puras. Con la entrada pura, el tipo de imagen se detecta automáticamente." },
    { q: "¿Puedo convertir el formato?", a: "Sí. Descarga el original, o elige PNG, JPG o WEBP para volver a codificarla antes de descargar." },
    { q: "¿Qué pasa si mi cadena no es válida?", a: "Verás un mensaje claro; comprueba que copiaste la cadena Base64 completa." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro, y la decodificación se hace localmente en tu navegador: no se sube nada." },
    { q: "¿Tengo que incluir el prefijo del data URI?", a: "No. Pega la cadena Base64 sola o el data URI completo que empieza por «data:image/…;base64,»: el prefijo se detecta y se procesa. Incluirlo ayuda, porque declara el formato de forma explícita en lugar de dejar que se deduzca." },
    { q: "¿Por qué mi cadena no se decodifica?", a: "Normalmente por espacios o saltos de línea que se colaron al copiarla de un log, un correo o un archivo JSON. El truncamiento es la otra causa común: los editores y las terminales cortan las cadenas largas. La longitud de una cadena Base64 válida siempre es múltiplo de cuatro, con relleno «=» al final si hace falta." },
    { q: "¿De dónde suelen salir estas cadenas?", a: "De respuestas de API que devuelven imágenes incrustadas, cargas JSON, columnas de bases de datos que guardan imágenes como texto, código HTML y CSS que estás depurando, el código fuente de un correo, archivos de configuración y salidas de logs. De cualquier lugar donde datos binarios tuvieron que pasar por un canal de solo texto." },
    { q: "¿En qué formato recibo la imagen?", a: "En el del original: el data URI lleva el tipo MIME, así que un PNG se decodifica como PNG y un JPG como JPG. Si la cadena no tiene prefijo, el formato se deduce de la firma (número mágico) de los bytes decodificados." },
    { q: "¿Hay un límite de tamaño?", a: "Solo la memoria de tu navegador. Las cadenas muy largas pueden tardar en pegarse y decodificarse, porque todo tiene que mantenerse en la página. Las imágenes de varios megabytes codificadas como texto son poco manejables por naturaleza, no por ningún límite de esta herramienta." },
    { q: "¿Se envían mis datos a algún sitio?", a: "No. La decodificación se hace en tu navegador, algo importante porque estas cadenas suelen venir de respuestas de API, sistemas internos y logs: justo el tipo de material que no debería pegarse en un servicio remoto." },
    { q: "¿Es lo mismo que «Base64 to Image»?", a: "Sí. «Base64 to Image» es el nombre en inglés de la misma conversión; aquí se llama Base64 a imagen. Pegas la cadena y recibes un archivo de imagen, todo en tu navegador." },
  ],

  security:
    "Tus datos siguen siendo privados. La decodificación Base64 se hace por completo en tu navegador: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // Base64ToImageTool.tsx
    "That doesn't look like a valid Base64 image string.":
      "Eso no parece una cadena Base64 de imagen válida.",
    "Image downloaded.": "Imagen descargada.",
    "Couldn't decode that string.": "No se pudo decodificar esa cadena.",
    "Canvas not supported.": "Este navegador no admite canvas.",
    "Downloaded as {format}.": "Descargada como {format}.",
    "Conversion failed.": "La conversión falló.",
    "Decoded image": "Imagen decodificada",
    "Clear input": "Borrar entrada",
    "Output settings": "Ajustes de salida",
    "Decoded": "Decodificada",
    "Paste a Base64 string to preview the image here.":
      "Pega una cadena Base64 para ver aquí la vista previa de la imagen.",
    "decoded preview": "vista previa decodificada",
    "Base64 Input": "Entrada Base64",
    "Download": "Descargar",
    "Download image": "Descargar imagen",
    "Download as {format}": "Descargar como {format}",
    "Paste a data URI (data:image/png;base64,…) or raw Base64":
      "Pega un data URI (data:image/png;base64,…) o Base64 puro",
    "Valid image detected.": "Imagen válida detectada.",
    "Convert & download": "Convertir y descargar",
    "Quality": "Calidad",
  },
};

export default content;
