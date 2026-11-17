import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/imagen-a-base64.
 *
 * Head term "Imagen a Base64" — the "X a Y" pattern of the converter family.
 * Secondary "convertir imagen a Base64", used in the intro, a heading and an
 * FAQ. The audience is technical, so HTML, CSS, data URI and MIME stay
 * untranslated.
 */
const content: ToolPageContent = {
  toolId: "image-to-base64",
  locale: "es",
  name: "Imagen a Base64",
  tagline:
    "Convierte una imagen a una cadena Base64 o data URI online, con salida en Base64 puro, CSS y HTML, y copia con un toque. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Imagen a Base64 – convertir y copiar gratis | oMyImage",
  metaDescription:
    "Imagen a Base64 gratis: genera un data URI, Base64 puro, una regla CSS o una etiqueta <img> y cópialo con un clic. Todo en tu navegador, sin subir nada.",

  intro:
    "Inserta tus imágenes directamente en el código. Con la herramienta Imagen a Base64 de oMyImage puedes convertir imagen a Base64: cualquier imagen se codifica como data URI en Base64 directamente en tu navegador, y además obtienes la cadena pura, una regla CSS de fondo y una etiqueta <img> lista para usar. Perfecto para incrustar iconos y logotipos pequeños sin una petición HTTP adicional. No se sube nada, así que tu imagen sigue siendo privada.",

  sections: [
    {
      heading: "Para qué sirve la codificación Base64",
      id: "what",
      body: [
        "Base64 reescribe datos binarios usando solo un conjunto limitado de caracteres de texto. Existe porque muchísimos sistemas se construyeron para transportar texto y se comportan de forma impredecible cuando reciben bytes en bruto: entre ellos, el cuerpo de los correos, las cargas JSON, los documentos XML, los atributos HTML, los parámetros de URL y muchos formatos de configuración.",
        "Al convertir imagen a Base64 puedes meter la propia imagen dentro de uno de esos canales de solo texto. Envuelta como data URI, con el tipo MIME declarado al principio, puede ir directamente en el atributo src de una etiqueta img o en una regla CSS background-image, y el navegador reconstruye los bytes originales.",
        "El costo es el tamaño. Cuatro caracteres transportan tres bytes, así que la forma de texto es aproximadamente un tercio más grande que el archivo, y no hay compresión que lo compense.",
      ],
    },
    {
      heading: "Cuándo incrustar ayuda y cuándo perjudica",
      id: "tradeoffs",
      body: [
        "La ventaja es una petición de red menos. Para un recurso muy pequeño, el viaje de ida y vuelta puede costar más tiempo que los propios bytes, así que incrustarlo realmente hace que la página se muestre antes. Unos 5 KB es la regla general habitual.",
        "Por encima de eso, incrustar suele salir perdiendo por motivos fáciles de pasar por alto. Una imagen incrustada no puede guardarse en caché por separado, así que se vuelve a descargar con el HTML en cada visita, mientras que un archivo de imagen normal se descarga una vez y se reutiliza. Tampoco admite carga diferida (lazy loading) e infla el propio documento, lo que retrasa el análisis y la primera visualización.",
        "La recomendación práctica: incrusta iconos, logotipos diminutos y marcadores de posición. Sirve las fotografías de forma normal.",
      ],
    },
    {
      heading: "El problema del correo electrónico",
      id: "email",
      body: [
        "Incrustar imágenes como data URI en correos HTML parece una forma elegante de no tener que alojar nada, y falla con tanta frecuencia que no es buena opción por defecto. Outlook para Windows, en particular, se ha negado durante mucho tiempo a mostrarlas, y varios otros clientes las eliminan o bloquean como medida de seguridad.",
        "Los métodos fiables son alojar la imagen y enlazarla, o adjuntarla y hacer referencia a ella con un identificador CID, el mecanismo para el que realmente se diseñaron los clientes de correo. Base64 en el correo solo vale la pena cuando controlas el cliente de cada destinatario.",
      ],
    },
    {
      heading: "Codificar no es cifrar",
      id: "security",
      body: [
        "A veces se confunde Base64 con una forma de ocultación o protección. No es ninguna de las dos. Cualquier consola del navegador, cualquier editor de texto con un decodificador o cualquiera de mil sitios web convierte la cadena de nuevo en la imagen original en un segundo. No hay clave ni secreto.",
        "Esto importa cuando la imagen en sí es sensible. Codificar en Base64 un documento, una identificación o una foto privada y pegarlo en un archivo de configuración, un ticket o un documento compartido la deja tan expuesta como si adjuntaras la imagen, y a menudo de forma menos evidente: la cadena parece un galimatías, lo que lleva a la gente a tratarla como segura.",
        "Aquí la codificación se hace en tu navegador, así que la imagen nunca se sube. La verdadera cuestión de privacidad está en lo que hagas con la cadena resultante.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen a Base64",
  steps: [
    { title: "Sube tu imagen", description: "Selecciona una imagen, o arrástrala y suéltala en el área de trabajo." },
    { title: "Elige el formato", description: "Cambia entre un data URI, Base64 puro, una regla CSS de fondo o una etiqueta <img>." },
    { title: "Copia o descarga", description: "Copia la cadena al portapapeles o descárgala como archivo .txt." },
  ],

  features: [
    { icon: "data_object", title: "Cuatro formatos de salida", description: "Obtén un data URI listo para usar, el Base64 puro, una regla CSS background-image o una etiqueta <img> completa." },
    { icon: "bolt", title: "Codificación instantánea", description: "La codificación ocurre en cuanto sueltas el archivo: sin esperas y sin subir nada." },
    { icon: "lock", title: "100 % privado", description: "Tu imagen se codifica en tu navegador y nunca se envía a un servidor." },
  ],

  faqs: [
    { q: "¿Qué es un data URI en Base64?", a: "Es una representación en texto de tu imagen que puedes incrustar directamente en HTML o CSS, evitando una petición de archivo aparte." },
    { q: "¿Por qué la cadena es más grande que mi archivo?", a: "La codificación Base64 añade aproximadamente un 33 % de sobrecarga, así que es más adecuada para imágenes pequeñas como iconos y logotipos." },
    { q: "¿Qué formatos se admiten?", a: "JPG, PNG, WEBP, GIF, BMP, SVG y AVIF." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro, y la imagen se codifica localmente en tu navegador: no se sube nada." },
    { q: "¿Por qué la cadena Base64 ocupa más que el archivo?", a: "Porque Base64 representa tres bytes binarios con cuatro caracteres de texto, así que la forma codificada es un 33 % más grande, más un poco por el prefijo del data URI. Esa sobrecarga es el precio de poder poner datos binarios donde solo se admite texto." },
    { q: "¿Cuándo conviene realmente usar un data URI?", a: "Para recursos pequeños: iconos, un logotipo en la firma de correo, un marcador de posición, una textura en una página HTML de un solo archivo. Por debajo de unos 5 KB, la petición HTTP que te ahorras suele compensar el aumento de tamaño. Por encima, un archivo de imagen normal servido aparte es más rápido." },
    { q: "¿Por qué mis imágenes incrustadas no se ven en el correo?", a: "Porque varios clientes de correo importantes bloquean o ignoran los data URI, y Outlook para Windows es el caso más persistente. Para el correo, aloja la imagen y enlázala, o usa un adjunto CID adecuado; el Base64 incrustado no es fiable en ese contexto." },
    { q: "¿El «cifrado» Base64 protege mi imagen?", a: "No, y es un malentendido común. Base64 es una codificación, no un cifrado: cualquiera puede revertirla trivialmente, sin ninguna clave. Hace que los datos binarios puedan transportarse como texto, pero no ofrece ninguna confidencialidad." },
    { q: "¿Puedo usar Base64 en CSS?", a: "Sí, como URL de background-image, y es una forma razonable de incrustar un icono o un patrón pequeño. Ten en cuenta que todos los visitantes descargan un data URI de una hoja de estilos, se aplique o no esa regla, y que no puede guardarse en caché aparte del CSS." },
    { q: "¿Qué formatos puedo convertir de imagen a Base64?", a: "JPG, PNG, WEBP, GIF, BMP, SVG y AVIF. La salida es un data URI completo con el tipo MIME correcto, así que puedes pegarlo directamente en una etiqueta img o en una hoja de estilos." },
    { q: "¿Cómo vuelvo a convertir una cadena Base64 en imagen?", a: "Usa la herramienta Base64 a imagen: pega el data URI o el Base64 puro, comprueba la vista previa y descarga el archivo como PNG, JPG o WEBP, también en tu navegador." },
  ],

  security:
    "Tu imagen sigue siendo privada. La codificación Base64 se hace por completo en tu navegador: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // ImageToBase64Tool.tsx — module-scope TABS
    "Data URI": "Data URI", // i18n-same
    "Raw Base64": "Base64 puro",
    "CSS": "CSS", // i18n-same
    "HTML": "HTML", // i18n-same
    // ImageToBase64Tool.tsx
    "Select an image": "Seleccionar imagen",
    "Change image": "Cambiar imagen",
    "Please select an image file.": "Selecciona un archivo de imagen.",
    "Couldn't read that image.": "No se pudo leer esa imagen.",
    "Copied to clipboard": "Copiado al portapapeles",
    "Copy failed.": "No se pudo copiar.",
    "or drop a JPG, PNG, WEBP, GIF or SVG here": "o suelta aquí un JPG, PNG, WEBP, GIF o SVG",
    "Encoding options": "Opciones de codificación",
    "Copy": "Copiar",
    "Output": "Salida",
    "{size} encoded": "{size} codificados",
    "Base64 Output": "Salida Base64",
    "Tip:": "Consejo:",
    "Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.":
      "Las cadenas Base64 son aproximadamente un 33 % más grandes que el archivo: ideales para iconos pequeños incrustados en CSS o HTML. Todo se ejecuta en tu navegador.",
  },
};

export default content;
