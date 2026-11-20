import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/redimensionner-image. Structure lives in ToolPageShell.
 *
 * Target query "redimensionner une image" (18.1K FR per month). Secondaries
 * "réduire taille photo" (12.1K), "changer taille image" and "redimensionner
 * photo" live in the intro, section headings and FAQs ("réduire le poids" in
 * the Ko sense belongs to compress-image). Addressed in "vous".
 *
 * FORMATS / MODES / FITS / PRINT_UNITS labels and the social preset names are
 * module scope and are maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "resize-image",
  locale: "fr",
  name: "Redimensionner une image",
  tagline:
    "Redimensionnez vos images JPG, PNG, WEBP et GIF en ligne : en pixels exacts ou en pourcentage, proportions verrouillées et traitement par lots. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },
  variantsHeading: "Redimensionner pour l'impression ou les réseaux sociaux",

  metaTitle: "Redimensionner une image en ligne gratuitement | oMyImage",
  metaDescription:
    "Redimensionner une image gratuitement : changez la taille d'une photo en pixels, en cm ou en %, sans déformation, même par lots. Sans inscription.",

  intro:
    "Besoin d'une image à une taille précise pour une photo de profil, une miniature ou un tirage papier ? L'outil « Redimensionner une image » d'oMyImage vous permet de fixer des dimensions exactes en pixels ou de mettre à l'échelle en pourcentage, avec des proportions verrouillées pour que rien ne paraisse étiré. Vous pouvez réduire la taille d'une photo, changer la taille d'une image pour un réseau social ou redimensionner tout un lot d'un coup, choisir le format de sortie et télécharger le résultat. Tout se passe dans votre navigateur : vos images restent privées, et il n'y a ni inscription ni logiciel à installer.",

  sections: [
    {
      heading: "Pixels, dimensions et poids du fichier",
      id: "basics",
      body: [
        "Les dimensions d'une image indiquent combien de pixels elle mesure en largeur et en hauteur ; son poids, combien d'octets il faut pour stocker ces pixels. Les deux sont liés mais ne se confondent pas, et c'est justement cette confusion qui explique pourquoi tant d'images restent trop lourdes après avoir été « rendues plus petites ».",
        "Redimensionner agit sur le premier chiffre. Si vous divisez la largeur et la hauteur par deux, il ne reste qu'un quart des pixels, et le fichier diminue en général dans une proportion comparable : un effet bien plus fort que ce que n'importe quel réglage de compression peut obtenir seul. C'est pourquoi redimensionner d'abord, puis compresser, donne des résultats bien meilleurs que la seule compression.",
        "Le repère qui compte, c'est la place que l'image occupe réellement à l'écran. Une photo de 4000 pixels de large affichée dans une colonne de 800 pixels transporte vingt-cinq fois plus de données que l'écran ne peut en utiliser, et aucune compression, aussi astucieuse soit-elle, ne rattrape ce gaspillage.",
      ],
    },
    {
      heading: "Réduire la taille d'une photo est sans risque ; l'agrandir, non",
      id: "direction",
      body: [
        "Rendre une image plus petite est une opération sans surprise. Le rééchantillonnage regroupe des ensembles de pixels en un nombre plus réduit, et le résultat paraît généralement plus net et plus propre que l'original à sa nouvelle taille. Vous pouvez réduire fortement sans dégât visible.",
        "Agrandir est un problème d'une tout autre nature, car le détail que vous demandez n'a jamais été capturé. L'interpolation ne peut que deviner des valeurs entre les pixels existants : les contours s'adoucissent et les textures fines deviennent une bouillie. Un agrandissement de 20 à 25 % reste en général acceptable ; doubler la taille se voit nettement.",
        "Si vous avez vraiment besoin d'une image plus grande, seul un agrandisseur par IA peut aider, car il génère des détails plausibles à partir d'un modèle entraîné au lieu d'étirer ce qui existe. Même dans ce cas, il invente de l'information, ce qui compte si l'image sert de preuve ou a un usage technique.",
      ],
    },
    {
      heading: "Les proportions, et ce qui arrive quand on ne les respecte pas",
      id: "aspect",
      body: [
        "Le rapport hauteur/largeur (ou ratio) est la relation entre la largeur et la hauteur. Gardez-le verrouillé et l'image se met à l'échelle proportionnellement : une photo en 3:2 reste en 3:2 et devient simplement plus petite. Déverrouillez-le et vous pouvez imposer les dimensions que vous voulez, au prix d'un étirement ou d'un écrasement de tout ce qui figure dans le cadre. Sur un visage, cela saute aux yeux immédiatement ; un paysage le cache un moment, puis paraît subtilement faux.",
        "Quand une image doit entrer dans un cadre exact qui ne correspond pas à ses proportions, le bon ordre est de recadrer puis de redimensionner, pas d'étirer. Le recadrage supprime ce qui dépasse de la forme voulue sans déformer le reste, et le redimensionnement amène ensuite l'image aux dimensions en pixels dont vous avez besoin.",
      ],
    },
    {
      heading: "Changer la taille de plusieurs images en une fois",
      id: "batch",
      body: [
        "Définir les dimensions une seule fois et les appliquer à tout un dossier, c'est le cas habituel pour les catalogues produits, les galeries et tout site doté d'un emplacement d'image fixe. Pour un lot hétérogène, le mode pourcentage est souvent le meilleur choix, car il met chaque image à l'échelle par rapport à sa propre taille au lieu de forcer toutes les images aux mêmes dimensions ; c'est pratique quand photos verticales et horizontales sont mélangées.",
        "Tout est traité dans votre navigateur et livré dans un seul ZIP : cent images, c'est un seul téléchargement et non cent. Rien n'est envoyé sur un serveur, sauf si une image est trop grande pour qu'un onglet de navigateur puisse la traiter, ce qui dépend de sa résolution et non de son poids.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner une image",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Définissez la taille", description: "Redimensionnez en pixels exacts ou en pourcentage, et conservez les proportions pour éviter tout étirement." },
    { title: "Redimensionnez et téléchargez", description: "Cliquez sur « Redimensionner » : une image seule se télécharge directement, plusieurs images se téléchargent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "straighten", title: "Pixels ou pourcentage", description: "Fixez une largeur et une hauteur exactes, ou mettez chaque image à l'échelle selon un pourcentage de sa taille d'origine." },
    { icon: "link", title: "Proportions verrouillées", description: "Conservez les proportions pour que vos images ne paraissent jamais étirées : dans un lot, chaque fichier garde son propre ratio." },
    { icon: "lock", title: "Privé et instantané", description: "Le redimensionnement s'effectue dans votre navigateur avec HTML canvas, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Puis-je redimensionner une image sans perdre ses proportions ?", a: "Oui. Laissez activée l'option « Conserver les proportions (ajuster) » : chaque image est mise à l'échelle pour tenir dans votre cadre largeur × hauteur, sans déformation." },
    { q: "Puis-je mettre plusieurs images à la même taille ?", a: "Oui. Définissez les dimensions ou le pourcentage une seule fois et ils s'appliquent à tout le lot ; les fichiers se téléchargent ensemble dans un ZIP." },
    { q: "Le redimensionnement réduit-il la qualité ?", a: "Une image réduite reste nette. Agrandie au-delà de l'original, elle peut paraître floue, car il n'y a aucun détail nouveau à ajouter." },
    { q: "Quels formats sont pris en charge ?", a: "En entrée : JPG, PNG, WEBP, GIF et BMP. En sortie : JPG, PNG ou WEBP (ou le format d'origine)." },
    { q: "Est-ce gratuit et confidentiel ?", a: "Oui. Sans inscription ni filigrane, et chaque image est redimensionnée localement dans votre navigateur." },
    { q: "Quelle taille donner aux images d'un site web ?", a: "Celle de l'espace qu'elles occupent réellement. Une image d'en-tête pleine largeur sur ordinateur a rarement besoin de plus de 1920 px de large ; une image dans un article, en général 800 à 1200 px ; une miniature, 300 à 400 px. Doublez ces valeurs uniquement si vous servez une version 2× dédiée aux écrans haute densité." },
    { q: "Quelle est la différence entre redimensionner et compresser ?", a: "Redimensionner change le nombre de pixels ; compresser change l'efficacité avec laquelle ils sont stockés. Pour le web, le redimensionnement est souvent le gain le plus important : une photo affichée en 800 px de large mais enregistrée en 4000 px transporte vingt-cinq fois les pixels qu'elle peut montrer. Faire les deux donne le fichier le plus léger." },
    { q: "Pourquoi mon image agrandie est-elle floue ?", a: "Parce que le détail n'existe pas. Un agrandissement ne peut qu'interpoler entre les pixels déjà présents : les contours s'adoucissent et les textures bavent. Si vous avez vraiment besoin d'une image plus grande, l'outil « Améliorer la qualité d'une image » reconstruit des détails plausibles par IA au lieu de simplement étirer ce qui existe." },
    { q: "Puis-je redimensionner à une largeur et une hauteur exactes ?", a: "Oui : désactivez « Conserver les proportions (ajuster) » et indiquez les deux valeurs. Attention, l'image sera étirée si vos chiffres ne correspondent pas à ses proportions. Pour remplir un cadre exact sans déformation, recadrez d'abord, puis redimensionnez." },
    { q: "Le redimensionnement change-t-il le format du fichier ?", a: "Seulement si vous le demandez. Vous pouvez garder le format d'origine ou exporter en JPG, PNG ou WEBP. Convertir en WEBP en même temps est un moyen courant d'obtenir à la fois moins de pixels et un fichier plus léger en une seule opération." },
    { q: "Puis-je changer la taille d'une photo en centimètres pour l'imprimer ?", a: "Oui. Choisissez les centimètres ou les millimètres comme unité et une résolution en DPI : l'outil calcule pixels = taille × DPI. 300 DPI est la valeur habituelle pour des photos imprimées. Enregistrez en JPG ou en PNG, car le WEBP ne peut pas stocker l'information de DPI." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "En général, non : le redimensionnement se fait localement dans le navigateur. Seule une image de plus de 16 mégapixels environ, trop grande pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ." },
  ],

  security:
    "Vos images restent privées. Le redimensionnement s'effectue dans votre navigateur avec HTML canvas : aucun stockage, aucun suivi de vos fichiers. Seule une image de plus de 16 mégapixels environ, trop grande pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",

  ui: {
    // ResizeTool.tsx
    "Resize": "Redimensionner",
    "Resize & download": "Redimensionner et télécharger",
    "Resize Settings": "Réglages de taille",
    "Resize settings": "Réglages de taille",
    "Resize failed.": "Le redimensionnement a échoué.",
    "Resize {n} images": "Redimensionner {n} images",
    "Resized 1 image.": "1 image redimensionnée.",
    "Resized {n} images.": "{n} images redimensionnées.",
    "Resizing…": "Redimensionnement…",
    "Type": "Type", // i18n-same
    "Size": "Taille",
    "Scale": "Échelle",
    "Target": "Cible",
    "Current": "Actuelle",
    "Custom size": "Taille personnalisée",
    "Preset type": "Type de préréglage",
    "Choose the social media platform": "Choisissez le réseau social",
    "Pick a platform and a preset size.": "Choisissez une plateforme et une taille prédéfinie.",
    "Width (px)": "Largeur (px)",
    "Height (px)": "Hauteur (px)",
    "Width ({unit})": "Largeur ({unit})",
    "Height ({unit})": "Hauteur ({unit})",
    "Unit": "Unité",
    "Resolution (DPI)": "Résolution (DPI)",
    "{dpi} DPI": "{dpi} DPI", // i18n-same
    "Pixels = size × DPI. 300 DPI is the usual quality for printed photos.": "Pixels = taille × DPI. 300 DPI est la qualité habituelle pour des photos imprimées.",
    "WEBP can't store a DPI — choose JPG or PNG so the file keeps its print size.": "Le WEBP ne peut pas stocker de DPI : choisissez JPG ou PNG pour que le fichier conserve sa taille d'impression.",
    "How to fit the image": "Comment ajuster l'image",
    "Keep aspect ratio (fit)": "Conserver les proportions (ajuster)",
    "Keep aspect ratio on to avoid stretching.": "Gardez les proportions activées pour éviter tout étirement.",
    "Padding colour": "Couleur des marges",
    "First image → {w} × {h} px": "Première image → {w} × {h} px",
    "— each keeps its own ratio": "— chacune garde son propre ratio",
    "set a size": "définissez une taille",
    "unknown": "inconnue",
    "Output format": "Format de sortie",
    "JPG background": "Fond du JPG",
    "Quality": "Qualité",
    "or drop JPG, PNG, WEBP or GIF images here": "ou déposez ici des images JPG, PNG, WEBP ou GIF",
    // Per-image quick edit
    "Crop|verb": "Recadrer",
    "Rotate left": "Pivoter à gauche",
    "Rotate right": "Pivoter à droite",
    "Couldn't apply that edit.": "Impossible d'appliquer cette modification.",
    "This image is too large to edit in the browser": "Cette image est trop grande pour être modifiée dans le navigateur",
    "edited": "modifiée",
    "Details": "Détails",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Retirer les fichiers",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Original": "Original", // i18n-same
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Remove": "Retirer",
    // FORMATS / MODES / FITS (module scope, §4.2)
    "Same as original": "Identique à l'original",
    "By pixels": "En pixels",
    "By percent": "En pourcentage",
    "Social media": "Réseaux sociaux",
    "Crop to fill": "Recadrer pour remplir",
    "Pad": "Ajouter des marges",
    "Fit inside": "Ajuster à l'intérieur",
    "Exactly the preset size, overflow trimmed off the edges.":
      "Exactement la taille prédéfinie ; ce qui dépasse est rogné sur les bords.",
    "Exactly the preset size, the whole image kept, bars filled in.":
      "Exactement la taille prédéfinie, image entière conservée, bandes remplies de couleur.",
    "Keeps the ratio, so the output is smaller than the preset.":
      "Conserve le ratio : le résultat est donc plus petit que la taille prédéfinie.",
    // FIT_NOTE (lib/image/fit.ts)
    "cropped to fill": "recadrée pour remplir",
    "padded to fit": "marges ajoutées pour ajuster",
    "fitted inside": "ajustée à l'intérieur",
    // Social preset names (lib/social-presets.ts)
    "Profile": "Profil",
    "Square post": "Publication carrée",
    "Portrait post": "Publication portrait",
    "Landscape post": "Publication paysage",
    "Story / Reel": "Story / Reel", // i18n-same — Instagram's French UI says Story / Reel
    "Cover": "Couverture",
    "Shared post": "Publication partagée",
    "Story": "Story", // i18n-same — used as-is in French social UIs
    "Event cover": "Couverture d'événement",
    "Header": "En-tête",
    "Post image": "Image de publication",
    "Company logo": "Logo d'entreprise",
    "Channel icon": "Icône de chaîne",
    "Profile banner": "Bannière de profil",
    "Server banner": "Bannière du serveur",
    "Server icon": "Icône du serveur",
    // Print size mode (ResizeTool; PRINT_UNITS and MODES are module scope)
    "Print size": "Taille d'impression",
    "cm": "cm", // i18n-same
    "mm": "mm", // i18n-same
    "in": "po",
    "Channel art": "Bannière de chaîne",
    "Thumbnail": "Miniature",
    "Standard pin": "Épingle standard",
    "Square pin": "Épingle carrée",
    "Video / Story": "Vidéo / Story",
    "Status": "Statut", // WhatsApp preset; shown under the WhatsApp group, so not repeated
    // Blur fill (FITS / FIT_NOTES) and YouTube Shorts
    "Blur fill": "Fond flouté",
    "Exactly the preset size, the whole image kept, bars filled with a blurred copy of it.":
      "Exactement la taille prédéfinie, image entière conservée, bandes remplies d'une copie floutée de l'image.",
    "padded with a blur": "marges floutées",
    "Shorts": "Shorts", // i18n-same — YouTube's French UI says Shorts
  },
};

export default content;
