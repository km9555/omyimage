import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.fr";

/**
 * French copy for /fr/webp-en-gif.
 *
 * Target query « WebP en GIF » (convertir WebP en GIF) leads the h1.
 * WhatsApp's animated stickers are the main real-world use, so they get a
 * mention in the metaDescription, a section and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "webp-to-gif",
  locale: "fr",
  name: "WebP en GIF",
  tagline:
    "Convertissez des images WebP animées en GIF en conservant chaque image et sa durée, pour que l'animation se lise dans les applications et les éditeurs qui ne comprennent pas le WebP. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "WebP en GIF – Convertir un WebP animé en GIF | oMyImage",
  metaDescription:
    "Convertissez un WebP en GIF gratuitement : enregistrez vos WebP animés et stickers WhatsApp en GIF avec toutes leurs images et leurs durées. Sans envoi.",

  intro:
    "Le WebP animé est efficace, mais beaucoup de logiciels ne savent toujours pas l'ouvrir : anciens éditeurs d'images, certaines messageries, logiciels de présentation et de nombreux formulaires d'envoi n'affichent qu'une image fixe ou refusent le fichier. Le GIF, lui, est compris partout. Le convertisseur « WebP en GIF » d'oMyImage lit chaque image d'un WebP animé, avec sa durée, son mode de fusion et sa transparence, et les réécrit sous forme de GIF qui tourne en boucle. Ajoutez le fichier, comparez le résultat à l'original et téléchargez-le.",

  sections: [
    {
      heading: "D'où viennent les WebP animés",
      id: "sources",
      body: [
        "Les sites web servent leurs animations en WebP parce qu'elles sont plus légères que des GIF : une animation enregistrée depuis une page est donc souvent un fichier .webp. Les stickers animés de WhatsApp sont eux aussi des fichiers WebP. Les deux s'affichent très bien dans un navigateur, mais deviennent une image figée ou une erreur presque partout ailleurs.",
        "Convertir en GIF rend l'animation portable : vous pouvez la coller dans un document, la publier sur un forum, la modifier image par image ou l'envoyer via des applications qui n'ont jamais appris le WebP.",
      ],
    },
    {
      heading: "Ce qui change dans le GIF",
      id: "tradeoffs",
      body: [
        "Le GIF est plus ancien et plus limité. Il ne peut afficher que 256 couleurs par image : les dégradés doux et les photos peuvent donc présenter des bandes ; cet outil choisit une seule palette pour toute l'animation, afin que les couleurs restent au moins stables d'une image à l'autre. La transparence du GIF est binaire : les bords doux et semi-transparents deviennent nets.",
        "Attendez-vous à un GIF plus lourd que le WebP, souvent plusieurs fois plus. Si cela compte, « Compresser un GIF » peut l'alléger ensuite, et si la destination accepte la vidéo, un MP4 sera encore plus léger.",
      ],
    },
    {
      heading: "Images et durées",
      id: "timing",
      body: [
        "Chaque image du WebP est décodée séparément puis assemblée comme le navigateur la lit, en respectant les réglages de fusion et de remplacement propres à chaque image : les animations qui ne mettent à jour qu'une partie du visuel sont donc restituées correctement. Chaque image conserve sa durée, et le GIF tourne en boucle à l'infini.",
        "La conversion fonctionne dans tous les navigateurs récents, y compris Safari, car chaque image est décodée grâce à la prise en charge du WebP intégrée au navigateur, sans décodeur supplémentaire.",
      ],
    },
    {
      heading: "Images WebP fixes",
      id: "still",
      body: [
        "Un WebP non animé est converti en GIF d'une seule image, et l'outil vous le signale. Pour une image fixe, le PNG ou le JPG est généralement un meilleur choix que le GIF : utilisez « WebP en PNG » pour conserver la transparence et toutes les couleurs, ou « WebP en JPG » pour les photos.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le WebP est lu et le GIF est écrit entièrement dans votre navigateur. Stickers, captures d'écran et animations enregistrées ne quittent jamais votre appareil, et rien n'est conservé une fois la page fermée.",
      ],
    },
    {
      heading: "WebP avec et sans perte",
      id: "kinds",
      body: [
        "Les images d'un WebP existent en deux variantes : avec perte, éventuellement accompagnée d'une couche de transparence séparée, et sans perte. Les deux sont lues exactement comme le navigateur les affiche. Le flou ou les blocs qu'un WebP avec perte présentait déjà se retrouvent dans le GIF : la conversion ne peut pas restaurer les détails que le WebP a supprimés.",
      ],
    },
    {
      heading: "Alléger le GIF ensuite",
      id: "smaller",
      body: [
        "Si le GIF dépasse ce qu'accepte l'endroit où vous l'envoyez, redimensionnez-le à la taille à laquelle il sera affiché (les stickers font en général 512 pixels ou moins), puis passez-le dans « Compresser un GIF » en mode « Moyenne ». Ensemble, ces deux étapes ramènent généralement un sticker ou une bannière convertis à un poids raisonnable.",
      ],
    },
  ],

  howToTitle: "Comment convertir un WebP en GIF",
  steps: [
    { title: "Ajoutez le WebP", description: "Sélectionnez une image WebP animée (ou fixe)." },
    { title: "Convertissez", description: "Cliquez sur « Convertir en GIF » : chaque image et sa durée sont conservées." },
    { title: "Téléchargez", description: "Comparez le GIF à l'original et téléchargez-le." },
  ],

  features: [
    { icon: "gif_box", title: "Animation conservée", description: "Chaque image, sa durée, sa fusion et sa transparence sont reprises." },
    { icon: "devices", title: "Se lit partout", description: "Le GIF s'ouvre dans les applications, éditeurs et formulaires qui refusent le WebP." },
    { icon: "lock", title: "Aucun envoi", description: "Converti entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment convertir un WebP animé en GIF ?", a: "Ajoutez le WebP et cliquez sur « Convertir en GIF ». Chaque image et sa durée sont conservées, et le GIF tourne en boucle." },
    { q: "Pourquoi le GIF est-il plus lourd que le WebP ?", a: "Le GIF compresse bien moins efficacement. Utilisez ensuite « Compresser un GIF » si le poids compte." },
    { q: "Les couleurs vont-elles changer ?", a: "Légèrement sur les photos et les dégradés : le GIF accepte 256 couleurs, choisies une seule fois pour toute l'animation." },
    { q: "La transparence est-elle conservée ?", a: "Oui, mais la transparence du GIF n'a pas de bords doux : les contours semi-transparents deviennent opaques." },
    { q: "Puis-je convertir des stickers WhatsApp ?", a: "Oui. Les stickers animés de WhatsApp sont des fichiers WebP et se convertissent comme les autres." },
    { q: "Et si mon WebP n'est pas animé ?", a: "Vous obtenez un GIF d'une seule image. Pour les images fixes, « WebP en PNG » ou « WebP en JPG » est généralement préférable." },
    { q: "Est-ce que ça marche dans Safari ?", a: "Oui. Les images sont décodées grâce à la prise en charge du WebP intégrée au navigateur, dont Safari dispose." },
    { q: "Mon fichier est-il envoyé sur un serveur ?", a: "Non. La conversion se fait entièrement dans votre navigateur." },
    { q: "Combien de temps dure la conversion ?", a: "Quelques secondes pour les stickers et les animations courtes. Les WebP longs ou volumineux prennent plus de temps, et la progression s'affiche." },
    { q: "Le GIF boucle-t-il de la même façon ?", a: "Le GIF tourne en boucle à l'infini, comme presque tous les WebP animés." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui, dans un navigateur mobile. Les grosses animations prennent un peu plus de temps sur un téléphone." },
    { q: "Puis-je utiliser le GIF dans une présentation ?", a: "Oui. PowerPoint, Keynote et Google Slides lisent les GIF directement sur la diapositive." },
    { q: "Est-ce gratuit et sans filigrane ?", a: "Oui. Aucune inscription n'est nécessaire, le GIF ne porte aucun filigrane et le nombre de conversions n'est pas limité." },
  ],

  security:
    "Votre WebP est lu et converti en GIF entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
