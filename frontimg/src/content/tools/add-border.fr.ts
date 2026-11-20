import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/ajouter-bordure-image.
 *
 * Primary query « Ajouter une bordure à une image »; secondary « cadre photo ».
 * « Passe-partout » is the framing term for the inner mat, understood across
 * France, Belgium, Switzerland and Québec.
 */
const content: ToolPageContent = {
  toolId: "add-border",
  locale: "fr",
  name: "Ajouter une bordure à une image",
  tagline:
    "Ajoutez une bordure ou un cadre de couleur à vos images en ligne, avec épaisseur réglable, coins arrondis, aperçu en direct et traitement par lot. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Ajouter une bordure à une image – cadre photo | oMyImage",
  metaDescription:
    "Ajoutez une bordure à une image : cadre photo en ligne avec couleur, épaisseur, coins arrondis, passe-partout et légende. Par lot, gratuit et sans rien envoyer.",

  intro:
    "Encadrez vos photos pour leur donner une finition nette et soignée. L'outil Ajouter une bordure à une image d'oMyImage entoure n'importe quelle image d'une bordure de couleur directement dans votre navigateur, avec le contrôle de l'épaisseur, de la couleur et des coins arrondis, et un aperçu en direct. Un cadre photo en ligne, sans logiciel à installer : encadrez une seule image ou tout un lot et téléchargez le résultat aussitôt. Rien n'est envoyé sur un serveur, vos images restent donc privées.",

  sections: [
    {
      heading: "À quoi sert vraiment une bordure",
      id: "why",
      body: [
        "La raison la plus pratique, c'est la séparation. Une photo aux bords clairs posée sur une page blanche n'a pas de limite visible : le ciel se fond dans le fond de page et l'image cesse de ressembler à un objet. Une fine bordure rétablit le contour, et l'image paraît voulue plutôt que le fruit d'une erreur de mise en page.",
        "La deuxième raison, c'est l'adaptation au format. Réseaux sociaux, places de marché et services d'impression exigent souvent des proportions précises, et le réflexe habituel est de recadrer. Ajouter des marges avec une bordure donne les bonnes proportions tout en gardant la composition entière, ce qui compte quand la partie recadrée était justement l'intérêt de la photo.",
        "La troisième, c'est la cohérence. Une série d'images venant d'appareils différents, à des tailles différentes, encadrées de façon identique commence à ressembler à une collection plutôt qu'à un assortiment.",
      ],
    },
    {
      heading: "Choisir l'épaisseur",
      id: "thickness",
      body: [
        "Raisonnez en pourcentage plutôt qu'en pixels : une bordure de 20 px saute aux yeux sur une image de 600 px et devient invisible sur une image de 4 000 px. Entre 2 et 5 % de la largeur, vous obtenez un cadre discret qui définit le bord sans devenir un élément à part entière.",
        "À partir de 10 %, la bordure se lit comme un passe-partout : la large marge qui entoure les tirages exposés en galerie, qui donne de l'air à l'image et une certaine solennité. C'est un parti pris plutôt qu'un réglage par défaut, et il convient mieux à une photo travaillée qu'à un instantané.",
        "Un point à vérifier : si l'image doit s'afficher beaucoup plus petite que sa taille réelle, une bordure fine peut disparaître complètement lors de la réduction. Testez à la taille où elle apparaîtra vraiment.",
      ],
    },
    {
      heading: "Ajouter des marges pour changer de format",
      id: "aspect",
      body: [
        "Une bordure inégale est l'outil idéal pour faire entrer une photo dans un format pour lequel elle n'a pas été prise. Ajoutez des marges uniquement sur les petits côtés, et un paysage en 3:2 devient un carré 1:1 avec le cadrage complet intact.",
        "C'est ainsi que la plupart des gens publient des photos horizontales dans des fils carrés sans perdre les bords de la composition, et que des portraits trouvent leur place dans des diapositives en 16:9. L'alternative, le recadrage, coûte toujours quelque chose, et ce quelque chose est souvent la raison pour laquelle vous avez pris la photo.",
        "Choisir la couleur des marges avec soin donne un résultat qui paraît conçu plutôt que rafistolé. Le blanc et le noir sont des valeurs sûres ; une couleur prélevée dans la photo elle-même donne souvent le meilleur rendu.",
      ],
    },
    {
      heading: "Le choix de la couleur du cadre photo",
      id: "colour",
      body: [
        "Le blanc est le choix par défaut, et pour cause : c'est la couleur des passe-partout de galerie et des marges d'impression, et il rend les photos plus nettes. Il disparaît aussi sur une page blanche, ce qui est soit exactement l'effet recherché, soit exactement ce que vous vouliez éviter : vérifiez donc la destination.",
        "Le noir convient aux images aux tons sombres, très contrastées ou à l'ambiance cinématographique, et il donne du poids à une photo. Une couleur de marque unifie une série publiée et c'est le choix habituel pour les contenus de réseaux sociaux qui doivent visiblement venir du même endroit.",
        "Les marges transparentes, disponibles à l'export en PNG ou en WEBP, sont l'option que l'on oublie. Elles changent les proportions sans rien ajouter de visible, ce qui est souvent la bonne réponse quand l'image va dans une mise en page qui fournira son propre arrière-plan.",
      ],
    },
  ],

  howToTitle: "Comment ajouter une bordure à une image",
  steps: [
    { title: "Importer", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Styliser la bordure", description: "Réglez l'épaisseur, la couleur et, si vous le souhaitez, des coins arrondis, avec un aperçu en direct." },
    { title: "Appliquer et télécharger", description: "Cliquez sur « Ajouter une bordure » : une image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "crop_din", title: "Épaisseur proportionnelle", description: "La taille de la bordure est un pourcentage du plus petit côté : elle reste cohérente quelles que soient les dimensions de l'image." },
    { icon: "rounded_corner", title: "Couleur et coins arrondis", description: "Choisissez n'importe quelle couleur de bordure et arrondissez les coins intérieurs pour un cadre soigné et moderne." },
    { icon: "lock", title: "Par lot et privé", description: "Encadrez tout un lot d'un coup, entièrement dans votre navigateur : les images ne sont jamais envoyées sur un serveur." },
  ],

  faqs: [
    { q: "Comment l'épaisseur est-elle mesurée ?", a: "En pourcentage du plus petit côté de l'image : le même réglage donne une bordure proportionnelle sur des images de n'importe quelle taille." },
    { q: "Puis-je arrondir les coins ?", a: "Oui. Le curseur d'arrondi arrondit les coins intérieurs de l'image contre la bordure pour un rendu plus doux." },
    { q: "Puis-je ajouter une bordure à plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : une seule image se télécharge directement, plusieurs images se téléchargent ensemble dans un ZIP." },
    { q: "L'outil est-il gratuit et privé ?", a: "Oui. Sans inscription et sans filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "Pourquoi ajouter une bordure à une photo ?", a: "Trois raisons courantes : empêcher une image claire de se fondre dans une page claire pour qu'elle se lise comme un objet bien délimité, faire entrer une photo non carrée dans un emplacement carré sans rien recadrer, et donner à une série d'images une finition homogène." },
    { q: "Comment publier une photo en carré sans la recadrer ?", a: "Ajoutez une bordure inégale : des marges sur les petits côtés jusqu'à obtenir un carré. Rien n'est coupé, l'image flotte simplement dans un cadre. C'est la méthode classique pour publier une photo en paysage ou en portrait dans un fil carré en gardant toute la composition." },
    { q: "Quelle couleur de bordure choisir ?", a: "Le blanc pour un rendu épuré de galerie, le noir pour les photos aux tons sombres ou à l'ambiance cinématographique, et une couleur de marque pour tout ce qui est publié en série. Si la photo doit être posée sur une page colorée, assortir la bordure à cette couleur la fait paraître sans cadre tout en laissant respirer l'image." },
    { q: "Quelle épaisseur donner à la bordure ?", a: "De 2 à 5 % de la largeur de l'image pour un cadre discret, assez pour définir le bord sans devenir un élément graphique. À 10 % ou plus, elle se lit comme un passe-partout délibéré, celui des tirages et des murs de galerie. Sur de très grandes images, une bordure fine peut disparaître complètement une fois l'image réduite." },
    { q: "L'ajout d'une bordure change-t-il les dimensions de l'image ?", a: "Oui. La bordure est ajoutée autour de l'image et non dessinée par-dessus : l'image obtenue est plus grande que l'originale de deux fois l'épaisseur de la bordure dans chaque direction. Si vous avez besoin d'une taille finale précise, réduisez d'abord l'image et laissez la bordure la ramener à la bonne taille." },
    { q: "Puis-je utiliser une bordure transparente ?", a: "Oui, si vous exportez en PNG ou en WEBP. Cela revient à ajouter des marges vides autour de l'image, ce qui est utile pour changer les proportions d'une mise en page sans introduire de cadre visible." },
    { q: "Puis-je ajouter un passe-partout ou une légende ?", a: "Oui. L'option « Passe-partout » dessine un second cadre fin entre la photo et la bordure, comme sur un tirage monté, et l'option « Légende » écrit un texte dans un bandeau sous la photo, par défaut le nom de chaque fichier. Avec « Marge supplémentaire en bas », vous obtenez aussi l'allure d'un Polaroid." },
  ],

  security:
    "Vos images restent privées. L'ajout de bordures se fait entièrement dans votre navigateur avec un canvas HTML : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // AddBorderTool.tsx
    "Please select image files.": "Sélectionnez des fichiers image.",
    "Added a border to 1 image.": "Bordure ajoutée à 1 image.",
    "Added a border to {n} images.": "Bordure ajoutée à {n} images.",
    "Adding the border failed.": "Impossible d'ajouter la bordure.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "done": "terminé",
    "Remove": "Retirer",
    "Clear files": "Effacer les fichiers",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Border settings": "Réglages de la bordure",
    "Border Settings": "Réglages de la bordure",
    "Add border": "Ajouter une bordure",
    "Adding…": "Ajout en cours…",
    "Live preview of": "Aperçu en direct de",
    "— applied to all {n} images.": "— appliqué aux {n} images.",
    "Add border to {n}": "Ajouter une bordure à {n} images",
    "Add border & download": "Ajouter une bordure et télécharger",
    "Presets": "Préréglages",
    "Aspect ratio": "Proportions",
    "The frame grows to reach the shape — the photo is never cropped.":
      "Le cadre s'agrandit jusqu'au format choisi : la photo n'est jamais recadrée.",
    "Style": "Style", // i18n-same
    "Thickness": "Épaisseur",
    "As a percentage of the image's shortest side, so it scales with any size.":
      "En pourcentage du plus petit côté de l'image, pour s'adapter à toutes les tailles.",
    "Corner radius": "Arrondi des coins",
    "Extra depth below": "Marge supplémentaire en bas",
    "A deeper bottom edge, the way a Polaroid has one.":
      "Un bord inférieur plus large, comme sur un Polaroid.",
    "Border colour": "Couleur de la bordure",
    "Inner mat": "Passe-partout",
    "The thin second frame between the photo and the border, as in a mounted print.":
      "Le second cadre fin entre la photo et la bordure, comme sur un tirage monté.",
    "Mat width": "Largeur du passe-partout",
    "Mat colour": "Couleur du passe-partout",
    "Caption": "Légende",
    "Caption text": "Texte de la légende",
    "Text size": "Taille du texte",
    "Each image is captioned with its own filename. Type something to use one caption for all of them.":
      "Chaque image reçoit son propre nom de fichier comme légende. Saisissez un texte pour utiliser la même légende pour toutes.",
    "Drawn in the band below the photo, which deepens to make room.":
      "Dessinée dans le bandeau sous la photo, qui s'élargit pour lui faire de la place.",
    "Transparent background": "Arrière-plan transparent",
    "Leaves everything outside the frame empty instead of filled, so the framed photo can sit on any background. The corners follow the Corner radius slider, and an aspect ratio leaves empty space around the frame rather than a thicker border.":
      "Laisse vide tout ce qui se trouve hors du cadre au lieu de le remplir, pour que la photo encadrée puisse se poser sur n'importe quel arrière-plan. Les coins suivent le curseur « Arrondi des coins », et des proportions imposées laissent un espace vide autour du cadre au lieu d'une bordure plus épaisse.",
    "{format} cannot store transparency — the empty areas will export as solid black. Choose PNG or WEBP.":
      "{format} ne gère pas la transparence : les zones vides seront exportées en noir uni. Choisissez PNG ou WEBP.",
    "Saved as {format}, which can store transparency. Raise Corner radius to round the frame's outer edge.":
      "Enregistré en {format}, qui gère la transparence. Augmentez l'arrondi des coins pour arrondir le bord extérieur du cadre.",
    "Save as": "Enregistrer en",
    "Quality": "Qualité",
  },
};

export default content;
