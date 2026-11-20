import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/taille-miniature-youtube (variant of resize-image).
 * Target query: « taille de miniature YouTube »; secondary « miniature YouTube » (2.4K/mo, FR), « 1280 x 720 ».
 */
const content: ToolPageContent = {
  toolId: "youtube-thumbnail-resizer",
  locale: "fr",
  name: "Taille de miniature YouTube",
  tagline:
    "Mettez n'importe quelle image à la taille d'une miniature YouTube : exactement 1280 × 720 pixels, en 16:9, enregistrée en JPG bien en dessous de la limite de 2 Mo. Recadrage ou marges, gratuit et dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Taille de miniature YouTube : 1280 × 720 | oMyImage",
  metaDescription:
    "Adaptez votre image à la taille de miniature YouTube : 1280 × 720 pixels en 16:9, en JPG de moins de 2 Mo. Miniature YouTube recadrée ou avec marges, gratuit.",

  intro:
    "YouTube demande des miniatures personnalisées de 1280 × 720 pixels, dans un cadre 16:9, de moins de 2 Mo. Une capture tirée de votre montage, une photo prise au téléphone ou un visuel exporté à la mauvaise taille remplit rarement les trois conditions à la fois. Cet outil s'ouvre déjà réglé sur la taille de miniature YouTube : ajoutez votre image, choisissez de la recadrer pour remplir le cadre ou de lui ajouter des marges d'une couleur, et téléchargez un JPG que YouTube Studio accepte du premier coup. Pas d'inscription, pas de filigrane, et votre visuel reste sur votre appareil.",

  sections: [
    {
      heading: "La taille demandée par YouTube",
      id: "spec",
      body: [
        "Les recommandations de YouTube pour les miniatures personnalisées sont une résolution de 1280 × 720 pixels, avec une largeur minimale de 640 pixels, au format JPG, GIF ou PNG, et un fichier de moins de 2 Mo. La forme 16:9 correspond au lecteur et à presque tous les endroits où une miniature apparaît, des résultats de recherche à la colonne des vidéos suggérées ; une image d'une autre forme reçoit des bandes ou un recadrage appliqués par YouTube, et non par vous.",
        "L'outil enregistre un JPG par défaut, car un PNG de 1280 × 720 représentant une miniature chargée et photographique peut dépasser 2 Mo à lui seul. À la qualité par défaut de 92 %, une miniature typique pèse quelques centaines de Ko : nettement sous la limite, tout en gardant le texte et les visages nets.",
      ],
    },
    {
      heading: "Recadrer ou ajouter des marges",
      id: "fit",
      body: [
        "« Recadrer pour remplir » est le réglage par défaut : l'image est agrandie jusqu'à couvrir tout le cadre 16:9, et ce qui dépasse est coupé de façon égale sur les bords. C'est le bon choix pour la plupart des photos et des captures d'écran. Si votre sujet se trouve près d'un bord, recadrez d'abord l'image vous-même avec le bouton de recadrage de sa vignette, pour que la partie qui compte reste dans le cadre.",
        "« Ajouter des marges » garde l'image entière et remplit l'espace restant avec la couleur choisie sous « Couleur des marges ». Utilisez-le pour une photo verticale prise au téléphone, un logo carré ou une diapositive 4:3 qui perdrait trop au recadrage. Une couleur unie de votre charte graphique derrière l'image paraît généralement plus voulue que des bandes noires.",
      ],
    },
    {
      heading: "Concevoir une miniature YouTube pour un petit écran",
      id: "small",
      body: [
        "La plupart des spectateurs voient votre miniature à une fraction de sa taille réelle : quelques centimètres de large dans un fil sur téléphone ou dans la colonne latérale. De grandes formes, un visage bien visible et trois ou quatre mots en gros caractères résistent à cette réduction ; les petits textes, les polices fines et les arrière-plans chargés disparaissent. Regardez l'aperçu en petit avant de valider.",
        "Laissez le coin inférieur droit dégagé. YouTube y affiche la durée de la vidéo, et tout ce qui s'y trouve – le dernier mot d'un titre, par exemple – est masqué sur chaque miniature.",
      ],
    },
    {
      heading: "Importer la miniature dans YouTube Studio",
      id: "upload",
      body: [
        "Ouvrez la vidéo dans YouTube Studio, allez dans Détails et choisissez l'option d'importation de fichier sous Miniature. Les miniatures personnalisées demandent une chaîne validée ; si l'option est grisée, validez d'abord votre compte avec un numéro de téléphone. Les changements peuvent mettre un peu de temps à apparaître partout, car les miniatures sont mises en cache.",
        "Conservez votre visuel d'origine. Si vous testez plus tard un autre titre ou un autre cadrage, redimensionnez de nouveau à partir de l'original plutôt qu'à partir du JPG téléchargé, pour que la miniature ne perde jamais de qualité au fil des enregistrements successifs.",
      ],
    },
    {
      heading: "À partir d'une image de la vidéo",
      id: "frame",
      body: [
        "Une image forte tirée de la vidéo elle-même est un bon point de départ. Mettez la lecture en pause dessus dans votre lecteur ou votre logiciel de montage et faites une capture d'écran en plein écran ; sur un écran 1080p, elle mesure déjà 1920 × 1080, la même forme 16:9, et le passage à 1280 × 720 ne change que le nombre de pixels. Les captures faites sur un téléphone tenu droit sont verticales plutôt que larges : ajoutez-leur des marges, ou recadrez sur la partie qui compte.",
      ],
    },
  ],

  howToTitle: "Comment mettre une image à la taille de miniature YouTube",
  steps: [
    { title: "Ajoutez votre image", description: "Sélectionnez un JPG, PNG, WEBP, GIF ou BMP : capture d'écran, photo ou visuel." },
    { title: "Recadrez ou ajoutez des marges", description: "La taille de miniature YouTube est déjà réglée ; choisissez « Recadrer pour remplir » ou « Ajouter des marges » avec une couleur." },
    { title: "Téléchargez", description: "Cliquez sur « Redimensionner et télécharger » pour obtenir un JPG de 1280 × 720 prêt pour YouTube Studio." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactement 1280 × 720", description: "La taille 16:9 recommandée par YouTube : rien n'est recadré ni bordé de bandes après l'import." },
    { icon: "compress", title: "Moins de 2 Mo", description: "Enregistrée en JPG par défaut, bien en dessous de la limite de poids des miniatures YouTube." },
    { icon: "lock", title: "Dans votre navigateur", description: "Votre visuel est redimensionné sur votre appareil et n'est jamais envoyé en ligne." },
  ],

  faqs: [
    { q: "Quelle est la taille d'une miniature YouTube ?", a: "1280 × 720 pixels, au format 16:9, avec une largeur minimale de 640 pixels. Le fichier doit être en JPG, GIF ou PNG et peser moins de 2 Mo." },
    { q: "Comment mettre mon image en 1280 × 720 ?", a: "Ajoutez-la ici : la taille de miniature YouTube est déjà sélectionnée. Choisissez « Recadrer pour remplir » ou « Ajouter des marges », puis cliquez sur « Redimensionner et télécharger »." },
    { q: "Pourquoi YouTube dit-il que ma miniature est trop lourde ?", a: "Le fichier dépasse probablement 2 Mo, ce qui arrive vite avec un PNG. Cet outil enregistre un JPG par défaut, qui pèse en général quelques centaines de Ko." },
    { q: "Faut-il recadrer ou ajouter des marges ?", a: "« Recadrer pour remplir » pour les photos et les captures d'écran, afin que le cadre soit plein. « Ajouter des marges » pour les photos verticales, les logos ou les diapositives qui perdraient trop au recadrage." },
    { q: "Pourquoi ne puis-je pas importer de miniature personnalisée ?", a: "Les miniatures personnalisées exigent un compte YouTube validé. Validez-le avec un numéro de téléphone dans les paramètres de YouTube ; l'option d'importation apparaît alors dans Studio." },
    { q: "Puis-je utiliser une miniature en PNG ?", a: "Oui, YouTube accepte le PNG. Choisissez PNG comme format de sortie, mais vérifiez que le fichier reste sous 2 Mo ; le JPG est le choix le plus sûr par défaut." },
    { q: "Qu'est-ce qu'il faut éviter de placer dans le coin ?", a: "Le coin inférieur droit, où YouTube affiche la durée de la vidéo. Éloignez-en le texte et les visages." },
    { q: "Puis-je redimensionner plusieurs miniatures à la fois ?", a: "Oui. Ajoutez-les toutes ; chacune passe en 1280 × 720 et elles se téléchargent ensemble dans un ZIP." },
    { q: "Mon image est-elle envoyée quelque part ?", a: "Non. Elle est redimensionnée dans votre navigateur ; c'est vous seul qui l'importez ensuite sur YouTube." },
    { q: "La miniature YouTube sert-elle aussi pour les Shorts ?", a: "Pas vraiment. Les Shorts sont verticaux (9:16) et leur couverture se choisit en général parmi les images de la vidéo. Le 1280 × 720 concerne les vidéos classiques en 16:9." },
  ],

  security:
    "Votre miniature est redimensionnée entièrement dans votre navigateur. Les images très lourdes peuvent être traitées sur notre serveur, puis supprimées aussitôt ; rien n'est conservé.",
};

export default content;
