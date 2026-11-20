import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/recadrer-gif.
 *
 * Target query « Recadrer un GIF » (recadrer un GIF animé / en ligne) leads
 * the h1; « rogner un GIF » rides in the intro, a heading and an FAQ. The ui
 * block is shared with rotate-gif, reverse-gif, gif-speed-changer and
 * gif-cutter, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-cropper",
  locale: "fr",
  name: "Recadrer un GIF",
  tagline:
    "Recadrez vos GIF animés en ligne : faites glisser un cadre ou saisissez des pixels exacts, verrouillez un format, et chaque image est recadrée de la même façon. L'animation continue de tourner. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Recadrer un GIF – Rogner un GIF animé en ligne | oMyImage",
  metaDescription:
    "Recadrer un GIF sans perdre l'animation : faites glisser le cadre ou saisissez les pixels, et verrouillez un format comme 1:1 ou 16:9. Gratuit, sans filigrane.",

  intro:
    "La plupart des outils de recadrage aplatissent un GIF sur sa première image : l'animation est perdue dès que vous coupez. L'outil « Recadrer un GIF » d'oMyImage travaille sur toute l'animation : faites glisser le cadre sur la partie à conserver, ou saisissez sa position et sa taille en pixels, et chaque image est coupée exactement à cette zone, sans toucher à son rythme. Un curseur d'images vous permet de vérifier le cadre sur un contenu qui bouge avant de valider, et le résultat est lu à côté de l'original pour que vous puissiez les comparer avant de télécharger. Rogner un GIF n'a jamais été aussi simple.",

  sections: [
    {
      heading: "Pourquoi recadrer un GIF",
      id: "why",
      body: [
        "Les enregistrements d'écran et les GIF tirés de vidéos contiennent généralement plus que la partie intéressante : une barre d'outils de navigateur, des bandes noires d'un extrait en format large, un filigrane dans un coin ou de l'espace vide autour du sujet. Le recadrage supprime tout cela : l'action remplit le cadre, et la réaction ou la démonstration reste lisible aux petites tailles auxquelles les GIF sont habituellement affichés.",
        "Un recadrage allège aussi le fichier. Un GIF stocke chaque pixel de chaque image : garder la moitié de la largeur et la moitié de la hauteur laisse environ un quart des données. C'est souvent suffisant pour passer sous une limite d'envoi sans rien sacrifier de la qualité.",
      ],
    },
    {
      heading: "Choisir la zone à conserver",
      id: "area",
      body: [
        "Faites glisser l'intérieur du cadre pour le déplacer, et un coin ou un bord pour le redimensionner ; les flèches du clavier le décalent d'un pixel à la fois. Les champs Gauche, Haut, Largeur et Hauteur indiquent le cadre en pixels et acceptent des valeurs saisies : c'est le moyen le plus rapide de respecter une taille imposée.",
        "Comme le sujet d'une animation bouge, le cadre est tracé sur une image à la fois. Utilisez le curseur d'images sous le visuel pour parcourir l'animation et vérifier que rien d'important ne sort du cadre en cours de route : une main qui s'agite hors champ ou une légende qui apparaît tardivement.",
      ],
    },
    {
      heading: "Formats et proportions",
      id: "ratios",
      body: [
        "« Libre » laisse le cadre prendre n'importe quelle forme. Les formats fixes le verrouillent pendant que vous le faites glisser : 1:1 pour les avatars, les stickers et Instagram, 4:5 pour les publications en portrait, 16:9 pour les bannières façon vidéo et les diapositives, 9:16 pour les stories et les écrans de téléphone, et 4:3 ou 3:2 pour les formats photo classiques. Choisir un format redessine le cadre actuel autour de son centre, pour qu'il reste sur la même partie de l'image.",
        "Si le GIF doit aussi avoir une taille exacte en pixels, recadrez d'abord au bon format, puis fixez la taille finale avec « Redimensionner un GIF ».",
      ],
    },
    {
      heading: "Ce qui ne change pas",
      id: "kept",
      body: [
        "Chaque image conserve sa durée : l'animation se lit à la même vitesse et boucle comme avant. Les GIF transparents restent transparents. Et comme le recadrage ne fait que retirer des pixels, les couleurs sont réécrites à l'identique dès que les couleurs du GIF tiennent dans une seule palette, ce qui est le cas de la plupart des GIF : rien n'est requantifié, donc aucune nouvelle bande ni aucun moucheté n'apparaît.",
        "Les GIF tirés de vidéos utilisent parfois une palette distincte pour chaque image. Ceux-là sont recolorés avec une seule palette partagée de 256 couleurs, choisie à partir de toutes les images, ce qui se voit rarement.",
      ],
    },
    {
      heading: "Rogner un GIF : les recadrages courants",
      id: "uses",
      body: [
        "Supprimer les bandes noires d'un extrait tiré d'un film ou d'une vidéo YouTube. Réduire un enregistrement d'écran à la seule boîte de dialogue ou au seul bouton dont il est question. Faire un avatar ou un sticker carré à partir d'un GIF de réaction en format large. Rogner les bords où se trouve un filigrane ou le logo d'un site, lorsque vous avez le droit d'utiliser l'animation.",
        "Pour les recadrages qui changent la forme (un GIF large transformé en carré ou en portrait), verrouillez d'abord le format, puis placez le cadre, afin que le sujet se retrouve centré.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé, recadré et encodé entièrement dans votre navigateur. Il n'est jamais envoyé sur un serveur et rien n'est conservé une fois la page fermée : vos enregistrements d'écran privés et vos extraits personnels restent sur votre appareil.",
      ],
    },
    {
      heading: "Après le recadrage",
      id: "next",
      body: [
        "Un GIF recadré est souvent déjà assez léger. Si ce n'est pas le cas, « Compresser un GIF » peut l'alléger davantage avec moins de couleurs, et « Couper un GIF » peut supprimer les images avant ou après le moment qui vous intéresse. Pour mettre le GIF sur le côté, utilisez « Faire pivoter un GIF » ; pour le partager sous forme de vidéo, convertissez-le avec « GIF en MP4 ».",
      ],
    },
  ],

  howToTitle: "Comment recadrer un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Tracez le cadre", description: "Faites glisser le cadre de recadrage ou saisissez sa taille ; verrouillez un format si nécessaire." },
    { title: "Recadrez et téléchargez", description: "Cliquez sur « Recadrer le GIF », comparez le résultat à l'original et téléchargez-le." },
  ],

  features: [
    { icon: "crop", title: "Toute l'animation", description: "Chaque image est recadrée sur la même zone et conserve sa durée." },
    { icon: "aspect_ratio", title: "Tailles exactes", description: "Faites glisser le cadre, saisissez des pixels ou verrouillez un format comme 1:1 ou 16:9." },
    { icon: "lock", title: "Aucun envoi", description: "Recadré entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment recadrer un GIF animé ?", a: "Ajoutez le GIF, faites glisser le cadre sur la zone à conserver, puis cliquez sur « Recadrer le GIF ». Chaque image est recadrée de la même façon et l'animation continue de tourner." },
    { q: "Le GIF restera-t-il animé ?", a: "Oui. Toutes les images sont conservées, chacune avec sa durée d'origine, et le GIF boucle comme avant." },
    { q: "Puis-je recadrer un GIF en carré ?", a: "Oui. Choisissez 1:1 et le cadre garde une forme carrée pendant que vous le déplacez et le redimensionnez." },
    { q: "Puis-je saisir une taille exacte ?", a: "Oui. Dans les paramètres, saisissez la position à gauche et en haut ainsi que la largeur et la hauteur en pixels." },
    { q: "Rogner un GIF fait-il baisser la qualité ?", a: "Non. Les pixels à l'intérieur du cadre restent tels quels, et les couleurs d'origine sont réutilisées dès qu'elles tiennent dans une seule palette." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les GIF transparents restent transparents après le recadrage." },
    { q: "Le fichier sera-t-il plus léger ?", a: "En général, oui. Moins de pixels par image, c'est moins de données, à peu près en proportion de la surface retirée." },
    { q: "Pourquoi le cadre n'affiche-t-il qu'une seule image ?", a: "Un cadre de recadrage ne peut être tracé que sur une image à la fois. Utilisez le curseur d'images pour le vérifier sur le reste de l'animation." },
    { q: "Puis-je recadrer plusieurs GIF à la fois ?", a: "Un à la fois. Chaque animation demande généralement son propre cadre." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Le GIF est recadré entièrement dans votre navigateur et ne quitte jamais votre appareil." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui, dans un navigateur mobile. Faites glisser le cadre avec le doigt ; les gros GIF prennent un peu plus de temps sur un téléphone." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite au nombre de GIF que vous recadrez." },
    { q: "Quel format choisir pour un sticker ?", a: "Le 1:1. Les stickers sont carrés ; après le recadrage, ramenez le GIF à 512 pixels ou moins avec « Redimensionner un GIF »." },
  ],

  security:
    "Votre GIF est recadré entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // GifEditTool.tsx — shared with rotate-gif, reverse-gif, gif-speed-changer
    // and gif-cutter, whose modules reuse this block.
    "Select a GIF": "Sélectionner un GIF",
    "or drop a GIF here": "ou déposez un GIF ici",
    "Please select a GIF.": "Sélectionnez un GIF.",
    "Could not read this image.": "Impossible de lire cette image.",
    "Processing failed.": "Le traitement a échoué.",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "GIF settings": "Paramètres du GIF",
    "Download GIF": "Télécharger le GIF",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Your GIF will appear here.": "Votre GIF apparaîtra ici.",
    "Original": "Original", // i18n-same
    "Result": "Résultat",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "{n} frames": "{n} images",
    "{s} s": "{s} s", // i18n-same
    "Width (px)": "Largeur (px)",
    "Height (px)": "Hauteur (px)",
    "Left (px)": "Gauche (px)",
    "Top (px)": "Haut (px)",
    "Your file is processed in your browser and never uploaded.": "Votre fichier est traité dans votre navigateur et n'est jamais envoyé.",
    "Preview": "Aperçu",
    "Crop GIF": "Recadrer le GIF",
    "Rotate GIF": "Faire pivoter le GIF",
    "Reverse GIF": "Inverser le GIF",
    "Change speed": "Changer la vitesse",
    "Cut GIF": "Couper le GIF",
    "This GIF has only one frame, so it isn't animated.": "Ce GIF ne contient qu'une seule image : il n'est donc pas animé.",
    // crop
    "Aspect ratio": "Format",
    "Free": "Libre",
    "Select the whole frame": "Sélectionner toute l'image",
    "Every frame is cropped to the same area and keeps its timing.": "Chaque image est recadrée sur la même zone et conserve sa durée.",
    "Drag the box to choose the area to keep · output {w} × {h} px":
      "Faites glisser le cadre pour choisir la zone à conserver · sortie {w} × {h} px",
    "Frame {i} of {n}": "Image {i} sur {n}",
    "Frame shown under the crop box": "Image affichée sous le cadre de recadrage",
    // rotate
    "Rotate": "Pivoter",
    "90° left": "90° à gauche",
    "90° right": "90° à droite",
    "Flip": "Retourner",
    "Horizontal": "Horizontal", // i18n-same
    "Vertical": "Vertical", // i18n-same
    "Every frame is turned the same way and keeps its timing.": "Chaque image est tournée de la même façon et conserve sa durée.",
    // reverse
    "Direction": "Sens",
    "Reverse": "Inverser",
    "Boomerang": "Boomerang", // i18n-same
    "Plays forwards, then backwards, as one seamless loop.": "Lecture à l'endroit, puis à l'envers, en une seule boucle continue.",
    "Plays the frames in reverse order, each with its own timing.": "Lit les images dans l'ordre inverse, chacune avec sa propre durée.",
    // speed
    "Change": "Modifier",
    "By speed": "Par vitesse",
    "Frame delay": "Durée par image",
    "Speed": "Vitesse",
    "Above 1× is faster, below 1× is slower.": "Au-dessus de 1×, c'est plus rapide ; en dessous de 1×, plus lent.",
    "Every frame (ms)": "Chaque image (ms)",
    "{fps} frames per second": "{fps} images par seconde",
    "Length: {a} → {b}": "Durée : {a} → {b}",
    "Only the timing changes — every frame and pixel stays as it was.":
      "Seul le rythme change : chaque image et chaque pixel restent tels quels.",
    "To play this fast, {n} frames are merged: browsers slow down frames shorter than 0.02 s.":
      "Pour aller aussi vite, {n} images sont fusionnées : les navigateurs ralentissent les images de moins de 0,02 s.",
    // cut
    "Start": "Début",
    "End": "Fin",
    "Frame {i} · {s} s": "Image {i} · {s} s",
    "First frame": "Première image",
    "Last frame": "Dernière image",
    "Selected part": "Partie sélectionnée",
    "Keep it": "La conserver",
    "Remove it": "La supprimer",
    "Result: {n} frames · {s}": "Résultat : {n} images · {s}",
    "Keep at least one frame.": "Conservez au moins une image.",
  },
};

export default content;
