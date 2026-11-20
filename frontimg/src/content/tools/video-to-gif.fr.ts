import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/video-en-gif.
 *
 * Target query « Vidéo en GIF » leads the h1. « MP4 en GIF » is as big but
 * narrower, so it sits in the metaTitle, the intro, a heading and an FAQ.
 * « convertir vidéo en GIF » appears in the metaDescription and the how-to
 * title. A GIF frame is « image »; frame rate is « images par seconde » (i/s
 * is unusual in UI, so the copy keeps « fps » next to the number).
 */
const content: ToolPageContent = {
  toolId: "video-to-gif",
  locale: "fr",
  name: "Vidéo en GIF",
  tagline:
    "Transformez un extrait de vidéo MP4, WEBM ou MOV en GIF qui tourne en boucle : coupez-le, choisissez le nombre d'images par seconde et la taille, et vérifiez le résultat avant de le télécharger. Gratuit, et la vidéo ne quitte jamais votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Vidéo en GIF – Convertir MP4 en GIF gratuit | oMyImage",
  metaDescription:
    "Convertir une vidéo en GIF gratuitement : coupez votre MP4, WEBM ou MOV, choisissez les images par seconde et la largeur, puis téléchargez le GIF. Sans envoi.",

  intro:
    "Un GIF s'affiche partout où une image peut aller : messageries, forums, e-mails, présentations et zones de commentaires qui ne lanceraient jamais une vidéo d'elles-mêmes. Le convertisseur « Vidéo en GIF » d'oMyImage découpe le moment voulu dans un fichier vidéo et le transforme en GIF qui tourne en boucle, que ce soit de MP4 en GIF, depuis un WEBM ou depuis un MOV. Ajoutez la vidéo, marquez le début et la fin pendant la lecture, choisissez le degré de fluidité et la taille, puis téléchargez le GIF. La vidéo est décodée par votre propre navigateur : elle n'est jamais envoyée nulle part.",

  sections: [
    {
      heading: "Choisir le bon moment",
      id: "trim",
      body: [
        "Les GIF fonctionnent mieux en boucles courtes : une réaction, un produit qui tourne, une étape de tutoriel, la chute d'un extrait. Lancez la vidéo et appuyez sur « Début ici » puis « Fin ici » au bon moment, ou saisissez les temps en secondes. L'outil sélectionne d'emblée les cinq premières secondes, car la plupart des bons GIF sont plus courts que cela.",
        "Chaque seconde compte pour le poids du fichier. Un GIF stocke chaque image comme un visuel à part entière : un extrait de 10 secondes contient deux fois plus d'images qu'un extrait de 5 secondes, et pèse à peu près deux fois plus. Couper pour ne garder que la partie que les gens doivent voir est de loin la plus grosse économie.",
      ],
    },
    {
      heading: "Images par seconde et largeur",
      id: "settings",
      body: [
        "Le nombre d'images par seconde détermine la fluidité du mouvement. 10 fps donnent la sensation classique du GIF et gardent des fichiers légers ; 15 fps sont nettement plus fluides pour les mouvements rapides ; 20–25 fps se rapprochent de la vidéo mais doublent, voire davantage, le nombre d'images. Pour les enregistrements d'écran et les scènes lentes, 5–10 fps suffisent souvent.",
        "La largeur est l'autre grand levier. 480 pixels de large conviennent à la plupart des messageries et des pages ; 320 suffisent pour les réactions et les petites intégrations ; 640 ou la largeur d'origine sont réservés aux tutoriels où un texte de petite taille doit rester lisible. La hauteur suit les proportions de la vidéo, rien n'est donc déformé.",
      ],
    },
    {
      heading: "Qualité et poids du fichier",
      id: "quality",
      body: [
        "Le GIF ne peut afficher que 256 couleurs, choisies ici une seule fois pour tout l'extrait afin que les couleurs restent stables d'une image à l'autre. « Haute » conserve les 256 couleurs et n'ignore que le scintillement le plus léger ; « Moyenne » utilise 128 couleurs et fige les petits changements entre les images ; « Fichier léger » va plus loin, ce qui convient aux scènes simples et aux enregistrements d'écran.",
        "En coulisses, chaque image après la première ne stocke que les pixels qui ont changé, le reste étant repris de l'image précédente. Le bruit vidéo met cette astuce en échec : c'est pourquoi les réglages les plus bas traitent les changements minimes comme une absence de changement, et c'est pourquoi ils réduisent autant le poids sur des vidéos réelles.",
      ],
    },
    {
      heading: "MP4 en GIF, WEBM et MOV : quelles vidéos fonctionnent",
      id: "formats",
      body: [
        "Toute vidéo que votre navigateur sait lire fonctionne : MP4 (H.264), WEBM (VP8, VP9 ou AV1) et la plupart des fichiers MOV. Les vidéos d'iPhone enregistrées en HEVC ne se lisent que là où le système prend en charge le HEVC, comme Safari sur Mac ou iPhone ; ailleurs, une erreur peut s'afficher. Si vous réglez l'appareil photo de l'iPhone sur « Le plus compatible » (Réglages, Appareil photo, Formats), il enregistre en H.264, qui fonctionne partout.",
        "Le son est supprimé, car le GIF n'a pas de piste audio. Les proportions, les couleurs et le rythme de l'extrait sont conservés, et le GIF tourne en boucle à l'infini, sauf si vous décochez « Boucle infinie ».",
      ],
    },
    {
      heading: "Extraits longs et mémoire",
      id: "limits",
      body: [
        "Les images restent en mémoire jusqu'à l'écriture du GIF, si bien que les extraits très longs ou très grands sont limités. Si l'outil indique que l'extrait est trop long pour cette taille, raccourcissez-le, baissez le nombre d'images par seconde ou choisissez une largeur plus petite ; le panneau indique combien d'images vous vous apprêtez à générer. Au-delà d'une trentaine de secondes, le GIF est rarement le bon format : un court MP4 sera plus léger et plus beau. Pour convertir une vidéo en GIF de bonne qualité, la règle est simple : faites court.",
      ],
    },
  ],

  howToTitle: "Comment convertir une vidéo en GIF",
  steps: [
    { title: "Ajoutez une vidéo", description: "Sélectionnez un fichier MP4, WEBM ou MOV sur votre ordinateur ou votre téléphone." },
    { title: "Coupez et réglez", description: "Marquez le début et la fin, puis choisissez le nombre d'images par seconde, la largeur et la qualité." },
    { title: "Créez le GIF", description: "Cliquez sur « Créer le GIF », vérifiez l'aperçu et téléchargez-le." },
  ],

  features: [
    { icon: "gif_box", title: "Coupé au bon moment", description: "Marquez le début et la fin pendant la lecture de la vidéo, au dixième de seconde près." },
    { icon: "tune", title: "Poids maîtrisé", description: "Le nombre d'images par seconde, la largeur et les niveaux de qualité gardent le GIF aussi léger que possible." },
    { icon: "lock", title: "Aucun envoi", description: "Votre vidéo est décodée et convertie par votre propre navigateur." },
  ],

  faqs: [
    { q: "Comment convertir une vidéo en GIF ?", a: "Ajoutez la vidéo, marquez le début et la fin, choisissez le nombre d'images par seconde et la largeur, puis cliquez sur « Créer le GIF ». Vérifiez l'aperçu et téléchargez." },
    { q: "Puis-je convertir un MP4 en GIF ?", a: "Oui. Le MP4 en H.264 fonctionne dans tous les navigateurs ; le WEBM et le MOV fonctionnent aussi." },
    { q: "Pourquoi ma vidéo d'iPhone ne s'ouvre-t-elle pas ?", a: "Elle est probablement en HEVC, un format que certains navigateurs ne savent pas lire. Utilisez Safari, ou réglez l'appareil photo de l'iPhone sur « Le plus compatible » pour qu'il enregistre en H.264." },
    { q: "Quelle durée peut avoir le GIF ?", a: "Le plus court est le mieux : quelques secondes. Des extraits plus longs sont possibles avec moins d'images par seconde et une largeur réduite ; l'outil vous prévient quand un extrait est trop long pour la taille choisie." },
    { q: "Comment rendre le GIF plus léger ?", a: "Coupez-le, descendez à 10 fps, choisissez une largeur plus petite comme 320 ou 480 pixels, et sélectionnez « Moyenne » ou « Fichier léger »." },
    { q: "Le GIF garde-t-il le son ?", a: "Non. Le GIF n'a pas de piste audio, le son est donc supprimé." },
    { q: "Le GIF tourne-t-il en boucle ?", a: "Oui, à l'infini par défaut. Décochez « Boucle infinie » pour qu'il ne soit lu qu'une fois." },
    { q: "Combien d'images par seconde choisir ?", a: "10 fps pour la plupart des extraits, 15 fps pour les mouvements rapides, 5–10 fps pour les enregistrements d'écran." },
    { q: "Ma vidéo est-elle envoyée sur un serveur ?", a: "Non. Elle est décodée et transformée en GIF entièrement dans votre navigateur." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui, dans un navigateur mobile, pour les vidéos que ce navigateur sait lire. Sur téléphone, les extraits courts sont traités plus vite." },
    { q: "Le GIF porte-t-il un filigrane ?", a: "Non. Le GIF ne contient aucun logo, et aucun compte ni inscription n'est nécessaire." },
  ],

  security:
    "Votre vidéo est décodée par votre propre navigateur et le GIF est créé sur votre appareil. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // VideoToGifTool.tsx
    "Select a video": "Sélectionner une vidéo",
    "or drop an MP4, WEBM or MOV video here": "ou déposez ici une vidéo MP4, WEBM ou MOV",
    "Please select a video file.": "Sélectionnez un fichier vidéo.",
    "This video can't be played in your browser.": "Cette vidéo ne peut pas être lue dans votre navigateur.",
    "Processing failed.": "Le traitement a échoué.",
    "Clear video": "Retirer la vidéo",
    "Change video": "Changer de vidéo",
    "GIF settings": "Paramètres du GIF",
    "Make GIF": "Créer le GIF",
    "Download GIF": "Télécharger le GIF",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Your GIF will appear here.": "Votre GIF apparaîtra ici.",
    "Video": "Vidéo",
    "GIF": "GIF", // i18n-same
    "Start here": "Début ici",
    "End here": "Fin ici",
    "Start": "Début",
    "End": "Fin",
    "Clip (seconds)": "Extrait (secondes)",
    "{len} s of {total} s. Use Start here and End here while the video plays.":
      "{len} s sur {total} s. Utilisez « Début ici » et « Fin ici » pendant la lecture de la vidéo.",
    "Frames per second": "Images par seconde",
    "Width (px)": "Largeur (px)",
    "Original ({w})": "Original ({w})", // i18n-same
    "Loop forever": "Boucle infinie",
    "Quality": "Qualité",
    "{n} frames": "{n} images",
    "{n} frames at {w} × {h} px": "{n} images de {w} × {h} px",
    "Too long for this size — shorten the clip, lower the frame rate or the width.":
      "Trop long pour cette taille : raccourcissez l'extrait ou baissez les images par seconde ou la largeur.",
    "Your video is converted in your browser and never uploaded.": "Votre vidéo est convertie dans votre navigateur et n'est jamais envoyée.",
    // QUALITY_LABEL (module scope)
    "High": "Haute",
    "Medium": "Moyenne",
    "Small file": "Fichier léger",
  },
};

export default content;
