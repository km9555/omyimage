import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/image-9-16-1080x1920 (variant of resize-image).
 * Target query: « format 9:16 » (1.9K/mo, FR); secondary « 1080x1920 ».
 */
const content: ToolPageContent = {
  toolId: "9-16-aspect-ratio-image",
  locale: "fr",
  name: "Image au format 9:16 (1080x1920)",
  tagline:
    "Transformez n'importe quelle photo, capture d'écran ou image d'IA en image au format 9:16 d'exactement 1080 × 1920 pixels : recadrée, avec des marges ou sur fond flouté, jamais étirée. Gratuit, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },
  crossLink: { lead: "Votre image fait moins de 1080 pixels de large ?", label: "Agrandissez-la d'abord", toolId: "upscale-image" },

  metaTitle: "Format 9:16 : image en 1080x1920 gratuite | oMyImage",
  metaDescription:
    "Passez n'importe quelle image au format 9:16 en 1080x1920 pixels pour Stories, Reels, TikTok, Shorts et Web Stories. Recadrage, marges ou fond flouté, gratuit.",

  intro:
    "Les Stories, les Reels, les Shorts, les TikToks et les Google Web Stories occupent l'écran d'un téléphone tenu à la verticale, et tous demandent la même forme : le format 9:16, idéalement en 1080 × 1920 pixels. La plupart des images n'ont pas cette forme. Une photo en paysage, un rendu d'IA carré ou une photo 4:3 prise au téléphone finit recadrée là où l'application le décide, ou coincée entre deux bandes noires. Cet outil s'ouvre déjà réglé sur 1080 × 1920. Ajoutez vos images, choisissez comment chacune passe au 9:16 – en la recadrant, en ajoutant des marges d'une couleur ou en comblant les vides avec une copie floutée d'elle-même – et téléchargez des fichiers qui remplissent l'écran d'un bord à l'autre. Tout se passe dans votre navigateur, sans inscription ni filigrane.",

  sections: [
    {
      heading: "Qu'est-ce que le format 9:16 ?",
      id: "ratio",
      body: [
        "Le format, ou rapport d'aspect, décrit la forme d'une image, notée largeur : hauteur. 9:16 signifie neuf unités de large pour seize de haut : un rectangle allongé, exactement la forme de l'écran d'un téléphone moderne tenu droit. C'est le 16:9 de la télévision et de YouTube, tourné de 90 degrés. Divisez 9 par 16 et vous obtenez 0,5625 ; toute image dont la largeur divisée par la hauteur donne 0,5625 est au format 9:16, quelle que soit sa taille.",
        "Le format ne dit rien, à lui seul, de la netteté. 720 × 1280, 1080 × 1920 et 2160 × 3840 sont tous au format 9:16 ; seul change le nombre de pixels qui portent l'image. C'est pourquoi une image 9:16 peut quand même paraître floue : la forme est bonne, mais les pixels sont trop peu nombreux pour un grand écran de téléphone.",
      ],
    },
    {
      heading: "Pourquoi 1080x1920 pixels est la norme",
      id: "pixels",
      body: [
        "1080 × 1920 (souvent écrit 1080x1920) est la Full HD redressée : 1080 pixels de large, 1920 pixels de haut, environ 2,1 mégapixels. C'est la taille que recommandent les grandes applications de vidéo verticale pour les publications plein écran, et celle à laquelle un téléphone filme en Full HD tenu à la verticale. Si vous envoyez plus grand, l'application réduit l'image ; si vous envoyez plus petit, elle l'agrandit, et c'est là que le flou s'installe.",
        "Enregistrée en JPG à la qualité par défaut de 92 %, une photo de 1080 × 1920 pèse en général quelques centaines de Ko : assez léger pour n'importe quel formulaire d'envoi, avec largement assez de détails pour l'écran.",
      ],
    },
    {
      heading: "Où l'on utilise les images 9:16",
      id: "uses",
      body: [
        "Stories et Reels Instagram : les Stories remplissent l'écran en 1080 × 1920. Les Reels sont lus à la même taille, mais la grille de votre profil en montre un aperçu recadré, gardez donc le sujet près du centre. Meta conseille de laisser environ 14 % libres en haut et en bas – soit à peu près 250 pixels – sans texte, car le nom du profil et la barre de réponse s'y affichent.",
        "TikTok et YouTube Shorts : les deux sont pensés d'abord pour la verticale, et les deux superposent des boutons le long du bord droit et la légende en bas. Placez tout ce qui doit être vu dans la partie centrale haute d'une diapositive ou d'une image de couverture en 1080 × 1920. Le Statut WhatsApp, Snapchat et les Stories Facebook remplissent l'écran de la même façon.",
        "Google Web Stories : chaque page d'une Web Story est un écran portrait à fond perdu, et le format 9:16 en 1080 × 1920 est celui qui le remplit sans bandes. Donner la même taille à toutes les pages évite aussi que la story saute quand le lecteur passe d'une page à l'autre. L'image d'affiche de la story a une autre forme – 3:4, au moins 640 × 853 pixels –, préparez-la donc à part.",
      ],
      link: {
        label: "Lire le guide : Google Web Stories avec des images d'IA (tailles, vitesse et règles de Google)",
        href: "/blog/google-web-stories-ai-images",
      },
    },
    {
      heading: "Passer au format 9:16 sans étirer l'image",
      id: "convert",
      body: [
        "Étirer une image jusqu'à 1080 × 1920 allonge les visages et transforme les cercles en ovales ; cet outil ne le fait donc jamais. Une image d'une autre forme devient 9:16 de l'une de trois façons honnêtes, et vous choisissez celle qui convient à l'image.",
        "« Recadrer pour remplir » (le réglage par défaut) agrandit l'image jusqu'à ce qu'elle couvre tout le cadre 9:16 et coupe ce qui dépasse. Il convient aux photos en portrait : une photo 3:4 prise au téléphone ne perd qu'un quart de sa largeur. Il est sévère avec les photos en paysage – une photo 4:3 ne garde que 42 % de sa largeur –, cliquez donc d'abord sur le bouton de recadrage de la vignette de l'image. La fenêtre de recadrage s'ouvre verrouillée en 9:16, et vous faites glisser le cadre sur la partie qui compte au lieu de vous contenter du centre.",
        "« Ajouter des marges » garde toute l'image et remplit les bandes au-dessus et en dessous avec la couleur choisie sous « Couleur des marges » – noir, blanc ou la couleur de votre marque. « Fond flouté » garde aussi toute l'image, mais remplit ces bandes avec une copie adoucie et agrandie de la même image, le rendu qu'utilisent Reels et TikTok pour les vidéos en paysage. C'est souvent le meilleur choix pour les photos larges, les captures d'écran et les diapositives : rien n'est perdu et l'écran paraît plein.",
      ],
    },
    {
      heading: "Garder une image nette",
      id: "sharp",
      body: [
        "Recadrer une image en paysage au format 9:16 laisse une tranche étroite qui fait souvent moins de 1080 pixels de large. Une capture d'écran de 1920 × 1080, recadrée en 9:16, ne mesure que 608 × 1080 ; il faut donc l'agrandir presque deux fois pour atteindre 1080 × 1920. Le « Fond flouté » évite ce problème : l'image s'affiche sur toute la largeur de 1080 pixels, que la capture de 1920 pixels couvre sans aucun agrandissement. Pour les images petites dès le départ, passez-les dans un agrandisseur par IA avant la conversion.",
        "Les générateurs d'images par IA produisent rarement du 9:16 en pleine taille. Beaucoup proposent un carré par défaut, l'option verticale de ChatGPT donne 1024 × 1536, c'est-à-dire du 2:3, et le 9:16 de Midjourney sort à environ 816 × 1456. Recadrez-les ou passez-les en fond flouté ici ; pour un résultat plus net, agrandissez d'abord celles de 816 × 1456.",
      ],
    },
  ],

  howToTitle: "Comment passer une image au format 9:16 (1080 × 1920)",
  steps: [
    { title: "Ajoutez vos images", description: "Sélectionnez un ou plusieurs fichiers JPG, PNG, WEBP, GIF ou BMP : photos, captures d'écran ou images d'IA." },
    { title: "Choisissez l'ajustement", description: "1080 × 1920 est déjà réglé. Choisissez « Recadrer pour remplir », « Ajouter des marges » ou « Fond flouté » ; pour recadrer à la main, utilisez le bouton de recadrage de la vignette." },
    { title: "Téléchargez", description: "Cliquez sur « Redimensionner et télécharger » pour obtenir une image 9:16, ou un ZIP si vous en avez ajouté plusieurs." },
  ],

  features: [
    { icon: "crop_portrait", title: "Exactement 1080 × 1920", description: "Chaque image sort au format 9:16 en Full HD, la taille attendue par les Stories, Reels, Shorts et Web Stories." },
    { icon: "blur_on", title: "Recadrage, marges ou flou", description: "Trois façons de changer la forme sans étirer, dont un fond flouté créé à partir de votre propre photo." },
    { icon: "lock", title: "Dans votre navigateur", description: "Vos images sont converties sur votre appareil et ne sont pas envoyées en ligne." },
  ],

  faqs: [
    { q: "Qu'est-ce que le format 9:16 ?", a: "Un rectangle vertical de neuf unités de large pour seize de haut, la forme d'un écran de téléphone tenu droit. C'est le format panoramique 16:9 tourné de 90 degrés." },
    { q: "Quelle taille en pixels pour une image 9:16 ?", a: "1080 × 1920 est la norme. 720 × 1280 et 2160 × 3840 sont aussi au format 9:16, avec moins ou plus de pixels ; 1080 × 1920 est la taille recommandée par la plupart des applications." },
    { q: "1080x1920, est-ce la même chose que 9:16 ?", a: "Oui. 1080 divisé par 1920 donne 0,5625, exactement 9 divisé par 16. Toute image de 1080 × 1920 est au format 9:16." },
    { q: "Comment passer une image au format 9:16 sans l'étirer ?", a: "Ajoutez-la ici et choisissez « Recadrer pour remplir », « Ajouter des marges » ou « Fond flouté ». Chacun donne exactement 1080 × 1920 en conservant les proportions de l'image ; aucun ne l'étire." },
    { q: "Puis-je choisir la partie de ma photo qui est gardée ?", a: "Oui. Avec « Recadrer pour remplir » sélectionné, cliquez sur le bouton de recadrage de la vignette de l'image. La fenêtre s'ouvre verrouillée en 9:16 ; faites glisser le cadre sur votre sujet et appliquez." },
    { q: "Quelle différence entre 9:16 et 16:9 ?", a: "L'orientation. Le 16:9 est horizontal (télévision, vidéos YouTube, écrans d'ordinateur portable) ; le 9:16 est la même forme debout (Stories, Reels, Shorts, écrans de téléphone)." },
    { q: "Pourquoi mon image 9:16 est-elle floue ?", a: "En général, la source avait trop peu de pixels : une tranche étroite prise dans une image en paysage est agrandie pour atteindre 1080 × 1920. Utilisez « Fond flouté », ou agrandissez d'abord l'image." },
    { q: "Instagram va-t-il recadrer mon image 9:16 ?", a: "Pas dans les Stories, qui affichent le 9:16 en entier. Un Reel est lui aussi lu en plein écran, mais son aperçu dans la grille de votre profil est recadré : gardez le sujet près du centre." },
    { q: "Puis-je convertir plusieurs images en 9:16 à la fois ?", a: "Oui. Ajoutez-les ensemble ; chacune passe en 1080 × 1920 avec l'ajustement choisi, et elles se téléchargent dans un seul ZIP." },
    { q: "Mes photos sont-elles envoyées sur un serveur pour la conversion ?", a: "Non. La conversion se fait dans votre navigateur. Seule une image trop grande pour être ouverte par votre navigateur est d'abord réduite sur notre serveur, puis supprimée aussitôt." },
    { q: "Quel format choisir pour un fond d'écran de téléphone ?", a: "Le 9:16 en 1080 × 1920 convient à la plupart des téléphones. Les écrans récents sont souvent un peu plus allongés (19,5:9 par exemple) ; le téléphone recadre alors légèrement les bords, gardez donc le sujet au centre." },
  ],

  security:
    "Vos images sont converties dans votre navigateur et ne sont pas envoyées en ligne. Seule une image trop lourde pour votre navigateur – une photo de très haute définition – est envoyée à notre serveur pour être réduite, puis supprimée dès son retour ; rien n'est conservé.",
};

export default content;
