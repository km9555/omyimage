import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-150ko (variant of compress-image,
 * preset targetKb 150). Primary query: « Compresser une image à 150 Ko »;
 * secondary: « réduire une photo à 150 Ko ». Angle: HANDWRITTEN pages —
 * homework and exam copies uploaded page by page — plus faint pencil, page
 * order, and photos at this size.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-150kb",
  locale: "fr",
  name: "Compresser une image à 150 Ko",
  tagline:
    "Compressez photos et pages manuscrites ou imprimées sous 150 Ko : une écriture lisible, des photos nettes, des séries entières d'un coup. Pour les plateformes qui plafonnent chaque envoi à 150 Ko. Gratuit et confidentiel, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 150 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 150 Ko : pages manuscrites lisibles, copies et photos nettes pour vos plateformes. Réduisez une photo à 150 Ko, gratuit et privé.",

  intro:
    "150 Ko est un plafond courant pour chaque fichier sur les plateformes d'établissements et d'examens, les systèmes de candidature et les espaces numériques de cours — en particulier quand les élèves et les étudiants déposent des devoirs manuscrits ou des copies page par page. C'est suffisant pour qu'une page manuscrite entière reste facile à lire et qu'un portrait paraisse net. Ajoutez toutes vos pages en même temps, et chacune revient en JPG de moins de 150 Ko avec la meilleure qualité qui tienne dans cette limite.",

  sections: [
    {
      heading: "Les pages manuscrites",
      id: "handwritten",
      body: [
        "À 150 Ko, une page A4 complète garde environ 1200 × 1700 pixels avec une bonne qualité : chaque ligne d'écriture reste lisible au zoom normal, y compris les schémas et les petits chiffres. L'outil garde la qualité aussi haute que la limite le permet et ne réduit les dimensions que pour des pages exceptionnellement chargées.",
        "Photographiez chaque page à plat, à la lumière du jour, bien à la verticale, sans rien d'autre dans le cadre. Une page photographiée de biais paraît déformée, et une ombre sur le papier coûte à la fois des octets et de la lisibilité.",
      ],
    },
    {
      heading: "Crayon pâle et encre claire",
      id: "faint",
      body: [
        "Le crayon à papier et l'encre bleu clair perdent du contraste en photo, et la compression fait disparaître en premier les traits fins et pâles. Écrivez au stylo foncé si vous le pouvez. Si la page est déjà rédigée, photographiez-la sous une lumière du jour forte et régulière, et pensez à la passer en noir et blanc avec l'outil « Photo en noir et blanc » avant de compresser : sans la couleur, une plus grande part du budget va aux traits eux-mêmes.",
      ],
    },
    {
      heading: "Plusieurs pages dans l'ordre",
      id: "pages",
      body: [
        "Ajoutez toutes les pages ensemble ; chacune est compressée sous 150 Ko et vous pouvez les télécharger dans un ZIP. Nommez les photos dans l'ordre des pages avant de les ajouter — page-01, page-02, etc. — pour que les fichiers reviennent dans l'ordre attendu par la plateforme.",
        "Si la plateforme veut un seul PDF et limite le fichier entier à 150 Ko, donnez ici une limite plus basse à chaque page — environ 50 Ko chacune pour trois pages — puis assemblez-les avec « Image en PDF ».",
      ],
    },
    {
      heading: "Les photos à 150 Ko",
      id: "photos",
      body: [
        "Pour une photographie, 150 Ko, c'est généreux : un portrait garde à peu près 900 × 1200 pixels en haute qualité, ce qui convient très bien pour un profil, une carte ou un annuaire du personnel. Aucune préparation n'est nécessaire, à part rogner ce que vous ne voulez pas voir sur l'image.",
      ],
    },
    {
      heading: "Applications de scan et simples photos",
      id: "scanner-apps",
      body: [
        "Une application de scan de documents — celle intégrée à l'application Notes ou Fichiers de votre téléphone, ou une application à part — repère les bords de la page, la redresse et renforce le contraste pour que le papier devienne blanc et l'écriture foncée. Pour des pages manuscrites, c'est le meilleur point de départ possible : un scan propre se compresse à 150 Ko avec chaque ligne bien nette.",
        "Beaucoup d'applications de scan enregistrent en PDF par défaut. Choisissez JPG à l'export, ou faites une capture d'écran de chaque page, puis compressez les images ici. Une simple photo convient aussi ; il lui faut seulement une bonne lumière du jour et une prise de vue bien à la verticale pour paraître aussi propre qu'un scan.",
        "Quelle que soit la méthode, vérifiez la première page en taille réelle avant de traiter les autres : si celle-ci se lit facilement à 150 Ko, les suivantes se liront tout aussi bien.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 150 Ko",
  steps: [
    { title: "Ajoutez vos pages ou photos", description: "Sélectionnez-les ou glissez-les, dans l'ordre des pages s'il s'agit de pages, en JPG, PNG ou WebP." },
    { title: "Compressez sous 150 Ko", description: "La limite de 150 Ko est déjà réglée ; chaque fichier est compressé pour tenir." },
    { title: "Téléchargez", description: "Téléchargez chaque fichier ou tous ensemble dans un ZIP." },
  ],

  features: [
    { icon: "edit_note", title: "Une écriture lisible", description: "Les pages complètes gardent assez de pixels pour chaque ligne, chaque chiffre et chaque schéma." },
    { icon: "folder_zip", title: "Des devoirs entiers", description: "De nombreuses pages compressées en une fois et téléchargées ensemble." },
    { icon: "lock", title: "Confidentiel", description: "Vos pages et vos photos ne quittent jamais votre navigateur." },
  ],

  faqs: [
    { q: "Comment compresser une image à 150 Ko ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 150 Ko est déjà réglée. Vous obtenez un JPG de moins de 150 Ko avec la meilleure qualité qui tienne." },
    { q: "Une écriture manuscrite reste-t-elle lisible à 150 Ko ?", a: "Oui. Une page complète garde environ 1200 × 1700 pixels, assez pour lire une écriture normale au zoom habituel." },
    { q: "Comment déposer plusieurs pages manuscrites de moins de 150 Ko chacune ?", a: "Ajoutez toutes les pages ensemble ; chacune revient sous 150 Ko. Nommez d'abord les photos dans l'ordre des pages pour qu'elles restent dans l'ordre." },
    { q: "Crayon ou stylo : lequel fonctionne le mieux ?", a: "Un stylo foncé. Les traits de crayon sont pâles en photo et s'effacent en premier quand le fichier est compressé." },
    { q: "Puis-je faire un seul PDF de toutes les pages sous 150 Ko ?", a: "Oui : donnez ici une limite plus basse à chaque page pour que le total reste sous 150 Ko, puis assemblez-les avec « Image en PDF »." },
    { q: "Quelle taille peut avoir une photo à 150 Ko ?", a: "Environ 900 × 1200 pixels en haute qualité, largement assez pour un profil ou une carte." },
    { q: "150 Ko, est-ce la même chose que 0,15 Mo ?", a: "Oui, 150 Ko font 150 000 octets. Le fichier passe aussi sur les plateformes qui comptent 1 Ko pour 1024 octets." },
    { q: "Puis-je utiliser une application de scan sur mon téléphone pour les pages ?", a: "Oui, c'est même la meilleure méthode. Exportez les pages en JPG (ou faites des captures d'écran) plutôt qu'en PDF, puis compressez-les ici sous 150 Ko chacune." },
  ],

  security:
    "Les pages et les photos sont compressées sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
