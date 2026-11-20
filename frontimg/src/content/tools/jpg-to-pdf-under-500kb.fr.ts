import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/jpg-en-pdf-moins-de-500ko (variant of image-to-pdf,
 * 500 Ko limit on the whole PDF). Target query: «JPG en PDF de moins de
 * 500 Ko». Angle: LONGS documents — dossiers de plusieurs pages, notes de
 * frais, devoirs manuscrits — et envoi par e-mail. Two extra FAQs keep the
 * page above the 900-word floor (German rendered only 891).
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-500kb",
  locale: "fr",
  name: "JPG en PDF de moins de 500 Ko",
  tagline:
    "Réunissez de nombreuses photos ou scans dans un seul PDF de moins de 500 Ko — dossiers de plusieurs pages, reçus, rapports et devoirs manuscrits — prêt à déposer ou à envoyer par e-mail. Pages lisibles, dans votre navigateur, rien n'est envoyé.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG en PDF de moins de 500 Ko – longs documents | oMyImage",
  metaDescription:
    "Convertir des JPG en PDF de moins de 500 Ko gratuitement : jusqu'à dix pages, reçus et devoirs manuscrits lisibles, prêts à envoyer par e-mail.",

  intro:
    "500 Ko est la limite habituelle quand un portail ou un service veut un document complet d'un seul tenant : un dossier de dix pages, un mois de notes de frais, un devoir manuscrit, un rapport illustré de photos. Assemblées directement depuis un téléphone, ces pages donnent un PDF de 20 ou 30 Mo. Cette page crée le PDF et, s'il dépasse 500 Ko, recompresse les images juste assez pour que le fichier entier rentre, en gardant chaque page aussi lisible que la limite le permet.",

  sections: [
    {
      heading: "De longs documents dans un seul fichier",
      id: "long",
      body: [
        "À 500 Ko, cinq pages de texte dactylographié gardent environ 800 × 1100 pixels chacune, et dix pages environ 600 × 800 — assez pour que des caractères de taille normale et une écriture manuscrite restent lisibles à un zoom normal. Le budget est réparti selon la surface de chaque image, si bien que les pages sortent de façon homogène.",
        "Jusqu'à une dizaine de pages, la lecture reste confortable ; au-delà, découpez le document en deux PDF ou demandez si le portail accepte un fichier plus lourd.",
      ],
    },
    {
      heading: "Tickets de caisse et longs reçus",
      id: "receipts",
      body: [
        "Un ticket de caisse est long et étroit, et une page A4 en laisserait la plus grande partie vide. Choisissez « Adapter à l'image » comme format de page : chaque ticket devient une page exactement à sa forme, facile à lire sur un téléphone et facile à contrôler pour un service comptable.",
        "Plusieurs reçus peuvent aussi partager une page A4 : réglez « Images par page » sur 2 ou 4.",
      ],
    },
    {
      heading: "Envoyer le PDF par e-mail",
      id: "email",
      body: [
        "La plupart des messageries limitent les pièces jointes à 20–25 Mo environ par message, et beaucoup de boîtes professionnelles acceptent bien moins. Un PDF de moins de 500 Ko passe partout, s'ouvre instantanément sur un téléphone et n'encombre pas la boîte du destinataire — tout en s'imprimant lisiblement en A4.",
      ],
    },
    {
      heading: "Gardez les originaux",
      id: "originals",
      body: [
        "Le PDF compressé est une copie destinée à l'envoi et au dépôt. Conservez les photos d'origine : si l'on vous demande plus tard une version plus nette d'une page, ou une autre limite, vous pourrez la refaire à partir des originaux plutôt que du PDF compressé.",
      ],
    },
    {
      heading: "Devoirs et travaux manuscrits",
      id: "assignments",
      body: [
        "Les établissements scolaires et universitaires collectent souvent les devoirs manuscrits sous forme d'un seul PDF avec une limite de poids. Photographiez chaque page à la lumière du jour, bien à la verticale, et ajoutez les photos dans l'ordre des pages — l'aperçu montre chaque page avant que vous ne créiez le fichier.",
        "Un stylo foncé se lit bien mieux qu'un crayon une fois les pages compressées. Si une page sort pâle, reprenez seulement celle-là ; inutile de recommencer les autres.",
      ],
    },
    {
      heading: "Des photos de tailles différentes",
      id: "mixed",
      body: [
        "Des pages photographiées à des distances différentes, ou avec des téléphones différents, ont des tailles en pixels très variables. Sur des pages A4 ou Letter, elles sont toutes mises à l'échelle pour remplir la même page, et le budget est réparti selon la surface de chaque photo : une photo énorme n'écrase pas les autres.",
      ],
    },
  ],

  howToTitle: "Comment convertir des JPG en PDF de moins de 500 Ko",
  steps: [
    { title: "Ajoutez toutes les pages", description: "Ajoutez les photos ou scans de chaque page : JPG, PNG, WEBP ou GIF." },
    { title: "Ordonnez et mettez en page", description: "Organisez les pages et choisissez le format ; la limite de 500 Ko est déjà réglée." },
    { title: "Créez le PDF", description: "Téléchargez un seul PDF de moins de 500 Ko, prêt à déposer ou à envoyer par e-mail." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Beaucoup de pages, un petit fichier", description: "Jusqu'à dix pages dans un seul PDF de moins de 500 Ko." },
    { icon: "receipt_long", title: "Les reçus y trouvent leur place", description: "Des pages « Adapter à l'image » pour les longs tickets, ou plusieurs reçus par page A4." },
    { icon: "lock", title: "Confidentiel", description: "Les pages sont compressées et assemblées dans votre navigateur, jamais envoyées." },
  ],

  faqs: [
    { q: "Comment convertir des JPG en PDF de moins de 500 Ko ?", a: "Ajoutez toutes les images, mettez-les dans l'ordre et cliquez sur « Créer le PDF ». La limite de 500 Ko est déjà réglée ; les images ne sont compressées que dans la mesure nécessaire." },
    { q: "Combien de pages tiennent dans un PDF de 500 Ko ?", a: "Cinq pages restent parfaitement lisibles et dix conviennent pour des caractères de taille normale. Au-delà, découpez le document." },
    { q: "Comment faire un PDF de reçus ?", a: "Ajoutez les photos des reçus et choisissez « Adapter à l'image » comme format de page, ou 2 à 4 images par page A4." },
    { q: "Puis-je envoyer un PDF de 500 Ko par e-mail ?", a: "Oui, avec n'importe quelle messagerie : il reste très loin de toutes les limites de pièces jointes." },
    { q: "L'écriture manuscrite restera-t-elle lisible ?", a: "Oui, jusqu'à une dizaine de pages d'écriture normale. Photographiez chaque page à la lumière du jour pour un résultat plus net." },
    { q: "500 Ko, est-ce la même chose que 0,5 Mo ?", a: "Oui, 500 Ko correspondent à 500 000 octets. Le PDF passe aussi les portails qui comptent 1 Ko comme 1 024 octets." },
    { q: "Mes pages sont-elles envoyées sur un serveur ?", a: "Non. Le PDF est créé entièrement dans votre navigateur." },
    { q: "Puis-je combiner des photos prises avec des téléphones différents ?", a: "Oui. Chaque photo est ajustée au même format de page, quelle que soit sa résolution, et la limite est partagée équitablement entre elles." },
    { q: "Et si mon document dépasse dix pages ?", a: "Le PDF est quand même créé, avec moins de détails par page, et l'outil vous prévient s'il n'a pas pu descendre sous 500 Ko. Pour un long rapport, faites plutôt deux PDF ou demandez si une limite plus élevée est acceptée." },
    { q: "Puis-je mélanger des pages A4 et des tickets de caisse dans le même PDF ?", a: "Oui. Avec un format A4, chaque image est centrée sur sa page ; avec « Adapter à l'image », chaque page prend la forme de sa photo. Choisissez le réglage qui rend le dossier le plus facile à lire." },
  ],

  security:
    "Les photos de vos pages sont compressées et réunies en PDF sur votre appareil, dans votre navigateur. Dossiers, reçus et devoirs ne sont envoyés ni conservés nulle part.",
};

export default content;
