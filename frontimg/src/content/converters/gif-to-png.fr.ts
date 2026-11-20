import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr GIF-to-PNG converter.
 *
 * Head term « GIF en PNG » (140 FR), « convertir GIF en PNG » as a
 * secondary. The angle is editing: out of a 256-colour palette and one-bit
 * transparency into a lossless working file — distinct from GIF en JPG,
 * which is about a light still image for a form.
 */
const copy: LocalizedPairCopy = {
  name: "GIF en PNG",
  seoTitle: "GIF en PNG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir GIF en PNG gratuitement et sans inscription : couleurs complètes, transparence retouchable et fichier sans perte pour continuer à travailler.",
  unique: {
    intro:
      "Convertir un GIF en PNG le fait sortir d'une palette de 256 couleurs pour passer en couleurs complètes, et remplace la transparence en tout ou rien du GIF par une transparence aux bords adoucis. Le résultat est sans perte : il devient un vrai fichier de travail, que vous pouvez retoucher et réenregistrer sans dégradation. Les GIF animés sont convertis en leur première image, car un PNG ne contient qu'une seule image.",
    whyConvert:
      "Le motif habituel, c'est la retouche. La limite de palette du GIF réduit chaque image à 256 couleurs distinctes au maximum, et sa transparence tient sur un seul bit : un pixel est soit entièrement opaque, soit entièrement invisible, sans intermédiaire. D'où la frange crénelée caractéristique qui apparaît quand on pose un logo GIF sur un fond pour lequel il n'a pas été préparé. Le PNG n'a aucune de ces restrictions : couleurs 24 bits complètes et canal alpha sur 8 bits, pour des bords réellement lisses. La conversion n'inventera pas les couleurs que le GIF a déjà supprimées, mais elle arrête toute perte supplémentaire et vous donne un fichier que vous pouvez composer correctement. L'autre motif fréquent est une simple modernisation : remplacer d'anciens éléments GIF dans un code source ou un système de design par un format au comportement prévisible.",
    notes: [
      {
        heading: "La conversion ne restaure pas les couleurs perdues",
        body:
          "C'est la seule attente qu'il vaut la peine de clarifier. Si une photo a été enregistrée en GIF, elle a été réduite à 256 couleurs à ce moment-là, et les aplats en escalier comme le tramage font désormais partie de l'image. La conversion en PNG reproduit fidèlement cet aspect dans un meilleur conteneur ; elle ne peut pas reconstruire les dégradés qui ont été jetés. Si vous avez accès à l'original avant son passage en GIF, convertissez plutôt celui-là.",
      },
      {
        heading: "La transparence s'améliore, elle n'est pas seulement conservée",
        body:
          "La transparence du GIF est binaire : les bords lissés ont été mélangés d'avance avec le fond que le graphiste avait prévu. Ces pixels passent tels quels dans le PNG, et le halo ne disparaît pas tout seul. Ce que vous gagnez, c'est de la marge : le PNG sait enregistrer une transparence partielle, si bien qu'une fois en PNG vous pouvez réellement nettoyer le bord dans un éditeur, ce qui était impossible tant que le fichier restait un GIF.",
      },
      {
        heading: "L'animation ne survit pas",
        body:
          "Le PNG ne contient qu'une seule image : un GIF animé est donc converti en sa seule première image (frame). Si vous voulez chaque image dans un fichier séparé, utilisez plutôt l'outil « GIF en images », qui extrait la séquence complète. Si vous voulez garder l'animation, gardez le GIF.",
      },
    ],
    faqs: [
      {
        q: "Que devient un GIF animé ?",
        a: "Vous obtenez sa première image sous forme de PNG fixe. Le PNG ne peut pas enregistrer d'animation. Pour extraire chaque image dans son propre fichier, utilisez l'outil « GIF en images » ; pour garder l'animation, gardez le GIF.",
      },
      {
        q: "Le PNG sera-t-il plus beau que le GIF ?",
        a: "Il sera identique. Le PNG lève les restrictions qui ont abîmé l'image, mais il ne peut pas réparer les dégâts déjà faits : la réduction à 256 couleurs a eu lieu à la création du GIF et fait partie de l'image.",
      },
      {
        q: "La conversion GIF en PNG est-elle sans perte ?",
        a: "Oui. Le PNG enregistre chaque pixel exactement tel qu'il était dans le GIF : rien de plus n'est perdu à cette étape.",
      },
      {
        q: "La transparence est-elle conservée ?",
        a: "Oui. La couleur transparente unique du GIF devient des pixels entièrement transparents dans le PNG. Vous gagnez en plus la possibilité de retoucher ensuite une transparence progressive, ce que le GIF n'a jamais permis.",
      },
      {
        q: "Le fichier PNG sera-t-il plus lourd ?",
        a: "Souvent oui, parfois nettement. La palette du GIF est une forme de compression, alors que le PNG enregistre l'information de couleur complète. Pour des graphiques simples en aplats, les deux peuvent être proches ; pour un contenu photographique tramé, le PNG est généralement plus lourd.",
      },
      {
        q: "Puis-je convertir plusieurs GIF en PNG d'un coup ?",
        a: "Oui. Ajoutez tous ceux que vous voulez : chacun est converti en PNG à partir de sa première image, et vous les téléchargez ensemble dans un seul ZIP.",
      },
    ],
  },
};

export default copy;
