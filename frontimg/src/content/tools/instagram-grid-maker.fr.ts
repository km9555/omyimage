import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/grille-instagram (variant of split-image, preset mode
 * "instagram"). No ui block: the tool's labels live in split-image.fr.ts.
 *
 * Primary query « Grille Instagram »; secondary « diviser une photo pour
 * Instagram », « carrousel Instagram ». Facts as in the English page: profile
 * grid shows 3:4 thumbnails, three per row, newest top-left (since January
 * 2025); feed photos are stored 1080 px wide. The "_post-01" file suffix comes
 * from the code; the example stem « photo » is already French.
 */
const content: ToolPageContent = {
  toolId: "instagram-grid-maker",
  locale: "fr",
  name: "Grille Instagram",
  tagline:
    "Transformez une seule photo en grille de profil Instagram sans raccord visible (3, 6, 9 ou jusqu'à 15 publications) ou en carrousel panoramique qui se prolonge à chaque glissement. Recadrée aux formats d'Instagram, à 1080 px et numérotée dans l'ordre de publication.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Grille Instagram – diviser une photo, gratuit | oMyImage",
  metaDescription:
    "Créez une grille Instagram : divisez une photo pour Instagram en 3 à 15 publications ou en carrousel, à 1080 px et numérotées. Gratuit, sans rien envoyer.",

  intro:
    "Une grille Instagram, c'est une grande image répartie sur plusieurs publications : votre profil l'affiche en entier, tandis que chaque publication tient seule dans le fil. La réaliser à la main suppose de recadrer à un format inhabituel, de couper la photo en tiers exacts, de redimensionner chaque morceau et de penser à les publier à l'envers. Cet outil fait tout cela : choisissez le nombre de lignes et le format des publications, faites glisser la photo pour la cadrer, puis téléchargez les publications déjà numérotées dans l'ordre où les partager. Il crée aussi des carrousels sans raccord visible : un panorama large découpé en diapositives qui s'enchaînent quand on fait défiler.",

  sections: [
    {
      heading: "Comment fonctionne la grille du profil",
      id: "profile-grid",
      body: [
        "Votre profil affiche les publications par trois sur chaque ligne, de la plus récente à la plus ancienne, en commençant en haut à gauche. Depuis janvier 2025, les miniatures sont des rectangles verticaux 3:4 et non plus des carrés. Coupez une image en trois colonnes, publiez les morceaux dans le bon ordre, et le profil les affiche comme une seule image.",
        "Une ligne demande 3 publications, deux lignes 6, trois lignes 9. Cet outil va jusqu'à cinq lignes, soit 15 publications, ce qui correspond à peu près à ce qu'un profil affiche sur l'écran d'un téléphone sans défiler.",
      ],
    },
    {
      heading: "Quel format de publication choisir",
      id: "shapes",
      body: [
        "Le 3:4 (1080 × 1440 px) est le format des miniatures de la grille : ce que vous voyez dans l'aperçu est exactement ce qu'affiche votre profil, sans perte aux jointures entre les publications. Le 4:5 (1080 × 1350 px) est la publication verticale classique du fil ; la grille en rogne environ 3 % de chaque côté, si bien que les raccords sautent très légèrement. Les publications carrées 1:1 perdent un huitième de leur largeur de chaque côté dans la grille, ce qui se remarque sur les lignes qui passent d'une publication à l'autre.",
        "Choisissez le 3:4, sauf si votre application Instagram recadre les photos 3:4 en 4:5 à l'import : dans ce cas, prenez le 4:5, que toutes les versions de l'application acceptent sans recadrage.",
      ],
    },
    {
      heading: "Publier dans le bon ordre",
      id: "order",
      body: [
        "Comme la publication la plus récente apparaît en haut à gauche, le puzzle se publie à l'envers : le morceau 1 est le coin inférieur droit et se publie en premier, le morceau en haut à gauche se publie en dernier. Les fichiers sont numérotés dans cet ordre (photo_post-01.jpg, photo_post-02.jpg, etc.) et l'aperçu affiche les mêmes numéros sur chaque morceau.",
        "Publiez-les tous d'affilée, puis ajoutez les publications suivantes par groupes de trois : une seule publication supplémentaire décale chaque morceau d'une place et casse l'image. Les publications épinglées occupent toujours les premières places de la grille : désépinglez-les pendant la publication, ou épinglez une ligne entière de trois.",
      ],
    },
    {
      heading: "Des carrousels sans raccord",
      id: "carousel",
      body: [
        "Choisissez « Carrousel » pour découper une image large en 2 à 10 diapositives sur une seule ligne. Ajoutez-les à une seule publication dans l'ordre des numéros : quand on fait glisser, chaque diapositive reprend exactement là où la précédente s'arrêtait, et un paysage, une photo de groupe ou une longue bannière se lit comme une image continue. Les diapositives 4:5 occupent le plus d'écran sur un téléphone ; les diapositives carrées conviennent aux panoramas très larges qui demanderaient sinon beaucoup de diapositives.",
      ],
    },
    {
      heading: "Cadrer la photo",
      id: "framing",
      body: [
        "La grille entière a une seule forme : trois publications 3:4 en largeur et trois lignes en hauteur donnent un portrait 3:4, tandis qu'une seule ligne de trois donne une bande large en 9:4. La plupart des photos contiennent donc plus d'image que ce qui tient dans la grille. La partie hors de la grille est grisée dans l'aperçu. Faites glisser la photo, ou utilisez les curseurs de position, pour choisir ce qui entre dans les publications, et tenez les visages et les textes à l'écart des lignes de coupe, où ils seraient partagés entre deux publications.",
      ],
    },
    {
      heading: "Taille et qualité",
      id: "quality",
      body: [
        "Chaque publication sort en 1080 px de large, la largeur à laquelle Instagram stocke les photos du fil : l'application ne les réduit donc pas une nouvelle fois. Une photo qui compte moins de pixels conserve sa propre résolution au lieu d'être agrandie. Les publications sont enregistrées en JPG à 92 % de qualité par défaut ; Instagram recompresse chaque envoi, donc un réglage plus élevé se voit rarement, mais le PNG est disponible si vous préférez transmettre des pixels intacts.",
      ],
    },
    {
      heading: "Des idées de publications en grille",
      id: "ideas",
      body: [
        "Les marques utilisent une grille pour annoncer un lancement ou des soldes avec une seule image forte qui envahit tout le profil. Les photographes publient un paysage sur une ligne de trois. Les artistes dévoilent un grand dessin morceau par morceau au fil de la journée. Les organisateurs d'événements transforment une affiche en grille de 3 × 3 impossible à rater, et les voyageurs font un carrousel de tout un panorama au lieu de le recadrer.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Votre photo est découpée et redimensionnée entièrement dans votre navigateur. Rien n'est envoyé sur nos serveurs, et rien n'est conservé après la fermeture de la page.",
      ],
    },
  ],

  howToTitle: "Comment créer une grille Instagram",
  steps: [
    { title: "Ajouter votre photo", description: "Choisissez une image JPG, PNG ou WEBP." },
    { title: "Configurer la grille", description: "Choisissez le nombre de lignes et le format des publications, puis faites glisser la photo pour la cadrer." },
    { title: "Télécharger et publier", description: "Cliquez sur « Créer la grille » et publiez les morceaux dans l'ordre des numéros, en commençant par le 1." },
  ],

  features: [
    { icon: "photo_library", title: "Grille ou carrousel", description: "Une grille de profil de trois de large jusqu'à 15 publications, ou un carrousel jusqu'à 10 diapositives." },
    { icon: "check", title: "Numérotées pour la publication", description: "Les fichiers et l'aperçu indiquent l'ordre dans lequel publier." },
    { icon: "lock", title: "Aucun envoi", description: "Réalisé entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment faire une grille sur Instagram ?", a: "Ajoutez votre photo, choisissez les lignes et le format, cliquez sur « Créer la grille », puis publiez les morceaux dans l'ordre des numéros en commençant par le 1." },
    { q: "Quel morceau dois-je publier en premier ?", a: "Le numéro 1, c'est-à-dire le morceau en bas à droite. Celui en haut à gauche se publie en dernier, car Instagram affiche d'abord la publication la plus récente." },
    { q: "Quelle est la taille de chaque publication ?", a: "1080 × 1440 px en 3:4, 1080 × 1350 px en 4:5 et 1080 × 1080 px en carré, ou moins si votre photo compte moins de pixels." },
    { q: "Faut-il choisir le 3:4 ou le 4:5 ?", a: "Le 3:4 correspond exactement à la grille du profil. Prenez le 4:5 si votre application recadre les photos 3:4 à l'import." },
    { q: "Combien de publications une grille peut-elle compter ?", a: "Trois par ligne, d'une ligne (3 publications) à cinq lignes (15 publications)." },
    { q: "Pourquoi ma grille est-elle décalée ?", a: "Le plus souvent, une publication épinglée ou une publication isolée ajoutée ensuite l'a décalée. Désépinglez vos publications pendant la mise en ligne et ajoutez les nouvelles publications par trois." },
    { q: "Qu'est-ce qu'un carrousel sans raccord ?", a: "Une image large découpée en diapositives d'une seule publication, qui se prolonge d'une diapositive à l'autre quand on fait défiler." },
    { q: "Combien de diapositives puis-je créer ?", a: "De 2 à 10, en 4:5 ou en carré." },
    { q: "Puis-je choisir la partie de la photo utilisée ?", a: "Oui. Faites glisser la photo dans l'aperçu ou utilisez les curseurs de position ; la partie grisée est laissée de côté." },
    { q: "Instagram va-t-il réduire la qualité ?", a: "Il recompresse chaque envoi, mais les publications de 1080 px de large ne sont pas redimensionnées une nouvelle fois, ce qui les garde aussi nettes que possible." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur téléphone ?", a: "Oui. Téléchargez le ZIP, ouvrez-le dans l'application Fichiers de votre téléphone et partagez les publications vers Instagram depuis là." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Puis-je aussi découper une photo autrement qu'en grille Instagram ?", a: "Oui. Pour couper une image en deux, en bandes ou en tuiles d'une taille précise en pixels, utilisez l'outil « Découper une image », dont cette page est une variante." },
  ],

  security:
    "Votre photo est découpée et redimensionnée entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",
};

export default content;
