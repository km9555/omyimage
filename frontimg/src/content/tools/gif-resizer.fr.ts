import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.fr";

/**
 * French copy for /fr/redimensionner-gif.
 *
 * Target query « Redimensionner un GIF » leads the h1; « changer la taille
 * d'un GIF » rides in the metaTitle, the intro and an FAQ. « réduire la taille
 * d'un GIF » belongs to the compressor (file weight); here the subject is
 * pixel size.
 */
const content: ToolPageContent = {
  toolId: "gif-resizer",
  locale: "fr",
  name: "Redimensionner un GIF",
  tagline:
    "Redimensionnez vos GIF animés en pourcentage ou en pixels exacts : chaque image est ajustée et l'animation se lit exactement comme avant. Gratuit, sans filigrane, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Redimensionner un GIF – Changer sa taille | oMyImage",
  metaDescription:
    "Redimensionner un GIF en pourcentage ou en pixels sans perdre l'animation : toutes les images et leur durée sont conservées. Gratuit et sans filigrane.",

  intro:
    "Si vous changez la taille d'un GIF animé dans un éditeur d'images classique, il ne garde le plus souvent que la première image. Avec « Redimensionner un GIF » d'oMyImage, chaque image de l'animation est redimensionnée et son rythme comme sa boucle sont préservés : le résultat bouge exactement comme l'original, simplement à la taille dont vous avez besoin. Mettez à l'échelle en pourcentage ou saisissez la largeur et la hauteur en pixels, comparez l'original et le résultat, puis téléchargez-le. Vous pouvez ainsi changer la taille d'un GIF pour le rendre plus petit ou, si nécessaire, plus grand.",

  sections: [
    {
      heading: "En pourcentage ou en pixels exacts",
      id: "modes",
      body: [
        "« En pourcentage » est la voie rapide : 50 % divise la largeur et la hauteur par deux, 25 % les ramène au quart, et toute valeur jusqu'à 400 % fonctionne. « En pixels » vous permet de saisir une largeur ou une hauteur exacte ; avec « Conserver les proportions » activé, l'autre côté suit la forme du GIF, pour que rien ne soit écrasé.",
        "Ne désactivez « Conserver les proportions » que lorsque la destination exige un cadre précis, comme un avatar carré, et que le GIF a déjà une forme proche ; sinon, l'animation paraîtra étirée.",
      ],
    },
    {
      heading: "Tailles courantes",
      id: "sizes",
      body: [
        "Les emojis personnalisés et les réactions sont de petits carrés : Discord, par exemple, affiche les emojis en 128 × 128 et limite le fichier à 256 Ko, si bien qu'un GIF de réaction doit en général être réduit à la fois en dimensions et en poids. Les photos de profil et les stickers mesurent généralement entre 256 et 512 pixels de côté ; les GIF intégrés dans des articles et de la documentation font le plus souvent entre 480 et 800 pixels de large.",
        "Si la destination impose aussi une limite de poids, redimensionnez d'abord, puis passez le résultat dans « Compresser un GIF » : moins de pixels, c'est la plus grosse économie à elle seule.",
      ],
    },
    {
      heading: "Ce qu'il advient de la qualité",
      id: "quality",
      body: [
        "Réduire un GIF le garde net, car chaque nouveau pixel est calculé comme la moyenne de plusieurs anciens. Cette moyenne crée des couleurs intermédiaires et, comme le GIF n'accepte que 256 couleurs, le résultat reçoit une nouvelle palette choisie sur l'ensemble de l'animation, ce qui garde les couleurs stables d'une image à l'autre.",
        "Agrandir est possible, mais n'ajoute aucun détail : les contours s'adoucissent et le petit pixel art devient flou. Pour du pixel art, agrandissez par multiples entiers comme 200 % et attendez-vous à un certain lissage ; pour obtenir un vrai détail, repartez du fichier source d'origine.",
      ],
    },
    {
      heading: "Le poids du fichier après redimensionnement",
      id: "filesize",
      body: [
        "Le poids du fichier diminue à peu près avec le nombre de pixels : 50 % de la largeur et de la hauteur donnent généralement environ un quart du poids. Comme le GIF est reconstruit de façon que chaque image ne stocke que ce qui a changé, un GIF redimensionné peut même finir plus léger que ce que les pixels seuls laisseraient prévoir.",
        "Agrandir produit l'effet inverse : deux fois plus grand, c'est environ quatre fois plus lourd. Vérifiez le poids du résultat sous l'aperçu avant de le télécharger.",
      ],
    },
    {
      heading: "Images, durées et transparence",
      id: "frames",
      body: [
        "Chaque image est conservée avec sa propre durée, y compris dans les GIF où certaines images marquent une pause plus longue que d'autres, et l'animation boucle comme l'original. Les GIF transparents restent transparents ; la transparence du GIF n'a pas de bords adoucis, si bien qu'un contour transparent fortement réduit peut paraître légèrement crénelé sur un fond sombre.",
      ],
    },
    {
      heading: "Des GIF dans les présentations et les documents",
      id: "slides",
      body: [
        "Un GIF inséré dans PowerPoint, Keynote, Google Slides ou un document Word garde dans le fichier sa taille complète en pixels, même s'il est affiché en petit. Un GIF de 1 200 pixels utilisé comme vignette alourdit toute la présentation, qui devient lente à ouvrir ou à envoyer par e-mail.",
        "Avant de l'insérer, redimensionnez le GIF à peu près à la largeur à laquelle il apparaîtra vraiment : environ 800 pixels pour une diapositive pleine largeur, 400–600 pour un GIF placé à côté d'un texte. La diapositive a le même rendu et le fichier reste léger.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner un GIF",
  steps: [
    { title: "Ajoutez votre GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez la taille", description: "Choisissez un pourcentage ou saisissez la largeur et la hauteur en pixels." },
    { title: "Redimensionnez et téléchargez", description: "Cliquez sur « Redimensionner le GIF », comparez le résultat et téléchargez-le." },
  ],

  features: [
    { icon: "photo_size_select_large", title: "Toutes les images redimensionnées", description: "Toute l'animation est redimensionnée, pas seulement la première image." },
    { icon: "aspect_ratio", title: "Pourcentage ou pixels", description: "Mettez à l'échelle en pourcentage ou définissez une largeur et une hauteur exactes." },
    { icon: "lock", title: "Aucun envoi", description: "Votre GIF est redimensionné entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment redimensionner un GIF animé ?", a: "Ajoutez le GIF, choisissez un pourcentage ou des pixels exacts, puis cliquez sur « Redimensionner le GIF ». Chaque image est redimensionnée et l'animation continue de tourner." },
    { q: "Le GIF restera-t-il animé ?", a: "Oui. Toutes les images sont conservées avec leur durée et leur boucle d'origine." },
    { q: "Comment obtenir un GIF de 128 × 128 ?", a: "Choisissez « En pixels », saisissez 128 comme largeur et, si le GIF n'est pas carré, désactivez « Conserver les proportions » ou recadrez-le d'abord en carré." },
    { q: "Changer la taille d'un GIF réduit-il le poids du fichier ?", a: "Le rendre plus petit, oui : une largeur et une hauteur divisées par deux donnent généralement environ un quart du poids." },
    { q: "Puis-je agrandir un GIF ?", a: "Oui, jusqu'à 400 %, mais l'agrandissement n'ajoute aucun détail et les contours s'adoucissent." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les GIF transparents restent transparents après le redimensionnement." },
    { q: "Y a-t-il un filigrane ?", a: "Non. Le GIF redimensionné ne porte aucun filigrane." },
    { q: "Puis-je redimensionner et compresser en même temps ?", a: "Redimensionnez ici, puis passez le résultat dans « Compresser un GIF » pour réduire le nombre de couleurs ou d'images." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Le redimensionnement se fait entièrement dans votre navigateur." },
    { q: "Puis-je redimensionner un GIF sur mon téléphone ?", a: "Oui, dans un navigateur mobile. Les gros GIF prennent un peu plus de temps sur un téléphone, et la progression s'affiche pendant le traitement." },
    { q: "Puis-je redimensionner plusieurs GIF à la fois ?", a: "Un à la fois, pour que chaque GIF ait son propre aperçu et sa propre taille. Les réglages restent en place pour le suivant." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans inscription, sans compte et sans limite au nombre de GIF que vous pouvez redimensionner." },
  ],

  security:
    "Votre GIF est redimensionné image par image dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
