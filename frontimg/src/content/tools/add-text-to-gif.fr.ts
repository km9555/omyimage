import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/ajouter-texte-gif. Target query: « Ajouter du texte à
 * un GIF » (France, Nov 2026); secondary « écrire sur un GIF » / « mettre du
 * texte sur un GIF » in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "add-text-to-gif",
  locale: "fr",
  name: "Ajouter du texte à un GIF",
  tagline:
    "Placez un texte sur un GIF animé (légende de mème, sous-titre ou étiquette) sur toutes les images ou seulement sur certaines, et regardez-le en mouvement avant d'enregistrer. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Ajouter du texte à un GIF – gratuit, en ligne | oMyImage",
  metaDescription:
    "Ajouter du texte à un GIF en ligne et gratuitement : légende de mème ou sous-titre sur un GIF animé, police et couleurs au choix, aperçu en direct.",

  intro:
    "Un GIF en dit plus avec les bons mots : la chute sous une réaction, un sous-titre sur un extrait muet, une étiquette sur chaque étape d'un tutoriel. « Ajouter du texte à un GIF » d'oMyImage écrit votre texte directement sur l'animation. Saisissez-le, choisissez l'une des neuf positions, une police, une taille et des couleurs, et l'aperçu lit le GIF avec votre légende en temps réel. Quand le rendu vous convient, ajoutez-le au GIF : le texte fait alors partie de chaque image (frame) choisie, et il s'affiche partout où le GIF est partagé. Mettre du texte sur un GIF n'a jamais été aussi simple.",

  sections: [
    {
      heading: "Placer le texte",
      id: "position",
      body: [
        "Choisissez l'un des neuf emplacements : les coins, le milieu de chaque bord ou le centre. Les légendes longues passent d'elles-mêmes à la ligne, et la touche Entrée crée un retour à la ligne où vous le voulez. Le texte garde une petite marge par rapport au bord, pour que le contour ne soit jamais coupé.",
        "La taille est définie en proportion du plus petit côté du GIF : le même réglage convient donc à un extrait vertical de téléphone comme à une large bannière. L'aperçu montre le résultat immédiatement, sur l'animation en mouvement et non sur une seule image.",
      ],
    },
    {
      heading: "Écrire sur un GIF : style mème ou style sous-titre",
      id: "style",
      body: [
        "Le look de mème classique, ce sont des capitales Impact blanches avec un épais contour noir, lisibles sur n'importe quel fond, clair ou sombre. Choisissez Impact, cochez « MAJUSCULES » et laissez le contour à sa valeur par défaut. Pour des sous-titres, une police sans empattement simple avec un encadré derrière le texte se lit mieux et paraît plus sobre.",
        "Les couleurs du texte et du contour sont entièrement libres. Réglez l'épaisseur du contour sur zéro pour un texte net sans bordure, ou augmentez-la sur les fonds chargés et lumineux. L'encadré reprend la couleur du contour, en partie transparente, pour que l'image reste visible derrière.",
      ],
    },
    {
      heading: "Du texte sur certaines images seulement",
      id: "timing",
      body: [
        "Choisissez « Certaines images » pour n'afficher le texte que pendant une partie de l'animation. Deux curseurs fixent la première et la dernière image, avec l'instant où chacune commence : une chute peut ainsi apparaître pile au moment de la réaction, ou une étiquette peut accompagner chaque étape d'un enregistrement d'écran.",
        "Pour afficher plusieurs légendes différentes, ajoutez-en une, téléchargez le GIF, rouvrez-le et ajoutez la suivante sur une autre plage d'images. Chaque passage conserve le texte précédent.",
      ],
    },
    {
      heading: "Polices",
      id: "fonts",
      body: [
        "Les quatre polices, Impact, sans empattement, avec empattement et machine à écrire, proviennent de votre appareil : rien de plus n'est téléchargé. Impact est intégrée à Windows et à macOS ; sur les téléphones qui ne l'ont pas, une police sans empattement en gras la remplace. Toutes les langues que votre appareil sait afficher fonctionnent, accents français, hindi, russe et emojis compris.",
      ],
    },
    {
      heading: "Qualité et poids du fichier",
      id: "quality",
      body: [
        "Chaque image garde sa durée, et le GIF boucle comme avant. Les bords du texte sont lissés sur l'image qui se trouve derrière, et les 256 couleurs du GIF sont choisies à nouveau pour toute l'animation : les couleurs du texte s'intègrent donc sans effet de bandes. Ajouter du texte ne change que légèrement le poids du fichier ; si le GIF doit être plus léger, passez-le ensuite dans « Compresser un GIF ».",
      ],
    },
    {
      heading: "Des légendes faciles à lire",
      id: "tips",
      body: [
        "Les légendes courtes se lisent le mieux : un GIF boucle en quelques secondes, alors limitez-vous à une ou deux lignes. Placez le texte là où l'action n'est pas : en bas pour la plupart des extraits, en haut quand les visages ou les mains se trouvent dans le bas du cadre. Un texte clair avec un contour sombre fonctionne sur presque tout ; sur un fond chargé, activez l'encadré.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé, reçoit son texte et est réencodé entièrement dans votre navigateur. Il n'est jamais envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment ajouter du texte à un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Écrivez et mettez en forme", description: "Saisissez le texte, choisissez la position, la police, la taille et les couleurs ; l'aperçu le lit en direct." },
    { title: "Ajoutez et téléchargez", description: "Cliquez sur « Ajouter le texte au GIF », vérifiez le résultat et téléchargez-le." },
  ],

  features: [
    { icon: "text_fields", title: "Aperçu en direct", description: "Voyez la légende sur le GIF en mouvement pendant que vous écrivez." },
    { icon: "palette", title: "Mème ou sous-titre", description: "Contour, encadré, couleurs, majuscules et neuf positions." },
    { icon: "lock", title: "Aucun envoi", description: "Le texte est ajouté entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment ajouter du texte à un GIF animé ?", a: "Ajoutez le GIF, saisissez votre texte, choisissez son emplacement et son apparence, puis cliquez sur « Ajouter le texte au GIF » et téléchargez le résultat." },
    { q: "Le GIF reste-t-il animé ?", a: "Oui. Chaque image garde sa durée ; le texte est dessiné sur chacune d'elles." },
    { q: "Puis-je faire un texte de mème classique ?", a: "Oui. Choisissez Impact, cochez « MAJUSCULES » et gardez le contour noir." },
    { q: "Le texte peut-il n'apparaître que sur une partie du GIF ?", a: "Oui. Choisissez « Certaines images » et fixez la première et la dernière image avec les curseurs." },
    { q: "Puis-je ajouter plusieurs légendes ?", a: "Ajoutez-en une, téléchargez le GIF, puis rouvrez-le et ajoutez la légende suivante." },
    { q: "Puis-je placer le texte dans un coin ?", a: "Oui. Choisissez l'une des neuf positions, coins compris." },
    { q: "Puis-je écrire sur plusieurs lignes ?", a: "Oui. Appuyez sur Entrée pour une nouvelle ligne ; les lignes longues passent aussi d'elles-mêmes à la ligne." },
    { q: "Les accents, le hindi, le russe et les emojis fonctionnent-ils ?", a: "Oui, avec toute écriture que votre appareil sait afficher." },
    { q: "Le fichier sera-t-il beaucoup plus lourd ?", a: "En général, à peine. « Compresser un GIF » peut l'alléger ensuite." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans un navigateur mobile." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Comment écrire sur un GIF sans que le texte soit flou ?", a: "Les images ne sont pas modifiées ; seul le texte est ajouté, avec des bords lissés. Une épaisseur de contour adaptée le garde net et lisible, même sur un fond chargé." },
  ],

  security:
    "Le texte est ajouté à votre GIF entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // AddTextToGifTool.tsx
    "Select a GIF": "Sélectionner un GIF",
    "or drop a GIF here": "ou déposez un GIF ici",
    "Please select a GIF.": "Veuillez sélectionner un GIF.",
    "Could not read this image.": "Impossible de lire ce fichier.",
    "Change image": "Changer de fichier",
    "Clear image": "Retirer le fichier",
    "Processing failed.": "Le traitement a échoué.",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "{n} frames": "{n} images",
    "{s} s": "{s} s",
    "Frame {i} · {s} s": "Image {i} · {s} s",
    "Your file is processed in your browser and never uploaded.": "Votre fichier est traité dans votre navigateur et n'est jamais envoyé.",
    "Preview": "Aperçu",
    "Result": "Résultat",
    "Download GIF": "Télécharger le GIF",
    "Add text to GIF": "Ajouter le texte au GIF",
    "Text settings": "Réglages du texte",
    "Text": "Texte",
    "Your text here": "Votre texte ici",
    "Long text wraps onto new lines by itself. Press Enter to start a new line.": "Un texte long passe de lui-même à la ligne. Appuyez sur Entrée pour commencer une nouvelle ligne.",
    "The preview plays your text live. Add it to the GIF when it looks right.": "L'aperçu lit votre texte en direct. Ajoutez-le au GIF quand le rendu vous convient.",
    "Position": "Position", // i18n-same
    "Top left": "En haut à gauche",
    "Top": "En haut",
    "Top right": "En haut à droite",
    "Left": "À gauche",
    "Middle": "Centre",
    "Right": "À droite",
    "Bottom left": "En bas à gauche",
    "Bottom": "En bas",
    "Bottom right": "En bas à droite",
    "Font": "Police",
    "Impact (meme)": "Impact (mème)",
    "Sans-serif": "Sans empattement",
    "Serif": "Avec empattement",
    "Typewriter": "Machine à écrire",
    "Size": "Taille",
    "CAPITAL LETTERS": "MAJUSCULES",
    "Text colour": "Couleur du texte",
    "Outline colour": "Couleur du contour",
    "Outline thickness": "Épaisseur du contour",
    "Box behind the text": "Encadré derrière le texte",
    "Show the text": "Afficher le texte",
    "Whole GIF": "Tout le GIF",
    "Some frames": "Certaines images",
    "From": "De",
    "To": "À",
  },
};

export default content;
