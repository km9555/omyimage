import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/heic-en-png.
 *
 * Head term "HEIC en PNG" — the sibling of /fr/heic-en-jpg, which takes most
 * of the search volume; this page is for people who want a lossless copy to
 * edit. French converter queries take the "X en Y" form; secondary
 * "convertir HEIC en PNG" and "photos iPhone". iPhone settings are named as
 * French iOS shows them (Réglages › Appareil photo › Formats › « Le plus
 * compatible »).
 *
 * HeicTool is shared with /heic-to-jpg, so its ui keys are duplicated here —
 * each route only has its own tool's ui in scope (conversion.md §6.2.3).
 */
const content: ToolPageContent = {
  toolId: "heic-to-png",
  locale: "fr",
  name: "HEIC en PNG",
  tagline:
    "Convertissez vos photos iPhone HEIC et HEIF en PNG sans perte, une par une ou par pellicule entière. Gratuit, sans inscription et sans filigrane.",
  crossLink: { lead: "Vous préférez un fichier plus léger ?", label: "Convertir HEIC en JPG", toolId: "heic-to-jpg" },
  category: { id: "convert", label: "Convertir" },

  metaTitle: "HEIC en PNG – convertir sans perte, gratuit | oMyImage",
  metaDescription:
    "HEIC en PNG gratuit : convertir HEIC en PNG sans perte pour retoucher ou archiver vos photos iPhone. Fichiers .heic et .heif, par lots, sans inscription.",

  intro:
    "Transformez les photos .heic de votre iPhone en fichiers PNG qui s'ouvrent sur n'importe quel appareil. Le PNG est sans perte : l'image convertie est exactement ce qui sort du décodeur, sans seconde compression ajoutée à celle que l'appareil photo a déjà appliquée. Pour convertir HEIC en PNG, ajoutez une seule photo ou toute votre pellicule.",

  sections: [
    {
      heading: "Pourquoi convertir HEIC en PNG ?",
      id: "why",
      body: [
        "Le HEIC est le format dans lequel l'iPhone enregistre ses photos par défaut depuis iOS 11, et il stocke environ deux fois plus d'image que le JPG dans le même espace. Le problème, c'est qu'il repose sur le codec vidéo HEVC/H.265, couvert par des pools de brevets : la plupart des navigateurs, une grande partie des logiciels Windows et bon nombre d'applications Android refusent tout simplement d'ouvrir un fichier .heic sans l'installation d'un codec supplémentaire.",
        "Le PNG est l'exact opposé : un format banal, ancien à l'échelle du logiciel, et compris absolument partout. Le choisir plutôt que le JPG tient à une seule chose : le PNG est sans perte. Le HEIC a déjà été compressé avec perte quand votre téléphone l'a écrit, et le convertir en JPG le compresse une seconde fois. Le convertir en PNG, non : vous obtenez exactement ce que le décodeur a produit. Pour une photo que vous comptez retoucher, imprimer ou archiver, cela compte.",
        "La contrepartie, c'est le poids. Un HEIC de 2 Mo sur votre téléphone peut facilement devenir un PNG de 10 à 15 Mo, car le PNG ne jette jamais rien. Si vous voulez seulement envoyer la photo par e-mail ou la publier, le JPG est la meilleure destination, et la différence de poids est spectaculaire.",
      ],
    },
    {
      heading: "Pourquoi cet outil fonctionne sur notre serveur",
      id: "server",
      body: [
        "Presque tous les outils d'oMyImage fonctionnent dans l'onglet de votre navigateur. Le HEIC fait exception, et la raison est juridique, pas technique. Tous les décodeurs HEIC en JavaScript qui existent (heic2any, heic-decode, heic-convert, libheif-js) reposent sur la même bibliothèque libheif, distribuée sous licence LGPL-3.0. L'intégrer à un bundle de navigateur constitue une distribution, avec des obligations qu'un morceau de webpack minifié ne peut pas satisfaire.",
        "Le décodage se fait donc sur notre serveur, où exécuter la bibliothèque n'est pas une distribution. Votre fichier est envoyé par une connexion HTTPS chiffrée, converti, puis supprimé immédiatement après. Nous ne le conservons pas, ne l'indexons pas et ne l'utilisons à aucune autre fin. C'est la seule catégorie d'outils du site qui fonctionne ainsi, et les pages concernées le disent clairement au lieu de revendiquer une confidentialité qu'elles n'offrent pas.",
      ],
    },
    {
      heading: "Empêcher votre iPhone de créer des HEIC",
      id: "iphone",
      body: [
        "Si vous préférez ne pas convertir à chaque fois, vous pouvez demander au téléphone d'arrêter. Dans Réglages, rubrique Appareil photo, l'écran Formats propose « Le plus compatible » : choisissez-le et l'appareil photo enregistrera en JPG à partir de là. Vous perdez un peu d'efficacité de stockage et les photos existantes ne sont pas modifiées, mais les nouvelles prises de vue ne posent plus de problème.",
        "Un second réglage mérite d'être connu. Dans Photos, l'option « Transférer sur Mac ou PC » peut être réglée sur « Automatique », qui convertit le HEIC en JPG pendant la copie. Si elle est réglée sur « Conserver les originaux », vous récupérez les fichiers .heic tels quels, et c'est souvent de là que vient, au départ, un dossier de photos impossibles à ouvrir.",
      ],
    },
    {
      heading: "PNG ou JPG pour les photos iPhone ?",
      id: "png-or-jpg",
      body: [
        "Choisissez le PNG quand la photo part dans un logiciel de retouche, quand vous allez l'enregistrer plusieurs fois, quand elle contient du texte ou des aplats façon capture d'écran que le JPG rendrait flous, ou quand vous voulez une copie d'archive qui ne se dégradera plus.",
        "Choisissez le JPG quand la photo est un cliché ordinaire destiné à un e-mail, un message, un site web ou un service d'impression. Il pèse une fraction du poids et la différence de qualité est invisible à un réglage raisonnable. Le sélecteur ci-dessus bascule de l'un à l'autre sans réimporter, vous pouvez donc essayer les deux.",
      ],
    },
  ],

  howToTitle: "Comment convertir HEIC en PNG",
  steps: [
    {
      title: "Ajoutez vos photos HEIC",
      description: "Déposez des fichiers .heic ou .heif directement depuis votre iPhone ou un téléchargement iCloud. Les lots sont acceptés.",
    },
    {
      title: "Le PNG est déjà sélectionné",
      description: "Le résultat est sans perte, il n'y a donc pas de curseur de qualité à régler. Passez au JPG si vous préférez un fichier plus léger.",
    },
    {
      title: "Convertissez et téléchargez",
      description: "Une photo se télécharge seule ; plusieurs arrivent ensemble dans un ZIP.",
    },
  ],

  features: [
    {
      icon: "high_quality",
      title: "Résultat sans perte",
      description:
        "Le PNG stocke chaque pixel exactement tel qu'il a été décodé depuis le HEIC, sans les dégâts d'une seconde compression.",
    },
    {
      icon: "burst_mode",
      title: "Des pellicules entières",
      description:
        "Convertissez un lot en une seule fois et récupérez un seul ZIP au lieu de télécharger photo par photo.",
    },
    {
      icon: "devices",
      title: "S'ouvre partout",
      description:
        "Le PNG est pris en charge partout depuis les années 1990 : Windows, Android, Office, tous les logiciels de retouche et tous les navigateurs.",
    },
  ],

  faqs: [
    {
      q: "Convertir HEIC en PNG fait-il perdre de la qualité ?",
      a: "L'étape PNG est sans perte : rien n'est perdu à ce stade. Gardez à l'esprit que le HEIC lui-même a été compressé avec perte par votre téléphone ; la conversion préserve donc la photo exactement dans son état actuel, sans restaurer les détails que l'appareil a déjà supprimés.",
    },
    {
      q: "Pourquoi le PNG est-il tellement plus lourd que le HEIC ?",
      a: "Parce que le PNG stocke tout, alors que le HEIC est extrêmement efficace pour éliminer ce que l'œil ne remarquera pas. Un poids multiplié par cinq à huit est normal. Convertissez plutôt en JPG si le poids compte davantage que l'absence de perte.",
    },
    {
      q: "Ma photo est-elle envoyée sur un serveur ?",
      a: "Oui, pour cet outil précisément. Les navigateurs ne savent pas décoder le HEIC, et les seuls décodeurs JavaScript reposent sur libheif, sous licence LGPL, que nous ne pouvons pas distribuer dans votre navigateur. Votre fichier part en HTTPS vers notre serveur, y est converti puis supprimé juste après.",
    },
    {
      q: "Puis-je convertir toute une pellicule d'un coup ?",
      a: "Oui. Ajoutez autant de fichiers .heic ou .heif que vous voulez : ils sont convertis l'un après l'autre, puis livrés dans un seul ZIP.",
    },
    {
      q: "Les fichiers .heif fonctionnent-ils aussi ?",
      a: "Oui. Le HEIF est le conteneur et le HEIC la variante encodée en HEVC qu'utilise Apple. Les deux extensions sont acceptées.",
    },
    {
      q: "La date et le lieu de la photo sont-ils conservés ?",
      a: "Le convertisseur reprend les métadonnées partout où le format de sortie peut les contenir, et l'option « Supprimer les métadonnées » retire tout avant le téléchargement. Pour savoir avec certitude ce que contient la photo, l'outil « Voir les métadonnées d'une photo » lit les EXIF directement dans un HEIC, sans conversion.",
    },
    {
      q: "Comment empêcher mon iPhone d'enregistrer en HEIC ?",
      a: "Dans Réglages, ouvrez Appareil photo puis Formats et choisissez « Le plus compatible ». Les nouvelles photos seront enregistrées en JPG. Les fichiers HEIC existants ne sont pas modifiés : il faudra encore les convertir.",
    },
    {
      q: "Est-ce gratuit ?",
      a: "Oui : pas de compte, pas de filigrane et aucune limite au nombre de photos.",
    },
    {
      q: "Quand préférer le PNG au JPG pour une photo iPhone ?",
      a: "Quand la photo va être retouchée, recadrée ou réenregistrée plusieurs fois, quand vous voulez une copie d'archive qui ne se dégradera plus, ou quand elle contient du texte net. Pour un simple partage, le JPG reste bien plus pratique.",
    },
  ],

  security:
    "Le décodage HEIC ne peut pas se faire dans un navigateur : tous les décodeurs JavaScript reposent sur libheif, sous licence LGPL, que nous ne pouvons pas distribuer sur votre appareil. Votre photo est donc envoyée à notre serveur par une connexion HTTPS chiffrée, convertie, puis supprimée aussitôt. Elle n'est jamais stockée, indexée ni utilisée à d'autres fins.",

  ui: {
    // HeicTool.tsx — the same keys as heic-to-jpg.fr.ts (one shared component,
    // and each route only has its own tool's ui in scope).
    "Please select HEIC or HEIF images.": "Sélectionnez des images HEIC ou HEIF.",
    "Converted 1 HEIC image.": "1 image HEIC convertie.",
    "Converted {n} HEIC images.": "{n} images HEIC converties.",
    "or drop .heic / .heif photos here": "ou déposez ici des photos .heic / .heif",
    "Converted on our server over an encrypted connection — files are deleted right after.":
      "Converti sur notre serveur via une connexion chiffrée : les fichiers sont supprimés juste après.",
    "1 HEIC image": "1 image HEIC",
    "{n} HEIC images": "{n} images HEIC",
    "Conversion runs on our server; results are auto-deleted within an hour.":
      "La conversion s'effectue sur notre serveur ; les résultats sont supprimés automatiquement dans l'heure.",
    "Convert {n} images": "Convertir {n} images",
    "Convert & download": "Convertir et télécharger",
    "Convert": "Convertir",
    "Converting…": "Conversion…",
    "Conversion failed.": "La conversion a échoué.",
    "Conversion Settings": "Paramètres de conversion",
    "Conversion settings": "Paramètres de conversion",
    "Clear files": "Retirer les fichiers",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Quality": "Qualité",
    "Remove": "Retirer",
    "Strip metadata": "Supprimer les métadonnées",
    "Remove EXIF, colour profile, camera and location data. Photos from a phone usually carry GPS coordinates.":
      "Supprime les données EXIF, le profil colorimétrique et les données d'appareil photo et de localisation. Les photos de téléphone contiennent généralement des coordonnées GPS.",
    // Backend sentences this tool can surface (routes/image/heic)
    "Upload a HEIC or HEIF image.": "Importez une image HEIC ou HEIF.",
    "HEIC conversion isn't enabled on this server (ImageMagick with libheif not installed).":
      "La conversion HEIC n'est pas disponible sur ce serveur pour le moment.",
  },
};

export default content;
