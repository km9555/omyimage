import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-gif.
 *
 * Target query « Compresser un GIF » (3.6K) leads the h1; secondary « réduire
 * la taille d'un GIF » sits in the metaTitle, the intro, a heading and an FAQ.
 * The ui block is shared with gif-resizer and webp-to-gif, which import it
 * from here. Levels are feminine (« compression légère / moyenne / forte »).
 */
const content: ToolPageContent = {
  toolId: "gif-compressor",
  locale: "fr",
  name: "Compresser un GIF",
  tagline:
    "Allégez vos GIF animés avec moins de couleurs, des images plus économes et, si besoin, des dimensions réduites, sans qu'ils cessent de bouger. Comparez avant et après, puis téléchargez. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Compresser un GIF – Réduire la taille d'un GIF | oMyImage",
  metaDescription:
    "Compresser un GIF gratuitement et réduire sa taille : moins de couleurs, moins d'images et moins de pixels, sans perdre l'animation. Comparez avant/après.",

  intro:
    "Les GIF animés grossissent vite, et un GIF lourd est justement celui que les messageries, les forums et les e-mails refusent ou chargent lentement. Avec « Compresser un GIF » d'oMyImage, vous réduisez la taille d'un GIF en le reconstruisant pour qu'il prenne moins de place : il ne stocke que ce qui change entre les images, peut utiliser moins de couleurs et ignorer les scintillements minimes, et, si vous avez besoin d'aller plus loin, supprimer des images ou réduire les dimensions. Choisissez « Légère », « Moyenne » ou « Forte », comparez l'original et le résultat côte à côte avec leur poids, et téléchargez la version qui vous plaît.",

  sections: [
    {
      heading: "Pourquoi les GIF sont si lourds",
      id: "why",
      body: [
        "Un GIF est une pile d'images, chacune limitée à 256 couleurs et compressée sans perte. Son poids augmente avec trois choses : le nombre de pixels de chaque image, le nombre d'images et l'ampleur des changements d'une image à l'autre. Un GIF tiré d'une vidéo de téléphone peut facilement atteindre plusieurs dizaines de mégaoctets pour quelques secondes de mouvement.",
        "Beaucoup de GIF sont en outre enregistrés de façon peu efficace : chaque image stockée en entier même là où rien ne bouge, ou une table de couleurs distincte pour chaque image. Réencoder proprement un tel fichier permet souvent d'économiser une bonne part du poids avant même de sacrifier la moindre qualité.",
      ],
    },
    {
      heading: "Ce que fait chaque niveau",
      id: "levels",
      body: [
        "« Légère » reconstruit le GIF avec une seule palette partagée de 256 couleurs et ne stocke que les pixels qui changent entre les images. C'est le niveau qui modifie le moins l'aspect, et le bon premier essai pour les GIF exportés par des outils anciens.",
        "« Moyenne » utilise 128 couleurs et traite les très petites différences entre images comme une absence de changement, ce qui supprime le fourmillement qui alourdit tant les GIF issus de vidéos. « Forte » utilise 64 couleurs, ignore des scintillements plus marqués et conserve une image sur deux, en ajoutant la durée des images supprimées à celles qui restent pour que la vitesse ne change pas.",
        "Chaque réglage situé sous les niveaux peut être modifié séparément : le nombre de couleurs, les images à conserver et la taille en pourcentage de l'original.",
      ],
    },
    {
      heading: "Réduire la taille d'un GIF au maximum",
      id: "tips",
      body: [
        "La plus grosse économie vient généralement des dimensions. Diviser la largeur et la hauteur par deux laisse un quart des pixels, et le fichier diminue à peu près dans la même proportion. Si le GIF sera de toute façon affiché en petit, dans une bulle de discussion ou une barre latérale, choisissez 75 % ou 50 %.",
        "Viennent ensuite les images et les couleurs. Les animations simples, les logos et les enregistrements d'écran ont le même rendu avec 64, voire 32 couleurs ; les photos et les tons chair en demandent 128 ou plus. Garder une image sur deux divise leur nombre par deux et convient aux mouvements lents.",
      ],
    },
    {
      heading: "Quand le résultat n'est pas plus léger",
      id: "already",
      body: [
        "Un GIF déjà optimisé par un outil spécialisé peut ne pas diminuer avec « Légère », car il ne reste rien à retirer sans modifier l'image. L'outil vous le signale ; essayez « Forte », moins de couleurs ou une taille plus petite, et comparez le résultat avant de le télécharger.",
        "Si l'animation doit rester nette et légère, envisagez plutôt de la convertir en MP4. La vidéo compresse le mouvement bien mieux que le GIF et se lit dans toutes les messageries et sur tous les téléphones.",
      ],
    },
    {
      heading: "Transparence et rythme",
      id: "transparency",
      body: [
        "Les GIF transparents conservent leur transparence. Comme la transparence du GIF est binaire, sans bords adoucis, l'astuce qui consiste à ne stocker que les différences entre images ne peut pas s'appliquer : ils diminuent donc moins que les GIF opaques, mais réduire les couleurs et la taille aide quand même.",
        "La durée des images est conservée à l'identique, y compris les durées irrégulières, et le GIF tourne en boucle comme avant. Les durées que les navigateurs lisent déjà comme 0,1 seconde sont écrites ainsi, de sorte que la vitesse que vous voyez ne change pas.",
      ],
    },
  ],

  howToTitle: "Comment compresser un GIF",
  steps: [
    { title: "Ajoutez votre GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez un niveau", description: "Sélectionnez « Légère », « Moyenne » ou « Forte », ou réglez vous-même les couleurs, les images et la taille." },
    { title: "Compressez et comparez", description: "Cliquez sur « Compresser le GIF », comparez les poids côte à côte et téléchargez." },
  ],

  features: [
    { icon: "compress", title: "Des GIF plus légers", description: "Seuls les pixels qui changent sont stockés, avec en option moins de couleurs, d'images ou de pixels." },
    { icon: "visibility", title: "Avant et après", description: "Les deux versions sont lues côte à côte avec leur poids de fichier." },
    { icon: "lock", title: "Aucun envoi", description: "Votre GIF est compressé entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment réduire la taille d'un GIF ?", a: "Ajoutez le GIF, choisissez « Moyenne » ou « Forte » et cliquez sur « Compresser le GIF ». Pour gagner davantage, choisissez aussi une taille plus petite, par exemple 75 % ou 50 %." },
    { q: "La compression supprime-t-elle des images ?", a: "Pas avec « Légère » ni « Moyenne ». « Forte » conserve une image sur deux et ajoute la durée des images supprimées à celles qui restent, pour que la vitesse soit la même." },
    { q: "Pourquoi mon GIF compressé n'est-il pas plus léger ?", a: "Il était probablement déjà optimisé. Essayez « Forte », moins de couleurs ou une taille plus petite." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les GIF transparents restent transparents, même s'ils diminuent moins que les GIF opaques." },
    { q: "Combien de couleurs garder ?", a: "64 suffisent largement pour les logos, les dessins animés et les enregistrements d'écran ; gardez 128 ou 256 pour les photos et les visages." },
    { q: "Qu'est-ce qui allège un GIF le plus vite ?", a: "Réduire ses dimensions en pixels. Une largeur et une hauteur divisées par deux représentent environ un quart des données." },
    { q: "Le GIF tourne-t-il toujours en boucle ?", a: "Oui. La boucle et la durée des images sont conservées." },
    { q: "Vaut-il mieux utiliser un MP4 ?", a: "Pour les animations longues ou détaillées, oui : le MP4 est en général beaucoup plus léger. Gardez le GIF là où la vidéo n'est pas acceptée." },
    { q: "Y a-t-il une limite de taille ?", a: "Aucune limite fixe. Les très gros GIF prennent plus de temps, et la progression s'affiche pendant le traitement." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. La compression se fait entièrement dans votre navigateur." },
    { q: "Compresser un GIF est-il gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite au nombre de GIF que vous pouvez alléger." },
  ],

  security:
    "Votre GIF est décodé et réencodé entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // GifTool.tsx — shared with gif-resizer and webp-to-gif, whose modules reuse this block.
    "Select a GIF": "Sélectionner un GIF",
    "Select a WEBP": "Sélectionner un WebP",
    "or drop a GIF here": "ou déposez un GIF ici",
    "or drop an animated WEBP here": "ou déposez ici un WebP animé",
    "Please select a GIF.": "Sélectionnez un GIF.",
    "Please select a WEBP image.": "Sélectionnez une image WebP.",
    "Could not read this image.": "Impossible de lire cette image.",
    "Processing failed.": "Le traitement a échoué.",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "GIF settings": "Paramètres du GIF",
    "Compress GIF": "Compresser le GIF",
    "Resize GIF": "Redimensionner le GIF",
    "Convert to GIF": "Convertir en GIF",
    "Download GIF": "Télécharger le GIF",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Your GIF will appear here.": "Votre GIF apparaîtra ici.",
    "Original": "Original", // i18n-same
    "Result": "Résultat",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "Set a size": "Définissez une taille",
    "{n} frames": "{n} images",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p} % plus léger",
    "This GIF is already well optimised — try Strong, fewer colours or a smaller size.":
      "Ce GIF est déjà bien optimisé : essayez « Forte », moins de couleurs ou une taille plus petite.",
    "This WEBP isn't animated, so the GIF will be a single still image.":
      "Ce WebP n'est pas animé : le GIF sera donc une seule image fixe.",
    "Compression": "Compression", // i18n-same
    "Stronger levels use fewer colours and skip tiny changes between frames.":
      "Les niveaux plus forts utilisent moins de couleurs et ignorent les changements minimes entre les images.",
    "Colours": "Couleurs",
    "Frames": "Images",
    "Size": "Taille",
    "By percent": "En pourcentage",
    "By pixels": "En pixels",
    "Percent": "Pourcentage",
    "Width (px)": "Largeur (px)",
    "Height (px)": "Hauteur (px)",
    "Keep aspect ratio": "Conserver les proportions",
    "Every frame is resized and the timing stays the same.": "Chaque image est redimensionnée et le rythme reste identique.",
    "Every frame and its timing are kept. GIF has only 256 colours and no soft transparency, so gradients may band and semi-transparent edges become solid.":
      "Toutes les images et leur durée sont conservées. Le GIF n'a que 256 couleurs et pas de transparence progressive : les dégradés peuvent former des bandes et les bords semi-transparents deviennent opaques.",
    "Your file is processed in your browser and never uploaded.": "Votre fichier est traité dans votre navigateur et n'est jamais envoyé.",
    // LEVEL_LABEL / KEEP_LABEL (module scope)
    "Light": "Légère",
    "Medium": "Moyenne",
    "Strong": "Forte",
    "Keep all frames": "Conserver toutes les images",
    "Keep every 2nd frame": "Conserver 1 image sur 2",
    "Keep every 3rd frame": "Conserver 1 image sur 3",
  },
};

export default content;
