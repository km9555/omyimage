import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/base64-en-image.
 *
 * Head term "Base64 en image" — the "X en Y" pattern of the French converter
 * family; secondary "convertir Base64 en image", used in the intro, a heading
 * and an FAQ. Developers also type the English "base64 to image", mentioned
 * once in an FAQ. Technical audience, so data URI, MIME, JSON and API stay
 * untranslated.
 */
const content: ToolPageContent = {
  toolId: "base64-to-image",
  locale: "fr",
  name: "Base64 en image",
  tagline:
    "Reconvertissez une chaîne Base64 ou un data URI en image en ligne : aperçu instantané, téléchargement en PNG, JPG ou WEBP. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Base64 en image – décoder gratuitement en ligne | oMyImage",
  metaDescription:
    "Base64 en image gratuit : convertir Base64 en image depuis un data URI ou une chaîne brute, aperçu direct, export PNG, JPG ou WEBP. Décodage local, sans envoi.",

  intro:
    "Retransformez une chaîne Base64 en véritable fichier image. L'outil Base64 en image d'oMyImage décode un data URI ou du Base64 brut directement dans votre navigateur, en affiche l'aperçu instantanément et vous permet de le télécharger tel quel ou de le convertir en PNG, JPG ou WEBP. Pour convertir Base64 en image, il suffit de coller la chaîne. Rien n'est envoyé : vos données restent privées.",

  sections: [
    {
      heading: "Retransformer du texte en image",
      id: "what",
      body: [
        "Le Base64 existe pour que des données binaires puissent passer par des canaux conçus pour le texte. C'est pourquoi des images apparaissent sous forme de longues chaînes de caractères dans des réponses d'API, des contenus JSON, du code HTML, des fichiers CSS, des colonnes de base de données et des corps d'e-mails : à un moment donné, l'image a dû entrer dans un endroit qui n'acceptait que du texte.",
        "Le décodage inverse exactement la transformation. Le Base64 est sans perte : quatre caractères redonnent trois octets, et ce qui en sort est, octet pour octet, le fichier d'origine. Rien n'est approximé et aucune qualité n'est perdue : l'image décodée est identique à celle qui a été encodée.",
        "Le moment typique où l'on en a besoin, c'est le débogage : vous avez une réponse ou une ligne de log qui devrait contenir une image, et vous voulez vérifier que c'est la bonne, ou même qu'il s'agit bien d'une image valide.",
      ],
    },
    {
      heading: "Pourquoi une chaîne refuse de se décoder",
      id: "troubleshooting",
      body: [
        "La grande majorité des échecs viennent de dégâts de copier-coller, pas de données réellement corrompues. Visionneuses de logs, clients de messagerie et terminaux insèrent des sauts de ligne dans les longues chaînes ; les éditeurs de texte font du retour à la ligne automatique ; des échappements JSON restent en place. Le moindre caractère parasite casse le décodage.",
        "La troncature est l'autre cause fréquente. Les consoles et les systèmes de logs coupent souvent les longues valeurs, parfois avec des points de suspension, parfois sans rien dire : vous avez alors un fragment qui semble complet. Une chaîne Base64 valide a toujours une longueur divisible par quatre, complétée si nécessaire par un ou deux caractères « = » à la fin ; si ce n'est pas le cas de la vôtre, elle est incomplète.",
        "Méfiez-vous aussi du Base64 « URL-safe ». Certains systèmes remplacent « + » et « / » par « - » et « _ » pour que la chaîne puisse figurer dans une URL, et ces variantes doivent être reconverties avant qu'un décodeur standard les accepte.",
      ],
    },
    {
      heading: "Avec ou sans le préfixe",
      id: "prefix",
      body: [
        "Un data URI complet ressemble à « data:image/png;base64, » suivi du contenu. Ce préfixe ne fait pas partie de l'encodage : c'est une déclaration qui indique au navigateur ce que représentent les octets décodés, et c'est ainsi qu'une balise img sait qu'elle doit traiter le résultat comme un PNG et non comme un JPG.",
        "Les deux formes fonctionnent ici. Si le préfixe est présent, il sert à déterminer le format de sortie, ce qui donne le résultat le plus fiable. Sans lui, le format est déduit des octets décodés eux-mêmes, puisque chaque format d'image commence par une signature reconnaissable.",
      ],
    },
    {
      heading: "Convertir Base64 en image localement, volontairement",
      id: "privacy",
      body: [
        "Tout se passe dans l'onglet de votre navigateur. Pour cet outil en particulier, ce n'est pas un détail, à cause de la provenance habituelle de ces chaînes : réponses d'API internes, logs de production, exports de bases de données et fichiers de configuration.",
        "Coller ce genre de contenu dans un site qui le traite côté serveur revient à livrer tout ce que contient la charge utile, avec le contexte qui l'entoure. Ici, la chaîne est décodée dans la page et l'image obtenue vous est proposée en téléchargement : rien n'est transmis, et il n'existe aucune copie côté serveur dont il faudrait s'inquiéter ensuite.",
      ],
    },
  ],

  howToTitle: "Comment convertir Base64 en image",
  steps: [
    { title: "Collez", description: "Collez un data URI ou une chaîne Base64 brute dans la zone de saisie." },
    { title: "Prévisualisez", description: "L'image décodée apparaît instantanément, avec ses dimensions et une vérification de validité." },
    { title: "Téléchargez", description: "Téléchargez l'image d'origine, ou convertissez-la d'abord en PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "image", title: "Décodage instantané", description: "Détecte automatiquement PNG, JPG, GIF, WEBP, BMP et SVG à partir de la chaîne et en affiche l'aperçu pendant la saisie." },
    { icon: "sync_alt", title: "Conversion au téléchargement", description: "Enregistrez l'image décodée telle quelle, ou réencodez-la en PNG, JPG ou WEBP avec réglage de la qualité." },
    { icon: "lock", title: "100 % privé", description: "Le décodage se fait entièrement dans votre navigateur : rien n'est envoyé à un serveur." },
  ],

  faqs: [
    { q: "Quelles entrées sont acceptées ?", a: "Les data URI complets (data:image/png;base64,…) comme les chaînes Base64 brutes. Pour une entrée brute, le type d'image est détecté automatiquement." },
    { q: "Puis-je changer de format ?", a: "Oui. Téléchargez l'original, ou choisissez PNG, JPG ou WEBP pour le réencoder avant le téléchargement." },
    { q: "Et si ma chaîne n'est pas valide ?", a: "Un message clair s'affiche : vérifiez que vous avez bien copié la chaîne Base64 en entier." },
    { q: "Est-ce gratuit et privé ?", a: "Oui. Pas d'inscription, et le décodage se fait localement dans votre navigateur : rien n'est envoyé." },
    { q: "Dois-je inclure le préfixe du data URI ?", a: "Non. Collez soit la chaîne Base64 seule, soit le data URI complet commençant par « data:image/…;base64, » : le préfixe est détecté et géré. L'inclure aide tout de même, car il déclare le format explicitement au lieu de le laisser deviner." },
    { q: "Pourquoi ma chaîne ne se décode-t-elle pas ?", a: "Le plus souvent à cause d'espaces ou de sauts de ligne introduits en la copiant depuis un log, un e-mail ou un fichier JSON. La troncature est l'autre cause courante : les éditeurs et les terminaux coupent les longues chaînes. La longueur d'une chaîne Base64 valide est toujours un multiple de quatre, avec un remplissage « = » à la fin si nécessaire." },
    { q: "D'où viennent habituellement ces chaînes ?", a: "Des réponses d'API qui renvoient des images intégrées, des contenus JSON, des colonnes de base de données qui stockent des images sous forme de texte, du code HTML et CSS que vous déboguez, du code source d'e-mails, des fichiers de configuration et des logs. Partout où du binaire a dû passer par un canal réservé au texte." },
    { q: "Quel format vais-je récupérer ?", a: "Celui de l'original : le data URI porte le type MIME, donc un PNG se décode en PNG et un JPG en JPG. Si la chaîne n'a pas de préfixe, le format est déduit du nombre magique des octets décodés." },
    { q: "Y a-t-il une limite de taille ?", a: "Seulement la mémoire de votre navigateur. Les chaînes très longues peuvent être lentes à coller et à décoder, puisque tout doit tenir dans la page. Les images de plusieurs mégaoctets encodées en texte sont lourdes à manipuler par nature, pas à cause d'une limite de notre part." },
    { q: "Mes données sont-elles envoyées quelque part ?", a: "Non. Le décodage se fait dans votre navigateur, ce qui compte, car ces chaînes sortent régulièrement de réponses d'API, de systèmes internes et de logs : le genre de contenu qu'il ne faut pas coller dans un service distant." },
    { q: "« base64 to image » ou « Base64 en image » : quelle différence ?", a: "Aucune. Beaucoup de développeurs cherchent « base64 to image » en anglais, mais c'est la même opération : convertir Base64 en image, ici gratuitement et sans quitter votre navigateur." },
  ],

  security:
    "Vos données restent privées. Le décodage Base64 se fait entièrement dans votre navigateur : rien n'est envoyé à un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // Base64ToImageTool.tsx
    "That doesn't look like a valid Base64 image string.":
      "Cela ne ressemble pas à une chaîne Base64 d'image valide.",
    "Image downloaded.": "Image téléchargée.",
    "Couldn't decode that string.": "Impossible de décoder cette chaîne.",
    "Canvas not supported.": "Ce navigateur ne prend pas en charge canvas.",
    "Downloaded as {format}.": "Téléchargée en {format}.",
    "Conversion failed.": "La conversion a échoué.",
    "Decoded image": "Image décodée",
    "Clear input": "Effacer la saisie",
    "Output settings": "Paramètres de sortie",
    "Decoded": "Décodée",
    "Paste a Base64 string to preview the image here.":
      "Collez une chaîne Base64 pour afficher ici l'aperçu de l'image.",
    "decoded preview": "aperçu décodé",
    "Base64 Input": "Entrée Base64",
    "Download": "Télécharger",
    "Download image": "Télécharger l'image",
    "Download as {format}": "Télécharger en {format}",
    "Paste a data URI (data:image/png;base64,…) or raw Base64":
      "Collez un data URI (data:image/png;base64,…) ou du Base64 brut",
    "Valid image detected.": "Image valide détectée.",
    "Convert & download": "Convertir et télécharger",
    "Quality": "Qualité",
  },
};

export default content;
