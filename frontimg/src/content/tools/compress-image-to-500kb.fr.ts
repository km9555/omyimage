import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-500ko (variant of compress-image,
 * 500 Ko). Target query: «Compresser une image à 500 Ko»; secondary «réduire
 * une photo à 500 Ko». Angle: un demi-mégaoctet, c'est généreux — photos quasi
 * identiques, captures d'écran nettes, images de sites web et envoi par e-mail.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-500kb",
  locale: "fr",
  name: "Compresser une image à 500 Ko",
  tagline:
    "Compressez photos, captures d'écran et scans sous 500 Ko sans perte visible, pour les portails de dépôt, l'e-mail, les sites de petites annonces et les sites web. Des lots entiers d'un coup, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 500 Ko – sans perte | oMyImage",
  metaDescription:
    "Compresser une image à 500 Ko sans inscription : photos et captures restent nettes. Réduisez une photo à 500 Ko pour un site, un portail ou un e-mail.",

  intro:
    "500 Ko — un demi-mégaoctet — est la limite de dépôt de nombreux portails d'emploi et d'enseignement, de boutiques en ligne, de forums et d'espaces numériques scolaires, et un plafond raisonnable pour les images d'un site web. C'est un budget généreux : la plupart des photos reviennent identiques à l'original, pour une fraction de leur poids. Pour réduire une photo à 500 Ko, ajoutez une image ou cent : chacune est enregistrée en JPG de moins de 500 Ko, avec la meilleure qualité qui rentre.",

  sections: [
    {
      heading: "Un demi-mégaoctet, c'est largement assez",
      id: "plenty",
      body: [
        "Une photo de téléphone de 12 mégapixels pèse en général de 3 à 5 Mo. Sous 500 Ko, elle garde le plus souvent environ 2000 × 1500 pixels ou davantage, avec une qualité où l'on ne voit aucune différence sur l'écran d'un téléphone ou d'un ordinateur portable. Les textures fines — herbe, gravier, chemise à motifs — sont les plus difficiles à compresser ; l'outil ne réduit les dimensions de ces photos que s'il n'a pas le choix.",
        "Comme la limite est large, inutile de recadrer ou de préparer la photo avant. Ajoutez-la telle quelle.",
      ],
    },
    {
      heading: "Captures d'écran et texte restent nets",
      id: "screenshots",
      body: [
        "Les captures d'écran sont souvent enregistrées en PNG, ce qui peut atteindre plusieurs mégaoctets pour un écran entier. Converties en JPG sous 500 Ko, elles gardent un texte net en pleine taille : la capture d'un ticket de caisse, d'une conversation ou d'un message d'erreur reste facile à lire.",
        "Pour les captures composées surtout d'aplats de couleur et de texte — un document, une page de réglages —, le WEBP garde un texte encore plus propre pour le même poids. Choisissez WEBP dans le réglage du format si le site où vous déposez le fichier l'accepte.",
      ],
    },
    {
      heading: "Des images pour sites web et boutiques en ligne",
      id: "websites",
      body: [
        "Chaque image d'une page web doit être téléchargée avant de s'afficher : les photos lourdes ralentissent donc les pages, surtout en données mobiles. 500 Ko est un maximum raisonnable pour une grande bannière ou une photo produit ; les petites images, comme les vignettes, devraient peser bien moins.",
        "Les photos produit destinées aux places de marché conviennent aussi très bien à cette limite : elles gardent assez de détails pour que les clients zooment sur la matière et les étiquettes, tout en se chargeant vite.",
      ],
    },
    {
      heading: "Plusieurs fichiers à la fois",
      id: "batch",
      body: [
        "Ajoutez un dossier entier — une série de photos produit, les images d'une annonce, un album à envoyer par e-mail — et chaque image est compressée sous 500 Ko en une seule fois. Téléchargez-les une par une ou ensemble dans un ZIP. Les images qui sont déjà des JPG de moins de 500 Ko ne sont pas modifiées.",
      ],
    },
    {
      heading: "Envoyer des photos par e-mail",
      id: "email",
      body: [
        "La plupart des messageries limitent les pièces jointes à 20–25 Mo environ par message, et une pièce jointe grossit d'environ un tiers à l'envoi, car l'e-mail l'encode sous forme de texte. Dix photos de téléphone de 4 Mo chacune ne passeront pas ; les mêmes dix photos à 500 Ko font un message d'environ 7 Mo que toutes les messageries acceptent.",
        "Votre destinataire reçoit quand même des photos assez grandes pour être vues en plein écran et imprimées au format carte postale, sans attendre un énorme téléchargement.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 500 Ko",
  steps: [
    { title: "Ajoutez vos images", description: "Sélectionnez ou déposez une ou plusieurs photos, captures d'écran ou scans : JPG, PNG ou WEBP." },
    { title: "Compressez sous 500 Ko", description: "La limite de 500 Ko est déjà réglée ; choisissez JPG ou WEBP." },
    { title: "Téléchargez", description: "Téléchargez chaque image, ou toutes ensemble dans un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Aucune perte visible", description: "Avec un demi-mégaoctet à disposition, les photos gardent leur rendu et l'essentiel de leur résolution." },
    { icon: "screenshot_monitor", title: "Captures d'écran nettes", description: "Les grosses captures PNG deviennent de petits fichiers JPG ou WEBP au texte lisible." },
    { icon: "lock", title: "Confidentiel", description: "La compression se fait dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une image à 500 Ko ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 500 Ko est déjà réglée. Vous obtenez un JPG de moins de 500 Ko avec la meilleure qualité possible." },
    { q: "Verrai-je une différence à 500 Ko ?", a: "En général, non. Pour la plupart des photos, 500 Ko suffisent pour qu'elles paraissent identiques à l'original sur un écran de téléphone ou d'ordinateur." },
    { q: "500 Ko, est-ce une bonne taille pour les images d'un site web ?", a: "Comme maximum pour les grandes bannières et les photos produit, oui. Les petites images comme les vignettes devraient rester bien en dessous de 100 Ko." },
    { q: "Faut-il choisir JPG ou WEBP ?", a: "Le JPG fonctionne partout. Le WEBP offre une qualité un peu meilleure pour le même poids et convient aux sites web, mais certains formulaires et anciennes applications ne l'acceptent pas." },
    { q: "500 Ko, est-ce la même chose que 0,5 Mo ?", a: "Oui. 500 Ko correspondent à 500 000 octets, soit un demi-mégaoctet. Le fichier respecte aussi la limite des sites qui comptent 1 Ko comme 1 024 octets." },
    { q: "Le petit texte d'une capture d'écran reste-t-il lisible ?", a: "Oui. À 500 Ko, une capture plein écran garde sa résolution complète dans presque tous les cas, donc le texte est aussi net que l'original." },
    { q: "Puis-je compresser 50 photos à 500 Ko chacune en une fois ?", a: "Oui. Ajoutez-les toutes ensemble ; chacune revient sous 500 Ko et vous pouvez les télécharger dans un seul fichier ZIP." },
    { q: "Combien de photos de 500 Ko puis-je envoyer dans un seul e-mail ?", a: "Avec une limite courante de 25 Mo, environ 35 à 40, car les pièces jointes grossissent d'environ un tiers pendant l'envoi. Au-delà, envoyez plusieurs messages ou partagez plutôt un lien." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non pour des photos de taille normale : tout se passe dans votre navigateur. Seule une image de plus de 16 mégapixels environ passe par notre serveur, qui la supprime au bout d'une heure environ." },
  ],

  security:
    "Photos, captures d'écran et scans sont compressés sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni conservé. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur et y est supprimée au bout d'une heure environ.",
};

export default content;
