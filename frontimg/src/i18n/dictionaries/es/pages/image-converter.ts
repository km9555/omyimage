import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the /es image converter hub (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own
 * chrome and its FAQ. Spanish converter names read "X a Y", the way the
 * queries are typed (WebP a JPG, PNG a WebP).
 */
export const esImageConverter: Dict = {
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} convertidores de formato, cada uno hecho para un par concreto en lugar de un menú desplegable genérico. Elige abajo tu formato de origen. Todo es gratis, admite lotes y funciona en tu navegador, salvo cuando el formato lo hace imposible.",
  "Convert from {format}": "Convertir desde {format}",
  "to {format}": "a {format}",
  "Frequently asked questions": "Preguntas frecuentes",
  "Home": "Inicio",

  "Which image format should I convert to?": "¿A qué formato de imagen debo convertir?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "JPG para fotos que tienen que funcionar en todas partes. PNG cuando necesitas transparencia o un archivo sin pérdida para seguir editando. WebP cuando el destino es una página web y quieres el archivo más pequeño que aún admite transparencia. AVIF es todavía más pequeño, pero muchas menos aplicaciones pueden abrirlo.",
  "Do these converters upload my images?": "¿Estos convertidores suben mis imágenes?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "Casi todos funcionan por completo dentro de tu navegador, así que la imagen nunca sale de tu dispositivo. Las excepciones son los formatos que un navegador no puede leer o escribir por sí solo (HEIC es el principal), y esas páginas lo dicen claramente.",
  "Can I convert several files at once?": "¿Puedo convertir varios archivos a la vez?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "Sí. Todos los convertidores admiten lotes: añade tantos archivos como quieras y los recibirás en un único ZIP en lugar de descargarlos uno por uno.",
  "Is there a file size limit?": "¿Hay un límite de tamaño de archivo?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "No hay un límite fijo. En la mayoría de los convertidores, las imágenes muy grandes o de muy alta resolución pasan a nuestro servidor, porque una pestaña del navegador no puede dibujar un canvas por encima de cierto tamaño: una foto de teléfono de 48 megapíxeles llega a ese techo aunque solo pese unos pocos megabytes. BMP es la excepción y siempre se convierte en local.",
  "Do I lose quality when converting?": "¿Pierdo calidad al convertir?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "Depende del formato de destino. PNG es sin pérdida, así que en ese paso no se pierde nada. JPG, WebP y AVIF son con pérdida y vuelven a codificar la imagen, aunque con una calidad razonable el cambio no se nota. Convertir una y otra vez entre formatos con pérdida sí acumula daños, así que convierte una sola vez a partir del mejor original que tengas.",
};
