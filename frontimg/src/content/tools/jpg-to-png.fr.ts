import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/jpg-en-png.
 *
 * Head term "JPG en PNG" (14.8K/mo) — French converter queries take the
 * "X en Y" form. Secondary "convertir JPG en PNG", used in the intro, a
 * heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-png",
  locale: "fr",
  name: "JPG en PNG",
  tagline:
    "Convertissez vos images JPG en PNG en ligne, par lots et sans perte de qualité. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG en PNG – convertir JPG en PNG gratuit | oMyImage",
  metaDescription:
    "JPG en PNG gratuit et sans inscription : convertir JPG en PNG sans perte, par lots, dans votre navigateur. Idéal avant une retouche. Rien n'est envoyé.",

  intro:
    "Besoin d'une copie sans perte d'un JPG pour une retouche ou un travail graphique ? Le convertisseur JPG en PNG d'oMyImage transforme vos JPG en fichiers PNG propres, directement dans votre navigateur : une image à la fois ou en masse. Convertir JPG en PNG vous donne un format sans perte qui gère la transparence, parfait quand vous ne voulez plus aucune compression. Aucun envoi, aucune inscription, résultat immédiat.",

  sections: [
    {
      heading: "Ce que cette conversion fait, et ce qu'elle ne fait pas",
      id: "expectations",
      body: [
        "Convertir un JPG en PNG change le conteneur, pas le contenu. Le PNG stockera l'image sans perte à partir de maintenant, ce qui est réellement utile, mais il ne peut pas annuler la compression que le JPG a déjà appliquée. Si la source présente des blocs visibles dans le ciel ou un halo autour du texte, le PNG les reproduira fidèlement.",
        "Voyez-le comme une façon de figer l'image là où elle en est. Chaque enregistrement suivant est sans perte : la dégradation cesse de s'accumuler. C'est là le vrai bénéfice, et c'est pourquoi cette conversion a sa place au début d'un travail de retouche plutôt qu'à la fin.",
      ],
    },
    {
      heading: "Pourquoi les graphistes convertissent JPG en PNG avant de retoucher",
      id: "editing",
      body: [
        "Le JPG pénalise la répétition. Ouvrez un JPG, recadrez-le, enregistrez-le, rouvrez-le, ajustez les niveaux, enregistrez à nouveau : chaque cycle réencode toute l'image et supprime encore un peu de détail. Après quelques passages, les dégâts sont évidents, surtout dans les dégradés doux et autour des contours.",
        "Le PNG n'a pas ce défaut. Une fois converti, vous pouvez enregistrer autant de fois que vous le voulez sans perte cumulée, ce qui en fait le format de travail logique pour tout ce que vous êtes en train de modifier. L'autre moitié de la raison, c'est la transparence : impossible d'effacer un fond pour le rendre transparent tant que le fichier est un JPG, car le format n'a nulle part où l'enregistrer. Convertir d'abord donne à la couche alpha un endroit où exister.",
      ],
    },
    {
      heading: "PNG ou WEBP ?",
      id: "webp",
      body: [
        "Si vous convertissez pour retoucher ou parce qu'un système l'exige, le PNG est le bon choix et le poids du fichier est simplement le prix à payer. Si la raison est d'obtenir de la transparence sur une page web, le WEBP est généralement une meilleure cible : il gère une couche alpha complète comme le PNG, mais pour une fraction du poids, et tous les navigateurs actuels le décodent.",
        "En pratique, tout dépend de la destination. Le PNG pour les fichiers maîtres, les logiciels de retouche et tout ce qui part à l'impression ou à l'archivage. Le WEBP pour tout ce qui est servi à un navigateur. Convertir un JPG en PNG de plusieurs mégaoctets puis le mettre sur un site web est une erreur courante et coûteuse.",
      ],
    },
    {
      heading: "Captures d'écran et texte",
      id: "screenshots",
      body: [
        "Si vous avez une capture d'écran enregistrée en JPG, la convertir en PNG l'empêche de se dégrader davantage, mais ne rendra pas net un texte déjà flou. Le JPG gère mal les contours très contrastés, et les lettres ne sont rien d'autre que des contours très contrastés : le flou caractéristique autour des caractères est donc incrusté dans l'image.",
        "La leçon pour la prochaine fois : capturez directement en PNG. L'outil de capture d'écran de chaque système d'exploitation peut être réglé pour cela, et pour des captures d'interface le PNG est généralement à la fois plus net et plus léger que l'équivalent JPG.",
      ],
    },
  ],

  howToTitle: "Comment convertir JPG en PNG",
  steps: [
    { title: "Importez vos JPG", description: "Sélectionnez une ou plusieurs images JPG, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Vérifiez", description: "Le PNG est sans perte : il n'y a aucun réglage de qualité à choisir, confirmez simplement vos fichiers." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir » : un JPG se télécharge en PNG, plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "JPG → PNG en masse", description: "Convertissez de nombreux JPG en PNG d'un coup et téléchargez-les tous dans une seule archive ZIP." },
    { icon: "high_quality", title: "Résultat sans perte", description: "Le PNG est un format sans perte : vos images converties conservent chaque pixel de détail." },
    { icon: "lock", title: "Privé et instantané", description: "La conversion s'effectue localement dans votre navigateur : vos JPG ne quittent jamais votre appareil." },
  ],

  faqs: [
    { q: "Pourquoi convertir JPG en PNG ?", a: "Le PNG est sans perte et gère la transparence, ce qui est utile pour la retouche, les logos et les visuels où vous ne voulez pas d'artefacts de compression JPG." },
    { q: "Le PNG sera-t-il plus lourd que le JPG ?", a: "En général, oui : le PNG est sans perte, les images photographiques deviennent donc plus lourdes. En échange, plus aucune perte de qualité." },
    { q: "Puis-je convertir plusieurs JPG à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : plusieurs fichiers se téléchargent ensemble dans un ZIP." },
    { q: "Est-ce gratuit et privé ?", a: "Entièrement. Pas d'inscription, pas de filigrane, et chaque image est traitée dans votre navigateur." },
    { q: "Convertir JPG en PNG améliore-t-il la qualité ?", a: "Non, et c'est le malentendu le plus courant à propos de cette conversion. Le PNG est sans perte, il préserve donc parfaitement l'image, mais le JPG avait déjà supprimé des détails lors de sa création, et ces détails ont disparu. Vous obtenez une copie fidèle et sans perte d'une image avec perte, pas un original restauré." },
    { q: "La conversion ajoute-t-elle de la transparence ?", a: "Pas d'elle-même. Le PNG gère une couche alpha, mais un JPG n'a aucune transparence à transmettre : le résultat est donc entièrement opaque. La conversion vous donne un fichier capable de contenir de la transparence une fois retouché, et c'est pourquoi les graphistes convertissent avant de détourer un fond." },
    { q: "Pourquoi le PNG est-il tellement plus lourd ?", a: "Parce que le PNG ne supprime jamais de données. Une photo JPG de 500 Ko devient couramment un PNG de 3 à 5 Mo. C'est le coût normal d'un format sans perte, pas le signe d'un problème." },
    { q: "Quand faut-il convertir un JPG en PNG ?", a: "Avant une retouche, quand vous allez réenregistrer plusieurs fois et ne voulez plus de dégradation ; quand vous devez ajouter de la transparence ; quand un système exige précisément du PNG ; et pour les captures d'écran ou les images riches en texte où les artefacts JPG se voient." },
    { q: "La conversion supprime-t-elle les artefacts de compression JPG ?", a: "Non. Les blocs, les effets de bandes et les halos autour des contours font désormais partie des données de l'image, et le PNG les stocke fidèlement. Seul un modèle de restauration par IA peut les atténuer, et même dans ce cas il s'agit d'une reconstruction, pas d'une récupération." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. La conversion JPG en PNG se fait entièrement dans votre navigateur avec HTML canvas ; vos fichiers ne quittent pas votre appareil." },
  ],

  security:
    "Vos images restent privées. La conversion JPG en PNG se fait entièrement dans votre navigateur avec HTML canvas : rien n'est envoyé. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // Drop hint from app/jpg-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG images here": "ou déposez ici des images JPG",
  },
};

export default content;
