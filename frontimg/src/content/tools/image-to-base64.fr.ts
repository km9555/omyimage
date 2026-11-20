import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/image-en-base64.
 *
 * Head term "Image en Base64" — the "X en Y" pattern of the French converter
 * family. Secondary "convertir une image en Base64", used in the intro, a
 * heading and an FAQ. The audience is technical, so HTML, CSS, data URI and
 * MIME stay untranslated.
 */
const content: ToolPageContent = {
  toolId: "image-to-base64",
  locale: "fr",
  name: "Image en Base64",
  tagline:
    "Convertissez une image en chaîne Base64 ou en data URI en ligne, avec sortie brute, CSS ou HTML et copie en un clic. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Image en Base64 – encoder et copier gratuitement | oMyImage",
  metaDescription:
    "Image en Base64 gratuit : convertir une image en Base64 ou en data URI, avec sortie CSS et balise <img> prêtes à copier. Encodage local, sans envoi.",

  intro:
    "Intégrez vos images directement dans votre code. L'outil Image en Base64 d'oMyImage vous permet de convertir une image en Base64 sous forme de data URI, directement dans votre navigateur, et vous donne aussi la chaîne brute, une règle CSS background et une balise <img> toute prête. Idéal pour intégrer de petites icônes et des logos sans requête HTTP supplémentaire. Rien n'est envoyé : votre image reste privée.",

  sections: [
    {
      heading: "À quoi sert l'encodage Base64",
      id: "what",
      body: [
        "Le Base64 réécrit des données binaires en n'utilisant qu'un jeu restreint de caractères de texte. Il existe parce qu'un grand nombre de systèmes ont été conçus pour transporter du texte et se comportent de façon imprévisible face à des octets bruts : corps d'e-mails, contenus JSON, documents XML, attributs HTML, paramètres d'URL et de nombreux formats de configuration, entre autres.",
        "Encoder une image en Base64 permet de glisser l'image elle-même dans l'un de ces canaux réservés au texte. Enveloppée dans un data URI, avec le type MIME déclaré au début, elle peut aller directement dans l'attribut src d'une balise img ou dans une règle CSS background-image, et le navigateur reconstitue les octets d'origine.",
        "Le prix à payer, c'est le poids. Quatre caractères transportent trois octets : la forme texte est donc environ un tiers plus lourde que le fichier, sans aucune compression pour rattraper cet écart.",
      ],
    },
    {
      heading: "Quand l'intégration aide, et quand elle nuit",
      id: "tradeoffs",
      body: [
        "Le bénéfice, c'est une requête réseau de moins. Pour un fichier très petit, l'aller-retour peut coûter plus de temps que les octets eux-mêmes : l'intégrer permet alors réellement d'afficher la page plus tôt. Environ 5 Ko, c'est la règle empirique habituelle.",
        "Au-delà, l'intégration est généralement contre-productive, pour des raisons faciles à négliger. Une image intégrée ne peut pas être mise en cache séparément : elle est donc retéléchargée avec le HTML à chaque visite, alors qu'un fichier image normal est récupéré une fois puis réutilisé. Elle ne peut pas non plus être chargée en différé (lazy loading), et elle alourdit le document lui-même, ce qui retarde l'analyse et le premier affichage.",
        "En pratique : intégrez les icônes, les tout petits logos et les images de remplacement. Servez les photos normalement.",
      ],
    },
    {
      heading: "Le problème des e-mails",
      id: "email",
      body: [
        "Intégrer des images en data URI dans un e-mail HTML semble une façon élégante de ne rien héberger, et cela échoue assez souvent pour être un mauvais choix par défaut. Outlook sous Windows, en particulier, refuse depuis longtemps de les afficher, et plusieurs autres clients les suppriment ou les bloquent par mesure de sécurité.",
        "Les approches fiables consistent à héberger l'image et à la lier, ou à la joindre et à la référencer par un identifiant CID, le mécanisme autour duquel les clients de messagerie ont réellement été conçus. Le Base64 dans un e-mail ne vaut la peine que si vous maîtrisez le client de chaque destinataire.",
      ],
    },
    {
      heading: "Encoder n'est pas chiffrer",
      id: "security",
      body: [
        "Le Base64 est parfois pris pour une forme d'obfuscation ou de protection. Ce n'est ni l'un ni l'autre. N'importe quelle console de navigateur, n'importe quel éditeur de texte doté d'un décodeur, n'importe lequel de mille sites web retransformera la chaîne en image d'origine en une seconde. Il n'y a ni clé ni secret.",
        "C'est important quand l'image elle-même est sensible. Encoder en Base64 un document, une pièce d'identité ou une photo privée puis le coller dans un fichier de configuration, un ticket ou un document partagé l'expose exactement autant qu'une pièce jointe, et souvent de façon moins visible : la chaîne ressemble à du charabia, ce qui pousse à la croire sans danger.",
        "Ici, l'encodage se fait dans votre navigateur : l'image n'est jamais envoyée. C'est ce que vous faites ensuite de la chaîne obtenue qui pose la vraie question de confidentialité.",
      ],
    },
  ],

  howToTitle: "Comment convertir une image en Base64",
  steps: [
    { title: "Importez", description: "Sélectionnez une image, ou glissez-déposez-la dans l'espace de travail." },
    { title: "Choisissez le format", description: "Basculez entre un data URI, du Base64 brut, une règle CSS background ou une balise <img>." },
    { title: "Copiez ou téléchargez", description: "Copiez la chaîne dans le presse-papiers ou téléchargez-la sous forme de fichier .txt." },
  ],

  features: [
    { icon: "data_object", title: "Quatre formats de sortie", description: "Obtenez un data URI prêt à l'emploi, le Base64 brut, une règle CSS background-image ou une balise <img> complète." },
    { icon: "bolt", title: "Encodage instantané", description: "L'encodage a lieu dès que vous déposez le fichier : pas d'attente, pas d'envoi." },
    { icon: "lock", title: "100 % privé", description: "Votre image est encodée dans votre navigateur et n'est jamais envoyée à un serveur." },
  ],

  faqs: [
    { q: "Qu'est-ce qu'un data URI en Base64 ?", a: "C'est une représentation texte de votre image que vous pouvez intégrer directement dans du HTML ou du CSS, ce qui évite une requête vers un fichier séparé." },
    { q: "Pourquoi la chaîne est-elle plus lourde que mon fichier ?", a: "L'encodage Base64 ajoute environ 33 % de surcharge : il convient donc surtout aux petites images comme les icônes et les logos." },
    { q: "Quels formats sont pris en charge ?", a: "JPG, PNG, WEBP, GIF, BMP, SVG et AVIF." },
    { q: "Convertir une image en Base64 ici est-il gratuit et privé ?", a: "Oui. Pas d'inscription, et l'image est encodée localement dans votre navigateur : rien n'est envoyé." },
    { q: "Pourquoi la chaîne Base64 est-elle plus grande que le fichier ?", a: "Parce que le Base64 représente trois octets binaires avec quatre caractères de texte : la forme encodée est donc environ 33 % plus lourde, plus un peu pour le préfixe du data URI. Cette surcharge est le prix à payer pour pouvoir placer des données binaires là où seul le texte est admis." },
    { q: "Quand utiliser réellement un data URI ?", a: "Pour les petits éléments : icônes, logo dans une signature d'e-mail, image de remplacement, texture dans une page HTML autonome. En dessous d'environ 5 Ko, la requête HTTP économisée compense généralement la pénalité de poids. Au-delà, un fichier image normal servi séparément est plus rapide." },
    { q: "Pourquoi mes images intégrées ne s'affichent-elles pas dans les e-mails ?", a: "Parce que plusieurs grands clients de messagerie bloquent ou ignorent les data URI, Outlook sous Windows en tête. Pour un e-mail, hébergez l'image et liez-la, ou utilisez une vraie pièce jointe CID : le Base64 intégré n'est pas fiable dans ce contexte." },
    { q: "Le chiffrement Base64 protège-t-il mon image ?", a: "Non, et c'est un malentendu courant. Le Base64 est un encodage, pas un chiffrement : n'importe qui peut l'inverser trivialement, sans aucune clé. Il permet de transporter des données binaires sous forme de texte ; il n'offre absolument aucune confidentialité." },
    { q: "Puis-je utiliser le Base64 en CSS ?", a: "Oui, comme URL de background-image, et c'est une façon raisonnable d'intégrer une petite icône ou un motif. Sachez qu'un data URI dans une feuille de style est téléchargé par chaque visiteur, que la règle s'applique ou non, et qu'il ne peut pas être mis en cache séparément du CSS." },
    { q: "Quels formats puis-je encoder ?", a: "JPG, PNG, WEBP, GIF, BMP, SVG et AVIF. La sortie est un data URI complet avec le bon type MIME : vous pouvez le coller tel quel dans une balise img ou une feuille de style." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. L'encodage se fait entièrement dans votre navigateur, ce qui compte pour les images sensibles : rien ne transite par nos serveurs, et rien n'est conservé." },
  ],

  security:
    "Votre image reste privée. L'encodage Base64 se fait entièrement dans votre navigateur : rien n'est envoyé à un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // ImageToBase64Tool.tsx — module-scope TABS
    "Data URI": "Data URI", // i18n-same
    "Raw Base64": "Base64 brut",
    "CSS": "CSS", // i18n-same
    "HTML": "HTML", // i18n-same
    // ImageToBase64Tool.tsx
    "Select an image": "Sélectionner une image",
    "Change image": "Changer d'image",
    "Please select an image file.": "Sélectionnez un fichier image.",
    "Couldn't read that image.": "Impossible de lire cette image.",
    "Copied to clipboard": "Copié dans le presse-papiers",
    "Copy failed.": "La copie a échoué.",
    "or drop a JPG, PNG, WEBP, GIF or SVG here": "ou déposez ici un JPG, PNG, WEBP, GIF ou SVG",
    "Encoding options": "Options d'encodage",
    "Copy": "Copier",
    "Output": "Sortie",
    "{size} encoded": "{size} encodés",
    "Base64 Output": "Sortie Base64",
    "Tip:": "Astuce :",
    "Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.":
      "Les chaînes Base64 sont environ 33 % plus lourdes que le fichier : idéal pour de petites icônes intégrées dans du CSS ou du HTML. Tout se passe dans votre navigateur.",
  },
};

export default content;
