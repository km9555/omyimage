import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-1mo (variant of compress-image,
 * 1 Mo). Target query: «Compresser une image à 1 Mo»; secondary «réduire une
 * photo à 1 Mo». Angle: à 1 Mo une photo de téléphone garde le plus souvent
 * sa résolution COMPLÈTE — la page « faire rentrer sans rapetisser ».
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-1mb",
  locale: "fr",
  name: "Compresser une image à 1 Mo",
  tagline:
    "Compressez vos photos de téléphone sous 1 Mo, le plus souvent sans perdre un seul pixel de résolution. Pour les portails de dépôt, l'e-mail et les messageries — gratuit, par lots et en toute confidentialité dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 1 Mo – pleine résolution | oMyImage",
  metaDescription:
    "Compresser une image à 1 Mo en gardant le plus souvent la pleine résolution. Réduisez une photo à 1 Mo pour un portail ou un e-mail, sans inscription.",

  intro:
    "Une photo prise avec un téléphone récent pèse de 3 à 8 Mo, et bien des services refusent tout ce qui dépasse 1 Mo : portails en ligne et plateformes d'apprentissage, forums et petites annonces, tickets d'assistance, anciennes messageries. Contrairement aux limites strictes de 20 ou 50 Ko, 1 Mo suffit pour garder une photo en pleine résolution : il faut seulement stocker le fichier plus efficacement. Pour réduire une photo à 1 Mo, ajoutez vos images ; chacune revient en JPG de moins de 1 Mo, en taille réelle chaque fois que c'est possible et à peine plus petite sinon.",

  sections: [
    {
      heading: "Pourquoi les photos de téléphone pèsent 3 à 8 Mo",
      id: "why-big",
      body: [
        "Les appareils photo des téléphones enregistrent leurs JPG avec une qualité très élevée, souvent 90 à 95 %, pour que rien ne soit perdu avant la retouche. À 12 mégapixels et plus, cette qualité coûte plusieurs mégaoctets par photo, dont une grande partie sert au bruit du capteur et à des textures fines invisibles à taille d'affichage normale.",
        "Réenregistrer la photo avec une qualité légèrement inférieure supprime l'essentiel de ce gaspillage. Pour une photo typique de 12 mégapixels, passer sous 1 Mo demande une qualité d'environ 75 à 85 % — une différence qu'on peine à repérer côte à côte — et les 4000 × 3000 pixels sont conservés.",
      ],
    },
    {
      heading: "Quand 1 Mo ne suffit pas pour la taille réelle",
      id: "when-shrinks",
      body: [
        "Les scènes très détaillées — feuillage, gravier, foules, photos de nuit pleines de bruit — et les photos de 48 ou 50 mégapixels peuvent dépasser 1 Mo même avec une qualité moyenne. L'outil réduit alors aussi un peu les dimensions, en choisissant la plus grande taille qui rentre plutôt qu'un préréglage fixe : une photo peut ainsi sortir à 3200 pixels de large au lieu de 4000.",
        "C'est encore bien plus de résolution que n'en affiche n'importe quel écran ou aperçu de dépôt. La liste des résultats vous signale chaque image redimensionnée, rien ne change donc à votre insu.",
      ],
    },
    {
      heading: "Où l'on croise une limite de 1 Mo",
      id: "where",
      body: [
        "Les candidatures en ligne qui acceptent des photos complètes plutôt que des photos d'identité, les plateformes pédagogiques des écoles et universités, les portails de services publics, les forums, les annonces de places de marché et les outils d'assistance plafonnent souvent les pièces jointes à 1 ou 2 Mo. Beaucoup de messageries peinent aussi dès qu'un message dépasse 10 à 20 Mo, soit trois ou quatre photos de téléphone non compressées seulement.",
        "Compresser un lot à 1 Mo par photo avant de les joindre permet de rester dans ces limites sans modifier visiblement les images.",
      ],
    },
    {
      heading: "1 Mo, 1000 Ko ou 1024 Ko ?",
      id: "units",
      body: [
        "Certains sites écrivent la limite 1 Mo, d'autres 1000 Ko ou 1024 Ko. Cet outil garde le fichier sous 1 000 000 octets, la lecture la plus stricte des trois, si bien qu'il passe partout. Votre ordinateur peut afficher le résultat comme environ 0,95 Mo : ce petit écart est la marge de sécurité.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 1 Mo",
  steps: [
    { title: "Ajoutez vos photos", description: "Sélectionnez ou déposez des photos JPG, PNG ou WEBP directement issues de votre téléphone ou de votre appareil photo." },
    { title: "Compressez sous 1 Mo", description: "La limite de 1 Mo est déjà réglée ; passez-la à 2 Mo ou 500 Ko si votre site demande autre chose." },
    { title: "Téléchargez", description: "Chaque photo revient sous 1 Mo, en pleine résolution chaque fois que c'est possible." },
  ],

  features: [
    { icon: "photo_camera", title: "Pleine résolution conservée", description: "La plupart des photos de téléphone tiennent sous 1 Mo sans perdre un pixel : seule la qualité superflue disparaît." },
    { icon: "speed", title: "Lots rapides", description: "Compressez un album entier d'un coup ; chaque photo est traitée séparément et le lot se télécharge en ZIP." },
    { icon: "lock", title: "Vos photos restent privées", description: "Vos images sont traitées dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une photo à 1 Mo ?", a: "Ajoutez la photo et cliquez sur « Compresser » : la limite de 1 Mo est déjà réglée. Le fichier téléchargé est un JPG de moins de 1 Mo, avec la meilleure qualité qui rentre." },
    { q: "Une photo de 1 Mo s'imprime-t-elle encore bien ?", a: "Oui, aux formats d'impression courants. Quand une photo garde sa pleine résolution sous 1 Mo, elle s'imprime comme l'original en format carte postale et en A4." },
    { q: "Combien de pixels peut avoir une photo de 1 Mo ?", a: "Le plus souvent les 12 mégapixels complets d'une photo de téléphone, soit environ 4000 × 3000. Les photos très détaillées ou de très haute résolution peuvent être ramenées à environ 3000 pixels de large pour rentrer." },
    { q: "Puis-je compresser une photo de 10 Mo à 1 Mo ?", a: "Oui. Les gros fichiers ne posent pas de problème : l'outil les décode dans votre navigateur et trouve la meilleure qualité et la meilleure taille sous 1 Mo." },
    { q: "La compression à 1 Mo supprime-t-elle la localisation ?", a: "Pour chaque photo réenregistrée, oui : un nouveau JPG ne contient aucune métadonnée EXIF, position GPS comprise. Un JPG déjà sous 1 Mo vous est rendu intact, métadonnées comprises ; pour en retirer la localisation, utilisez « Supprimer les métadonnées »." },
    { q: "Puis-je compresser des captures d'écran à 1 Mo ?", a: "Oui. Les captures sont souvent en PNG et peuvent être étonnamment lourdes ; elles sont converties en JPG de moins de 1 Mo, les zones transparentes étant remplies de blanc." },
    { q: "1 Mo, est-ce la même chose que 1000 Ko ?", a: "Dans les unités qu'utilisent la plupart des sites, oui. L'outil garde les fichiers sous 1 000 000 octets, ils passent donc aussi une limite écrite 1024 Ko." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non, pour des photos de taille normale : la compression a lieu dans votre navigateur. Seule une image de plus de 16 mégapixels environ passe par notre serveur, qui la supprime au bout d'une heure environ." },
  ],

  security:
    "Vos photos restent sur votre appareil. La compression à 1 Mo se fait dans votre navigateur : rien n'est envoyé, conservé ni partagé. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur et y est supprimée au bout d'une heure environ.",
};

export default content;
