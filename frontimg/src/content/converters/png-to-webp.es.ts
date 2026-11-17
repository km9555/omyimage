import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es PNG-to-WebP converter.
 *
 * Head term "PNG a WebP" (1.6K ES), "convertir PNG a WebP" as secondary. The
 * angle that separates it from JPG a WebP: the reader is keeping an alpha
 * channel (logos, icons, UI screenshots), so the copy is about transparency
 * and sharp text, not about photographs.
 */
const copy: LocalizedPairCopy = {
  name: "PNG a WebP",
  seoTitle: "PNG a WebP – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte PNG a WebP gratis y sin registro: conserva la transparencia y reduce el peso a una fracción. Logotipos, iconos y capturas listos para tu web.",
  unique: {
    intro:
      "PNG es fiel, pero pesado. Al convertir PNG a WebP conservas la transparencia, que es la razón por la que usabas PNG, y reduces el archivo a una fracción de su tamaño. Para logotipos, iconos, capturas de interfaz y cualquier imagen con canal alfa que tenga que cargar rápido, suele ser el mayor ahorro que puedes conseguir de un solo golpe.",
    whyConvert:
      "El problema de PNG es que se niega a descartar nada, algo perfecto para un archivo de trabajo y un desperdicio para un recurso web. Una captura de pantalla o un recorte de producto guardado en PNG llega con facilidad a varios megabytes, y en una página con una docena de ellos el coste es enorme. WebP lo resuelve sin obligarte a renunciar al canal alfa, y eso lo hace claramente mejor que el viejo truco de convertir a JPG y pintar un fondo falso detrás de la transparencia. Conservas bordes suaves, sombras y texto suavizado, con aproximadamente entre una cuarta parte y la mitad del peso del PNG. Lo que conviene entender es que el modo con pérdida de WebP pierde información de verdad, así que en una captura con texto pequeño pueden aparecer leves manchas si bajas demasiado la calidad.",
    notes: [
      {
        heading: "Las capturas y el texto necesitan una calidad más alta",
        body:
          "El contenido fotográfico tolera una compresión fuerte porque el ojo no sigue cada píxel de una textura. El contenido de bordes nítidos (capturas de interfaz, texto, diagramas, dibujos de líneas) es justo lo contrario: los defectos de compresión se concentran alrededor de los bordes de alto contraste y aparecen como un leve halo o desenfoque. Si tu PNG contiene texto que debe leerse, quédate en 0,90 o más y revisa el resultado al 100 % de zoom antes de procesar un lote.",
      },
      {
        heading: "La transparencia pasa exactamente igual",
        body:
          "Los dos formatos guardan un canal alfa completo de 8 bits, así que esta conversión no aplana nada ni te pide un color de fondo. Los píxeles semitransparentes siguen siendo semitransparentes, de modo que las sombras suaves y los bordes difuminados se conservan intactos. Esa es la razón principal para elegir WebP en lugar de JPG cuando el origen es un PNG.",
      },
      {
        heading: "Cuándo quedarte con el PNG",
        body:
          "Quédate con PNG cuando el archivo sea una copia maestra que vas a volver a editar, cuando vaya a un contexto que no decodifica WebP (las plantillas de correo electrónico son el caso más conocido, porque varios clientes de correo de escritorio todavía no lo muestran) o cuando sea un icono diminuto en el que el ahorro se queda en unos cientos de bytes y no compensa añadir otro formato a tu flujo de trabajo. PNG sigue siendo también la respuesta correcta para todo lo que exige fidelidad exacta al píxel, como un código QR o un diagrama técnico.",
      },
    ],
    faqs: [
      {
        q: "¿Convertir PNG a WebP mantiene la transparencia?",
        a: "Sí, por completo. WebP tiene un canal alfa completo, así que las zonas transparentes y semitransparentes pasan sin cambios. No se aplana nada y no hay color de fondo que elegir.",
      },
      {
        q: "¿Cuánto más pequeño es WebP que PNG?",
        a: "Normalmente entre un 50 % y un 75 % más pequeño en imágenes fotográficas o complejas. En gráficos planos sencillos varía más: a veces el ahorro es enorme y, de vez en cuando, un PNG muy pequeño ya está casi optimizado.",
      },
      {
        q: "¿La conversión es sin pérdida?",
        a: "No por defecto. Esta herramienta usa el modo con pérdida de WebP con un control de calidad, y de ahí sale el gran ahorro de tamaño. Pon una calidad alta si necesitas una fidelidad casi idéntica al original, o quédate con el PNG si tiene que ser exacto.",
      },
      {
        q: "¿El texto de mi captura de pantalla seguirá nítido?",
        a: "Con una calidad de 0,90 o más, en general sí. Los ajustes más bajos pueden suavizar el texto pequeño, porque los defectos de compresión se acumulan en los bordes de alto contraste. Revisa un archivo con el zoom al máximo antes de convertir un lote entero.",
      },
      {
        q: "¿Puedo usar WebP en correos electrónicos?",
        a: "No de forma fiable. Varios clientes de correo de escritorio todavía no muestran WebP, así que PNG o JPG siguen siendo la opción segura para el correo. WebP está pensado para páginas web, donde el soporte es universal.",
      },
      {
        q: "¿Puedo convertir todos los iconos de mi proyecto a la vez?",
        a: "Sí. Arrastra todos los PNG que necesites: se convierten en orden con la misma calidad y los descargas juntos en un único ZIP, listos para sustituir los originales en tu sitio.",
      },
    ],
  },
};

export default copy;
