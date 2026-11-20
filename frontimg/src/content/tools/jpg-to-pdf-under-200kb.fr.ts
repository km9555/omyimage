import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/jpg-en-pdf-moins-de-200ko (variant of image-to-pdf,
 * 200 Ko limit on the whole PDF). Target query: «JPG en PDF de moins de
 * 200 Ko». Angle: petits DOSSIERS (recto-verso, deux ou trois pages) pour les
 * portails d'inscription, de bourses et de recrutement.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-200kb",
  locale: "fr",
  name: "JPG en PDF de moins de 200 Ko",
  tagline:
    "Réunissez les photos ou scans de vos documents dans un seul PDF de moins de 200 Ko — diplômes, relevés de notes, carte d'identité recto-verso — pour les portails d'inscription, de bourses et d'emploi. Pages lisibles, dans votre navigateur, rien n'est envoyé.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG en PDF de moins de 200 Ko – plusieurs pages | oMyImage",
  metaDescription:
    "Convertir des JPG en PDF de moins de 200 Ko gratuitement : relevé de notes, diplôme ou carte d'identité recto-verso dans un seul PDF lisible.",

  intro:
    "200 Ko est la limite PDF la plus courante sur les portails d'inscription, de bourses et de recrutement, généralement pour un document de deux ou trois pages : un relevé de notes et son verso, un diplôme et son annexe, les deux faces d'une carte d'identité. Cette page place vos images dans un seul PDF, dans l'ordre que vous choisissez, et, si le résultat dépasse 200 Ko, recompresse les images juste assez pour que le fichier entier rentre — en partageant le budget pour que chaque page reste aussi lisible que les autres.",

  sections: [
    {
      heading: "Deux ou trois pages lisibles",
      id: "pages",
      body: [
        "À 200 Ko, deux pages de texte dactylographié gardent environ 800 × 1100 pixels chacune et trois pages environ 600 × 800 : parfaitement lisible pour deux, correct pour trois quand les caractères sont de taille normale, comme sur la plupart des diplômes et formulaires. Le budget est réparti selon la surface en pixels, si bien qu'un scan pleine page en reçoit davantage qu'une petite carte du même dossier, et aucune page ne finit beaucoup plus floue que les autres.",
        "Les images qui rentrent déjà ne sont pas touchées : si vos pages sont assez légères pour former un PDF de moins de 200 Ko telles quelles, le PDF est créé avec elles sans modification.",
      ],
    },
    {
      heading: "Mettre les pages dans l'ordre",
      id: "order",
      body: [
        "Ajoutez toutes les images, puis utilisez les flèches de chacune pour les placer dans l'ordre de lecture du document — le recto avant le verso, la page un avant la page deux. L'aperçu à gauche montre exactement comment les pages vont sortir.",
        "Donnez à vos photos des noms clairs avant de les ajouter, par exemple releve-recto et releve-verso : vous repérerez une erreur d'ordre au premier coup d'œil.",
      ],
    },
    {
      heading: "Recto et verso d'une carte sur une seule page",
      id: "both-sides",
      body: [
        "Les portails veulent souvent le recto et le verso d'une carte d'identité sur une seule page PDF. Ajoutez les deux photos, réglez « Images par page » sur 2, et les deux faces sont placées sur une même page A4, l'une au-dessus de l'autre. Recadrez d'abord chaque photo au bord de la carte pour que les deux faces sortent à la même taille.",
      ],
    },
    {
      heading: "Vérifier avant l'envoi",
      id: "check",
      body: [
        "Ouvrez le PDF téléchargé et zoomez à 100 % sur chaque page : les noms, numéros et dates doivent se lire sans effort, et rien ne doit être coupé sur les bords. Si une page est difficile à lire, reprenez cette photo avec une meilleure lumière plutôt que d'augmenter la limite — une photo nette se compresse bien mieux qu'une photo sombre.",
      ],
    },
    {
      heading: "Comment la limite de 200 Ko est respectée",
      id: "how",
      body: [
        "Le PDF est d'abord créé à partir de vos images telles quelles. S'il fait déjà moins de 200 Ko, vous l'obtenez immédiatement et rien n'est recompressé. Sinon, l'outil mesure la part du fichier occupée par les images et celle de la structure du PDF, puis répartit ce qui reste des 200 Ko entre les images selon leur taille.",
        "Chaque image est alors réenregistrée avec la meilleure qualité JPG qui tient dans sa part, et le PDF est reconstruit. Si le résultat dépasse encore de quelques octets, les parts sont resserrées et l'outil réessaie — le fichier téléchargé est donc toujours sous la limite, pas seulement tout près.",
      ],
    },
  ],

  howToTitle: "Comment convertir des JPG en PDF de moins de 200 Ko",
  steps: [
    { title: "Ajoutez vos images", description: "Ajoutez les photos ou scans de chaque page : JPG, PNG, WEBP ou GIF." },
    { title: "Ordonnez et disposez les pages", description: "Réglez l'ordre avec les flèches ; choisissez le format de page et le nombre d'images par page." },
    { title: "Créez le PDF", description: "Le PDF se télécharge sous 200 Ko, avec des images compressées seulement si nécessaire." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Un PDF de moins de 200 Ko", description: "Le fichier entier reste sous la limite, quel que soit son nombre de pages." },
    { icon: "reorder", title: "Pages dans votre ordre", description: "Réorganisez les pages et vérifiez le résultat dans l'aperçu avant de créer le PDF." },
    { icon: "lock", title: "Confidentiel", description: "Diplômes et cartes d'identité ne quittent jamais votre navigateur." },
  ],

  faqs: [
    { q: "Comment convertir des JPG en PDF de moins de 200 Ko ?", a: "Ajoutez les images, mettez-les dans l'ordre et cliquez sur « Créer le PDF ». La limite de 200 Ko est déjà réglée et les images ne sont compressées que si nécessaire." },
    { q: "Combien de pages tiennent dans un PDF de 200 Ko ?", a: "Deux pages restent parfaitement lisibles ; trois conviennent aux diplômes et formulaires aux caractères de taille normale. Davantage de pages tiennent aussi, chacune avec moins de détails." },
    { q: "Comment mettre le recto et le verso de ma carte d'identité sur une seule page ?", a: "Ajoutez les deux photos et choisissez 2 dans « Images par page ». Les deux faces se retrouvent sur la même page." },
    { q: "Toutes les pages auront-elles la même qualité ?", a: "Oui. Le budget est réparti selon la surface de chaque image, donc chaque page est compressée de façon homogène." },
    { q: "Mes images sont déjà légères : seront-elles quand même compressées ?", a: "Non. Si elles forment déjà un PDF de moins de 200 Ko, elles sont utilisées exactement telles quelles." },
    { q: "200 Ko, est-ce la même chose que 0,2 Mo ?", a: "Oui, 200 Ko correspondent à 200 000 octets. Le PDF passe aussi les portails qui comptent 1 Ko comme 1 024 octets." },
    { q: "Mes documents sont-ils envoyés en ligne ?", a: "Non. Les images sont compressées et le PDF est créé dans votre navigateur." },
    { q: "Pourquoi cela prend-il quelques secondes ?", a: "Chaque image est compressée à sa part de la limite, puis le PDF est reconstruit, le tout dans votre navigateur. Les grosses photos de téléphone demandent un instant de plus." },
    { q: "Puis-je changer l'ordre des pages après les avoir ajoutées ?", a: "Oui, à tout moment avant de créer le PDF : les flèches de chaque image la déplacent, et l'aperçu se met à jour aussitôt." },
  ],

  security:
    "Vos pages sont compressées puis réunies en un seul PDF directement sur votre appareil, dans votre navigateur. Aucun diplôme ni aucune pièce d'identité n'est envoyé ou conservé où que ce soit.",
};

export default content;
