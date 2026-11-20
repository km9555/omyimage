import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/fusionner-gif. Target query: « Fusionner des GIF »
 * (France, Nov 2026); « assembler des GIF » and « combiner des GIF » appear in
 * the body as natural variants.
 */
const content: ToolPageContent = {
  toolId: "gif-merger",
  locale: "fr",
  name: "Fusionner des GIF",
  tagline:
    "Assemblez plusieurs GIF animés en un seul : mettez-les dans l'ordre et ils se lisent l'un après l'autre, chaque image avec sa propre durée. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Fusionner des GIF – assembler des GIF gratuit | oMyImage",
  metaDescription:
    "Fusionner des GIF en ligne et gratuitement : assemblez plusieurs GIF animés en un seul, l'un après l'autre, dans l'ordre voulu, durées conservées. Sans envoi.",

  intro:
    "Parfois, un seul GIF ne suffit pas : une réaction appelle sa suite, un tutoriel tient en trois courts extraits, ou un avant-après fonctionne mieux en une seule animation. « Fusionner des GIF » d'oMyImage les assemble. Ajoutez deux GIF ou plus, mettez-les dans l'ordre voulu, choisissez comment les GIF de tailles différentes doivent s'adapter, puis lancez la fusion. Le résultat lit chaque GIF à son tour, garde la durée de chaque image (frame) et boucle comme une seule animation.",

  sections: [
    {
      heading: "Ordre et durées",
      id: "order",
      body: [
        "Les GIF se lisent du haut de la liste vers le bas. Utilisez les flèches à côté de chaque GIF pour le monter ou le descendre, la croix pour le retirer et « Ajouter des GIF » pour en importer d'autres. La liste affiche la taille, le nombre d'images et la durée de chaque GIF, pour que vous puissiez préparer la séquence.",
        "Chaque image garde sa propre durée : chaque partie se lit donc à sa vitesse d'origine, pauses comprises. Le GIF fusionné boucle dans son ensemble : quand le dernier GIF se termine, le premier recommence.",
      ],
    },
    {
      heading: "Des GIF de tailles différentes",
      id: "sizes",
      body: [
        "Un GIF a une seule taille pour toutes ses images : le GIF fusionné doit donc en avoir une aussi. Choisissez la taille du premier GIF, du plus grand ou du plus petit. Les GIF qui ont déjà cette taille sont copiés pixel par pixel ; les autres sont mis à l'échelle pour s'adapter.",
        "« Ajuster à l'intérieur » garde chaque image entière et ajoute des bordures là où les formats diffèrent, transparentes ou de la couleur de votre choix. « Remplir et recadrer » agrandit chaque image pour couvrir toute la sortie et coupe ce qui dépasse : il n'y a plus de bordures, mais les bords des GIF au format différent sont perdus.",
      ],
    },
    {
      heading: "Couleurs et poids du fichier",
      id: "colours",
      body: [
        "Un GIF ne peut utiliser que 256 couleurs à la fois. Quand les GIF que vous fusionnez partagent un petit nombre de couleurs et la même taille, ces couleurs sont conservées à l'identique. Sinon, une palette de 256 couleurs est choisie à partir de tous les GIF ; des GIF aux couleurs très différentes, comme un dessin animé et un extrait de vidéo, peuvent perdre un peu de finesse dans les couleurs.",
        "Le fichier fusionné pèse à peu près la somme des GIF assemblés. S'il est trop lourd pour l'endroit où vous l'envoyez, passez-le ensuite dans « Compresser un GIF » ou « Redimensionner un GIF ».",
      ],
    },
    {
      heading: "Idées",
      id: "ideas",
      body: [
        "Transformez trois courts enregistrements d'écran en un seul tutoriel pas à pas. Enchaînez un GIF de question et sa chute. Réunissez un extrait avant et un extrait après dans une même animation. Rassemblez, dans un nouvel ordre, les parties d'un long GIF que vous aviez découpé avec « Couper un GIF ». Composez un best-of des meilleurs moments de plusieurs GIF de réaction.",
        "L'outil assemble les GIF dans le temps, l'un après l'autre. Pour raccourcir chaque partie d'abord, utilisez « Couper un GIF » ; pour changer le rythme d'une partie, utilisez « Changer la vitesse d'un GIF » avant la fusion.",
      ],
    },
    {
      heading: "Boucles et effet boomerang",
      id: "loops",
      body: [
        "Le GIF fusionné boucle à l'infini comme une seule animation, même si l'une des parties était réglée pour ne se lire qu'une fois. Cela permet une astuce simple : fusionnez un GIF avec une copie inversée de lui-même, créée avec « Inverser un GIF », et il se lit à l'endroit puis à l'envers. Fusionner deux fois le même GIF double sa durée sans changer sa vitesse, pratique quand un site exige une durée minimale.",
      ],
    },
    {
      heading: "Combiner des GIF pour les présentations et les réseaux sociaux",
      id: "social",
      body: [
        "Un seul GIF combiné se partage plus facilement que plusieurs fichiers : dans une présentation, un message de forum ou une conversation, toute la séquence se lit d'un coup et personne n'a à ouvrir plusieurs pièces jointes. Surveillez le poids du fichier, car de nombreuses plateformes imposent des limites ; des parties courtes donnent un résultat léger.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque GIF est décodé et le GIF fusionné est écrit entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment fusionner des GIF",
  steps: [
    { title: "Ajoutez les GIF", description: "Sélectionnez deux GIF animés ou plus sur votre ordinateur ou votre téléphone." },
    { title: "Réglez l'ordre", description: "Montez ou descendez les GIF, puis choisissez la taille et la façon dont les autres tailles s'adaptent." },
    { title: "Fusionnez et téléchargez", description: "Cliquez sur « Fusionner les GIF », regardez le résultat et téléchargez-le." },
  ],

  features: [
    { icon: "layers", title: "L'un après l'autre", description: "Chaque GIF se lit à son tour, chaque image avec sa propre durée." },
    { icon: "swap_vert", title: "Dans l'ordre voulu", description: "Réordonnez, ajoutez ou retirez des GIF avant la fusion." },
    { icon: "lock", title: "Aucun envoi", description: "Fusion entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment combiner plusieurs GIF en un seul ?", a: "Ajoutez deux GIF ou plus, mettez-les dans l'ordre et cliquez sur « Fusionner les GIF ». Ils se lisent l'un après l'autre dans le résultat." },
    { q: "Puis-je changer l'ordre ?", a: "Oui. Utilisez les flèches haut et bas à côté de chaque GIF." },
    { q: "Les GIF gardent-ils leur vitesse ?", a: "Oui. Chaque image conserve sa durée d'origine." },
    { q: "Et si les GIF n'ont pas la même taille ?", a: "Choisissez la taille de sortie, puis « Ajuster à l'intérieur » pour garder les images entières avec des bordures, ou « Remplir et recadrer » pour éviter les bordures." },
    { q: "Les bordures peuvent-elles être transparentes ?", a: "Oui, par défaut. Vous pouvez aussi choisir une couleur." },
    { q: "Les couleurs vont-elles changer ?", a: "Pas si les GIF partagent peu de couleurs. Des GIF très différents partagent une palette de 256 couleurs, ce qui peut adoucir légèrement les couleurs." },
    { q: "Combien pèsera le GIF fusionné ?", a: "À peu près la somme des poids des GIF. « Compresser un GIF » peut l'alléger ensuite." },
    { q: "Puis-je placer des GIF côte à côte ?", a: "Non : cet outil assemble les GIF dans le temps, l'un après l'autre." },
    { q: "Combien de GIF puis-je fusionner ?", a: "Autant que la mémoire de votre appareil le permet ; quelques dizaines de GIF courts ne posent aucun problème." },
    { q: "Mes GIF sont-ils envoyés sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans un navigateur mobile." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Puis-je créer un GIF avec un effet boomerang ?", a: "Oui. Créez une copie inversée avec « Inverser un GIF » et fusionnez les deux ici." },
  ],

  security:
    "Vos GIF sont fusionnés entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // GifMergerTool.tsx
    "Select GIFs": "Sélectionner des GIF",
    "or drop two or more GIFs here": "ou déposez deux GIF ou plus ici",
    "Please select GIF files.": "Veuillez sélectionner des fichiers GIF.",
    "Could not read this image.": "Impossible de lire ce fichier.",
    "Add GIFs": "Ajouter des GIF",
    "Clear all": "Tout retirer",
    "Remove": "Retirer",
    "Move up": "Monter",
    "Move down": "Descendre",
    "Add at least two GIFs to merge them.": "Ajoutez au moins deux GIF pour les fusionner.",
    "Merge settings": "Réglages de fusion",
    "Size": "Taille",
    "First GIF": "Premier GIF",
    "Largest": "Le plus grand",
    "Smallest": "Le plus petit",
    "GIFs of another size": "GIF d'une autre taille",
    "Fit inside": "Ajuster à l'intérieur",
    "Fill and crop": "Remplir et recadrer",
    "The whole frame stays visible, with borders where the shapes differ.": "L'image reste entièrement visible, avec des bordures là où les formats diffèrent.",
    "The frame fills the output; edges that stick out are cropped.": "L'image remplit la sortie ; les bords qui dépassent sont coupés.",
    "Transparent background": "Fond transparent",
    "Background colour": "Couleur de fond",
    "Merge GIFs": "Fusionner les GIF",
    "The GIFs play in the order of the list, each frame with its own timing.": "Les GIF se lisent dans l'ordre de la liste, chaque image avec sa propre durée.",
    "Processing failed.": "Le traitement a échoué.",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "Result": "Résultat",
    "Download GIF": "Télécharger le GIF",
    "{n} frames": "{n} images",
    "{s} s": "{s} s",
    "Your files are processed in your browser and never uploaded.": "Vos fichiers sont traités dans votre navigateur et ne sont jamais envoyés.",
  },
};

export default content;
