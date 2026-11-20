import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/retoucher-photo. Structure lives in ToolPageShell.
 *
 * Target query "retoucher une photo" (8.1K FR per month); "éditeur photo",
 * "retouche photo en ligne", "modifier photo", "gratuit" and "en ligne" are
 * the secondaries and live in the metaTitle, intro, a section heading and the
 * FAQs. The page is honest that this is not a Photoshop replacement, same as
 * the English one. Addressed in "vous".
 *
 * RIBBON, ASPECTS, PRESETS, ADJ_SLIDERS, FONTS, SHAPE_LABELS and the nine
 * position names are module scope, maintained here by hand (§4.2). The default
 * annotate stamp text ("Label") is drawn INTO the image, so it is translated.
 */
const content: ToolPageContent = {
  toolId: "image-editor",
  locale: "fr",
  name: "Retoucher une photo",
  seoName: "Éditeur photo en ligne",
  crumbLabel: "Éditeur photo",
  tagline:
    "Retouchez vos images en ligne au même endroit : recadrer, redimensionner, pivoter, ajuster, filtres, flou, bordures, recadrage rond, filigrane et dessin, avec annuler et rétablir. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Retoucher une photo en ligne – éditeur gratuit | oMyImage",
  metaDescription:
    "Retoucher une photo gratuitement : recadrez, faites pivoter, réglez la luminosité, ajoutez filtres, texte ou filigrane. Éditeur photo sans inscription.",

  intro:
    "Un seul éditeur pour tout faire. L'« Éditeur photo » d'oMyImage réunit sur un même canevas le recadrage, le redimensionnement, la rotation et le miroir, les réglages de couleur et les filtres, le noir et blanc, le flou, les bordures, le recadrage en cercle, les filigranes texte et logo, et le dessin à main levée. Appliquez les retouches dans l'ordre que vous voulez, annulez et rétablissez librement, puis exportez une seule fois à la fin. Vous pouvez ainsi retoucher une photo en ligne gratuitement, la modifier sans installer de logiciel ni créer de compte, et comme tout s'exécute dans votre navigateur, votre image reste entièrement privée.",

  sections: [
    {
      heading: "Les retouches dont on a vraiment besoin",
      id: "scope",
      body: [
        "La plupart des modifications d'image ne relèvent pas de la retouche avancée. Il s'agit de redresser une photo de travers, de couper un bord qui distrait, de redimensionner un fichier pour respecter une limite d'envoi, de dessiner une flèche sur une capture d'écran ou d'éclaircir une photo prise dans une pièce sombre. Ces tâches ont deux points communs : elles prennent moins d'une minute et ne justifient pas d'ouvrir un logiciel professionnel.",
        "C'est le vide que comble cet éditeur photo. Tout se trouve sur un même canevas : vous pouvez recadrer, faire pivoter, ajuster et annoter sans changer d'outil ni exporter en cours de route. À la fin, un seul export vous donne le fichier terminé.",
        "Ce n'est volontairement pas un remplaçant de Photoshop. Il n'y a ni calques, ni masques, ni modes de fusion, car les ajouter ralentirait les quatre-vingt-dix pour cent de retouches qui n'en ont jamais eu besoin.",
      ],
    },
    {
      heading: "Retoucher une photo dans le bon ordre",
      id: "order",
      body: [
        "La composition d'abord : recadrez et redressez avant toute chose, pour que les étapes suivantes ne portent que sur les pixels que vous gardez. Corriger l'exposition d'une zone que vous allez couper est du travail perdu, et recadrer après avoir redimensionné jette une résolution que vous aviez gardée exprès.",
        "Viennent ensuite les réglages (luminosité, contraste, saturation), tant que vous avez encore l'image entière pour juger. Puis les annotations, car les flèches et les cadres doivent être placés définitivement par rapport à un cadrage qui ne bougera plus.",
        "Redimensionnez en dernier, juste avant l'export. Ainsi, les annotations ne sont mises à l'échelle qu'une fois, à la fin, au lieu d'être dessinées à une taille puis comprimées à une autre. Une frustration courante, un texte lisible sur le canevas mais illisible dans le fichier exporté, vient presque toujours d'un redimensionnement fait après l'annotation.",
      ],
    },
    {
      heading: "Annoter des captures d'écran",
      id: "annotation",
      body: [
        "Dessiner sur une capture d'écran est l'une des raisons les plus fréquentes d'ouvrir un éditeur : signaler un bug à un développeur, montrer un réglage dans une réponse au support, surligner une clause dans un document.",
        "Deux choses font qu'une annotation fonctionne. D'abord le contraste : une flèche rouge disparaît sur un bandeau d'erreur rouge, choisissez donc une couleur qui tranche avec l'interface au lieu de s'y fondre. Ensuite la sobriété : trois flèches et un cadre communiquent ; quinze marques, non.",
        "Exportez les captures d'écran en PNG plutôt qu'en JPG. Une capture d'interface n'est presque faite que de contours nets et de petits textes, exactement ce que le JPG gère le moins bien : un léger halo apparaît autour de chaque caractère, et le fichier n'est souvent même pas plus léger.",
      ],
    },
    {
      heading: "Rien ne quitte votre appareil",
      id: "privacy",
      body: [
        "Tout l'éditeur fonctionne sur un canevas HTML (HTML canvas) dans l'onglet de votre navigateur. Votre image est lue depuis le disque vers la mémoire, modifiée sur place, puis réécrite au moment de l'export : elle n'est jamais envoyée sur un serveur, et aucune copie ne peut y être conservée ni fuiter.",
        "C'est plus important qu'il n'y paraît, vu ce que l'on retouche habituellement. Les captures d'écran contiennent des adresses e-mail, des numéros de compte, des tableaux de bord internes et des onglets ouverts. Les documents photographiés pour un envoi contiennent tout ce que contient un document. Faire ce travail en local, c'est s'éviter la question de savoir qui d'autre en possède une copie.",
        "Effet pratique : une fois la page chargée, l'éditeur continue de fonctionner sans connexion.",
      ],
    },
  ],

  howToTitle: "Comment retoucher une photo en ligne",
  steps: [
    { title: "Ouvrez une image", description: "Sélectionnez une image, ou glissez-déposez-la dans l'éditeur." },
    { title: "Choisissez un outil", description: "Cliquez sur une icône de la barre (recadrer, pivoter, ajuster, flouter, bordure, arrondir, filigrane ou dessiner) et réglez ses options avec un aperçu en direct." },
    { title: "Appliquez et recommencez", description: "Appliquez chaque retouche pour cumuler les modifications, avec annuler et rétablir à volonté, et enchaînez autant d'outils que vous le souhaitez." },
    { title: "Exportez", description: "Téléchargez l'image finale en PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "dashboard_customize", title: "Tous les outils au même endroit", description: "Recadrer, redimensionner, pivoter, retourner, ajuster, filtres, noir et blanc, flou, bordure, arrondi, filigrane et dessin, sans quitter la page." },
    { icon: "history", title: "Annuler et rétablir", description: "Appliquez les retouches les unes après les autres, revenez en arrière ou en avant librement, ou retrouvez l'original à tout moment." },
    { icon: "lock", title: "100 % privé", description: "Tout l'éditeur tourne dans votre navigateur avec HTML canvas : votre image n'est jamais envoyée sur un serveur." },
  ],

  faqs: [
    { q: "Que puis-je faire dans l'éditeur photo ?", a: "Recadrer et redimensionner, faire pivoter et retourner, régler la luminosité, le contraste, la saturation et la teinte avec des filtres prédéfinis, passer en noir et blanc, flouter, ajouter une bordure, recadrer en cercle, poser un filigrane texte ou logo, et dessiner ou annoter, le tout sur une même image." },
    { q: "Puis-je annuler une modification ?", a: "Oui. Chaque retouche appliquée s'ajoute à un historique que vous pouvez annuler et rétablir, et vous pouvez revenir à l'original à tout moment." },
    { q: "L'éditeur travaille-t-il en pleine résolution ?", a: "Oui. Les retouches sont composées sur un canevas en pleine résolution. Exportez en PNG pour un résultat sans perte, ou en JPG/WEBP avec un curseur de qualité." },
    { q: "Dois-je installer quelque chose ou m'inscrire ?", a: "Non. C'est un éditeur photo en ligne gratuit qui fonctionne entièrement dans votre navigateur : sans inscription, sans installation, et votre image ne quitte jamais votre appareil." },
    { q: "Est-ce vraiment privé ?", a: "Oui. Toute la retouche se fait localement dans votre navigateur ; rien n'est envoyé ni stocké." },
    { q: "Est-ce que ça marche sur n'importe quel ordinateur ou téléphone ?", a: "Oui. L'éditeur fonctionne dans le navigateur que vous avez déjà, sous Windows, macOS, Linux, Android et iOS. Rien à télécharger, aucun compte à créer, aucun abonnement : c'est tout l'intérêt, puisque la plupart des retouches prennent moins d'une minute et ne justifient pas d'installer une suite photo." },
    { q: "Comment se compare-t-il à Photoshop ?", a: "Il ne se compare pas, et ne cherche pas à le faire. Pas de calques, de masques, de courbes ni de modes de fusion ici. Il couvre en revanche l'ensemble des opérations qui représentent l'immense majorité des retouches du quotidien (recadrer, pivoter, redimensionner, ajuster, annoter, exporter), sans temps de lancement ni licence." },
    { q: "La retouche modifie-t-elle mon fichier d'origine ?", a: "Non. L'image est chargée en mémoire et tout se passe sur une copie : rien n'est validé avant l'export, et le fichier sur votre disque n'est jamais modifié. Le dessin peut aussi être effacé sans toucher au reste de votre travail." },
    { q: "Quels formats puis-je ouvrir et enregistrer ?", a: "Vous pouvez ouvrir des JPG, PNG, WEBP, GIF et BMP, et enregistrer en JPG, PNG ou WEBP. Les GIF animés s'ouvrent sur leur première image, car l'éditeur travaille sur une seule image fixe." },
    { q: "La retouche réduit-elle la qualité de l'image ?", a: "Le recadrage, la rotation à angle droit et le retournement sont sans perte. Réduire la taille l'est aussi en pratique. La qualité ne se joue qu'à l'export : choisissez PNG ou WEBP pour tout conserver à l'identique, ou JPG avec une qualité élevée pour un fichier plus léger." },
    { q: "Puis-je retoucher une photo depuis mon téléphone ?", a: "Oui. La mise en page s'adapte aux petits écrans et le canevas réagit au toucher : recadrer et annoter se font du bout du doigt. Les très grandes images sont limitées par la mémoire que votre téléphone accorde au navigateur, pas par l'outil." },
    { q: "Y a-t-il des filtres prêts à l'emploi comme sur Instagram ?", a: "Oui : Original, Éclatant, N&B, Sépia, Froid et Chaud dans l'outil « Ajuster », ainsi qu'une « Amélioration auto » qui corrige en un geste une exposition terne ou sombre. Après avoir choisi un filtre, les curseurs restent actifs : vous pouvez affiner à la main la luminosité, le contraste, la saturation, la teinte et le sépia." },
    { q: "Puis-je écrire du texte sur une image ?", a: "Oui. L'outil de filigrane place un texte ou un logo avec la police, la taille, la couleur, l'opacité et la position de votre choix ; l'outil de dessin ajoute des flèches, des lignes, des rectangles et des ellipses." },
  ],

  security:
    "Votre image reste privée. Tout l'éditeur s'exécute dans votre navigateur avec HTML canvas : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // AllInOneEditor.tsx
    "Please select an image file.": "Veuillez sélectionner un fichier image.",
    "Couldn't read that image.": "Impossible de lire cette image.",
    "Applied.": "Appliqué.",
    "Couldn't apply that edit.": "Impossible d'appliquer cette modification.",
    "Exported your edited image.": "Votre image retouchée a été exportée.",
    "Export failed.": "L'export a échoué.",
    "Couldn't read that logo.": "Impossible de lire ce logo.",
    "Open an image": "Ouvrir une image",
    "or drop a JPG, PNG, WEBP or GIF to start editing": "ou déposez ici un JPG, PNG, WEBP ou GIF pour commencer la retouche",
    "Drag the box or its corners to set the crop, then Apply.": "Faites glisser le cadre ou ses coins pour définir le recadrage, puis cliquez sur « Appliquer ».",
    "Draw on the image, then Apply to bake it in.": "Dessinez sur l'image, puis cliquez sur « Appliquer » pour l'intégrer.",
    "Live preview — adjust on the right, then Apply.": "Aperçu en direct : réglez à droite, puis « Appliquer ».",
    "Live preview — open the options below, then Apply.": "Aperçu en direct : ouvrez les options ci-dessous, puis « Appliquer ».",
    "Watermark": "Filigrane",
    "Editor": "Éditeur",
    "Export image": "Exporter l'image",
    "Export": "Exporter",
    "Left": "Gauche",
    "Right": "Droite",
    "Flip H": "Miroir H",
    "Flip V": "Miroir V",
    "Fine angle": "Angle fin",
    "Width": "Largeur",
    "Height": "Hauteur",
    "Lock aspect ratio": "Verrouiller les proportions",
    "Intensity": "Intensité",
    "Blur strength": "Intensité du flou",
    "Thickness": "Épaisseur",
    "Corner rounding": "Arrondi des coins",
    "Border color": "Couleur de la bordure",
    "Ring thickness": "Épaisseur de l'anneau",
    "Ring color": "Couleur de l'anneau",
    "Text": "Texte",
    "Logo": "Logo", // i18n-same
    "Size": "Taille",
    "Text color": "Couleur du texte",
    "Change logo": "Changer de logo",
    "Upload logo": "Importer un logo",
    "Logo size": "Taille du logo",
    "Opacity": "Opacité",
    "Position": "Position", // i18n-same
    "Text to stamp": "Texte à apposer",
    "Label": "Étiquette",
    "Color": "Couleur",
    "Stroke / size": "Trait / taille",
    "Clear drawing": "Effacer le dessin",
    "Undo": "Annuler",
    "Redo": "Rétablir",
    "Revert to original": "Revenir à l'original",
    "Change": "Modifier",
    "JPG background": "Fond du JPG",
    // RIBBON (module scope, §4.2)
    "Crop": "Recadrer",
    "Rotate": "Pivoter",
    "Resize": "Taille",
    "Adjust": "Ajuster",
    "Gray": "N&B",
    "Blur": "Flouter",
    "Border": "Bordure",
    "Round": "Arrondir",
    "Mark": "Filigrane",
    "Draw": "Dessiner",
    // ASPECTS
    "Free": "Libre",
    // ADJ presets and sliders
    "Original": "Original", // i18n-same
    "Vivid": "Éclatant",
    "B&W": "N&B",
    "Sepia": "Sépia",
    "Cool": "Froid",
    "Warm": "Chaud",
    "Brightness": "Luminosité",
    "Contrast": "Contraste",
    "Saturation": "Saturation", // i18n-same
    "Hue": "Teinte",
    "Auto enhance": "Amélioration auto",
    // FONTS
    "Sans": "Sans", // i18n-same
    "Serif": "Serif", // i18n-same
    "Impact": "Impact", // i18n-same
    "Mono": "Mono", // i18n-same
    // SHAPE_LABELS
    "Pen": "Crayon",
    "Line": "Ligne",
    "Arrow": "Flèche",
    "Rectangle": "Rectangle", // i18n-same
    "Ellipse": "Ellipse", // i18n-same
    // POSITION_LABELS
    "Top left": "En haut à gauche",
    "Top center": "En haut au centre",
    "Top right": "En haut à droite",
    "Middle left": "Au milieu à gauche",
    "Center": "Centre",
    "Middle right": "Au milieu à droite",
    "Bottom left": "En bas à gauche",
    "Bottom center": "En bas au centre",
    "Bottom right": "En bas à droite",
  },
};

export default content;
