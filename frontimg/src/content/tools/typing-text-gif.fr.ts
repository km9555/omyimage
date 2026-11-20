import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/gif-texte-machine-a-ecrire. Target query: « GIF texte
 * machine à écrire » (France, Nov 2026; the slug as people type it);
 * secondary « effet machine à écrire » / « texte animé » in the metaTitle,
 * intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "typing-text-gif",
  locale: "fr",
  name: "GIF texte machine à écrire",
  tagline:
    "Créez un GIF où votre texte s'écrit tout seul, lettre par lettre, avec un curseur clignotant. Choisissez la vitesse, la police et les couleurs. Gratuit, dans votre navigateur, rien à envoyer.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF texte machine à écrire – texte animé gratuit | oMyImage",
  metaDescription:
    "GIF texte machine à écrire gratuit : votre message s'affiche lettre par lettre, avec effet machine à écrire et curseur clignotant. Vitesse, police, couleurs.",

  intro:
    "Un texte qui s'écrit tout seul attire le regard comme jamais un texte figé. Le « GIF texte machine à écrire » d'oMyImage donne cet effet machine à écrire à n'importe quel message : rédigez-le, choisissez la vitesse de frappe, la police, la taille et les couleurs, et décidez si un curseur clignote à la fin. L'aperçu lit l'animation pendant que vous la réglez. Comme le résultat est un GIF ordinaire, ce texte animé fonctionne là où le code ne passe pas : dans les discussions, les présentations, les e-mails, les fichiers README de GitHub et sur n'importe quel site web, sans JavaScript ni lecteur vidéo.",

  sections: [
    {
      heading: "Comment fonctionne la frappe",
      id: "how",
      body: [
        "Votre texte est mis en page une seule fois, à sa taille finale : les lignes ne sautent donc jamais quand les lettres apparaissent. Ensuite, chaque image (frame) révèle la lettre suivante à la vitesse choisie. Comme une personne qui tape, l'animation marque une courte pause après les virgules, une plus longue après les points et à la fin de chaque ligne, ce qui donne un rythme naturel plutôt que mécanique.",
        "À la fin, le texte complet reste affiché pendant la durée que vous choisissez, d'une à cinq secondes, tandis que le curseur clignote toutes les demi-secondes. Puis le GIF recommence ou, si vous décochez « Répéter à l'infini », il s'arrête sur le texte terminé.",
      ],
    },
    {
      heading: "Vitesse et durée",
      id: "speed",
      body: [
        "Choisissez 6, 10, 15 ou 25 lettres par seconde. Six donne une frappe appliquée qui convient aux phrases courtes et percutantes ; dix est un rythme naturel ; quinze et vingt-cinq déroulent rapidement les longs messages. L'aperçu et le nombre d'images se mettent à jour à chaque changement, et la durée totale du GIF s'affiche sous l'aperçu.",
        "Chaque lettre correspond à une image : un texte plus long donne donc plus d'images. Mais chaque image n'ajoute que la nouvelle lettre, si bien que même un long message reste un fichier léger.",
      ],
    },
    {
      heading: "Police, taille et couleurs",
      id: "look",
      body: [
        "Machine à écrire, une police à chasse fixe, donne le look classique du terminal ; les polices sans empattement et avec empattement conviennent aux citations et aux annonces, et Impact fait un titre percutant. La taille va de 14 à 96 pixels et la largeur de 320 à 800 pixels ; la hauteur augmente avec le nombre de lignes.",
        "Toutes les couleurs de texte et de fond sont possibles. Un fond transparent permet de poser le GIF sur n'importe quelle page, mais comme la transparence du GIF n'a pas de bords progressifs, les lettres sont plus nettes sur une couleur unie assortie à l'endroit où le GIF sera affiché.",
        "Un contour, du simple liseré à la bordure épaisse, garde les lettres lisibles sur un fond chargé ou transparent. Cinq jeux de couleurs, Classic Dark, Clean Light, Midnight Neon, Ocean Blue et Sunset Pop, règlent en un clic les couleurs du texte, du fond et du contour, et vous pouvez ensuite modifier chacune d'elles.",
      ],
    },
    {
      heading: "Où utiliser un texte animé",
      id: "uses",
      body: [
        "Envoyez un message de vœux qui s'écrit tout seul sur WhatsApp ou Telegram. Ouvrez une présentation avec une phrase qui s'écrit sur la première diapositive. Placez un slogan animé en haut d'un README GitHub, où les scripts sont interdits mais les GIF autorisés. Ajoutez une signature ou un titre animé à un e-mail, un article de blog ou une fiche produit sans toucher à une ligne de code.",
      ],
    },
    {
      heading: "Toutes les langues",
      id: "languages",
      body: [
        "Les lettres sont comptées comme vous les lisez : une lettre accentuée, une cédille, une syllabe hindi ou un emoji apparaît en entier, et non en morceaux. Le texte utilise les polices de votre appareil : tout ce que votre appareil sait afficher peut donc être tapé, alphabet latin, cyrillique, devanagari et bien d'autres.",
      ],
    },
    {
      heading: "Conseils pour un bon GIF effet machine à écrire",
      id: "tips",
      body: [
        "Gardez un message court : une ou deux phrases s'écrivent en quelques secondes et recommencent avant que l'attention ne se disperse. Laissez une pause de deux ou trois secondes à la fin pour que l'on puisse lire toute la ligne. Accordez le fond à la page ou à la discussion où le GIF apparaîtra, et choisissez une largeur proche de la taille d'affichage, pour que les lettres restent nettes.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Il n'y a rien à envoyer : le GIF est dessiné à partir de votre texte entièrement dans votre navigateur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment créer un GIF texte machine à écrire",
  steps: [
    { title: "Écrivez le texte", description: "Saisissez le message que le GIF doit taper, puis cliquez sur « Commencer »." },
    { title: "Choisissez le style", description: "Réglez la vitesse, la police, la taille, les couleurs, le curseur et la pause ; l'aperçu le lit en direct." },
    { title: "Créez et téléchargez", description: "Cliquez sur « Créer le GIF » et téléchargez l'animation." },
  ],

  features: [
    { icon: "terminal", title: "Un vrai rythme de frappe", description: "Lettre par lettre, avec des pauses aux virgules, aux points et en fin de ligne." },
    { icon: "palette", title: "Votre style", description: "Vitesse, police, taille, couleurs, contour, curseur et pause finale." },
    { icon: "lock", title: "Aucun envoi", description: "Dessiné entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment créer un GIF texte machine à écrire ?", a: "Saisissez votre message, cliquez sur « Commencer », choisissez la vitesse et le style, puis cliquez sur « Créer le GIF » et téléchargez-le." },
    { q: "Puis-je changer la vitesse de frappe ?", a: "Oui. Choisissez 6, 10, 15 ou 25 lettres par seconde." },
    { q: "Puis-je retirer le curseur clignotant ?", a: "Oui. Décochez « Curseur clignotant »." },
    { q: "Le GIF peut-il s'arrêter après une seule frappe ?", a: "Oui. Décochez « Répéter à l'infini » et il s'arrêtera sur le texte terminé." },
    { q: "Puis-je écrire sur plusieurs lignes ?", a: "Oui. Appuyez sur Entrée pour une nouvelle ligne ; les lignes longues passent aussi d'elles-mêmes à la ligne." },
    { q: "Le fond peut-il être transparent ?", a: "Oui, mais les lettres sont plus nettes sur un fond uni, car la transparence du GIF n'a pas de bords progressifs." },
    { q: "Puis-je ajouter un contour au texte ?", a: "Oui. Choisissez une couleur de contour et réglez « Épaisseur du contour ». Un jeu de couleurs règle en même temps les couleurs du texte, du fond et du contour." },
    { q: "Les accents, le hindi ou le russe fonctionnent-ils ?", a: "Oui. Toute langue que votre appareil sait afficher peut être tapée, emojis compris." },
    { q: "Puis-je l'utiliser dans un README GitHub ?", a: "Oui. Un GIF s'affiche dans les README, où les scripts et les animations CSS ne peuvent pas s'exécuter." },
    { q: "Quel est le poids du fichier ?", a: "En général faible : chaque image n'ajoute qu'une lettre. Les longs textes en grande taille pèsent davantage." },
    { q: "Dois-je envoyer quelque chose ?", a: "Non. Le GIF est dessiné à partir de votre texte dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans un navigateur mobile." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Quelle différence entre un GIF de texte animé et une vidéo ?", a: "Un GIF se lit tout seul partout, sans lecteur, y compris dans les e-mails et les README, et pèse très peu pour un texte court. Une vidéo demande un lecteur et pèse généralement davantage." },
  ],

  security:
    "Votre texte est transformé en GIF entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // TypingTextGifTool.tsx
    "Typing Text GIF": "GIF texte machine à écrire",
    "What should the GIF type?": "Que doit écrire le GIF ?",
    "Hello! This GIF types your text, letter by letter.": "Bonjour ! Ce GIF écrit votre texte, lettre par lettre.",
    "Next you can change the speed, font, colours and cursor.": "Vous pourrez ensuite changer la vitesse, la police, les couleurs et le curseur.",
    "Start": "Commencer",
    "Back": "Retour",
    "Type some text to see the preview.": "Saisissez du texte pour voir l'aperçu.",
    "Text settings": "Réglages du texte",
    "Text": "Texte",
    "Typing speed": "Vitesse de frappe",
    "{n} letters/s": "{n} lettres/s",
    "Font": "Police",
    "Impact (meme)": "Impact (mème)",
    "Sans-serif": "Sans empattement",
    "Serif": "Avec empattement",
    "Typewriter": "Machine à écrire",
    "Size": "Taille",
    "Width": "Largeur",
    "Alignment": "Alignement",
    "Left": "À gauche",
    "Centre": "Centré",
    "Colour presets": "Jeux de couleurs",
    "Classic Dark": "Classic Dark", // i18n-same
    "Clean Light": "Clean Light", // i18n-same
    "Midnight Neon": "Midnight Neon", // i18n-same
    "Ocean Blue": "Ocean Blue", // i18n-same
    "Sunset Pop": "Sunset Pop", // i18n-same
    "Text colour": "Couleur du texte",
    "Background colour": "Couleur de fond",
    "Transparent background": "Fond transparent",
    "GIF transparency has no soft edges, so text looks smoothest on a solid background.": "La transparence du GIF n'a pas de bords progressifs : le texte est plus net sur un fond uni.",
    "Outline colour": "Couleur du contour",
    "Outline thickness": "Épaisseur du contour",
    "Blinking cursor": "Curseur clignotant",
    "Pause at the end": "Pause à la fin",
    "Repeat forever": "Répéter à l'infini",
    "Preview": "Aperçu",
    "Make GIF": "Créer le GIF",
    "Result": "Résultat",
    "Your GIF will appear here.": "Votre GIF apparaîtra ici.",
    "Download GIF": "Télécharger le GIF",
    "Processing failed.": "Le traitement a échoué.",
    "Saving…": "Enregistrement…",
    "Working… {p}%": "Traitement… {p} %",
    "Output: {w} × {h} px": "Sortie : {w} × {h} px",
    "{n} frames": "{n} images",
    "{s} s": "{s} s",
    "Everything happens in your browser; nothing is uploaded.": "Tout se passe dans votre navigateur ; rien n'est envoyé.",
  },
};

export default content;
