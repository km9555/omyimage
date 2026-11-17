import type { FormatId } from "@/lib/converters/types";

/**
 * Spanish "what is this format" essays.
 *
 * Each converter page composes the essays for BOTH of its formats, so these
 * carry real weight: they are what keeps two pages sharing a source format
 * from reading as the same page twice (see formats.ts). Only the formats a
 * shipped es pair actually uses are here; anything missing falls back to the
 * English essay through `formatEssay()`.
 */
export const ES_ESSAYS: Partial<Record<FormatId, string>> = {
  jpg:
    "JPG (también escrito JPEG) es el formato estándar para fotos desde 1992. Usa una compresión con pérdida ajustada a cómo funciona la vista humana: descarta detalles finos de color que el ojo apenas percibe. Por eso una foto guardada en JPG puede pesar la décima parte que la misma imagen en PNG. El precio es que no tiene canal de transparencia y que cada vez que se vuelve a guardar la imagen empeora un poco, así que sirve para fotos terminadas, no para archivos de trabajo.",
  png:
    "PNG es un formato sin pérdida creado en 1996 como sustituto de GIF libre de patentes. Al comprimir no se descarta nada, de modo que una imagen puede abrirse y volver a guardarse indefinidamente sin empeorar, y lleva un canal alfa completo para transparencias con bordes suaves. Esa fidelidad ocupa espacio: una foto guardada en PNG suele pesar varias veces más que la misma foto en JPG. Por eso PNG es la opción adecuada para capturas de pantalla, logotipos y dibujos de líneas, no para las fotos que salen de la cámara.",
  jfif:
    "JFIF no es en realidad un formato aparte: son las siglas de JPEG File Interchange Format, el contenedor en el que se guarda la inmensa mayoría de los archivos que ya llamas JPG. La confusión está solo en la extensión. Ciertas configuraciones de Windows y Chrome guardan las imágenes descargadas como .jfif en lugar de .jpg y, aunque los bytes son un JPEG totalmente normal, una cantidad sorprendente de programas se niega a abrirlas simplemente porque no reconoce la extensión.",
  gif:
    "GIF data de 1987 y está limitado a una paleta de 256 colores por fotograma, por eso las fotos guardadas en GIF muestran bandas de color y tramado visibles. Sobrevive por dos motivos: permite animaciones y lo entiende prácticamente cualquier programa que se haya escrito. Su transparencia es binaria (un píxel es totalmente visible o totalmente invisible), así que no puede lograr los bordes suaves que sí consigue PNG.",
  bmp:
    "BMP es el mapa de bits original de Windows creado por Microsoft y casi siempre se guarda sin ninguna compresión: cada píxel escrito por completo. Una foto de 12 megapíxeles en BMP de 24 bits ocupa unos 36 MB, frente a unos 3 MB en JPG. Todavía aparece en utilidades de Windows, controladores de escáner antiguos, equipos médicos e industriales y algunos sistemas integrados, y por eso convertir desde BMP es una necesidad habitual aunque casi nadie lo elija a propósito.",
  avif:
    "AVIF mete el códec de video libre de regalías AV1 en un formato de imagen fija y comprime más que cualquier otro formato de uso común: a menudo la mitad del tamaño de un JPG con la misma calidad, y además con transparencia y alto rango dinámico. Los navegadores lo decodifican bien (Chrome desde la versión 85, Firefox desde la 93, Safari desde la 16.4), pero fuera de ellos el soporte se reduce rápido: muchos editores de imagen, sistemas operativos antiguos y la mayoría de los flujos de impresión todavía no pueden abrir un archivo así.",
  webp:
    "WebP es el formato de imagen que Google presentó en 2010, y es poco común porque reúne compresión con pérdida, compresión sin pérdida y transparencia en un mismo contenedor. En la práctica pesa entre un 25 % y un 35 % menos que un JPG de calidad equivalente, por eso se extendió rápido por la web cuando Safari añadió soporte en 2020. Su punto débil está fuera del navegador: muchos programas de escritorio, teléfonos antiguos y flujos de impresión todavía no abren un archivo .webp.",
};
