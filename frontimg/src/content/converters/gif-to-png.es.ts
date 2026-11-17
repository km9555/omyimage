import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es GIF-to-PNG converter.
 *
 * Head term "GIF a PNG" (170 ES / 320 MX), "convertir GIF a PNG" as
 * secondary. The angle: leaving the 256-colour palette and one-bit
 * transparency for a lossless working file — and being honest that lost
 * colour does not come back. The frame-extraction tool is quoted by its
 * Spanish name, «GIF a imágenes».
 */
const copy: LocalizedPairCopy = {
  name: "GIF a PNG",
  seoTitle: "GIF a PNG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte GIF a PNG gratis y sin registro: color completo, transparencia editable y un archivo sin pérdida para seguir trabajando. Funciona en tu navegador.",
  unique: {
    intro:
      "Convertir un GIF a PNG lo saca de una paleta de 256 colores y lo lleva al color completo, y cambia la transparencia de GIF, que es de todo o nada, por una transparencia con bordes suaves. El resultado es sin pérdida, así que se convierte en un archivo de trabajo de verdad que puedes editar y volver a guardar sin que empeore. Los GIF animados se convierten en su primer fotograma, porque PNG guarda una sola imagen.",
    whyConvert:
      "El motivo habitual es editar. El límite de paleta de GIF obliga a reducir cada imagen a 256 colores distintos como máximo, y su transparencia es de un solo bit: un píxel es totalmente opaco o totalmente invisible, sin nada intermedio. Eso produce el típico borde dentado que ves cuando un logotipo en GIF se coloca sobre un fondo para el que no se preparó. PNG no tiene ninguna de esas limitaciones: color completo de 24 bits más un canal alfa de 8 bits, así que los bordes pueden ser suaves de verdad. Convertir no inventará los colores que el GIF ya descartó, pero detiene cualquier pérdida adicional y te da un archivo que puedes componer correctamente. El otro motivo frecuente es la simple modernización: sustituir recursos GIF heredados en un proyecto o en un sistema de diseño por algo que se comporte de forma predecible.",
    notes: [
      {
        heading: "Convertir no recupera el color perdido",
        body:
          "Esta es la expectativa que conviene dejar clara. Si una foto se guardó como GIF, en ese momento se redujo a 256 colores, y las bandas y el tramado pasaron a formar parte de la imagen. Convertir a PNG conserva ese aspecto con fidelidad en un contenedor mejor; no puede reconstruir los degradados que se tiraron. Si tienes el original de antes de que fuera un GIF, convierte ese.",
      },
      {
        heading: "La transparencia mejora, no solo se conserva",
        body:
          "La transparencia de GIF es binaria, así que los bordes suavizados se mezclaron de antemano con el fondo que el diseñador supuso. Esos píxeles pasan al PNG tal cual: el halo no desaparece solo. Lo que ganas es margen: PNG puede guardar transparencia parcial, así que, una vez en PNG, puedes limpiar el borde en un editor, algo que nunca fue posible mientras el archivo seguía siendo GIF.",
      },
      {
        heading: "La animación no se conserva",
        body:
          "PNG es un formato de una sola imagen, así que un GIF animado se convierte solo en su primer fotograma. Si quieres cada fotograma como un archivo de imagen separado, usa la herramienta «GIF a imágenes», que extrae la secuencia completa. Si quieres mantener la animación, quédate con el GIF.",
      },
    ],
    faqs: [
      {
        q: "¿Qué pasa con un GIF animado?",
        a: "Obtienes el primer fotograma como un PNG estático. PNG no puede guardar animaciones. Para sacar cada fotograma como un archivo propio, usa la herramienta «GIF a imágenes»; para conservar la animación, quédate con el GIF.",
      },
      {
        q: "¿El PNG se verá mejor que el GIF?",
        a: "Se verá igual. PNG elimina las limitaciones que dañaron la imagen, pero no puede deshacer el daño ya hecho: la reducción a 256 colores ocurrió al crear el GIF y quedó grabada en él.",
      },
      {
        q: "¿Convertir GIF a PNG es sin pérdida?",
        a: "Sí. PNG guarda cada píxel exactamente como estaba en el GIF, así que en este paso no se pierde nada más.",
      },
      {
        q: "¿Se mantiene la transparencia?",
        a: "Sí. El único color transparente del GIF se convierte en píxeles totalmente transparentes en el PNG. Además, ganas la posibilidad de editar después la transparencia suave, algo que GIF nunca admitió.",
      },
      {
        q: "¿El archivo PNG pesará más?",
        a: "A menudo sí, a veces bastante más. La paleta de GIF es una forma de compresión, y PNG guarda la información de color completa. En gráficos planos sencillos los dos pueden quedar parecidos; en contenido fotográfico con tramado, PNG suele pesar más.",
      },
      {
        q: "¿Puedo convertir varios GIF a PNG de una vez?",
        a: "Sí. Añade todos los que quieras: cada uno se convierte en su primer fotograma como PNG y los descargas juntos en un único ZIP.",
      },
    ],
  },
};

export default copy;
