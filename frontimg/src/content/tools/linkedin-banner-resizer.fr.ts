import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/banniere-linkedin (variant of resize-image).
 * Target query: « bannière LinkedIn » (6.6K/mo, FR, KD 0) – priority page;
 * secondary « taille bannière LinkedIn », « photo de couverture LinkedIn ».
 */
const content: ToolPageContent = {
  toolId: "linkedin-banner-resizer",
  locale: "fr",
  name: "Bannière LinkedIn : redimensionner en 1584 × 396",
  tagline:
    "Mettez n'importe quelle image à la taille de la photo d'arrière-plan LinkedIn : exactement 1584 × 396 pixels, une bande au format 4:1, recadrée ou complétée par des marges. Gratuit, dans votre navigateur, sans inscription.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Bannière LinkedIn : taille 1584 × 396, gratuit | oMyImage",
  metaDescription:
    "Créez votre bannière LinkedIn à la bonne taille : image en 1584 × 396 pixels (4:1), recadrée ou avec des marges de couleur. Taille bannière LinkedIn, gratuit.",

  intro:
    "La bannière qui s'affiche derrière votre photo de profil LinkedIn est une bande longue et fine : 1584 × 396 pixels, quatre fois plus large que haute. Presque aucune photo ni aucun visuel n'a cette forme au départ, si bien que LinkedIn la recadre de façon imprévisible ou la refuse. Cet outil s'ouvre réglé sur la taille de bannière LinkedIn : ajoutez votre image, décidez de la recadrer pour remplir la bande ou de lui ajouter des marges d'une couleur, et téléchargez une bannière LinkedIn aux dimensions exactes. C'est gratuit, sans inscription ni filigrane, et l'image est traitée sur votre appareil.",

  sections: [
    {
      heading: "La taille de bannière LinkedIn",
      id: "spec",
      body: [
        "La photo d'arrière-plan d'un profil LinkedIn personnel mesure 1584 × 396 pixels, au format 4:1, en JPG ou PNG de moins de 8 Mo. Une image exactement à cette taille passe sans que l'outil de recadrage de LinkedIn ait à deviner quelle bande de votre image garder.",
        "Les pages entreprise utilisent une autre image de couverture, plus étroite (1128 × 191 pixels). Pour une page entreprise, choisissez « Taille personnalisée » et saisissez ces valeurs à la place de la taille de bannière personnelle.",
      ],
    },
    {
      heading: "Votre photo de profil en cache une partie",
      id: "overlap",
      body: [
        "Sur ordinateur, votre photo de profil ronde se superpose à la zone inférieure gauche de la bannière, et sur téléphone la bannière s'affiche plus étroite, avec les côtés coupés. Un texte, un logo ou un visage placé dans le tiers gauche ou tout au bord peut se retrouver masqué.",
        "Gardez la partie importante du visuel au centre ou à droite, et traitez le côté gauche comme un simple arrière-plan. Une zone unie à cet endroit fait aussi ressortir votre photo de profil au lieu de la mettre en concurrence avec la bannière.",
      ],
    },
    {
      heading: "Transformer une photo ordinaire en bande 4:1",
      id: "fit",
      body: [
        "« Recadrer pour remplir », le réglage par défaut, met l'image à la pleine largeur et coupe le haut et le bas de façon égale : parfait pour une ligne d'horizon, un bureau ou une texture abstraite. Si la partie intéressante se trouve près du haut ou du bas, recadrez d'abord l'image vous-même avec le bouton de recadrage de sa vignette, en choisissant la bande à conserver.",
        "« Ajouter des marges » garde l'image entière et remplit les côtés avec une couleur, ce qui convient à un logo ou à un visuel carré : l'image se place au milieu d'une bande 4:1 de couleur unie. Choisissez sous « Couleur des marges » une teinte de votre charte ou prélevée dans l'image, pour que la bande paraisse voulue.",
      ],
    },
    {
      heading: "Garder une bannière nette",
      id: "sharp",
      body: [
        "Partez d'une image d'au moins 1584 pixels de large. Une image plus petite doit être agrandie pour remplir la bannière, et des pixels étirés paraissent flous sur les grands écrans. Si vous n'avez qu'un petit logo, ajoutez-lui des marges plutôt que de l'agrandir sur toute la largeur.",
        "Le texte de la bannière doit être gros et court. Sur un téléphone, la bande entière ne mesure que quelques centimètres de haut : un slogan en petits caractères devient illisible ; un nom, un métier ou une seule ligne fonctionnent le mieux.",
      ],
    },
    {
      heading: "Importer la bannière sur LinkedIn",
      id: "upload",
      body: [
        "Ouvrez votre profil, cliquez sur l'icône en forme de crayon dans la zone de la bannière, choisissez d'importer une photo et sélectionnez l'image téléchargée. Comme elle mesure déjà 1584 × 396, l'étape de positionnement devrait montrer l'image entière ; ajustez-la seulement si vous le souhaitez, puis appliquez et enregistrez.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner une image pour une bannière LinkedIn",
  steps: [
    { title: "Ajoutez votre image", description: "Sélectionnez un JPG, PNG, WEBP, GIF ou BMP : photo, visuel ou logo." },
    { title: "Recadrez ou ajoutez des marges", description: "La taille 1584 × 396 est déjà réglée ; choisissez « Recadrer pour remplir » ou « Ajouter des marges » avec une couleur." },
    { title: "Téléchargez", description: "Cliquez sur « Redimensionner et télécharger » pour obtenir une bannière prête pour votre profil LinkedIn." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactement 1584 × 396", description: "La taille d'arrière-plan au format 4:1 : LinkedIn n'a plus rien à recadrer." },
    { icon: "palette", title: "Marges de couleur", description: "Placez un logo ou un visuel carré dans la bande, sur un fond uni." },
    { icon: "lock", title: "Dans votre navigateur", description: "Votre image est redimensionnée sur votre appareil et n'est jamais envoyée en ligne." },
  ],

  faqs: [
    { q: "Quelle est la taille d'une bannière LinkedIn ?", a: "1584 × 396 pixels, au format 4:1, en JPG ou PNG de moins de 8 Mo, pour la photo d'arrière-plan d'un profil personnel." },
    { q: "Comment mettre mon image en 1584 × 396 ?", a: "Ajoutez-la ici : la taille LinkedIn est déjà sélectionnée. Choisissez « Recadrer pour remplir » ou « Ajouter des marges », puis cliquez sur « Redimensionner et télécharger »." },
    { q: "Pourquoi une partie de ma bannière est-elle cachée ?", a: "Sur ordinateur, votre photo de profil couvre la zone inférieure gauche, et les téléphones coupent les côtés. Gardez le contenu clé au centre ou à droite." },
    { q: "Quelle taille pour la couverture d'une page entreprise LinkedIn ?", a: "1128 × 191 pixels. Choisissez « Taille personnalisée » et saisissez ces valeurs." },
    { q: "Ma bannière est floue : pourquoi ?", a: "L'original faisait sans doute moins de 1584 pixels de large et a dû être agrandi. Partez d'une image plus large, ou ajoutez des marges autour d'un petit logo au lieu de l'étirer." },
    { q: "Puis-je mettre un logo sur un fond uni ?", a: "Oui. Choisissez « Ajouter des marges » et une couleur de fond ; le logo est centré dans une bande 4:1 de cette couleur." },
    { q: "Qu'est-ce qu'une bonne bannière LinkedIn ?", a: "Quelque chose de simple qui accompagne votre profil : votre ville, votre espace de travail, votre produit, ou une couleur de marque avec une courte ligne de texte à droite." },
    { q: "JPG ou PNG pour une bannière LinkedIn ?", a: "Les deux fonctionnent. Le JPG convient aux photos ; le PNG garde le texte et les aplats plus nets." },
    { q: "Mon image est-elle envoyée quelque part ?", a: "Non. Elle est redimensionnée dans votre navigateur ; c'est vous seul qui l'importez ensuite sur LinkedIn." },
    { q: "La bannière LinkedIn s'affiche-t-elle pareil sur mobile ?", a: "Non. Sur téléphone, la bannière s'affiche plus étroite et ses côtés sont coupés. Une bannière dont l'essentiel se trouve au centre ou à droite reste lisible sur tous les écrans." },
  ],

  security:
    "Votre image est redimensionnée entièrement dans votre navigateur. Les images très lourdes peuvent être traitées sur notre serveur, puis supprimées aussitôt ; rien n'est conservé.",
};

export default content;
