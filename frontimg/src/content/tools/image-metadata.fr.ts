import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/voir-metadonnees-photo.
 *
 * Primary query « Voir les métadonnées d'une photo »; secondary « EXIF »,
 * « données EXIF », « lire les EXIF ». The sister tool remove-exif is referred
 * to by its French name « Supprimer les métadonnées ».
 */
const content: ToolPageContent = {
  toolId: "image-metadata",
  locale: "fr",
  name: "Voir les métadonnées d'une photo",
  tagline:
    "Consultez en ligne les métadonnées EXIF d'une image : appareil, objectif, exposition, position GPS et date. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Voir les métadonnées d'une photo – EXIF en ligne | oMyImage",
  metaDescription:
    "Voir les métadonnées d'une photo en ligne : lisez les données EXIF (appareil, objectif, exposition, date, position GPS), HEIC compris. Gratuit et privé.",

  intro:
    "Découvrez l'histoire cachée derrière n'importe quelle photo. L'outil Voir les métadonnées d'une photo d'oMyImage lit les données EXIF intégrées à votre image directement dans votre navigateur (appareil et objectif, ouverture, vitesse d'obturation, ISO, date de prise de vue et même position GPS) et les présente clairement, avec la liste complète des balises à portée de clic. Rien n'est envoyé sur un serveur, votre photo reste donc privée.",

  sections: [
    {
      heading: "Ce que sont les métadonnées et d'où elles viennent",
      id: "what",
      body: [
        "Chaque appareil photo écrit un bloc d'informations dans le fichier, à côté de l'image elle-même. La norme EXIF en définit l'essentiel, et elle a été conçue pour les photographes : un relevé exact de la façon dont chaque vue a été exposée, réellement utile quand on cherche à comprendre pourquoi une photo est réussie et une autre non.",
        "Les téléphones récents en ajoutent bien davantage : coordonnées GPS, altitude et orientation de la boussole si la localisation est activée ; le modèle de l'appareil et souvent un numéro de série ; la version du logiciel qui a traité l'image. Certains appareils remplissent les champs propriétaire et copyright à partir de réglages configurés une fois puis oubliés.",
        "Les logiciels de retouche ajoutent leurs propres entrées, si bien qu'un fichier peut accumuler un historique partiel de ce qu'on lui a fait et quand. Rien de tout cela n'est visible quand on regarde l'image, et tout cela voyage avec le fichier.",
      ],
    },
    {
      heading: "Lire les données EXIF avant de partager",
      id: "why",
      body: [
        "La raison la plus pratique de regarder, c'est de savoir ce que vous vous apprêtez à divulguer. Une photo prise chez vous contient votre adresse ; une photo prise au bureau, celle de votre employeur. Vendre un objet en ligne, publier sur un forum, envoyer un fichier à un inconnu : à chaque fois, l'image est anonyme, mais pas ses métadonnées.",
        "Il existe aussi des usages constructifs. Les photographes étudient les données d'exposition pour apprendre de leurs propres résultats ou comprendre comment quelqu'un d'autre a obtenu une image. Quiconque organise une grande photothèque s'appuie sur la date de prise de vue pour trier des images dont les noms de fichiers ont depuis longtemps perdu tout ordre. Les dossiers d'assurance ou juridiques dépendent souvent du moment et du lieu où une photo a été prise.",
        "Et quand vous recevez une image, les métadonnées sont une première vérification de sa provenance, mais une vérification fragile, puisque tout ce qu'elles contiennent peut être modifié.",
      ],
    },
    {
      heading: "Ce que les métadonnées ne peuvent pas trancher",
      id: "limits",
      body: [
        "Les métadonnées sont des données, pas des preuves. Chaque champ peut être modifié avec des outils librement disponibles : une date ou un lieu prouve seulement que quelqu'un a écrit ces valeurs dans le fichier. Considérez ce que vous trouvez comme une piste plutôt que comme une conclusion.",
        "Leur absence prouve encore moins. Une photo sans métadonnées est très probablement passée par une plateforme qui les supprime, ou c'est une capture d'écran, ou elle a été réenregistrée par un logiciel de retouche, et rien de tout cela n'implique qu'on ait voulu cacher quelque chose.",
        "La seule chose que les métadonnées établissent de façon fiable, c'est ce qu'un fichier divulgue actuellement. C'est précisément la question à laquelle cet outil répond bien, et c'est généralement celle qui compte avant d'envoyer quelque chose.",
      ],
    },
    {
      heading: "Lecture en local, HEIC compris",
      id: "privacy",
      body: [
        "Le fichier est analysé dans votre navigateur et n'est jamais envoyé sur un serveur, ce qui est la bonne façon de faire pour un outil dont tout l'objet est d'examiner des informations potentiellement sensibles. Envoyer une photo à un serveur pour découvrir si elle révèle votre adresse serait un drôle d'échange.",
        "Les fichiers HEIC et HEIF fonctionnent ici, même si le site ne peut pas les afficher dans le navigateur. Les métadonnées se trouvent dans le conteneur et non dans les pixels compressés : l'analyseur lit les balises sans jamais toucher au flux HEVC. C'est pourquoi cette lecture fonctionne en local, alors que la conversion HEIC doit passer par un serveur.",
      ],
    },
  ],

  howToTitle: "Comment voir les métadonnées d'une photo",
  steps: [
    { title: "Importer", description: "Sélectionnez une photo, ou glissez-déposez-la dans l'espace de travail." },
    { title: "Lire les données", description: "Consultez l'appareil, l'objectif, l'exposition, la date et la position GPS extraits des données EXIF du fichier." },
    { title: "Tout explorer", description: "Dépliez la liste complète des métadonnées pour inspecter chaque balise intégrée." },
  ],

  features: [
    { icon: "photo_camera", title: "Lecture EXIF complète", description: "Marque et modèle de l'appareil, objectif, ouverture, vitesse, ISO, focale, dates et plus encore, regroupés clairement." },
    { icon: "location_on", title: "Position GPS", description: "Si la photo est géolocalisée, consultez ses coordonnées et ouvrez l'emplacement exact sur une carte." },
    { icon: "lock", title: "100 % privé", description: "Les métadonnées sont lues entièrement dans votre navigateur : votre photo n'est jamais envoyée sur un serveur." },
  ],

  faqs: [
    { q: "Quelles métadonnées l'outil peut-il lire ?", a: "Les données EXIF, notamment l'appareil et l'objectif, les réglages d'exposition, la date de prise de vue, l'orientation, l'espace colorimétrique et les coordonnées GPS lorsqu'elles sont présentes." },
    { q: "Pourquoi mon image n'affiche-t-elle aucune métadonnée ?", a: "Elles ont peut-être été supprimées (par exemple par un réseau social), ou le format ne stocke pas d'EXIF : la plupart des PNG et des captures d'écran n'en ont aucune." },
    { q: "Puis-je voir la position GPS ?", a: "Oui. Les photos géolocalisées affichent leurs coordonnées avec un lien pour voir l'emplacement sur une carte." },
    { q: "L'outil est-il gratuit et privé ?", a: "Oui. Sans inscription, et la photo est lue localement dans votre navigateur : rien n'est envoyé sur un serveur." },
    { q: "Que peuvent révéler les métadonnées d'une photo ?", a: "Le moment de la prise de vue à la seconde près, le lieu à quelques mètres près si la localisation était activée, l'appareil ou le téléphone utilisé, modèle et souvent numéro de série compris, et tous les réglages d'exposition : vitesse, ouverture, ISO, focale, flash. Certains fichiers contiennent aussi des champs propriétaire et copyright, ainsi qu'un historique de retouche." },
    { q: "Puis-je savoir si une photo a été retouchée ?", a: "Parfois. Les logiciels de retouche inscrivent souvent leur propre nom dans les métadonnées, et la date de modification diffère souvent de la date de prise de vue. Mais les métadonnées se modifient très facilement : leur absence ne prouve rien, et leur présence est un indice plutôt qu'une preuve." },
    { q: "Pourquoi ma photo n'a-t-elle aucune métadonnée ?", a: "Le plus probable, c'est qu'elle est déjà passée par quelque chose qui les a supprimées. Les réseaux sociaux les retirent à l'import, les captures d'écran n'en ont jamais eu, et beaucoup de messageries réencodent les images à l'envoi. Retoucher puis réenregistrer une image dans certains logiciels les efface aussi." },
    { q: "L'outil lit-il les fichiers HEIC de mon iPhone ?", a: "Oui. Il extrait les métadonnées directement du conteneur sans décoder les pixels compressés en HEVC : cela fonctionne donc dans votre navigateur, même si l'affichage d'un HEIC n'y est pas possible. Réglages de l'appareil, dates et GPS se lisent normalement." },
    { q: "Comment supprimer ce que je trouve ici ?", a: "Utilisez l'outil « Supprimer les métadonnées ». Il réencode l'image à partir des pixels bruts, ce qui ne laisse aucune métadonnée derrière lui. Lisez d'abord, supprimez ensuite : savoir ce qu'un fichier contenait est souvent plus utile que de tout effacer à l'aveugle." },
    { q: "Quelle est la précision des données GPS ?", a: "En général quelques mètres en extérieur, avec une bonne réception satellite. En intérieur, ou en zone urbaine dense où le téléphone se rabat sur le Wi-Fi et les antennes relais, l'écart peut atteindre des dizaines ou des centaines de mètres. Dans tous les cas, c'est largement assez précis pour identifier un immeuble." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non. La lecture des métadonnées se fait entièrement dans votre navigateur : vos photos et les informations qu'elles contiennent, y compris votre position, ne quittent jamais votre appareil. Aucune donnée personnelle n'est collectée, ce qui simplifie aussi les choses au regard du RGPD." },
  ],

  security:
    "Votre photo reste privée. Les métadonnées EXIF sont lues entièrement dans votre navigateur : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // ImageMetadataTool.tsx
    "Please select an image file.": "Sélectionnez un fichier image.",
    "Select an image": "Sélectionner une image",
    "or drop a JPG, PNG, TIFF or HEIC photo here": "ou déposez ici une photo JPG, PNG, TIFF ou HEIC",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "Metadata": "Métadonnées",
    "Metadata of {name}": "Métadonnées de {name}",
    "Metadata options": "Options des métadonnées",
    "All metadata ({n})": "Toutes les métadonnées ({n})",
    "No EXIF block in this file — messaging apps and social networks usually strip it. The file and image details below are read from the image itself, so they are still accurate.":
      "Aucun bloc EXIF dans ce fichier : les messageries et les réseaux sociaux le suppriment généralement. Les informations sur le fichier et l'image ci-dessous sont lues dans l'image elle-même, elles restent donc exactes.",
    "Location": "Position",
    "Latitude": "Latitude", // i18n-same
    "Longitude": "Longitude", // i18n-same
    "View on map": "Voir sur la carte",
    "Raw header": "En-tête brut",
    "Raw header (first 128 bytes)": "En-tête brut (128 premiers octets)",
    "bytes": "octets",
    "image": "image", // i18n-same
    "Unknown": "Inconnu",
    "unknown": "inconnu",
    "Copy": "Copier",
    "Copy all": "Tout copier",
    "Copied to clipboard.": "Copié dans le presse-papiers.",
    "Couldn't copy to the clipboard.": "Impossible de copier dans le presse-papiers.",
    "Downloaded metadata as JSON.": "Métadonnées téléchargées en JSON.",
    "Downloaded metadata as TXT.": "Métadonnées téléchargées en TXT.",
    "Generated by oMyImage": "Généré par oMyImage",
    "Extracted automatically in your browser. It may be neither complete nor":
      "Extrait automatiquement dans votre navigateur. Peut n'être ni complet ni",
    "accurate — metadata can be edited or removed at any point in a file's life.":
      "exact : les métadonnées peuvent être modifiées ou supprimées à tout moment de la vie d'un fichier.",
  },
};

export default content;
