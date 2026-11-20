import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.fr";

/**
 * French copy for /fr/arrondir-coins-image. Target query: « Arrondir les coins
 * d'une image » (France, Nov 2026); secondary « coins arrondis » in the
 * metaTitle, intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "round-corners",
  locale: "fr",
  name: "Arrondir les coins d'une image",
  tagline:
    "Donnez des coins arrondis à vos images, avec le rayon de votre choix et sur les coins de votre choix, avec des bords transparents en PNG ou une couleur de fond au choix. Plusieurs images à la fois. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Arrondir les coins d'une image – coins arrondis | oMyImage",
  metaDescription:
    "Arrondir les coins d'une image en ligne et gratuitement : coins arrondis pour JPG, PNG et WebP, avec le rayon voulu, transparents ou en couleur. Sans envoi.",

  intro:
    "Les coins arrondis donnent à une image un aspect fini : les icônes d'applications, les cartes des sites web, les diapositives et les publications sur les réseaux sociaux les utilisent tous. « Arrondir les coins d'une image » d'oMyImage découpe les coins de vos images JPG, PNG et WebP selon le rayon choisi, sur les quatre coins ou seulement sur certains, et laisse transparentes les parties retirées pour que l'image se pose proprement sur n'importe quel fond. Obtenez des coins arrondis en regardant l'aperçu évoluer pendant que vous faites glisser le curseur, puis téléchargez une image ou tout un lot.",

  sections: [
    {
      heading: "Choisir le rayon",
      id: "radius",
      body: [
        "Le rayon est défini en proportion du plus petit côté de l'image : un même réglage donne donc le même rendu sur une petite icône et sur une grande bannière. Autour de 5 à 10 %, c'est l'arrondi léger d'une carte de site web ; de 15 à 25 %, on obtient l'allure d'une icône d'application ; à 50 %, un rectangle devient une pilule et une image carrée un cercle parfait.",
        "Décochez des coins pour n'en arrondir que certains : les deux du haut pour un onglet ou un en-tête de carte, ou un seul coin pour une forme de bulle ou d'étiquette.",
      ],
    },
    {
      heading: "Coins transparents ou en couleur",
      id: "background",
      body: [
        "Des coins transparents exigent un format qui gère la transparence : la sortie est donc en PNG par défaut ; le WebP fonctionne aussi et pèse moins. Si l'image doit aller sur une page, une diapositive ou un document au fond connu, vous pouvez plutôt remplir les coins avec cette couleur, ce qui permet aussi d'enregistrer en JPG.",
        "Le JPG ne sait pas du tout stocker la transparence. Quand vous choisissez le JPG, les coins sont remplis avec la couleur de fond, blanche sauf si vous en choisissez une autre.",
      ],
    },
    {
      heading: "Où les coins arrondis sont utiles",
      id: "uses",
      body: [
        "Les captures d'écran aux coins arrondis ont un rendu soigné dans la documentation, les publications et les diapositives. Les photos de produits et les portraits d'équipe paraissent plus chaleureux sur un site web. Les icônes d'applications et de jeux demandent des carrés arrondis ; les photos de profil sont souvent plus belles en cercle. Des miniatures en grille paraissent plus ordonnées quand elles partagent toutes le même rayon : ajoutez toute la série d'un coup et ce sera le cas.",
      ],
    },
    {
      heading: "Cercles et autres formes",
      id: "shapes",
      body: [
        "Un rayon de 50 % sur une image carrée donne un cercle exact. Pour obtenir un cercle à partir d'une photo rectangulaire, en choisissant la partie qui se retrouve à l'intérieur, utilisez « Recadrer une photo en cercle », qui permet de déplacer et de redimensionner le cercle. Pour ajouter un cadre ou un bord coloré autour de l'image arrondie, utilisez ensuite « Ajouter une bordure à une image ».",
      ],
    },
    {
      heading: "Plusieurs images à la fois",
      id: "batch",
      body: [
        "Ajoutez autant d'images que nécessaire : le même rayon et les mêmes coins s'appliquent à chacune, à l'échelle de sa taille. L'aperçu montre la première image, chaque fichier reçoit son propre bouton de téléchargement une fois traité, et plusieurs fichiers se téléchargent ensemble dans un ZIP.",
      ],
    },
    {
      heading: "Des coins identiques dans tout un design",
      id: "consistency",
      body: [
        "Utilisez le même rayon partout dans un même design : des cartes, des boutons et des images qui partagent un rayon d'angle semblent faire partie d'un tout. Comme le rayon est ici une proportion du plus petit côté, un seul réglage harmonise tout le lot en proportion. Pour obtenir le même rayon en pixels sur des images de tailles différentes, donnez-leur d'abord une taille commune avec « Redimensionner une image ».",
      ],
    },
    {
      heading: "Des images aux coins arrondis dans les présentations et les documents",
      id: "office",
      body: [
        "PowerPoint, Keynote et Word savent rogner une image avec des coins arrondis, mais la forme se perd souvent dès que vous copiez l'image dans un autre logiciel, que vous l'exportez en PDF ou que vous la publiez sur un site web. Un PNG aux coins déjà arrondis et transparents, en revanche, s'affiche de la même façon partout : dans les diapositives, les e-mails, les documents et sur les réseaux sociaux.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque image est arrondie entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment arrondir les coins d'une image",
  steps: [
    { title: "Ajoutez des images", description: "Sélectionnez une ou plusieurs images JPG, PNG ou WebP." },
    { title: "Réglez le rayon", description: "Faites glisser le curseur du rayon, choisissez les coins et le fond." },
    { title: "Arrondissez et téléchargez", description: "Cliquez sur « Arrondir les coins » pour télécharger un PNG, ou un ZIP s'il y en a plusieurs." },
  ],

  features: [
    { icon: "rounded_corner", title: "Tous les rayons", description: "Du bord adouci à la pilule ou au cercle, sur les coins de votre choix." },
    { icon: "visibility", title: "Bords transparents", description: "Le PNG et le WebP laissent les coins transparents." },
    { icon: "lock", title: "Aucun envoi", description: "Arrondi entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment arrondir les coins d'une image ?", a: "Ajoutez l'image, réglez le rayon et cliquez sur « Arrondir les coins ». Un PNG aux coins transparents se télécharge." },
    { q: "Pourquoi le résultat est-il un PNG ?", a: "Des coins transparents exigent le PNG ou le WebP. Choisissez le JPG pour remplir plutôt les coins avec une couleur." },
    { q: "Puis-je arrondir seulement certains coins ?", a: "Oui. Décochez les coins que vous voulez garder à angle droit." },
    { q: "Comment obtenir un cercle ?", a: "Utilisez un rayon de 50 % sur une image carrée. Pour les autres photos, « Recadrer une photo en cercle » permet de positionner le cercle." },
    { q: "Les coins peuvent-ils être colorés plutôt que transparents ?", a: "Oui. Choisissez une couleur de fond, ou enregistrez en JPG." },
    { q: "Puis-je arrondir plusieurs images à la fois ?", a: "Oui. Le même rayon s'applique à chacune, et elles se téléchargent dans un ZIP." },
    { q: "Quel rayon utilisent les icônes d'applications ?", a: "Environ 20 à 25 % du côté pour un rendu moderne en carré arrondi." },
    { q: "La qualité baisse-t-elle ?", a: "Non. Le PNG garde chaque pixel ; seuls les coins sont découpés." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans n'importe quel navigateur mobile." },
    { q: "Puis-je aussi ajouter une bordure ?", a: "Oui. Utilisez ensuite « Ajouter une bordure à une image » sur l'image arrondie." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Puis-je l'utiliser pour des photos de profil ?", a: "Oui. Une photo carrée à 50 % devient un cercle, et les coins transparents permettent de la poser sur n'importe quel fond." },
    { q: "Les coins arrondis sont-ils conservés dans Word ou PowerPoint ?", a: "Oui. En PNG aux coins transparents, l'image s'affiche de la même façon dans n'importe quel logiciel, y compris après un export en PDF." },
  ],

  security:
    "Vos images sont arrondies entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
