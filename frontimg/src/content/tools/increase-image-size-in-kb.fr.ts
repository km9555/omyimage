import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/augmenter-taille-image-ko (variant of compress-image,
 * preset mode "increase"). Primary query: « Augmenter la taille d'une image
 * en Ko »; secondaries: « augmenter le poids d'une photo », « photo trop
 * petite en Ko ». The honest version of a tool most sites fake: quality
 * first, then pixels, padding only as a last resort — and the page says
 * which happened.
 */
const content: ToolPageContent = {
  toolId: "increase-image-size-in-kb",
  locale: "fr",
  name: "Augmenter la taille d'une image en Ko",
  tagline:
    "Faites passer une photo ou une signature à au moins 10, 20 ou 50 Ko, ou à toute taille exigée par un formulaire, en augmentant sa qualité puis, seulement si besoin, sa taille en pixels. Fixez aussi un maximum pour les fourchettes comme 20–50 Ko. Gratuit, et tout se passe dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Augmenter la taille d'une image en Ko – gratuit | oMyImage",
  metaDescription:
    "Augmenter la taille d'une image en Ko : une photo trop légère atteint le minimum du formulaire (10, 20, 50 Ko) en qualité supérieure. Gratuit, sans envoi.",

  intro:
    "La plupart des outils d'image rendent les fichiers plus petits. Certains formulaires demandent l'inverse : « la photo doit peser entre 20 Ko et 50 Ko », et l'image de 12 Ko que vous avez sous la main est refusée parce qu'elle est trop légère. Cette page augmente le poids du fichier en Ko jusqu'au minimum que vous fixez, tout en le gardant sous un maximum s'il y en a un. Elle le fait honnêtement — en enregistrant l'image avec une qualité plus élevée, puis avec davantage de pixels — si bien que le résultat est au moins aussi beau que l'original. C'est la solution quand une démarche administrative en ligne ou un dossier de candidature juge votre photo trop petite.",

  sections: [
    {
      heading: "Pourquoi les formulaires imposent un poids minimum",
      id: "why-minimum",
      body: [
        "Un minimum sert de contrôle de qualité grossier. Une photo enregistrée à 5 Ko a en général été compressée si fort, ou réduite si petite, qu'on ne reconnaît plus le visage, et les concepteurs du formulaire ont choisi un nombre d'octets comme moyen le plus simple d'écarter ces images. C'est pour cela que la règle prend souvent la forme d'une fourchette : au moins 20 Ko pour que la photo soit nette, au plus 50 Ko pour ne pas saturer le serveur.",
        "L'objectif n'est donc pas seulement d'afficher un chiffre plus grand. Il s'agit d'obtenir un fichier qui franchit le minimum parce qu'il contient plus de détail, ce qui est exactement ce que la règle du formulaire cherchait à garantir.",
      ],
    },
    {
      heading: "Comment le poids augmente",
      id: "how",
      body: [
        "D'abord, la photo est réenregistrée en JPG avec le réglage de qualité le plus élevé. Un fichier qui avait été fortement compressé double ou triple souvent de poids de cette façon, sans aucune perte. Si cela ne suffit toujours pas pour atteindre le minimum, l'image est agrandie par étapes — selon la racine carrée de l'écart, puisque le poids du fichier augmente avec le nombre de pixels — jusqu'à quatre fois sa largeur et sa hauteur.",
        "Si un maximum est fixé et que le fichier agrandi le dépasse, la qualité est abaissée juste assez pour retomber dans la fourchette. Le détail s'affiche à côté de chaque fichier : de combien il a grossi et, s'il a été agrandi, ses nouvelles dimensions.",
      ],
    },
    {
      heading: "Quand un remplissage est utilisé",
      id: "padding",
      body: [
        "Une image très simple, comme une petite signature sur fond blanc, peut rester sous le minimum même en qualité maximale et à quatre fois sa largeur et sa hauteur. C'est seulement dans ce cas que l'outil ajoute au JPG un bloc de données vide jusqu'à atteindre le minimum. Toutes les visionneuses d'images ignorent ce bloc : l'image est strictement identique, le fichier est simplement plus lourd.",
        "La liste des résultats indique quand un fichier a été complété ainsi. Pour les signatures aux dimensions fixes en pixels, l'outil « Redimensionner une signature » fait la même chose après avoir nettoyé et rogné la signature.",
      ],
    },
    {
      heading: "Les fourchettes comme 20–50 Ko",
      id: "ranges",
      body: [
        "Saisissez le plus petit nombre comme minimum et le plus grand comme maximum. Les fichiers qui sont déjà des JPG dans la fourchette vous sont rendus tels quels, et tous les autres y sont ramenés. Pour le problème inverse — un fichier trop lourd — utilisez plutôt « Compresser une image » ou l'une des pages de compression à une taille donnée.",
        "Les formulaires ne s'accordent pas sur la valeur d'un kilo-octet, 1000 ou 1024 octets ; l'outil retient donc la lecture la plus sûre de chaque côté : un minimum de 20 Ko signifie au moins 20 480 octets, et un maximum de 50 Ko signifie au plus 50 000 octets. Le fichier passe dans les deux cas.",
      ],
    },
  ],

  howToTitle: "Comment augmenter la taille d'une image en Ko",
  steps: [
    { title: "Ajoutez vos photos", description: "Sélectionnez ou glissez les images trop légères, en JPG, PNG ou WebP." },
    { title: "Fixez le minimum (et un maximum)", description: "Saisissez le minimum en Ko, ainsi que le maximum si le formulaire donne une fourchette." },
    { title: "Téléchargez", description: "Chaque fichier revient en JPG, d'un poids au moins égal au minimum." },
  ],

  features: [
    { icon: "high_quality", title: "La qualité monte, elle ne baisse pas", description: "Le fichier grossit d'abord parce que l'image est enregistrée en meilleure qualité : rien n'est dégradé pour ajouter des octets." },
    { icon: "photo_size_select_large", title: "Fourchettes prises en charge", description: "Fixez un minimum et un maximum, par exemple 20–50 Ko, et chaque fichier tombe dans l'intervalle." },
    { icon: "lock", title: "Confidentiel", description: "Vos photos sont traitées dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment augmenter la taille d'une photo en Ko ?", a: "Ajoutez la photo, saisissez le minimum demandé par le formulaire — par exemple 20 Ko — puis cliquez sur « Augmenter ». Vous obtenez un JPG d'au moins ce poids." },
    { q: "Augmenter le poids en Ko améliore-t-il la photo ?", a: "Pas au-delà de l'original : un détail perdu ne revient pas. L'outil enregistre ce qui existe avec une qualité plus élevée, donc le résultat est au moins aussi beau que l'original, jamais moins." },
    { q: "Mon formulaire demande entre 20 Ko et 50 Ko. Que dois-je saisir ?", a: "20 comme minimum et 50 comme maximum. Le fichier est ramené dans cette fourchette, et un JPG qui s'y trouve déjà est conservé tel quel." },
    { q: "Les dimensions vont-elles changer ?", a: "Seulement si la hausse de qualité ne suffit pas. L'image est alors agrandie, jusqu'à quatre fois, et les nouvelles dimensions s'affichent à côté du fichier." },
    { q: "Que signifie « complété pour atteindre le minimum » ?", a: "L'image était trop simple pour atteindre le minimum, même en qualité maximale et à quatre fois sa taille : des données vides ont donc été ajoutées au fichier. L'image elle-même n'a pas changé." },
    { q: "Puis-je augmenter la taille d'un PNG ?", a: "Oui, mais le résultat est un JPG, le format qu'attendent les formulaires à limite en Ko. Les zones transparentes sont remplies avec la couleur de fond que vous choisissez." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Pourquoi un portail en ligne refuse-t-il ma photo parce qu'elle est trop petite ?", a: "Parce qu'il vérifie un poids minimum en Ko pour écarter les images floues ou minuscules. Augmentez ici le fichier jusqu'au minimum indiqué, puis envoyez-le de nouveau." },
  ],

  security:
    "Les photos et les signatures sont traitées sur votre appareil, dans votre navigateur. Rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
