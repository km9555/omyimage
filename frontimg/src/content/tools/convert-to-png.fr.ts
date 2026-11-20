import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/convertir-en-png.
 *
 * Head term "Convertir en PNG" — French converter queries take the "X en Y"
 * form. Secondary "convertir une image en PNG", used in the intro, a heading
 * and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-png",
  locale: "fr",
  name: "Convertir en PNG",
  tagline:
    "Convertissez vos images JPG, WEBP, GIF et BMP en PNG en ligne : sans perte, transparence conservée, par lots. Gratuit et privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Convertir en PNG – sans perte et gratuit | oMyImage",
  metaDescription:
    "Convertir en PNG gratuit : passez vos JPG, WEBP, GIF et BMP en PNG sans perte, transparence conservée. Convertir une image en PNG par lots, sans inscription.",

  intro:
    "Le PNG est le format vers lequel on convertit quand l'image doit rester exactement telle qu'elle est : plus aucune compression, aucun nouvel artefact, transparence intacte. Avec l'outil Convertir en PNG d'oMyImage, vous pouvez convertir une image en PNG directement dans votre navigateur : fichiers JPG, WEBP, GIF et BMP, une seule image ou un dossier entier d'un coup, téléchargés ensemble dans un ZIP. Comme le PNG est sans perte, ce qui sort est identique, pixel pour pixel, à ce qui est entré, et chaque retouche ou nouvel enregistrement le laisse intact.",

  sections: [
    {
      heading: "Quand le PNG est la bonne destination",
      id: "why",
      body: [
        "La plupart des conversions en PNG relèvent de quatre cas. Le premier, c'est la retouche : un JPG ou un WebP avec perte perd encore un peu de détail à chaque enregistrement, alors on convertit une fois en PNG et l'on fait tous ses recadrages, retouches et annotations sur un fichier qui ne peut plus se dégrader. Le deuxième, ce sont les contenus nets : captures d'écran, schémas, graphiques, formulaires scannés et tout ce qui comporte du petit texte. Le PNG garde chaque contour précis, là où le JPG ajouterait un halo gris autour de chaque lettre.",
        "Le troisième, c'est la transparence. Logos, autocollants, icônes et détourages de produits doivent pouvoir se poser sur n'importe quel fond, et le PNG est le format universellement pris en charge capable de porter une couche transparente. Le quatrième, c'est la simple compatibilité : outils de design, modèles de documents, moteurs de jeu et bon nombre de formulaires d'import demandent précisément du PNG, et le WebP enregistré depuis un site web est justement le fichier qu'ils refusent.",
      ],
    },
    {
      heading: "Pourquoi le PNG est plus lourd que le JPG",
      id: "bigger",
      body: [
        "Une photo de téléphone de 300 Ko devient couramment un PNG de 2 à 4 Mo, et c'est normal, pas un défaut. Le JPG et le WebP avec perte obtiennent leur faible poids en éliminant des détails que l'œil a peu de chances de remarquer ; le PNG n'a le droit de rien jeter, il doit donc stocker chaque pixel, y compris tout le bruit fin d'une photographie.",
        "La règle est simple. Pour les photos, le PNG est la copie de travail sûre, et le JPG ou le WebP le format de partage. Pour les captures d'écran, les visuels et tout ce qui comporte des aplats de couleur, le PNG est souvent le plus léger des trois en plus d'être le plus net, car les grandes zones de couleur identique se compressent extrêmement bien, sans aucune perte.",
      ],
    },
    {
      heading: "Convertir n'annule pas la compression",
      id: "not-restore",
      body: [
        "Convertir un JPG en PNG préserve l'image dans son état actuel ; cela ne fait pas revenir ce que le JPG a déjà supprimé. Ciels en blocs, détails fins empâtés et léger halo autour du texte sont fidèlement recopiés dans le PNG. Ce que vous gagnez, c'est que rien de tout cela ne s'aggravera à partir de maintenant.",
        "Si vous disposez de l'original (un RAW d'appareil photo, un fichier de design, la capture d'écran telle qu'elle a été faite), exportez plutôt le PNG à partir de celui-ci. Si vous n'avez que le JPG et qu'il est visiblement abîmé, les outils « Améliorer la qualité d'une image » et « Rendre une photo nette » peuvent atténuer le pire, mais aucune conversion de format ne le fera.",
      ],
    },
    {
      heading: "La transparence, à l'entrée comme à la sortie",
      id: "transparency",
      body: [
        "Les fichiers WEBP, GIF et certains BMP peuvent contenir des zones transparentes, qui sont reprises à l'identique dans le PNG, y compris les pixels doux et partiellement transparents le long des contours lissés. Rien n'est aplati et il n'y a aucune couleur de fond à choisir.",
        "Un JPG, en revanche, n'a aucune transparence à transmettre : son fond blanc est fait de vrais pixels blancs. En le convertissant en PNG, ce blanc reste. Pour rendre le fond transparent, passez d'abord l'image dans l'outil « Supprimer l'arrière-plan », qui produit directement un PNG transparent.",
      ],
    },
    {
      heading: "Sources GIF et BMP",
      id: "gif-bmp",
      body: [
        "Un GIF animé est converti en sa première image, car un PNG ne contient qu'une image fixe. Si vous avez besoin d'une image précise, découpez d'abord le GIF en images et gardez celle que vous voulez. Un GIF fixe est converti sans aucun changement d'apparence, et le PNG s'affranchit de la limite de 256 couleurs du GIF pour toutes vos retouches ultérieures.",
        "Le BMP est le cas inverse : il stocke les pixels sans aucune compression, si bien que la même image en PNG est généralement plusieurs fois plus légère, avec exactement les mêmes pixels. Convertir d'anciens scans et captures d'écran BMP en PNG est l'une des rares conversions qui fait gagner de la place sans rien coûter.",
      ],
    },
    {
      heading: "Données de l'appareil photo et couleurs",
      id: "metadata",
      body: [
        "Par défaut, les données EXIF et XMP de la source (date de prise de vue, modèle d'appareil et, le cas échéant, position GPS) sont copiées dans le PNG. Cochez « Supprimer les métadonnées » pour tout retirer, ce qui est conseillé avant de partager une photo publiquement. L'image est convertie en sRGB, l'espace colorimétrique que tous les écrans et navigateurs supposent : sur un écran ordinaire, les couleurs du PNG sont donc les mêmes que celles de l'original.",
      ],
    },
  ],

  howToTitle: "Comment convertir une image en PNG",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images JPG, WEBP, GIF ou BMP, ou glissez-déposez-les." },
    { title: "Choisissez les options", description: "Conservez ou supprimez les métadonnées de l'appareil photo, et laissez la rotation automatique activée pour les photos de téléphone." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir » : un seul PNG se télécharge directement, plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Résultat sans perte", description: "Chaque pixel est conservé à l'identique : les retouches et enregistrements suivants ne dégradent jamais l'image." },
    { icon: "burst_mode", title: "Conversion par lots", description: "Convertissez d'un coup tout un dossier de fichiers JPG, WEBP, GIF ou BMP et récupérez un seul ZIP." },
    { icon: "lock", title: "Privé par défaut", description: "Les images sont converties dans votre navigateur ; seuls les fichiers très volumineux sont traités sur notre serveur." },
  ],

  faqs: [
    { q: "Quels formats puis-je convertir en PNG ?", a: "JPG, WEBP, GIF et BMP. Pour les GIF, c'est la première image qui est convertie. Le HEIC et l'AVIF ont leurs propres convertisseurs, car ils demandent un traitement différent." },
    { q: "Convertir en PNG améliore-t-il la qualité ?", a: "Non. L'image est conservée exactement dans son état actuel. Le PNG empêche toute perte supplémentaire, mais il ne peut pas restaurer les détails qu'un JPG a déjà supprimés." },
    { q: "Pourquoi mon PNG est-il tellement plus lourd que le JPG ?", a: "Le PNG est sans perte : il stocke chaque pixel d'une photo, bruit compris. Pour une photo, un poids multiplié par cinq à dix est normal. Les captures d'écran et les visuels restent légers." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les zones transparentes et semi-transparentes des fichiers WEBP, GIF ou BMP passent telles quelles dans le PNG. Un JPG n'a pas de transparence, son fond reste donc tel quel." },
    { q: "Comment rendre le fond transparent ?", a: "Convertir un JPG en PNG conserve son fond. Utilisez d'abord l'outil « Supprimer l'arrière-plan » : il produit un PNG à fond transparent." },
    { q: "Puis-je convertir une image en PNG par lots ?", a: "Oui. Ajoutez-en autant que vous voulez. Une image seule se télécharge en PNG ; plusieurs se téléchargent ensemble dans un seul fichier ZIP." },
    { q: "Mes données EXIF sont-elles conservées ?", a: "Oui, par défaut : la date de prise de vue, l'appareil et la position GPS sont repris si la source les contient. Cochez « Supprimer les métadonnées » pour tout retirer." },
    { q: "PNG ou JPG pour les photos ?", a: "Utilisez le PNG comme copie de travail pendant vos retouches, et le JPG ou le WebP pour partager ou importer. Le PNG est le meilleur choix pour les captures d'écran, le texte et les visuels." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Normalement non : la conversion se fait dans votre navigateur. Seule une image trop lourde pour votre navigateur est envoyée à notre serveur, convertie là-bas puis supprimée aussitôt." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui. L'outil fonctionne dans les navigateurs mobiles sur Android et iPhone : choisissez des images dans votre galerie, et les PNG s'enregistrent dans vos téléchargements." },
    { q: "Le service est-il gratuit ?", a: "Oui, entièrement : pas d'inscription, pas de filigrane et aucune limite au nombre d'images converties." },
  ],

  security:
    "Vos images sont converties en PNG dans votre navigateur avec HTML canvas. Seule une image trop lourde pour le navigateur (plus de 100 Mo ou au-delà de sa limite de canvas) est traitée sur notre serveur, puis supprimée juste après la conversion. Rien n'est conservé et aucun fichier n'est suivi.",

  ui: {
    // Drop hint from app/convert-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG, WEBP, GIF or BMP images here": "ou déposez ici des images JPG, WEBP, GIF ou BMP",
  },
};

export default content;
