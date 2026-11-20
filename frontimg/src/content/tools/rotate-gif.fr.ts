import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.fr";

/**
 * French copy for /fr/pivoter-gif.
 *
 * Target query « Faire pivoter un GIF » leads the h1 (same verb as « Faire
 * pivoter une image »); « tourner un GIF » and « retourner un GIF » (flip) ride
 * along in the metaTitle/metaDescription, a heading and an FAQ, because the
 * same tool also flips.
 */
const content: ToolPageContent = {
  toolId: "rotate-gif",
  locale: "fr",
  name: "Faire pivoter un GIF",
  tagline:
    "Faites pivoter vos GIF animés de 90° à gauche ou à droite ou de 180°, ou retournez-les comme dans un miroir : chaque image tourne de la même façon et l'animation continue de tourner. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Faire pivoter un GIF – Tourner un GIF animé | oMyImage",
  metaDescription:
    "Faire pivoter un GIF de 90° ou 180°, ou le retourner en miroir : images, durées et couleurs sont conservées. Tournez votre GIF gratuitement, sans inscription.",

  intro:
    "Un GIF filmé avec un téléphone tenu dans le mauvais sens, ou un extrait qu'il faut inverser en miroir pour qu'il regarde de l'autre côté, ne peut pas être corrigé dans la plupart des éditeurs d'images sans perdre l'animation. Avec « Faire pivoter un GIF » d'oMyImage, vous tournez toute l'animation d'un coup : choisissez 90° à gauche, 90° à droite ou 180°, ajoutez si besoin un retournement horizontal ou vertical, et regardez l'aperçu bouger au fil de vos choix. Chaque image pivote de la même façon et conserve sa durée et ses couleurs exactes : le résultat est identique à l'original, simplement dans le bon sens.",

  sections: [
    {
      heading: "Quand un GIF doit être tourné",
      id: "when",
      body: [
        "Les téléphones filment dans le sens où on les tient, et les convertisseurs en GIF ne lisent pas toujours la balise d'orientation qui indique au lecteur de faire pivoter la vidéo : un extrait filmé en portrait peut donc ressortir couché sur le côté. Les enregistrements d'un écran pivoté, les scans de dessins animés et les GIF enregistrés depuis des applications qui recadrent bizarrement posent le même problème.",
        "Faire pivoter corrige le fichier lui-même, et pas seulement la façon dont une application l'affiche : le GIF est dans le bon sens partout où vous le publiez ou l'envoyez.",
      ],
    },
    {
      heading: "Tourner ou retourner un GIF",
      id: "modes",
      body: [
        "La rotation fait tourner l'image autour de son centre : 90° à droite (sens horaire), 90° à gauche (sens antihoraire) ou 180° (tête en bas). Un quart de tour inverse la largeur et la hauteur : un GIF de 480 × 270 devient 270 × 480 ; un demi-tour conserve la taille.",
        "Le retournement, lui, crée un effet miroir. Le retournement horizontal échange la gauche et la droite (utile quand un sujet doit regarder vers l'intérieur d'une page ou vers une légende) et le retournement vertical échange le haut et le bas. Le texte d'un GIF retourné se lit à l'envers : ne retournez que lorsque cela n'a pas d'importance.",
        "Rotation et retournements peuvent se combiner : un quart de tour plus un retournement horizontal, par exemple, donne une version portrait en miroir. L'aperçu montre la combinaison avant le moindre traitement.",
      ],
    },
    {
      heading: "Ce qui ne change pas",
      id: "kept",
      body: [
        "Chaque image conserve sa durée : l'animation se lit à la même vitesse et boucle exactement comme avant. Les zones transparentes restent transparentes.",
        "Une rotation d'un multiple de 90° déplace les pixels sans les mélanger : rien n'est rééchantillonné ni flouté. Lorsque les couleurs du GIF tiennent dans une seule palette, ce qui est le cas de la plupart des GIF, elles sont réécrites à l'identique. Les GIF tirés de vidéos utilisent parfois une palette par image ; ils reçoivent alors une seule palette partagée de 256 couleurs, choisie à partir de toutes les images, ce qui se voit rarement.",
      ],
    },
    {
      heading: "Portrait et paysage",
      id: "orientation",
      body: [
        "Un extrait de téléphone filmé de travers et remis en GIF portrait convient aux stories, aux écrans de téléphone et aux messageries, où les animations verticales occupent davantage l'écran. À l'inverse, un extrait portrait passé en paysage s'intègre mieux aux diapositives, aux sites web et aux bannières façon vidéo.",
        "Si le résultat doit aussi avoir une forme précise (carrée pour un avatar, par exemple), recadrez-le ensuite avec « Recadrer un GIF » ; s'il lui faut une taille exacte en pixels, utilisez « Redimensionner un GIF ».",
      ],
    },
    {
      heading: "Poids du fichier",
      id: "size",
      body: [
        "Faire pivoter n'ajoute ni ne retire de pixels : le fichier reste généralement proche de son poids d'origine. Il peut ressortir un peu plus lourd ou plus léger, car la compression du GIF travaille ligne par ligne et une image tournée a des lignes différentes. Pour l'alléger volontairement, passez-le ensuite dans « Compresser un GIF ».",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé, tourné et encodé entièrement dans votre navigateur. Il n'est jamais envoyé, et rien n'est conservé une fois la page fermée : vos extraits personnels et enregistrements d'écran restent sur votre appareil.",
      ],
    },
    {
      heading: "Faire pivoter des images fixes",
      id: "stills",
      body: [
        "Pour les photos JPG, PNG et WebP, utilisez plutôt « Faire pivoter une image » : cet outil traite de nombreux fichiers à la fois et peut aussi tourner une image selon n'importe quel angle, pas seulement par pas de 90°. « Faire pivoter un GIF » existe parce que les outils de rotation ordinaires ne gardent que la première image d'une animation.",
      ],
    },
  ],

  howToTitle: "Comment faire pivoter un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez la rotation", description: "Choisissez 90° à gauche, 90° à droite ou 180°, et ajoutez un retournement si besoin ; l'aperçu se met à jour au fur et à mesure." },
    { title: "Faites pivoter et téléchargez", description: "Cliquez sur « Faire pivoter le GIF », comparez le résultat à l'original et téléchargez-le." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Tourner ou retourner", description: "90° à gauche ou à droite, 180°, et retournements horizontal ou vertical." },
    { icon: "visibility", title: "Aperçu en direct", description: "Voyez l'animation tournée avant tout traitement." },
    { icon: "lock", title: "Aucun envoi", description: "Rotation effectuée entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment faire pivoter un GIF animé ?", a: "Ajoutez le GIF, choisissez 90° à gauche, 90° à droite ou 180°, puis cliquez sur « Faire pivoter le GIF ». Chaque image est tournée et l'animation continue de tourner." },
    { q: "Puis-je retourner un GIF horizontalement ?", a: "Oui. Choisissez « Horizontal » sous « Retourner » pour créer un miroir gauche-droite, avec ou sans rotation." },
    { q: "Le GIF restera-t-il animé ?", a: "Oui. Toutes les images sont conservées avec leur durée d'origine, et le GIF boucle comme avant." },
    { q: "La rotation fait-elle baisser la qualité ?", a: "Non. Les quarts de tour déplacent les pixels sans les mélanger, et les couleurs d'origine sont réutilisées lorsqu'elles tiennent dans une seule palette." },
    { q: "Pourquoi la largeur et la hauteur sont-elles inversées ?", a: "Un quart de tour couche l'image sur le côté : un GIF de 480 × 270 devient 270 × 480. Un demi-tour de 180° conserve la taille." },
    { q: "Puis-je tourner selon un angle personnalisé ?", a: "Pas ici. « Faire pivoter un GIF » tourne par pas de 90°, ce qui garde chaque pixel net ; d'autres angles flouteraient les images et ajouteraient des coins." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les GIF transparents restent transparents." },
    { q: "Le poids du fichier va-t-il changer ?", a: "Très peu. Aucun pixel n'est ajouté ni retiré, mais la compression peut légèrement varier avec la nouvelle orientation." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Le GIF est tourné entièrement dans votre navigateur." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui, dans un navigateur mobile. Les gros GIF prennent un peu plus de temps sur un téléphone." },
    { q: "Puis-je faire pivoter un GIF tiré d'une vidéo ?", a: "Oui. Il est tourné comme n'importe quel autre GIF ; pour faire pivoter la vidéo elle-même, transformez-la d'abord en GIF avec « Vidéo en GIF »." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite au nombre de GIF que vous faites pivoter." },
    { q: "Comment mettre un GIF à l'endroit ?", a: "Si le GIF est à l'envers, choisissez 180° ; s'il est couché sur le côté, choisissez 90° à gauche ou à droite selon le sens. L'aperçu vous montre tout de suite le bon choix." },
  ],

  security:
    "Votre GIF est tourné entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
