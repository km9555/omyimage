import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/girar-imagen. Structure lives in
 * ToolPageShell.
 *
 * Target query "girar imagen"; "rotar imagen" and "girar foto" are the
 * secondaries and live in the intro, a section heading and the FAQs. «Foto de
 * lado / al revés» is how people describe the EXIF problem, so the copy uses
 * it. Addressed in "tú".
 *
 * FORMATS is module scope in RotateTool.tsx (§4.2); the shared ToolWorkspace
 * keys are listed too until dictionaries/es/common.ts carries them.
 */
const content: ToolPageContent = {
  toolId: "rotate-image",
  locale: "es",
  name: "Girar imagen",
  tagline:
    "Gira y voltea imágenes JPG, PNG, WEBP y GIF online: en pasos de 90° o a cualquier ángulo, con vista previa en vivo y por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Girar imagen online gratis – rotar y voltear foto | oMyImage",
  metaDescription:
    "Girar imagen en pasos de 90° o a cualquier ángulo: rota y voltea fotos online con vista previa, también por lotes. Gratis, sin registro y en tu navegador.",

  variantsHeading: "Girar o voltear",

  intro:
    "Endereza una foto que aparece de lado o gira un gráfico exactamente al ángulo que necesitas. Con «Girar imagen» de oMyImage giras imágenes en pasos de 90°, las volteas o defines cualquier ángulo personalizado con vista previa en vivo, ya sea una sola imagen o un lote completo a la vez. Elige el formato de salida y el fondo, y descarga. Así puedes rotar una imagen o girar una foto online en segundos, y como todo ocurre en tu navegador, tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "El problema de la orientación EXIF",
      id: "exif",
      body: [
        "La razón más común por la que una foto aparece girada no es que se haya tomado mal, sino que la cámara la guardó de lado a propósito. El sensor del teléfono tiene una orientación fija, así que cuando giras el teléfono, el sensor no gira con él. En lugar de reescribir los píxeles, la cámara guarda una etiqueta EXIF de orientación que indica cómo debe girarse la imagen antes de mostrarla.",
        "Eso funciona perfectamente hasta que la imagen llega a un programa que ignora la etiqueta. Gestores de contenido antiguos, algunos formularios de carga, ciertos clientes de correo y mucho software a medida leen los píxeles en bruto y te muestran una foto acostada de lado o al revés. Lo frustrante es que en la galería de tu teléfono y en tu PC se ve bien, así que el problema solo aparece después de publicarla.",
        "Al girar con esta herramienta, la orientación se escribe en los propios píxeles y la etiqueta se elimina, lo que acaba con cualquier ambigüedad. Todos los visores muestran lo mismo, porque ya no queda nada que interpretar.",
      ],
    },
    {
      heading: "Rotar una imagen en ángulo recto no cuesta calidad",
      id: "lossless",
      body: [
        "Girar una imagen 90, 180 o 270 grados mueve cada píxel a una nueva posición sin cambiar su valor. No hay interpolación, así que no hay suavizado ni ninguna pérdida de calidad: la imagen girada es exactamente igual de nítida que la original. Lo mismo vale para voltear en horizontal y en vertical.",
        "Los ángulos arbitrarios son otra historia. Girar 3 grados significa que la mayoría de los píxeles de salida caen entre píxeles de entrada, así que sus valores deben interpolarse a partir de los vecinos. El efecto es muy leve en correcciones pequeñas, pero existe, y se acumula si giras el mismo archivo una y otra vez. Endereza una sola vez, desde el original, en lugar de ir ajustando un grado cada vez en varias sesiones.",
      ],
    },
    {
      heading: "Enderezar un horizonte torcido",
      id: "straighten",
      body: [
        "Un horizonte inclinado es uno de esos defectos que el ojo nota sin saber nombrarlos, y normalmente solo está desviado uno o dos grados. Las correcciones pequeñas cambian muchísimo lo cuidada que parece una foto.",
        "Como girar en ángulo rota el rectángulo dentro de su marco, las esquinas ya no llegan a los bordes y quedan huecos triangulares. Esos huecos se rellenan con el color de fondo que elijas. En la práctica, la mayoría recorta un poco después para eliminarlos, lo que cuesta algo del encuadre; así que, si sabes que una toma va a quedar torcida, vale la pena dejar algo de espacio alrededor del sujeto al tomarla.",
      ],
    },
    {
      heading: "Girar varias fotos a la vez",
      id: "batch",
      body: [
        "Documentos escaneados que entraron al alimentador al revés, una ráfaga de fotos tomadas con el teléfono de lado, una serie de fotos de producto que necesitan el mismo cuarto de vuelta: estos son los casos normales para aplicar un mismo giro a muchos archivos a la vez.",
        "El giro y el volteo que definas se aplican por igual a todos los archivos del lote. Cuando las imágenes necesitan correcciones distintas, agrúpalas primero por dirección —las giradas a la izquierda en un lote, las giradas a la derecha en otro— y procesa cada grupo de una vez. Todo se ejecuta en tu navegador y vuelve en un solo ZIP.",
      ],
    },
  ],

  howToTitle: "Cómo girar una imagen",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Gira o voltea", description: "Usa los botones de 90°, voltea en horizontal o vertical, o define cualquier ángulo con el control deslizante." },
    { title: "Gira y descarga", description: "Elige un formato de salida y haz clic en «Girar»: una imagen se descarga directamente y varias en un ZIP." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Girar y voltear", description: "Gira imágenes a la izquierda o a la derecha en pasos de 90°, voltéalas en horizontal o vertical, o ajusta cualquier ángulo de 0 a 359°." },
    { icon: "burst_mode", title: "Giro por lotes", description: "Aplica el mismo giro a muchas imágenes a la vez y descárgalas todas en un solo ZIP." },
    { icon: "palette", title: "Formato y fondo", description: "Exporta en JPG, PNG o WEBP, y elige un fondo transparente, blanco, negro o personalizado para las esquinas en ángulo." },
  ],

  faqs: [
    { q: "¿Puedo girar una imagen a un ángulo personalizado?", a: "Sí. Usa los botones de 90° para giros rápidos, o el control de ángulo para fijar cualquier valor de 0 a 359 grados." },
    { q: "¿Para qué sirve la opción de fondo?", a: "Cuando giras en un ángulo que no es múltiplo de 90°, las esquinas quedan vacías. El fondo las rellena: transparente (PNG/WEBP), blanco, negro o un color personalizado." },
    { q: "¿Puedo girar muchas imágenes a la vez?", a: "Sí. Agrega todas las que quieras; el mismo giro y volteo se aplican a todas, y varios archivos se descargan juntos en un ZIP." },
    { q: "¿Girar una imagen le quita calidad?", a: "Los giros de 90° y 180° son sin pérdida. Para otros ángulos o al exportar en JPG, puedes ajustar la calidad. PNG y WEBP se mantienen nítidos." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro ni marca de agua, y cada imagen se gira localmente en tu navegador." },
    { q: "¿Por qué mis fotos aparecen de lado en algunos dispositivos y en otros no?", a: "Porque la cámara guardó la foto en la orientación de su sensor y agregó una etiqueta EXIF que indica cómo debe mostrarse. Los programas que leen la etiqueta la muestran bien; los que la ignoran muestran la imagen en bruto, de lado. Al girarla aquí, la orientación correcta queda fijada en los píxeles y todos los visores coinciden." },
    { q: "¿Y si cada foto necesita un giro distinto?", a: "Un mismo giro se aplica a todas las fotos de un lote; no hay un modo automático por foto. Agrupa las fotos según cómo estén giradas —por ejemplo, todas las que necesitan un cuarto de vuelta en el sentido de las agujas del reloj— y procesa cada grupo por separado." },
    { q: "¿Puedo rotar una imagen solo unos pocos grados?", a: "Sí. Enderezar un horizonte torcido suele requerir solo uno o dos grados. Ten en cuenta que cualquier ángulo que no sea múltiplo de 90° deja huecos triangulares en las esquinas, que se rellenan con el color de fondo elegido; la mayoría recorta un poco después para quitarlos." },
    { q: "¿Voltear cambia la calidad de la imagen?", a: "No. Voltear en horizontal o vertical, igual que los giros de 90° y 180°, solo reordena los píxeles existentes: no se remuestrea nada, así que en calidad el resultado es idéntico al original píxel por píxel." },
    { q: "¿Puedo girar una carpeta completa a la vez?", a: "Sí. Agrega todos los archivos de la carpeta y aplica el mismo giro a todos; vuelven en un solo ZIP. Si necesitan giros distintos, divídelos antes en grupos." },
    { q: "¿Cómo giro una foto que está al revés?", a: "Haz clic dos veces en uno de los botones de 90° o fija el ángulo en 180°. Ese giro es sin pérdida y, como la orientación queda guardada en los píxeles, la foto también se verá derecha en páginas web y correos." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El giro se hace en tu navegador con HTML canvas: sin almacenamiento y sin rastreo de tus archivos. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora.",

  ui: {
    "Flip": "Voltear",
    "Flipping…": "Volteando…",
    "Flip & download": "Voltear y descargar",
    "Flip {n} images": "Voltear {n} imágenes",
    // RotateTool.tsx
    "Rotated 1 image.": "Se giró 1 imagen.",
    "Rotated {n} images.": "Se giraron {n} imágenes.",
    "Rotation failed.": "No se pudo girar.",
    "or drop JPG, PNG, WEBP or GIF images here": "o suelta aquí imágenes JPG, PNG, WEBP o GIF",
    "Rotated in your browser — your images never leave your device.":
      "Girada en tu navegador: tus imágenes nunca salen de tu dispositivo.",
    "Rotate & flip": "Girar y voltear",
    "Rotate": "Girar",
    "Rotating…": "Girando…",
    "Rotation preview": "Vista previa del giro",
    "Preview of": "Vista previa de",
    "— the same transform applies to all {n} images.": "— se aplica la misma transformación a las {n} imágenes.",
    "Transform Settings": "Configuración de giro",
    "90° steps straighten; the angle slider gives a custom tilt.":
      "Los pasos de 90° enderezan; el control de ángulo da una inclinación personalizada.",
    "Rotate {n} images": "Girar {n} imágenes",
    "Rotate & download": "Girar y descargar",
    "Transform": "Transformar",
    "Flip horizontal": "Voltear en horizontal",
    "Flip vertical": "Voltear en vertical",
    "Flip H": "Voltear H",
    "Flip V": "Voltear V",
    "Angle": "Ángulo",
    "Format": "Formato",
    "Background (for angled corners)": "Fondo (para esquinas en ángulo)",
    // FORMATS (module scope, §4.2)
    "Same as original": "Igual que el original",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Quitar archivos",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Output": "Salida",
    "Please select image files.": "Selecciona archivos de imagen.",
    "Quality": "Calidad",
    "Remove": "Quitar",
    "Reset": "Restablecer",
    "Rotate left": "Girar a la izquierda",
    "Rotate right": "Girar a la derecha",
  },
};

export default content;
