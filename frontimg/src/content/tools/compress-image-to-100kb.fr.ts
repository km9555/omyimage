import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-100ko (variant of compress-image,
 * preset targetKb 100). Primary query: « Compresser une image à 100 Ko »;
 * secondaries: « réduire une photo à 100 Ko », « image 100 Ko ». Angle:
 * 100 Ko is where photos stop suffering — and where scanned DOCUMENTS start,
 * so this page covers both.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-100kb",
  locale: "fr",
  name: "Compresser une image à 100 Ko",
  tagline:
    "Compressez photos et documents scannés sous 100 Ko pour les formulaires de candidature, l'envoi de pièces d'identité et les e-mails. La meilleure qualité qui tienne, plusieurs images à la fois, traitées dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 100 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 100 Ko : photos, pièces d'identité et documents scannés en JPG net pour vos démarches. Réduisez une photo à 100 Ko gratuitement.",

  intro:
    "100 Ko, c'est la limite que l'on rencontre sur les candidatures à un emploi, les dossiers universitaires et les demandes de visa, les vérifications d'identité en ligne, et partout où un site veut une photo ou un document scanné mais pas un fichier d'appareil photo en pleine taille. C'est un budget confortable : un portrait ou une page de texte y tient sans dégât visible, tant que le fichier ne gaspille pas d'octets sur des pixels que personne ne verra. Ajoutez vos images, et chacune revient en JPG de moins de 100 Ko avec la meilleure qualité que permet la limite.",

  sections: [
    {
      heading: "À 100 Ko, la qualité cesse d'être un problème",
      id: "comfortable",
      body: [
        "Sous 50 Ko environ, la compression est un compromis visible. À 100 Ko, ce n'est presque plus le cas : un portrait tient à environ 900 × 1200 pixels avec une bonne qualité, bien plus que ce qu'affiche un formulaire de candidature, et assez pour une impression au format photo d'identité.",
        "C'est pourquoi le premier réflexe de l'outil est toujours de baisser un peu la qualité en gardant vos pixels. Sur la plupart des photos de téléphone, il doit aussi réduire les dimensions — à environ 1000–1500 pixels sur le grand côté —, car une photo de 12 mégapixels contient plus de détail que 100 Ko ne peuvent en contenir à une qualité raisonnable.",
      ],
    },
    {
      heading: "Des documents scannés de moins de 100 Ko",
      id: "documents",
      body: [
        "Les formulaires qui fixent une limite de 100 Ko demandent souvent un document plutôt qu'un visage : un relevé de notes, une carte d'identité, un diplôme, un justificatif de domicile. La photo d'une page prise au téléphone, c'est surtout du papier blanc, et un papier mal éclairé coûte étonnamment cher à stocker, car chaque légère ombre est un détail que le JPG doit décrire.",
        "Photographiez la page à plat, sous une lumière du jour régulière, en remplissant le cadre, et rognez la table autour. Pour les pages de texte seul, passer en noir et blanc avec l'outil « Photo en noir et blanc » avant de compresser permet de consacrer davantage des 100 Ko à la netteté du texte. Si le formulaire veut un PDF plutôt qu'une image, compressez d'abord le scan ici, puis transformez-le en PDF avec « Image en PDF ».",
      ],
    },
    {
      heading: "Plusieurs photos dans un seul e-mail",
      id: "email",
      body: [
        "Avec des photos de téléphone de 3 à 5 Mo chacune, un e-mail de dix images en pièces jointes échoue, ou arrive dans la boîte du destinataire sous la forme d'un téléchargement de 40 Mo. À 100 Ko chacune, les dix mêmes photos totalisent environ 1 Mo : assez peu pour n'importe quelle messagerie, et parfaitement nettes à l'écran.",
        "Ajoutez toute la série d'un coup : chaque image est compressée séparément à la même limite, et le téléchargement en ZIP les garde ensemble.",
      ],
    },
    {
      heading: "Pièces d'identité et vérification KYC sous 100 Ko",
      id: "kyc",
      body: [
        "Les banques, portefeuilles en ligne et opérateurs qui vérifient l'identité à distance demandent généralement une photo nette de la pièce d'identité sous une limite comme 100 Ko, et refusent tout ce qu'une personne ou une machine ne peut pas lire. Ce qui fait refuser une carte n'est presque jamais le poids du fichier : un reflet sur une carte plastifiée, un coin coupé, une carte qui n'occupe qu'une petite partie du cadre, ou un numéro flou.",
        "Posez la carte sur une surface sombre et unie, photographiez-la bien à la verticale sans flash, puis recadrez sur ses bords avant de compresser. Une carte recadrée serré tient facilement dans 100 Ko avec chaque chiffre net, car le budget va à la carte et non à la table autour.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 100 Ko",
  steps: [
    { title: "Ajoutez images ou scans", description: "Sélectionnez ou glissez des fichiers JPG, PNG ou WebP : photos, pages scannées ou captures d'écran." },
    { title: "Compressez sous 100 Ko", description: "La limite de 100 Ko est déjà réglée ; modifiez le chiffre si votre formulaire autorise une autre taille." },
    { title: "Téléchargez", description: "Chaque fichier revient sous 100 Ko ; téléchargez-les un par un ou tous ensemble dans un ZIP." },
  ],

  features: [
    { icon: "description", title: "Photos et documents", description: "Fonctionne aussi bien sur un diplôme scanné ou une pièce d'identité que sur un portrait : tous tiennent proprement dans 100 Ko." },
    { icon: "burst_mode", title: "Toute une série d'un coup", description: "Compressez en une fois toutes les photos et tous les scans d'un dossier, et téléchargez-les dans un ZIP." },
    { icon: "lock", title: "Les documents restent sur votre appareil", description: "Pièces d'identité et diplômes sont compressés dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment réduire une photo à 100 Ko ?", a: "Ajoutez la photo et cliquez sur « Compresser » : la limite de 100 Ko est déjà réglée. Vous obtenez un JPG de moins de 100 Ko avec la meilleure qualité qui tienne." },
    { q: "100 Ko suffisent-ils pour une photo d'identité ?", a: "Largement. Une photo d'identité n'a besoin que de quelques centaines de pixels de large, ce qui tient dans 100 Ko avec une très haute qualité." },
    { q: "Comment faire passer un document scanné sous 100 Ko ?", a: "Photographiez ou scannez la page à plat sous un éclairage régulier, recadrez sur les bords de la page et compressez-la ici. Pour les pages de texte seul, passer d'abord en noir et blanc laisse plus de place à un texte net." },
    { q: "Combien font 100 Ko en Mo ?", a: "0,1 Mo. Le fichier reste sous 100 000 octets, il passe donc aussi sur les formulaires qui comptent 1024 octets par kilo-octet." },
    { q: "Puis-je compresser une photo HEIC d'iPhone à 100 Ko ?", a: "Convertissez-la d'abord en JPG avec « HEIC en JPG », puis compressez le JPG ici. Cet outil lit le JPG, le PNG et le WebP." },
    { q: "Le résultat peut-il rester en PNG ?", a: "Non : le PNG ne sait pas échanger de la qualité contre du poids, on ne peut donc pas le régler sur une limite exacte. Vous obtenez un JPG, ou un WebP si vous le choisissez et que le site l'accepte." },
    { q: "Pourquoi l'outil a-t-il rendu ma photo plus étroite ?", a: "Parce que même avec une qualité basse, la photo en pleine taille dépassait 100 Ko. L'outil a réduit les dimensions juste assez pour qu'elle tienne, ce qui rend bien mieux qu'une qualité écrasée." },
    { q: "Mes documents d'identité sont-ils envoyés sur un serveur ?", a: "Non, sauf cas exceptionnel : la compression se fait dans votre navigateur. Seule une image de plus de 16 mégapixels environ passe par notre serveur, qui la supprime au bout d'une heure environ." },
  ],

  security:
    "Vos photos et documents restent sur votre appareil. Presque tous les fichiers sont compressés dans votre navigateur : pas d'envoi, pas de copie sur un serveur, rien de conservé. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
