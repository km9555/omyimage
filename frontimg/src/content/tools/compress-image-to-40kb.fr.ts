import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-40ko (variant of compress-image,
 * preset targetKb 40). Primary query: « Compresser une image à 40 Ko »;
 * secondary: « réduire une photo à 40 Ko ». Angle: 40 Ko as the SAFE target
 * inside a « 20–50 Ko » photo range, digitising a printed studio photo, and
 * colour casts that get photos rejected.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-40kb",
  locale: "fr",
  name: "Compresser une image à 40 Ko",
  tagline:
    "Compressez une photo sous 40 Ko pour vos formulaires de candidature : un visage net et naturel à une limite exacte, et un choix sûr pour les champs photo « 20–50 Ko ». Gratuit, et tout se passe dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 40 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 40 Ko : une photo nette aux couleurs naturelles, idéale pour les champs « entre 20 et 50 Ko ». Réduisez une photo à 40 Ko sans l'envoyer.",

  intro:
    "40 Ko est une limite à part entière pour la photo sur de nombreux formulaires de candidature, et c'est aussi le chiffre raisonnable à viser quand un formulaire demande une photo « entre 20 Ko et 50 Ko » : nettement au-dessus du minimum, nettement en dessous du maximum. À ce poids, une photo de type identité conserve des tons de peau naturels et des détails nets autour des yeux. Ajoutez votre photo et vous obtenez un JPG de moins de 40 Ko, avec la meilleure qualité qui tienne dans cette limite — que ce soit pour un dossier universitaire, une candidature ou une démarche administrative en ligne.",

  sections: [
    {
      heading: "Une cible sûre dans une fourchette de 20 à 50 Ko",
      id: "inside-range",
      body: [
        "Viser tout en haut d'une fourchette est risqué : un fichier de 49,9 Ko sur un ordinateur peut être compté comme 51 Ko par un formulaire qui mesure autrement. 40 Ko laisse de la marge des deux côtés : la photo est acceptée quelle que soit la façon de compter du formulaire, tout en contenant deux fois plus de détail qu'un fichier de 20 Ko.",
        "Si un formulaire indique la fourchette et que l'un de vos fichiers s'y trouve déjà, inutile de le compresser à nouveau : seuls les fichiers hors de la fourchette doivent être modifiés.",
      ],
    },
    {
      heading: "Ce que garde une photo de 40 Ko",
      id: "detail",
      body: [
        "Une photo tête et épaules d'environ 400 × 500 pixels tient dans 40 Ko avec une bonne qualité : assez pour que les cils et les mèches de cheveux restent distincts, et largement assez pour que la photo s'imprime nettement sur une carte ou une convocation.",
        "Recadrez sur la tête et les épaules avant de compresser, pour que le budget soit consacré au visage plutôt qu'à la pièce derrière vous.",
      ],
    },
    {
      heading: "Utiliser une photo d'identité imprimée",
      id: "printed-photo",
      body: [
        "Si vous n'avez qu'un tirage fait chez un photographe, posez-le à plat à la lumière du jour et photographiez-le bien à la verticale, le téléphone parallèle au tirage. Inclinez légèrement la photo à l'opposé de la fenêtre si vous voyez un reflet, et remplissez le cadre avec la photo.",
        "Rognez la bordure blanche et la table avant de compresser. Une copie propre d'un tirage se compresse bien, car les photos de studio ont déjà un éclairage régulier et un fond uni.",
      ],
    },
    {
      heading: "Des couleurs naturelles",
      id: "colours",
      body: [
        "Les lampes d'intérieur rendent la peau orangée, et certains appareils de téléphone tirent les visages vers le bleu ou le vert. Les formulaires qui contrôlent les photos refusent parfois une dominante de couleur marquée, et la compression ne peut pas la corriger. Prenez la photo à la lumière du jour près d'une fenêtre, plafonnier éteint, et les couleurs ressortiront naturelles.",
      ],
    },
    {
      heading: "Une seule photo pour plusieurs formulaires",
      id: "several-forms",
      body: [
        "La plupart des gens ont besoin de la même photo de type identité pour plusieurs candidatures, et chaque formulaire fixe sa propre limite. Conservez la photo d'origine — le fichier en pleine taille issu de votre téléphone ou du photographe — dans un dossier sûr, et créez chaque version à envoyer à partir d'elle : 40 Ko pour ce formulaire, 20 Ko ou 100 Ko pour le suivant.",
        "Recompresser une copie déjà compressée fait perdre un peu plus de détail à chaque fois : une photo ramenée à 20 Ko qui doit ensuite peser 40 Ko n'aura jamais l'allure d'une version tirée de l'original. Nommez chaque version selon son poids, par exemple photo_40ko.jpg, pour envoyer le bon fichier au bon formulaire.",
      ],
    },
  ],

  howToTitle: "Comment compresser une photo à 40 Ko",
  steps: [
    { title: "Ajoutez votre photo", description: "Recadrez-la sur la tête et les épaules et ajoutez-la, en JPG, PNG ou WebP." },
    { title: "Compressez sous 40 Ko", description: "La limite de 40 Ko est déjà réglée ; modifiez-la si votre formulaire exige un autre chiffre." },
    { title: "Téléchargez", description: "Téléchargez le JPG et joignez-le à votre candidature." },
  ],

  features: [
    { icon: "face", title: "Des visages nets et naturels", description: "Environ 400 × 500 pixels en bonne qualité : tons de peau et détails fins préservés." },
    { icon: "verified_user", title: "Sûr dans les fourchettes", description: "40 Ko passe dans les champs photo de 20 à 50 Ko avec de la marge des deux côtés." },
    { icon: "lock", title: "Confidentiel", description: "Votre photo est compressée dans votre navigateur et reste sur votre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une photo à 40 Ko ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 40 Ko est déjà réglée. Vous obtenez un JPG de moins de 40 Ko avec la meilleure qualité qui tienne." },
    { q: "Mon formulaire indique de 20 à 50 Ko : 40 Ko, c'est bien ?", a: "Oui. 40 Ko se situe sans risque à l'intérieur de la fourchette, quelle que soit la façon dont le formulaire compte les kilo-octets." },
    { q: "Combien de pixels pour une photo de 40 Ko ?", a: "En général environ 400 × 500 pixels pour une photo tête et épaules. Les photos plus grandes sont réduites automatiquement jusqu'à ce qu'elles tiennent." },
    { q: "Comment transformer une photo d'identité imprimée en fichier ?", a: "Photographiez-la à plat, en plein jour, bien à la verticale et sans reflet, rognez la bordure et compressez-la ici." },
    { q: "Pourquoi ma photo paraît-elle orange ou bleue ?", a: "L'éclairage intérieur et certains réglages du téléphone teintent la photo. Reprenez-la à la lumière du jour : la compression conserve les couleurs telles quelles et ne peut pas les corriger." },
    { q: "Une photo de 40 Ko s'imprimera-t-elle bien sur une carte ?", a: "Oui. Les cartes et les convocations impriment la photo en petit, et 40 Ko offrent largement assez de détail pour cela." },
    { q: "40 Ko, est-ce la même chose que 0,04 Mo ?", a: "Oui, 40 Ko font 40 000 octets. Le fichier passe aussi sur les formulaires qui comptent 1 Ko pour 1024 octets." },
    { q: "Dois-je garder la photo d'origine après la compression ?", a: "Oui. Créez chaque taille dont vous avez besoin à partir de l'original, pas d'une copie compressée : chaque nouvelle compression fait perdre un peu de détail." },
  ],

  security:
    "Les photos sont compressées sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
