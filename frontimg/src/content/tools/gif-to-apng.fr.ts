import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.fr";

/**
 * French copy for /fr/gif-en-apng. Target query: « GIF en APNG » (France,
 * Nov 2026; low volume). « PNG animé » is used in the body as the plain French
 * description of the format.
 */
const content: ToolPageContent = {
  toolId: "gif-to-apng",
  locale: "fr",
  name: "GIF en APNG",
  tagline:
    "Convertissez vos GIF animés en APNG, le PNG animé : chaque pixel, chaque image et chaque pause sont conservés, souvent dans un fichier plus léger. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF en APNG – PNG animé sans perte, gratuit | oMyImage",
  metaDescription:
    "Convertir un GIF en APNG en ligne et gratuitement : un PNG animé sans perte, avec toutes les images et les pauses, souvent plus léger. Sans rien envoyer.",

  intro:
    "L'APNG, c'est le PNG avec de l'animation : le même format sans perte qu'un PNG ordinaire, avec des blocs supplémentaires qui contiennent les images (frames) et leurs durées. Tous les navigateurs actuels le lisent, et les logiciels qui ne comprennent pas l'animation affichent simplement la première image comme un PNG normal. Le convertisseur « GIF en APNG » d'oMyImage écrit votre GIF en APNG sans modifier un seul pixel, stocke chaque image de la façon la plus compacte possible et affiche le poids à côté de l'original pour que vous voyiez ce que vous avez gagné.",

  sections: [
    {
      heading: "Pourquoi l'APNG plutôt que le GIF",
      id: "why",
      body: [
        "Le GIF compresse avec LZW, une méthode des années 1980 ; le PNG utilise DEFLATE, qui comprime les mêmes pixels plus efficacement. Convertir un GIF en APNG le rend donc souvent plus léger sans aucune perte, surtout pour les dessins animés, les logos, les icônes et les enregistrements d'écran avec de grandes zones unies.",
        "L'APNG peut aussi contenir des couleurs complètes et des bords doux, semi-transparents, ce que le GIF ne sait pas faire. Un GIF converti en APNG garde exactement les couleurs et les bords nets qu'il avait, mais si vous retouchez ensuite les images, l'APNG ne vous ramènera pas de force à 256 couleurs.",
      ],
    },
    {
      heading: "Comment le fichier est construit",
      id: "how",
      body: [
        "Quand toutes les images tiennent en 256 couleurs, ce qui est presque toujours le cas d'un GIF, l'APNG utilise une palette : chaque pixel occupe un octet, exactement comme dans le GIF. Sinon, il stocke le RGBA complet. Chaque image après la première n'enregistre que le rectangle qui a changé, et une image identique à la précédente est fusionnée dans sa durée.",
        "Chaque image garde sa durée exacte, en millisecondes, et l'animation boucle comme le GIF : à l'infini, une seule fois ou un nombre de fois défini. Les zones transparentes restent transparentes.",
      ],
    },
    {
      heading: "Où l'APNG est lu",
      id: "support",
      body: [
        "Chrome, Edge, Firefox, Safari et Opera lisent tous l'APNG, sur ordinateur comme sur téléphone : un APNG fonctionne donc partout où une image peut figurer sur une page web. LINE utilise l'APNG pour ses stickers animés, et de nombreux outils de stickers et d'emojis l'acceptent.",
        "Les visionneuses, les éditeurs d'images et les applications de discussion qui ne connaissent que le PNG ordinaire affichent la première image au lieu de l'animation. C'est la solution de repli intégrée à l'APNG, mais cela signifie aussi que le GIF reste le choix le plus sûr pour l'e-mail et la plupart des messageries.",
      ],
    },
    {
      heading: "L'extension du fichier",
      id: "extension",
      body: [
        "Le fichier téléchargé se termine par .png, l'extension qu'attendent les navigateurs et la plupart des sites ; l'animation se trouve dans le fichier, pas dans son nom. Si un service demande expressément un fichier .apng, renommez simplement l'extension : le contenu est le même.",
      ],
    },
    {
      heading: "APNG ou WebP ?",
      id: "webp",
      body: [
        "Les deux remplacent avantageusement le GIF. Le WebP sans perte est généralement encore plus léger, et le WebP avec perte bien plus léger, mais le WebP ne peut pas être créé dans Safari et certains outils ne l'acceptent pas. L'APNG est uniquement sans perte, peut être créé dans tous les navigateurs, Safari compris, et s'ouvre comme un PNG fixe partout où l'animation n'est pas prise en charge. Pour un site web, essayez les deux et gardez le plus léger ; pour des stickers, utilisez ce que la plateforme demande.",
      ],
    },
    {
      heading: "Retouchez d'abord, convertissez ensuite",
      id: "prepare",
      body: [
        "Le convertisseur garde le GIF exactement tel qu'il est : faites donc vos retouches avant la conversion. Utilisez « Recadrer un GIF » pour la forme et « Redimensionner un GIF » pour une taille exacte en pixels, car les plateformes de stickers imposent généralement les deux, et « Couper un GIF » pour ne garder que les images utiles. Ces outils conservent les couleurs propres au GIF, si bien que l'APNG reste identique, au pixel près, à ce que vous avez préparé.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé et l'APNG est écrit entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment convertir un GIF en APNG",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Convertissez", description: "Cliquez sur « Convertir en APNG » ; chaque pixel et chaque image sont conservés." },
    { title: "Téléchargez", description: "Comparez le poids avec celui du GIF et téléchargez l'APNG." },
  ],

  features: [
    { icon: "image", title: "Sans perte", description: "Chaque pixel, chaque image et chaque pause passent sans changement." },
    { icon: "compress", title: "Souvent plus léger", description: "La compression du PNG bat généralement celle du GIF sur les mêmes images." },
    { icon: "lock", title: "Aucun envoi", description: "Conversion entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment convertir un GIF en APNG ?", a: "Ajoutez le GIF et cliquez sur « Convertir en APNG ». Le PNG animé se lit exactement comme le GIF." },
    { q: "Qu'est-ce que l'APNG ?", a: "Animated PNG, c'est-à-dire PNG animé : un fichier PNG qui contient aussi des images d'animation et leurs durées." },
    { q: "L'APNG est-il sans perte ?", a: "Oui. Chaque pixel de chaque image est enregistré à l'identique." },
    { q: "L'APNG est-il plus léger que le GIF ?", a: "Souvent, grâce à une meilleure compression, surtout pour les graphismes et les enregistrements d'écran. L'outil affiche la différence." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les zones transparentes restent transparentes." },
    { q: "Pourquoi mon APNG ressemble-t-il à une image fixe ?", a: "Le logiciel dans lequel vous l'avez ouvert ne prend pas en charge l'APNG et affiche la première image. Ouvrez-le dans un navigateur pour voir l'animation." },
    { q: "Pourquoi le fichier se termine-t-il par .png ?", a: "Les fichiers APNG utilisent l'extension PNG. Renommez-le en .apng uniquement si un service le demande." },
    { q: "Cela fonctionne-t-il dans Safari ?", a: "Oui. Safari lit l'APNG et peut aussi le créer avec cet outil." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans n'importe quel navigateur mobile, y compris sur iPhone et iPad." },
    { q: "Vaut-il mieux utiliser l'APNG ou le WebP ?", a: "Le WebP est généralement plus léger ; l'APNG fonctionne dans plus d'outils et dans Safari. Essayez les deux si le poids compte." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Puis-je utiliser un APNG dans un e-mail ?", a: "Mieux vaut éviter. Beaucoup de logiciels de messagerie n'affichent que la première image. Pour l'e-mail, le GIF reste le choix sûr." },
  ],

  security:
    "Votre GIF est converti entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifExportTool.tsx is shared with gif-to-webp; reuse its translations.
  ui: webp.ui,
};

export default content;
