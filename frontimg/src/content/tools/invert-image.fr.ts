import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/inverser-couleurs-image. Target query: « Inverser les
 * couleurs d'une image » (France, Nov 2026); secondary « négatif photo » in
 * the metaTitle, a heading and an FAQ. « Inverser une image » alone is
 * ambiguous in French (it can mean mirroring), so the page says « inverser les
 * couleurs » and points to « Image miroir » once. The ui block is shared with
 * pixelate-image, image-brightness, glitch-effect and round-corners, which
 * import it from here.
 */
const content: ToolPageContent = {
  toolId: "invert-image",
  locale: "fr",
  name: "Inverser les couleurs d'une image",
  tagline:
    "Inversez les couleurs de n'importe quelle photo : un négatif classique, ou une inversion intelligente qui échange clairs et sombres tout en gardant les teintes. Plusieurs images à la fois. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Inverser les couleurs d'une image – négatif photo | oMyImage",
  metaDescription:
    "Inverser les couleurs d'une image en ligne et gratuitement : négatif photo ou clairs et sombres échangés comme en mode sombre. JPG, PNG, WebP, sans envoi.",

  intro:
    "Inverser les couleurs d'une image transforme chaque couleur en son opposée : le noir devient blanc, le bleu devient orange, et une photo prend l'allure d'un négatif argentique. « Inverser les couleurs d'une image » d'oMyImage le fait en un clic pour les fichiers JPG, PNG et WebP, et ajoute un second mode que la plupart des outils n'ont pas : « Inversion intelligente », qui échange clairs et sombres en gardant la teinte de chaque couleur, comme le mode sombre d'un téléphone. Ajoutez une image ou tout un lot, regardez l'aperçu en direct, maintenez le bouton enfoncé pour comparer avec l'original, puis téléchargez.",

  sections: [
    {
      heading: "Négatif ou inversion intelligente",
      id: "modes",
      body: [
        "« Négatif » inverse chaque canal de couleur : chaque valeur devient 255 moins elle-même. Les blancs deviennent noirs, les rouges cyan, les verts magenta, et les tons chair tirent vers le gris bleuté : l'aspect d'un négatif de pellicule ou d'une radiographie. Inverser à nouveau le résultat redonne exactement l'original.",
        "« Inversion intelligente » n'inverse que la luminosité. Les zones sombres deviennent claires et les zones claires sombres, mais un rouge reste rouge et un bleu reste bleu. C'est donc le bon choix pour transformer une capture d'écran ou un document blanc en version sombre sans que les couleurs deviennent étranges, ou pour donner à une photo une ambiance nocturne et mystérieuse.",
      ],
    },
    {
      heading: "À quoi cela sert",
      id: "uses",
      body: [
        "Créez une version en mode sombre d'une capture d'écran, d'un schéma ou d'une diapositive pour qu'elle s'intègre bien à un site web ou à une présentation sombres. Passez sur fond blanc une image à fond noir avant de l'imprimer, pour économiser l'encre et le toner. Retransformez un négatif noir et blanc numérisé en photo positive. Créez des visuels, des affiches et des photos de profil frappants à l'aspect inversé.",
        "Les graphistes inversent aussi les images pour vérifier une composition : une fois les couleurs familières disparues, les problèmes d'équilibre et de contraste sautent davantage aux yeux.",
      ],
    },
    {
      heading: "Négatifs de pellicule numérisés",
      id: "negatives",
      body: [
        "Les négatifs noir et blanc s'inversent proprement en positifs. Les négatifs couleur sont plus délicats : la pellicule a un support orangé, si bien qu'une inversion directe donne une forte dominante bleue. Inversez d'abord les couleurs, puis utilisez « Luminosité d'une image » pour éclaircir l'image et baisser la saturation, ou convertissez-la avec « Photo en noir et blanc » si la couleur n'a pas d'importance.",
      ],
    },
    {
      heading: "Transparence et formats",
      id: "formats",
      body: [
        "Seules les couleurs sont inversées ; la transparence reste exactement la même, de sorte qu'un logo sur fond transparent reste un logo sur fond transparent. Le PNG et le WebP conservent cette transparence ; le JPG n'en a pas, les zones transparentes sont donc remplies avec la couleur de fond de votre choix.",
        "Le fichier de sortie garde le format d'origine, sauf si vous en choisissez un autre. Le PNG enregistre les pixels inversés à l'identique ; le JPG et le WebP utilisent le réglage de qualité, que vous pouvez augmenter si les détails fins comptent.",
      ],
    },
    {
      heading: "Plusieurs images à la fois",
      id: "batch",
      body: [
        "Ajoutez autant d'images que vous le souhaitez. L'aperçu montre la première, et le même mode est appliqué à toutes quand vous cliquez sur « Inverser les couleurs ». Une seule image se télécharge directement ; plusieurs arrivent dans un seul fichier ZIP. Chaque fichier de la liste reçoit en plus son propre bouton de téléchargement une fois traité.",
      ],
    },
    {
      heading: "Inverser des logos et des icônes",
      id: "logos",
      body: [
        "Un logo sombre qui disparaît sur un site web sombre devient clair après inversion, à condition qu'il soit d'une seule couleur sombre. Les logos multicolores changent aussi de couleur : « Inversion intelligente », qui garde les teintes, leur convient donc souvent mieux. Vérifiez l'aperçu sur le fond où le logo sera placé avant de le télécharger.",
      ],
    },
    {
      heading: "Négatif photo : inverser les couleurs en pratique",
      id: "negative-practice",
      body: [
        "Qui cherche « négatif photo » ou « mettre une photo en négatif » veut généralement le mode « Négatif » : une photo qui ressemble à une bande de pellicule développée. Pour les affiches, les pochettes d'album et les projets artistiques, c'est un effet rapide et très fort. Pour les captures d'écran et les documents, « Inversion intelligente » est presque toujours le meilleur choix, car les surlignages, les liens et les couleurs des graphiques restent reconnaissables.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque image est inversée entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment inverser les couleurs d'une image",
  steps: [
    { title: "Ajoutez des images", description: "Sélectionnez une ou plusieurs images JPG, PNG ou WebP." },
    { title: "Choisissez le mode", description: "« Négatif » pour l'opposé exact, « Inversion intelligente » pour garder la teinte des couleurs." },
    { title: "Inversez et téléchargez", description: "Cliquez sur « Inverser les couleurs » pour télécharger l'image, ou un ZIP s'il y en a plusieurs." },
  ],

  features: [
    { icon: "dark_mode", title: "Deux types d'inversion", description: "Un négatif complet, ou clairs et sombres échangés en gardant les teintes." },
    { icon: "visibility", title: "Aperçu en direct", description: "Voyez le résultat instantanément et maintenez enfoncé pour comparer avec l'original." },
    { icon: "lock", title: "Aucun envoi", description: "Inversion entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment inverser les couleurs d'une image ?", a: "Ajoutez l'image, laissez « Négatif » sélectionné et cliquez sur « Inverser les couleurs ». L'image inversée se télécharge aussitôt." },
    { q: "Quelle différence entre « Négatif » et « Inversion intelligente » ?", a: "« Négatif » transforme chaque couleur en son opposée. « Inversion intelligente » n'échange que les clairs et les sombres : les couleurs gardent leur teinte." },
    { q: "Puis-je créer une capture d'écran en mode sombre ?", a: "Oui. « Inversion intelligente » assombrit une capture blanche tout en gardant les éléments colorés reconnaissables." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Seules les couleurs changent ; enregistrez en PNG ou en WebP pour garder les zones transparentes." },
    { q: "Puis-je inverser plusieurs images à la fois ?", a: "Oui. Ajoutez-les toutes ; elles se téléchargent ensemble dans un fichier ZIP." },
    { q: "Puis-je retrouver l'original ?", a: "Appliquer de nouveau « Négatif » le restaure. Pour un aller-retour parfait, enregistrez en PNG." },
    { q: "Puis-je transformer un négatif photo en photo ?", a: "Oui pour les négatifs noir et blanc. Les négatifs couleur demandent ensuite une petite correction des couleurs." },
    { q: "Quels formats sont acceptés ?", a: "JPG, PNG et WebP en entrée ; le même format en sortie, ou celui que vous choisissez." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans n'importe quel navigateur mobile." },
    { q: "La qualité baisse-t-elle ?", a: "Le PNG est exact. Le JPG et le WebP sont réenregistrés à la qualité que vous choisissez." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Inverser les couleurs, est-ce la même chose qu'inverser une image en miroir ?", a: "Non. Inverser les couleurs transforme chaque couleur en son opposée ; l'effet miroir échange la gauche et la droite. Pour cela, utilisez « Image miroir »." },
  ],

  security:
    "Vos images sont inversées entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // ImageFilterTool.tsx — shared with pixelate-image, image-brightness,
    // glitch-effect and round-corners, whose modules reuse this block.
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WebP",
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Clear files": "Retirer les fichiers",
    "Remove": "Retirer",
    "Settings": "Réglages",
    "Preview": "Aperçu",
    "Live preview of": "Aperçu en direct de",
    "— applied to all {n} images.": "— appliqué aux {n} images.",
    "Hold to see the original": "Maintenir pour voir l'original",
    "Output format": "Format de sortie",
    "Same as original": "Identique à l'original",
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    "Working…": "Traitement…",
    "Processing failed.": "Le traitement a échoué.",
    "done": "terminé",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Done — 1 image saved.": "Terminé : 1 image enregistrée.",
    "Done — {n} images saved.": "Terminé : {n} images enregistrées.",
    "Your images are processed in your browser and never uploaded.": "Vos images sont traitées dans votre navigateur et ne sont jamais envoyées.",
    "Reset": "Réinitialiser",
    // invert
    "Invert colours": "Inverser les couleurs",
    "Invert": "Inverser",
    "Negative": "Négatif",
    "Smart invert": "Inversion intelligente",
    "Every colour becomes its opposite, like a film negative.": "Chaque couleur devient son opposée, comme sur un négatif de pellicule.",
    "Light and dark swap but colours keep their hue — a dark-mode look.": "Clairs et sombres s'échangent, mais les couleurs gardent leur teinte : un rendu façon mode sombre.",
    // pixelate
    "Pixelate image": "Pixeliser l'image",
    "Block size": "Taille des blocs",
    "About {n} blocks along the longer side.": "Environ {n} blocs sur le plus grand côté.",
    // brightness
    "Apply adjustments": "Appliquer les réglages",
    "Brightness": "Luminosité",
    "Contrast": "Contraste",
    "Saturation": "Saturation", // i18n-same
    // glitch
    "Apply glitch": "Appliquer le glitch",
    "Strength": "Intensité",
    "Colour split": "Décalage des couleurs",
    "Shifted slices": "Bandes décalées",
    "Scan lines": "Lignes de balayage",
    "Shuffle the slices": "Mélanger les bandes",
    // round corners
    "Round the corners": "Arrondir les coins",
    "Corner radius": "Rayon des coins",
    "A share of the shorter side. 50% makes a pill, or a circle for square images.": "Proportion du plus petit côté. À 50 %, on obtient une forme de pilule, ou un cercle pour une image carrée.",
    "Corners": "Coins",
    "Top left": "En haut à gauche",
    "Top right": "En haut à droite",
    "Bottom left": "En bas à gauche",
    "Bottom right": "En bas à droite",
    "Corner background": "Fond des coins",
    "JPG has no transparency, so the corners are filled with the background colour.": "Le JPG ne gère pas la transparence : les coins sont donc remplis avec la couleur de fond.",
  },
};

export default content;
