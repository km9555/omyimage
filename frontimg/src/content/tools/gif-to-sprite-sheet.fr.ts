import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.fr";

/**
 * French copy for /fr/gif-en-sprite-sheet. Target query: « GIF en sprite
 * sheet » (France, Nov 2026). French game developers use the English term
 * « sprite sheet »; « planche de sprites » and « spritesheet » appear once
 * each in the body as the natural variants.
 */
const content: ToolPageContent = {
  toolId: "gif-to-sprite-sheet",
  locale: "fr",
  name: "GIF en sprite sheet",
  tagline:
    "Disposez toutes les images d'un GIF animé sur une seule sprite sheet PNG, en grille, sur une ligne ou en colonne, avec un espacement et une animation CSS prête à l'emploi. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF en sprite sheet – créer une spritesheet | oMyImage",
  metaDescription:
    "GIF en sprite sheet en ligne et gratuit : toutes les images du GIF sur un PNG, en grille, en ligne ou en colonne, avec espacement et animation CSS. Sans envoi.",

  intro:
    "Une sprite sheet, ou planche de sprites, place toutes les images (frames) d'une animation côte à côte sur une seule image. Les jeux et les pages web affichent ensuite une image à la fois en déplaçant une fenêtre sur la planche, ce qui se charge plus vite et se contrôle mieux qu'un GIF. Avec « GIF en sprite sheet » d'oMyImage, vous transformez n'importe quel GIF animé en spritesheet PNG transparente en quelques clics : choisissez une grille, une seule ligne ou une seule colonne, décidez combien d'images garder et à quelle taille, ajoutez un espacement si votre moteur en a besoin, puis copiez le CSS qui lit l'animation.",

  sections: [
    {
      heading: "Grille, ligne ou colonne",
      id: "layout",
      body: [
        "Une grille range les images en lignes et en colonnes, ce qui garde la planche à peu près carrée : la forme que préfèrent la plupart des moteurs de jeu et des outils de textures. Vous choisissez le nombre de colonnes ; le nombre de lignes découle du nombre d'images.",
        "Une ligne ou une colonne place toutes les images à la suite. C'est la disposition la plus simple à animer en CSS, et l'outil écrit la feuille de style pour vous : la taille d'une image, l'arrière-plan et une animation steps() qui parcourt la bande au rythme du GIF.",
      ],
    },
    {
      heading: "Images, taille et espacement",
      id: "options",
      body: [
        "Garder une image sur deux ou sur trois divise la planche par deux ou par trois tout en laissant le mouvement reconnaissable, ce qui compte pour les GIF longs. La taille des images réduit chacune à 75, 50 ou 25 % pour les petites icônes et les petits personnages.",
        "L'espacement ajoute un écart de 2, 4 ou 8 pixels entre les images. Les moteurs qui lissent ou mettent à l'échelle les textures peuvent récupérer une ligne de pixels de l'image voisine quand les images se touchent ; un petit écart évite ce débordement. L'arrière-plan reste transparent, sauf si vous choisissez une couleur.",
      ],
    },
    {
      heading: "Utiliser la planche dans un moteur de jeu",
      id: "engines",
      body: [
        "Le panneau de réglages affiche la taille d'une image ainsi que le nombre de colonnes et de lignes : exactement les valeurs dont un moteur a besoin pour découper la planche. Dans Phaser, Godot, Unity, GameMaker et les outils similaires, importez le PNG, indiquez la largeur et la hauteur d'une image et ajoutez l'espacement si vous en avez utilisé un. L'ordre des images du GIF d'origine est respecté, de gauche à droite et de haut en bas.",
        "Un GIF peut avoir une pause différente sur chaque image ; la plupart des moteurs lisent une planche à une cadence unique, réglez-la donc sur la vitesse souhaitée.",
      ],
    },
    {
      heading: "Utiliser la planche en CSS",
      id: "css",
      body: [
        "Avec une ligne ou une colonne, le résultat comprend un court bloc CSS : un élément de la taille d'une image, la planche en arrière-plan et une animation keyframes avec steps(), pour que l'arrière-plan saute d'une image à l'autre au lieu de glisser. Collez-le dans votre feuille de style, donnez la classe sprite à un élément, et l'animation se lance sans aucun script.",
        "Le CSS répartit la durée totale du GIF de façon égale entre les images : un GIF aux pauses irrégulières est donc lu à un rythme constant.",
      ],
    },
    {
      heading: "Limites de taille",
      id: "limits",
      body: [
        "Les navigateurs ne peuvent pas créer une image de plus de 16 384 pixels de large ou de haut, et Safari s'arrête vers 16,7 millions de pixels au total. Un GIF long disposé sur une seule ligne atteint vite cette limite. Quand une planche serait trop grande, l'outil vous le signale ; utilisez alors une grille, gardez moins d'images ou choisissez une taille d'image plus petite.",
      ],
    },
    {
      heading: "Usages sur le web et dans le jeu vidéo",
      id: "uses",
      body: [
        "Les sprite sheets servent pour les boutons animés, les indicateurs de chargement et les icônes des sites web, pour les personnages et les effets des jeux en 2D, et pour les prototypes où l'on veut tester une animation rapidement. Un GIF que vous possédez déjà est souvent le point de départ le plus rapide : au lieu d'exporter chaque image séparément, vous obtenez la planche terminée en une seule étape.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé et la planche est dessinée entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée. Pour obtenir les images sous forme de fichiers séparés plutôt que sur une seule planche, utilisez « GIF en images ».",
      ],
    },
  ],

  howToTitle: "Comment créer une sprite sheet à partir d'un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez la disposition", description: "Grille, une ligne ou une colonne ; réglez les images, la taille, l'espacement et le fond." },
    { title: "Créez et téléchargez", description: "Cliquez sur « Créer la sprite sheet », copiez le CSS si besoin et téléchargez le PNG." },
  ],

  features: [
    { icon: "grid_view", title: "Toutes les dispositions", description: "Une grille avec le nombre de colonnes de votre choix, une seule ligne ou une seule colonne." },
    { icon: "code", title: "CSS inclus", description: "Une animation steps() prête à l'emploi pour les planches en ligne ou en colonne." },
    { icon: "lock", title: "Aucun envoi", description: "Création entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment transformer un GIF en sprite sheet ?", a: "Ajoutez le GIF, choisissez une grille, une ligne ou une colonne, puis cliquez sur « Créer la sprite sheet ». Téléchargez ensuite le PNG." },
    { q: "Qu'est-ce qu'une sprite sheet ?", a: "Une seule image qui contient toutes les images d'une animation, disposées côte à côte." },
    { q: "L'arrière-plan est-il transparent ?", a: "Oui, par défaut. Vous pouvez aussi choisir une couleur unie." },
    { q: "Puis-je choisir le nombre de colonnes ?", a: "Oui. En disposition en grille, saisissez le nombre de colonnes ; le nombre de lignes découle du nombre d'images." },
    { q: "Pourquoi ajouter un espacement entre les images ?", a: "Certains moteurs mélangent les pixels voisins quand ils mettent les textures à l'échelle ; un petit écart empêche les images de déborder les unes sur les autres." },
    { q: "Comment animer la planche en CSS ?", a: "Choisissez une ligne ou une colonne et copiez le CSS affiché avec le résultat." },
    { q: "Pourquoi ma planche est-elle trop grande ?", a: "Les navigateurs ne peuvent pas créer d'images de plus de 16 384 pixels de côté. Utilisez une grille, gardez moins d'images ou réduisez-les." },
    { q: "Toutes les images sont-elles conservées ?", a: "Oui, sauf si vous choisissez de garder une image sur deux ou sur trois." },
    { q: "Y a-t-il une perte de qualité ?", a: "Non. À 100 % de la taille, les images sont copiées pixel par pixel dans un PNG." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Puis-je obtenir les images sous forme de fichiers séparés ?", a: "Oui, avec « GIF en images »." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "La sprite sheet fonctionne-t-elle dans Unity ou Godot ?", a: "Oui. Importez le PNG et indiquez la taille d'image, les colonnes, les lignes et l'espacement affichés par l'outil." },
  ],

  security:
    "Votre GIF est transformé en sprite sheet entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifExportTool.tsx is shared with gif-to-webp; reuse its translations.
  ui: webp.ui,
};

export default content;
