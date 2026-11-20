import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/jpg-en-pdf-moins-de-300ko (variant of image-to-pdf,
 * 300 Ko limit on the whole PDF). Target query: «JPG en PDF de moins de
 * 300 Ko». Angle: documents EN COULEUR de trois à cinq pages — tampons,
 * cachets et photos qui doivent rester lisibles.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-300kb",
  locale: "fr",
  name: "JPG en PDF de moins de 300 Ko",
  tagline:
    "Transformez plusieurs pages de photos ou de scans en un seul PDF de moins de 300 Ko, avec des tampons, cachets et photos en couleur toujours nets. Pour les portails de candidature et de vérification. Dans votre navigateur, rien n'est envoyé.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG en PDF de moins de 300 Ko – en couleur | oMyImage",
  metaDescription:
    "Convertir des JPG en PDF de moins de 300 Ko gratuitement : trois à cinq pages en couleur, tampons et cachets lisibles, photo collée reconnaissable.",

  intro:
    "Une limite PDF de 300 Ko annonce en général un document plus complet : trois à cinq pages, souvent en couleur — une attestation avec un cachet, un formulaire de candidature avec une photo collée, une série de reçus. Cette page assemble vos images dans un seul PDF et, si le résultat dépasse 300 Ko, les recompresse juste assez pour que le fichier entier rentre. Avec 300 Ko à partager, les couleurs restent fidèles et les tampons lisibles.",

  sections: [
    {
      heading: "Des couleurs qui restent lisibles",
      id: "colour",
      body: [
        "Les tampons et cachets en couleur sont ce qui rend valables bien des documents, et ce sont souvent les premiers éléments à devenir flous quand un fichier est fortement compressé. À 300 Ko, un document couleur de trois pages garde environ 800 × 1100 pixels par page : les tampons bleus, les cachets rouges et une photo collée restent bien visibles.",
        "Si une partie de votre document est du texte dactylographié et l'autre en couleur, gardez tout en couleur : glisser une page en noir et blanc dans le PDF fait gagner moins qu'on ne le croit, puisque la limite est de toute façon partagée entre les pages.",
      ],
    },
    {
      heading: "Combien de pages tiennent",
      id: "pages",
      body: [
        "Trois pages A4 restent confortablement lisibles à 300 Ko, et quatre ou cinq conviennent aux documents à gros caractères ou riches en blanc. Le poids est réparti selon la surface de chaque image : un grand scan reçoit une plus grosse part du budget qu'un petit reçu, et toutes les pages finissent avec une netteté comparable.",
        "À partir de six pages, passez à la page 500 Ko si le portail l'accepte, ou découpez le document en deux PDF.",
      ],
    },
    {
      heading: "Plusieurs petits éléments sur une page",
      id: "multi-up",
      body: [
        "Reçus, cartes et petites attestations gaspillent de la place quand chacun occupe une page A4 entière. Réglez « Images par page » sur 2 ou 4 et ils sont disposés ensemble. Le PDF devient plus court et plus facile à contrôler, et chaque élément reste enregistré à sa propre résolution.",
      ],
    },
    {
      heading: "Un dernier coup d'œil avant l'envoi",
      id: "check",
      body: [
        "Ouvrez le PDF et zoomez sur chaque page. Vérifiez que les pages sont dans le bon ordre, que rien n'est coupé et que chaque tampon et chaque signature se lit. Si une page est nettement moins bonne que les autres, reprenez cette photo à la lumière du jour et recréez le PDF.",
      ],
    },
    {
      heading: "Les formulaires avec une photo collée",
      id: "pasted-photo",
      body: [
        "Un formulaire de candidature rempli porte souvent une photo d'identité collée dans un cadre, et le portail vérifie que le visage est reconnaissable. À 300 Ko, un formulaire de trois pages garde la photo collée assez nette pour cela, à condition que la page elle-même ait été bien photographiée.",
        "Photographiez le formulaire à plat, à la lumière du jour et sans flash, pour que la photo brillante ne renvoie pas la lumière. Si le cadre de la photo sort avec un reflet, inclinez légèrement la page à l'opposé de la fenêtre et recommencez.",
      ],
    },
    {
      heading: "Nommer et déposer le fichier",
      id: "upload",
      body: [
        "Les portails refusent souvent les noms de fichiers contenant des espaces, des accents ou des caractères spéciaux. Donnez au PDF un nom court comme formulaire_candidature.pdf avant de l'envoyer, et gardez les photos d'origine au cas où il faudrait refaire le PDF avec une autre limite.",
      ],
    },
  ],

  howToTitle: "Comment convertir des JPG en PDF de moins de 300 Ko",
  steps: [
    { title: "Ajoutez les pages", description: "Ajoutez les photos ou scans de chaque page : JPG, PNG, WEBP ou GIF." },
    { title: "Organisez-les", description: "Réglez l'ordre, le format de page et le nombre d'images par page ; la limite de 300 Ko est déjà réglée." },
    { title: "Créez le PDF", description: "Téléchargez un seul PDF de moins de 300 Ko, aux couleurs et aux tampons préservés." },
  ],

  features: [
    { icon: "palette", title: "Couleurs préservées", description: "Tampons, cachets et photos restent nets en couleur à 300 Ko." },
    { icon: "grid_view", title: "Plusieurs éléments par page", description: "Deux ou quatre reçus ou cartes sur une page, chacun à sa propre résolution." },
    { icon: "lock", title: "Aucun envoi", description: "Vos documents sont compressés et assemblés dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment créer un PDF de moins de 300 Ko à partir d'images JPG ?", a: "Ajoutez les images, organisez-les et cliquez sur « Créer le PDF ». La limite de 300 Ko est déjà réglée ; les images ne sont compressées que si nécessaire." },
    { q: "Combien de pages peut contenir un PDF de 300 Ko ?", a: "Trois pages A4 restent lisibles en couleur ; quatre ou cinq passent quand les caractères sont gros. Des documents plus longs tiennent aussi, avec moins de détails par page." },
    { q: "Les tampons en couleur resteront-ils visibles ?", a: "Oui. À 300 Ko, un document en couleur garde assez de détails pour les tampons, les cachets et les photos collées." },
    { q: "Puis-je mettre deux reçus sur une même page ?", a: "Oui. Choisissez 2 ou 4 dans « Images par page »." },
    { q: "Pourquoi une page paraît-elle plus floue que les autres ?", a: "En général, cette photo a été prise avec moins de lumière. Reprenez-la à la lumière du jour et recréez le PDF." },
    { q: "300 Ko, est-ce la même chose que 0,3 Mo ?", a: "Oui, 300 Ko correspondent à 300 000 octets. Le PDF passe aussi les portails qui comptent 1 Ko comme 1 024 octets." },
    { q: "Mes fichiers sont-ils envoyés quelque part ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "La photo collée sur mon formulaire restera-t-elle reconnaissable ?", a: "Oui, à 300 Ko pour un formulaire de trois ou quatre pages au plus — à condition que le formulaire ait été photographié sans reflet sur la photo." },
    { q: "Faut-il passer les pages en noir et blanc pour gagner de la place ?", a: "Rarement. Pour un document avec des tampons ou une photo, gardez la couleur : 300 Ko suffisent, et le gain d'une seule page en noir et blanc reste faible." },
  ],

  security:
    "Les images de vos pages sont compressées et assemblées en PDF sur votre appareil, dans votre navigateur. Vos attestations et formulaires ne sont ni envoyés ni conservés.",
};

export default content;
