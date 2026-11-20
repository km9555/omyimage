import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/flouter-photo. Target query « Flouter une photo »
 * (3.6K FR, Nov 2026), secondaries « flouter image » and « flou photo ». Vous.
 * Distinct from /fr/flouter-arriere-plan (AI keeps the subject sharp) and
 * /fr/flouter-visage (face detection).
 */
const content: ToolPageContent = {
  toolId: "blur-image",
  locale: "fr",
  name: "Flouter une photo",
  tagline:
    "Floutez une photo en ligne avec un flou gaussien réglable, un aperçu en direct et le traitement par lots. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Flouter une photo ou une image – gratuit | oMyImage",
  metaDescription:
    "Floutez une photo en ligne gratuitement : toute l'image ou certaines zones, en flou, pixels ou aplat. Flouter une image par lots, avec aperçu, sans envoi.",

  intro:
    "Adoucissez un arrière-plan, anonymisez une scène ou créez un effet verre dépoli. L'outil « Flouter une photo » d'oMyImage applique un flou gaussien doux à vos images directement dans votre navigateur, avec un curseur pour régler exactement l'intensité voulue et un aperçu en direct. Floutez une seule image ou tout un lot, et téléchargez le résultat instantanément. Rien n'est envoyé sur un serveur : vos images restent privées. Que vous cherchiez un léger flou photo ou une zone totalement illisible, le réglage se fait en un geste.",

  sections: [
    {
      heading: "Comment fonctionne un flou gaussien",
      id: "how",
      body: [
        "Chaque pixel du résultat est remplacé par une moyenne pondérée des pixels qui l'entourent, les voisins proches comptant davantage que les lointains. La pondération suit une courbe en cloche, d'où le nom, et c'est ce qui rend le résultat naturellement doux plutôt que traîné dans une direction particulière.",
        "Le rayon détermine jusqu'où va cette moyenne. Un petit rayon ne mélange que les voisins immédiats et adoucit les contours ; un grand rayon attire des pixels de toute l'image et dissout la photo en taches de couleur. La relation n'est pas linéaire : doubler le rayon fait bien plus que doubler l'effet visible.",
        "Comme l'opération remplace la valeur des pixels au lieu de les recouvrir, elle est destructive par nature. C'est un inconvénient quand vous adoucissez une photo pour l'effet, et exactement ce que vous cherchez quand vous voulez cacher quelque chose.",
      ],
    },
    {
      heading: "Flouter pour anonymiser",
      id: "redaction",
      body: [
        "Dessiner un rectangle noir sur un numéro de compte bancaire dans un logiciel de retouche donne l'impression d'avoir masqué l'information, mais si le fichier conserve ses calques, le rectangle peut être déplacé, et même aplati, il signale que quelque chose a été caché. Le flou supprime l'information au lieu de la dissimuler : après l'export, les caractères ne sont plus récupérables parce qu'ils ne sont plus représentés dans les pixels.",
        "La règle pratique : jugez le résultat zoomé à 100 %, pas dans un aperçu. Un flou qui paraît convaincant en vignette peut laisser un texte parfaitement lisible quand quelqu'un ouvre l'image en grand. Si vous arrivez encore à lire ce qui était écrit, n'importe qui le peut.",
        "Pour masquer une zone précise plutôt que toute l'image, l'outil « Flouter un visage » vous permet de tracer des zones et de garder tout le reste net, ce qui est généralement ce qu'il faut quand une seule partie d'une capture d'écran est sensible.",
      ],
    },
    {
      heading: "Flouter une image pour servir de fond à un texte",
      id: "backgrounds",
      body: [
        "Un texte posé sur une photo est souvent difficile à lire, car l'image en dessous a des contours et des contrastes qui concurrencent les lettres. Flouter l'arrière-plan est la solution classique : la photo apporte toujours la couleur, l'ambiance et le contexte, mais plus rien en elle ne se bat avec la typographie.",
        "C'est pourquoi les images floutées sont partout derrière les titres, les écrans de connexion, les en-têtes de sites web et les diapositives de titre. Le flou doit être plus fort que ce que l'instinct suggère : si un contour reconnaissable subsiste, il finira derrière une lettre et la rendra moins lisible.",
        "Flouter réduit aussi le poids du fichier, un effet secondaire bienvenu pour une image de fond pleine largeur qui serait sinon l'un des éléments les plus lourds de la page.",
      ],
    },
    {
      heading: "Simuler une faible profondeur de champ",
      id: "depth",
      body: [
        "Un appareil photo à grande ouverture rend l'arrière-plan flou et fait ressortir le sujet. Les téléphones l'imitent avec le mode portrait, et on peut aussi l'imiter après coup en floutant une image puis en replaçant par-dessus un sujet net.",
        "Avouons-le : un flou uniforme n'est pas ce que fait un objectif. Le flou optique réel augmente avec la distance, si bien qu'une vraie photo à faible profondeur de champ devient de plus en plus douce vers le fond de la scène, alors qu'un flou uniforme est aussi doux partout. Gardez l'effet léger et il reste convaincant ; poussez-le trop et il se voit pour ce qu'il est.",
      ],
    },
  ],

  howToTitle: "Comment flouter une photo",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Réglez l'intensité", description: "Déplacez le curseur de flou et regardez l'aperçu en direct changer instantanément." },
    { title: "Appliquez et téléchargez", description: "Cliquez sur « Flouter » : une seule image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "lens_blur", title: "Toute l'image ou une sélection", description: "Adoucissez toute la photo ou tracez des zones à flouter, ou inversez la sélection pour tout flouter sauf elles et garder votre sujet net." },
    { icon: "gradient", title: "Flouter, pixeliser ou masquer", description: "D'un voile léger de 1 px à un flou gaussien intense de 50 px, une pixelisation grossière ou un aplat de couleur uni." },
    { icon: "burst_mode", title: "Floutage par lots", description: "Appliquez le même flou à tout un lot d'images JPG, PNG ou WEBP et téléchargez-les dans un ZIP." },
    { icon: "lock", title: "100 % privé", description: "Tout fonctionne dans votre navigateur avec HTML canvas : vos images ne sont jamais envoyées sur un serveur." },
  ],

  faqs: [
    { q: "S'agit-il d'un flou gaussien ?", a: "Oui : l'outil utilise le filtre de flou gaussien natif du navigateur, pour un résultat doux et de grande qualité quelle que soit l'intensité." },
    { q: "Puis-je flouter seulement une partie de l'image ?", a: "Oui. Passez en mode « Sélection » et faites glisser sur les zones à flouter. Activez l'inversion pour faire l'inverse, tout flouter sauf ces zones : c'est ainsi qu'on adoucit un arrière-plan en gardant le sujet net." },
    { q: "Puis-je flouter plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : une seule image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
    { q: "Est-ce gratuit et privé ?", a: "Oui. Pas d'inscription, pas de filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "À quoi sert concrètement le flou ?", a: "Surtout à trois choses : masquer une information sensible comme une adresse ou un numéro de compte, créer un fond doux pour qu'un texte posé dessus reste lisible, et simuler une faible profondeur de champ pour qu'un sujet se détache d'un arrière-plan chargé." },
    { q: "Quelle intensité de flou choisir ?", a: "Pour un fond derrière un texte, assez pour qu'aucun contour de l'image ne concurrence les lettres, en général un réglage assez fort. Pour un effet de profondeur de champ, beaucoup moins, sinon le résultat paraît artificiel. Pour masquer une information, assez pour qu'elle soit illisible zoomée à 100 %." },
    { q: "Un détail flouté peut-il être récupéré ?", a: "En pratique non, une fois l'image exportée. Le flou mélange les pixels et supprime ce qui s'y trouvait, contrairement à un rectangle de couleur qui se contente de le recouvrir. C'est pour cela que le flou est le bon outil pour anonymiser, et qu'un rectangle dessiné ne l'est pas." },
    { q: "Quelle différence avec l'outil « Flouter un visage » ?", a: "Cet outil s'applique à toute l'image ou aux zones que vous tracez vous-même. « Flouter un visage » ajoute la détection automatique des visages et l'anonymisation par lots : c'est le meilleur choix quand le but est d'anonymiser des personnes plutôt que d'obtenir un effet visuel." },
    { q: "Le flou change-t-il la taille du fichier ?", a: "En général, il la réduit, parfois nettement. La compression encode les différences entre pixels voisins, et le flou supprime justement ces différences : il reste beaucoup moins de détail à stocker." },
    { q: "Le flou corrige-t-il une photo bruitée ?", a: "Il masque le bruit en lissant tout, mais il supprime aussi le vrai détail avec le grain : le résultat paraît mou plutôt que propre. Un flou léger peut aider une image très bruitée ; au-delà, vous échangez un problème contre un autre." },
    { q: "Comment flouter une photo sur un téléphone ?", a: "Ouvrez cette page dans le navigateur de votre téléphone, choisissez la photo et réglez l'intensité avec le curseur. Les zones se tracent avec le doigt ; aucune application à installer." },
  ],

  security:
    "Vos images restent privées. Le floutage se fait entièrement dans votre navigateur avec HTML canvas : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // BlurImageTool.tsx — module-scope FORMATS and STYLES
    "Same as original": "Identique à l'original",
    "Blur|effect": "Flou",
    "Blur": "Flouter",
    "Pixelate": "Pixeliser",
    "Solid": "Aplat de couleur",
    // BlurImageTool.tsx
    "Please select image files.": "Sélectionnez des fichiers image.",
    "Couldn't read that image.": "Impossible de lire cette image.",
    "Draw at least one area, or switch to Whole image.":
      "Tracez au moins une zone, ou passez en mode « Toute l'image ».",
    "Blurred 1 image.": "1 image floutée.",
    "Blurred {n} images.": "{n} images floutées.",
    "Blur failed.": "Le floutage a échoué.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "done": "terminé",
    "1 image": "1 image", // i18n-same
    "{n} images": "{n} images", // i18n-same
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Remove": "Retirer",
    "Quality": "Qualité",
    "Live preview of": "Aperçu en direct de",
    "— applied to all {n} images.": "— appliqué aux {n} images.",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Faites glisser pour tracer une zone, cliquez sur une zone pour la sélectionner, faites glisser ses poignées pour la redimensionner et appuyez sur Suppr pour l'effacer.",
    "1 area.": "1 zone.",
    "{n} areas.": "{n} zones.",
    "Clear images": "Retirer les images",
    "Files": "Fichiers",
    "Blur settings": "Réglages du flou",
    "Blur Settings": "Réglages du flou",
    "Blurring…": "Floutage…",
    "Blur {n} images": "Flouter {n} images",
    "Blur & download": "Flouter et télécharger",
    "What to blur": "Que flouter",
    "Whole image softens everything. Selective blurs only the areas you draw — or everything except them, with Invert on.":
      "« Toute l'image » adoucit tout. « Sélection » floute uniquement les zones que vous tracez ou, avec l'inversion activée, tout sauf elles.",
    "Whole image": "Toute l'image",
    "Selective": "Sélection",
    "Blur everything": "Tout flouter",
    "except": "sauf",
    "these areas": "ces zones",
    "New area shape": "Forme des nouvelles zones",
    "Ellipse": "Ellipse", // i18n-same
    "Rectangle": "Rectangle", // i18n-same
    "Clear areas": "Effacer les zones",
    "Effect": "Effet",
    "Blur strength": "Intensité du flou",
    "Pixel size": "Taille des pixels",
    "Output format": "Format de sortie",
    "Fill colour": "Couleur de remplissage",
    "JPG background": "Fond du JPG",
  },
};

export default content;
