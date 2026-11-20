import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/supprimer-metadonnees.
 *
 * Primary query « Supprimer les métadonnées »; secondary « supprimer les
 * données EXIF », « supprimer la localisation d'une photo ». Privacy / RGPD
 * angle added as an FAQ — the processing facts stay exactly as on the English
 * page.
 */
const content: ToolPageContent = {
  toolId: "remove-exif",
  locale: "fr",
  name: "Supprimer les métadonnées",
  tagline:
    "Supprimez les données EXIF et les autres métadonnées (position GPS comprise) de vos images en ligne avant de les partager. Traitement par lot, gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Supprimer les métadonnées – effacer EXIF et GPS | oMyImage",
  metaDescription:
    "Supprimer les métadonnées d'une photo : effacez les données EXIF, la position GPS, l'appareil et la date de vos images, même par lot. Gratuit et privé.",

  intro:
    "Protégez votre vie privée avant de partager des photos. L'outil Supprimer les métadonnées d'oMyImage efface les métadonnées cachées de vos images (position GPS, modèle d'appareil et d'objectif, logiciel et dates) en les réencodant directement dans votre navigateur. Nettoyez une seule image ou tout un lot et téléchargez le résultat aussitôt. Rien n'est envoyé sur un serveur : vos photos et leurs données restent privées.",

  sections: [
    {
      heading: "Ce que transportent vos photos",
      id: "what",
      body: [
        "Chaque photo prise par un téléphone ou un appareil photo arrive avec un bloc de métadonnées. La norme EXIF couvre les champs techniques (vitesse d'obturation, ouverture, ISO, focale, modèle d'appareil), utiles et inoffensifs. C'est ce qui les accompagne qui mérite réflexion.",
        "Les coordonnées GPS sont l'élément sensible. Si la localisation était activée, le fichier enregistre l'endroit de la prise de vue à quelques mètres près, avec la date et l'heure exactes. Une photo prise dans votre salon contient l'adresse de votre domicile sous une forme que n'importe quel logiciel lit instantanément.",
        "Et ce n'est pas tout : des numéros de série qui relient des photos distinctes au même appareil, des champs propriétaire et copyright que certains appareils remplissent automatiquement, l'historique de retouche de certaines applications et, sur certains appareils, une miniature intégrée de l'original, qui survit parfois au recadrage et montre ce que vous aviez coupé.",
      ],
    },
    {
      heading: "Où se situe vraiment le risque",
      id: "risk",
      body: [
        "Les grands réseaux sociaux suppriment les métadonnées à l'import : une photo publiée dans un fil public est donc généralement propre. Cela crée un faux sentiment de sécurité, car les endroits où les photos divulguent le plus souvent une localisation sont ceux auxquels personne ne pense.",
        "Les messages privés et les messageries transmettent souvent le fichier d'origine. C'est aussi le cas des pièces jointes d'e-mails, des liens de stockage en ligne, des envois sur des forums et des annonces de petites annonces, des images envoyées à un service d'impression et de tout ce que vous hébergez sur votre propre site. Vendre un meuble en ligne avec des photos prises chez soi est le cas d'école : l'annonce est anonyme, le fichier ne l'est pas.",
        "L'autre voie négligée est professionnelle. Les photos fournies à un client, un journaliste, un assureur ou dans le cadre d'une procédure judiciaire transportent ce qu'elles transportent, et le destinataire peut le lire, que ce soit voulu ou non.",
      ],
    },
    {
      heading: "L'orientation reste correcte",
      id: "orientation",
      body: [
        "Un champ EXIF fait un vrai travail : la balise d'orientation. Le capteur d'un téléphone est fixe ; quand vous tournez le téléphone, l'image est enregistrée de côté et une balise indique dans quel sens l'afficher.",
        "Beaucoup d'outils de suppression des métadonnées jettent cette consigne avec tout le reste, et une photo qui s'affichait correctement partout apparaît soudain couchée. Rien n'est corrompu : les pixels ont toujours été de côté, c'est la note qui l'expliquait qui a disparu.",
        "Cet outil évite ce piège : l'orientation indiquée par la balise est d'abord appliquée aux pixels, et ce n'est qu'ensuite que les métadonnées sont supprimées. Le résultat est enregistré dans le bon sens, sans besoin de consigne, et s'affiche donc droit partout.",
      ],
    },
    {
      heading: "Comment la suppression des données EXIF fonctionne ici",
      id: "how",
      body: [
        "L'image est décodée sur un canvas puis réencodée à partir de ces pixels bruts. Un canvas ne connaît pas la notion de métadonnées, donc rien n'est transmis : le fichier obtenu contient l'image et rien d'autre. La suppression est exhaustive par construction, et non parce qu'on tiendrait à jour une liste de champs à effacer.",
        "Tout se passe dans votre navigateur, ce qui compte vu l'objectif. Envoyer une photo sur un serveur pour en retirer la localisation irait plutôt à l'encontre du but recherché ; ici, le fichier ne quitte jamais votre appareil, et il n'existe nulle part de copie conservant les coordonnées que vous vouliez supprimer.",
        "Les lots sont traités de la même façon et rendus dans un seul ZIP, ce qui est le cas habituel quand on prépare une série de photos pour une annonce ou qu'on nettoie un dossier avant de le partager.",
      ],
    },
  ],

  howToTitle: "Comment supprimer les données EXIF d'une image",
  steps: [
    { title: "Importer", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Choisir la sortie", description: "Conservez le format d'origine ou convertissez, et réglez la qualité pour le JPG et le WEBP." },
    { title: "Nettoyer et télécharger", description: "Cliquez sur « Supprimer les métadonnées et télécharger » : une image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "shield", title: "Supprime GPS et données de l'appareil", description: "Retire les données EXIF, la position GPS, l'appareil, l'objectif et les dates en réencodant entièrement les pixels." },
    { icon: "burst_mode", title: "Nettoyage par lot", description: "Nettoyez d'un coup tout un lot d'images JPG, PNG ou WEBP et téléchargez-les dans un ZIP." },
    { icon: "lock", title: "100 % privé", description: "Tout fonctionne dans votre navigateur : vos images ne sont jamais envoyées sur un serveur." },
  ],

  faqs: [
    { q: "Quelles métadonnées sont supprimées ?", a: "Toutes les données EXIF, IPTC et XMP intégrées, dont la position GPS, le modèle d'appareil et d'objectif et la date de prise de vue : le fichier obtenu ne conserve que les pixels." },
    { q: "La qualité de l'image diminue-t-elle ?", a: "L'image est réencodée : réglez la qualité sur 100 % pour un résultat pratiquement identique. La valeur par défaut de 95 % est un compromis sûr." },
    { q: "Puis-je nettoyer plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : une seule image se télécharge directement, plusieurs images se téléchargent ensemble dans un ZIP." },
    { q: "L'outil est-il gratuit et privé ?", a: "Oui. Sans inscription et sans filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "Que contiennent exactement les données EXIF ?", a: "Bien plus que ce que la plupart des gens imaginent : des coordonnées GPS précises à quelques mètres, la date et l'heure exactes, le modèle et le numéro de série de l'appareil ou du téléphone, l'objectif et les réglages d'exposition et, sur certains appareils, le nom du propriétaire, un champ copyright et une miniature de l'image d'origine." },
    { q: "Les réseaux sociaux suppriment-ils les EXIF automatiquement ?", a: "Les grands réseaux le font généralement à l'import, mais il ne faut pas compter dessus. Messages privés, liens de stockage en ligne, pièces jointes d'e-mails, forums, sites de petites annonces et sites personnels transmettent souvent le fichier tel quel, et ce sont justement les endroits où l'on partage des photos d'objets situés à son domicile." },
    { q: "Supprimer les EXIF change-t-il l'apparence de la photo ?", a: "Pas son orientation. La balise d'orientation est d'abord appliquée aux pixels et les métadonnées ne sont supprimées qu'ensuite : une photo qui s'affichait droite le reste. Le seul autre changement est le réencodage, que règle le paramètre de qualité." },
    { q: "Cela supprime-t-il un filigrane invisible ou un code de traçage ?", a: "Non. L'outil efface les champs de métadonnées standard. Les marques stéganographiques intégrées dans les pixels eux-mêmes sont une tout autre chose et survivent à la suppression des métadonnées ; elles survivraient d'ailleurs à la plupart des retouches." },
    { q: "Puis-je récupérer les métadonnées ensuite ?", a: "Pas à partir du fichier nettoyé. Gardez l'original si la date ou le lieu de prise de vue compte pour vous : pour organiser une photothèque, pour un dossier d'assurance, ou simplement pour vous souvenir de l'endroit où une photo a été prise." },
    { q: "Comment vérifier d'abord ce que contient ma photo ?", a: "Utilisez l'outil « Voir les métadonnées d'une photo ». Il lit toutes les balises de votre fichier, y compris les coordonnées GPS affichées sur une carte, entièrement dans votre navigateur. Regarder avant de supprimer vaut généralement l'étape supplémentaire." },
    { q: "Supprimer les métadonnées aide-t-il à respecter le RGPD ?", a: "Cela y contribue. Une position GPS ou un numéro de série d'appareil associés à une personne peuvent constituer des données personnelles : les retirer avant de publier ou de transmettre des photos limite ce que vous divulguez. Et comme le nettoyage se fait dans votre navigateur, les images elles-mêmes ne sont confiées à aucun serveur tiers." },
  ],

  security:
    "Vos images restent privées. La suppression des métadonnées se fait entièrement dans votre navigateur : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // RemoveExifTool.tsx
    "Please select image files.": "Sélectionnez des fichiers image.",
    "Couldn't process the images.": "Impossible de traiter les images.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "Clear files": "Effacer les fichiers",
    "Remove": "Retirer",
    "Metadata settings": "Réglages des métadonnées",
    "Output Settings": "Réglages de sortie",
    "Format": "Format", // i18n-same
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    "Strips EXIF, GPS location and camera data by re-encoding the pixels — all in your browser.":
      "Supprime les données EXIF, la position GPS et les données de l'appareil en réencodant les pixels, le tout dans votre navigateur.",
    "Clean": "Nettoyer",
    "Cleaning…": "Nettoyage…",
    "Remove metadata from {n}": "Supprimer les métadonnées de {n} images",
    "Remove metadata & download": "Supprimer les métadonnées et télécharger",
    "Removed metadata from 1 image.": "Métadonnées supprimées de 1 image.",
    "Removed metadata from {n} images.": "Métadonnées supprimées de {n} images.",
    "metadata removed": "métadonnées supprimées",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
  },
};

export default content;
