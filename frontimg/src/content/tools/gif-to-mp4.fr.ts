import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/gif-en-mp4.
 *
 * Target query « GIF en MP4 » leads the h1; « convertir un GIF en MP4 »
 * carries the metaTitle, the how-to heading and the first FAQ.
 */
const content: ToolPageContent = {
  toolId: "gif-to-mp4",
  locale: "fr",
  name: "GIF en MP4",
  tagline:
    "Convertissez vos GIF en vidéo MP4 : généralement bien plus légère, aux couleurs plus propres, et acceptée sur toutes les plateformes qui prennent la vidéo. Répétez les GIF courts, choisissez un fond, téléchargez. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF en MP4 – Convertir un GIF en MP4 gratuit | oMyImage",
  metaDescription:
    "Convertir un GIF en MP4 gratuitement : la vidéo pèse souvent plusieurs fois moins, garde la durée de chaque image et convient à Instagram et TikTok. Sans envoi.",

  intro:
    "Le GIF est un format ancien : 256 couleurs par image et une compression qui n'a jamais été conçue pour le mouvement. Une vidéo MP4 fait le même travail dans une fraction de l'espace, et c'est ce qu'Instagram, TikTok et la plupart des applications attendent réellement. Le convertisseur « GIF en MP4 » d'oMyImage transforme votre GIF en MP4 H.264 grâce à l'encodeur vidéo intégré à votre navigateur, conserve la durée de chaque image et vous permet de répéter une boucle courte pour que la vidéo dure assez longtemps pour être publiée.",

  sections: [
    {
      heading: "Pourquoi convertir un GIF en MP4",
      id: "why",
      body: [
        "La raison principale, c'est le poids. La compression vidéo prédit le mouvement entre les images et stocke les couleurs de façon bien plus efficace : la même animation en MP4 est généralement plusieurs fois plus légère que le GIF, parfois dix fois ou plus pour les GIF détaillés ou photographiques. L'outil affiche les deux poids pour que vous voyiez la différence sur votre fichier.",
        "La seconde raison, ce sont les endroits où vous pouvez l'utiliser. Instagram et TikTok acceptent l'envoi de vidéos, pas de GIF ; beaucoup de messageries et de logiciels de présentation gèrent aussi mieux le MP4. Même les sites qui vous affichent un « GIF » le convertissent souvent en vidéo en coulisses.",
      ],
    },
    {
      heading: "Faire tourner la vidéo en boucle",
      id: "loop",
      body: [
        "Un GIF boucle tout seul ; un MP4 ne boucle que si le lecteur en reçoit l'instruction. La plupart des plateformes lisent une vidéo courte une seule fois ou la répètent selon leurs propres règles, et les extraits très courts peuvent être refusés ou paraître abrupts. Choisissez 2×, 3× ou 5× pour répéter l'animation à l'intérieur de la vidéo : un GIF d'une seconde devient ainsi quelques secondes de boucle fluide.",
        "Le panneau indique la durée de la vidéo selon votre choix, pour que vous puissiez viser la durée que préfère votre plateforme.",
      ],
    },
    {
      heading: "Transparence et fond",
      id: "background",
      body: [
        "La vidéo MP4 standard n'a pas de transparence : les zones transparentes du GIF sont donc remplies avec une couleur de fond, blanche par défaut. Choisissez la couleur de la page ou de la conversation où la vidéo s'affichera, et un sticker ou un logo transparent s'y fondra comme s'il n'y avait pas de fond.",
      ],
    },
    {
      heading: "Qualité et rythme",
      id: "quality",
      body: [
        "Chaque image est encodée avec sa propre durée : les GIF au rythme irrégulier (une pause sur la dernière image, par exemple) se lisent exactement comme avant. La vidéo est encodée avec un débit généreux pour sa taille, ce qui garde propres les aplats de couleur et le texte.",
        "Le MP4 reprend les dimensions du GIF ; si la largeur ou la hauteur est un nombre impair, une ligne ou une colonne de fond est ajoutée, car la vidéo H.264 exige des dimensions paires.",
      ],
    },
    {
      heading: "Compatibilité des navigateurs",
      id: "browsers",
      body: [
        "La conversion utilise l'encodeur vidéo WebCodecs intégré aux navigateurs récents. Chrome, Edge et Safari savent créer du MP4 (H.264) ; si votre navigateur ne le peut pas, l'outil vous le dit au lieu de produire un fichier corrompu. Le MP4 obtenu se lit ensuite sur pratiquement tous les téléphones, ordinateurs et applications.",
        "Rien n'est envoyé : le GIF est décodé et la vidéo encodée sur votre appareil, ce qui signifie aussi que les gros GIF prennent un peu plus de temps sur les téléphones lents.",
      ],
    },
    {
      heading: "Le MP4 dans les présentations et les messageries",
      id: "uses",
      body: [
        "PowerPoint, Keynote et Google Slides insèrent tous la vidéo MP4, et un court MP4 garde une présentation bien plus légère que la même animation en GIF. Réglez la vidéo sur lecture automatique et en boucle dans le logiciel de présentation : elle se comportera exactement comme le GIF.",
        "Dans les messageries, un MP4 s'envoie plus vite, consomme moins de données mobiles et supporte mieux les transferts successifs, car les applications recompressent les gros GIF bien plus agressivement que les vidéos courtes.",
      ],
    },
  ],

  howToTitle: "Comment convertir un GIF en MP4",
  steps: [
    { title: "Ajoutez votre GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez répétitions et fond", description: "Répétez les GIF courts pour que la vidéo dure quelques secondes, et choisissez un fond pour les zones transparentes." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir en MP4 », regardez l'aperçu et téléchargez la vidéo." },
  ],

  features: [
    { icon: "compress", title: "Des fichiers bien plus légers", description: "Le MP4 stocke la même animation dans une fraction du poids du GIF." },
    { icon: "speed", title: "Durée de chaque image conservée", description: "Les durées irrégulières et les pauses se lisent exactement comme dans le GIF." },
    { icon: "lock", title: "Aucun envoi", description: "Encodé par votre propre navigateur ; le GIF ne quitte jamais votre appareil." },
  ],

  faqs: [
    { q: "Comment convertir un GIF en MP4 ?", a: "Ajoutez le GIF, choisissez combien de fois il doit être lu et une couleur de fond, puis cliquez sur « Convertir en MP4 »." },
    { q: "Le MP4 est-il plus léger que le GIF ?", a: "En général beaucoup plus léger : plusieurs fois, et souvent davantage pour les GIF détaillés. Les deux poids s'affichent après la conversion." },
    { q: "Puis-je publier le MP4 sur Instagram ou TikTok ?", a: "Oui. Ces applications acceptent la vidéo plutôt que les GIF. Répétez les GIF courts pour que la vidéo dure quelques secondes." },
    { q: "Le MP4 tournera-t-il en boucle ?", a: "Seulement si le lecteur le fait boucler. Utilisez l'option de répétition pour intégrer la boucle à la vidéo elle-même." },
    { q: "Que devient la transparence ?", a: "Le MP4 n'a pas de transparence : les zones transparentes reçoivent la couleur de fond que vous choisissez." },
    { q: "Pourquoi cela ne fonctionne-t-il pas dans mon navigateur ?", a: "Votre navigateur ne dispose pas d'encodeur vidéo MP4. Utilisez Chrome, Edge ou Safari." },
    { q: "Le MP4 a-t-il du son ?", a: "Non. Les GIF n'ont pas de son, la vidéo est donc muette." },
    { q: "Le rythme est-il conservé ?", a: "Oui. Chaque image garde sa propre durée, pauses comprises." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. La conversion se fait entièrement dans votre navigateur." },
    { q: "Puis-je convertir plusieurs GIF à la fois ?", a: "Un à la fois, pour que chaque GIF ait son propre aperçu, son nombre de répétitions et son fond." },
    { q: "Convertir un GIF en MP4 est-il gratuit ?", a: "Oui. Sans compte, sans filigrane sur la vidéo et sans limite au nombre de conversions." },
  ],

  security:
    "Votre propre navigateur décode le GIF et l'encode en vidéo. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // GifToMp4Tool.tsx
    "Select a GIF": "Sélectionner un GIF",
    "or drop a GIF here": "ou déposez un GIF ici",
    "Please select a GIF.": "Sélectionnez un GIF.",
    "Could not read this image.": "Impossible de lire cette image.",
    "Processing failed.": "Le traitement a échoué.",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "MP4 settings": "Paramètres du MP4",
    "Convert to MP4": "Convertir en MP4",
    "Download MP4": "Télécharger le MP4",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Your MP4 will appear here.": "Votre MP4 apparaîtra ici.",
    "GIF": "GIF", // i18n-same
    "MP4": "MP4", // i18n-same
    "{n} frames": "{n} images",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p} % plus léger",
    "{n}×": "{n}×", // i18n-same
    "Encoded by your browser as H.264 — plays everywhere.": "Encodé par votre navigateur en H.264 : se lit partout.",
    "Play the animation": "Lire l'animation",
    "Video doesn't loop by itself on most sites. Repeat a short GIF so the MP4 lasts a few seconds — {s} s now.":
      "Sur la plupart des sites, la vidéo ne boucle pas toute seule. Répétez un GIF court pour que le MP4 dure quelques secondes ; il dure actuellement {s} s.",
    "Background for transparent areas": "Fond des zones transparentes",
    "Your GIF is converted in your browser and never uploaded.": "Votre GIF est converti dans votre navigateur et n'est jamais envoyé.",
  },
};

export default content;
