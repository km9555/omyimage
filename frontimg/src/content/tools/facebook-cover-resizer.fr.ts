import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/couverture-facebook (variant of resize-image).
 * Target query: « photo de couverture Facebook »; secondary « taille couverture Facebook ».
 */
const content: ToolPageContent = {
  toolId: "facebook-cover-resizer",
  locale: "fr",
  name: "Photo de couverture Facebook : redimensionner",
  tagline:
    "Mettez n'importe quelle image à la taille d'une photo de couverture Facebook : 851 × 315 pixels en JPG sRGB léger, recadrée ou complétée par des marges, en tenant compte du recadrage sur téléphone. Gratuit, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Photo de couverture Facebook : 851 × 315 px | oMyImage",
  metaDescription:
    "La bonne taille de couverture Facebook : votre image en 851 × 315 pixels, en JPG sRGB léger. Photo de couverture Facebook recadrée ou avec marges, gratuit.",

  intro:
    "Une photo de couverture Facebook est large et basse, et elle s'affiche sous deux formes différentes : une bande large sur ordinateur et un recadrage plus haut et plus étroit sur téléphone. Si vous importez une photo quelconque, c'est Facebook qui décide de ce qui est coupé. Cet outil s'ouvre réglé sur la taille de couverture Facebook, 851 × 315 pixels, et enregistre un JPG : ajoutez votre image, choisissez entre recadrage et marges, et téléchargez une couverture qui se charge vite et montre exactement ce que vous vouliez montrer. Gratuit, sans inscription, sans filigrane.",

  sections: [
    {
      heading: "La taille recommandée par Facebook",
      id: "spec",
      body: [
        "Facebook conseille d'importer les couvertures en fichiers JPG sRGB de 851 pixels de large sur 315 pixels de haut, idéalement de moins de 100 Ko pour un chargement rapide. Le minimum accepté est de 400 × 150 pixels. Une couverture qui mesure exactement 851 × 315 au départ n'a pas besoin d'être repositionnée sur ordinateur.",
        "L'outil enregistre par défaut un JPG en sRGB. Pour une photo très détaillée, le fichier peut quand même dépasser 100 Ko en haute qualité ; baissez un peu le curseur de qualité, ou passez ensuite le résultat dans le mode 100 Ko de l'outil de compression, si la vitesse compte plus que les derniers détails.",
      ],
    },
    {
      heading: "Ordinateur et téléphone n'en montrent pas la même partie",
      id: "crop",
      body: [
        "Sur ordinateur, la couverture s'affiche à environ 820 × 312 pixels, soit presque l'image entière. Sur téléphone, elle apparaît à environ 640 × 360, une forme plus haute : les bords gauche et droit sont donc coupés. Tout ce qui se trouve près des côtés, comme un nom ou un logo dans un coin, peut disparaître pour les visiteurs sur mobile.",
        "Placez le texte et les visages au centre de l'image, et réservez les bords extérieurs à un arrière-plan qui peut être perdu. Sur les profils personnels, votre photo de profil chevauche aussi la partie inférieure gauche de la couverture : laissez cette zone calme, elle aussi.",
      ],
    },
    {
      heading: "Recadrer ou ajouter des marges",
      id: "fit",
      body: [
        "« Recadrer pour remplir », le réglage par défaut, agrandit l'image jusqu'à couvrir tout le cadre de 851 × 315 et coupe le surplus de façon égale. Cela convient aux paysages, aux photos de groupe prises de loin et aux photos de produit en largeur. Si le sujet se trouve en haut ou en bas de l'image, recadrez-la d'abord vous-même avec le bouton de recadrage de sa vignette.",
        "« Ajouter des marges » fait tenir l'image entière dans le cadre et remplit les côtés avec une couleur. C'est la bonne solution pour un logo carré, une affiche ou le flyer d'un événement qui ne doit perdre aucun bord : choisissez sous « Couleur des marges » une teinte assortie au visuel.",
      ],
    },
    {
      heading: "Texte, logos et PNG",
      id: "text",
      body: [
        "Facebook recompresse les couvertures, et la compression JPG est la plus dure avec le texte net et les logos. Si votre couverture est surtout composée de lettrage ou d'aplats, choisissez PNG comme format de sortie : Facebook indique lui-même que le PNG donne souvent un meilleur résultat pour les images qui contiennent du texte ou un logo.",
      ],
    },
    {
      heading: "Changer de photo de couverture Facebook",
      id: "upload",
      body: [
        "Sur votre profil ou votre page, cliquez sur l'option de modification de la photo de couverture ou sur l'icône d'appareil photo de la couverture, choisissez d'importer une photo et sélectionnez l'image téléchargée. Comme elle a déjà la bonne taille, l'étape de repositionnement par glisser devrait montrer l'image entière ; enregistrez quand le rendu vous convient. Les Pages Facebook utilisent la même couverture large : la même image fonctionne donc aussi pour la page d'une entreprise.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner une image pour une couverture Facebook",
  steps: [
    { title: "Ajoutez votre image", description: "Sélectionnez un JPG, PNG, WEBP, GIF ou BMP : photo, affiche ou visuel." },
    { title: "Recadrez ou ajoutez des marges", description: "La taille de couverture 851 × 315 est déjà réglée ; choisissez « Recadrer pour remplir » ou « Ajouter des marges » avec une couleur." },
    { title: "Téléchargez", description: "Cliquez sur « Redimensionner et télécharger » pour obtenir un JPG prêt à servir de couverture." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactement 851 × 315", description: "La taille de couverture recommandée par Facebook : aucun repositionnement sur ordinateur." },
    { icon: "speed", title: "JPG sRGB léger", description: "Enregistrée en JPG sRGB, le format que Facebook conseille pour un chargement rapide." },
    { icon: "lock", title: "Dans votre navigateur", description: "Votre image est redimensionnée sur votre appareil et n'est jamais envoyée en ligne." },
  ],

  faqs: [
    { q: "Quelle est la taille d'une photo de couverture Facebook ?", a: "Importez-la en 851 × 315 pixels. Facebook l'affiche à environ 820 × 312 sur ordinateur et 640 × 360 sur téléphone ; le minimum est de 400 × 150." },
    { q: "Pourquoi ma couverture est-elle coupée sur mobile ?", a: "Les téléphones affichent un recadrage plus haut de la couverture et coupent les bords gauche et droit. Gardez le texte et les visages au centre." },
    { q: "Comment mettre mon image en 851 × 315 ?", a: "Ajoutez-la ici : la taille de couverture est déjà sélectionnée. Choisissez « Recadrer pour remplir » ou « Ajouter des marges », puis cliquez sur « Redimensionner et télécharger »." },
    { q: "JPG ou PNG pour une couverture Facebook ?", a: "JPG pour les photos : Facebook recommande un JPG sRGB de moins de 100 Ko. PNG pour les couvertures composées surtout de texte ou d'un logo." },
    { q: "Comment faire passer la couverture sous 100 Ko ?", a: "Baissez le curseur de qualité avant de redimensionner, ou compressez ensuite le résultat à 100 Ko avec l'outil de compression." },
    { q: "Puis-je utiliser la même image pour une Page Facebook ?", a: "Oui. Les Pages utilisent la même couverture large ; 851 × 315 convient, avec le même conseil : garder le centre dégagé pour l'essentiel." },
    { q: "Ma couverture est floue : pourquoi ?", a: "L'original était peut-être plus petit que 851 × 315 et a été agrandi, ou Facebook a compressé des détails trop fins. Partez d'une image plus grande et gardez un texte de grande taille." },
    { q: "Mon image est-elle envoyée quelque part ?", a: "Non. Elle est redimensionnée dans votre navigateur ; c'est vous seul qui l'importez ensuite sur Facebook." },
    { q: "Quelle taille pour la couverture d'un événement ou d'un groupe Facebook ?", a: "Ces couvertures ont une forme différente de celle du profil. Choisissez « Taille personnalisée » et saisissez les dimensions indiquées par Facebook au moment de l'import, en gardant le sujet au centre." },
  ],

  security:
    "Votre image est redimensionnée entièrement dans votre navigateur. Les images très lourdes peuvent être traitées sur notre serveur, puis supprimées aussitôt ; rien n'est conservé.",
};

export default content;
