import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/image-en-pdf. Structure lives in ToolPageShell.
 *
 * Target query "image en PDF" (49.5K FR per month). "PNG en PDF" (60.5K),
 * "convertir JPG en PDF" (40.5K), "JPG en PDF" (33.1K) and "photo en PDF"
 * (27.1K) are as big or bigger, so they go into the metaTitle, intro, a
 * section heading and the FAQs. Submission cases are written for France,
 * Belgium, Switzerland and Québec in general terms (job applications,
 * administrative procedures, insurers, schools) — no invented limits for named
 * institutions. A4 is the default sheet; Letter is named for Québec / North
 * America. Addressed in "vous".
 *
 * Paper formats stay as they are (A4, Letter, Legal — conversion.md §5);
 * PAGE_SIZES, ORIENTATIONS, PER_IMAGE and FIT_LABELS are module scope, keys
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "image-to-pdf",
  locale: "fr",
  name: "Image en PDF",
  tagline:
    "Convertissez vos images JPG, PNG et WEBP en un seul PDF en ligne : réorganisez les pages et choisissez le format, l'orientation, la mise en page et les marges. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },
  variantsHeading: "Convertir en un PDF sous une limite de poids",

  metaTitle: "Image en PDF – convertir JPG, PNG en PDF gratuit | oMyImage",
  metaDescription:
    "Image en PDF gratuit : convertissez JPG, PNG ou photos en un seul PDF, réorganisez les pages, choisissez A4 ou la taille de l'image. Sans inscription ni envoi.",

  intro:
    "Vous devez envoyer plusieurs photos ou scans sous la forme d'un seul document ? L'outil « Image en PDF » d'oMyImage réunit vos images JPG, PNG et WEBP dans un PDF unique, que vous souhaitiez convertir une photo en PDF, passer un PNG en PDF ou convertir tout un lot de JPG en PDF. Réorganisez les pages, adaptez chaque page à son image ou choisissez A4, Letter, Legal, A3 ou A5, placez jusqu'à neuf images par page et réglez l'ajustement, la marge et le fond. Le PDF est entièrement assemblé dans votre navigateur : vos images restent privées, sans inscription ni filigrane.",

  sections: [
    {
      heading: "Pourquoi convertir des images en PDF",
      id: "why",
      body: [
        "Un PDF transforme un dossier de fichiers épars en un seul document, avec un ordre fixe et un rendu prévisible. C'est essentiel dès qu'il s'agit de remettre un document et pas seulement de le partager : candidatures, notes de frais, dossiers d'assurance, devoirs scolaires, démarches administratives en ligne et pièces juridiques sont presque toujours attendus sous la forme d'un seul PDF, et une archive ZIP pleine de JPG est souvent refusée d'emblée.",
        "Le PDF règle aussi un problème d'ordre. Des images envoyées en pièces jointes séparées arrivent dans l'ordre qu'il plaît au logiciel de messagerie, et les gestionnaires de fichiers rangent « IMG_10 » avant « IMG_2 ». Un PDF fige la séquence une fois pour toutes : votre destinataire lit les pages dans l'ordre que vous avez choisi.",
        "Enfin, un PDF s'imprime de façon prévisible. Le format de page, l'orientation et les marges sont fixés à la création du document, au lieu de dépendre de la boîte de dialogue d'impression qu'ouvrira votre destinataire.",
      ],
    },
    {
      heading: "JPG en PDF : format de page, orientation et ajustement",
      id: "layout",
      body: [
        "L'A4 est la norme presque partout hors d'Amérique du Nord, en France, en Belgique comme en Suisse ; le Letter, un peu plus large et plus court, est le format par défaut aux États-Unis et au Canada, Québec compris. Choisir celui qu'attend l'imprimante de votre destinataire évite la mise à l'échelle et les coupures qui surviennent quand un document Letter arrive dans un bac A4.",
        "« Adapter à l'image » donne à chaque page la taille de son image : c'est le bon choix pour les documents lus uniquement à l'écran, les recueils de photos et tout ce qui mélange les orientations. Vous évitez ainsi les bandes blanches qui apparaissent quand une photo paysage est centrée sur une page portrait. L'orientation automatique est un juste milieu : elle garde un format de feuille standard, mais fait pivoter chaque page selon son image, si bien que les photos paysage ne sont plus encadrées de vide.",
        "Le mode d'ajustement décide de ce qui se passe quand l'image et la page ne concordent toujours pas. « Ajuster » montre toute l'image et accepte des marges vides ; « Remplir » couvre la feuille bord à bord et rogne ce qui dépasse, idéal pour des pages photo à fond perdu ; « Étirer » force un ajustement exact et doit être réservé aux images dont les proportions sont déjà proches, car il déforme visiblement tout le reste.",
        "Placer plusieurs images par page transforme le même outil en planche contact ou en support à distribuer. Avec 2 images, la page est partagée selon son grand côté, tandis que 4, 6 et 9 images forment une grille dans le sens de lecture ; la marge devient alors aussi l'espace entre les cases, en plus de la bordure extérieure.",
      ],
    },
    {
      heading: "Garder un poids de fichier raisonnable",
      id: "size",
      body: [
        "Le PDF pèse à peu près le poids des images que vous y mettez (elles sont intégrées telles quelles, sans recompression) : un document construit à partir de vingt photos de téléphone de 12 mégapixels atteindra donc plusieurs dizaines de mégaoctets, généralement bien au-delà de la limite de pièces jointes du portail auquel vous l'envoyez.",
        "La solution se trouve en amont. Redimensionnez les images à environ 1500 à 2000 pixels sur le grand côté, ce qui suffit largement pour la lecture à l'écran comme pour une impression ordinaire, et compressez-les avant de créer le PDF. Pour des documents texte photographiés, les passer d'abord en noir et blanc divise souvent encore le poids par deux, sans perte de lisibilité.",
      ],
    },
    {
      heading: "Tout se passe dans votre navigateur",
      id: "privacy",
      body: [
        "Le PDF est assemblé sur votre propre appareil grâce à une bibliothèque PDF en JavaScript : les images ne sont jamais envoyées sur un serveur. C'est bon à savoir vu ce que l'on convertit habituellement ici : passeports, relevés bancaires, documents médicaux, contrats et pièces d'identité sont exactement le genre de fichiers qui ne devraient pas transiter par le serveur de quelqu'un d'autre.",
        "Conséquence pratique : une fois la page chargée, l'outil fonctionne hors connexion, et les très gros lots ne sont limités que par la mémoire de votre appareil, pas par un plafond d'envoi.",
      ],
    },
  ],

  howToTitle: "Comment convertir des images en PDF",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez vos images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Organisez et réglez", description: "Réorganisez les pages avec les flèches, puis choisissez le format de page, l'orientation, le nombre d'images par page, l'ajustement, la marge et le fond." },
    { title: "Créez le PDF", description: "Cliquez sur « Créer le PDF » pour télécharger un seul document, mis en page exactement comme vous l'avez réglé." },
  ],

  features: [
    { icon: "reorder", title: "Réorganiser les pages", description: "Placez vos images dans l'ordre voulu grâce à de simples boutons haut/bas avant l'export." },
    { icon: "description", title: "Contrôle total de la page", description: "Adaptez chaque page à son image, ou utilisez A4, Letter, Legal, A3 ou A5 en orientation automatique, portrait ou paysage, avec une marge réglée en points." },
    { icon: "grid_view", title: "Plusieurs images par page", description: "Placez 1, 2, 4, 6 ou 9 images par page et choisissez si chacune est ajustée, rognée pour remplir ou étirée." },
    { icon: "lock", title: "100 % privé", description: "Le PDF est entièrement assemblé dans votre navigateur : vos images ne sont jamais envoyées." },
  ],

  faqs: [
    { q: "Puis-je réunir de nombreuses images dans un seul PDF ?", a: "Oui. Ajoutez autant d'images que vous voulez et classez-les dans l'ordre souhaité. Par défaut, chaque image occupe sa propre page, mais vous pouvez aussi en placer 2, 4, 6 ou 9 par page." },
    { q: "Quels formats d'image sont pris en charge ?", a: "JPG, PNG, WEBP, GIF et BMP. La transparence des PNG est conservée : c'est donc le fond de page que vous choisissez qui apparaît, ou aucun fond." },
    { q: "Comment convertir un PNG en PDF ?", a: "Exactement comme un JPG : importez le fichier PNG, choisissez le format de page et cliquez sur « Créer le PDF ». Les PNG sont intégrés sans perte, si bien que les captures d'écran et les graphiques restent parfaitement nets." },
    { q: "Puis-je choisir A4 ou Letter ?", a: "Oui : A4, Letter, Legal, A3 et A5, chacun en portrait, en paysage ou en automatique (la page prend alors la forme de l'image). Vous pouvez aussi choisir « Adapter à l'image » pour que chaque page ait la taille de son image." },
    { q: "Que font Ajuster, Remplir et Étirer ?", a: "« Ajuster » place l'image entière dans la page et laisse de l'espace vide là où les formes ne correspondent pas. « Remplir » couvre toute la page et rogne ce qui dépasse. « Étirer » déforme l'image pour remplir exactement la page ; ce n'est utile que lorsque les proportions sont déjà proches." },
    { q: "La création du PDF réduit-elle la qualité de mes images ?", a: "Non. Les fichiers JPG et PNG sont intégrés tels quels, sans recompression : les pages contiennent vos pixels d'origine. Seule exception, une photo portant une rotation EXIF doit être réenregistrée pour s'afficher dans le bon sens." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Le PDF est créé localement dans votre navigateur : vos images ne quittent jamais votre appareil." },
    { q: "Convertir un JPG en PDF est-il gratuit ?", a: "Entièrement gratuit, sans filigrane et sans inscription." },
    { q: "Quel format de page choisir ?", a: "A4 pour tout ce qui sera imprimé ou remis en France, en Belgique, en Suisse et dans la plupart des pays hors Amérique du Nord, Letter pour une impression au Québec ou aux États-Unis, et « Adapter à l'image » quand le PDF ne sera lu qu'à l'écran. Vous évitez ainsi les marges blanches qui apparaissent quand une photo paysage est posée sur une page portrait." },
    { q: "Puis-je choisir l'ordre des pages ?", a: "Oui : les images sont placées dans l'ordre où elles apparaissent dans la liste, et vous pouvez les réorganiser avant de créer le PDF. C'est surtout utile quand votre gestionnaire de fichiers les a triées comme du texte, ce qui place « page10 » avant « page2 »." },
    { q: "Le PDF sera-t-il beaucoup plus lourd que mes images ?", a: "À peine. Les images sont intégrées pratiquement telles quelles : le PDF pèse donc environ la somme de vos fichiers, plus une petite structure supplémentaire. Si le résultat est trop lourd, compressez ou redimensionnez d'abord les images : un PDF construit avec des photos de 4000 pixels est énorme, et inutilement pour une lecture à l'écran." },
    { q: "Puis-je faire un PDF à partir de photos de documents prises au téléphone ?", a: "Oui, c'est même l'un des usages les plus fréquents. Pour un meilleur résultat, photographiez chaque page bien de face avec un éclairage homogène, recadrez d'abord ce qui l'entoure, et pensez à passer les images dans l'outil « Photo en noir et blanc » : un document qui ressemble à un scan pèse bien moins lourd qu'une photo en couleur et se lit souvent mieux." },
    { q: "Le texte du PDF est-il consultable par recherche ?", a: "Non. Les pages sont des images : le PDF contient des photos du texte, pas le texte lui-même. Si vous devez rechercher ou copier les mots, passez d'abord les images dans l'outil « Image en texte » : il extrait le texte, que vous pouvez ensuite coller dans un document." },
    { q: "Le portail n'accepte que des PDF de 2 Mo maximum : que faire ?", a: "Utilisez la variante avec limite de poids : vous y saisissez le poids maximal du PDF en Ko ou en Mo, et les images ne sont compressées que dans la mesure nécessaire pour que tout le PDF tienne sous cette limite. Autre solution : réduire d'abord les images à environ 1500 pixels sur le grand côté. Vérifiez toujours la limite indiquée sur la page de la démarche." },
  ],

  security:
    "Vos images restent privées. Le PDF est entièrement assemblé dans votre navigateur : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // ImageToPdfTool.tsx + PagePreview.tsx
    "or drop JPG, PNG, WEBP or GIF images here": "ou déposez ici des images JPG, PNG, WEBP ou GIF",
    "Created a PDF with 1 page.": "PDF de 1 page créé.",
    "Created a PDF with {n} pages.": "PDF de {n} pages créé.",
    "Couldn't create the PDF.": "Impossible de créer le PDF.",
    "{orientation} — {name}": "{orientation} — {name}", // i18n-same
    "Clear images": "Retirer les images",
    "PDF settings": "Réglages du PDF",
    "PDF Settings": "Réglages du PDF",
    "Build": "Créer",
    "Building PDF…": "Création du PDF…",
    "1 page": "1 page", // i18n-same
    "{n} pages": "{n} pages", // i18n-same
    "Use the arrows to reorder.": "Utilisez les flèches pour réorganiser.",
    // The separator between the page count and the line above. French ends a
    // sentence the same way English does, so this is deliberately identical.
    ". |sentence-end": ". ", // i18n-same
    "Create PDF": "Créer le PDF",
    "That's {size} of images. They're embedded without recompression, so the PDF will be about that big — likely too large to email.":
      "Cela fait {size} d'images. Elles sont intégrées sans recompression : le PDF pèsera donc à peu près autant, sans doute trop pour un e-mail.",
    "Compress these first": "Les compresser d'abord",
    "Page size": "Format de page",
    "Orientation": "Orientation", // i18n-same
    "Each page already takes its image's shape.": "Chaque page prend déjà la forme de son image.",
    "Set each image's orientation on its card — the first image on a page decides that page.":
      "Réglez l'orientation de chaque image sur sa carte : la première image d'une page détermine celle de la page.",
    "Set each image's orientation on its card.": "Réglez l'orientation de chaque image sur sa carte.",
    "Images per page": "Images par page",
    "Multi-up pages are laid out on A4.": "Les pages à plusieurs images sont mises en page en A4.",
    "Fit": "Ajustement",
    "Contain keeps the whole image (may add margins). Cover fills the area (may crop). Stretch distorts to fill exactly.":
      "Ajuster conserve toute l'image (peut ajouter des marges). Remplir couvre la zone (peut rogner). Étirer déforme pour remplir exactement.",
    "Margin": "Marge",
    "Space around images (and between them on multi-up pages).": "Espace autour des images (et entre elles sur les pages à plusieurs images).",
    "Page background": "Fond de page",
    "Preview": "Aperçu",
    "Previous page": "Page précédente",
    "Next page": "Page suivante",
    // PAGE_SIZES / ORIENTATIONS / PER_IMAGE / FIT_LABELS (module scope, §4.2)
    "Fit to image": "Adapter à l'image",
    "Auto": "Automatique",
    "Auto (match image)": "Automatique (selon l'image)",
    "Portrait": "Portrait", // i18n-same
    "Landscape": "Paysage",
    "Custom (per image)": "Personnalisée (par image)",
    "Contain": "Ajuster",
    "Cover": "Remplir",
    "Stretch": "Étirer",
    // ImageToPdfTool.tsx — size limit (jpg-to-pdf-under-N-kb)
    "Already under {size} — no compression needed.": "Déjà sous {size} : aucune compression nécessaire.",
    "Could not get the PDF under {size} — this is the smallest it can be.": "Impossible de faire passer le PDF sous {size} : c'est le poids minimal possible.",
    "Enter a size greater than zero.": "Saisissez un poids supérieur à zéro.",
    "Images are compressed only as much as needed for the whole PDF to fit.": "Les images ne sont compressées que dans la mesure nécessaire pour que tout le PDF tienne sous la limite.",
    "KB": "Ko",
    "MB": "Mo",
    "Maximum PDF size": "Poids maximal du PDF",
    "PDF size: {size}": "Poids du PDF : {size}",
    "The PDF will be kept under {size}.": "Le PDF restera sous {size}.",
    "Unit": "Unité",
  },
};

export default content;
