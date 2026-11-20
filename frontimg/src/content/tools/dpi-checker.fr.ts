import type { ToolPageContent } from "@/content/tools/types";
import converter from "@/content/tools/dpi-converter.fr";

/**
 * French copy for /fr/verifier-dpi-image (dpi-checker). Target query:
 * «Vérifier le DPI d'une image»; secondary «connaître le DPI d'une image».
 * Reuses the dpi-converter `ui` block.
 */
const content: ToolPageContent = {
  toolId: "dpi-checker",
  locale: "fr",
  name: "Vérifier le DPI d'une image",
  tagline:
    "Vérifiez le DPI de vos images JPG, PNG, BMP et WEBP, et voyez à quelle taille chacune s'imprime ainsi que la plus grande taille qu'elle permet d'imprimer nettement. Gratuit, plusieurs images à la fois, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Vérifier le DPI d'une image – gratuit | oMyImage",
  metaDescription:
    "Vérifier le DPI d'une image gratuitement : connaître le DPI d'un JPG, PNG, BMP ou WEBP, où il est stocké et la taille d'impression nette en cm.",

  intro:
    "Avant d'envoyer une image à un imprimeur ou de la déposer sur un formulaire qui exige un certain DPI, mieux vaut savoir ce que le fichier indique réellement. L'outil « Vérifier le DPI d'une image » d'oMyImage lit la résolution enregistrée dans chaque image, vous dit où elle est stockée et la traduit en chiffres utiles : la taille à laquelle l'image s'imprime avec ce DPI, et la taille maximale qu'elle atteint en qualité photo. Pour connaître le DPI d'une image ou de tout un dossier, ajoutez-les ici : rien ne quitte votre navigateur.",

  sections: [
    {
      heading: "Ce que l'outil affiche",
      id: "what",
      body: [
        "Pour chaque image, vous obtenez sa taille en pixels, le DPI stocké dans le fichier et l'endroit où il a été trouvé : l'en-tête JFIF ou les données EXIF d'un JPG, le bloc pHYs d'un PNG, l'en-tête d'un BMP ou le bloc EXIF d'un WEBP. Si les valeurs horizontale et verticale diffèrent, les deux sont affichées.",
        "À partir de ces chiffres, l'outil calcule deux tailles d'impression, en centimètres et en pouces : celle que le fichier demande avec son DPI enregistré, et la plus grande taille nette à 300 DPI, la norme habituelle pour les photos et les documents.",
      ],
    },
    {
      heading: "Lire le résultat",
      id: "reading",
      body: [
        "Prenons une photo de 2400 × 3000 pixels enregistrée à 72 DPI. L'outil indique une taille d'impression d'environ 84,7 × 105,8 cm — ce qu'en ferait un logiciel qui se fie à l'étiquette — et une taille nette de 20,3 × 25,4 cm à 300 DPI. C'est le second chiffre qui dit la vérité : c'est la taille maximale avant que les pixels ne deviennent visibles.",
        "Si un formulaire ou un imprimeur demande 300 DPI et que l'outil affiche autre chose, changez la valeur avec « Changer le DPI d'une image ». Si la taille nette est inférieure à celle dont vous avez besoin, l'image manque de pixels : une autre étiquette n'y changera rien.",
      ],
    },
    {
      heading: "Quand une image n'a pas de DPI",
      id: "none",
      body: [
        "Beaucoup d'images ne portent aucun DPI : les GIF jamais, de nombreux PNG et captures d'écran non plus, et certains JPG ne stockent qu'un rapport d'aspect des pixels. L'outil le dit clairement. Les logiciels se rabattent alors sur une valeur par défaut — en général 72 ou 96 DPI —, ce qui explique qu'un même fichier affiche des valeurs différentes selon l'application.",
        "Une valeur absente ne pose aucun problème pour les écrans et les sites web. Elle ne compte que lorsque l'image est imprimée ou placée dans un document, et régler un DPI corrige cela en une seconde.",
      ],
    },
    {
      heading: "Vérifier le DPI sous Windows et sur Mac",
      id: "os",
      body: [
        "Sous Windows, faites un clic droit sur l'image, choisissez Propriétés et ouvrez l'onglet Détails : « Résolution horizontale » et « Résolution verticale » indiquent le DPI. Sur Mac, ouvrez l'image dans Aperçu et choisissez Outils, puis Afficher l'inspecteur ; le premier onglet indique le DPI de l'image. Les deux lisent la même valeur stockée que cet outil, les chiffres devraient donc concorder.",
      ],
    },
    {
      heading: "DPI et taille en pixels ensemble",
      id: "both",
      body: [
        "Certaines exigences combinent les deux, comme une photo de 3,5 × 4,5 cm à 300 DPI, soit 413 × 531 pixels. Vérifiez d'abord ici la taille en pixels et le DPI ; si l'un des deux ne convient pas, « Redimensionner une image en cm » produit la taille exacte en pixels pour les centimètres et le DPI voulus, et enregistre le DPI dans le fichier.",
      ],
    },
  ],

  howToTitle: "Comment vérifier le DPI d'une image",
  steps: [
    { title: "Ajoutez vos images", description: "Sélectionnez une ou plusieurs images JPG, PNG, BMP, WEBP ou GIF." },
    { title: "Lisez les résultats", description: "Chaque image affiche ses pixels, son DPI enregistré, l'endroit où il est stocké et ses tailles d'impression." },
    { title: "Modifiez-le si besoin", description: "Cliquez sur « Changer le DPI » pour envoyer directement les images vers l'outil de conversion." },
  ],

  features: [
    { icon: "info", title: "Le DPI et son emplacement", description: "JFIF, EXIF, bloc pHYs du PNG ou en-tête BMP — et une mention claire quand il n'y en a pas." },
    { icon: "straighten", title: "Tailles d'impression", description: "La taille à laquelle chaque image s'imprime, et la plus grande taille nette à 300 DPI." },
    { icon: "lock", title: "Aucun envoi", description: "Les fichiers sont lus dans votre navigateur et ne quittent jamais votre appareil." },
  ],

  faqs: [
    { q: "Comment vérifier le DPI d'une image ?", a: "Ajoutez-la ici. L'outil affiche le DPI stocké dans le fichier, l'endroit où il est enregistré et les tailles auxquelles l'image s'imprime." },
    { q: "Pourquoi mon image n'a-t-elle pas de DPI ?", a: "Les GIF n'en stockent jamais, et beaucoup de PNG, de captures d'écran et d'images web non plus. Les logiciels supposent alors 72 ou 96 DPI." },
    { q: "Pourquoi les applications affichent-elles des DPI différents ?", a: "Quand un fichier ne stocke aucun DPI, ou deux valeurs contradictoires, chaque application se rabat sur sa propre valeur par défaut ou lit un autre champ." },
    { q: "72 DPI, est-ce mauvais ?", a: "Pas pour les écrans, qui ignorent le DPI. Pour l'impression, ce qui compte, c'est d'avoir assez de pixels pour la taille voulue." },
    { q: "À quelle taille mon image peut-elle s'imprimer nettement ?", a: "Divisez les pixels par 300 pour obtenir des pouces. L'outil fait le calcul pour vous et affiche aussi le résultat en centimètres." },
    { q: "Puis-je vérifier plusieurs images à la fois ?", a: "Oui. Ajoutez-les toutes ; chacune reçoit son propre résultat." },
    { q: "Comment changer le DPI après la vérification ?", a: "Cliquez sur « Changer le DPI ». Vos images s'ouvrent dans « Changer le DPI d'une image », où vous choisissez la nouvelle valeur." },
    { q: "L'outil lit-il le DPI d'un WEBP ou d'un BMP ?", a: "Oui, quand le fichier en contient un : le BMP le garde dans son en-tête, le WEBP dans son bloc EXIF." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Les fichiers sont lus entièrement dans votre navigateur." },
    { q: "Le DPI renseigne-t-il sur la qualité de l'image ?", a: "Pas à lui seul. La qualité dépend des pixels et de la compression ; le DPI ne fixe que la taille d'impression. Une image à 300 DPI avec peu de pixels s'imprime nettement, mais en tout petit." },
  ],

  security:
    "Vos images sont lues entièrement dans votre navigateur. Rien n'est envoyé, conservé ni pisté.",

  ui: converter.ui,
};

export default content;
