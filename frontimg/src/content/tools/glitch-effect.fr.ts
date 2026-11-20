import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.fr";

/**
 * French copy for /fr/effet-glitch. Target query: « Effet glitch » (France,
 * Nov 2026; no secondary in the brief). « Effet glitch photo » is used in the
 * metaTitle and once in the body as the natural long-tail form.
 */
const content: ToolPageContent = {
  toolId: "glitch-effect",
  locale: "fr",
  name: "Effet glitch",
  tagline:
    "Donnez à n'importe quelle photo l'aspect d'un écran détraqué : décalage des couleurs rouge et bleu, bandes décalées et lignes de balayage, avec un curseur d'intensité et un bouton pour tout remélanger. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Effet glitch photo – gratuit et en ligne | oMyImage",
  metaDescription:
    "Effet glitch en ligne et gratuit : décalage des couleurs, bandes décalées et lignes de balayage sur n'importe quelle photo, intensité réglable et aperçu.",

  intro:
    "L'esthétique glitch s'inspire du matériel défaillant : un signal vidéo qui décroche, un écran qui se déchire, des couleurs qui se séparent. C'est devenu un style à part entière sur les pochettes d'album, les affiches, les miniatures et les photos de profil. « Effet glitch » d'oMyImage le construit à partir de trois ingrédients que vous activez ou désactivez, décalage des couleurs, bandes décalées et lignes de balayage, avec un seul curseur d'intensité et un bouton qui remélange les bandes jusqu'à ce que la composition vous plaise. Tout s'affiche en aperçu direct avant le téléchargement.",

  sections: [
    {
      heading: "Les trois ingrédients",
      id: "parts",
      body: [
        "Le décalage des couleurs tire le canal rouge d'un côté et le canal bleu de l'autre, en laissant des franges colorées le long de chaque contour : c'est la partie la plus reconnaissable de l'effet, comme un projecteur mal réglé. Les bandes décalées découpent de fines bandes horizontales dans l'image et les poussent sur le côté, comme si le signal avait sauté. Les lignes de balayage assombrissent une bande sur deux : la texture d'un vieux moniteur ou d'une cassette VHS.",
        "Utilisez les trois pour un glitch complet, ou un seul : le décalage des couleurs seul donne aux portraits un discret contour de lunettes 3D, et les bandes seules évoquent une impression numérique déchirée.",
      ],
    },
    {
      heading: "Intensité et mélange",
      id: "strength",
      body: [
        "L'intensité règle tout en même temps : l'écart entre les couleurs, le nombre de bandes qui bougent et la distance qu'elles parcourent, ainsi que l'obscurité des lignes de balayage. Entre 20 et 40, on obtient un soupçon de défaillance ; à partir de 70, le résultat devient bruyant et chaotique.",
        "Les bandes sont placées au hasard. Si l'une d'elles traverse un visage ou cache un détail important, cliquez sur « Mélanger les bandes » pour obtenir une nouvelle disposition. Celle-ci reste fixe jusqu'au prochain mélange : l'aperçu et le téléchargement correspondent donc toujours.",
      ],
    },
    {
      heading: "Où cet effet fonctionne",
      id: "uses",
      body: [
        "Les images glitchées conviennent aux visuels musicaux, aux miniatures de jeux vidéo et de tech, aux affiches d'événements, aux créations cyberpunk et vaporwave, et aux photos de profil qui doivent se démarquer dans une liste. Les formes marquées et le contraste prennent le mieux l'effet ; une photo chargée peut se transformer en bruit. Un texte en gras dans une image est une cible idéale : le décalage donne l'impression que les lettres vibrent.",
        "Pour animer le glitch, créez quelques versions avec des mélanges différents et assemblez-les en une courte animation avec « Créer un GIF ».",
      ],
    },
    {
      heading: "Plusieurs images, un seul style",
      id: "batch",
      body: [
        "Ajoutez plusieurs images : les mêmes réglages et la même disposition s'appliquent à toutes, adaptés à la taille de chacune, pour qu'une série de publications ou de couvertures partage un même style. Le JPG, le PNG et le WebP sont acceptés ; le résultat garde son format sauf si vous en choisissez un autre, et les zones transparentes restent transparentes en PNG et en WebP. Plusieurs images se téléchargent ensemble dans un ZIP.",
      ],
    },
    {
      heading: "Conseils de glitch art",
      id: "tips",
      body: [
        "Placez un sujet fort légèrement décentré, pour que les bandes traversent l'arrière-plan plutôt qu'un visage. Les images sombres avec des touches lumineuses mettent le mieux en valeur le décalage des couleurs. Une photo un peu trop contrastée, essayez d'abord « Luminosité d'une image », donne un résultat plus net et plus numérique, et l'enregistrement en PNG garde les bords francs des bandes et des franges.",
      ],
    },
    {
      heading: "Effet glitch photo pour couvertures et miniatures",
      id: "formats-social",
      body: [
        "Pour Instagram, les miniatures YouTube ou les pochettes Spotify, mieux vaut d'abord mettre l'image au format de destination, puis appliquer l'effet glitch. Les bandes restent ainsi là où elles seront vues et ne sont pas coupées par un recadrage. Un effet discret, avec une intensité de 20 à 40, ressort souvent davantage sur une petite miniature qu'en plein format.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque image reçoit son effet glitch entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment ajouter un effet glitch à une photo",
  steps: [
    { title: "Ajoutez des images", description: "Sélectionnez une ou plusieurs images JPG, PNG ou WebP." },
    { title: "Réglez le glitch", description: "Choisissez l'intensité et les effets, puis mélangez les bandes jusqu'à obtenir le bon rendu." },
    { title: "Appliquez et téléchargez", description: "Cliquez sur « Appliquer le glitch » pour télécharger l'image, ou un ZIP s'il y en a plusieurs." },
  ],

  features: [
    { icon: "gradient", title: "Trois effets glitch", description: "Décalage des couleurs, bandes décalées et lignes de balayage, chacun activable." },
    { icon: "visibility", title: "Aperçu en direct", description: "Voyez chaque changement immédiatement et remélangez jusqu'à ce que cela vous plaise." },
    { icon: "lock", title: "Aucun envoi", description: "Effet appliqué entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment ajouter un effet glitch à une photo ?", a: "Ajoutez la photo, réglez l'intensité, choisissez les effets et cliquez sur « Appliquer le glitch »." },
    { q: "Qu'est-ce que le décalage des couleurs ?", a: "Les composantes rouge et bleue de l'image décalées dans des directions opposées, ce qui laisse des franges colorées sur les contours." },
    { q: "Puis-je changer l'emplacement des bandes ?", a: "Oui. Cliquez sur « Mélanger les bandes » pour une nouvelle disposition aléatoire." },
    { q: "Le fichier téléchargé ressemblera-t-il à l'aperçu ?", a: "Oui. La disposition reste fixe jusqu'au prochain mélange, et elle est mise à l'échelle de l'image entière." },
    { q: "Puis-je faire un glitch discret ?", a: "Oui. Utilisez une intensité de 20 à 40, ou activez seulement le décalage des couleurs." },
    { q: "Puis-je créer un glitch animé ?", a: "Créez quelques versions avec des mélanges différents, puis assemblez-les avec « Créer un GIF »." },
    { q: "Puis-je appliquer le glitch à plusieurs images à la fois ?", a: "Oui. Elles partagent les mêmes réglages et se téléchargent dans un ZIP." },
    { q: "La transparence est-elle conservée ?", a: "Oui, si vous enregistrez en PNG ou en WebP." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans n'importe quel navigateur mobile." },
    { q: "Quelles images s'y prêtent le mieux ?", a: "Les formes marquées, le texte en gras et les forts contrastes. Les photos très chargées peuvent se transformer en bruit." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Dans quel format enregistrer ?", a: "Le PNG garde les bords nets des bandes et les franges colorées ; le JPG les adoucit légèrement." },
  ],

  security:
    "Vos images reçoivent leur effet glitch entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
