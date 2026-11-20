import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/convertir-en-jpg.
 *
 * Head term "Convertir en JPG" — French converter queries take the "X en Y"
 * form. Secondary "convertir une image en JPG", used in the intro, a heading
 * and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-jpg",
  locale: "fr",
  name: "Convertir en JPG",
  tagline:
    "Convertissez vos images PNG, WEBP, GIF et BMP en JPG en ligne, par lots et avec réglage de la qualité. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Convertir en JPG – gratuit et en ligne | oMyImage",
  metaDescription:
    "Convertir en JPG gratuitement et sans inscription : passez vos PNG, WEBP, GIF et BMP en JPG par lots, qualité réglable. Convertir une image en JPG, simplement.",

  intro:
    "Besoin d'images légères qui s'ouvrent partout ? Avec l'outil Convertir en JPG d'oMyImage, vous pouvez convertir une image en JPG sans rien installer : vos fichiers PNG, WEBP, GIF et BMP deviennent des JPG de haute qualité directement dans votre navigateur. Convertissez une seule image ou tout un lot, choisissez la qualité et la couleur de fond qui remplace la transparence. Tout se passe sur votre appareil, c'est donc instantané et confidentiel.",

  sections: [
    {
      heading: "Pourquoi convertir une image en JPG ?",
      id: "why",
      body: [
        "Presque tous ceux qui convertissent en JPG règlent un problème de compatibilité, pas une question d'esthétique. Un formulaire refuse le fichier, un service d'impression ne l'accepte pas, un ancien logiciel ne l'ouvre pas, ou une pièce jointe doit rester sous une certaine taille. Le JPG met fin à ces discussions : il existe depuis trois décennies, n'est soumis à aucun brevet et tout le monde sait le lire.",
        "La deuxième raison, c'est le poids. Le PNG et le BMP, surtout, stockent bien plus de données qu'une photo n'en a besoin, et la conversion en JPG réduit couramment le fichier de 80 % ou plus, sans aucune différence visible à une qualité raisonnable. Pour tout ce que vous envoyez par e-mail, importez sur un site ou affichez sur une page web, c'est la différence entre un fichier qui passe et un fichier qui bloque.",
      ],
    },
    {
      heading: "Ce que le JPG ne sait pas faire",
      id: "limits",
      body: [
        "Le JPG ne gère pas la transparence. Le format n'a tout simplement pas de couche alpha : tout ce qui est transparent doit être recouvert d'une couleur unie avant l'enregistrement. Pour une photo, aucun problème ; pour un logo destiné à être posé sur un fond coloré, c'est une erreur.",
        "Un JPG ne contient aussi qu'une seule image, l'animation est donc perdue : un GIF ou un WebP animé devient sa première image. Et comme le format est avec perte, chaque enregistrement supprime encore un peu de détail. Convertissez une seule fois, à partir de la meilleure source dont vous disposez, et gardez l'original si vous risquez de devoir le retoucher plus tard.",
        "Enfin, le JPG convient mal aux contenus à bords nets. Captures d'écran, schémas, dessins au trait et tout ce qui comporte du petit texte se retrouvent avec un léger halo autour de chaque contour, et souvent sans même gagner en poids. Pour ce type d'image, le PNG ou le WEBP est une bien meilleure destination.",
      ],
    },
    {
      heading: "Choisir le réglage de qualité",
      id: "quality",
      body: [
        "Le curseur de qualité détermine avec quelle force le détail est éliminé. Entre 85 et 92 %, la compression est pratiquement invisible et le fichier reste nettement plus léger que l'original : commencez par là, sauf raison particulière.",
        "Montez à 95 % et au-delà pour les images destinées à l'impression, à l'agrandissement ou à un examen attentif ; le fichier grossit vite pour une différence que presque personne ne voit à l'écran, mais l'impression ne pardonne rien. Descendez à 70–80 % quand vous devez respecter une limite de taille stricte et qu'il s'agit d'une photo ordinaire. En dessous, des blocs apparaissent, d'abord dans les ciels, les tons de peau et les dégradés doux.",
      ],
    },
    {
      heading: "Quelle couleur remplace la transparence",
      id: "background",
      body: [
        "Puisque la transparence doit devenir quelque chose, l'outil reprend par défaut, automatiquement, la couleur trouvée sur les bords de l'image elle-même : vous n'avez rien à choisir, et aucun rectangle blanc n'apparaît autour d'un sujet qui n'a jamais été prévu pour un fond blanc. Blanc, noir ou n'importe quelle couleur personnalisée sont à un clic si vous voulez autre chose, par exemple pour vous accorder à une interface sombre ou à une carte colorée.",
        "Un point de vigilance : la transparence des PNG et des WebP est généralement lissée, c'est-à-dire que les pixels du contour sont partiellement transparents et se mélangent à la couleur choisie. Une image préparée sur fond blanc puis remplie de noir peut montrer un liseré clair. Si c'est le cas, il est plus propre de réexporter l'original sur le bon fond que d'essayer de corriger le résultat après coup.",
      ],
    },
  ],

  howToTitle: "Comment convertir une image en JPG",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images PNG, WEBP, GIF ou BMP, ou glissez-déposez-les." },
    { title: "Réglez les options", description: "Choisissez la qualité du JPG et la couleur de fond qui aplatit la transparence." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir » : un seul JPG se télécharge immédiatement, plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Conversion par lots", description: "Convertissez des dizaines d'images PNG, WEBP, GIF ou BMP en JPG d'un coup et téléchargez-les toutes dans un seul ZIP." },
    { icon: "tune", title: "Réglage de la qualité", description: "Choisissez la qualité du JPG entre 50 et 100 % pour équilibrer le poids du fichier et la fidélité de l'image." },
    { icon: "lock", title: "100 % privé", description: "La conversion s'effectue dans votre navigateur avec HTML canvas, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Quels formats puis-je convertir en JPG ?", a: "PNG, WEBP, GIF et BMP. Pour les GIF, c'est la première image qui est convertie." },
    { q: "Que devient la transparence ?", a: "Le JPG ne gère pas la transparence : les zones transparentes sont donc remplies d'une couleur de fond. Par défaut, nous reprenons automatiquement la couleur des bords de l'image ; choisissez le blanc, le noir ou une couleur personnalisée si vous préférez autre chose." },
    { q: "Puis-je convertir plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : une image seule se télécharge en JPG, plusieurs images se téléchargent ensemble dans un ZIP." },
    { q: "Convertir une image en JPG ici est-il vraiment gratuit et privé ?", a: "Oui. Pas d'inscription, pas de filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "Le JPG conserve-t-il mes données EXIF et celles de l'appareil photo ?", a: "Par défaut, oui : les données EXIF ou XMP de l'original sont copiées dans le JPG, y compris la date de prise de vue, le modèle d'appareil et les coordonnées GPS si elles existent. Cochez « Supprimer les métadonnées » pour tout retirer, profil colorimétrique compris. Notez que les fichiers PNG, GIF et BMP contiennent rarement des EXIF : dans la plupart des cas, il n'y a rien à conserver." },
    { q: "Le profil colorimétrique est-il conservé ?", a: "Non, et c'est voulu. La conversion décode l'image en sRGB ; reprendre le profil d'origine décrirait donc mal les nouveaux pixels et décalerait les couleurs. Le JPG est enregistré en sRGB, ce que toute visionneuse suppose de toute façon, et le profil sRGB intégré disparaît complètement si vous cochez « Supprimer les métadonnées »." },
    { q: "À partir de quels formats puis-je convertir ?", a: "PNG, WEBP, GIF et BMP. Ce sont les formats qu'un navigateur décode nativement, et c'est ce qui permet à la conversion de se faire sur votre appareil. Le HEIC et l'AVIF ont leurs propres pages, car ils demandent un traitement différent." },
    { q: "Pourquoi le JPG reste-t-il le format le plus sûr ?", a: "Parce qu'il a trente ans, qu'il est libre de brevets et qu'il est pris en charge par pratiquement tous les logiciels qui ont un jour affiché une image. Les formats plus récents compressent mieux, mais « mieux » ne sert à rien si le système sur lequel vous importez le fichier le refuse." },
    { q: "Quelle qualité choisir ?", a: "Entre 85 et 92 %, cela convient à presque tout. Montez plus haut pour les photos à imprimer ou sur lesquelles un client va zoomer. Sous 70 %, des blocs apparaissent dans les ciels et les dégradés doux : c'est le moment où l'on remarque la compression plutôt que l'image." },
    { q: "Puis-je convertir un GIF animé ?", a: "Vous obtenez sa première image sous forme de JPG fixe. Un JPG ne contient qu'une image, l'animation ne peut donc pas survivre. Si vous avez besoin d'une image précise, extrayez-les toutes avec l'outil « GIF en images », puis convertissez celle qui vous intéresse." },
    { q: "Y a-t-il une limite au nombre de fichiers ?", a: "Aucune limite fixe. Une image seule se télécharge directement ; plusieurs sont regroupées dans un ZIP. Les gros lots prennent simplement un peu plus de temps, et l'onglet reste utilisable pendant le traitement." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Normalement non : la conversion en JPG se fait dans votre navigateur. Seule une image de plus de 16 mégapixels environ, trop grande pour un onglet de navigateur, est traitée sur notre serveur, puis supprimée dans l'heure environ." },
  ],

  security:
    "Vos images restent privées. La conversion en JPG se fait dans votre navigateur avec HTML canvas : aucun stockage, aucun suivi de vos fichiers. Seule une image de plus de 16 mégapixels environ, trop grande pour un onglet de navigateur, passe par notre serveur et y est supprimée dans l'heure environ.",

  ui: {
    // Drop hint from app/convert-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG, WEBP, GIF or BMP images here": "ou déposez ici des images PNG, WEBP, GIF ou BMP",
  },
};

export default content;
