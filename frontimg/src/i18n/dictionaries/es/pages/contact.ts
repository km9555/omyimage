import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the /es contact page (ContactBody).
 *
 * The support address itself is never translated. The legal page names in
 * the footer are links whose labels come from this file, so they read as the
 * Spanish pages they point at.
 */
export const esContact: Dict = {
  "Contact": "Contacto",
  "Get in touch": "Escríbenos",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "Leemos todos los mensajes y solemos responder en un plazo de dos días hábiles. Es muy posible que la respuesta ya esté más abajo.",

  // Channels
  "Support & bug reports": "Soporte y errores",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "¿Algo no funciona o una herramienta da un resultado extraño? Dinos qué herramienta, qué navegador usas y qué esperabas: normalmente con eso basta para reproducir el problema.",
  "Privacy & legal": "Privacidad y aspectos legales",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "Preguntas sobre cómo se tratan tus datos, solicitudes de retirada de contenido o cualquier cosa relacionada con nuestras condiciones.",
  "Business & partnerships": "Empresas y colaboraciones",
  "Bulk use, integrations, or anything commercial.": "Uso a gran escala, integraciones o cualquier asunto comercial.",

  // No-form note
  "Why there's no contact form:": "Por qué no hay formulario de contacto:",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "un formulario implicaría recopilar y guardar tus datos en nuestros servidores. Por correo electrónico, todo queda entre tú y nosotros: en {site} no se guarda nada sobre ti.",

  // FAQ
  "Before you write": "Antes de escribir",
  "Is oMyImage free?": "¿oMyImage es gratis?",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "Sí. Las {n} herramientas son gratis y se usan sin cuenta. Hay planes de pago previstos para archivos más grandes y más usos de IA, pero hoy no se cobra nada.",
  "Are my images uploaded?": "¿Se suben mis imágenes?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "En la mayoría de las herramientas, no: funcionan por completo en tu navegador y el archivo nunca sale de tu dispositivo. Solo se suben las imágenes demasiado grandes para una pestaña del navegador, las de las herramientas de IA y las de la conversión HEIC. Cada una de ellas lo indica en su propia página.",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "¿Por qué la conversión HEIC sube mi foto si las demás herramientas no lo hacen?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "Para decodificar HEIC hace falta una biblioteca que su licencia no nos permite distribuir a los navegadores, así que esa conversión tiene que hacerse en nuestro servidor. El archivo se elimina en aproximadamente una hora.",
  "How long do you keep processed files?": "¿Cuánto tiempo guardan los archivos procesados?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "Los resultados procesados en el servidor se eliminan automáticamente en aproximadamente una hora. No hacemos copias de seguridad y nunca reutilizamos tus imágenes.",
  "A tool says it isn't enabled on this server.": "Una herramienta dice que no está habilitada en este servidor.",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "Son las herramientas de IA o la conversión HEIC avisando de que su motor no está instalado en el servidor. Es una cuestión de la instalación, no un fallo de tu archivo.",
  "Can I use the output commercially?": "¿Puedo usar el resultado con fines comerciales?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "Sí. Tus imágenes siguen siendo tuyas y puedes usar todo lo que crees para cualquier fin legal.",

  // Footer links
  "Privacy Policy": "Política de privacidad",
  "Terms of Service": "Términos del servicio",
  "Refund Policy": "Política de reembolsos",
  "Pricing": "Precios",
};
