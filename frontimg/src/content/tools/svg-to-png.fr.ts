import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/svg-en-png.
 *
 * Head term "SVG en PNG" (12.1K/mo) — French converter queries take the
 * "X en Y" form. Secondary "convertir SVG en PNG", used in the intro, a
 * heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "svg-to-png",
  locale: "fr",
  name: "SVG en PNG",
  tagline:
    "Convertissez un SVG en PNG en ligne à 1×, 2×, 4× ou à la largeur de votre choix : un rendu net à chaque taille, transparent ou sur un fond. Gratuit, par lots, et rien ne quitte votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "SVG en PNG – convertir SVG en PNG gratuit | oMyImage",
  metaDescription:
    "SVG en PNG gratuit : convertir SVG en PNG net à 1×, 2×, 4× ou à la largeur exacte, fond transparent, blanc ou coloré. Par lots, sans envoi ni inscription.",

  intro:
    "Le SVG est parfait jusqu'au jour où il faut le placer là où seules les images classiques sont acceptées : une publication sur un réseau social, une diapositive, un e-mail, une fiche d'application, une annonce sur une place de marché. Le convertisseur SVG en PNG d'oMyImage rend vos fichiers vectoriels en PNG exactement à la taille choisie, redessinés à cette résolution : une icône de 24 pixels exportée à 4× est aussi nette qu'une icône conçue à 96 pixels. Pour convertir SVG en PNG, gardez le fond transparent ou ajoutez du blanc ou une couleur, et traitez tout un dossier d'icônes d'un coup.",

  sections: [
    {
      heading: "Pourquoi convertir SVG en PNG",
      id: "why",
      body: [
        "Le SVG décrit des formes et non des pixels : c'est pour cela qu'il s'adapte à toutes les tailles et que les navigateurs l'adorent. Beaucoup d'autres endroits, en revanche, ne l'aiment pas. Les réseaux sociaux refusent les SVG, de nombreuses applications de messagerie et clients e-mail l'affichent comme une pièce jointe au lieu d'une image, les anciennes versions des logiciels de bureautique l'insèrent mal, et les places de marché, boutiques d'applications et services d'impression à la demande réclament du PNG ou du JPG.",
        "Le PNG est le partenaire naturel du SVG parce qu'il est sans perte et conserve la transparence : logos, icônes et illustrations en ressortent avec des contours propres et un fond transparent, exactement comme dans le navigateur.",
      ],
    },
    {
      heading: "Net à toutes les tailles",
      id: "sharp",
      body: [
        "Beaucoup de convertisseurs rendent le SVG à sa taille par défaut puis étirent l'image bitmap, ce qui donne des contours mous et flous à 2×, et pire à 4×. Cet outil fixe la taille cible sur le SVG lui-même avant de le dessiner : le navigateur pixellise les vecteurs directement à la résolution de sortie. Courbes, traits fins et petit texte sont aussi nets que le format le permet, à chaque taille.",
        "Cela signifie aussi que voir grand ne coûte rien en qualité : un logo exporté à 4000 pixels de large est un véritable rendu de 4000 pixels, adapté à l'impression et aux grands écrans. La sortie est plafonnée à 8192 pixels sur le côté le plus long, limite au-delà de laquelle les navigateurs de nombreux appareils ne dessinent plus de façon fiable.",
      ],
    },
    {
      heading: "Choisir une taille",
      id: "sizes",
      body: [
        "Les boutons de taille multiplient la taille inscrite dans le SVG. 1× donne la taille définie par le graphiste ; 2× est le choix standard pour les écrans haute résolution des téléphones et ordinateurs portables, où une image a besoin de deux fois plus de pixels pour paraître nette ; 4× convient aux grands écrans et à l'impression. Les fichiers sont nommés avec @2x ou @4x pour distinguer facilement les tailles.",
        "Choisissez « Largeur » pour fixer plutôt une largeur exacte en pixels, par exemple 512 pour une icône d'application ou 1200 pour une image de réseau social. La hauteur suit les proportions du SVG. Dans un lot, chaque fichier reçoit cette largeur.",
      ],
    },
    {
      heading: "Fond transparent, blanc ou coloré",
      id: "background",
      body: [
        "Par défaut, le PNG conserve la transparence du SVG, affichée sur un damier dans l'aperçu. Choisissez le blanc quand l'image part vers un endroit qui affiche la transparence en noir (certaines messageries et anciens logiciels de bureautique le font), ou une couleur pour la poser sur la couleur de votre marque dans une publication ou une diapositive.",
        "Si vous hésitez, gardez la transparence : un PNG transparent se pose sur n'importe quel fond, et vous pourrez toujours en ajouter un plus tard, alors qu'un fond plein ne se retire pas aussi facilement. Le réglage s'applique à tous les fichiers du lot.",
      ],
    },
    {
      heading: "Ce qui s'affiche, et ce qui ne s'affiche pas",
      id: "what-renders",
      body: [
        "Le SVG est converti par le moteur de rendu du navigateur lui-même, dans son mode image sécurisé. Formes, dégradés, masques, filtres et images intégrées s'affichent comme sur une page web. Tout ce qui nécessiterait Internet ou du code, en revanche, ne s'affiche pas : les scripts ne s'exécutent jamais, et les images, polices ou feuilles de style liées depuis d'autres sites ne sont pas chargées.",
        "Le texte est le point à surveiller. Si le SVG utilise une police web liée plutôt qu'intégrée, le texte bascule sur une police système. Pour garder la typographie exacte, vectorisez le texte (conversion en tracés) dans votre logiciel de design avant d'exporter le SVG, ou intégrez la police au fichier.",
      ],
    },
    {
      heading: "Les SVG sans taille",
      id: "no-size",
      body: [
        "Certains SVG, souvent des icônes exportées depuis des logiciels de design ou copiées depuis des bibliothèques d'icônes, ne définissent qu'une viewBox, voire aucune taille. Quand il y a une viewBox, ses dimensions servent de taille 1×. Quand il n'y a rien, la valeur par défaut du navigateur, 300 × 150 pixels, s'applique, et l'outil vous le signale ; choisissez « Largeur » pour fixer la taille que vous voulez réellement.",
      ],
    },
  ],

  howToTitle: "Comment convertir SVG en PNG",
  steps: [
    { title: "Ajoutez vos fichiers SVG", description: "Sélectionnez un ou plusieurs fichiers SVG, ou glissez-déposez-les." },
    { title: "Choisissez taille et fond", description: "Optez pour 1×, 2×, 4× ou une largeur exacte, et pour un fond transparent, blanc ou coloré." },
    { title: "Téléchargez", description: "Un PNG se télécharge directement ; plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Net à toutes les tailles", description: "Les vecteurs sont dessinés à la résolution de sortie, jamais étirés à partir d'une image plus petite." },
    { icon: "opacity", title: "Transparence conservée", description: "Le PNG garde le fond transparent du SVG, ou prend du blanc ou n'importe quelle couleur." },
    { icon: "burst_mode", title: "Conversion par lots", description: "Convertissez d'un coup un dossier d'icônes ou de logos et téléchargez un seul ZIP." },
  ],

  faqs: [
    { q: "Comment convertir SVG en PNG ?", a: "Ajoutez vos fichiers SVG, choisissez une taille et un fond, puis cliquez sur « Télécharger le PNG ». Plusieurs fichiers se téléchargent ensemble dans un ZIP." },
    { q: "Comment obtenir un PNG haute résolution à partir d'un SVG ?", a: "Choisissez 2× ou 4×, ou fixez une largeur exacte jusqu'à 8192 pixels. Les vecteurs sont dessinés à cette résolution : le PNG est net, pas étiré." },
    { q: "Le PNG aura-t-il un fond transparent ?", a: "Oui, par défaut. Vous pouvez aussi choisir le blanc ou n'importe quelle couleur comme fond." },
    { q: "Pourquoi le texte est-il différent dans le PNG ?", a: "Le SVG fait probablement appel à une police web qui n'est pas intégrée au fichier : une police système la remplace. Vectorisez le texte ou intégrez la police avant d'exporter le SVG." },
    { q: "Pourquoi mon PNG fait-il 300 × 150 pixels ?", a: "Le SVG ne définit ni taille ni viewBox : c'est donc la valeur par défaut du navigateur qui s'applique. Choisissez « Largeur » et saisissez la taille voulue." },
    { q: "Puis-je convertir plusieurs fichiers SVG à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : chacun est converti avec les mêmes réglages et tous sont téléchargés dans un seul ZIP." },
    { q: "Est-il sûr de convertir un SVG trouvé sur Internet ?", a: "Oui. Le SVG est dessiné dans le mode image du navigateur, où les scripts ne s'exécutent jamais et où rien n'est chargé depuis d'autres sites." },
    { q: "Mes fichiers sont-ils envoyés sur un serveur ?", a: "Non. Le SVG est lu et converti entièrement dans votre navigateur, et le PNG est créé sur votre appareil." },
    { q: "Quelle est la taille maximale du PNG ?", a: "Jusqu'à 8192 pixels sur le côté le plus long. Au-delà, les navigateurs de nombreux appareils ne peuvent plus dessiner l'image de façon fiable." },
    { q: "Puis-je convertir un SVG en JPG ?", a: "Convertissez ici en PNG avec un fond blanc, puis utilisez le convertisseur « PNG en JPG » si vous avez besoin d'un JPG." },
    { q: "Quelle taille choisir pour un logo ou une icône ?", a: "Pour un écran haute résolution, 2× suffit dans la plupart des cas. Pour une icône d'application, fixez une largeur de 512 ou 1024 pixels ; pour l'impression ou un grand écran, choisissez 4× ou une largeur de plusieurs milliers de pixels." },
  ],

  security:
    "Vos fichiers SVG sont lus et convertis en PNG entièrement dans votre navigateur. Rien n'est envoyé, les scripts contenus dans le SVG ne s'exécutent jamais et aucune ressource externe n'est chargée.",

  ui: {
    // SvgToPngTool.tsx
    "Select SVG files": "Sélectionner des fichiers SVG",
    "or drop SVG files here": "ou déposez ici des fichiers SVG",
    "Please select SVG files.": "Sélectionnez des fichiers SVG.",
    "{name} is not a valid SVG.": "{name} n'est pas un SVG valide.",
    "Download PNG": "Télécharger le PNG",
    "Download PNGs (ZIP)": "Télécharger les PNG (ZIP)",
    "Clear images": "Retirer les images",
    "PNG settings": "Paramètres PNG",
    "Preview": "Aperçu",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "Preview shows the first of {n} files": "L'aperçu montre le premier des {n} fichiers",
    "Last download: {size}": "Dernier téléchargement : {size}",
    "Change files": "Changer de fichiers",
    "This SVG sets no size, so it is treated as 300 × 150 px — the browser default. Use a width to choose the output size.":
      "Ce SVG ne définit aucune taille : il est donc traité comme 300 × 150 px, la valeur par défaut du navigateur. Fixez une largeur pour choisir la taille de sortie.",
    "Your SVG files are converted in your browser and never uploaded.": "Vos fichiers SVG sont convertis dans votre navigateur et ne sont jamais envoyés.",
    "Size": "Taille",
    "Width": "Largeur",
    "Width (px)": "Largeur (px)",
    "Multiplies the size set in the SVG. 2× is sharp on high-resolution screens.":
      "Multiplie la taille définie dans le SVG. 2× est net sur les écrans haute résolution.",
    "Background": "Fond",
    "Background colour": "Couleur de fond",
    "Converting…": "Conversion…",
    "Processing failed.": "Le traitement a échoué.",
  },
};

export default content;
