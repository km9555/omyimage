import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/desenfocar-fondo (variant of remove-background: rembg
 * cut-out composited over a blurred copy of the original, in the browser).
 * Target query «Desenfocar fondo» (1.3K MX, Nov 2026), secondary «difuminar
 * fondo». Neutral Spanish, tú. Distinct from /es/difuminar-imagen (blurs
 * regions you choose). Extra Spanish-only section: profile photos.
 */
const content: ToolPageContent = {
  toolId: "blur-background",
  locale: "es",
  name: "Desenfocar fondo",
  tagline:
    "Desenfoca el fondo de cualquier foto y mantén nítida a la persona o el producto: el efecto del modo retrato, añadido después. La IA encuentra al sujeto y tú eliges la intensidad. Gratis y sin marca de agua.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Desenfocar fondo de foto – gratis con IA | oMyImage",
  metaDescription:
    "Desenfocar fondo de una foto con IA: el sujeto queda nítido y el fondo se difumina como en el modo retrato. Intensidad ajustable, gratis, sin marca de agua.",

  intro:
    "Un fondo desenfocado es lo que hace que el modo retrato de un teléfono parezca una foto de una cámara profesional: el sujeto destaca, y una habitación desordenada, una multitud o una calle concurrida se convierten en manchas suaves de color. Esta herramienta añade ese efecto a una foto que ya tomaste. Un modelo de IA encuentra a la persona, la mascota o el producto, lo deja exactamente como estaba y difumina todo lo que hay detrás tanto como quieras. Ajustar la intensidad después es instantáneo, así que puedes encontrar la medida justa a simple vista.",

  sections: [
    {
      heading: "Cómo funciona",
      id: "how",
      body: [
        "Primero, un modelo de segmentación en nuestro servidor delimita al sujeto y lo devuelve recortado. Después, tu navegador toma la foto original, la desenfoca y vuelve a colocar encima el recorte nítido exactamente en la misma posición.",
        "Como el desenfoque se aplica en tu dispositivo, mover el control de intensidad no vuelve a enviar nada al servidor: el sujeto se detecta una sola vez y puedes probar un desenfoque ligero, medio o fuerte sin gastar otra pasada de IA.",
      ],
    },
    {
      heading: "Cuánto desenfoque se ve natural",
      id: "strength",
      body: [
        "Una cámara real desenfoca más el fondo cuanto más lejos está del sujeto. Un desenfoque ligero va bien en un retrato hecho delante de una pared cercana; uno fuerte, en una persona delante de un paisaje lejano o de una calle de la ciudad. Si el desenfoque es mucho más fuerte de lo que sugiere la profundidad de la escena, la foto empieza a parecer un recorte pegado sobre un cuadro.",
        "Empieza más o menos por la mitad del control y compara con la vista de antes y después. En las fotos de producto para una tienda, un desenfoque más fuerte suele funcionar, porque el objetivo es eliminar distracciones, no imitar un objetivo fotográfico.",
      ],
    },
    {
      heading: "¿Desenfocar el fondo o difuminar parte de una imagen?",
      id: "vs-blur-image",
      body: [
        "Esta página mantiene nítido al sujeto principal y difumina el fondo automáticamente. Si lo que necesitas es ocultar algo concreto (una matrícula, una cara entre la multitud, una pantalla con información privada), usa «Difuminar imagen» o «Pixelar cara», que difuminan solo las zonas que marcas.",
      ],
    },
    {
      heading: "Las fotos que mejor funcionan",
      id: "best",
      body: [
        "Un sujeto principal claro con algo de espacio alrededor: una persona de cintura para arriba, una mascota, un vehículo, un producto sobre una mesa. Las fotos de grupo recargadas, en las que no está claro quién es el sujeto, y los detalles finos como los radios de una bicicleta o el pelo suelto sobre un fondo de color parecido son más difíciles para el modelo, y pueden notarse sus bordes.",
      ],
    },
    {
      heading: "Fondos desenfocados para fotos de producto y anuncios",
      id: "products",
      body: [
        "Los marketplaces y los sitios de anuncios clasificados están llenos de fotos tomadas sobre la mesa de la cocina o en el suelo del dormitorio. Desenfocar el fondo conserva el entorno real, en el que los compradores suelen confiar más que en un fondo blanco pegado, y a la vez dirige la atención al artículo.",
        "Fotografía el producto ligeramente desde arriba, con algo de distancia entre él y la pared de detrás, y usa un desenfoque más fuerte que para un retrato. Si la plataforma exige un fondo blanco liso, usa «Cambiar fondo de foto».",
      ],
    },
    {
      heading: "Difuminar el fondo de una foto de perfil",
      id: "profile",
      body: [
        "Una foto de perfil para LinkedIn, WhatsApp o un currículum gana mucho cuando el fondo no distrae. Si te hiciste la foto en casa o en la oficina, difuminar el fondo oculta el desorden y lo que no quieres mostrar, y deja la cara como protagonista sin que parezca un montaje.",
        "Para una foto de perfil, un desenfoque medio suele ser suficiente: lo bastante para que el fondo no se lea, pero sin llegar al aspecto de recorte. Encuadra la cara y los hombros con algo de aire alrededor para que el modelo detecte bien el contorno del pelo.",
      ],
    },
  ],

  howToTitle: "Cómo desenfocar el fondo de una foto",
  steps: [
    { title: "Sube la foto", description: "Selecciona un JPG, PNG o WEBP con una persona, una mascota o un objeto bien visibles." },
    { title: "Desenfoca el fondo", description: "Pulsa «Desenfocar fondo»: la IA encuentra al sujeto en unos segundos." },
    { title: "Ajusta y descarga", description: "Mueve el control de intensidad hasta que se vea bien, compara con el original y descarga." },
  ],

  features: [
    { icon: "lens_blur", title: "Efecto modo retrato", description: "El sujeto queda exactamente como estaba mientras todo lo de detrás se suaviza." },
    { icon: "tune", title: "Intensidad ajustable", description: "Desde un suavizado leve hasta un desenfoque intenso, con cambios al instante en tu navegador." },
    { icon: "verified_user", title: "Sin marca de agua", description: "Gratis y sin nada estampado en tu foto." },
  ],

  faqs: [
    { q: "¿Cómo desenfoco el fondo de una foto?", a: "Sube la foto y pulsa «Desenfocar fondo». Cuando la IA haya encontrado al sujeto, mueve el control de intensidad hasta la medida que te guste y descarga el resultado." },
    { q: "¿La persona queda completamente nítida?", a: "Sí: el sujeto se toma intacto de tu foto original. Solo se difumina el fondo." },
    { q: "¿Cambiar la intensidad gasta otra pasada de IA?", a: "No. El sujeto se detecta una vez en nuestro servidor; el desenfoque se aplica en tu navegador, así que puedes ajustarlo tantas veces como quieras." },
    { q: "¿Puedo difuminar el fondo de una foto de producto?", a: "Sí. Un producto sobre una mesa o un estante funciona bien, y un desenfoque más fuerte es una forma rápida de quitar un entorno desordenado de la foto de un anuncio." },
    { q: "¿Qué diferencia hay con «Difuminar imagen»?", a: "«Difuminar imagen» difumina las zonas que eliges tú. Esta herramienta elige por ti: mantiene nítido al sujeto principal y desenfoca todo lo demás." },
    { q: "¿En qué formato sale el resultado?", a: "En JPG, del mismo tamaño que el recorte que devuelve la IA. Está pensado para compartir, publicar o imprimir, así que no tiene transparencia." },
    { q: "¿Se guarda mi foto?", a: "Solo por poco tiempo. El sujeto se detecta en nuestro servidor, el resultado se guarda tras un enlace privado y se borra automáticamente en menos de una hora, y el desenfoque se aplica en tu dispositivo." },
    { q: "¿Funciona con fotos del teléfono hechas sin modo retrato?", a: "Sí, justo para eso está pensado. Una foto normal con una persona bien visible recibe después un fondo desenfocado como el del modo retrato, con la ventaja de que puedes elegir la intensidad libremente." },
  ],

  security:
    "La detección del sujeto se ejecuta en nuestro servidor con el motor de código abierto rembg; los resultados se guardan solo un breve tiempo tras un enlace de descarga privado y se borran automáticamente en menos de una hora. El desenfoque se aplica en tu navegador, y nada se comparte ni se reutiliza.",
};

export default content;
