import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/gif-en-webp. Target query: « GIF en WebP » (France,
 * Nov 2026; low volume); « convertir GIF en WebP » and « WebP animé » in the
 * body. The ui block is shared with gif-to-apng and gif-to-sprite-sheet,
 * which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-to-webp",
  locale: "fr",
  name: "GIF en WebP",
  tagline:
    "Convertissez vos GIF animés en WebP animé : sans perte pour garder chaque pixel, ou avec perte pour des fichiers bien plus légers. Chaque image garde sa durée. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF en WebP – convertir un GIF animé gratuit | oMyImage",
  metaDescription:
    "Convertir un GIF en WebP en ligne et gratuitement : WebP animé sans perte ou bien plus léger, toutes les images et leurs durées conservées, sans rien envoyer.",

  intro:
    "Le GIF est le plus ancien format d'animation du web, et l'un des moins efficaces. Le WebP animé joue exactement la même animation dans tous les navigateurs actuels, le plus souvent pour une fraction du poids. Le convertisseur « GIF en WebP » d'oMyImage réécrit votre GIF image par image (frame par frame) : choisissez « Sans perte » pour conserver chaque pixel à l'identique, ou « Haute » et « Compacte » pour une compression avec perte qui allège encore beaucoup plus le fichier. Le résultat s'affiche à côté de l'original, avec son poids et le gain obtenu, pour que vous choisissiez le bon compromis avant de le télécharger.",

  sections: [
    {
      heading: "Sans perte ou avec perte",
      id: "quality",
      body: [
        "« Sans perte » enregistre chaque pixel exactement tel qu'il est dans le GIF. Comme la compression sans perte du WebP est nettement plus efficace que celle du GIF, le fichier est généralement déjà plus léger : souvent d'un tiers ou davantage pour les enregistrements d'écran, les logos et les dessins animés, où de grandes zones partagent une même couleur.",
        "« Haute » et « Compacte » utilisent au contraire une compression avec perte, comme si chaque image était un JPG. Elles divisent en général par deux, voire plus, le poids des GIF tirés d'une vidéo, au prix d'un léger adoucissement autour des contours nets et du texte. Essayez d'abord « Haute » ; choisissez « Compacte » quand le poids compte plus que la netteté. Pour les petits graphismes simples, « Sans perte » peut même produire un fichier plus léger que les réglages avec perte : le panneau de résultat affiche chaque poids, la comparaison est donc rapide.",
      ],
    },
    {
      heading: "Comment l'animation est enregistrée",
      id: "how",
      body: [
        "Chaque image est encodée par l'encodeur WebP de votre propre navigateur, puis assemblée dans un WebP animé. Comme dans un GIF bien optimisé, chaque image après la première ne stocke que le rectangle qui a changé, et une image identique à la précédente est fusionnée dans sa durée : les moments immobiles ne coûtent rien.",
        "Chaque image garde sa durée, et l'animation boucle exactement comme le GIF : à l'infini, une seule fois ou un nombre de fois défini. Les zones transparentes restent transparentes ; leurs bords restent nets, car le GIF n'a jamais connu la transparence progressive.",
      ],
    },
    {
      heading: "Où le WebP fonctionne",
      id: "support",
      body: [
        "Le WebP animé se lit dans Chrome, Edge, Firefox, Safari et Opera, sur ordinateur comme sur téléphone : il est donc sûr pour un site web. Remplacer les GIF par du WebP est l'un des moyens les plus simples d'accélérer le chargement d'une page, et cela répond au conseil des tests de vitesse qui recommandent de servir les images dans des formats modernes.",
        "En dehors du navigateur, la prise en charge est plus inégale. Beaucoup de logiciels de messagerie électronique, d'applications de discussion, d'anciens éditeurs d'images et de formulaires d'envoi attendent encore un GIF et peuvent n'afficher qu'une image fixe. Gardez le GIF pour ces usages et utilisez le WebP sur le web.",
      ],
    },
    {
      heading: "Les navigateurs qui savent créer du WebP",
      id: "browsers",
      body: [
        "La conversion utilise l'encodeur WebP intégré au navigateur : rien de plus n'est téléchargé. Chrome et Edge enregistrent « Sans perte » en véritable sans perte, et Firefox crée lui aussi des fichiers WebP. Safari sait afficher le WebP mais pas le créer, et sur iPhone et iPad tous les navigateurs reposent sur le moteur de Safari ; pour cet outil, utilisez donc un ordinateur ou un téléphone Android. L'outil vous prévient si votre navigateur n'en est pas capable.",
      ],
    },
    {
      heading: "Stickers et messageries",
      id: "stickers",
      body: [
        "Les stickers animés de WhatsApp sont des fichiers WebP de 512 × 512 pixels : convertir un GIF est donc une étape pour en faire un sticker. Recadrez d'abord le GIF en carré avec « Recadrer un GIF », ramenez-le à 512 pixels avec « Redimensionner un GIF », puis convertissez-le ici. Les applications de stickers imposent une limite de poids réduite, si bien que « Haute » ou « Compacte » conviennent généralement mieux que « Sans perte ».",
      ],
    },
    {
      heading: "Le WebP animé sur votre propre site",
      id: "website",
      body: [
        "Pour utiliser le WebP sur une page, il suffit de remplacer le fichier dans la balise d'image, comme vous le feriez avec un GIF. Si vous devez encore servir de très anciens logiciels, proposez le WebP dans un élément picture et gardez le GIF en solution de repli. Les pages qui contiennent plusieurs animations sont celles qui y gagnent le plus : chaque GIF remplacé, ce sont autant de données en moins à télécharger pour un téléphone.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé et le WebP est écrit entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment convertir un GIF en WebP",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez la qualité", description: "« Sans perte » garde chaque pixel ; « Haute » et « Compacte » allègent le fichier." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir en WebP », comparez le poids avec celui du GIF et téléchargez le fichier." },
  ],

  features: [
    { icon: "sync_alt", title: "Toujours animé", description: "Toutes les images, leurs durées et le réglage de boucle sont conservés." },
    { icon: "compress", title: "Fichiers plus légers", description: "Sans perte, il pèse en général moins que le GIF ; avec perte, encore moins." },
    { icon: "lock", title: "Aucun envoi", description: "Conversion entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment convertir un GIF animé en WebP ?", a: "Ajoutez le GIF, choisissez « Sans perte », « Haute » ou « Compacte », puis cliquez sur « Convertir en WebP ». Le WebP se lit exactement comme le GIF." },
    { q: "Le WebP reste-t-il animé ?", a: "Oui. Toutes les images et leurs durées sont conservées, et il boucle comme le GIF." },
    { q: "Le WebP est-il plus léger que le GIF ?", a: "Presque toujours. Sans perte, il est souvent plus léger d'un tiers pour les graphismes ; les réglages avec perte divisent généralement par deux le poids des GIF issus d'une vidéo." },
    { q: "« Sans perte » modifie-t-il des pixels ?", a: "Non. Dans Chrome et Edge, « Sans perte » enregistre chaque pixel exactement tel qu'il est dans le GIF." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les zones transparentes restent transparentes." },
    { q: "Pourquoi cela ne fonctionne-t-il pas dans Safari ?", a: "Safari sait afficher le WebP, mais il n'a pas d'encodeur WebP. Utilisez Chrome, Edge ou Firefox pour la conversion." },
    { q: "Où puis-je utiliser le WebP animé ?", a: "Sur les sites web et dans tous les navigateurs actuels. Certaines applications de messagerie et de discussion exigent encore du GIF." },
    { q: "Puis-je créer un sticker WhatsApp ?", a: "Recadrez le GIF en carré, redimensionnez-le en 512 × 512, convertissez-le ici, puis ajoutez-le avec une application de stickers." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Sur Android, oui, dans Chrome ou Firefox. Sur iPhone et iPad, aucun navigateur ne sait encore créer de fichiers WebP." },
    { q: "Comment reconvertir un WebP en GIF ?", a: "Avec « WebP en GIF », qui conserve chaque image et sa durée." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Quel niveau de qualité choisir ?", a: "« Sans perte » pour les graphismes et les enregistrements d'écran, « Haute » pour les GIF tirés d'une vidéo et « Compacte » quand la limite de poids est très serrée." },
  ],

  security:
    "Votre GIF est converti entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // GifExportTool.tsx — shared with gif-to-apng and gif-to-sprite-sheet, whose modules reuse this block.
    "Select a GIF": "Sélectionner un GIF",
    "or drop a GIF here": "ou déposez un GIF ici",
    "Please select a GIF.": "Veuillez sélectionner un GIF.",
    "Could not read this image.": "Impossible de lire ce fichier.",
    "Change image": "Changer de fichier",
    "Clear image": "Retirer le fichier",
    "Processing failed.": "Le traitement a échoué.",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "{n} frames": "{n} images",
    "{s} s": "{s} s",
    "Your file is processed in your browser and never uploaded.": "Votre fichier est traité dans votre navigateur et n'est jamais envoyé.",
    "Your animation will appear here.": "Votre animation apparaîtra ici.",
    "Your sprite sheet will appear here.": "Votre sprite sheet apparaîtra ici.",
    "{p}% smaller than the GIF": "{p} % plus léger que le GIF",
    "{p}% larger than the GIF": "{p} % plus lourd que le GIF",
    "Same size as the GIF": "Même poids que le GIF",
    "Original": "Original", // i18n-same
    "Result": "Résultat",
    "Settings": "Réglages",
    "Download": "Télécharger",
    // webp
    "Convert to WEBP": "Convertir en WebP",
    "Quality": "Qualité",
    "Lossless": "Sans perte",
    "High": "Haute",
    "Small": "Compacte",
    "Every pixel is kept. Usually smaller than the GIF already.": "Chaque pixel est conservé. Généralement déjà plus léger que le GIF.",
    "Lossy: much smaller files, with slight softening around sharp edges.": "Avec perte : fichiers bien plus légers, contours nets légèrement adoucis.",
    "This browser saves WEBP at very high quality instead of lossless.": "Ce navigateur enregistre le WebP en très haute qualité plutôt qu'en sans perte.",
    // apng
    "Convert to APNG": "Convertir en APNG",
    "APNG keeps every pixel and frame. Only the part of each frame that changes is stored, so it is often smaller than the GIF.":
      "L'APNG garde chaque pixel et chaque image. Seule la partie qui change d'une image à l'autre est stockée : il est donc souvent plus léger que le GIF.",
    // sprite
    "Make sprite sheet": "Créer la sprite sheet",
    "Layout": "Disposition",
    "Grid": "Grille",
    "One row": "Une ligne",
    "One column": "Une colonne",
    "Columns": "Colonnes",
    "Frames": "Images",
    "Keep all frames": "Garder toutes les images",
    "Keep every 2nd frame": "Garder 1 image sur 2",
    "Keep every 3rd frame": "Garder 1 image sur 3",
    "Frame size": "Taille des images",
    "Space between frames": "Espace entre les images",
    "Transparent background": "Fond transparent",
    "Background colour": "Couleur de fond",
    "{n} frames of {w} × {h} px, {cols} × {rows}": "{n} images de {w} × {h} px, {cols} × {rows}",
    "This sheet is too large for a browser to create. Keep fewer frames, choose a smaller frame size or use a grid.":
      "Cette planche est trop grande pour être créée par un navigateur. Gardez moins d'images, choisissez une taille d'image plus petite ou utilisez une grille.",
    "CSS animation": "Animation CSS",
    "Copy": "Copier",
    "Copied": "Copié",
    "Could not copy.": "Impossible de copier.",
    "Uses the average frame time, so frames with longer pauses play at the same pace as the rest.":
      "Utilise la durée moyenne des images : celles qui marquent une pause plus longue sont lues au même rythme que les autres.",
  },
};

export default content;
