import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/supprimer-objet-photo. Target query « Supprimer un objet
 * d'une photo » (Nov 2026), secondaries « effacer objet photo » and « enlever
 * une personne d'une photo ». Vous. Same engine facts as English: MI-GAN
 * (Picsart AI Research) in the browser, 27 MB model, about a second per
 * removal, 16.7 MP cap.
 */
const content: ToolPageContent = {
  toolId: "remove-object",
  locale: "fr",
  name: "Supprimer un objet d'une photo",
  tagline:
    "Peignez sur ce que vous ne voulez plus voir dans une photo (un inconnu à l'arrière-plan, une poubelle, une ligne électrique, une tache) et l'IA remplit l'espace pour qu'il se fonde dans le décor. Gratuit, et tout se passe dans votre navigateur.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Supprimer un objet d'une photo – IA gratuite | oMyImage",
  metaDescription:
    "Supprimez un objet d'une photo : effacez une personne, un câble ou un détail gênant au pinceau, l'IA reconstruit le fond. Gratuit, sans envoi de la photo.",

  intro:
    "« Supprimer un objet d'une photo » efface des éléments d'une image comme le ferait un retoucheur : vous marquez ce qui doit disparaître, et un modèle d'IA peint ce qui aurait plausiblement pu se trouver derrière, en respectant les couleurs, la lumière et la texture autour du trou. oMyImage exécute ce modèle, MI-GAN de Picsart AI Research, directement dans votre navigateur : votre photo n'est jamais envoyée et il n'y a aucune limite quotidienne. Passez le pinceau sur un touriste, tracez un cadre autour d'un panneau, effacez un objet à la fois ou plusieurs d'un coup, annulez n'importe quelle étape et téléchargez la photo nettoyée à sa taille d'origine. Vous pouvez ainsi enlever une personne d'une photo sans installer de logiciel de retouche.",

  sections: [
    {
      heading: "Comment marquer ce qui doit disparaître",
      id: "marking",
      body: [
        "Le Pinceau peint une marque rose sur l'image ; elle doit couvrir tout l'objet, avec une petite marge. Incluez l'ombre de l'objet et ses éventuels reflets, sinon ils resteront comme un fantôme. L'outil Cadre marque un rectangle d'un seul glissé, pratique pour les panneaux, les voitures et tout ce qui est carré. La Gomme retire une marque peinte trop loin.",
        "Les marques n'ont pas besoin d'être soignées. L'outil les agrandit de quelques pixels avant le remplissage, pour couvrir aussi le contour adouci autour d'un objet. L'essentiel, c'est qu'aucune partie de l'objet ne dépasse de la marque.",
      ],
    },
    {
      heading: "Ce qu'il efface bien",
      id: "good-at",
      body: [
        "Les meilleurs résultats concernent les éléments placés devant un fond assez uniforme : des personnes et des voitures devant des bâtiments, des déchets sur l'herbe ou le sable, des fils et des poteaux sur le ciel, une tache sur un mur, un bouton sur la peau, une miette sur une nappe. Le modèle a été entraîné sur des photos de lieux : ciels, eau, feuillages, murs, sols et routes sont ce qu'il reconstruit de la façon la plus convaincante.",
        "C'est plus difficile lorsque la zone cachée contenait quelque chose que le modèle ne peut pas deviner : la moitié d'un visage, une ligne de texte, le motif d'un tapis qui continue derrière l'objet. Il comblera le vide avec quelque chose de lisse et crédible, pas avec ce qui s'y trouvait réellement.",
      ],
    },
    {
      heading: "Grands objets : travaillez en plusieurs passes",
      id: "passes",
      body: [
        "Le modèle remplit chaque zone avec au maximum 512 pixels de large, puis met le résultat à l'échelle : un très grand trou ressort donc plus doux que le reste de la photo. Pour un gros objet, supprimez-le en deux ou trois morceaux en commençant par ses bords : chaque passe donne à la suivante un vrai décor dont s'inspirer. Plusieurs petits objets marqués en même temps sont remplis chacun séparément et gardent tout leur détail.",
        "Si un remplissage paraît faux, cliquez sur « Annuler », modifiez la marque (plus grande, ou en excluant une partie du fond qui a induit le modèle en erreur) et réessayez. Chaque tentative prend environ une seconde.",
      ],
    },
    {
      heading: "Annuler, rétablir et comparer",
      id: "history",
      body: [
        "Chaque suppression peut être annulée et rétablie, avec les boutons ou avec Ctrl+Z et Ctrl+Maj+Z. « Recommencer » rétablit la photo d'origine. Maintenez le bouton « Maintenir pour voir l'original » pour passer de l'avant à l'après : c'est le moyen le plus simple de repérer un remplissage qui ne colle pas tout à fait.",
      ],
    },
    {
      heading: "Une IA qui fonctionne sur votre appareil",
      id: "on-device",
      body: [
        "La plupart des outils pour effacer un objet d'une photo envoient votre image sur un serveur. Ici, c'est le modèle qui vient à vous : la première fois que vous ouvrez l'outil, il télécharge environ 27 Mo de données depuis notre propre site (une barre de progression indique où il en est) et votre navigateur les conserve, si bien que les visites suivantes démarrent aussitôt. Ensuite, la suppression d'un objet se fait sur votre ordinateur ou votre téléphone, en une seconde environ sur un portable et en quelques secondes sur un téléphone, même sans connexion.",
        "Comme rien n'est envoyé nulle part, l'outil convient aux photos personnelles, aux pièces d'identité et aux travaux pour des clients.",
      ],
    },
    {
      heading: "Qualité et formats de fichier",
      id: "quality",
      body: [
        "La photo est retouchée en taille réelle, jusqu'à 16,7 mégapixels ; une image plus grande, comme une photo de 48 MP prise au téléphone, est d'abord réduite à cette taille, et la page vous le signale. Seules les zones marquées changent : tous les autres pixels sont enregistrés exactement comme ils étaient. Choisissez le format d'origine, ou JPG, PNG ou WEBP. Le PNG conserve la transparence ; le JPG remplit les zones transparentes de blanc.",
      ],
    },
    {
      heading: "Idées pour enlever une personne ou un objet d'une photo",
      id: "ideas",
      body: [
        "Faites disparaître les touristes d'une photo de voyage. Retirez un câble qui traîne, une voiture garée ou une poubelle de la photo d'une annonce immobilière. Effacez une étiquette de prix sur une photo de produit, la date imprimée sur un tirage numérisé ou une poussière sur un scan. Enlevez votre ex d'une photo de groupe, un intrus d'une photo de mariage ou un objet d'un décor avant d'en faire un fond d'écran.",
        "Pour détourer un sujet entier et supprimer le fond, utilisez « Supprimer l'arrière-plan ». Pour les textes et les logos posés sur une image, « Supprimer un filigrane » s'ouvre directement avec l'outil Cadre.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Votre photo est retouchée entièrement dans votre navigateur, par un modèle qui tourne sur votre appareil. Rien n'est envoyé, et rien n'est conservé après la fermeture de la page.",
      ],
    },
  ],

  howToTitle: "Comment supprimer un objet d'une photo",
  steps: [
    { title: "Ajoutez votre photo", description: "Choisissez une image JPG, PNG ou WEBP." },
    { title: "Marquez l'objet", description: "Peignez dessus au pinceau, ou tracez un cadre autour, ombre comprise." },
    { title: "Supprimez et téléchargez", description: "Cliquez sur « Supprimer l'objet », vérifiez le résultat, puis sur « Télécharger l'image »." },
  ],

  features: [
    { icon: "ink_eraser", title: "Pinceau, cadre et gomme", description: "Marquez les objets avec précision, puis annulez ou rétablissez chaque suppression." },
    { icon: "smart_toy", title: "Remplissage IA en une seconde", description: "MI-GAN reconstruit le fond en accord avec ce qui l'entoure." },
    { icon: "lock", title: "Jamais envoyée", description: "L'IA fonctionne dans votre navigateur, sur votre appareil." },
  ],

  faqs: [
    { q: "Comment supprimer un objet d'une photo ?", a: "Ajoutez la photo, peignez sur l'objet au pinceau et cliquez sur « Supprimer l'objet ». Téléchargez ensuite le résultat." },
    { q: "Est-ce vraiment gratuit ?", a: "Oui. Pas de compte, pas de filigrane et pas de limite quotidienne, puisque l'IA tourne sur votre propre appareil." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Non. Le modèle d'IA se télécharge dans votre navigateur et la photo ne quitte jamais votre appareil." },
    { q: "Pourquoi la première suppression est-elle plus longue ?", a: "La première fois, votre navigateur télécharge le modèle d'IA de 27 Mo. Il le conserve : les visites suivantes démarrent immédiatement." },
    { q: "Puis-je enlever une personne d'une photo ?", a: "Oui. Peignez sur la personne et sur son ombre ; le résultat est meilleur lorsqu'elle se trouve devant un fond assez simple." },
    { q: "Puis-je effacer plusieurs objets à la fois ?", a: "Oui. Marquez-les tous, puis cliquez une seule fois sur « Supprimer l'objet » : chacun est rempli séparément." },
    { q: "Le résultat est flou : que faire ?", a: "Annulez et supprimez le grand objet en plusieurs morceaux plus petits, en partant de ses bords. Les petites zones gardent tout leur détail." },
    { q: "Puis-je annuler une suppression ?", a: "Oui : « Annuler », « Rétablir » et « Recommencer », ou Ctrl+Z et Ctrl+Maj+Z." },
    { q: "La qualité de la photo baisse-t-elle ?", a: "Non. Seules les zones marquées changent, et la photo garde sa taille jusqu'à 16,7 mégapixels." },
    { q: "Fonctionne-t-il hors connexion ?", a: "Une fois le modèle chargé, oui : supprimer des objets ne demande aucune connexion." },
    { q: "Fonctionne-t-il sur un téléphone ?", a: "Oui. Peignez avec le doigt ; chaque suppression prend quelques secondes sur un téléphone." },
    { q: "Quels formats sont pris en charge ?", a: "JPG, PNG et WEBP en entrée, et le même format ou l'un des trois en sortie." },
    { q: "Peut-il supprimer tout l'arrière-plan ?", a: "Utilisez plutôt « Supprimer l'arrière-plan » : il détoure le sujet et rend le fond transparent." },
    { q: "Puis-je retirer quelqu'un d'une photo puis la publier ?", a: "Techniquement, oui. Ce qui compte, c'est qui reste visible sur l'image : en France comme ailleurs dans l'UE, publier une personne reconnaissable demande en général son accord, au titre du droit à l'image et du RGPD. Retirer une personne réduit ce problème plus qu'il ne le crée, mais n'utilisez l'outil que sur des photos que vous avez le droit de modifier." },
  ],

  security:
    "Votre photo est retouchée entièrement dans votre navigateur, par un modèle qui tourne sur votre appareil. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // InpaintTool.tsx — shared with remove-watermark, whose module reuses this block.
    "or drop a JPG, PNG or WEBP image here": "ou déposez ici une image JPG, PNG ou WEBP",
    "Please select image files.": "Sélectionnez des fichiers image.",
    "Clear files": "Retirer les fichiers",
    "Settings": "Réglages",
    "Marking tool": "Outil de marquage",
    "Brush": "Pinceau",
    "Box": "Cadre",
    "Eraser": "Gomme",
    "Drag a box over the area to remove.": "Tracez un cadre sur la zone à supprimer.",
    "Paint over a mark to take it back.": "Peignez sur une marque pour la retirer.",
    "Paint over every letter of the watermark, including its outline or shadow.": "Peignez sur chaque lettre du filigrane, contour et ombre compris.",
    "Paint over the whole object, including its shadow and reflection.": "Peignez sur tout l'objet, ombre et reflet compris.",
    "Brush size": "Taille du pinceau",
    "Clear marks": "Effacer les marques",
    "Undo": "Annuler",
    "Redo": "Rétablir",
    "Start over": "Recommencer",
    "AI model ready — it runs on your device.": "Modèle d'IA prêt : il fonctionne sur votre appareil.",
    "The AI model could not be loaded.": "Impossible de charger le modèle d'IA.",
    "Try again": "Réessayer",
    "Loading the AI model…": "Chargement du modèle d'IA…",
    "Only on the first visit — after that your browser keeps it.": "Uniquement lors de la première visite ; ensuite, votre navigateur le conserve.",
    "Output format": "Format de sortie",
    "Quality": "Qualité",
    "Same as original": "Identique à l'original",
    "Your image never leaves your device: the AI runs in your browser.": "Votre image ne quitte jamais votre appareil : l'IA fonctionne dans votre navigateur.",
    "Remove watermark": "Supprimer le filigrane",
    "Remove object": "Supprimer l'objet",
    "Removing…": "Suppression…",
    "Download image": "Télécharger l'image",
    "Processing failed.": "Le traitement a échoué.",
    "Mark the watermark first — draw a box around it or paint over it.": "Marquez d'abord le filigrane : tracez un cadre autour ou peignez dessus.",
    "Paint over what you want to remove first.": "Peignez d'abord sur ce que vous voulez supprimer.",
    "Picture — mark the watermark here": "Image : marquez le filigrane ici",
    "Picture — mark what to remove here": "Image : marquez ici ce qu'il faut supprimer",
    "Mark the watermark, then click Remove watermark.": "Marquez le filigrane, puis cliquez sur « Supprimer le filigrane ».",
    "Mark what you want gone, then click Remove object.": "Marquez ce qui doit disparaître, puis cliquez sur « Supprimer l'objet ».",
    "Hold to see the original": "Maintenir pour voir l'original",
    "This photo is very large, so it is edited and saved at {w} × {h} px.": "Cette photo est très grande : elle est retouchée et enregistrée en {w} × {h} px.",
  },
};

export default content;
