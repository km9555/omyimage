import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/changer-dpi-image (dpi-converter). Target query:
 * «Changer le DPI d'une image»; secondary «image en 300 DPI». Only the DPI
 * field in the header is rewritten (lib/image/dpi.ts); the ui block is shared
 * with dpi-checker, whose module reuses it.
 */
const content: ToolPageContent = {
  toolId: "dpi-converter",
  locale: "fr",
  name: "Changer le DPI d'une image",
  tagline:
    "Changez le DPI de vos images JPG et PNG en 300, 200, 72 ou toute autre valeur : seule l'indication de DPI change, l'image reste donc strictement identique. Par lots, gratuit, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Changer le DPI d'une image – 300 DPI, gratuit | oMyImage",
  metaDescription:
    "Changer le DPI d'une image gratuitement : passez une image en 300 DPI (ou 200, 72…) sans toucher aux pixels ni à la qualité. JPG et PNG, par lots.",

  intro:
    "Les imprimeurs, les éditeurs et certains formulaires de candidature demandent des images « en 300 DPI », alors qu'une photo sortie d'un téléphone ou une capture d'écran indique en général 72 ou 96 — ou rien du tout. L'outil « Changer le DPI d'une image » d'oMyImage réécrit cette seule valeur dans le fichier. Ajoutez vos images JPG ou PNG, choisissez le DPI et téléchargez des copies dont les pixels, la qualité et les couleurs sont identiques à l'octet près aux originaux, désormais marquées avec la résolution dont vous avez besoin. Besoin d'une image en 300 DPI ? C'est l'affaire de quelques secondes.",

  sections: [
    {
      heading: "Ce que le DPI change vraiment",
      id: "what",
      body: [
        "Le DPI — points par pouce, ou plus exactement PPI (pixels par pouce) pour une image numérique — est un nombre stocké dans l'en-tête du fichier. Il ne décrit pas l'image : il indique à une imprimante ou à un logiciel de mise en page combien de pixels de l'image placer dans chaque pouce de papier. Les écrans l'ignorent totalement, ce qui explique qu'une même photo s'affiche à l'identique sur un site, qu'elle indique 72 ou 300.",
        "Comme le DPI n'est qu'une étiquette, le changer revient à modifier un tout petit élément de l'en-tête : la densité JFIF d'un JPG (et la résolution EXIF, si le fichier en a une), ou le bloc pHYs d'un PNG. Rien n'est recompressé : aucune perte de qualité, et le poids du fichier reste le même à quelques octets près.",
      ],
    },
    {
      heading: "Comment la taille d'impression découle du DPI",
      id: "print-size",
      body: [
        "La taille d'impression, c'est simplement le nombre de pixels divisé par le DPI. Une photo de 1200 × 1800 pixels marquée 300 DPI s'imprime en 4 × 6 pouces (10,2 × 15,2 cm). Marquée 72 DPI, ces mêmes pixels réclament un tirage de 42,3 × 63,5 cm. L'outil affiche la taille d'impression de la première image au fur et à mesure que vous choisissez une valeur, pour voir l'effet avant de télécharger.",
        "Voilà pourquoi changer le DPI est utile dans les logiciels de mise en page et les traitements de texte : une image marquée 300 DPI s'insère dans un document à la taille physique prévue au lieu d'apparaître immense.",
      ],
    },
    {
      heading: "Quand faut-il une image en 300 DPI ?",
      id: "when",
      body: [
        "300 DPI est la norme pour les tirages photo, les livres, les magazines et tout ce qu'on regarde de près. 150–200 DPI suffisent pour les affiches et grands formats vus à distance, et certains formulaires de candidature exigent exactement 200 ou 300 parce que leur système vérifie la valeur. 72 et 96 DPI sont d'anciennes conventions d'écran et ne comptent que lorsqu'un modèle les attend.",
        "Si un service d'impression refuse un fichier pour DPI insuffisant, vérifiez aussi sa taille en pixels : le service veut généralement dire que l'image s'imprimera trop grande ou trop floue au format commandé, ce qu'une nouvelle étiquette ne peut pas corriger à elle seule.",
      ],
    },
    {
      heading: "Changer le DPI n'ajoute pas de pixels",
      id: "resample",
      body: [
        "Régler 300 DPI sur une petite image ne la rend pas plus nette : elle s'imprime simplement plus petite. Une photo de 600 × 400 pixels à 300 DPI ne s'imprime qu'en 5,1 × 3,4 cm. Pour imprimer plus grand avec la même qualité, il faut davantage de pixels à la source — un original ou un export en plus haute résolution —, pas un chiffre plus élevé dans l'en-tête.",
        "Quand il vous faut une taille physique exacte, utilisez « Redimensionner une image en cm » : l'outil calcule les pixels pour une taille en centimètres, en millimètres ou en pouces au DPI choisi, et enregistre ce DPI dans le fichier dans la foulée.",
      ],
    },
    {
      heading: "Quels fichiers peuvent stocker un DPI",
      id: "formats",
      body: [
        "Le JPG et le PNG disposent tous deux d'un emplacement standard pour le DPI, et ces fichiers sont modifiés tels quels. Les fichiers WEBP, GIF et BMP sont d'abord convertis en PNG — sans perte, chaque pixel est conservé — car le PNG peut porter cette valeur et il est accepté partout où le DPI compte. Le nom du fichier téléchargé se termine par la nouvelle valeur, par exemple photo_300dpi.jpg.",
      ],
    },
  ],

  howToTitle: "Comment changer le DPI d'une image",
  steps: [
    { title: "Ajoutez vos images", description: "Sélectionnez une ou plusieurs images JPG ou PNG ; les formats WEBP, GIF et BMP sont aussi acceptés." },
    { title: "Choisissez le DPI", description: "Prenez 300, 200, 150, 96 ou 72, ou saisissez une valeur, puis vérifiez la taille d'impression." },
    { title: "Téléchargez", description: "Une image se télécharge directement ; plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Aucune perte de qualité", description: "Seule la valeur de DPI de l'en-tête change ; les pixels ne sont pas touchés." },
    { icon: "burst_mode", title: "Conversion par lots", description: "Réglez le DPI de tout un dossier d'images en une seule fois." },
    { icon: "lock", title: "Dans votre navigateur", description: "Vos images sont modifiées sur votre appareil et ne sont jamais envoyées." },
  ],

  faqs: [
    { q: "Comment passer une image en 300 DPI ?", a: "Ajoutez l'image, choisissez 300 et cliquez sur « Changer le DPI ». La copie téléchargée est marquée 300 DPI, avec exactement les mêmes pixels." },
    { q: "Changer le DPI fait-il baisser la qualité ?", a: "Non. Seul un nombre de l'en-tête du fichier change. Rien n'est recompressé, la qualité et le poids restent donc identiques." },
    { q: "300 DPI rendront-ils ma photo plus nette ?", a: "Non. Le DPI fixe la taille d'impression, pas la quantité de détails. Un DPI plus élevé sur les mêmes pixels donne un tirage plus petit, pas plus net." },
    { q: "Quel DPI choisir pour l'impression ?", a: "300 DPI pour les photos et documents regardés de près ; 150–200 pour les affiches et grands formats vus à distance." },
    { q: "Pourquoi mon image affiche-t-elle 72 ou 96 DPI ?", a: "Les téléphones, les captures d'écran et beaucoup d'applications enregistrent 72 ou 96, voire aucune valeur, et les logiciels supposent alors l'une de ces deux. Cela ne compte que pour l'impression." },
    { q: "Le DPI compte-t-il pour un site web ou les réseaux sociaux ?", a: "Non. Les écrans affichent des pixels et ignorent complètement la valeur de DPI." },
    { q: "Puis-je changer le DPI d'un WEBP ou d'un GIF ?", a: "Oui. Ils sont convertis en PNG sans perdre un seul pixel, et le PNG reçoit le DPI choisi." },
    { q: "Comment vérifier le DPI après la conversion ?", a: "Utilisez « Vérifier le DPI d'une image », ou ouvrez les propriétés du fichier : sous Windows, l'onglet Détails affiche la résolution horizontale et verticale." },
    { q: "Puis-je changer le DPI de nombreuses images à la fois ?", a: "Oui. Ajoutez-les toutes ; chacune reçoit le même DPI et elles se téléchargent ensemble dans un ZIP." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Le DPI est modifié entièrement dans votre navigateur." },
    { q: "Quelle différence entre DPI et PPI ?", a: "Pour une image numérique, les deux sont employés comme synonymes. PPI (pixels par pouce) est le terme exact pour un fichier ; DPI (points par pouce) vient de l'imprimante. Formulaires et imprimeurs écrivent le plus souvent DPI dans les deux cas." },
  ],

  security:
    "Vos images sont modifiées entièrement dans votre navigateur : seul le champ DPI de chaque fichier est réécrit. Rien n'est envoyé, conservé ni pisté.",

  ui: {
    // DpiTool.tsx — shared with dpi-checker, whose module reuses this block.
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "ou déposez ici des images JPG, PNG, WEBP, GIF ou BMP",
    "Change DPI": "Changer le DPI",
    "Change DPI of {n} images": "Changer le DPI de {n} images",
    "Changed the DPI of 1 image.": "DPI modifié pour 1 image.",
    "Changed the DPI of {n} images.": "DPI modifié pour {n} images.",
    "Clear files": "Retirer les fichiers",
    "Remove": "Retirer",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Processing failed.": "Le traitement a échoué.",
    "DPI": "DPI", // i18n-same
    "DPI check": "Vérification du DPI",
    "DPI settings": "Réglages du DPI",
    "DPI only tells a printer how large to print the pixels. It never changes the pixels themselves.":
      "Le DPI indique seulement à l'imprimante à quelle taille imprimer les pixels. Il ne modifie jamais les pixels eux-mêmes.",
    "For a sharp print, divide the pixels by 300: that is the largest size in inches that prints at photo quality.":
      "Pour un tirage net, divisez les pixels par 300 : vous obtenez la plus grande taille en pouces imprimable en qualité photo.",
    "Enter a DPI of at least 1.": "Saisissez un DPI d'au moins 1.",
    "First image prints at {size}": "La première image s'imprime en {size}",
    "Most programs then assume 72 or 96 DPI.": "La plupart des logiciels supposent alors 72 ou 96 DPI.",
    "New DPI": "Nouveau DPI",
    "No DPI": "Aucun DPI",
    "Not set": "Non défini",
    "Only the DPI label changes — the pixels and quality stay exactly the same.":
      "Seule l'indication de DPI change — les pixels et la qualité restent strictement identiques.",
    "Print size": "Taille d'impression",
    "Saving…": "Enregistrement…",
    "Sharp at 300 DPI": "Net à 300 DPI",
    "This format can't be read for DPI": "Impossible de lire le DPI de ce format",
    "WEBP, GIF and BMP files are saved as PNG, because only JPG and PNG can store a DPI.":
      "Les fichiers WEBP, GIF et BMP sont enregistrés en PNG, car seuls le JPG et le PNG peuvent stocker un DPI.",
    "Where": "Emplacement",
    "Your images are changed in your browser and never uploaded.": "Vos images sont modifiées dans votre navigateur et ne sont jamais envoyées.",
    "Your images are read in your browser and never uploaded.": "Vos images sont lues dans votre navigateur et ne sont jamais envoyées.",
    "{dpi} DPI": "{dpi} DPI",
    "{x} × {y} DPI": "{x} × {y} DPI",
    "{w} × {h} cm ({wi} × {hi} in)": "{w} × {h} cm ({wi} × {hi} pouces)",
    // SOURCE_LABEL (module scope)
    "Stored in the JFIF header": "Stocké dans l'en-tête JFIF",
    "Stored in the EXIF data": "Stocké dans les données EXIF",
    "Stored in the PNG pHYs chunk": "Stocké dans le bloc pHYs du PNG",
    "Stored in the BMP header": "Stocké dans l'en-tête BMP",
    "Only an aspect ratio is stored, not a DPI": "Seul un rapport d'aspect est stocké, pas un DPI",
    "No DPI stored": "Aucun DPI stocké",
  },
};

export default content;
