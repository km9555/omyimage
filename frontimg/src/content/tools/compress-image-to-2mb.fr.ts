import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-2mo (variant of compress-image,
 * 2 Mo). Target query: «Compresser une image à 2 Mo»; secondary «réduire une
 * photo à 2 Mo». Angle: POURQUOI 2 Mo est partout (la limite PHP par défaut),
 * résolution complète, et que faire quand un site refuse encore le fichier.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-2mb",
  locale: "fr",
  name: "Compresser une image à 2 Mo",
  tagline:
    "Compressez les grosses photos de téléphone et d'appareil photo sous 2 Mo — en général en pleine résolution — pour les dépôts sur des sites, les formulaires, les forums et l'e-mail. Rapide, gratuit et confidentiel, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 2 Mo – gratuit et en ligne | oMyImage",
  metaDescription:
    "Compresser une image à 2 Mo sans inscription ni perte de résolution. Réduisez une photo à 2 Mo pour un formulaire, un forum ou un dépôt en ligne.",

  intro:
    "Les téléphones actuels prennent des photos de 3 à 12 Mo, et quantité de sites s'arrêtent encore à 2 Mo par fichier. Cette page compresse vos photos juste sous cette barre tout en les gardant aussi proches que possible de l'original : dans la plupart des cas, la pleine résolution est conservée et seul le surplus invisible disparaît. Pour réduire une photo à 2 Mo, ajoutez-en une ou tout un lot : chacune revient en JPG de moins de 2 Mo.",

  sections: [
    {
      heading: "Pourquoi tant de sites s'arrêtent à 2 Mo",
      id: "why-2mb",
      body: [
        "PHP, le langage qui fait tourner une grande partie des sites web, fixe par défaut une limite de dépôt de 2 Mo, et beaucoup de sites ne la modifient jamais. Voilà pourquoi le même chiffre revient sur les formulaires de contact, les portails d'emploi, les espaces scolaires, les forums et les sites de petites entreprises : la limite vient souvent de la configuration du serveur, pas d'une réflexion sur ce dont une photo a besoin.",
        "Le résultat pratique est le même : un fichier de 2,1 Mo est refusé, souvent avec un message d'erreur peu clair. Le compresser juste sous 2 Mo règle le problème sans rendre la photo plus petite à l'écran.",
      ],
    },
    {
      heading: "La pleine résolution, dans la plupart des cas",
      id: "full-res",
      body: [
        "Un JPG de 12 mégapixels en bonne qualité occupe environ 2 à 4 Mo. Pour passer sous 2 Mo, l'outil baisse d'abord un peu la qualité JPG — un changement imperceptible à taille d'affichage normale — et garde chaque pixel. Seules les photos très grandes ou très détaillées, comme les clichés de 48 ou 200 mégapixels, sont aussi réduites.",
        "Si une photo est déjà un JPG de moins de 2 Mo, elle vous est rendue sans modification.",
      ],
    },
    {
      heading: "Les grosses photos d'appareil photo",
      id: "camera",
      body: [
        "Les photos sorties directement d'un appareil photo ou du mode haute résolution d'un téléphone peuvent peser 15 à 30 Mo. Si l'une d'elles compte plus de pixels que votre navigateur ne peut en contenir d'un coup — les navigateurs mobiles ont les limites les plus basses —, elle est d'abord ouverte à une taille réduite, puis compressée sous 2 Mo. Dans tous les cas, le résultat fait encore plusieurs milliers de pixels de large, bien plus que ce qu'affiche un site.",
        "Les exports PNG des applications de retouche se comportent de la même manière : une photo PNG de 20 Mo devient un JPG de moins de 2 Mo sans changement visible.",
      ],
    },
    {
      heading: "Si un site refuse encore le fichier",
      id: "rejected",
      body: [
        "Certains sites comptent 2 Mo comme 2 000 000 octets, d'autres comme 2 097 152 ; l'outil reste sous 2 000 000, les deux l'acceptent donc. Si le dépôt échoue malgré tout, vérifiez les autres règles : les formats autorisés (certains n'acceptent que le JPG), une largeur ou une hauteur maximale, ou une limite sur le total de tous les fichiers plutôt que sur chacun.",
      ],
    },
    {
      heading: "Une photo de 2 Mo reste-t-elle bonne pour l'impression ?",
      id: "print",
      body: [
        "Oui, pour les tirages courants. Une photo de 12 mégapixels gardée en pleine résolution sous 2 Mo compte environ 4000 × 3000 pixels : assez pour un tirage net en 10 × 15 cm et pour un A4 de qualité laboratoire. La légère baisse de qualité JPG ne se voit pas sur le papier à distance de lecture normale.",
        "Pour les grands formats ou l'impression professionnelle, conservez et envoyez plutôt le fichier d'origine : la compression sert au dépôt et au partage, pas à l'archivage de vos photos.",
      ],
    },
  ],

  howToTitle: "Comment compresser une photo à 2 Mo",
  steps: [
    { title: "Ajoutez vos photos", description: "Sélectionnez ou déposez de grosses photos : JPG, PNG ou WEBP, une seule ou plusieurs." },
    { title: "Compressez sous 2 Mo", description: "La limite de 2 Mo est déjà réglée ; la qualité n'est baissée que du strict nécessaire." },
    { title: "Téléchargez et déposez", description: "Téléchargez les photos une par une ou dans un ZIP, prêtes à être envoyées." },
  ],

  features: [
    { icon: "photo_camera", title: "Résolution conservée", description: "La plupart des photos gardent tous leurs pixels ; seules les très grandes sont réduites." },
    { icon: "upload_file", title: "Respecte les limites de dépôt", description: "Chaque fichier finit sous 2 000 000 octets, accepté quelle que soit la façon dont un site compte les mégaoctets." },
    { icon: "lock", title: "Confidentiel", description: "Les photos sont compressées dans votre navigateur et ne partent jamais vers un serveur." },
  ],

  faqs: [
    { q: "Comment compresser une photo à 2 Mo ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 2 Mo est déjà réglée. Vous obtenez un JPG de moins de 2 Mo, en général à la résolution d'origine." },
    { q: "Pourquoi les sites limitent-ils les dépôts à 2 Mo ?", a: "Souvent parce que 2 Mo est la limite de dépôt par défaut de PHP et que beaucoup de sites gardent ce réglage. C'est un paramètre du serveur, pas un jugement sur votre photo." },
    { q: "Ma photo va-t-elle perdre en résolution ?", a: "En général, non. L'outil baisse légèrement la qualité JPG avant de toucher aux dimensions en pixels, et seules les très grandes photos sont réduites." },
    { q: "Puis-je compresser une photo de 20 Mo à 2 Mo ?", a: "Oui. Les grosses photos sont traitées dans votre navigateur et reviennent sous 2 Mo, avec encore plusieurs milliers de pixels de large." },
    { q: "2 Mo, est-ce 2000 Ko ou 2048 Ko ?", a: "Les deux conventions existent. L'outil garde le fichier sous 2 000 000 octets, donc sous la limite dans les deux cas." },
    { q: "Que se passe-t-il si ma photo fait déjà moins de 2 Mo ?", a: "Si c'est un JPG de moins de 2 Mo, vous récupérez l'original sans aucun changement." },
    { q: "Puis-je compresser plusieurs photos pour un même formulaire ?", a: "Oui. Ajoutez-les toutes ; chacune revient sous 2 Mo. Si le formulaire limite le total de tous les fichiers, choisissez plutôt une limite plus basse par photo." },
    { q: "Puis-je imprimer une photo après l'avoir compressée à 2 Mo ?", a: "Oui. La plupart des photos gardent leur pleine résolution, largement suffisante pour des tirages 10 × 15 cm et A4. Pour les posters ou un travail professionnel, imprimez à partir de l'original." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non, pour des photos de taille normale : tout se fait dans votre navigateur. Seule une image de plus de 16 mégapixels environ passe par notre serveur, qui la supprime au bout d'une heure environ." },
  ],

  security:
    "Les photos sont compressées sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni conservé. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur et y est supprimée au bout d'une heure environ.",
};

export default content;
