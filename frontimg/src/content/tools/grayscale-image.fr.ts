import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/photo-noir-et-blanc.
 *
 * Primary query « Photo en noir et blanc » (5.4K/mo); secondary « mettre une
 * photo en noir et blanc ». « Niveaux de gris » is the technical term and is
 * used in the body where precision matters.
 */
const content: ToolPageContent = {
  toolId: "grayscale-image",
  locale: "fr",
  name: "Photo en noir et blanc",
  tagline:
    "Convertissez vos images en niveaux de gris (noir et blanc) en ligne, avec une intensité réglable, un aperçu en direct et le traitement par lot. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Photo en noir et blanc – gratuit et en ligne | oMyImage",
  metaDescription:
    "Photo en noir et blanc en un clic : mettez une photo en noir et blanc en ligne, réglez l'intensité et traitez plusieurs images d'un coup. Gratuit.",

  intro:
    "Donnez à vos photos l'allure intemporelle du noir et blanc. L'outil Photo en noir et blanc d'oMyImage retire la couleur de n'importe quelle image directement dans votre navigateur, avec un curseur d'intensité qui va d'un léger effet délavé à une conversion monochrome complète. Mettez une photo en noir et blanc ou traitez tout un lot, puis téléchargez le résultat immédiatement : rien n'est envoyé sur un serveur, vos images restent donc privées.",

  sections: [
    {
      heading: "Ce que fait réellement la conversion",
      id: "how",
      body: [
        "Une image en couleur enregistre trois nombres par pixel : rouge, vert et bleu. Une image en niveaux de gris n'en garde qu'un seul : la luminosité. La conversion doit donc décider de la part de chaque canal dans cette valeur unique, et la réponse n'est pas un partage égal, car la vision humaine n'est pas aussi sensible aux trois couleurs.",
        "À intensité égale, nous percevons le vert comme bien plus lumineux que le bleu. La pondération standard s'appuie donc fortement sur le vert, modérément sur le rouge et très peu sur le bleu. Faire la moyenne des trois canaux à parts égales est l'approche naïve, et elle donne des résultats nettement ternes : ciels trop clairs, feuillages trop sombres.",
        "Conséquence à connaître : deux couleurs très différentes peuvent donner exactement le même gris. La luminosité n'a qu'une dimension là où la couleur en avait trois, si bien que de l'information est réellement perdue, pas simplement mise de côté.",
      ],
    },
    {
      heading: "Pourquoi le noir et blanc fait parfois une meilleure photo",
      id: "aesthetics",
      body: [
        "Supprimer la couleur, c'est supprimer une distraction. Il reste la composition, le contraste, la texture et la lumière, ce qui explique pourquoi le portrait et la photographie documentaire n'ont jamais abandonné le monochrome. Un arrière-plan encombré de couleurs qui se disputent l'attention devient souvent apaisé en niveaux de gris, et un visage gagne en structure dès que la carnation cesse de dominer.",
        "Le noir et blanc sauve aussi les photos aux couleurs ratées. Un éclairage mixte, la lumière du jour par une fenêtre et des ampoules à incandescence au plafond, produit des dominantes difficiles à corriger et immédiatement visibles. En niveaux de gris, le problème n'existe tout simplement plus.",
        "Les images qui y perdent sont celles où la couleur portait le sens : un coucher de soleil, un produit dont l'argument est justement d'exister en bleu canard, un graphique codé par couleur selon les catégories. Si la couleur est le sujet, la conversion jette le sujet.",
      ],
    },
    {
      heading: "Documents, numérisations et poids du fichier",
      id: "documents",
      body: [
        "Photographier un document avec un téléphone produit une image en couleur de ce qui n'est, au fond, que du texte noir sur papier blanc : trois canaux dépensés pour enregistrer ce qui n'en demandait qu'un. Mettre la photo en noir et blanc divise généralement le poids du fichier par deux, parfois davantage, sans aucune perte de lisibilité.",
        "Le résultat est aussi plus propre. Les photos de papier prises au téléphone récupèrent la dominante de la lumière ambiante : la page sort légèrement jaune, bleue ou verte selon l'ampoule. Les niveaux de gris éliminent complètement ce défaut et donnent un aspect homogène à des pages photographiées à des jours différents.",
        "Cela se combine très bien avec la création d'un PDF : convertissez d'abord en niveaux de gris, puis assemblez le document, et le résultat ne pèse qu'une fraction de la version en couleur. C'est souvent ce qui fait la différence entre passer sous la limite d'envoi d'un portail en ligne ou non.",
      ],
    },
    {
      heading: "Impression et accessibilité",
      id: "print",
      body: [
        "Convertir vous-même plutôt que laisser faire le pilote de l'imprimante vous permet de maîtriser la façon dont les tons sont traduits. Cela évite aussi un désagrément très concret : beaucoup d'imprimantes de bureau facturent au tarif couleur toute page qui contient de la couleur, si bien qu'un seul logo coloré transforme un document entier en impression couleur.",
        "Il y a aussi un enjeu d'accessibilité. Regarder votre travail en niveaux de gris est le test le plus rapide pour savoir s'il repose uniquement sur la couleur pour transmettre une information. Si un graphique devient illisible, ou si un champ obligatoire d'un formulaire ne se distingue plus, c'est exactement ce que vit un lecteur daltonien. La solution consiste alors à ajouter une étiquette, un motif ou une forme, plutôt qu'à changer de palette.",
      ],
    },
  ],

  howToTitle: "Comment mettre une photo en noir et blanc",
  steps: [
    { title: "Importer", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Régler l'intensité", description: "Utilisez le curseur pour un noir et blanc complet ou une désaturation partielle, avec un aperçu en direct." },
    { title: "Convertir et télécharger", description: "Cliquez sur « Noir et blanc et télécharger » : une image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "filter_b_and_w", title: "Intensité réglable", description: "Passez en noir et blanc complet ou désaturez partiellement avec un curseur fluide de 0 à 100 % et un aperçu instantané." },
    { icon: "burst_mode", title: "Conversion par lot", description: "Appliquez le même noir et blanc à tout un lot d'images JPG, PNG ou WEBP et téléchargez-les dans un ZIP." },
    { icon: "lock", title: "100 % privé", description: "Tout fonctionne dans votre navigateur avec un canvas HTML : vos images ne sont jamais envoyées sur un serveur." },
  ],

  faqs: [
    { q: "À quoi sert le curseur d'intensité ?", a: "À 100 %, l'image est entièrement en noir et blanc ; des valeurs plus basses mélangent les couleurs d'origine avec du gris pour un effet délavé, partiellement désaturé." },
    { q: "Puis-je mettre plusieurs photos en noir et blanc d'un coup ?", a: "Oui. Ajoutez-en autant que vous voulez : une seule image se télécharge directement, plusieurs images se téléchargent ensemble dans un ZIP." },
    { q: "Quels formats sont pris en charge ?", a: "JPG, PNG et WEBP, et vous pouvez choisir le format de sortie indépendamment du format d'entrée." },
    { q: "L'outil est-il gratuit et privé ?", a: "Oui. Sans inscription et sans filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "Le noir et blanc réduit-il le poids du fichier ?", a: "En général oui, parfois de façon spectaculaire. Sans l'information de couleur, l'encodeur a moins à stocker : un PNG peut notamment perdre la moitié de son poids, voire plus. Pour les documents photographiés et les numérisations, c'est l'un des moyens les plus simples de gagner de la place." },
    { q: "Noir et blanc et niveaux de gris, est-ce la même chose ?", a: "Pas tout à fait, même si les deux termes sont employés indifféremment. Les niveaux de gris conservent 256 nuances du noir au blanc. Le vrai noir et blanc, c'est un bit par pixel : noir pur ou blanc pur, sans rien entre les deux. C'est ce que produisent les fax et certains scanners, et le rendu est très différent." },
    { q: "Puis-je récupérer les couleurs ensuite ?", a: "Non. La conversion en niveaux de gris supprime définitivement les canaux de couleur, alors gardez l'original si vous pourriez en avoir besoin. Cet outil travaille sur une copie et ne modifie jamais le fichier présent sur votre disque, mais l'image exportée en noir et blanc est un résultat sans retour." },
    { q: "Pourquoi certaines couleurs deviennent-elles le même gris ?", a: "Parce que les niveaux de gris mesurent la luminosité, pas la teinte. Un rouge saturé et un vert saturé peuvent avoir une luminosité perçue presque identique, et ils se confondent alors en un gris quasiment pareil. C'est pour cela qu'un graphique coloré peut devenir illisible en noir et blanc : les catégories n'étaient distinguées que par la teinte." },
    { q: "Est-ce utile pour l'impression ?", a: "Souvent. En convertissant vous-même, vous décidez de la traduction des tons au lieu de vous en remettre au pilote de l'imprimante. Vous évitez aussi de payer une impression couleur pour un document qui ne contient qu'un logo coloré en première page." },
    { q: "Puis-je convertir un lot entier en noir et blanc ?", a: "Oui. Ajoutez autant d'images que vous le souhaitez : elles sont toutes converties, puis rendues dans un seul ZIP. C'est le cas classique d'une série de pages numérisées ou d'une galerie homogène." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non. La conversion en noir et blanc se fait entièrement dans votre navigateur ; vos photos ne quittent jamais votre appareil, ce qui est aussi la façon la plus simple de rester en accord avec le RGPD lorsque vous traitez des images de personnes ou des documents." },
  ],

  security:
    "Vos images restent privées. La conversion en noir et blanc se fait entièrement dans votre navigateur avec un canvas HTML : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // GrayscaleTool.tsx
    "Please select image files.": "Sélectionnez des fichiers image.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "Clear files": "Effacer les fichiers",
    "Remove": "Retirer",
    "Live preview of": "Aperçu en direct de",
    "Grayscale Settings": "Réglages du noir et blanc",
    "Grayscale settings": "Réglages du noir et blanc",
    "Intensity": "Intensité",
    "100% = fully black & white. Lower values desaturate partially.":
      "100 % = noir et blanc complet. Des valeurs plus basses désaturent partiellement.",
    "— applied to all {n} images.": "— appliqué aux {n} images.",
    "Output format": "Format de sortie",
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    "Convert": "Convertir",
    "Converting…": "Conversion…",
    "Grayscale {n} images": "Mettre {n} images en noir et blanc",
    "Grayscale & download": "Noir et blanc et télécharger",
    "Converted 1 image to grayscale.": "1 image convertie en niveaux de gris.",
    "Converted {n} images to grayscale.": "{n} images converties en niveaux de gris.",
    "Grayscale failed.": "Échec de la conversion en niveaux de gris.",
    "done": "terminé",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
  },
};

export default content;
