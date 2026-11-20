import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/image-miroir (variant of rotate-image, preset flipH).
 * Target query: « Image miroir » (880, France, Nov 2026); secondary « effet
 * miroir photo » and « retourner une image ». In French « retourner » and
 * « inverser une image » can mean either mirroring or inverting colours, so
 * the page uses them only with « horizontalement / verticalement » and points
 * to « Inverser les couleurs d'une image » for the colour meaning.
 */
const content: ToolPageContent = {
  toolId: "flip-image",
  locale: "fr",
  name: "Image miroir",
  tagline:
    "Retournez une image horizontalement ou verticalement : selfies inversés, texte à l'envers et photos de produits corrigés en un clic. Plusieurs images à la fois, JPG, PNG et WebP, et tout reste dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Image miroir – effet miroir photo gratuit | oMyImage",
  metaDescription:
    "Image miroir en ligne et gratuite : appliquez un effet miroir photo, retournez une image horizontalement ou verticalement et corrigez vos selfies, sans envoi.",

  intro:
    "Mettre une image en miroir, c'est la refléter : le retournement horizontal échange la gauche et la droite, comme si vous la regardiez dans un miroir, et le retournement vertical la met la tête en bas, à la manière de l'eau qui reflète une rive. Cette page s'ouvre avec le miroir horizontal déjà activé, car c'est ce dont presque tout le monde a besoin : annuler l'effet miroir d'un selfie pris avec la caméra frontale, corriger un texte qui se lit à l'envers ou faire regarder dans la même direction tous les sujets d'une série de photos. Ajoutez une image ou un dossier entier, vérifiez l'aperçu et téléchargez le résultat.",

  sections: [
    {
      heading: "Retourner ou faire pivoter : de quoi avez-vous besoin ?",
      id: "flip-vs-rotate",
      body: [
        "Faire pivoter tourne toute l'image autour de son centre : une photo couchée sur le côté peut ainsi être redressée, et rien n'est reflété. Retourner la reflète : le texte se lit à l'envers et la main gauche d'une personne devient sa main droite.",
        "Un test rapide : si la photo est dans le bon sens mais regarde du mauvais côté, il faut la retourner. Si elle est de travers ou la tête en bas mais par ailleurs correcte, il faut la faire pivoter. Les réglages des deux opérations se trouvent dans le même panneau : vous pouvez faire l'une, l'autre, ou les deux à la fois.",
      ],
    },
    {
      heading: "Pourquoi les selfies sortent en miroir",
      id: "selfies",
      body: [
        "La caméra frontale du téléphone vous montre un aperçu en miroir, parce que c'est ainsi que vous avez l'habitude de vous voir dans une glace, et beaucoup de téléphones enregistrent aussi la photo de cette manière. Résultat : le texte de votre t-shirt ou d'une enseigne derrière vous se lit à l'envers, et votre raie se retrouve du côté que les autres ne voient pas.",
        "Un retournement horizontal remet la photo telle que tout le monde vous voit. Certains téléphones proposent un réglage pour enregistrer désormais les photos de la caméra frontale sans effet miroir ; pour les photos déjà prises, les retourner ici est la solution la plus rapide.",
      ],
    },
    {
      heading: "De bonnes raisons d'appliquer un effet miroir à une photo",
      id: "uses",
      body: [
        "Les graphistes retournent les photos de produits pour que tous les articles d'une grille regardent du même côté, et retournent les portraits pour que la personne regarde vers l'intérieur de la page plutôt que vers le bord. Enseignants et amateurs de loisirs créatifs mettent des images en miroir pour les transferts au fer à repasser et la sérigraphie, où l'impression est inversée. Les dessinateurs retournent un dessin pour repérer des erreurs de proportion que leur œil ne voit plus.",
        "Le retournement lui-même ne modifie aucun pixel, seulement leur ordre : retourner une seconde fois redonne la disposition d'origine. Enregistrez en PNG pour garder un fichier strictement sans perte ; en JPG, la sortie est réenregistrée avec un réglage de qualité élevé.",
      ],
    },
    {
      heading: "Quand il vaut mieux ne pas retourner",
      id: "text-and-logos",
      body: [
        "Un retournement horizontal inverse tout ce qui se trouve dans l'image, y compris l'écriture. Les logos, les panneaux de signalisation, les plaques d'immatriculation et les étiquettes de prix sortent à l'envers : une photo de produit avec un emballage imprimé est donc souvent mieux telle quelle, ou alors retournez-la et vérifiez les textes avant de la publier.",
        "Les captures d'écran ne sont presque jamais faites pour être retournées : si l'une d'elles apparaît de travers, c'est une rotation qu'il lui faut. Et pour un portrait, n'oubliez pas que les visages ne sont pas parfaitement symétriques ; une photo retournée d'une personne que vous connaissez bien peut vous sembler légèrement étrange, alors que c'est exactement ainsi qu'elle se voit dans un miroir.",
      ],
    },
    {
      heading: "Retourner une image n'est pas inverser ses couleurs",
      id: "not-invert",
      body: [
        "En français, « inverser » ou « retourner une image » peut désigner deux opérations différentes. Retourner l'image horizontalement ou verticalement, c'est-à-dire la mettre en miroir, échange les côtés et laisse les couleurs intactes. Inverser les couleurs, au contraire, transforme chaque couleur en son opposée, le noir devenant blanc comme sur un négatif, sans toucher à la disposition. Si c'est ce que vous cherchez, utilisez « Inverser les couleurs d'une image ».",
      ],
    },
    {
      heading: "Plusieurs photos, le même effet miroir",
      id: "batch",
      body: [
        "Vous pouvez ajouter toute une série d'images JPG, PNG ou WebP et les retourner toutes de la même façon en une seule étape : pratique pour un catalogue où tous les produits doivent regarder du même côté, ou pour une série de selfies pris avec la caméra frontale. Chaque image garde sa taille, l'aperçu montre le résultat avant le téléchargement et, s'il y en a plusieurs, vous les recevez ensemble dans un fichier ZIP.",
      ],
    },
    {
      heading: "Miroir horizontal ou vertical : quel effet choisir ?",
      id: "horizontal-vs-vertical",
      body: [
        "Le miroir horizontal est de loin le plus utilisé : il corrige les selfies, réoriente un sujet et remet à l'endroit un texte écrit à l'envers. Le miroir vertical sert plutôt à créer un effet de reflet, comme un paysage qui se reflète dans un lac, ou à remettre à l'endroit une image enregistrée la tête en bas par un scanner ou un appareil mal orienté. Activer les deux en même temps revient au même qu'une rotation de 180 degrés.",
        "Pour un effet de reflet complet, avec l'original et son reflet l'un au-dessus de l'autre, retournez d'abord une copie verticalement, puis assemblez les deux images avec « Fusionner des images ».",
      ],
    },
  ],

  howToTitle: "Comment mettre une image en miroir",
  steps: [
    { title: "Ajoutez vos images", description: "Sélectionnez ou déposez un ou plusieurs fichiers JPG, PNG ou WebP." },
    { title: "Choisissez la direction", description: "Le miroir horizontal est activé ; passez au vertical, ou combinez avec une rotation si besoin." },
    { title: "Téléchargez", description: "Téléchargez l'image retournée, ou toutes les images ensemble dans un ZIP." },
  ],

  features: [
    { icon: "flip", title: "Horizontal ou vertical", description: "Miroir de gauche à droite ou de haut en bas, séparément ou ensemble, avec un aperçu en direct." },
    { icon: "burst_mode", title: "Toute une série à la fois", description: "Retournez de la même façon toutes les images d'un lot et téléchargez-les ensemble." },
    { icon: "lock", title: "Jamais envoyé", description: "Le retournement se fait dans votre navigateur : vos photos restent sur votre appareil." },
  ],

  faqs: [
    { q: "Comment retourner une image horizontalement ?", a: "Ajoutez l'image (le miroir horizontal est déjà activé), vérifiez l'aperçu et téléchargez-la. Il n'y a rien d'autre à faire." },
    { q: "Quelle différence entre retourner une image et la mettre en miroir ?", a: "En pratique, aucune. « Miroir » désigne généralement le retournement horizontal ; « retourner » peut aussi désigner le retournement vertical, que cette page propose également." },
    { q: "Comment annuler l'effet miroir d'un selfie ?", a: "Retournez-le horizontalement. Les caméras frontales enregistrent souvent une image en miroir, et un retournement horizontal vous montre tel que les autres vous voient." },
    { q: "Puis-je retourner une image verticalement ?", a: "Oui. Activez le retournement vertical dans les réglages, seul ou avec le retournement horizontal." },
    { q: "Puis-je retourner plusieurs images à la fois ?", a: "Oui. Ajoutez un lot entier ; toutes les images sont retournées de la même façon et vous pouvez les télécharger dans un ZIP." },
    { q: "Un PNG transparent reste-t-il transparent ?", a: "Oui, tant que vous gardez le PNG ou le WebP comme format de sortie. Le JPG ne gère pas la transparence : les zones transparentes seraient remplies avec une couleur de fond." },
    { q: "Le retournement corrige-t-il un texte qui se lit à l'envers ?", a: "Oui : un retournement horizontal transforme une écriture en miroir en texte normal, à condition que le texte soit réellement en miroir et non photographié de biais à travers une vitre." },
    { q: "Retourner une image, est-ce la même chose qu'inverser ses couleurs ?", a: "Non. Retourner échange la gauche et la droite ; inverser les couleurs transforme chaque couleur en son opposée. Pour les couleurs, utilisez « Inverser les couleurs d'une image »." },
    { q: "L'effet miroir fait-il perdre de la qualité ?", a: "Non. Aucun pixel n'est modifié, seul leur ordre change. En PNG, le fichier reste strictement sans perte ; en JPG, il est réenregistré en haute qualité." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Le retournement se fait entièrement dans votre navigateur, sans envoi ni stockage." },
  ],

  security:
    "Vos images ne quittent jamais votre appareil. Le retournement se fait entièrement dans votre navigateur, sans rien envoyer ni stocker.",
};

export default content;
