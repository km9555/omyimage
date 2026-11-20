import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-300ko (variant of compress-image,
 * 300 Ko). Target query: «Compresser une image à 300 Ko»; secondary «réduire
 * une photo à 300 Ko». Angle: documents — carte d'identité, diplômes, relevés
 * de notes qui restent lisibles pour les portails d'inscription et d'emploi.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-300kb",
  locale: "fr",
  name: "Compresser une image à 300 Ko",
  tagline:
    "Compressez photos et scans de documents sous 300 Ko sans que le texte devienne illisible : cartes d'identité, diplômes, relevés de notes et lettres pour les portails d'inscription et de recrutement. Plusieurs fichiers à la fois, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 300 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 300 Ko sans inscription : cartes d'identité, diplômes et scans restent lisibles. Réduisez une photo à 300 Ko pour vos dossiers.",

  intro:
    "300 Ko est une limite fréquente pour l'envoi de pièces justificatives : la carte d'identité, le titre de séjour, le livret de famille, le diplôme, le relevé de notes ou la lettre de recommandation que demandent les portails d'inscription, de bourses et de recrutement. C'est assez de place pour qu'une page entière reste lisible — petits caractères, tampons et signatures compris — à condition que la photo de la page soit bonne. Si vous devez réduire une photo à 300 Ko, ajoutez tous vos documents d'un coup : chacun revient sous forme de JPG de moins de 300 Ko.",

  sections: [
    {
      heading: "Des pages entières qui restent lisibles",
      id: "pages",
      body: [
        "Une page A4 photographiée au téléphone pèse en général de 3 à 6 Mo. À 300 Ko, cette même page conserve environ 1600 × 2260 pixels : assez de netteté pour lire les plus petits caractères d'un relevé de notes à 100 % de zoom. L'outil consacre d'abord le budget aux détails et ne réduit les dimensions que si une page est exceptionnellement chargée.",
        "Posez la feuille bien à plat sur une table sombre, photographiez-la exactement par-dessus, à la lumière du jour, pour éviter les ombres, puis recadrez la table avant de compresser. Une application de numérisation qui redresse la page aide aussi beaucoup.",
      ],
    },
    {
      heading: "Carte d'identité : recadrez au format de la carte",
      id: "id-cards",
      body: [
        "Une carte d'identité est petite, si bien que sa photo montre surtout la table. Recadrez jusqu'aux bords de la carte : elle tient alors sous 300 Ko avec une qualité très élevée, et la photo, le numéro et les détails de l'hologramme restent nets.",
        "Si le portail demande le recto et le verso, faites deux images et compressez-les ensemble ; chacune revient sous 300 Ko. S'il veut les deux faces dans un seul fichier, placez-les d'abord sur une même page avec l'outil « Fusionner des images ».",
      ],
    },
    {
      heading: "Couleur ou noir et blanc ?",
      id: "colour",
      body: [
        "Gardez diplômes et pièces d'identité en couleur : les tampons, cachets et photos en couleur font partie de ce qui les rend valables, et certains portails refusent les documents qui ressemblent à des photocopies. Pour une simple lettre dactylographiée ou un formulaire imprimé, le noir et blanc suffit et laisse davantage de budget pour un texte net.",
      ],
    },
    {
      heading: "Quand le portail exige un PDF",
      id: "pdf",
      body: [
        "Certains portails n'acceptent les pièces justificatives qu'au format PDF. Compressez d'abord ici les images des pages, puis assemblez-les avec l'outil « Image en PDF ». Le PDF pèse à peu près la somme des images que vous y mettez, donc un document d'une page reste sous 300 Ko.",
        "Si la limite de 300 Ko s'applique à un document de plusieurs pages dans son ensemble, fixez ici une limite plus basse par page — pour trois pages, environ 90 Ko chacune — afin que le PDF final rentre lui aussi.",
      ],
    },
    {
      heading: "Une dernière vérification avant l'envoi",
      id: "checklist",
      body: [
        "Avant de cliquer sur « Envoyer », ouvrez chaque fichier et vérifiez que chaque ligne se lit, qu'aucun bord de la page n'est coupé, que les tampons et signatures sont visibles et que le document est dans le bon sens. Nommez les fichiers comme le portail le demande — beaucoup refusent les espaces, les accents ou la ponctuation dans les noms — et conservez les originaux, car un autre dossier peut exiger une limite différente.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 300 Ko",
  steps: [
    { title: "Ajoutez vos documents", description: "Sélectionnez ou déposez vos photos et scans de documents : JPG, PNG ou WEBP." },
    { title: "Compressez sous 300 Ko", description: "La limite de 300 Ko est déjà réglée ; chaque fichier est compressé jusqu'à ce qu'il rentre." },
    { title: "Téléchargez le lot", description: "Téléchargez chaque fichier séparément ou tous ensemble dans un ZIP." },
  ],

  features: [
    { icon: "description", title: "Documents lisibles", description: "Les pages entières gardent assez de pixels pour lire les petits caractères, les tampons et les signatures." },
    { icon: "picture_as_pdf", title: "Prêt pour un PDF", description: "Compressez les pages ici, puis réunissez-les avec « Image en PDF » pour les portails qui veulent un seul fichier." },
    { icon: "lock", title: "Confidentiel", description: "Vos pièces d'identité sont compressées dans votre navigateur, sans envoi sur un serveur." },
  ],

  faqs: [
    { q: "Comment compresser la photo d'un document à 300 Ko ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 300 Ko est déjà réglée. Recadrez d'abord la table autour de la feuille pour obtenir le résultat le plus net." },
    { q: "Le texte reste-t-il lisible à 300 Ko ?", a: "Oui. Une page A4 entière conserve environ 1600 × 2260 pixels à 300 Ko, assez pour lire de petits caractères à 100 % de zoom." },
    { q: "Comment compresser le recto et le verso de ma carte d'identité ?", a: "Photographiez les deux faces séparément, recadrez chacune à la carte et ajoutez les deux images. Chacune revient sous 300 Ko." },
    { q: "Puis-je obtenir un PDF de moins de 300 Ko ?", a: "Pour une page, oui : compressez l'image ici, puis transformez-la en PDF avec « Image en PDF ». Pour plusieurs pages, donnez à chacune une limite plus basse afin que le total reste sous 300 Ko." },
    { q: "300 Ko, est-ce la même chose que 0,3 Mo ?", a: "Oui. 300 Ko correspondent à 300 000 octets, soit 0,3 Mo. Le fichier respecte aussi la limite des portails qui comptent 1 Ko comme 1 024 octets." },
    { q: "Pourquoi mon scan paraît-il gris après la compression ?", a: "Le gris vient de la photo d'origine, presque toujours d'ombres ou d'un éclairage intérieur. Photographiez la page à la lumière du jour, sans ombre, et compressez de nouveau." },
    { q: "300 Ko suffisent-ils aussi pour une photo de profil ?", a: "Largement. Un portrait de moins de 300 Ko s'affiche à l'écran pratiquement comme l'original." },
    { q: "Puis-je compresser un PDF ou un fichier Word ici ?", a: "Non : cet outil traite les images (JPG, PNG et WEBP). Photographiez la page ou faites une capture d'écran, compressez l'image ici et convertissez-la en PDF avec « Image en PDF » si le portail l'exige." },
    { q: "Mes pièces d'identité sont-elles envoyées sur un serveur ?", a: "Pas pour des photos de taille normale : la compression se fait dans votre navigateur. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet, passe par notre serveur, qui la supprime au bout d'une heure environ." },
  ],

  security:
    "Cartes d'identité, diplômes et photos sont compressés sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni conservé. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur et y est supprimée au bout d'une heure environ.",
};

export default content;
