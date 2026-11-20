import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/heic-en-jpg.
 *
 * Head term "HEIC en JPG" (14.8K/mo) plus "convertir HEIC en JPG" (18.1K) —
 * French converter queries take the "X en Y" form. Secondary "photos iPhone"
 * goes in the intro, a heading and an FAQ. The iPhone settings are named as
 * French iOS shows them: Réglages › Appareil photo › Formats › « Le plus
 * compatible »; Photos › « Transférer sur Mac ou PC » › « Automatique » /
 * « Conserver les originaux ».
 *
 * HeicTool is shared with /heic-to-png: its ui keys are duplicated there
 * (each route only has its own tool's ui in scope).
 */
const content: ToolPageContent = {
  toolId: "heic-to-jpg",
  locale: "fr",
  name: "HEIC en JPG",
  tagline:
    "Convertissez vos photos iPhone HEIC et HEIF en JPG ou en PNG en ligne, par lots et avec réglage de la qualité. Gratuit et rapide, grâce au logiciel libre ImageMagick.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "HEIC en JPG – convertir HEIC en JPG gratuit | oMyImage",
  metaDescription:
    "HEIC en JPG gratuit et sans inscription : convertir HEIC en JPG ou en PNG par lots, avec réglage de la qualité. Vos photos iPhone s'ouvrent enfin partout.",

  intro:
    "L'iPhone enregistre ses photos en HEIC pour gagner de la place, mais beaucoup d'applications et d'appareils ne savent pas les ouvrir. L'outil HEIC en JPG d'oMyImage vous permet de convertir HEIC en JPG, le format lu partout (ou en PNG sans perte) : vos photos iPhone .heic et .heif, une par une ou par lots entiers. C'est le seul outil du site qui fonctionne sur notre serveur et non dans votre navigateur : décoder le HEIC nécessite une bibliothèque que sa licence nous interdit de distribuer dans un navigateur. Votre fichier est donc converti côté serveur, puis supprimé aussitôt.",

  sections: [
    {
      heading: "Le HEIC, et pourquoi il pose problème",
      id: "what",
      body: [
        "Le HEIC est le format qu'utilise l'iPhone par défaut depuis iOS 11. Il stocke les photos pour environ la moitié du poids d'un JPG équivalent, ce qui est une vraie prouesse technique et la raison pour laquelle Apple l'a adopté : un téléphone qui contient dix mille photos économise beaucoup d'espace.",
        "La difficulté vient de ce sur quoi il repose. Le HEIC s'appuie sur le codec vidéo HEVC/H.265, couvert par plusieurs pools de brevets qui font payer les licences de décodage. Ce seul fait explique presque tous les problèmes rencontrés avec le format : Windows n'inclut pas de décodeur, la plupart des navigateurs refusent de l'afficher, de nombreux téléphones Android ne l'ouvrent pas, et une longue liste de logiciels de bureau ignorent tout simplement ce qu'est ce fichier.",
        "Le JPG n'a aucun de ces bagages. Il a trente ans, il est libre de brevets et tout ce qui a un jour affiché une image le comprend. Convertir, c'est échanger un peu d'efficacité de stockage contre la certitude que la photo s'ouvrira partout où vous l'enverrez.",
      ],
    },
    {
      heading: "Pourquoi cet outil passe par notre serveur",
      id: "server",
      body: [
        "Tous les autres convertisseurs du site fonctionnent dans votre navigateur. Le HEIC fait exception, et la raison tient à la licence, pas aux performances. Tous les décodeurs HEIC en JavaScript qui existent (heic2any, heic-decode, heic-convert, libheif-js) sont des surcouches de la même bibliothèque libheif, qui est sous licence LGPL-3.0. L'intégrer à un bundle web constitue une distribution, avec des obligations qu'un morceau de JavaScript minifié ne peut pas remplir.",
        "Exécuter la bibliothèque sur un serveur n'est pas une distribution : c'est donc là que se fait le décodage. Votre photo voyage par une connexion HTTPS chiffrée, est convertie, puis supprimée immédiatement après. Elle n'est ni stockée, ni indexée, ni utilisée à d'autres fins. Nous préférons le dire clairement plutôt que de revendiquer une confidentialité que cet outil précis n'offre pas.",
      ],
    },
    {
      heading: "Régler le problème à la source sur vos photos iPhone",
      id: "settings",
      body: [
        "Si vous convertissez régulièrement des fichiers HEIC, mieux vaut changer le réglage que les fichiers. Dans Réglages, puis Appareil photo, puis Formats, l'option « Le plus compatible » fait enregistrer directement les photos en JPG. Vous perdez l'efficacité de stockage, ce qui est rarement la contrainte décisive sur un téléphone récent.",
        "Un second réglage piège souvent les utilisateurs. Dans Réglages, puis Photos, l'option « Transférer sur Mac ou PC » peut être réglée sur « Automatique », qui convertit le HEIC en JPG pendant la copie, ou sur « Conserver les originaux », qui ne le fait pas. Un dossier de fichiers .heic impossibles à ouvrir sur un PC Windows, c'est très souvent ce second réglage qui fait exactement ce qu'on lui a demandé.",
      ],
    },
    {
      heading: "Qualité et poids après la conversion",
      id: "quality",
      body: [
        "Le HEIC a déjà été compressé avec perte par votre téléphone, et l'encodage en JPG le compresse une seconde fois. À la qualité par défaut, cela ne se voit pas à taille d'affichage normale, mais c'est une vraie génération supplémentaire : convertissez donc à partir du HEIC d'origine plutôt que d'une copie déjà passée par autre chose.",
        "Attendez-vous à un JPG plus lourd que le HEIC, généralement de 1,5 à 2,5 fois, puisque vous passez à un format moins efficace. C'est le prix de la compatibilité universelle. Si vous voulez plutôt une copie sans perte pour la retouche, convertissez en PNG, mais préparez-vous à un fichier encore plusieurs fois plus lourd.",
      ],
    },
  ],

  howToTitle: "Comment convertir HEIC en JPG",
  steps: [
    { title: "Importez vos HEIC", description: "Sélectionnez une ou plusieurs photos .heic / .heif, ou glissez-déposez-les." },
    { title: "Choisissez le format", description: "Optez pour le JPG (avec réglage de la qualité) ou le PNG en sortie." },
    { title: "Convertissez et téléchargez", description: "Cliquez sur « Convertir » : une photo se télécharge directement, plusieurs arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "photo_camera", title: "Pensé pour les photos iPhone", description: "Transformez les photos HEIC/HEIF d'Apple en JPG ou en PNG qui s'ouvrent partout : Windows, Android et le web." },
    { icon: "burst_mode", title: "Conversion par lots", description: "Convertissez toute une pellicule d'un coup et téléchargez le tout dans un seul ZIP." },
    { icon: "lock", title: "Privé par défaut", description: "La conversion s'effectue sur notre serveur avec le logiciel libre ImageMagick ; les résultats sont supprimés automatiquement dans l'heure, sans jamais être partagés ni réutilisés." },
  ],

  faqs: [
    { q: "Qu'est-ce que le HEIC ?", a: "Le HEIC (HEIF) est le format photo à haute efficacité que l'iPhone utilise par défaut. Il fait gagner de la place mais n'est pas pris en charge partout : le convertir en JPG facilite le partage." },
    { q: "Puis-je convertir plusieurs fichiers HEIC à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : plusieurs fichiers se téléchargent ensemble dans un ZIP." },
    { q: "La qualité est-elle préservée ?", a: "Oui. Choisissez le PNG pour un résultat sans perte, ou le JPG avec un curseur de qualité pour équilibrer poids et fidélité." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Oui : le HEIC est le seul outil du site qui a besoin d'un serveur. Le décodage du HEIC exige une bibliothèque que nous ne pouvons pas distribuer dans votre navigateur pour des raisons de licence ; le fichier est donc converti sur notre serveur et supprimé automatiquement dans l'heure. Rien n'est partagé ni réutilisé." },
    { q: "Est-ce gratuit ?", a: "Entièrement gratuit, sans filigrane et sans inscription." },
    { q: "Pourquoi mon iPhone enregistre-t-il les photos en HEIC ?", a: "Parce que ce format loge environ deux fois plus d'image que le JPG dans le même espace, ce qui compte quand un téléphone contient des milliers de photos. Apple a changé le réglage par défaut avec iOS 11. Le gain est réel ; c'est le coût en compatibilité qui vous amène ici." },
    { q: "Comment empêcher mon iPhone d'utiliser le HEIC ?", a: "Ouvrez Réglages, puis Appareil photo, puis Formats, et choisissez « Le plus compatible ». Les nouvelles photos seront enregistrées en JPG à partir de là. Les photos que vous avez déjà ne sont pas converties : il faudra encore les convertir." },
    { q: "Pourquoi Windows n'ouvre-t-il pas mes fichiers HEIC ?", a: "Le HEIC repose sur le codec vidéo HEVC/H.265, couvert par des pools de brevets : Windows ne fournit donc pas de décodeur par défaut. Microsoft propose des extensions HEVC dans le Store, parfois payantes. Convertir évite complètement le problème." },
    { q: "Faut-il convertir en JPG ou en PNG ?", a: "En JPG pour presque tout : il est bien plus léger et accepté partout. Choisissez le PNG si vous voulez une copie sans perte pour la retouche ou l'archivage, en acceptant un fichier plusieurs fois plus lourd. Une page « HEIC en PNG » est dédiée à ce cas." },
    { q: "La date et le lieu de ma photo sont-ils conservés ?", a: "Par défaut, oui : le convertisseur copie les métadonnées EXIF (y compris la date de prise de vue et les coordonnées GPS, si la photo en contient) dans le nouveau fichier. Cochez « Supprimer les métadonnées » pour tout retirer avant de partager l'image ; les photos de téléphone enregistrent presque toujours l'endroit où elles ont été prises. Pour consulter ces données d'abord, l'outil « Voir les métadonnées d'une photo » les lit directement dans un HEIC, sans conversion, dans votre navigateur." },
    { q: "Puis-je convertir toute une pellicule ?", a: "Oui. Ajoutez autant de fichiers .heic ou .heif que vous voulez : ils sont convertis à la suite et renvoyés dans un seul ZIP." },
    { q: "Comment convertir HEIC en JPG sur un PC Windows ?", a: "Ouvrez cette page dans votre navigateur, glissez vos fichiers .heic dans la zone d'import et cliquez sur « Convertir » : aucun logiciel ni codec à installer. Les JPG obtenus s'ouvrent dans la visionneuse Photos, Word, PowerPoint et tous les autres programmes." },
  ],

  security:
    "La conversion HEIC s'effectue sur notre serveur avec le logiciel libre ImageMagick. Les résultats ne sont conservés que brièvement, derrière un lien de téléchargement privé, et supprimés automatiquement dans l'heure. Nous ne partageons ni ne réutilisons jamais vos photos.",

  ui: {
    // HeicTool.tsx (shared with /heic-to-png — keep these in sync there)
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
