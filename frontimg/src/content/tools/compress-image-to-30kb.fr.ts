import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-30ko (variant of compress-image,
 * preset targetKb 30). Primary query: « Compresser une image à 30 Ko »;
 * secondary: « réduire une photo à 30 Ko ». Angle: the form PHOTO limit —
 * what makes a face survive 30 Ko (crop, plain background), resize then
 * compress when a form also gives pixels, and the Ko-vs-Kio confusion that
 * makes a 29 Ko file look « too big ».
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-30kb",
  locale: "fr",
  name: "Compresser une image à 30 Ko",
  tagline:
    "Compressez une photo sous 30 Ko pour les formulaires de concours, d'admission et d'emploi, avec un visage encore assez net pour une convocation ou une pièce d'identité. Limite exacte, dans votre navigateur, gratuitement.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 30 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 30 Ko : une photo d'identité nette pour vos dossiers d'admission et vos candidatures. Réduisez une photo à 30 Ko gratuitement.",

  intro:
    "30 Ko est un plafond courant pour la photo sur les formulaires de concours, d'admission et de recrutement, et parfois aussi pour la signature. C'est suffisant pour une photo de type identité bien nette — à condition que la photo soit préparée pour. Ajoutez votre image ici et vous obtenez un JPG de moins de 30 Ko, avec la meilleure qualité possible dans cette limite ; les conseils ci-dessous font toute la différence entre un visage précis et un visage qui paraît barbouillé. Ils valent pour un dossier universitaire comme pour une démarche administrative en ligne.",

  sections: [
    {
      heading: "Gardez le visage, oubliez le reste",
      id: "face-first",
      body: [
        "Les formulaires veulent une photo tête et épaules : tout le reste — la pièce, vos genoux, le plafond — est de la place perdue. Recadrez sur la tête et les épaules avant de compresser, et les 30 Ko entiers vont au visage. À ce poids, une photo d'environ 350 × 450 pixels garde un bon niveau de détail dans les yeux et les cheveux.",
        "Regardez droit vers l'objectif, gardez un éclairage régulier sur le visage et évitez les ombres marquées d'un côté. Les ombres et le grain sont des détails fins que le compresseur doit stocker ; une lumière homogène lui en laisse moins à garder et donne un résultat plus propre.",
      ],
    },
    {
      heading: "Pourquoi un fond uni aide",
      id: "background",
      body: [
        "La compression JPG stocke les zones lisses à très bas prix et les zones chargées à prix fort. Un mur blanc ou clair et uni ne coûte presque rien, si bien que l'essentiel des 30 Ko sert au visage. Une bibliothèque, des rideaux à motifs ou un jardin ensoleillé derrière vous peuvent à eux seuls absorber la moitié du budget.",
        "Si votre photo a été prise devant un fond chargé, l'outil « Changer le fond d'une photo » peut d'abord le remplacer par un blanc ou un bleu uni. Compressez ensuite le résultat ici.",
      ],
    },
    {
      heading: "Quand le formulaire donne aussi des dimensions en pixels",
      id: "dimensions",
      body: [
        "Certains formulaires demandent les deux : moins de 30 Ko et, par exemple, 200 × 230 pixels. Respectez cet ordre : redimensionnez d'abord aux dimensions exactes avec l'outil « Redimensionner une image », puis compressez ici à 30 Ko. Compresser d'abord et redimensionner ensuite réenregistre le JPG une seconde fois et fait perdre de la qualité pour rien.",
        "Si le formulaire indique plutôt une taille en centimètres, comme 3,5 × 4,5 cm, il décrit la forme de la photo. Recadrez selon ces proportions, puis compressez.",
      ],
    },
    {
      heading: "« Mon fichier fait 29 Ko mais le formulaire le juge trop lourd »",
      id: "kb-kib",
      body: [
        "Les ordinateurs comptent les kilo-octets de deux façons. Windows affiche les tailles en unités de 1024 octets, alors que beaucoup de sites vérifient les limites en unités de 1000. L'outil garde le fichier sous 30 000 octets, donc sous la limite dans les deux cas.",
        "Si un formulaire refuse encore la photo, la raison est généralement ailleurs : un mauvais format (PNG au lieu de JPG), un poids minimum également exigé, ou des dimensions hors de la plage autorisée. Lisez attentivement le message d'erreur : il indique le plus souvent la cause.",
      ],
    },
    {
      heading: "Prendre la photo avec un téléphone",
      id: "phone",
      body: [
        "Utilisez l'appareil photo principal (au dos) plutôt que la caméra frontale, et demandez à quelqu'un de prendre la photo à environ 1,5 mètre, à hauteur des yeux. Placez-vous devant un mur clair et uni, face à une fenêtre, pour que la lumière du jour éclaire votre visage de façon régulière, et gardez les épaules bien face à l'objectif.",
        "Désactivez les filtres beauté et le mode portrait — tous deux adoucissent les contours et ajoutent des effets que les formulaires n'autorisent pas — et prenez plusieurs clichés. Choisissez le plus net : la compression peut rendre une photo plus légère, mais elle ne peut pas rendre nette une photo floue.",
      ],
    },
  ],

  howToTitle: "Comment compresser une photo à 30 Ko",
  steps: [
    { title: "Ajoutez votre photo", description: "Recadrez-la sur la tête et les épaules, puis ajoutez-la, en JPG, PNG ou WebP." },
    { title: "Compressez sous 30 Ko", description: "La limite de 30 Ko est déjà réglée ; modifiez-la si votre formulaire demande autre chose." },
    { title: "Téléchargez et envoyez", description: "Téléchargez le JPG et joignez-le à votre formulaire." },
  ],

  features: [
    { icon: "face", title: "Des visages bien nets", description: "La meilleure qualité qui tienne sous 30 Ko, pour que les yeux et les traits restent précis." },
    { icon: "aspect_ratio", title: "Va de pair avec le redimensionnement", description: "Redimensionnez d'abord aux dimensions du formulaire, puis compressez : le bon ordre pour la meilleure qualité." },
    { icon: "lock", title: "Aucun envoi", description: "Votre photo est compressée dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une photo à 30 Ko ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 30 Ko est déjà réglée. Vous obtenez un JPG de moins de 30 Ko avec la meilleure qualité possible." },
    { q: "Quelle taille en pixels tient dans 30 Ko ?", a: "Une photo tête et épaules d'environ 350 × 450 pixels garde un bon niveau de détail. Les photos plus grandes sont réduites automatiquement jusqu'à ce qu'elles tiennent." },
    { q: "La photo sera-t-elle assez nette pour une convocation ?", a: "Oui. Les convocations impriment la photo en petit, et 30 Ko suffisent largement si la photo est recadrée sur le visage et éclairée de façon régulière." },
    { q: "Faut-il redimensionner d'abord ou compresser d'abord ?", a: "Redimensionnez d'abord, puis compressez. Compresser puis redimensionner enregistre le JPG deux fois et fait perdre une qualité que vous n'aviez pas besoin de perdre." },
    { q: "Un fond uni fait-il vraiment une différence ?", a: "Oui. Les zones unies prennent très peu de place dans un JPG, donc une plus grande part des 30 Ko va à votre visage. Un fond chargé peut consommer la moitié du budget." },
    { q: "Windows n'affiche pas la même taille que le formulaire : lequel a raison ?", a: "Les deux, dans des unités différentes. L'outil garde le fichier sous 30 000 octets : il passe, que le formulaire compte 1 Ko pour 1000 ou pour 1024 octets." },
    { q: "Puis-je aussi compresser une signature à 30 Ko ?", a: "Oui. Ajoutez la photo et la signature ensemble ; chacune revient sous 30 Ko. Si le champ signature autorise moins, relancez-la avec ce chiffre." },
    { q: "Puis-je prendre la photo avec mon téléphone ?", a: "Oui. Utilisez l'appareil photo arrière, placez-vous à environ 1,5 mètre en plein jour devant un mur uni, puis recadrez sur la tête et les épaules avant de compresser à 30 Ko." },
  ],

  security:
    "Les photos sont compressées sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
