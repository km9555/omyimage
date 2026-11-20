import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/recadrer-image. Structure lives in ToolPageShell.
 *
 * Target query "recadrer une image"; secondaries "rogner image" and "recadrer
 * photo" live in the intro, a section heading and the FAQs. Addressed in
 * "vous".
 *
 * SHAPES, ASPECTS ("Free"), OUTPUT_TARGETS ("Original") and FORMATS are module
 * scope in CropTool.tsx; their keys are maintained here by hand (§4.2). The
 * shared ToolWorkspace keys are listed too.
 */
const content: ToolPageContent = {
  toolId: "crop-image",
  locale: "fr",
  name: "Recadrer une image",
  tagline:
    "Recadrez vos images JPG, PNG, WEBP et GIF en ligne : faites glisser la sélection, verrouillez un ratio ou saisissez des pixels exacts. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Recadrer une image en ligne – rogner une photo | oMyImage",
  metaDescription:
    "Recadrer une image en 1:1, 4:5, 16:9 ou en cercle : rognez votre photo en ligne, faites-la pivoter et redressez-la. JPG, PNG, WEBP, gratuit et sans inscription.",

  intro:
    "Vous voulez donner à une image le cadrage parfait ou une taille précise ? L'outil « Recadrer une image » d'oMyImage vous permet de tracer une sélection sur votre photo, de la verrouiller sur un ratio comme 1:1 pour une photo de profil ou 16:9 pour une miniature, ou de saisir les dimensions exactes en pixels. Vous pouvez aussi rogner une image en cercle, en ellipse ou avec des coins arrondis, et la faire pivoter ou la redresser avant de valider. Le recadrage se fait entièrement dans votre navigateur : vos images restent privées, le résultat est instantané, et il n'y a ni inscription ni filigrane.",

  sections: [
    {
      heading: "Recadrer, c'est composer, pas seulement couper les bords",
      id: "composition",
      body: [
        "La plupart des photos s'améliorent quand on enlève quelque chose. Un recadrage resserre le cadre autour du sujet, supprime les bords qui distraient, redresse un horizon de travers et déplace l'endroit où se pose le regard. C'est la retouche la plus efficace qui soit, et la seule qui ne coûte rien en qualité.",
        "Le repère classique est la règle des tiers : divisez le cadre en une grille de trois sur trois et placez votre sujet sur l'une des lignes ou des intersections plutôt qu'en plein centre. C'est un point de départ plutôt qu'une loi (les compositions centrées fonctionnent très bien pour la symétrie et les portraits), mais c'est une correction fiable pour une photo qui paraît plate.",
        "L'autre réflexe à prendre consiste à vérifier les bords avant de valider. Un inconnu coupé en deux, une poubelle, une tache de ciel trop claire dans un coin : tout cela détourne l'attention du sujet et disparaît presque toujours avec un recadrage un peu plus serré.",
      ],
    },
    {
      heading: "Les ratios fixes et les cas où ils sont imposés",
      id: "ratios",
      body: [
        "Un recadrage libre convient quand l'image est destinée à votre propre usage. Les ratios fixes comptent dès que quelqu'un d'autre décide de la forme : chaque réseau social, chaque place de marché et chaque format d'impression attend des proportions précises, et si vous ne les respectez pas, le système recadre à votre place, généralement mal.",
        "Le carré (1:1) convient aux photos de profil et aux publications du fil Instagram. Le 4:5 est le format portrait le plus haut qu'autorise Instagram et occupe plus d'écran qu'un carré. Le 9:16 correspond au plein écran vertical des Stories, des Reels et de TikTok. Le 16:9 est le format panoramique standard des miniatures YouTube et des aperçus de liens. Les formats d'impression suivent leur propre logique : un tirage 10 × 15 cm est en 3:2, mais pas un 13 × 18 cm ni un 20 × 25 cm, ce qui explique pourquoi des photos imprimées à des tailles différentes perdent plus ou moins de matière sur les bords.",
        "Fixer le ratio avant de tracer la sélection vous évite la frustration de composer soigneusement une photo, puis de la voir rognée pour qu'elle rentre dans le cadre.",
      ],
    },
    {
      heading: "Recadrer une photo ne lui fait pas perdre en qualité",
      id: "quality",
      body: [
        "Les pixels que vous conservez restent intacts. Recadrer n'est pas rééchantillonner : une photo recadrée est exactement aussi nette que l'original, elle montre simplement une partie plus réduite de la scène. C'est très différent d'un zoom ou d'un agrandissement, qui inventent des pixels et adoucissent le résultat.",
        "Ce qui change, en revanche, c'est le nombre total de pixels, et cela a une limite pratique. Si vous recadrez une photo de 12 mégapixels sur un petit coin, il ne vous restera peut-être que 600 pixels de large : suffisant pour un écran de téléphone, insuffisant pour un tirage ou une bannière pleine largeur. Quand vous savez qu'un recadrage serré vous attend, partez de l'original de plus haute résolution dont vous disposez.",
      ],
    },
    {
      heading: "Un ordre logique des opérations",
      id: "workflow",
      body: [
        "Recadrez d'abord, redimensionnez ensuite, compressez en dernier. Le recadrage décide du contenu, le redimensionnement des dimensions en pixels et la compression du poids du fichier. Procéder dans cet ordre signifie que chaque étape travaille sur l'entrée la plus petite possible, et que vous ne compressez jamais des pixels que vous êtes sur le point de jeter.",
        "Ici, tout se passe dans votre navigateur : passer d'un outil à l'autre ne coûte qu'un clic, et vos images ne sont envoyées sur aucun serveur, à aucune étape.",
      ],
    },
  ],

  howToTitle: "Comment recadrer une image",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Choisissez la forme et le cadrage", description: "Choisissez un rectangle, un carré, un cercle, une ellipse ou une forme arrondie, faites glisser le cadre pour le déplacer et les poignées pour le redimensionner, puis verrouillez un ratio comme 1:1, 4:5 ou 16:9. Faites pivoter, retournez ou redressez la photo si nécessaire." },
    { title: "Recadrez et téléchargez", description: "Choisissez la taille et le format de sortie, puis cliquez sur « Recadrer et télécharger » : c'est instantané, dans votre navigateur, et livré dans un ZIP si vous avez recadré plusieurs images." },
  ],

  features: [
    {
      icon: "crop_free",
      title: "Recadrage libre ou ratios fixes",
      description: "Recadrez à main levée, saisissez des dimensions exactes en pixels ou verrouillez 1:1, 4:3, 3:2, 16:9, 4:5 et d'autres ratios pour des formats parfaits sur les réseaux sociaux ou à l'impression.",
    },
    {
      icon: "circle",
      title: "Des formes, pas seulement des rectangles",
      description: "Recadrez en carré, en cercle, en ellipse ou en rectangle arrondi. En PNG et en WEBP, la zone hors de la forme reste transparente : idéal pour les avatars ronds.",
    },
    {
      icon: "rotate_90_degrees_cw",
      title: "Pivoter, retourner et redresser",
      description: "Tournez par pas de 90°, appliquez un miroir horizontal ou vertical et remettez d'aplomb un horizon de travers avec le curseur de redressement avant de recadrer.",
    },
    {
      icon: "bolt",
      title: "Par lots et dans le navigateur",
      description: "Recadrez tout un lot avec le même cadrage et téléchargez un ZIP, le tout sur votre appareil avec HTML canvas, sans envoi de fichier ni attente.",
    },
    {
      icon: "image",
      title: "Tous les formats courants",
      description: "Fonctionne avec JPG, PNG, WEBP, GIF et BMP, et vous permet d'exporter en JPG, PNG ou WEBP avec une qualité réglable.",
    },
  ],

  faqs: [
    { q: "L'outil de recadrage d'oMyImage est-il gratuit ?", a: "Oui. Recadrer des images est 100 % gratuit, sans filigrane sur le résultat et sans inscription." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Le recadrage s'effectue entièrement dans votre navigateur avec HTML canvas : votre image ne quitte jamais votre appareil." },
    { q: "Puis-je recadrer à une taille précise ?", a: "Oui. Saisissez les valeurs exactes de largeur, de hauteur, de X et de Y en pixels, ou verrouillez un ratio et faites glisser les poignées pour ajuster la taille à l'œil." },
    { q: "Dans quels formats puis-je exporter ?", a: "JPG, PNG ou WEBP. Choisissez « Identique à l'original » pour garder le format d'entrée (les GIF et BMP sont exportés en PNG, car la sortie du canvas est une image fixe)." },
    { q: "Le recadrage réduit-il la qualité ?", a: "Non. Recadrer supprime seulement les pixels situés hors de votre sélection. Pour le JPG et le WEBP, vous pouvez aussi choisir la qualité d'export." },
    { q: "Quel ratio utiliser pour les réseaux sociaux ?", a: "1:1 pour une publication du fil Instagram ou la plupart des photos de profil, 4:5 pour le format portrait le plus haut d'Instagram, 9:16 pour les Stories, les Reels et TikTok, et 16:9 pour les miniatures YouTube et les aperçus de liens sur Twitter/X. Les bannières LinkedIn sont particulièrement larges, autour de 4:1." },
    { q: "Quelle différence entre recadrer et redimensionner ?", a: "Recadrer supprime des parties de l'image et garde les pixels restants à leur taille d'origine. Redimensionner garde toute l'image et change son nombre de pixels. Recadrez pour changer ce qui figure dans le cadre ; redimensionnez pour changer la taille de l'image." },
    { q: "Puis-je rogner une photo à une taille exacte en pixels ?", a: "Oui. Fixez un ratio pour contrôler la forme, puis utilisez l'outil « Redimensionner une image » pour obtenir les dimensions exactes en pixels. Procéder dans cet ordre évite la déformation que l'on obtient en imposant directement des dimensions." },
    { q: "Le recadrage supprime-t-il les données EXIF ?", a: "Oui, au passage : l'image est réencodée depuis le canvas, qui ne transmet pas les métadonnées. Cela inclut les coordonnées GPS, ce qui est souvent un atout quand vous publiez des photos. Si supprimer les métadonnées est votre véritable objectif, l'outil dédié à la suppression des métadonnées EXIF le fait de façon explicite." },
    { q: "Puis-je recadrer plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : le même recadrage s'applique à toutes, ce qui est idéal pour des photos produit ou toute série prise dans les mêmes conditions. Le recadrage est enregistré en proportions, si bien que des images de tailles différentes reçoivent un cadrage équivalent, et tout se télécharge ensemble dans un ZIP." },
    { q: "Puis-je recadrer une photo en cercle ou dans d'autres formes ?", a: "Oui : rectangle, carré, cercle, ellipse et coins arrondis sont disponibles. Si vous exportez en PNG ou en WEBP, la zone hors de la forme reste réellement transparente, parfait pour un avatar rond. Le JPG ne gère pas la transparence : vous choisissez alors une couleur pour les coins." },
    { q: "Puis-je faire pivoter ou redresser l'image pendant le recadrage ?", a: "Oui. Faites pivoter par pas de 90°, retournez l'image horizontalement ou verticalement, et utilisez le curseur de redressement pour remettre un horizon d'aplomb. Le redressement zoome juste assez pour qu'aucun coin vide n'apparaisse." },
    { q: "Comment recadrer une photo pour un CV ou une photo d'identité ?", a: "Pour un CV, choisissez un format portrait comme 4:5 ou 3:4 et laissez un peu d'espace au-dessus de la tête. Pour une photo d'identité aux dimensions strictes comme 35 × 45 mm, utilisez plutôt notre outil « Photo d'identité ». Notez qu'en France, les demandes de carte d'identité et de passeport exigent une photo numérique avec code e-photo réalisée en cabine ou chez un photographe agréé : une photo faite maison sert surtout à l'impression, aux CV, aux formulaires et aux visas d'autres pays, dont il faut toujours vérifier les exigences." },
  ],

  security:
    "Vos images restent privées. Le recadrage s'effectue entièrement dans votre navigateur avec HTML canvas : rien n'est jamais envoyé sur un serveur. Quand vous fermez l'onglet, l'image disparaît de la mémoire. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // CropTool.tsx
    "Couldn't read {name}.": "Impossible de lire {name}.",
    "Cropped 1 image.": "1 image recadrée.",
    "Cropped {n} images.": "{n} images recadrées.",
    "Crop failed.": "Le recadrage a échoué.",
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "ou déposez ici des images JPG, PNG, WEBP, GIF ou BMP",
    "Preview {name}": "Aperçu de {name}",
    "done": "terminé",
    "Drag inside the box to move it, or a handle to resize · output {w} × {h} px":
      "Faites glisser l'intérieur du cadre pour le déplacer, ou une poignée pour le redimensionner · sortie {w} × {h} px",
    "— the same crop is applied to all {n} images": "— le même recadrage s'applique aux {n} images",
    "Clear images": "Retirer les images",
    "Files": "Fichiers",
    "Crop settings": "Réglages du recadrage",
    "Crop Settings": "Réglages du recadrage",
    "Crop|verb": "Recadrer",
    "Cropping…": "Recadrage…",
    "Output: {w} × {h} px — nothing is uploaded.": "Sortie : {w} × {h} px ; aucun fichier n'est envoyé.",
    "Crop {n} images": "Recadrer {n} images",
    "Crop & download": "Recadrer et télécharger",
    "Shape": "Forme",
    "Circle and Ellipse cut away the corners — export as PNG or WEBP to keep them transparent. JPG has no transparency, so those corners take the background colour instead.":
      "Cercle et Ellipse découpent les coins : exportez en PNG ou en WEBP pour qu'ils restent transparents. Le JPG ne gère pas la transparence, ces coins prennent donc la couleur de fond.",
    "Corner radius": "Rayon des coins",
    "Aspect ratio": "Ratio",
    "Rotate & flip": "Pivoter et retourner",
    "Rotate left": "Pivoter à gauche",
    "Rotate right": "Pivoter à droite",
    "Flip horizontally": "Retourner horizontalement",
    "Flip vertically": "Retourner verticalement",
    "Straighten": "Redresser",
    "Fine rotation for levelling a horizon. The image is zoomed just enough that no empty corners appear.":
      "Rotation fine pour remettre un horizon d'aplomb. L'image est zoomée juste assez pour qu'aucun coin vide n'apparaisse.",
    "Zoom": "Zoom", // i18n-same
    "Selection (px)": "Sélection (px)",
    "Exact pixel position and size of the crop on the image, after any rotation.":
      "Position et taille exactes du recadrage sur l'image, en pixels, après rotation éventuelle.",
    "Width": "Largeur",
    "Height": "Hauteur",
    "Output": "Sortie",
    "Output size": "Taille de sortie",
    "Corner fill (JPG has no transparency)": "Remplissage des coins (le JPG ne gère pas la transparence)",
    "Outside the shape": "Hors de la forme",
    "1 image": "1 image",
    "{n} images": "{n} images", // i18n-same
    // SHAPES / ASPECTS / OUTPUT_TARGETS / FORMATS (module scope, §4.2)
    "Rectangle": "Rectangle", // i18n-same
    "Square": "Carré",
    "Circle": "Cercle",
    "Ellipse": "Ellipse", // i18n-same
    "Rounded": "Arrondi",
    "Same as original": "Identique à l'original",
    "Free": "Libre",
    "Original": "Original", // i18n-same
    // Shared (ToolWorkspace / upload)
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Quality": "Qualité",
    "Remove": "Retirer",
  },
};

export default content;
