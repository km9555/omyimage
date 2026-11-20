import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/gif-en-images.
 *
 * Target query « GIF en images » (convertir / découper un GIF en images);
 * secondary « extraire les images d'un GIF ». A GIF frame is « image » here,
 * with « frame » named once in the intro, since both read naturally in French.
 */
const content: ToolPageContent = {
  toolId: "gif-to-images",
  locale: "fr",
  name: "GIF en images",
  tagline:
    "Extrayez toutes les images d'un GIF animé en ligne : téléchargez-les ensemble dans un ZIP en PNG, JPG ou WebP, ou enregistrez-en une seule. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF en images – Extraire les images d'un GIF | oMyImage",
  metaDescription:
    "Convertissez un GIF en images : extrayez toutes les images d'un GIF en PNG, JPG ou WebP et téléchargez-les dans un ZIP. Gratuit, sans envoi de fichier.",

  intro:
    "Convertir un GIF en images, c'est séparer une animation en ses visuels individuels. L'outil « GIF en images » d'oMyImage extrait toutes les images (frames) d'un GIF directement dans votre navigateur, déjà recomposées pour que chacune soit une image complète, et vous permet de les télécharger toutes dans un ZIP ou une par une, en PNG, JPG ou WebP. Rien n'est envoyé sur un serveur : votre GIF reste privé.",

  sections: [
    {
      heading: "À quoi sert d'extraire les images d'un GIF",
      id: "why",
      body: [
        "Un GIF animé est une pile d'images fixes accompagnée d'informations de durée. En le décomposant, vous obtenez chacune de ces images sous forme de fichier ordinaire, ce dont vous avez besoin dès que ce n'est pas l'animation elle-même qui vous intéresse.",
        "Le cas le plus courant consiste à trouver une bonne image. Un GIF de réaction contient un moment que vous voulez garder en image fixe ; un enregistrement d'écran contient l'état précis de l'interface dont vous avez besoin pour une documentation ; une séquence en stop motion contient l'image la plus réussie.",
        "Le second cas, c'est la réparation. Un GIF existant pose problème (une image en trop, un filigrane, une couleur erronée) et vous ne pouvez pas le corriger tant qu'il reste une animation. Vous extrayez les images, corrigez celles qui doivent l'être, puis vous le reconstruisez.",
      ],
    },
    {
      heading: "Comment les images d'un GIF sont réellement stockées",
      id: "decoding",
      body: [
        "Le GIF est plus économe qu'il n'y paraît. Au lieu d'enregistrer chaque image en entier, il ne stocke que la zone qui a changé depuis la précédente, avec une instruction sur ce qu'il faut faire de la zone située dessous : la laisser, restaurer le fond ou restaurer ce qui s'y trouvait avant.",
        "C'est pourquoi une extraction naïve produit des fragments : un outil qui se contente de lire chaque bloc enregistré obtient une image partielle avec des trous transparents, et non l'image que vous voyez quand le GIF est lu. Bien décoder, c'est composer chaque image sur l'état accumulé des précédentes.",
        "C'est exactement ce qui se passe ici : les images que vous récupérez sont des images complètes, telles qu'elles apparaissent pendant la lecture, dans l'ordre et correctement numérotées.",
      ],
    },
    {
      heading: "Pourquoi le PNG est le bon format de sortie",
      id: "format",
      body: [
        "Les images d'un GIF ont déjà été réduites à une palette de 256 couleurs au maximum. Cette réduction est définitive et ne peut pas être annulée ; lors de l'extraction, l'objectif est donc simplement de ne rien dégrader de plus.",
        "Le PNG est sans perte : les images arrivent exactement telles que le décodeur les a produites. Il gère aussi correctement la transparence du GIF, si bien que les images comportant des zones transparentes les conservent au lieu de recevoir un fond blanc.",
        "Le JPG serait un mauvais choix sur les deux plans : il ajouterait ses propres artefacts de compression à la limite de la palette, et il ne peut pas stocker la transparence. Si vous avez besoin de fichiers plus légers ensuite, convertissez les PNG extraits en connaissance de cause plutôt que de perdre en qualité par défaut.",
      ],
    },
    {
      heading: "Extraire, modifier, reconstruire",
      id: "workflow",
      body: [
        "Extraire puis reconstruire est la façon pratique de modifier une animation que vous n'avez pas créée. Récupérez les images ici, apportez la modification nécessaire (les recadrer, ajuster les couleurs, retirer celles qui sont en trop, flouter un élément sensible), puis passez le résultat dans « Créer un GIF ».",
        "Au retour, une chose est à préserver : le rythme. Notez la durée d'origine des images avant de commencer, car reconstruire à une autre cadence change le caractère de l'animation, parfois radicalement. Et gardez la numérotation intacte, puisque l'ordre dans lequel vous ajoutez les images est celui dans lequel elles seront lues.",
        "Tout s'exécute dans votre navigateur aux deux extrémités : un GIF dont vous préférez ne pas envoyer le contenu peut être démonté et remonté sans jamais quitter votre appareil.",
      ],
    },
  ],

  howToTitle: "Comment extraire les images d'un GIF",
  steps: [
    { title: "Importez un GIF", description: "Sélectionnez un GIF animé, ou glissez-déposez-le dans l'espace de travail." },
    { title: "Parcourez les images", description: "Chaque image est extraite et entièrement recomposée ; vous les voyez toutes dans une grille." },
    { title: "Téléchargez", description: "Enregistrez toutes les images dans un ZIP en PNG, JPG ou WebP, ou cliquez sur n'importe quelle image pour la télécharger seule." },
  ],

  features: [
    { icon: "burst_mode", title: "Toutes les images", description: "Découpe un GIF animé en toutes ses images individuelles, entièrement recomposées pour que chacune soit un visuel complet." },
    { icon: "folder_zip", title: "Téléchargement groupé en ZIP", description: "Exportez toutes les images d'un coup dans un ZIP numéroté, en PNG, JPG ou WebP." },
    { icon: "lock", title: "100 % privé", description: "Les images sont extraites entièrement dans votre navigateur : votre GIF n'est jamais envoyé sur un serveur." },
  ],

  faqs: [
    { q: "Les images obtenues sont-elles complètes ?", a: "Oui. Chaque image est recomposée en respectant les instructions de remplacement du GIF, de sorte que les images partielles sont fusionnées en images complètes." },
    { q: "Vers quels formats puis-je exporter ?", a: "PNG (avec transparence), JPG (avec une couleur de fond) ou WebP." },
    { q: "Puis-je télécharger une seule image ?", a: "Oui. Cliquez sur n'importe quelle image de la grille pour la télécharger séparément, ou utilisez le bouton pour télécharger toutes les images dans un ZIP." },
    { q: "Est-ce gratuit et privé ?", a: "Oui. Sans inscription, et le GIF est traité localement dans votre navigateur : rien n'est envoyé." },
    { q: "Pourquoi voudrais-je les images séparément ?", a: "Pour tirer une bonne image fixe d'une animation, modifier une image précise et reconstruire la boucle, étudier un mouvement image par image, supprimer une image indésirable, ou tout simplement parce que vous aviez besoin d'une image statique et ne disposiez que du GIF." },
    { q: "Vais-je obtenir toutes les images ?", a: "Oui : le GIF est entièrement décodé, sans échantillonnage, donc vous recevez chaque image enregistrée, dans l'ordre. Une boucle de trois secondes à 10 images par seconde donne trente images, numérotées pour conserver la séquence." },
    { q: "Quel format d'export choisir ?", a: "Le PNG dans presque tous les cas. Les images d'un GIF sont déjà limitées à 256 couleurs et le PNG les stocke sans perte, donc rien d'autre n'est dégradé ; il conserve en plus la transparence du GIF. Le JPG ajouterait des artefacts de compression à la limite de la palette et n'accepte pas la transparence." },
    { q: "Pourquoi certaines images paraissent-elles incomplètes ou transparentes ?", a: "Parce que le GIF enregistre les images sous forme de différences avec la précédente : seulement les pixels qui ont changé. Le décodeur les recompose en images complètes, et c'est ce que vous recevez ici. Si vous avez déjà vu dans un autre outil une image de GIF brute qui ne montrait qu'un fragment, voilà pourquoi." },
    { q: "Puis-je reconstruire un GIF après avoir modifié les images ?", a: "Oui. Extrayez-les ici, modifiez celles que vous voulez, puis repassez-les dans « Créer un GIF » pour réassembler la boucle. Cet aller-retour est la façon habituelle de corriger ou de nettoyer une animation existante." },
    { q: "Un GIF très long fonctionne-t-il ?", a: "En général oui, même si un GIF de plusieurs centaines d'images produit autant de fichiers et prend plus de temps à décoder et à compresser en ZIP. Tout se passe dans votre navigateur : la limite pratique est la mémoire de votre appareil, pas une limite d'envoi." },
    { q: "Mes GIF sont-ils envoyés sur un serveur ?", a: "Non. Le fichier est uniquement lu et découpé dans votre navigateur. oMyImage ne voit pas, ne stocke pas et ne traite pas votre GIF sur un serveur : tout reste sur votre appareil, ce qui facilite aussi le respect du RGPD pour les contenus professionnels." },
  ],

  security:
    "Votre GIF reste privé. L'extraction des images se fait entièrement dans votre navigateur avec la bibliothèque open source gifuct-js : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // GifToImagesTool.tsx
    "Please select a GIF file.": "Sélectionnez un fichier GIF.",
    "No frames found in this GIF.": "Aucune image trouvée dans ce GIF.",
    "Extracted 1 frame.": "1 image extraite.",
    "Extracted {n} frames.": "{n} images extraites.",
    "Couldn't read that GIF.": "Impossible de lire ce GIF.",
    "Downloaded 1 frame as a ZIP.": "1 image téléchargée dans un ZIP.",
    "Downloaded {n} frames as a ZIP.": "{n} images téléchargées dans un ZIP.",
    "Couldn't build the ZIP.": "Impossible de créer le ZIP.",
    "Select a GIF": "Sélectionner un GIF",
    "or drop an animated .gif here": "ou déposez ici un .gif animé",
    "1 frame": "1 image",
    "{n} frames": "{n} images",
    "frame": "image",
    "frames": "images",
    "Clear GIF": "Retirer le GIF",
    "Change GIF": "Changer de GIF",
    "Frame settings": "Paramètres des images",
    "Frame Settings": "Paramètres des images",
    "Download frame {n}": "Télécharger l'image {n}",
    "Frame {n}": "Image {n}",
    "showing first {n}, all included in the ZIP": "{n} premières affichées ; le ZIP les contient toutes",
    "Click any frame to download it on its own.": "Cliquez sur une image pour la télécharger seule.",
    "Download 1 frame (ZIP)": "Télécharger 1 image (ZIP)",
    "Download all {n} frames (ZIP)": "Télécharger les {n} images (ZIP)",
    "Download": "Télécharger",
    "Output": "Sortie",
    "Format": "Format", // i18n-same
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    "Working…": "Traitement…",
  },
};

export default content;
