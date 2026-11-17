import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/superponer-imagenes.
 *
 * Primary query "Superponer imágenes"; secondary "poner una imagen sobre
 * otra", "imagen dentro de otra imagen". Blend-mode names follow the Spanish
 * Photoshop/GIMP labels (Multiplicar, Trama, Superponer, Luz suave …) so they
 * match what Spanish-speaking users already know.
 */
const content: ToolPageContent = {
  toolId: "image-overlay",
  locale: "es",
  name: "Superponer imágenes",
  tagline:
    "Pon una imagen encima de otra: arrástrala a su sitio, cambia su tamaño y gírala, atenúala con la opacidad y mézclala con modos de fusión como multiplicar y trama. Gratis y en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Superponer imágenes – una foto sobre otra | oMyImage",
  metaDescription:
    "Superponer imágenes online: pon una imagen sobre otra, agrega un logo, una textura o una doble exposición con opacidad y 8 modos de fusión. Gratis, sin subidas.",

  intro:
    "Superponer imágenes es colocar una imagen sobre otra para crear algo que ninguna de las dos lograría sola: un logotipo sobre una foto de producto, una textura sobre un retrato, un destello de luz sobre un paisaje o una segunda foto fundida con la primera para una doble exposición. La herramienta Superponer imágenes de oMyImage te da las dos capas y los controles que importan (posición, tamaño, rotación, opacidad y ocho modos de fusión) con una vista previa en vivo sobre la que puedes arrastrar la imagen superior. El resultado se guarda al tamaño completo de la imagen de fondo.",

  sections: [
    {
      heading: "Colocarla o cubrirlo todo",
      id: "fit",
      body: [
        "«Colocar libremente» pone la imagen superior donde la arrastres, con el tamaño y el ángulo que elijas. El tamaño se mide como proporción del ancho del fondo, así que 50 % es la mitad de ancho que el fondo sea cual sea la resolución; los nueve botones de posición la ajustan a un borde o una esquina, y las flechas del teclado la mueven poco a poco.",
        "«Cubrir todo» estira la imagen superior sobre todo el fondo, manteniendo sus proporciones y recortando lo que sobresale. Es el ajuste para texturas, efectos de luz y dobles exposiciones, que deben llegar a todos los bordes.",
      ],
    },
    {
      heading: "Los modos de fusión, explicados",
      id: "blend",
      body: [
        "Normal simplemente dibuja la imagen superior, atenuada según la opacidad. Multiplicar solo oscurece: el blanco desaparece y el negro sigue negro, lo que lo hace perfecto para firmas, sellos y dibujos de líneas escaneados sobre papel blanco. Trama es lo contrario: solo aclara, así que desaparece el negro, y así se añaden destellos de luz, reflejos de lente, fuego y cielos estrellados sobre fondo negro.",
        "Superponer y Luz suave refuerzan el contraste a través de la imagen superior, aclarando las partes claras del fondo y oscureciendo las oscuras; Luz suave es la más delicada de las dos y va bien con papel, grano y tintes de color. Oscurecer y Aclarar conservan el píxel más oscuro o el más claro. Diferencia resta una imagen de la otra para un aspecto extraño e invertido, y muestra exactamente en qué se diferencian dos fotos casi idénticas.",
      ],
    },
    {
      heading: "Cómo hacer una doble exposición",
      id: "double-exposure",
      body: [
        "Usa un retrato como fondo y un paisaje, un bosque o el perfil de una ciudad encima. Elige «Cubrir todo», pon el modo de fusión en Trama o Aclarar y baja la opacidad a entre el 50 y el 80 % hasta que la cara se vea a través de la escena. Los retratos sobre un fondo liso y claro funcionan mejor, porque la escena llena el espacio vacío alrededor de la silueta. Intercambia las imágenes para ver qué orden queda mejor.",
      ],
    },
    {
      heading: "Logotipos, stickers y firmas",
      id: "logos",
      body: [
        "Un logotipo o sticker guardado como PNG con fondo transparente queda sobre la foto sin ninguna caja alrededor: arrástralo a una esquina, ajusta su tamaño y baja la opacidad si debe ser discreto. Una firma fotografiada sobre papel blanco no tiene transparencia, pero Multiplicar hace desaparecer el blanco y deja solo la tinta.",
        "Para estampar el mismo logotipo en muchas fotos a la vez, la herramienta «Marca de agua» es más rápida: aplica un logotipo o un texto a todo un lote.",
      ],
    },
    {
      heading: "Texturas y efectos de luz",
      id: "textures",
      body: [
        "Las texturas de papel, lienzo, grano de película y polvo dan a una imagen digital plana un aire analógico: pon la textura encima con «Cubrir todo», elige Luz suave o Superponer y mantén la opacidad baja. Las imágenes de lluvia, nieve, bokeh y destellos de luz suelen venir sobre negro; con Trama, el negro desaparece y solo queda la luz.",
      ],
    },
    {
      heading: "Una imagen dentro de otra imagen",
      id: "inset",
      body: [
        "Una segunda imagen pequeña dentro de una grande muestra a la vez el detalle y el contexto: un primer plano de la etiqueta de un producto en la esquina de la foto completa, un mapa insertado en una foto de viaje, la foto del antes dentro de la del después. Deja el modo Normal y la opacidad al máximo, pon el tamaño en torno al 25–35 % y ajústala a una esquina. Unos pocos grados de rotación la convierten en una instantánea informal clavada encima.",
      ],
    },
    {
      heading: "Tamaño, formato y transparencia",
      id: "output",
      body: [
        "El resultado siempre tiene el tamaño de la imagen de fondo, así que una imagen superior más grande que el fondo simplemente se recorta por los bordes. Se guarda en el formato del fondo, a menos que elijas otro. PNG y WEBP conservan cualquier transparencia del fondo; JPG no tiene, así que las zonas transparentes se rellenan con el color que elijas.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Las dos imágenes se combinan por completo en tu navegador. No se sube nada a ningún servidor y no se conserva nada cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo superponer imágenes",
  steps: [
    { title: "Agregar el fondo", description: "Elige la imagen de abajo, o suelta las dos imágenes a la vez." },
    { title: "Agregar la imagen superior", description: "Arrástrala a su sitio y luego ajusta el tamaño, la rotación, la opacidad y el modo de fusión." },
    { title: "Guardar", description: "Haz clic en «Guardar imagen» para descargar el resultado a tamaño completo." },
  ],

  features: [
    { icon: "layers", title: "Ocho modos de fusión", description: "Normal, multiplicar, trama, superponer, luz suave, oscurecer, aclarar y diferencia." },
    { icon: "opacity", title: "Opacidad y posición", description: "Arrastra, cambia el tamaño, gira y atenúa la imagen superior con vista previa en vivo." },
    { icon: "lock", title: "Sin subidas", description: "Todo se combina en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo pongo una imagen encima de otra?", a: "Agrega el fondo, agrega la imagen superior, arrástrala a su sitio y haz clic en «Guardar imagen»." },
    { q: "¿Cómo hago transparente la imagen superior?", a: "Baja el control de opacidad. Al 50 % se ven las dos imágenes por igual." },
    { q: "¿Cómo quito el fondo blanco de una firma o un logotipo?", a: "Pon el modo de fusión en Multiplicar: el blanco desaparece y las líneas oscuras se quedan." },
    { q: "¿Cómo quito el fondo negro de un efecto de luz?", a: "Pon el modo de fusión en Trama: el negro desaparece y la luz se queda." },
    { q: "¿Cómo hago una doble exposición?", a: "Usa un retrato como fondo y un paisaje encima, con «Cubrir todo», Trama o Aclarar y una opacidad del 50–80 %." },
    { q: "¿Puedo girar la imagen superior?", a: "Sí, hasta 180 grados en cualquier sentido." },
    { q: "¿De qué tamaño es el resultado?", a: "Siempre del tamaño de la imagen de fondo." },
    { q: "¿Puedo intercambiar las dos imágenes?", a: "Sí. «Intercambiar imágenes» pone la imagen superior debajo y el fondo encima." },
    { q: "¿Un PNG transparente sigue siendo transparente?", a: "Sí. Las partes transparentes de la imagen superior dejan ver el fondo a través de ellas." },
    { q: "¿Puedo superponer un logotipo en muchas fotos a la vez?", a: "Para eso usa la herramienta «Marca de agua»: aplica el mismo logotipo a todo un lote." },
    { q: "¿Se suben mis imágenes?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí. Arrastra con el dedo para mover la imagen superior." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Qué modo de fusión elijo para una textura de papel o de grano?", a: "Luz suave o Superponer, con «Cubrir todo» y una opacidad baja. Luz suave es más delicado y casi siempre el mejor punto de partida; Superponer da un contraste más marcado." },
  ],

  security:
    "Tus imágenes se combinan por completo en tu navegador. No se sube, se guarda ni se rastrea nada.",

  ui: {
    // ImageOverlayTool.tsx — files
    "Please select image files.": "Selecciona archivos de imagen.",
    "or drop the background image here — or both images at once":
      "o suelta aquí la imagen de fondo, o las dos imágenes a la vez",
    "Background image": "Imagen de fondo",
    "Overlay image": "Imagen superior",
    "Not added yet": "Aún no agregada",
    "Add": "Agregar",
    "Replace": "Reemplazar",
    "Swap images": "Intercambiar imágenes",
    "Clear files": "Borrar archivos",
    "Add the image to put on top": "Agrega la imagen que irá encima",
    "A photo, logo, texture or PNG with transparency — click or drop it here.":
      "Una foto, un logotipo, una textura o un PNG con transparencia: haz clic o suéltalo aquí.",
    "Drag it on the preview, then set its size and angle.":
      "Arrástrala en la vista previa y luego ajusta su tamaño y su ángulo.",
    // preview
    "Preview": "Vista previa",
    "Preview — drag, or use the arrow keys, to move the overlay":
      "Vista previa: arrastra o usa las flechas del teclado para mover la imagen superior",
    "Drag the overlay to move it.": "Arrastra la imagen superior para moverla.",
    "Hold to see the original": "Mantén presionado para ver el original",
    // settings
    "Settings": "Ajustes",
    "Fit": "Ajuste",
    "Place freely": "Colocar libremente",
    "Cover everything": "Cubrir todo",
    "Covers the whole picture and trims what sticks out — for textures, light leaks and double exposures.":
      "Cubre toda la imagen y recorta lo que sobresale: para texturas, destellos de luz y dobles exposiciones.",
    "Position": "Posición",
    "Top left": "Arriba a la izquierda",
    "Top center": "Arriba al centro",
    "Top right": "Arriba a la derecha",
    "Middle left": "Centro a la izquierda",
    "Center": "Centro",
    "Middle right": "Centro a la derecha",
    "Bottom left": "Abajo a la izquierda",
    "Bottom center": "Abajo al centro",
    "Bottom right": "Abajo a la derecha",
    "Size": "Tamaño",
    "Its width as a share of the background's width.": "Su ancho como proporción del ancho del fondo.",
    "Rotation": "Rotación",
    "Opacity": "Opacidad",
    "Blend mode": "Modo de fusión",
    "Normal": "Normal", // i18n-same — the blend mode's name in Spanish editors
    "Draws the image as it is.": "Dibuja la imagen tal como es.",
    "Multiply": "Multiplicar",
    "Only darkens — white disappears. Good for signatures, stamps and line art.":
      "Solo oscurece: el blanco desaparece. Ideal para firmas, sellos y dibujos de líneas.",
    "Screen": "Trama",
    "Only lightens — black disappears. Good for light leaks, flares, fire and stars.":
      "Solo aclara: el negro desaparece. Ideal para destellos de luz, reflejos, fuego y estrellas.",
    "Overlay": "Superponer",
    "Boosts contrast: lights get lighter and darks darker.":
      "Aumenta el contraste: lo claro se aclara y lo oscuro se oscurece.",
    "Soft light": "Luz suave",
    "A gentler overlay — for textures and colour tints.":
      "Una superposición más suave: para texturas y tintes de color.",
    "Darken": "Oscurecer",
    "Keeps whichever pixel is darker.": "Conserva el píxel más oscuro.",
    "Lighten": "Aclarar",
    "Keeps whichever pixel is lighter.": "Conserva el píxel más claro.",
    "Difference": "Diferencia",
    "Subtracts the colours — an inverted, artistic look.":
      "Resta los colores: un aspecto invertido y artístico.",
    // output
    "Output format": "Formato de salida",
    "Same as original": "Igual que el original",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    "The result is the size of the background image.": "El resultado tiene el tamaño de la imagen de fondo.",
    "Save image": "Guardar imagen",
    "Working…": "Procesando…",
    "Done — 1 image saved.": "Listo: 1 imagen guardada.",
    "Processing failed.": "Error al procesar.",
    "Your images are processed in your browser and never uploaded.":
      "Tus imágenes se procesan en tu navegador y nunca se suben.",
  },
};

export default content;
