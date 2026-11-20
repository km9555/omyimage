import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/convertir-en-webp.
 *
 * Head term "Convertir en WebP" — French converter queries take the "X en Y"
 * form. Secondary "convertir une image en WebP", used in the intro, a heading
 * and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-webp",
  locale: "fr",
  name: "Convertir en WebP",
  tagline:
    "Convertissez vos images JPG, PNG, GIF et BMP en WEBP en ligne : des fichiers plus légers pour des pages plus rapides, avec réglage de la qualité et conversion par lots. Gratuit et privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Convertir en WebP – gratuit et en ligne | oMyImage",
  metaDescription:
    "Convertir en WebP gratuit : passez vos JPG, PNG, GIF et BMP en WebP par lots, qualité réglable, transparence conservée. Convertir une image en WebP en ligne.",

  intro:
    "Le WEBP est le format d'image pensé pour le web : la même image en moins d'octets, avec la transparence quand vous en avez besoin. Avec l'outil Convertir en WebP d'oMyImage, vous pouvez convertir une image en WebP directement dans votre navigateur, qu'il s'agisse de JPG, de PNG, de GIF ou de BMP : une seule image ou tout un dossier de photos produits, d'illustrations de blog ou de captures d'écran d'un coup, avec un curseur de qualité pour régler l'équilibre entre poids et détail. Les pages construites avec le résultat se chargent plus vite, quelle que soit la connexion.",

  sections: [
    {
      heading: "Pourquoi les sites passent leurs images en WEBP",
      id: "why",
      body: [
        "Les images sont généralement la partie la plus lourde d'une page web, et l'image principale décide souvent de la vitesse à laquelle la page semble s'afficher. Servir du WEBP plutôt que du JPG ou du PNG réduit ce poids sans les blocs visibles qu'on obtiendrait en baissant simplement la qualité d'un JPG, parce que l'encodeur WEBP a une génération d'avance et prédit chaque bloc à partir de ses voisins.",
        "Tous les navigateurs actuels affichent le WEBP (Chrome, Edge, Firefox, Opera, et Safari depuis 2020) : un site peut donc l'utiliser pour la quasi-totalité de ses visiteurs. De nombreuses plateformes, de nombreux CDN et outils d'audit de vitesse le recommandent précisément pour cette raison, et une page plus légère consomme aussi moins de données mobiles chez vos visiteurs.",
      ],
    },
    {
      heading: "Quel gain de poids attendre",
      id: "smaller",
      body: [
        "Pour les photos, un WEBP de qualité apparente identique est généralement 25 à 35 % plus léger que le JPG d'origine. Le gain est bien plus important à partir d'un PNG : une photo ou une capture d'écran enregistrée en PNG perd souvent 70 à 90 % de son poids, car le PNG est sans perte et le WEBP à qualité élevée ne l'est pas.",
        "Le résultat dépend de l'image. Les photos chargées et détaillées gagnent le moins ; les visuels en aplats, les captures d'écran et les images avec de grandes zones unies gagnent le plus. L'outil affiche le poids de chaque fichier converti à côté de l'original : vous voyez exactement ce que vous avez gagné avant d'importer quoi que ce soit.",
      ],
    },
    {
      heading: "Choisir la qualité",
      id: "quality",
      body: [
        "Le curseur va de 50 à 100 % et démarre à 92 %, ce qui garde les photos visuellement identiques à la source. Pour les images d'un site web, 75 à 85 % est le choix courant : la différence est très difficile à voir à taille d'affichage normale, et les fichiers sont nettement plus légers. Remontez pour les images d'en-tête, les photos produits zoomables et tout ce que l'on regardera de près.",
        "En dessous d'environ 70 %, les zones lisses comme le ciel et la peau prennent un aspect cireux plutôt que pixelisé : le WEBP se dégrade plus élégamment que le JPG, mais il se dégrade quand même. Convertissez d'abord une image représentative, comparez-la à l'original en taille réelle, puis lancez le lot avec le réglage retenu.",
      ],
    },
    {
      heading: "Transparence et animation",
      id: "transparency",
      body: [
        "Le WEBP gère une couche alpha complète : les logos, icônes et détourages de produits en PNG transparent restent transparents après conversion, contours compris, sans qu'aucune couleur de fond ne soit ajoutée. Le WEBP remplace donc directement les PNG transparents sur un site web, généralement pour une fraction du poids.",
        "Un GIF animé n'est converti qu'en sa première image. Le WEBP peut contenir une animation, mais cet outil produit des images fixes ; gardez le GIF, ou utilisez un outil d'animation dédié, si le mouvement compte.",
      ],
    },
    {
      heading: "Quand le WEBP n'est pas le bon choix",
      id: "where-not",
      body: [
        "Le WEBP est un format de diffusion, pas d'archivage ni d'échange. Imprimeurs, anciens logiciels de bureau, certains clients de messagerie et de nombreux formulaires officiels attendent encore du JPG ou du PNG, et un WEBP qui leur est envoyé risque fort d'être refusé. Gardez vos originaux et convertissez des copies pour le web.",
        "La conversion est aussi à sens unique côté qualité : un WEBP créé à 80 % a perdu des détails qu'un retour en PNG ou en JPG ne restaurera pas. Si vous avez besoin d'un autre format plus tard, repartez du fichier d'origine.",
      ],
    },
    {
      heading: "Métadonnées et prise en charge des navigateurs",
      id: "metadata",
      body: [
        "Les données de l'appareil photo (EXIF, date de prise de vue, position GPS) ne sont pas reprises dans les WEBP créés ici, ce qui convient aux images publiées sur le web, où la localisation représente de toute façon un risque pour la vie privée. Si vous avez besoin de ces métadonnées, conservez-les dans les originaux.",
        "La conversion utilise l'encodeur WEBP intégré à votre navigateur. Chrome, Edge, Firefox et Opera en possèdent un ; Safari sait afficher le WEBP mais ne peut pas l'enregistrer depuis une page web. Sur Safari, l'outil vous invite donc à changer de navigateur plutôt que de vous remettre un fichier mal étiqueté.",
      ],
    },
  ],

  howToTitle: "Comment convertir une image en WEBP",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images JPG, PNG, GIF ou BMP, ou glissez-déposez-les." },
    { title: "Réglez la qualité", description: "Gardez 92 % pour des images quasi identiques, ou choisissez 75 à 85 % pour des images web plus légères." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir » : un seul WEBP se télécharge directement, plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "speed", title: "Des pages web plus légères", description: "Les fichiers WEBP sont plus légers que les JPG et PNG qu'ils remplacent : les pages se chargent plus vite." },
    { icon: "tune", title: "Réglage de la qualité", description: "Choisissez une qualité entre 50 et 100 % et voyez le nouveau poids de chaque fichier." },
    { icon: "opacity", title: "Transparence conservée", description: "Les logos et icônes PNG transparents restent transparents en WEBP, contours doux compris." },
  ],

  faqs: [
    { q: "Quels formats puis-je convertir en WEBP ?", a: "JPG, PNG, GIF et BMP. Pour les GIF, c'est la première image qui est convertie." },
    { q: "De combien le WEBP est-il plus léger que le JPG ?", a: "En général de 25 à 35 % pour des photos de qualité visuelle identique. À partir d'un PNG, le gain est bien plus important, souvent de 70 à 90 %." },
    { q: "Quelle qualité utiliser pour un site web ?", a: "75 à 85 % conviennent à la plupart des images d'un site. Gardez les 92 % par défaut, ou plus, pour les images d'en-tête et les photos produits que l'on va agrandir." },
    { q: "Le WEBP conserve-t-il la transparence ?", a: "Oui. Les zones transparentes et semi-transparentes des images PNG, GIF ou BMP restent transparentes dans le WEBP." },
    { q: "Tous les navigateurs affichent-ils le WEBP ?", a: "Oui, tous les navigateurs actuels, y compris Safari depuis 2020. Certains anciens logiciels de bureau et certains formulaires d'import peuvent encore ne pas l'ouvrir." },
    { q: "Pourquoi l'outil ne fonctionne-t-il pas dans Safari ?", a: "Safari sait afficher le WEBP mais ne peut pas en créer depuis une page web. Utilisez Chrome, Edge, Firefox ou Opera pour convertir ; les fichiers s'afficheront ensuite normalement dans Safari." },
    { q: "Mes données EXIF sont-elles conservées ?", a: "Non. Les WEBP créés ici ne contiennent ni données d'appareil photo ni position GPS, ce qui est généralement ce que l'on veut pour des images publiées en ligne." },
    { q: "Puis-je convertir une image en WebP par dossier entier ?", a: "Oui. Ajoutez autant d'images que vous voulez : elles sont converties l'une après l'autre et téléchargées ensemble dans un ZIP." },
    { q: "Puis-je reconvertir un WEBP en JPG ou en PNG ?", a: "Oui, avec les outils « WebP en JPG » et « WebP en PNG ». Les détails supprimés par la compression ne reviennent pas : convertissez à partir de l'original quand vous l'avez." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Normalement non : la conversion se fait dans votre navigateur. Seule une image trop lourde pour votre navigateur est envoyée à notre serveur, convertie là-bas puis supprimée aussitôt." },
    { q: "Le WEBP améliore-t-il le référencement de mon site ?", a: "Indirectement. Des images plus légères accélèrent l'affichage de la page, et la vitesse de chargement fait partie des signaux que les moteurs de recherche et les outils d'audit prennent en compte. Le format en lui-même n'apporte rien de plus : c'est le gain de poids qui compte." },
  ],

  security:
    "Vos images sont converties en WEBP dans votre navigateur. Seule une image trop lourde pour le navigateur (plus de 100 Mo ou au-delà de sa limite de canvas) est traitée sur notre serveur, puis supprimée juste après la conversion. Rien n'est conservé et aucun fichier n'est suivi.",

  ui: {
    // Drop hint from app/convert-to-webp/page.tsx, translated inside ConvertTool.
    "or drop JPG, PNG, GIF or BMP images here": "ou déposez ici des images JPG, PNG, GIF ou BMP",
  },
};

export default content;
