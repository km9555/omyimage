import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/comprimir-imagen. Structure lives
 * in ToolPageShell.
 *
 * Target query "comprimir imagen" (14.8K ES / 27.1K MX per month). Secondaries:
 * "comprimir imágenes", "reducir tamaño de imagen", "comprimir JPG",
 * "comprimir PNG", "reducir peso imagen" — used in the intro, one heading
 * each and the FAQs. Addressed in "tú"; the FAQs add the questions Spanish-
 * speaking users ask (upload limits of job and government portals in general
 * terms, privacy) that English lacks.
 *
 * FORMATS labels are module scope in CompressTool.tsx and are maintained here
 * by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "compress-image",
  locale: "es",
  name: "Comprimir imagen",
  tagline:
    "Comprime imágenes JPG, PNG y WEBP online: por calidad o directamente a un tamaño exacto como 50 KB o 100 KB. Por lotes y con el ahorro a la vista. Gratis, rápido y privado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen online gratis – JPG, PNG y WEBP | oMyImage",
  metaDescription:
    "Comprimir imagen gratis: reduce el tamaño de imágenes JPG, PNG y WEBP a pocos KB, también por lotes. Sin registro, sin marca de agua y en tu navegador.",

  variantsHeading: "Comprimir a un tamaño de archivo exacto",

  intro:
    "Las imágenes pesadas hacen lentas las páginas web, llenan el almacenamiento, saturan los correos y, muchas veces, los formularios de carga las rechazan sin más. Con «Comprimir imagen» de oMyImage reduces el peso de archivos JPG, PNG y WEBP directamente en tu navegador, de dos maneras: por calidad, convirtiendo a WEBP para lograr el archivo más pequeño, ajustando la calidad y, si quieres, achicando las fotos muy grandes; o por tamaño de archivo, escribiendo un límite como 50 KB para obtener la imagen más nítida que quepa por debajo. Los PNG se comprimen de verdad, reduciendo colores con tramado (dithering) en lugar de solo volver a guardarlos. Puedes comprimir imágenes de una en una o un lote completo, y ver exactamente cuánto ahorraste.",

  sections: [
    {
      heading: "Por qué comprimir imágenes importa más que cualquier otra cosa en una página",
      id: "why",
      body: [
        "Las imágenes son casi siempre lo más pesado que carga una página web: a menudo más que el HTML, el CSS y el JavaScript juntos. Por eso dominan el Largest Contentful Paint, la métrica de Core Web Vitals que mide cuánto espera un visitante hasta ver el contenido principal. Reducir a la mitad el peso de tus imágenes suele mejorar la velocidad percibida más que cualquier optimización de código.",
        "No se trata solo de velocidad. La mayor parte del mundo navega con datos del teléfono, y una imagen de portada sin comprimir gasta el plan de datos de alguien para entregar detalles que su pantalla no puede mostrar. Una foto de 4 MB mostrada en una columna de 800 píxeles de ancho entrega unas diez veces más información de la que la pantalla puede aprovechar.",
        "Además está el día a día: portales de empleo, trámites en línea, tiendas y sistemas de recursos humanos suelen aceptar solo archivos de menos de 100 KB, 200 KB o 1 MB. Comprimir es la solución más barata, porque no cambia tu diseño, tu código ni tu forma de trabajar. La imagen se ve igual y pesa una fracción.",
      ],
    },
    {
      heading: "Con pérdida y sin pérdida: dos mecanismos distintos",
      id: "how",
      body: [
        "JPG y WebP comprimen con pérdida. Analizan la imagen, descartan la información a la que el ojo humano es menos sensible —sobre todo las variaciones finas de color— y guardan el resto. Por eso logran reducciones tan grandes en fotografías, y por eso una calidad demasiado baja produce los bloques y halos que ves alrededor de los bordes con mucho contraste.",
        "PNG no puede funcionar así: es un formato sin pérdida por definición, de modo que se reduce disminuyendo la cantidad de colores distintos que usa la imagen. Nuestro proceso para PNG cuantiza la paleta y aplica tramado, algo prácticamente invisible en logotipos, capturas de pantalla e ilustraciones planas, pero bastante visible en una foto con un cielo degradado. Con una calidad de 95 % o más, el PNG se mantiene totalmente sin pérdida y solo se optimiza su codificación.",
        "Por eso el formato importa tanto como el control deslizante. Una captura de pantalla comprimida como JPG se ve peor y pesa más que la misma captura como PNG optimizado, y una fotografía guardada como PNG ocupa varias veces más de lo necesario.",
      ],
    },
    {
      heading: "Comprimir JPG, PNG o WEBP: cómo elegir el formato de salida",
      id: "format",
      body: [
        "WebP produce el archivo más pequeño a igual calidad, admite transparencia y todos los navegadores actuales lo abren. Es la opción por defecto para todo lo que va a una página web.",
        "JPG es algo más pesado, pero se acepta en todas partes, incluso en programas que nunca oyeron hablar de WebP. Elígelo para adjuntos de correo, formularios de carga, portales de trámites, servicios de impresión y todo lo que sale de la web.",
        "PNG es la respuesta correcta para contenido con bordes nítidos —logotipos, dibujos lineales, capturas de pantalla, diagramas— y para todo lo que necesite conservar la transparencia sin pérdida. No lo uses para fotografías salvo que tengas un motivo concreto.",
      ],
    },
    {
      heading: "Reducir el peso de una imagen a un límite en KB en lugar de por calidad",
      id: "target-size",
      body: [
        "Cuando un formulario pide «máximo 100 KB», el control de calidad responde a la pregunta equivocada: tendrías que adivinar un valor, comprimir, revisar el tamaño y volver a intentarlo. Cambia la configuración a «Por tamaño de archivo», escribe el límite y la herramienta hace las pruebas por ti: busca la calidad más alta cuyo resultado todavía cabe y, solo si incluso una calidad baja sigue siendo demasiado grande, reduce también las dimensiones en píxeles.",
        "El resultado siempre queda por debajo del número que escribiste, nunca «más o menos». La herramienta cuenta 1 KB como 1000 bytes, así que un archivo hecho para un límite de 50 KB también pasa en formularios que cuentan 1 KB como 1024 bytes. Si una imagen ya está por debajo del límite en el formato elegido, la recibes intacta en lugar de una copia recomprimida sin necesidad.",
        "Los límites más comunes tienen su propia página con consejos específicos: firmas de 20 KB, fotos para exámenes de 50 KB, fotos y escaneos para solicitudes de 100 KB y 200 KB, y fotos del teléfono de 1 MB.",
      ],
    },
    {
      heading: "Cuando tu imagen ya no se puede comprimir más",
      id: "already-optimised",
      body: [
        "A veces la herramienta te devuelve el original y te lo indica. Es a propósito: si nada de lo que podemos generar es más pequeño que tu archivo, entregarte una versión «comprimida» más grande sería un fracaso disfrazado de resultado.",
        "Normalmente significa que la imagen ya pasó por un optimizador, o que es un gráfico pequeño en el que domina la estructura fija del formato. Los PNG muy pequeños, en particular, tienen un mínimo por debajo del cual el encabezado y la paleta son la mayor parte del archivo. En esos casos el ahorro restante está en otro lado: redimensionar a las medidas que realmente se muestran o cambiar de formato.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes JPG, PNG o WEBP, o arrástralas y suéltalas aquí." },
    { title: "Elige la configuración", description: "Escoge el formato de salida y la calidad, o cambia a «Por tamaño de archivo» y escribe un límite como 50 KB." },
    { title: "Comprime y descarga", description: "Haz clic en «Comprimir»: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Compresión por lotes", description: "Comprime decenas de imágenes a la vez y descárgalas todas en un solo ZIP, cada una con el porcentaje ahorrado." },
    { icon: "tune", title: "Calidad, formato o tamaño exacto", description: "Convierte a WEBP para lograr los archivos más pequeños, ajusta la calidad exacta que quieres o escribe un límite de tamaño y obtén el archivo más nítido por debajo." },
    { icon: "lock", title: "100 % privado", description: "En casi todas las fotos la compresión se hace en tu navegador, y esas imágenes no se suben a ningún lado." },
  ],

  faqs: [
    { q: "¿Cuánto más pequeñas quedarán mis imágenes?", a: "Depende de la imagen y de la configuración. Convertir fotos a WEBP con una calidad de 70–80 % suele reducir el tamaño entre un 50 y un 80 % con poca diferencia visible, y los gráficos PNG normalmente bajan entre un 60 y un 80 % con la calidad predeterminada." },
    { q: "¿Cómo funciona comprimir PNG?", a: "PNG no puede descartar detalle como JPG, así que se reduce de otra manera: disminuyendo la cantidad de colores distintos. Con el 70 % predeterminado cuantizamos a 128 colores con tramado, algo que suele ser invisible en ilustraciones, logotipos y capturas de pantalla. Ajusta la calidad a 95 % o más para que el PNG se mantenga totalmente sin pérdida." },
    { q: "¿Qué formato genera los archivos más pequeños?", a: "WEBP suele producir los archivos más pequeños a igual calidad, seguido de JPG. PNG sigue siendo la mejor opción para gráficos con bordes nítidos, colores planos y transparencia." },
    { q: "¿Comprimir reduce la calidad de la imagen?", a: "JPG y WEBP comprimen con pérdida, así que con una calidad muy baja aparecen artefactos; PNG pierde colores en lugar de detalle. El 70 % predeterminado es un buen equilibrio; súbelo para las imágenes importantes." },
    { q: "¿Cómo puedo comprimir un JPG sin que se vea mal?", a: "Mantén la calidad entre 70 y 85 % y, si la foto es muy grande, activa también «Reducir imágenes grandes» para llevarla al ancho que realmente necesitas. Eso suele ahorrar más que bajar la calidad y mantiene limpios los cielos y los tonos de piel." },
    { q: "¿Por qué una de mis imágenes no se hizo más pequeña?", a: "Porque ya estaba optimizada. Si nada de lo que generamos supera a tu archivo, te devolvemos el original intacto y lo indicamos: un compresor que entrega un archivo más grande no cumplió su trabajo." },
    { q: "¿Puedo comprimir varias imágenes a la vez?", a: "Sí. Agrega todas las que quieras: varios archivos se descargan juntos en un ZIP, cada uno con el porcentaje ahorrado." },
    { q: "¿Es gratis y privado?", a: "Totalmente. Sin registro ni marca de agua, y casi todas las imágenes se comprimen localmente en tu navegador. Solo los archivos demasiado grandes para que una pestaña del navegador los procese se envían a nuestro servidor, y la herramienta te avisa cuando eso ocurre." },
    { q: "¿Se suben mis imágenes a algún servidor?", a: "Casi todas las fotos nunca salen de tu dispositivo, porque la compresión se hace en el navegador. Solo las imágenes muy grandes o de resolución extremadamente alta se envían a nuestro servidor para procesarlas y se eliminan justo después. No guardamos nada ni analizamos tus archivos." },
    { q: "¿Qué calidad debo usar?", a: "Entre 70 y 80 % es el punto de partida correcto para fotos en una página web, y ahí se produce la mayor parte del ahorro. Usa 90 % o más para fotos de producto, imágenes de portada y todo lo que un cliente vaya a ampliar. Por debajo de un 60 % empiezan a verse bloques en cielos y degradados suaves." },
    { q: "¿Comprimir una imagen reduce sus dimensiones?", a: "No. La compresión cambia cómo se guardan los píxeles, no cuántos hay: una foto de 4000 × 3000 sigue siendo de 4000 × 3000. Si también quieres menos píxeles, usa la herramienta «Redimensionar imagen», que suele ser la mayor ganancia para imágenes web." },
    { q: "¿La compresión elimina los datos EXIF?", a: "Al volver a codificar la imagen se pierden, como efecto secundario, la mayoría de los metadatos, incluidos los ajustes de la cámara y las coordenadas GPS. Si eliminar esos datos es tu objetivo real, el eliminador de EXIF está hecho justamente para eso y te muestra qué borra." },
    { q: "¿Puedo comprimir una imagen a un tamaño concreto, como 50 KB?", a: "Sí. Cambia la configuración a «Por tamaño de archivo», escribe el límite en KB o MB (o toca uno de los tamaños comunes) y comprime. Cada imagen queda por debajo de ese límite con la calidad más alta que cabe, y sus dimensiones solo se reducen cuando la calidad por sí sola no alcanza." },
    { q: "Un portal de empleo o de trámites solo acepta 200 KB, ¿qué hago?", a: "Elige «Por tamaño de archivo», escribe 200 KB y usa JPG como formato, porque prácticamente todos los portales lo aceptan. Como la herramienta cuenta 1 KB como 1000 bytes, el archivo también cabe si el formulario cuenta 1024 bytes por KB." },
    { q: "¿Puedo comprimir la misma imagen dos veces?", a: "Puedes, pero no conviene. Cada pasada con pérdida descarta detalle para siempre y el daño se acumula, así que un JPG comprimido dos veces se ve claramente peor que uno comprimido una sola vez con el ajuste equivalente. Empieza siempre desde el mejor original que tengas." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. Casi todas las fotos se comprimen por completo en tu navegador y nunca salen de tu dispositivo; solo las imágenes muy grandes o de muy alta resolución van a nuestro servidor, donde se eliminan justo después. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    "By quality": "Por calidad",
    "By file size": "Por tamaño de archivo",
    "Compression mode": "Modo de compresión",
    "Target size": "Tamaño objetivo",
    "Unit": "Unidad",
    "KB": "KB", // i18n-same
    "MB": "MB", // i18n-same
    "A KB here is 1,000 bytes, so the file passes forms that count a KB as 1,000 or as 1,024 bytes.": "Aquí 1 KB equivale a 1000 bytes, así que el archivo pasa en formularios que cuentan 1 KB como 1000 o como 1024 bytes.",
    "JPG (best for forms)": "JPG (ideal para formularios)",
    "Each image gets the highest quality that fits under the limit. If that is still too big, its dimensions are reduced as well.": "Cada imagen recibe la calidad más alta que cabe bajo el límite. Si aun así es demasiado grande, también se reducen sus dimensiones.",
    "Enter a target size greater than zero.": "Escribe un tamaño objetivo mayor que cero.",
    "Every image is now under {size}.": "Todas las imágenes pesan ahora menos de {size}.",
    "Some images could not get under {size}.": "Algunas imágenes no pudieron quedar por debajo de {size}.",
    "Every image will be compressed to under {size}.": "Cada imagen se comprimirá a menos de {size}.",
    "Set any target size in KB or MB after adding your images.": "Después de agregar tus imágenes, puedes fijar cualquier tamaño objetivo en KB o MB.",
    "already under {size} — kept original": "ya pesa menos de {size}: se conservó el original",
    "could not get under {size}": "no se pudo bajar de {size}",
    "resized to {dims}": "redimensionada a {dims}",
    // CompressTool.tsx
    "Compress": "Comprimir",
    "Compressing…": "Comprimiendo…",
    "Compress & download": "Comprimir y descargar",
    "Compress {n} images": "Comprimir {n} imágenes",
    "Compress more images": "Comprimir más imágenes",
    "Compressed": "Comprimida",
    "Compression complete!": "¡Compresión completada!",
    "Compression settings": "Configuración de compresión",
    "Compression Settings": "Configuración de compresión",
    "File size reduced by {pct}%": "Tamaño del archivo reducido un {pct} %",
    "Already optimised — kept your original file.": "Ya estaba optimizada: se conservó tu archivo original.",
    "Already optimised — kept your original files.": "Ya estaban optimizadas: se conservaron tus archivos originales.",
    "Already optimised. Try a lower quality, or WEBP, for a smaller file.":
      "Ya estaba optimizada. Para un archivo más pequeño, prueba una calidad más baja o WEBP.",
    "already optimised — kept original": "ya optimizada: se conservó el original",
    "no smaller output": "sin resultado más pequeño",
    "{n} colors": "{n} colores",
    "Processed 1 image.": "Se procesó 1 imagen.",
    "Processed {n} images.": "Se procesaron {n} imágenes.",
    "Compression failed.": "La compresión falló.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "WEBP usually gives the smallest files. Everything runs in your browser.":
      "WEBP suele dar los archivos más pequeños. Todo se ejecuta en tu navegador.",
    "Output format": "Formato de salida",
    // FORMATS (module scope, §4.2)
    "Same as original": "Igual que el original",
    "WEBP (smallest)": "WEBP (el más pequeño)",
    "PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless.":
      "PNG se reduce disminuyendo colores. Con 95 % o más se mantiene totalmente sin pérdida.",
    "Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless.":
      "Menor calidad = archivo más pequeño. Los PNG se reducen disminuyendo colores; con 95 % o más quedan sin pérdida.",
    "Lower quality = smaller file. 60–80% is a great balance.":
      "Menor calidad = archivo más pequeño. Entre 60 y 80 % es un gran equilibrio.",
    "Shrink large images": "Reducir imágenes grandes",
    "Also reduce the dimensions, not just the quality. A phone photo is around 4000px wide, while a web page or an email attachment rarely needs more than 2000 — and halving the width quarters the pixel count, which saves far more than quality alone.":
      "Reduce también las dimensiones, no solo la calidad. Una foto de teléfono mide unos 4000 px de ancho, mientras que una página web o un adjunto de correo rara vez necesita más de 2000; y reducir el ancho a la mitad deja una cuarta parte de los píxeles, lo que ahorra mucho más que la calidad por sí sola.",
    "Max width/height": "Ancho/alto máx.",
    "JPG background": "Fondo del JPG",
    // CompressTool.tsx — increase mode (increase-image-size-in-kb)
    "Enter a minimum size greater than zero.": "Escribe un tamaño mínimo mayor que cero.",
    "Every image is now at least {size}.": "Todas las imágenes pesan ahora al menos {size}.",
    "For forms with a range such as 20–50 KB. The result is always a JPG.": "Para formularios con un rango como 20–50 KB. El resultado siempre es un JPG.",
    "Increase": "Aumentar",
    "Increase & download": "Aumentar y descargar",
    "Increase more images": "Aumentar más imágenes",
    "Increase {n} images": "Aumentar {n} imágenes",
    "Increasing…": "Aumentando…",
    "Maximum size (optional)": "Tamaño máximo (opcional)",
    "Minimum size": "Tamaño mínimo",
    "New size": "Nuevo tamaño",
    "Quality is raised first, then the dimensions. If an image is still short, the file is padded with empty data — the picture itself does not change.": "Primero se sube la calidad y luego las dimensiones. Si a una imagen aún le falta, el archivo se completa con datos vacíos: la imagen en sí no cambia.",
    "Set the minimum size in KB after adding your images.": "Fija el tamaño mínimo en KB después de agregar tus imágenes.",
    "Size increase complete!": "¡Aumento de tamaño completado!",
    "Size settings": "Configuración de tamaño",
    "Some images could not reach {size}.": "Algunas imágenes no alcanzaron {size}.",
    "The maximum must be larger than the minimum.": "El máximo debe ser mayor que el mínimo.",
    "already at least {size} — kept original": "ya pesa al menos {size}: se conservó el original",
    "could not reach {size}": "no alcanzó {size}",
    "enlarged to {dims}": "ampliada a {dims}",
    "padded to reach the minimum": "completada para alcanzar el mínimo",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Quitar archivos",
    "Download": "Descargar",
    "Original": "Original", // i18n-same
    "Please select image files.": "Selecciona archivos de imagen.",
    "Processing failed.": "El procesamiento falló.",
    "Quality": "Calidad",
    "Remove": "Quitar",
    "Settings": "Configuración",
  },
};

export default content;
