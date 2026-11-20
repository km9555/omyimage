import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/flouter-visage. Target query « Flouter un visage »
 * (1.6K FR, Nov 2026), secondary « pixeliser un visage ». Vous. The legal
 * section names the RGPD and the French droit à l'image in general terms —
 * no invented article numbers or authority rules.
 */
const content: ToolPageContent = {
  toolId: "blur-face",
  locale: "fr",
  name: "Flouter un visage",
  seoName: "Flouter un visage",
  tagline:
    "Floutez ou pixelisez les visages, les plaques d'immatriculation et les informations privées de vos photos en ligne : tracez les zones, choisissez l'intensité et exportez. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Flouter un visage ou le pixeliser – gratuit | oMyImage",
  metaDescription:
    "Floutez un visage en ligne gratuitement : l'IA détecte les visages, vous floutez ou pixelisez visages, plaques et noms. Respectez le RGPD sans envoyer la photo.",

  intro:
    "Besoin de masquer un visage, un badge nominatif ou une plaque d'immatriculation avant de partager une photo ? L'outil « Flouter un visage » d'oMyImage trouve les visages automatiquement et vous permet de tracer vos propres zones sur n'importe quelle autre information privée. Floutez-les, pixelisez-les ou masquez-les d'un aplat de couleur, ajustez chaque zone en la faisant glisser et traitez tout un lot en une fois. Le floutage est intégré définitivement à l'image exportée, et tout, y compris la détection des visages, fonctionne dans votre navigateur. Votre photo n'est jamais envoyée : c'est précisément ainsi qu'il faut traiter ces images lorsque le droit à l'image, le RGPD ou la protection des données personnelles vous préoccupent.",

  sections: [
    {
      heading: "Pourquoi flouter vaut mieux qu'un bandeau noir",
      id: "method",
      body: [
        "Un rectangle noir dessiné sur un visage dans un fichier de retouche à calques n'est pas une anonymisation : c'est un autocollant, et n'importe qui ouvrant le fichier d'origine peut le déplacer. Même aplati, un bloc uni annonce que quelque chose a été caché et pousse à se demander quoi.",
        "Le flou fonctionne autrement. Il détruit l'information sur place : les pixels sont remplacés par une moyenne de leurs voisins, et le détail qui rendait le visage reconnaissable n'existe plus nulle part dans le fichier. Une fois l'image exportée, il n'y a rien à récupérer, puisque rien n'a été conservé.",
        "C'est la propriété que l'on attend vraiment d'une anonymisation. Pas la dissimulation, qui peut être défaite, mais la destruction, qui ne le peut pas.",
      ],
    },
    {
      heading: "Flouter ou pixeliser un visage ?",
      id: "blur-vs-pixelate",
      body: [
        "La pixelisation remplace des zones par de gros blocs d'une seule couleur moyenne. Elle a l'air radicale, et c'est pour cela qu'elle est la convention à la télévision et dans la presse, où le public doit comprendre qu'une information a été retenue.",
        "Pour une véritable anonymisation, c'est pourtant l'option la plus faible. Les moyennes des blocs conservent une structure (la position approximative des yeux, la forme de la mâchoire, le contraste entre les cheveux et la peau), et des chercheurs ont montré qu'il était possible de retrouver l'identité de visages pixelisés lorsque la taille des blocs n'était pas assez agressive. Un flou gaussien fort laisse nettement moins de signal.",
        "Pixelisez quand vous voulez que l'anonymisation se voie au premier coup d'œil, et floutez quand vous voulez que la personne soit réellement méconnaissable. Si vous avez besoin des deux, pixelisez fort plutôt que légèrement.",
      ],
    },
    {
      heading: "Bien couvrir la zone",
      id: "coverage",
      body: [
        "L'erreur la plus courante consiste à flouter une zone trop serrée. Une zone qui ne couvre que les yeux laisse intacts la mâchoire, la naissance des cheveux, les oreilles et le teint, et c'est à tout cela qu'on reconnaît quelqu'un. Couvrez toute la tête, en débordant légèrement au-delà des cheveux.",
        "La deuxième erreur est de flouter trop faiblement. Jugez le résultat zoomé à 100 % plutôt qu'en vignette : un flou qui paraît suffisant dans un petit aperçu ne l'est souvent pas. Si vous savez encore qui c'est, toute personne qui la connaît le saura aussi.",
        "Pensez aussi au reste de l'image. Les badges nominatifs, les numéros de maison, les plaques d'immatriculation, les reflets dans les vitres et le texte d'un écran derrière la personne permettent tous d'identifier quelqu'un, et une photo au visage parfaitement flouté mais au panneau de rue bien lisible n'a pas servi à grand-chose.",
      ],
    },
    {
      heading: "Quand c'est important juridiquement : RGPD et droit à l'image",
      id: "legal",
      body: [
        "Au regard du RGPD, dans l'Union européenne, et de règles comparables en Suisse ou au Québec, un visage reconnaissable est une donnée personnelle, et sa publication exige en général une base légale, le plus souvent le consentement. En France s'y ajoute le droit à l'image : chacun peut en principe s'opposer à la diffusion d'une photo où il est reconnaissable. Ces obligations pèsent bien plus lourdement sur les organisations que sur les particuliers qui publient leurs photos de vacances, mais elles existent.",
        "Les situations où elles comptent le plus sont prévisibles : photos d'enfants, images prises dans des écoles, des cliniques ou des établissements de soins, photos de foule utilisées à des fins commerciales, photos prises au travail et toute image de personnes qui ne savaient pas qu'on les photographiait. Flouter les visages est le moyen le plus simple d'écarter complètement la question.",
        "Comme tout se passe ici dans votre navigateur, l'original non flouté ne quitte jamais votre appareil, ce qui est la bonne façon de traiter précisément ce type d'images.",
      ],
    },
  ],

  howToTitle: "Comment flouter un visage sur une photo",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Détectez ou dessinez", description: "Lancez la détection automatique pour trouver les visages, puis déplacez, redimensionnez ou supprimez n'importe quelle zone ; tracez aussi les vôtres sur les plaques, les noms ou les documents." },
    { title: "Exportez", description: "Cliquez sur « Exporter » pour télécharger les images avec les zones floutées intégrées, dans un ZIP s'il y en a plusieurs." },
  ],

  features: [
    { icon: "face_retouching_natural", title: "Détection automatique des visages", description: "Trouve tous les visages de la photo selon la sensibilité choisie, et le modèle tourne sur votre appareil : l'image n'est jamais envoyée." },
    { icon: "blur_on", title: "Flouter, pixeliser ou masquer", description: "Choisissez un flou doux, une pixelisation grossière ou un aplat uni, et réglez l'intensité pour masquer entièrement les informations sensibles." },
    { icon: "select_all", title: "Zones modifiables", description: "Chaque zone peut être déplacée, redimensionnée depuis n'importe quel coin ou bord et supprimée séparément : ellipses pour les visages, rectangles pour les plaques et les documents." },
    { icon: "lock", title: "Vraiment privé", description: "Tout est traité dans votre navigateur : l'original ne quitte jamais votre appareil et le floutage est définitif dans le fichier exporté." },
  ],

  faqs: [
    { q: "Puis-je flouter plusieurs visages ?", a: "Oui. La détection automatique marque tous les visages qu'elle trouve, et vous pouvez tracer à la main autant de zones que vous le souhaitez, les annuler ou les effacer." },
    { q: "Quelle différence entre flouter et pixeliser ?", a: "Le flou adoucit la zone de façon uniforme ; la pixelisation la remplace par de gros blocs. Avec une intensité suffisante, les deux masquent complètement le détail." },
    { q: "Le flou est-il définitif ?", a: "Oui. Les zones floutées sont dessinées directement dans l'image exportée : la personne qui la reçoit ne peut pas les annuler." },
    { q: "La détection automatique envoie-t-elle ma photo ?", a: "Non. Le modèle de détection des visages est téléchargé dans votre navigateur la première fois que vous l'utilisez, puis il fonctionne sur votre propre appareil, comme le floutage lui-même. Rien de l'image n'est envoyé nulle part, et c'est tout l'intérêt : les photos que l'on floute sont justement celles qui ne devraient pas passer par le serveur de quelqu'un d'autre." },
    { q: "Un visage n'a pas été détecté : que faire ?", a: "Augmentez la sensibilité et relancez la détection, ou tracez simplement la zone à la main. La détection est réglée pour des visages assez proches de l'objectif : les petits visages dans une foule ou dans une scène de rue lointaine sont les oublis les plus fréquents. Tout ce qu'elle trouve devient une zone normale que vous pouvez déplacer, redimensionner ou supprimer." },
    { q: "Est-ce gratuit ?", a: "Entièrement gratuit, sans filigrane et sans inscription." },
    { q: "Le flou peut-il être inversé ?", a: "Pas par des moyens réalistes. Le flou supprime l'information au lieu de la cacher : il ne reste rien à récupérer, contrairement à un bandeau noir dessiné dans un fichier à calques ou à une pixelisation assez grossière pour qu'une reconstruction par IA devienne plausible. Une fois l'image exportée, le visage a disparu des pixels." },
    { q: "Vaut-il mieux flouter ou pixeliser ?", a: "Le flou est le choix le plus sûr. Une pixelisation à gros blocs peut parfois être partiellement reconstruite, car les moyennes des blocs gardent une structure. Un flou gaussien fort laisse beaucoup moins de prise. La pixelisation montre plus clairement qu'une anonymisation a eu lieu, ce qui est parfois exactement ce que l'on veut." },
    { q: "Quelle intensité de flou choisir ?", a: "Assez forte pour que vous-même ne reconnaissiez pas la personne zoomé à 100 %. Un flou léger qui se contente d'adoucir les traits n'est pas une anonymisation : le visage reste identifiable pour quiconque connaît la personne, et souvent pour un logiciel. Dans le doute, forcez la dose." },
    { q: "Les données de localisation de la photo sont-elles aussi supprimées ?", a: "Oui, par effet secondaire : l'image est redessinée à partir d'un canvas, qui ne reprend pas les métadonnées EXIF ; les coordonnées GPS et les informations de l'appareil disparaissent donc. Si ce sont les métadonnées qui vous préoccupent plutôt que les visages, « Supprimer les métadonnées » est l'outil dédié." },
    { q: "Dois-je flouter les visages avant de publier des photos ?", a: "Cela dépend de l'endroit où vous vous trouvez et de ce que montre la photo. Le RGPD et le droit à l'image traitent un visage reconnaissable comme une donnée personnelle, et publier des images d'enfants, de patients, de passants ou de personnes dans des situations sensibles entraîne de réelles obligations. Sans consentement, flouter est la réponse simple." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Non. Tout se passe sur un canvas dans votre navigateur, ce qui compte beaucoup ici : les images que l'on floute sont généralement justement celles qui ne devraient pas transiter par le serveur de quelqu'un d'autre." },
    { q: "Puis-je flouter une plaque d'immatriculation ou un document ?", a: "Oui. Dans l'onglet « Texte », l'outil cherche de l'écriture dans l'image (une plaque, un numéro de maison, une adresse) et marque chaque résultat comme une zone. Ce qu'il ne trouve pas, couvrez-le d'un rectangle dans l'onglet « Forme » ou peignez-le au pinceau." },
  ],

  security:
    "Vos images restent privées. La détection des visages comme le floutage se font entièrement dans votre navigateur : le modèle open source MediaPipe BlazeFace est téléchargé sur votre appareil et exécuté sur place, si bien que rien n'est envoyé sur un serveur, à aucun moment. Le résultat flouté est définitif dans le fichier exporté. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // BlurTool.tsx — module-scope TABS (translated at the render site)
    "Brush": "Pinceau",
    "Shape": "Forme",
    "Text": "Texte",
    "Face": "Visage",
    // face-detect / text-detect SENSITIVITY_LABELS
    "Low": "Faible",
    "Recommended": "Recommandée",
    "High": "Élevée",
    "Only very confident matches": "Uniquement les détections très sûres",
    "Balanced for most photos": "Équilibrée pour la plupart des photos",
    "Catches more, may over-detect": "Détecte davantage, peut en marquer trop",
    "Only clearly legible text": "Uniquement le texte bien lisible",
    "Catches faint text, may over-detect": "Détecte le texte pâle, peut en marquer trop",
    // Tesseract's own status strings, capitalised (text tab)
    "Loading tesseract core": "Chargement du moteur de reconnaissance",
    "Initializing tesseract": "Démarrage du moteur",
    "Initialized tesseract": "Moteur démarré",
    "Loading language traineddata": "Chargement du modèle de langue",
    "Loaded language traineddata": "Modèle de langue chargé",
    "Initializing api": "Préparation de la reconnaissance de texte",
    "Initialized api": "Reconnaissance de texte prête",
    "Recognizing text": "Recherche de texte",
    // BlurTool.tsx
    "Please select image files.": "Sélectionnez des fichiers image.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "Couldn't read {name}.": "Impossible de lire {name}.",
    "Found 1 face": "1 visage trouvé",
    "Found {n} faces": "{n} visages trouvés",
    "Found 1 piece of text": "1 texte trouvé",
    "Found {n} pieces of text": "{n} textes trouvés",
    "in 1 image.": "dans 1 image.",
    "in {n} images.": "dans {n} images.",
    "No faces detected — try a higher sensitivity, or draw the areas by hand.":
      "Aucun visage détecté : essayez une sensibilité plus élevée, ou tracez les zones à la main.",
    "No text detected — try a higher sensitivity, or draw the areas by hand.":
      "Aucun texte détecté : essayez une sensibilité plus élevée, ou tracez les zones à la main.",
    "Face detection couldn't start. You can still draw areas by hand.":
      "La détection des visages n'a pas pu démarrer. Vous pouvez quand même tracer les zones à la main.",
    "Text detection couldn't start. You can still draw areas by hand.":
      "La détection de texte n'a pas pu démarrer. Vous pouvez quand même tracer les zones à la main.",
    "Ellipse": "Ellipse", // i18n-same
    "Rectangle": "Rectangle", // i18n-same
    "Brush {n}": "Pinceau {n}",
    "Erase {n}": "Gomme {n}",
    "Add at least one area to censor.": "Ajoutez au moins une zone à flouter.",
    "Pick an effect — \"No blur\" leaves the image unchanged.":
      "Choisissez un effet : sans effet, l'image reste inchangée.",
    "Exported 1 image.": "1 image exportée.",
    "Exported {n} images.": "{n} images exportées.",
    "Export failed.": "L'export a échoué.",
    "Edit {name}": "Modifier {name}",
    "1 area": "1 zone",
    "{n} areas": "{n} zones",
    "1 image": "1 image", // i18n-same
    "{n} images": "{n} images", // i18n-same
    "done": "terminé",
    "Download": "Télécharger",
    "Remove": "Retirer",
    "Quality": "Qualité",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Faites glisser pour tracer une zone, cliquez sur une zone pour la sélectionner, faites glisser ses poignées pour la redimensionner et appuyez sur Suppr pour l'effacer.",
    "1 area on this image.": "1 zone sur cette image.",
    "{n} areas on this image.": "{n} zones sur cette image.",
    "Clear images": "Retirer les images",
    "Files": "Fichiers",
    "Blur settings": "Réglages du flou",
    "Export": "Exporter",
    "Exporting…": "Export en cours…",
    "Censor Settings": "Réglages d'anonymisation",
    "Censoring is baked into the exported file — all in your browser.":
      "Le floutage est intégré au fichier exporté, entièrement dans votre navigateur.",
    "Export {n} images": "Exporter {n} images",
    "Export image": "Exporter l'image",
    "Draw on the image to edit": "Dessinez sur l'image pour la modifier",
    "Add blur": "Ajouter du flou",
    "Brush size": "Taille du pinceau",
    "Brush fade": "Douceur du pinceau",
    "Undo stroke": "Annuler le tracé",
    "Clear all": "Tout effacer",
    "Remove erases from anything on the image, including a detected face — they share one mask.":
      "« Retirer » efface tout ce qui se trouve sur l'image, y compris un visage détecté : tout partage le même masque.",
    "New area shape": "Forme des nouvelles zones",
    "Ellipse follows the shape of a head more closely and looks less like a redaction box. Rectangle is better for signs, plates and documents.":
      "L'ellipse épouse mieux la forme d'une tête et ressemble moins à un bandeau de censure. Le rectangle convient mieux aux panneaux, aux plaques et aux documents.",
    "Delete area": "Supprimer la zone",
    "Drag on the image to draw an area, then move or resize it by its handles.":
      "Faites glisser sur l'image pour tracer une zone, puis déplacez-la ou redimensionnez-la avec ses poignées.",
    "Automatic text detection": "Détection automatique du texte",
    "Reads the image on your device to find writing - a licence plate, a door number, an address. Your photo is never uploaded, though the recognition engine itself downloads from a CDN the first time you use it.":
      "Lit l'image sur votre appareil pour y trouver de l'écriture - une plaque d'immatriculation, un numéro de porte, une adresse. Votre photo n'est jamais envoyée ; seul le moteur de reconnaissance se télécharge depuis un CDN la première fois que vous l'utilisez.",
    "Whole lines": "Lignes entières",
    "Single words": "Mots isolés",
    "Reading...": "Lecture...",
    "This image": "Cette image",
    "All {n}": "Les {n}",
    "The first run downloads the engine, so it takes a few seconds. Lines suits an address, words suits one field on a form. Pale text on a dark background is often missed — draw over that with Shape or Brush.":
      "La première fois, le moteur se télécharge : comptez quelques secondes. Les lignes conviennent à une adresse, les mots à un seul champ de formulaire. Le texte clair sur fond sombre échappe souvent à la détection : couvrez-le avec « Forme » ou « Pinceau ».",
    "Automatic face detection": "Détection automatique des visages",
    "Runs a face-detection model downloaded to your browser. Your photo is never uploaded — detection happens on your device.":
      "Utilise un modèle de détection des visages téléchargé dans votre navigateur. Votre photo n'est jamais envoyée : la détection se fait sur votre appareil.",
    "Detecting…": "Détection…",
    "Detected faces become normal areas — nudge, resize or delete any of them.":
      "Les visages détectés deviennent des zones normales : déplacez, redimensionnez ou supprimez chacune d'elles.",
    "Edit blur masks": "Modifier les masques de flou",
    "Show": "Afficher",
    "Hide": "Masquer",
    "Show {name}": "Afficher {name}",
    "Hide {name}": "Masquer {name}",
    "Delete": "Supprimer",
    "Delete {name}": "Supprimer {name}",
    "Intensity": "Intensité",
    "Block colour": "Couleur de l'aplat",
    "{effect} keeps some of the original detail. For a face you want kept private, use Gaussian at a high intensity or Colour.":
      "{effect} conserve une partie du détail d'origine. Pour un visage qui doit rester privé, utilisez le flou gaussien à forte intensité ou un aplat de couleur.",
  },
};

export default content;
