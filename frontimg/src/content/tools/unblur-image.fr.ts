import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/rendre-photo-nette (variant of upscale-image,
 * Real-ESRGAN at 2×, returned at the photo's own size by default — preset
 * mode "unblur"). Target query « Rendre une photo nette » (Nov 2026),
 * secondaries « améliorer netteté photo » and « déflouter photo ». Vous.
 * Honest like the English: mild blur and compression yes, motion blur and a
 * badly missed focus no. Extra French-only section on chat-app photos.
 */
const content: ToolPageContent = {
  toolId: "unblur-image",
  locale: "fr",
  name: "Rendre une photo nette",
  tagline:
    "Redonnez de la netteté aux photos douces, un peu floues ou pixelisées grâce à l'IA, et récupérez-les à la même taille, simplement plus nettes. Le modèle reconstruit les contours et les textures ; il donne le meilleur de lui-même sur un flou léger et une compression excessive. Gratuit et sans filigrane.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Rendre une photo nette – déflouter une photo | oMyImage",
  metaDescription:
    "Rendez une photo nette avec l'IA : améliorez la netteté d'une photo floue, pixelisée ou trop compressée, en taille d'origine ou ×2. Gratuit, sans filigrane.",

  intro:
    "La plupart des photos que l'on dit « floues » sont en réalité molles : un peu hors mise au point, prises en faible lumière, réduites et réenregistrées par une messagerie, ou agrandies à partir d'un petit original. Ce sont exactement les défauts sur lesquels un modèle d'IA de restauration d'images est entraîné. Importez la photo : le modèle la redessine à deux fois sa résolution (contours, textures et lignes fines), puis vous la rend à sa taille d'origine, pour qu'elle reprenne directement la place de l'ancienne, débarrassée de l'essentiel de sa mollesse et de ses blocs. Il ne peut pas sauver toutes les images : les sections ci-dessous expliquent quels types de flou il corrige et lesquels il ne peut pas déflouter.",

  sections: [
    {
      heading: "Les flous qu'il corrige",
      id: "fixable",
      body: [
        "La mollesse due à une légère erreur de mise au point, à un objectif bon marché ou à un petit capteur, et à la réduction du bruit en faible lumière. La pixelisation des photos enregistrées en petit puis agrandies. Les blocs et les bavures d'une forte compression JPG, ce qui arrive à une photo chaque fois qu'elle est transférée par une application de messagerie.",
        "Dans tous ces cas, les formes sont toujours là, simplement dessinées sans netteté. Le modèle reconnaît ces formes (un œil, une lettre, une feuille, une couture) et les redessine nettement, ce que l'œil perçoit comme une photo défloutée.",
      ],
    },
    {
      heading: "Ceux qu'il ne peut pas corriger",
      id: "limits",
      body: [
        "Un fort flou de bougé, quand l'appareil ou le sujet a bougé et que chaque contour s'est étiré en traînée, et les photos franchement hors mise au point, où les détails ont fondu en taches. Dans ces cas, l'information a réellement disparu, et tout outil qui prétend la restaurer l'invente.",
        "Ce modèle rendra quand même ces photos plus propres, mais il ne transformera pas un visage ou une plaque d'immatriculation illisible en un visage ou une plaque lisible, et il n'est pas conçu pour cela. Si un résultat paraît plausible mais faux (un visage légèrement différent de celui de la personne), considérez-le comme une illustration, pas comme une preuve.",
      ],
    },
    {
      heading: "Améliorer la netteté d'une photo : obtenir le meilleur résultat",
      id: "tips",
      body: [
        "Partez toujours de la meilleure copie dont vous disposez : l'original de la pellicule du téléphone vaut mieux qu'une capture d'écran, qui vaut mieux qu'une copie transférée. Recadrez ce dont vous n'avez pas besoin avant l'import, pour que le modèle se concentre sur la partie qui compte.",
        "Gardez la taille d'origine pour les photos que vous utiliserez telles quelles. Désactivez cette option pour une petite image ou une image pixelisée que vous voulez plus grande : vous obtenez alors le résultat net en taille double. Comparez le résultat avec le curseur avant de télécharger ; sur un visage, regardez d'abord les yeux et la naissance des cheveux.",
      ],
    },
    {
      heading: "Photos anciennes et numérisées",
      id: "old-photos",
      body: [
        "Les scans de vieux tirages et les photos reprises d'un album imprimé sont généralement plus doux et granuleux que vraiment flous, ce qui convient bien au modèle : il élimine une bonne partie du grain et redessine les contours.",
        "Il ne répare pas les rayures, les pliures, les taches ni les couleurs passées : ce sont des dégâts sur le tirage, pas un manque de résolution, et ils demandent une retouche. Numérisez à la plus haute résolution que propose votre scanner, puis rendez la photo nette ici.",
      ],
    },
    {
      heading: "Photos transférées par WhatsApp et autres messageries",
      id: "messaging",
      body: [
        "Quand une photo passe par WhatsApp, Messenger, Telegram ou un réseau social, elle est réduite puis recompressée. Après plusieurs transferts apparaissent des blocs dans les zones unies, des halos autour du texte et une perte générale de détail. C'est l'un des cas où le modèle fonctionne le mieux : il nettoie les artefacts et redessine les contours.",
        "Si possible, demandez le fichier original à la personne qui vous l'a envoyé, ou faites-le envoyer comme document plutôt que comme photo : l'application ne le compresse alors pas. Si vous n'avez que la copie transférée, importez-la telle quelle, sans faire de capture d'écran au préalable, ce qui ajouterait une perte de plus.",
      ],
    },
  ],

  howToTitle: "Comment rendre une photo nette",
  steps: [
    { title: "Importez la photo floue", description: "Sélectionnez un JPG, PNG ou WEBP ; le fichier original plutôt qu'une capture, si vous l'avez." },
    { title: "Gardez la taille ou agrandissez", description: "Le résultat conserve la taille de votre photo ; désactivez cette option pour l'obtenir deux fois plus grande." },
    { title: "Améliorez et téléchargez", description: "Comparez l'avant et l'après avec le curseur, puis téléchargez l'image plus nette." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Restauration par IA", description: "Reconstruit les contours, les textures et les lettres au lieu de mélanger les pixels, à la taille de votre photo." },
    { icon: "visibility", title: "Avant/après honnête", description: "Un curseur de comparaison montre exactement ce qui a changé, pour que vous jugiez le résultat vous-même." },
    { icon: "verified_user", title: "Gratuit, sans filigrane", description: "Pas de compte et rien d'apposé sur le résultat." },
  ],

  faqs: [
    { q: "Comment rendre une photo nette en ligne ?", a: "Importez la photo et cliquez sur le bouton pour la rendre nette. Comparez le résultat avec le curseur et téléchargez-le s'il vous convient : il revient à la même taille que votre photo." },
    { q: "Peut-il corriger une photo où l'appareil a bougé ?", a: "En partie seulement. Le flou de bougé étire le détail en traînées qu'aucun modèle ne peut vraiment inverser ; vous obtiendrez une image plus propre, mais pas la photo nette que l'appareil a manquée." },
    { q: "Peut-il rendre reconnaissable un visage flou ?", a: "Non, et il ne le doit pas. Sur un visage déjà reconnaissable, il améliore nettement la netteté ; sur un visage méconnaissable, il ne ferait que deviner, et le résultat ne doit donc pas servir à identifier qui que ce soit." },
    { q: "Peut-il dépixeliser une image ?", a: "Oui : une petite image pleine de blocs est l'un de ses meilleurs cas. Désactivez l'option qui conserve la taille d'origine pour laisser de la place au détail supplémentaire : les blocs sont remplacés par des contours lisses et des textures, en taille double." },
    { q: "La photo défloutée a-t-elle la même taille que l'original ?", a: "Oui, par défaut. Le modèle calcule le détail à deux fois la résolution, puis le résultat est ramené à la taille de votre photo. Désactivez l'option qui conserve la taille d'origine pour la télécharger en ×2." },
    { q: "Corrige-t-il le texte flou sur la photo d'un document ?", a: "Un texte légèrement mou devient nettement plus net. Un texte trop flou pour être lu sur l'original reste généralement illisible." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Oui, sur notre serveur, car le modèle a besoin de plus de mémoire qu'un navigateur n'en offre. Le résultat est conservé brièvement derrière un lien privé et supprimé automatiquement dans l'heure." },
    { q: "Quelle différence avec le curseur de netteté d'une application photo ?", a: "Un réglage de netteté classique se contente d'augmenter le contraste des contours existants ; si vous forcez, des halos clairs et du bruit apparaissent. Le modèle d'IA redessine les contours et les textures et élimine les artefacts de compression au lieu de les accentuer." },
  ],

  security:
    "Le défloutage s'exécute sur notre serveur avec le moteur open source Real-ESRGAN. Votre photo transite par une connexion chiffrée, le résultat n'est stocké que brièvement derrière un lien de téléchargement privé et supprimé automatiquement dans l'heure, et rien n'est partagé ni réutilisé.",
};

export default content;
