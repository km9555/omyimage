import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-50ko (variant of compress-image,
 * preset targetKb 50). Primary query: « Compresser une image à 50 Ko »;
 * secondaries: « réduire une photo à 50 Ko », « photo 50 Ko ». 50 Ko is the
 * typical PHOTOGRAPH limit on exam, job and administrative forms — this
 * page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-50kb",
  locale: "fr",
  name: "Compresser une image à 50 Ko",
  tagline:
    "Compressez n'importe quelle photo sous 50 Ko, la limite que fixent pour la photo la plupart des formulaires de concours, de recrutement et de démarches administratives. Le JPG le plus net qui tienne, plusieurs photos à la fois, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 50 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 50 Ko : la photo de votre téléphone en JPG net pour vos démarches en ligne et candidatures. Réduisez une photo à 50 Ko sans l'envoyer.",

  intro:
    "Si un formulaire vous a déjà annoncé « la photo doit peser moins de 50 Ko », cette page est faite pour ce moment-là. Ajoutez la photo directement depuis votre téléphone — même si elle pèse 5 Mo — et elle revient en JPG de moins de 50 Ko, avec la meilleure qualité qui tienne. L'outil baisse d'abord la qualité et ne réduit les dimensions en pixels que s'il n'a pas le choix : les visages restent nets à la taille où les formulaires les affichent. Il accepte le JPG, le PNG et le WebP, et traite plusieurs photos à la fois.",

  sections: [
    {
      heading: "Pourquoi tant de formulaires demandent 50 Ko",
      id: "why-50kb",
      body: [
        "Les organisateurs de concours, les portails de recrutement du secteur public, les programmes de bourses et de nombreux services administratifs recueillent des photos de milliers, voire de millions de candidats. Limiter chacune à 20–50 Ko permet de maîtriser le stockage et le chargement des pages, et une photo de type identité n'a nullement besoin de la résolution d'un appareil photo de téléphone. 50 Ko est le plafond le plus fréquent pour la photo, la signature étant généralement limitée plus bas, entre 10 et 20 Ko.",
        "La limite est vérifiée automatiquement au moment de l'envoi : c'est pourquoi un fichier de 51 Ko est refusé alors qu'il paraît identique à un fichier de 49 Ko. Cet outil reste toujours sous le chiffre, avec une petite marge de sécurité expliquée plus bas.",
      ],
    },
    {
      heading: "50 Ko, c'est un poids de fichier, pas une taille d'image",
      id: "size-not-dimensions",
      body: [
        "Les kilo-octets mesurent la place occupée en mémoire, pas la largeur ni la hauteur. Les mêmes 50 Ko peuvent contenir la photo de 1200 pixels d'un mur uni ou celle de 400 pixels d'une rue bondée, parce que le JPG dépense ses octets sur le détail, pas sur la surface. Un portrait de type identité classique sur fond clair tient dans 50 Ko à environ 600 × 800 pixels et reste net.",
        "Beaucoup de formulaires indiquent aussi des dimensions : 200 × 230 pixels, 3,5 × 4,5 cm, 413 × 531 pixels. C'est une exigence distincte : redimensionnez d'abord à ces mesures avec l'outil « Redimensionner une image », puis compressez ici. À de si petites dimensions, la photo tient généralement sous 50 Ko avec une très haute qualité.",
      ],
    },
    {
      heading: "Obtenir la meilleure photo sous 50 Ko",
      id: "best-photo",
      body: [
        "Partez de la photo d'origine, pas d'une image transférée par WhatsApp ni d'une capture d'écran : chaque compression antérieure ajoute des blocs que la suivante doit conserver. Recadrez sur la tête et les épaules avant de compresser, pour que le budget aille au visage plutôt qu'à la pièce derrière vous.",
        "Un fond clair et uni se compresse bien mieux qu'un fond à motifs, et une lumière du jour régulière sur le visage se compresse mieux que des ombres dures. Si le formulaire exige un fond blanc, prenez la photo devant un mur blanc ou utilisez d'abord l'outil « Supprimer l'arrière-plan ».",
      ],
    },
    {
      heading: "Pourquoi une photo peut quand même être refusée",
      id: "rejections",
      body: [
        "Si un portail refuse une photo de moins de 50 Ko, la raison tient en général à une autre règle : des dimensions incorrectes, un poids minimum (certains formulaires exigent aussi au moins 20 Ko), un type de fichier autre que JPG, ou un nom de fichier contenant des espaces ou des caractères spéciaux. Vérifiez les consignes sur chacun de ces points.",
        "Le nombre de Ko lui-même n'est pas en cause. L'outil garde le fichier sous 50 000 octets, ce qui passe que le formulaire compte un kilo-octet pour 1000 ou pour 1024 octets ; votre ordinateur peut donc l'afficher à 48 ou 49 Ko.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 50 Ko",
  steps: [
    { title: "Ajoutez votre photo", description: "Sélectionnez ou glissez un JPG, PNG ou WebP ; une photo de téléphone en pleine taille convient très bien." },
    { title: "Compressez sous 50 Ko", description: "La limite de 50 Ko est déjà réglée. Gardez le format JPG, sauf indication contraire du formulaire." },
    { title: "Téléchargez", description: "Enregistrez la photo : elle pèse moins de 50 Ko et peut être envoyée. Plusieurs photos se téléchargent dans un ZIP." },
  ],

  features: [
    { icon: "badge", title: "Prête pour les formulaires", description: "Un JPG de moins de 50 Ko avec la meilleure qualité possible : ce qu'attendent les portails de concours et d'administration." },
    { icon: "photo_size_select_large", title: "Moins de pixels seulement si nécessaire", description: "La qualité baisse en premier ; les dimensions ne sont réduites que si la qualité seule ne permet pas d'atteindre 50 Ko." },
    { icon: "lock", title: "Confidentiel par conception", description: "Votre photo est traitée dans votre navigateur, sur votre propre appareil : la moindre des choses pour une photo d'identité." },
  ],

  faqs: [
    { q: "Comment compresser une photo à 50 Ko ?", a: "Ajoutez la photo, gardez la limite de 50 Ko et le format JPG, puis cliquez sur « Compresser ». Le fichier téléchargé est garanti sous 50 Ko." },
    { q: "Une photo de 50 Ko sera-t-elle floue ?", a: "Pas à la taille où les formulaires l'affichent. Un portrait tient dans 50 Ko à environ 600 × 800 pixels avec une bonne qualité ; le flou vient le plus souvent d'une source déjà compressée, alors partez de l'original." },
    { q: "Quelle taille en pixels pour une photo de 50 Ko ?", a: "Il n'y a pas de réponse fixe : tout dépend du niveau de détail de la photo. Si le formulaire précise des dimensions, redimensionnez d'abord ; sinon, laissez l'outil choisir, il conserve autant de pixels que possible." },
    { q: "Puis-je transformer un PNG ou une capture d'écran en JPG de 50 Ko ?", a: "Oui. Les fichiers PNG et WebP sont convertis en JPG au passage, et les zones transparentes sont remplies de blanc ou d'une autre couleur de fond que vous choisissez." },
    { q: "Le formulaire exige aussi 200 × 230 pixels. Que faire ?", a: "Redimensionnez d'abord à 200 × 230 avec l'outil « Redimensionner une image », puis compressez le résultat ici. À cette taille, la photo sera bien sous 50 Ko avec une qualité élevée." },
    { q: "50 Ko, est-ce la même chose que 0,05 Mo ?", a: "Oui. Le fichier reste sous 50 000 octets, soit 0,05 Mo, et il passe aussi sur les formulaires qui comptent 1024 octets par kilo-octet." },
    { q: "Puis-je compresser plusieurs photos à 50 Ko en une fois ?", a: "Oui. Ajoutez-les toutes : chacune est ramenée séparément sous 50 Ko, et vous pouvez les télécharger ensemble dans un ZIP." },
    { q: "Ma photo est-elle envoyée sur Internet pendant la compression ?", a: "Non. La compression à 50 Ko a lieu dans votre navigateur, sur votre appareil. Seule une image énorme, de plus de 16 mégapixels environ, est traitée sur notre serveur puis supprimée au bout d'une heure environ." },
  ],

  security:
    "La photo reste sur votre appareil. La compression à 50 Ko s'exécute dans votre navigateur : rien n'est envoyé, rien n'est conservé, personne d'autre ne peut la voir. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
