import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-15kb (variant of compress-image,
 * preset targetKb 15). Primary query: «Comprimir imagen a 15 KB»; secondary:
 * «reducir foto a 15 KB». Angle: the small-but-not-tiny limit — clean the
 * signature first («Redimensionar firma») and why low light and grain eat a
 * small budget.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-15kb",
  locale: "es",
  name: "Comprimir imagen a 15 KB",
  tagline:
    "Comprime una firma o una foto pequeña a menos de 15 KB para formularios de exámenes, convocatorias de empleo y registros en línea. La versión más clara que cabe, calculada en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 15 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 15 KB: firma o foto pequeña como JPG nítido para formularios de examen y registro. Reduce tu foto a 15 KB gratis y sin subirla.",

  intro:
    "15 KB está entre los límites de firma más estrictos y los límites de foto más pequeños, y los formularios lo usan para ambas cosas: el recuadro de la firma, un campo de fotografía reducido y, a veces, una huella escaneada. Alcanza para una firma limpia y legible y para una foto de cabeza y hombros en la que la cara se reconoce, siempre que la imagen esté bien preparada. Agrega la tuya y obtendrás un JPG de menos de 15 KB con la calidad más alta que cabe.",

  sections: [
    {
      heading: "Qué cabe en 15 KB",
      id: "what-fits",
      body: [
        "Una firma en tinta oscura sobre papel blanco cabe sin problema, incluso con unos cuantos cientos de píxeles de ancho, porque casi toda la imagen es blanco liso. Una foto es más difícil: cuenta con unos 250 × 310 píxeles para un retrato de cabeza y hombros, que es más o menos el tamaño con que aparece en un comprobante de examen o en un formulario de identificación.",
        "La herramienta encuentra la calidad JPG más alta que queda por debajo de 15 KB y reduce las dimensiones solo cuando la calidad no basta. La lista de resultados muestra el nuevo peso de cada archivo, y también sus nuevas dimensiones cada vez que cambiaron.",
      ],
    },
    {
      heading: "Limpia la firma primero",
      id: "clean-signature",
      body: [
        "Una firma fotografiada sobre un escritorio arrastra papel grisáceo, una sombra y un trozo de mesa: todo eso es detalle que el compresor intenta conservar. Pásala antes por «Redimensionar firma»: deja el papel blanco puro, vuelve sólida la tinta y recorta el espacio vacío. Una firma limpia cabe luego en menos de 15 KB con bordes nítidos y espacio de sobra.",
        "Si el formulario también indica dimensiones exactas en píxeles para la firma, ponlas en «Redimensionar firma» y elige allí el rango en KB; esa herramienta resuelve las dos cosas en un solo paso.",
      ],
    },
    {
      heading: "Poca luz, más bytes",
      id: "low-light",
      body: [
        "Una foto tomada en interiores por la noche está llena de grano: puntitos de color que la cámara agrega cuando no hay luz suficiente. Para un compresor JPG ese grano es detalle, y en 15 KB ocupa el espacio que necesita la cara. La misma pose fotografiada junto a una ventana con luz de día se comprime en un archivo de 15 KB notablemente más nítido.",
        "Si solo tienes la foto con grano, comprimirla funciona igual; la herramienta simplemente tiene que reducir un poco más las dimensiones para que quepa, y eso también suaviza el grano.",
      ],
    },
    {
      heading: "Foto y firma para el mismo formulario",
      id: "one-form",
      body: [
        "Agrega la foto y la firma juntas y las dos vuelven por debajo de 15 KB de una sola vez. Si uno de los campos permite más —un campo de foto de 50 KB, por ejemplo—, comprime ese archivo otra vez con su propio límite, partiendo del original y no de la copia de 15 KB, para que conserve todo el detalle que su campo admite.",
      ],
    },
    {
      heading: "Cómo recortar una foto para un límite de 15 KB",
      id: "small-photo",
      body: [
        "Recorta desde justo encima del cabello hasta justo debajo de los hombros, con la cara en el centro y los ojos a un tercio de la altura, más o menos. La cara debe ocupar casi toda la imagen; cada centímetro de pared o de techo que dejes es detalle que el compresor tiene que pagar con los mismos 15 KB.",
        "Una foto bien recortada también necesita achicarse menos para caber, así que la cara conserva más píxeles. Por eso la misma foto se ve bastante más nítida a 15 KB cuando se recorta antes que cuando se comprime la imagen entera tal como está.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 15 KB",
  steps: [
    { title: "Agrega tu imagen", description: "Una firma o una foto ya recortada: JPG, PNG o WebP." },
    { title: "Comprime a menos de 15 KB", description: "El límite de 15 KB ya está puesto; la calidad y el tamaño bajan solo lo que haga falta." },
    { title: "Descargar", description: "Descarga el JPG y súbelo a tu formulario." },
  ],

  features: [
    { icon: "draw", title: "Firmas nítidas", description: "Las firmas limpias caben muy por debajo de 15 KB con bordes definidos." },
    { icon: "face", title: "Caras reconocibles", description: "Una foto de cabeza y hombros mantiene la cara clara en tamaño de comprobante de examen." },
    { icon: "lock", title: "Privado", description: "Firmas y fotos se comprimen en tu navegador, en tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una imagen a 15 KB?", a: "Agrégala aquí y haz clic en «Comprimir»: el límite de 15 KB ya está puesto. Obtienes un JPG de menos de 15 KB con la mejor calidad que cabe." },
    { q: "¿Qué tamaño de foto cabe en 15 KB?", a: "Unos 250 × 310 píxeles para una foto de cabeza y hombros; las fotos más grandes se reducen automáticamente hasta que caben." },
    { q: "¿Conviene limpiar la firma antes de comprimirla a 15 KB?", a: "Sí. «Redimensionar firma» blanquea el papel y recorta los bordes, así que la firma cabe con facilidad y sigue nítida." },
    { q: "¿Por qué una foto tomada de noche se ve peor a 15 KB?", a: "La poca luz agrega grano, y el compresor gasta bytes en conservarlo. Una foto de la misma cara con luz de día se ve más nítida con el mismo peso." },
    { q: "¿Puedo reducir mi foto y mi firma a 15 KB a la vez?", a: "Sí. Agrega las dos; cada una vuelve por debajo de 15 KB." },
    { q: "¿Y si la imagen ya pesa menos de 15 KB?", a: "Si ya es un JPG por debajo del límite, se devuelve sin cambios." },
    { q: "¿15 KB es lo mismo que 0,015 MB?", a: "Sí, 15 KB son 15 000 bytes. El archivo también pasa en formularios que cuentan 1 KB como 1024 bytes." },
    { q: "¿Cuál es la mejor forma de recortar una foto para un límite de 15 KB?", a: "Desde justo encima del cabello hasta justo debajo de los hombros, con la cara centrada y ocupando casi todo el encuadre. Cuanto más ajustado el recorte, más nítida la cara a 15 KB." },
  ],

  security:
    "Firmas y fotos se comprimen en tu dispositivo, dentro de tu navegador, sin subirse ni guardarse en ningún lado. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, pasa por nuestro servidor y se borra en aproximadamente una hora.",
};

export default content;
