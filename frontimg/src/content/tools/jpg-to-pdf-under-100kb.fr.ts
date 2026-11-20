import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/jpg-en-pdf-moins-de-100ko (variant of image-to-pdf,
 * 100 Ko limit on the whole PDF). Target query: «JPG en PDF de moins de
 * 100 Ko». Angle: la limite la plus stricte, presque toujours pour UNE seule
 * page — préparer la photo, scanner ou photographier.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-100kb",
  locale: "fr",
  name: "JPG en PDF de moins de 100 Ko",
  tagline:
    "Transformez la photo ou le scan d'un document en PDF de moins de 100 Ko, pour les formulaires aux limites PDF les plus strictes. Les images ne sont compressées que dans la mesure où le fichier entier l'exige, dans votre navigateur, sans rien envoyer.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG en PDF de moins de 100 Ko – gratuit | oMyImage",
  metaDescription:
    "Convertir un JPG en PDF de moins de 100 Ko sans inscription : une page de diplôme ou de pièce d'identité lisible, compressée juste ce qu'il faut.",

  intro:
    "Les formulaires qui demandent un document « au format PDF, 100 Ko maximum » — une attestation, une pièce d'identité, un justificatif de revenus ou de domicile, un relevé de notes — attendent presque toujours une seule page. La photo de cette page prise au téléphone pèse déjà 3 à 5 Mo : la glisser telle quelle dans un PDF donne un fichier trente à cinquante fois trop lourd. Cette page crée le PDF et, s'il dépasse 100 Ko, recompresse l'image qu'il contient juste assez pour que le fichier entier rentre, en gardant un texte aussi net que la limite le permet.",

  sections: [
    {
      heading: "Ce qui tient dans un PDF de 100 Ko",
      id: "what-fits",
      body: [
        "Une page A4 y tient sans difficulté : à 100 Ko, une page entière de texte dactylographié conserve environ 800 × 1100 pixels en bonne qualité, et une attestation avec davantage de blanc en garde plus — de quoi lire le texte imprimé, les tampons et les signatures à un zoom normal. La structure du PDF elle-même ne prend que quelques kilo-octets, si bien que presque toute la limite va à l'image de la page.",
        "Deux pages tiennent aussi, chacune avec une résolution plus faible ; à partir de trois, les petits caractères commencent à devenir flous. Si un formulaire veut un long document en 100 Ko, vérifiez s'il accepte un fichier séparé par page.",
      ],
    },
    {
      heading: "Préparer la page",
      id: "prepare",
      body: [
        "Posez le document à plat sur une surface sombre, photographiez-le exactement par-dessus à la lumière du jour et recadrez tout ce qui n'est pas la page. Une page propre et uniformément éclairée se compresse bien mieux qu'une page barrée d'une ombre, et le bout de table qui dépasse n'est que des octets gaspillés.",
        "Pour un document simplement dactylographié ou imprimé, le passer d'abord en noir et blanc avec l'outil « Photo en noir et blanc » donne un texte nettement plus net à 100 Ko. Gardez en couleur les attestations portant des tampons et des cachets colorés.",
      ],
    },
    {
      heading: "Format de page et mise en page",
      id: "layout",
      body: [
        "L'A4 est le format par défaut et convient à la plupart des documents. « Adapter à l'image » donne à chaque page la forme de la photo, sans marges, ce qui va bien aux cartes d'identité et aux tickets de caisse. Le format de page ne change presque rien au poids du fichier — un PDF de ce type, c'est quasiment l'image seule —, choisissez donc celui qui rend le mieux.",
        "La case de la limite est modifiable : tapez 99 pour les formulaires qui protestent dès qu'un fichier frôle les 100 Ko, ou tout autre nombre.",
      ],
    },
    {
      heading: "Quand le document ne rentre pas",
      id: "too-big",
      body: [
        "Si un document compte beaucoup de pages, 100 Ko peuvent tout simplement être trop peu pour qu'elles restent lisibles. L'outil produit quand même le plus petit PDF possible et vous prévient s'il n'a pas pu passer sous la limite. Dans ce cas, utilisez la page 200 Ko ou 300 Ko si le formulaire l'autorise, ou faites un PDF par page.",
      ],
    },
    {
      heading: "Scanner ou photographier ?",
      id: "scan-or-photo",
      body: [
        "Un scanner à plat est le point de départ le plus propre : lumière uniforme, page parfaitement plane et fond blanc, autant d'éléments qui se compressent bien. Numériser à 150–200 DPI suffit largement pour un PDF de 100 Ko ; des réglages plus élevés ne font qu'ajouter des pixels qui seront retirés pour rentrer.",
        "Un téléphone fait presque aussi bien si vous photographiez la page à la lumière du jour, bien à la verticale et sans flash. Les applications de numérisation du téléphone aident encore en redressant la page et en blanchissant le papier ; exportez le résultat en JPG et ajoutez-le ici.",
      ],
    },
  ],

  howToTitle: "Comment convertir un JPG en PDF de moins de 100 Ko",
  steps: [
    { title: "Ajoutez les images de la page", description: "Ajoutez la photo ou le scan de votre document : JPG, PNG, WEBP ou GIF." },
    { title: "Vérifiez la mise en page", description: "Choisissez le format et l'ordre des pages ; la limite de 100 Ko est déjà réglée." },
    { title: "Créez le PDF", description: "Les images ne sont compressées que si nécessaire, et le PDF se télécharge sous 100 Ko." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Limite sur le fichier entier", description: "Le PDF final pèse moins de 100 Ko, pas seulement chaque image qu'il contient." },
    { icon: "description", title: "Pages lisibles", description: "Les images ne sont compressées que dans la mesure exigée par la limite, le texte reste donc net." },
    { icon: "lock", title: "Aucun envoi", description: "Vos documents sont transformés en PDF dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment convertir un JPG en PDF de moins de 100 Ko ?", a: "Ajoutez l'image, vérifiez le format de page et cliquez sur « Créer le PDF ». La limite de 100 Ko est déjà réglée ; l'image n'est compressée que si nécessaire." },
    { q: "Mon document restera-t-il lisible ?", a: "Pour une ou deux pages, oui : à 100 Ko, une page A4 garde assez de détails pour le texte imprimé, les tampons et les signatures." },
    { q: "Puis-je mettre plusieurs pages dans un PDF de 100 Ko ?", a: "Deux pages passent bien ; au-delà, chaque page reçoit moins de pixels. Pour un long document, prenez une limite plus élevée si le formulaire le permet." },
    { q: "Le format de page change-t-il le poids du fichier ?", a: "À peine. Le PDF, c'est presque uniquement l'image ; le format de page ne change que sa disposition." },
    { q: "Et si mon PDF fait déjà moins de 100 Ko ?", a: "Si les images forment déjà un PDF de moins de 100 Ko, rien n'est recompressé et le PDF est créé avec elles telles quelles." },
    { q: "100 Ko, est-ce la même chose que 0,1 Mo ?", a: "Oui, 100 Ko correspondent à 100 000 octets. Le PDF passe aussi les formulaires qui comptent 1 Ko comme 1 024 octets." },
    { q: "Mes documents sont-ils envoyés sur un serveur ?", a: "Non. Le PDF est créé entièrement dans votre navigateur." },
    { q: "Vaut-il mieux scanner ou photographier le document ?", a: "Les deux fonctionnent. Un scan est un peu plus propre ; une photo prise à la lumière du jour, bien à la verticale et sans flash, s'en approche beaucoup." },
    { q: "Pourquoi le formulaire refuse-t-il mon PDF alors qu'il fait moins de 100 Ko ?", a: "Vérifiez les autres règles : certains formulaires imposent un nombre maximal de pages, un nom de fichier sans espaces ni accents, ou un document en noir et blanc. Le poids n'est qu'une des conditions." },
  ],

  security:
    "Les images de vos documents sont compressées et assemblées en PDF sur votre appareil, dans votre navigateur. Rien n'est envoyé ni conservé nulle part.",
};

export default content;
