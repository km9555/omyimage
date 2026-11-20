import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/png-en-jpg.
 *
 * Head term "PNG en JPG" (22.2K/mo) — French converter queries take the
 * "X en Y" form. Secondary "convertir PNG en JPG", used in the intro, a
 * heading and an FAQ. French users also type the English "png to jpg"
 * (22.2K), mentioned once naturally in an FAQ.
 */
const content: ToolPageContent = {
  toolId: "png-to-jpg",
  locale: "fr",
  name: "PNG en JPG",
  tagline:
    "Convertissez vos images PNG en JPG compressés en ligne, par lots, avec réglage de la qualité et du fond. Gratuit, rapide et privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "PNG en JPG – convertir PNG en JPG gratuit | oMyImage",
  metaDescription:
    "PNG en JPG gratuit et sans inscription : convertir PNG en JPG par lots, avec réglage de la qualité et du fond, dans votre navigateur. Rien n'est envoyé.",

  intro:
    "Le PNG est idéal pour les visuels, mais pour les photos il produit des fichiers énormes. Le convertisseur PNG en JPG d'oMyImage transforme vos PNG en JPG compacts et de haute qualité, directement dans votre navigateur : une image à la fois ou en masse. Pour convertir PNG en JPG, choisissez la qualité et la couleur de fond qui remplace la transparence, puis téléchargez. Aucun envoi, aucune attente, aucune inscription.",

  sections: [
    {
      heading: "Quand convertir PNG en JPG est le bon choix",
      id: "why",
      body: [
        "Le PNG est sans perte, ce qui est exactement ce qu'on attend d'un fichier de travail et souvent du gaspillage pour un fichier final. Une photo enregistrée en PNG contient chaque pixel en intégralité, ce qui représente couramment plusieurs mégaoctets là où un JPG visuellement identique ferait quelques centaines de kilo-octets. Si l'image est une photo et qu'elle part sur une page web, dans un e-mail ou dans un formulaire d'import avec une limite de taille, la conversion est généralement la plus grosse économie possible.",
        "L'autre déclencheur classique est une limite stricte. Sites d'emploi, formulaires administratifs, annonces sur les places de marché et services d'impression plafonnent souvent les envois à 1, 2 ou 5 Mo, et une capture d'écran de téléphone ou une photo enregistrée en PNG dépasse ce seuil immédiatement. Une conversion en JPG à 85 % de qualité passe généralement sous la limite sans aucun changement visible.",
      ],
    },
    {
      heading: "Ce que vous perdez",
      id: "tradeoffs",
      body: [
        "Deux choses, et toutes deux comptent dans certains cas. La première est la transparence : le JPG n'a aucune couche alpha, tout ce qui est transparent doit donc être recouvert d'une couleur unie. Pour une photo, aucun problème ; pour un logo destiné à être posé sur un fond coloré, c'est rédhibitoire.",
        "La seconde, c'est que le JPG est avec perte, et définitivement. La conversion supprime des détails qu'aucune étape ultérieure ne récupère. Convertir un PNG que vous devrez peut-être retoucher est un aller simple : recadrez-le, retouchez-le et réenregistrez-le plusieurs fois en JPG, et la dégradation s'accumule de façon visible. Gardez le PNG comme fichier maître et considérez le JPG comme un fichier de sortie.",
      ],
    },
    {
      heading: "Les photos oui, les visuels en général non",
      id: "content",
      body: [
        "La compression du JPG a été conçue pour les images en tons continus, où la couleur change progressivement dans le cadre. Les photos sont exactement cela, ce qui explique pourquoi le format s'en sort si bien avec elles.",
        "Les contenus à bords nets sont le cas inverse. Logos, dessins au trait, schémas, captures d'écran et tout ce qui contient du texte présentent des frontières très contrastées, et le JPG sème de légers artefacts autour de chacune, le fameux « bruit de moustique » autour des lettres. Pire, comme l'encodeur considère ces contours comme des détails importants, le fichier n'est souvent guère plus léger. Pour ce type d'image, compresser le PNG ou le convertir en WEBP donne un meilleur résultat sur les deux plans.",
      ],
    },
    {
      heading: "Choisir une couleur de fond",
      id: "background",
      body: [
        "Puisque la transparence doit devenir quelque chose, l'outil reprend par défaut, automatiquement, la couleur trouvée sur les bords de l'image elle-même, ce qui évite le rectangle blanc bien visible autour d'un sujet qui n'a jamais été prévu pour un fond blanc. Vous pouvez toujours choisir le blanc, le noir ou une couleur personnalisée, ce qui est utile quand l'image sera posée sur une interface sombre ou une carte colorée.",
        "Une réserve : la transparence des PNG est souvent lissée, c'est-à-dire que les pixels du contour sont partiellement transparents. Ils se mélangent à la couleur choisie : une image préparée pour un fond blanc puis remplie de noir peut donc montrer un liseré clair. Dans ce cas, la solution la plus propre est de réexporter l'original sur le bon fond plutôt que de lutter ici.",
      ],
    },
  ],

  howToTitle: "Comment convertir PNG en JPG",
  steps: [
    { title: "Importez vos PNG", description: "Sélectionnez une ou plusieurs images PNG, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Réglez qualité et fond", description: "Choisissez la qualité du JPG et la couleur qui remplit les zones transparentes." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir » : un PNG se télécharge en JPG, plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "PNG → JPG en masse", description: "Convertissez de nombreux PNG en JPG d'un coup et récupérez-les tous dans un seul ZIP : idéal pour alléger un dossier de captures d'écran." },
    { icon: "compress", title: "Des fichiers plus légers", description: "Pour les photos, le JPG est bien plus léger que le PNG. Ajustez le curseur de qualité pour atteindre le poids voulu." },
    { icon: "lock", title: "Privé et instantané", description: "Tout est traité localement dans votre navigateur : vos PNG ne quittent jamais votre appareil." },
  ],

  faqs: [
    { q: "Pourquoi convertir PNG en JPG ?", a: "Pour les images photographiques, les fichiers JPG sont bien plus légers : ils s'importent, s'envoient par e-mail et se chargent sur le web plus vite." },
    { q: "Que deviennent les zones transparentes du PNG ?", a: "Le JPG ne peut pas stocker la transparence : les pixels transparents sont donc remplis d'une couleur de fond. Par défaut, nous reprenons automatiquement la couleur des bords de l'image ; choisissez le blanc, le noir ou une couleur personnalisée si vous préférez autre chose." },
    { q: "Puis-je convertir plusieurs PNG à la fois ?", a: "Oui. Ajoutez autant de PNG que vous voulez : plusieurs fichiers se téléchargent ensemble dans une archive ZIP." },
    { q: "La conversion réduit-elle la qualité ?", a: "Le JPG est avec perte, mais à 90 % de qualité ou plus, la différence est généralement invisible alors que le fichier est nettement plus léger." },
    { q: "De combien le JPG sera-t-il plus léger ?", a: "Pour les photos, généralement de 60 à 90 %. Une photo PNG de 4 Mo pèse couramment entre 300 Ko et 1 Mo en JPG. Les visuels en aplats et les captures d'écran y gagnent bien moins, et peuvent parfois grossir : ce sont justement les cas où le PNG était déjà le bon format." },
    { q: "Faut-il convertir les captures d'écran de PNG en JPG ?", a: "En général, non. La compression JPG fonctionne mal sur les contours nets et le petit texte, avec un léger halo autour des lettres, et les captures d'écran finissent souvent à la fois plus floues et pas plus légères. Compressez plutôt le PNG ou convertissez-le en WEBP." },
    { q: "Puis-je reconvertir le JPG en PNG plus tard ?", a: "Vous pouvez changer de conteneur, mais pas récupérer ce qui a été supprimé. L'étape JPG retire définitivement des détails, et le retour en PNG ne fait que stocker sans perte l'image dégradée. Gardez le PNG d'origine si vous risquez de devoir le retoucher." },
    { q: "Pourquoi mon JPG converti est-il plus lourd que le PNG ?", a: "Parce que l'image est du type que le PNG gère le mieux : peu de couleurs distinctes, des aplats, des contours nets. Le PNG compresse cela de façon extrêmement efficace, alors que le JPG doit stocker le détail qu'il croit voir sur chaque contour. Les logos et les schémas sont les coupables habituels." },
    { q: "« png to jpg », c'est le même outil ?", a: "Oui. Beaucoup de gens tapent la recherche en anglais, « png to jpg », mais il s'agit exactement de la même conversion : PNG en JPG, gratuitement et dans votre navigateur." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. La conversion PNG en JPG se fait entièrement dans votre navigateur avec HTML canvas ; vos fichiers restent sur votre appareil, ce qui est aussi la solution la plus simple vis-à-vis du RGPD." },
  ],

  security:
    "Vos images restent privées. La conversion PNG en JPG se fait entièrement dans votre navigateur avec HTML canvas : rien n'est envoyé. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // Drop hint from app/png-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG images here": "ou déposez ici des images PNG",
  },
};

export default content;
