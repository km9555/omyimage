import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/creer-gif.
 *
 * Target query « Créer un GIF » leads the h1 — French speakers search the
 * verb. « faire un GIF » rides in the intro, a heading and an FAQ; « GIF
 * maker » (KD 77) is contested, so it appears only in the metaTitle, the
 * metaDescription and one FAQ. A GIF frame is « image » here (each input image
 * becomes one frame), with « frame » named once in the intro.
 */
const content: ToolPageContent = {
  toolId: "gif-maker",
  locale: "fr",
  name: "Créer un GIF",
  tagline:
    "Créez un GIF animé à partir de vos images en ligne : réglez la vitesse, l'ordre, la taille et la boucle avec un aperçu en direct. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Créer un GIF – GIF maker gratuit en ligne | oMyImage",
  metaDescription:
    "Créer un GIF animé avec vos images : ce GIF maker gratuit affiche un aperçu en direct de la vitesse, de l'ordre et de la boucle. Sans inscription ni filigrane.",

  intro:
    "Transformez une série d'images en une animation qui tourne en boucle. Avec « Créer un GIF » d'oMyImage, vous faites un GIF animé avec vos photos directement dans votre navigateur : aperçu en direct, vitesse réglable, taille de sortie, gestion de la boucle et images (frames) que vous pouvez réordonner. Faire un GIF de réaction, un diaporama ou une petite animation ne prend que quelques secondes, et le téléchargement est immédiat. Rien n'est envoyé sur un serveur : vos images restent privées. Vous pouvez aussi ouvrir un GIF existant pour retravailler ses images une à une.",

  sections: [
    {
      heading: "Pourquoi le GIF survit",
      id: "why",
      body: [
        "Sur le plan technique, le GIF aurait dû disparaître depuis des décennies. Il date de 1987, se limite à 256 couleurs par image, compresse mal, et une vidéo fait le même travail pour une fraction du poids avec une qualité bien supérieure.",
        "Il survit grâce à tout ce dont il n'a pas besoin. Un GIF se lance tout seul, tourne en boucle à l'infini, ne demande ni lecteur, ni commandes, ni clic de l'utilisateur, et fonctionne là où la vidéo ne passe pas : applications de messagerie, fichiers README sur les plateformes de code, certains clients mail, forums, et tout système qui le traite simplement comme une image.",
        "Tout le raisonnement tient là. Si votre destination accepte la vidéo, utilisez une vidéo. Si elle n'accepte que des images, le GIF est la seule option animée dont vous disposez.",
      ],
    },
    {
      heading: "La limite des 256 couleurs",
      id: "colours",
      body: [
        "Le GIF enregistre une palette de 256 couleurs au maximum par image, et chaque pixel doit utiliser l'une d'elles. Pour les illustrations en aplats, les dessins au trait, les captures d'écran d'interfaces et les animations de logos, c'est largement suffisant : ces images contiennent rarement davantage de couleurs distinctes.",
        "Les photos sont le cas difficile. Une seule image d'une scène réelle contient des milliers de couleurs différentes ; l'encodeur doit donc en choisir 256 et approcher le reste. Le tramage (dithering) disperse des pixels de couleurs voisines de la palette pour simuler les nuances intermédiaires : c'est ce qui donne aux GIF photographiques cet aspect moucheté et légèrement granuleux, surtout visible dans le ciel et sur la peau.",
        "Le format ne permet pas d'y remédier. Si les bandes de couleur sont inacceptables, la solution est une vidéo, pas un meilleur GIF.",
      ],
    },
    {
      heading: "Faire un GIF plus léger",
      id: "size",
      body: [
        "Trois facteurs déterminent le poids, et les dimensions dominent. Chaque image stocke l'intégralité du visuel : diviser la largeur et la hauteur par deux laisse un quart des données dans chacune. C'est de loin le levier le plus efficace, et un GIF de 480 pixels de large s'affiche parfaitement dans une fenêtre de discussion ou un README.",
        "Vient ensuite le nombre d'images. Moins d'images rendent l'animation un peu plus saccadée, mais le fichier diminue dans la même proportion, et beaucoup de boucles passent très bien à 8–12 images par seconde au lieu de 24. Raccourcir la séquence pour ne garder que les images qui portent l'action est presque toujours indolore.",
        "Le troisième facteur est la durée de la boucle. Une boucle de deux secondes répétée à l'infini se regarde mieux qu'une boucle de dix secondes, et elle pèse cinq fois moins. Résister à l'envie de tout inclure est la meilleure habitude à prendre.",
      ],
    },
    {
      heading: "Rythme et durées",
      id: "timing",
      body: [
        "La durée de chaque image fixe le rythme. Environ 100 ms par image donnent à peu près dix images par seconde : assez fluide pour la plupart des boucles courtes, sans le surpoids d'une cadence plus élevée. En dessous de 60 ms environ, vous payez beaucoup d'octets pour une fluidité que presque personne ne remarquera.",
        "Avec des durées plus longues, l'animation devient un diaporama, et c'est souvent exactement ce que vous voulez. Un tutoriel pas à pas, plusieurs vues d'un produit ou une comparaison avant/après se lisent mieux à 500–800 ms par image : le spectateur a le temps d'assimiler chaque visuel avant qu'il ne change.",
        "Une astuce pratique : si la boucle se répète à l'infini, gardez la dernière image affichée un peu plus longtemps. L'œil a ainsi un court instant de repos et l'animation paraît moins frénétique. Chaque image peut avoir sa propre durée, il suffit donc de modifier la dernière.",
      ],
    },
  ],

  howToTitle: "Comment faire un GIF animé",
  steps: [
    { title: "Importez les images", description: "Sélectionnez au moins deux images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Réglez les durées", description: "Réordonnez les images, définissez la vitesse pour toutes ou pour chacune, puis choisissez la taille, l'ajustement, les couleurs et la boucle, le tout avec un aperçu en direct." },
    { title: "Créez et téléchargez", description: "Cliquez sur « Créer le GIF » : il est généré dans le navigateur, vous voyez l'animation terminée et son poids, puis vous la téléchargez quand elle vous convient." },
  ],

  features: [
    { icon: "gif_box", title: "Aperçu animé en direct", description: "Regardez votre animation tourner à la vitesse exacte avant de l'exporter, sans deviner." },
    { icon: "speed", title: "Contrôle total", description: "Réglez la durée pour toutes les images ou pour chacune, inversez la séquence ou jouez-la en boomerang, et choisissez la taille de sortie, l'ajustement, le nombre de couleurs, la boucle et le fond." },
    { icon: "lock", title: "100 % privé", description: "Le GIF est encodé entièrement dans votre navigateur : vos images ne sont jamais envoyées." },
  ],

  faqs: [
    { q: "Combien d'images puis-je utiliser ?", a: "Au moins deux, et autant que vous le souhaitez : chaque image devient une image de l'animation." },
    { q: "Puis-je régler la vitesse ?", a: "Oui, à deux niveaux. Le curseur de durée par image fixe le temps par défaut de chacune, affiché en millisecondes et en images par seconde, et chaque image peut recevoir sa propre durée. Pratique pour s'attarder sur un titre ou sur l'image finale." },
    { q: "Et si mes images n'ont pas la même taille ?", a: "Elles sont ajustées dans un canevas commun assez grand pour toutes les contenir. « Contenir » affiche chaque image en entier et comble la différence avec votre couleur de fond, « Couvrir » remplit le canevas et recadre ce qui dépasse, et « Étirer » force un ajustement exact." },
    { q: "Puis-je modifier un GIF existant ?", a: "Oui. Déposez un GIF : il est redécoupé en ses images, chacune avec sa durée d'origine. Vous pouvez ensuite les réordonner, les supprimer, changer les durées, inverser la séquence ou en faire un boomerang, puis exporter à nouveau." },
    { q: "Le GIF peut-il avoir un fond transparent ?", a: "Oui : choisissez « Transparent » au lieu d'une couleur et les zones transparentes de vos images le restent. En GIF, la transparence est en tout ou rien pour chaque pixel, donc les bords adoucis deviennent nets et crénelés. Si cela vous gêne, placez plutôt une couleur unie derrière." },
    { q: "Est-ce gratuit et privé ?", a: "Oui. Sans inscription et sans filigrane, et le GIF est créé localement dans votre navigateur." },
    { q: "Pourquoi mon GIF est-il si lourd ?", a: "Parce que le GIF est un format ancien, à la compression faible, incapable d'écarter des détails comme le font les codecs modernes. Chaque image alourdit le fichier, et le contenu photographique est le pire des cas. Réduire les dimensions, utiliser moins d'images et raccourcir la boucle sont les trois leviers qui comptent." },
    { q: "Comment réduire le poids du fichier ?", a: "Réduisez d'abord les dimensions en pixels : avec une largeur et une hauteur divisées par deux, chaque image pèse quatre fois moins. Utilisez ensuite moins d'images et gardez une boucle courte. Un GIF de 480 pixels de large et 15 images est un objectif raisonnable ; 800 pixels et 60 images l'est rarement." },
    { q: "Pourquoi les couleurs forment-elles des bandes ?", a: "Le GIF accepte au maximum 256 couleurs : tout ce qui comporte des dégradés (ciel, tons chair, ombres) doit être approché, et les sauts entre les couleurs restantes apparaissent sous forme de bandes. Cet outil construit une seule palette partagée pour toute l'animation, si bien que les couleurs restent stables d'une image à l'autre au lieu de varier. Les graphismes en aplats et les illustrations supportent bien mieux cette limite que les photos." },
    { q: "Quelle durée par image choisir ?", a: "Environ 100 ms par image donnent à peu près 10 images par seconde, ce qui paraît fluide pour la plupart des boucles courtes. Des durées plus courtes semblent plus fluides mais multiplient le poids du fichier ; des durées plus longues se lisent comme un diaporama, souvent le bon choix pour une séquence pas à pas." },
    { q: "Puis-je faire un GIF à partir d'une vidéo ?", a: "Pas avec cet outil : il crée un GIF à partir d'images fixes que vous fournissez. Pour une vidéo, utilisez « Vidéo en GIF ». Pour une série de captures d'écran, plusieurs vues d'un produit ou une séquence en stop motion, c'est exactement l'outil qu'il vous faut." },
    { q: "Vaut-il mieux un GIF ou une vidéo ?", a: "Une vidéo, presque toujours, si la plateforme l'accepte : un court MP4 pèse une fraction du poids pour une bien meilleure qualité. Le GIF ne l'emporte que là où compte la lecture automatique partout, sans lecteur : applications de messagerie, fichiers README, certains clients mail et vieux forums." },
    { q: "Est-ce un GIF maker sans filigrane ?", a: "Oui. Le GIF terminé ne porte aucun logo ni aucune mention d'oMyImage, et aucun compte n'est nécessaire. Il n'y a pas non plus de limite quotidienne au nombre de GIF que vous pouvez créer." },
  ],

  security:
    "Vos images restent privées. Le GIF est encodé entièrement dans votre navigateur avec la bibliothèque open source gifenc, et un GIF importé y est aussi décodé, avec gifuct-js. Rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // GifMakerTool.tsx — module-scope FIT_LABELS
    "Contain": "Contenir",
    "Cover": "Couvrir",
    "Stretch": "Étirer",
    "Custom": "Personnalisée",
    // GifMakerTool.tsx
    "Couldn't read 1 image. It's marked and will be skipped.":
      "Impossible de lire 1 image. Elle est signalée et sera ignorée.",
    "Couldn't read {n} images. They're marked and will be skipped.":
      "Impossible de lire {n} images. Elles sont signalées et seront ignorées.",
    "Please select image files.": "Sélectionnez des fichiers image.",
    "Imported 1 frame from {name}.": "1 image importée depuis {name}.",
    "Imported {n} frames from {name}.": "{n} images importées depuis {name}.",
    "Couldn't read {name}.": "Impossible de lire {name}.",
    "Add at least two images to make an animation.": "Ajoutez au moins deux images pour créer une animation.",
    "Canvas is not supported in this browser.": "Ce navigateur ne prend pas en charge Canvas.",
    "Created a GIF from {n} frames ({size}).": "GIF créé à partir de {n} images ({size}).",
    "Couldn't create the GIF.": "Impossible de créer le GIF.",
    "or drop two or more JPG, PNG or WEBP images here — or a GIF to re-edit":
      "ou déposez ici au moins deux images JPG, PNG ou WebP, ou un GIF à retravailler",
    "Unreadable — skipped": "Illisible : ignorée",
    "Delay": "Durée",
    "Frame delay for {name}, in milliseconds": "Durée de l'image {name}, en millisecondes",
    "Clear frames": "Retirer toutes les images",
    "Remove": "Retirer",
    "GIF settings": "Paramètres du GIF",
    "Create": "Créer",
    "Building GIF…": "Création du GIF…",
    "Live preview": "Aperçu en direct",
    "1 frame": "1 image",
    "{n} frames": "{n} images",
    "{s}s per loop": "{s} s par boucle",
    "Your GIF": "Votre GIF",
    "Finished GIF": "GIF terminé",
    "Download GIF": "Télécharger le GIF",
    "Animation Settings": "Paramètres de l'animation",
    "Encoding frame {done} of {total}…": "Encodage de l'image {done} sur {total}…",
    "Set the order with the arrows. The preview plays at your chosen speed.":
      "Définissez l'ordre avec les flèches. L'aperçu tourne à la vitesse choisie.",
    "Create GIF": "Créer le GIF",
    "Frame delay": "Durée par image",
    "Applies to frames without their own delay.": "S'applique aux images sans durée propre.",
    "Playback": "Lecture",
    "Reverse": "Inverser",
    "Boomerang": "Boomerang", // i18n-same
    "Looping": "Boucle",
    "Loop forever": "Boucle infinie",
    "Play once": "Lire une fois",
    "Repeat a set number of times": "Répéter un nombre de fois défini",
    "Number of repeats": "Nombre de répétitions",
    "Max size (longest side)": "Taille max. (côté le plus long)",
    "Custom max size in pixels": "Taille max. personnalisée en pixels",
    "Fit": "Ajustement",
    "Contain keeps the whole frame (may add margins). Cover fills the canvas (may crop). Stretch distorts to fill exactly.":
      "« Contenir » conserve l'image entière (des marges peuvent apparaître). « Couvrir » remplit le canevas (l'image peut être recadrée). « Étirer » déforme l'image pour remplir exactement.",
    "Colours": "Couleurs",
    "GIF stores at most 256 colours. Lowering this shrinks the file; flat graphics survive it far better than photos.":
      "Le GIF stocke 256 couleurs au maximum. Baisser cette valeur allège le fichier ; les graphismes en aplats le supportent bien mieux que les photos.",
    "Background (behind transparent areas)": "Fond (derrière les zones transparentes)",
  },
};

export default content;
