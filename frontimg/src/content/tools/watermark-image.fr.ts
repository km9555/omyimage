import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/ajouter-filigrane. Target query « Ajouter un filigrane »;
 * « filigrane » (49.5K FR, Nov 2026) is the ADD intent and stays prominent,
 * secondaries « filigrane photo » and « mettre un filigrane ». Vous.
 *
 * The default watermark text is the brand "© oMyImage" in every language
 * (WatermarkTool.tsx) — not copy. The nine named positions, FONTS and FORMATS
 * are module scope, maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "watermark-image",
  locale: "fr",
  name: "Ajouter un filigrane",
  seoName: "Ajouter un filigrane",
  tagline:
    "Ajoutez un filigrane texte ou logo à vos images en ligne, avec le contrôle de la position, de l'opacité et de la rotation, un aperçu en direct et le traitement par lots. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Ajouter un filigrane – filigrane photo gratuit | oMyImage",
  metaDescription:
    "Ajoutez un filigrane à vos images gratuitement : texte ou logo, position, opacité et rotation, aperçu en direct et lots. Mettre un filigrane sans rien envoyer.",

  intro:
    "Protégez vos photos et signez vos visuels avec un filigrane personnalisé. L'outil « Ajouter un filigrane » d'oMyImage vous permet d'ajouter un texte, avec la police, la couleur et le contour de votre choix, ou de superposer votre propre logo, puis de le placer exactement où vous voulez grâce à l'aperçu en direct, au réglage de l'opacité et à la rotation. Mettez un filigrane sur une seule image ou sur tout un lot en une fois. Tout se passe dans votre navigateur : vos images restent privées et aucun fichier n'est envoyé sur un serveur. C'est la façon la plus simple de poser un filigrane photo sans installer de logiciel.",

  sections: [
    {
      heading: "Ce qu'un filigrane apporte vraiment",
      id: "purpose",
      body: [
        "Un filigrane remplit trois rôles, et il vaut mieux savoir lequel vous intéresse. Il décourage la réutilisation désinvolte : la plupart des gens qui enregistreraient sans hésiter une image vierge ne prennent pas la peine de le faire avec une image marquée. Il attribue l'œuvre, de sorte que lorsqu'une image circule, votre nom voyage avec elle. Et il marque les épreuves : vous pouvez montrer la photo à un client tout en rendant la version non achetée peu intéressante à utiliser.",
        "Ce qu'il ne fait pas, c'est empêcher le vol. N'importe qui disposant d'un logiciel de retouche et d'un peu de patience peut supprimer un filigrane, et le remplissage par IA a nettement abaissé cette barrière. Considérer le filigrane comme une protection anticopie mène à des marques si lourdes qu'elles gâchent la photo sans pour autant arrêter une personne déterminée.",
        "L'objectif réaliste, c'est de compliquer la réutilisation et d'affirmer la paternité de l'image. Vu sous cet angle, les choix de conception deviennent beaucoup plus simples.",
      ],
    },
    {
      heading: "Où mettre un filigrane, et le problème du recadrage",
      id: "placement",
      body: [
        "Une marque dans un coin est discrète et fait professionnel ; c'est pour cela qu'elle est la norme pour le travail fini. Son point faible saute aux yeux : un coin se recadre en deux secondes, et l'image survit à l'opération sans que rien n'y paraisse.",
        "Répéter la marque en mosaïque sur toute l'image, ou la faire traverser le centre en diagonale, règle ce problème, mais à un prix. La supprimer oblige alors à retoucher le sujet lui-même au lieu de recadrer autour, ce qui représente un vrai travail. En contrepartie, la photo devient moins agréable à regarder : réservez cette option aux épreuves, aux aperçus et aux pièces de portfolio plutôt qu'aux images livrées.",
        "Une voie intermédiaire que beaucoup de photographes adoptent : placer une seule marque de façon qu'elle chevauche le sujet au lieu de flotter sur un fond vide. C'est bien moins envahissant qu'une mosaïque, et nettement plus difficile à effacer proprement qu'une marque dans un coin.",
      ],
    },
    {
      heading: "Opacité, taille et contraste",
      id: "design",
      body: [
        "Une opacité d'environ 30 à 50 % est la plage dans laquelle un filigrane se lit sans écraser l'image. Le piège consiste à le tester sur une image puis à l'appliquer à cent : une marque blanche à 35 % se voit très bien sur une photo sombre et devient pratiquement invisible sur un ciel lumineux. Si votre lot est varié, vérifiez l'image la plus claire et la plus sombre avant de valider.",
        "La taille compte moins qu'on ne le croit. Une marque qui occupe environ 10 à 20 % de la largeur de l'image reste lisible sur un téléphone sans crier. Les marques minuscules sont faciles à recadrer et à ne pas voir ; les très grandes cessent d'être un filigrane et deviennent une affiche.",
        "Pour un logo, utilisez un PNG transparent. Un logo enregistré en JPG emporte avec lui un rectangle blanc, qui ressemble à une erreur sur toute image dont le fond derrière la marque n'est pas blanc.",
      ],
    },
    {
      heading: "Gardez un original sans filigrane",
      id: "workflow",
      body: [
        "Ajouter un filigrane est destructif : la marque fait désormais partie des pixels et ne pourra pas être retirée plus tard. Travaillez toujours sur une copie et conservez l'original propre, car le jour où vous devrez céder une licence pour l'image, l'imprimer ou la remettre à un client, la version filigranée ne vous servira à rien.",
        "L'ordre logique est le suivant : retoucher, puis redimensionner pour la destination, et enfin mettre le filigrane. Si vous l'ajoutez avant de redimensionner, la marque est réduite avec tout le reste et finit souvent illisible sur l'image plus petite.",
        "Ici, tout se passe dans votre navigateur : l'original sans filigrane ne quitte jamais votre appareil. C'est important, puisque vous ajoutez généralement un filigrane justement parce que vous ne voulez pas que l'image circule librement.",
      ],
    },
  ],

  howToTitle: "Comment ajouter un filigrane à une image",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Créez le filigrane", description: "Saisissez un texte ou importez un logo, puis réglez la position, la taille, l'opacité et la rotation avec l'aperçu en direct." },
    { title: "Appliquez et téléchargez", description: "Cliquez sur « Ajouter le filigrane et télécharger » : une seule image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "title", title: "Texte ou logo", description: "Apposez un texte personnalisé, avec police, couleur et contour, ou superposez votre propre logo en PNG transparent." },
    { icon: "grid_view", title: "Contrôle total du placement", description: "Choisissez l'une des neuf positions, réglez la taille, l'opacité et la rotation, et voyez le résultat changer en direct avant l'export." },
    { icon: "lock", title: "Privé et par lots", description: "Appliquez le même filigrane à tout un lot en une fois, entièrement dans votre navigateur : les images ne sont jamais envoyées." },
  ],

  faqs: [
    { q: "Puis-je utiliser mon propre logo comme filigrane ?", a: "Oui. Passez sur « Logo », importez un PNG (transparent de préférence) et réglez sa taille, sa position et son opacité." },
    { q: "Puis-je mettre un filigrane sur plusieurs images à la fois ?", a: "Oui. Le même filigrane est appliqué à toutes les images que vous ajoutez, et elles se téléchargent ensemble dans un ZIP." },
    { q: "Le filigrane sera-t-il lisible sur n'importe quelle image ?", a: "Activez le contour du texte pour qu'il reste lisible sur les fonds chargés, et ajustez l'opacité et la couleur selon vos goûts." },
    { q: "Mes images originales sont-elles modifiées ?", a: "Non. Vos originaux restent intacts ; l'outil crée de nouvelles copies filigranées dans votre navigateur." },
    { q: "Est-ce gratuit et privé ?", a: "Oui. Pas d'inscription, aucun filigrane de notre part, et chaque image est traitée localement dans votre navigateur." },
    { q: "Où placer un filigrane ?", a: "Une seule marque dans un coin est la solution la plus discrète, mais aussi la plus facile à recadrer. Une marque en mosaïque ou en diagonale au centre est bien plus difficile à retirer, mais elle concurrence l'image. Choisissez selon le risque : les aperçus de portfolio et les épreuves justifient la version envahissante, le travail fini livré à un client rarement." },
    { q: "Quelle opacité choisir ?", a: "Entre 30 et 50 % pour la plupart des images : assez faible pour que la photo reste lisible, assez forte pour survivre à une capture d'écran. En dessous d'environ 20 %, un filigrane peut disparaître complètement sur une zone claire ou chargée, ce qui lui retire tout son intérêt." },
    { q: "Un filigrane peut-il être supprimé ?", a: "Une personne déterminée, avec un logiciel de retouche, peut supprimer ou atténuer presque n'importe quel filigrane, et le remplissage par IA a rendu la chose plus facile. Un filigrane décourage la copie désinvolte et affirme la paternité de l'image ; ce n'est pas une protection anticopie. Les marques qui chevauchent le sujet sont nettement plus difficiles à retirer que celles posées sur un fond vide." },
    { q: "Vaut-il mieux un texte ou un logo ?", a: "Le texte est plus rapide et reste net à toutes les tailles : un nom, un pseudo ou un nom de domaine suffisent souvent. Un logo apporte la reconnaissance de la marque et fait plus abouti. Si vous utilisez un logo, un PNG transparent est indispensable ; un logo en JPG arrive avec son propre cadre blanc." },
    { q: "Le filigrane dégrade-t-il la qualité de l'image ?", a: "Le filigrane est dessiné directement sur l'image ; rien d'autre n'est dégradé. Si vous exportez en JPG, le nouvel encodage coûte un peu de qualité, comme toujours ; exportez en PNG pour l'éviter. Dans tous les cas, gardez un original sans filigrane : la marque ne pourra plus être retirée de votre copie." },
    { q: "Puis-je filigraner tout un lot de façon identique ?", a: "Oui, c'est même le cas habituel. Définissez une fois le texte ou le logo, la position et l'opacité, puis appliquez-les à tous les fichiers ; vous les récupérez dans un seul ZIP. La position est relative : dans un lot mêlant photos verticales et horizontales, chacune reçoit la marque dans le bon coin." },
    { q: "Comment mettre mon pseudo Instagram en filigrane ?", a: "Choisissez « Texte », saisissez votre @pseudo, activez le contour pour qu'il se voie sur tous les fonds et placez-le dans un coin avec une opacité de 40 à 60 %. Appliquez-le à tout le lot : toutes vos photos porteront la même signature." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Le filigrane est appliqué dans votre navigateur avec HTML canvas ; vos photos ne quittent jamais votre ordinateur ou votre téléphone, et rien n'est conservé quand vous fermez la page." },
  ],

  security:
    "Vos images restent privées. Le filigrane est appliqué entièrement dans votre navigateur avec HTML canvas : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // WatermarkTool.tsx
    "Couldn't read that logo image.": "Impossible de lire l'image du logo.",
    "Upload a logo image first.": "Importez d'abord une image de logo.",
    "Watermarked 1 image.": "Filigrane ajouté à 1 image.",
    "Watermarked {n} images.": "Filigrane ajouté à {n} images.",
    "Watermarking failed.": "Impossible d'ajouter le filigrane.",
    "Please select image files.": "Sélectionnez des fichiers image.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "done": "terminé",
    "Live preview of": "Aperçu en direct de",
    "— the same watermark applies to all {n} images.": "— le même filigrane s'applique aux {n} images.",
    "1 image": "1 image", // i18n-same
    "{n} images": "{n} images", // i18n-same
    "Clear images": "Retirer les images",
    "Files": "Fichiers",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Remove": "Retirer",
    "Apply": "Appliquer",
    "Watermark settings": "Réglages du filigrane",
    "Watermark Settings": "Réglages du filigrane",
    "Applying…": "Application…",
    "Watermark {n} images": "Filigraner {n} images",
    "Watermark & download": "Ajouter le filigrane et télécharger",
    "Text": "Texte",
    "Logo": "Logo", // i18n-same
    "Watermark text": "Texte du filigrane",
    "Font": "Police",
    "Size": "Taille",
    "Bold": "Gras",
    "Text color": "Couleur du texte",
    "Outline (for legibility)": "Contour (pour la lisibilité)",
    "Outline color": "Couleur du contour",
    "Change logo": "Changer de logo",
    "Upload logo (PNG)": "Importer un logo (PNG)",
    "Logo size": "Taille du logo",
    "Opacity": "Opacité",
    "Rotation": "Rotation", // i18n-same
    "Position": "Position", // i18n-same
    "Output": "Sortie",
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    // POSITION_LABELS / FONTS / FORMATS (module scope, §4.2)
    "Top left": "En haut à gauche",
    "Top center": "En haut au centre",
    "Top right": "En haut à droite",
    "Middle left": "Au milieu à gauche",
    "Center": "Centre",
    "Middle right": "Au milieu à droite",
    "Bottom left": "En bas à gauche",
    "Bottom center": "En bas au centre",
    "Bottom right": "En bas à droite",
    "Sans (Inter)": "Sans empattement (Inter)",
    "Serif (Georgia)": "Avec empattement (Georgia)",
    "Impact": "Impact", // i18n-same
    "Monospace": "Chasse fixe",
    "Same as original": "Identique à l'original",
  },
};

export default content;
