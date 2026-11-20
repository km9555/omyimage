import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-20ko (variant of compress-image,
 * preset targetKb 20). Primary query: « Compresser une image à 20 Ko »;
 * secondaries: « réduire une photo à 20 Ko », « signature 20 Ko ». 20 Ko is
 * above all the SIGNATURE limit, so that is this page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-20kb",
  locale: "fr",
  name: "Compresser une image à 20 Ko",
  tagline:
    "Compressez une photo ou une signature sous 20 Ko, la limite que fixent les formulaires de concours, de recrutement et de banque pour les signatures et les petites photos. Des JPG nets, plusieurs fichiers à la fois, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 20 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 20 Ko : signature scannée ou petite photo en JPG net pour vos candidatures en ligne. Réduisez une photo à 20 Ko, gratuit et sans envoi.",

  intro:
    "Vingt kilo-octets, c'est la limite la plus stricte que la plupart des gens rencontrent, et elle vient presque toujours d'un formulaire de candidature : une signature scannée, une empreinte du pouce gauche ou une petite photo pour un concours, un recrutement dans la fonction publique ou une banque. La photo d'une signature prise au téléphone pèse en général 2 à 4 Mo, soit deux cents fois trop. Cette page fait passer n'importe quel JPG, PNG ou WebP sous 20 Ko en une seule étape, en gardant l'image aussi nette que ce budget le permet, et elle traite tout votre lot de documents d'un coup.",

  sections: [
    {
      heading: "20 Ko, c'est la limite des signatures",
      id: "signatures",
      body: [
        "Les formulaires de candidature en ligne pour les concours, les recrutements dans les transports ou la banque, les admissions à l'université et de nombreux services publics demandent une signature scannée, le plus souvent entre 10 et 20 Ko et d'environ 140 × 60 pixels, parfois « 6 cm × 2 cm ». La limite est minuscule parce qu'une signature contient très peu d'information : des traits foncés sur un fond uni.",
        "C'est aussi ce qui fait des signatures les images les plus faciles à bien compresser. Une signature propre tient dans 20 Ko avec une qualité élevée, et à une taille bien supérieure à celle que le formulaire affichera. Si la vôtre sort floue ou tachée, le problème vient presque toujours de la photo d'origine, pas de la compression — voir la section suivante.",
      ],
    },
    {
      heading: "Obtenir une signature propre sous 20 Ko",
      id: "clean-signature",
      body: [
        "Signez à l'encre noire ou bleu foncé sur une feuille blanche unie, et photographiez-la à la lumière du jour, sans votre ombre ni le flash du téléphone sur la page. Les ombres et le papier gris sont les ennemis : un JPG dépense l'essentiel de ses 20 Ko à décrire les dégradés du fond, pas vos traits.",
        "Recadrez au plus près de la signature avant de compresser — l'outil « Recadrer une image » le fait en quelques secondes — pour que le fichier ne gaspille pas d'octets sur du papier vide. Une signature recadrée serré à environ 400 × 150 pixels reste nette bien en dessous de 20 Ko ; garder une photo de 4000 pixels d'une feuille de papier n'apporte rien.",
      ],
    },
    {
      heading: "Ce qui tient dans 20 kilo-octets",
      id: "what-fits",
      body: [
        "Pour une signature sur fond blanc, 20 Ko, c'est large. Pour une photo de visage, c'est serré : comptez environ 300 × 400 pixels avec une bonne qualité, selon le niveau de détail de l'arrière-plan. Un fond uni et clair derrière le visage laisse beaucoup moins à stocker à l'encodeur qu'une pièce encombrée ou un mur à motifs.",
        "Si un formulaire demande une photo de 20 Ko et précise aussi des dimensions exactes, redimensionnez d'abord à ces dimensions avec l'outil « Redimensionner une image », puis compressez ici. Dans cet ordre, l'outil n'a plus qu'à baisser la qualité, sans avoir à choisir une taille à votre place.",
      ],
    },
    {
      heading: "Quand un formulaire demande « entre 10 et 20 Ko »",
      id: "range",
      body: [
        "Certains formulaires fixent un minimum en plus du maximum, pour refuser les images presque vides. Cette page vise juste sous 20 Ko, et le résultat tombe en général entre 15 et 20 Ko, donc à l'intérieur d'une fourchette de 10 à 20 Ko.",
        "Les images très petites ou très simples peuvent rester sous le minimum même en qualité maximale, tout simplement parce qu'elles n'ont pas assez de détail pour remplir 10 Ko. Dans ce cas, scannez ou photographiez la signature en plus grand, ou recadrez un peu plus large, puis compressez de nouveau à partir de cet original.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 20 Ko",
  steps: [
    { title: "Ajoutez la photo ou la signature", description: "Sélectionnez ou glissez votre JPG, PNG ou WebP ; recadrez d'abord une signature au plus près pour un résultat plus propre." },
    { title: "Compressez sous 20 Ko", description: "La limite de 20 Ko est déjà réglée ; modifiez-la si votre formulaire autorise un peu plus ou un peu moins." },
    { title: "Téléchargez et envoyez", description: "Enregistrez le JPG et joignez-le à votre formulaire : il pèse forcément moins de 20 Ko." },
  ],

  features: [
    { icon: "draw", title: "Pensé pour les signatures", description: "Des traits foncés et nets sur fond blanc se compressent à merveille : un recadrage serré reste précis bien sous 20 Ko." },
    { icon: "verified_user", title: "Sous 20 Ko, à chaque fois", description: "Le fichier reste sous 20 000 octets : il passe sur les formulaires qui comptent 1 Ko pour 1000 comme pour 1024 octets." },
    { icon: "lock", title: "Votre signature reste privée", description: "Tout se passe dans votre navigateur. Une signature scannée est bien la dernière chose à envoyer sur le serveur d'un inconnu." },
  ],

  faqs: [
    { q: "Comment compresser une signature à 20 Ko ?", a: "Recadrez la signature au plus près, ajoutez-la ici et cliquez sur « Compresser » : la limite de 20 Ko est déjà réglée. Signer à l'encre foncée sur papier blanc et photographier en plein jour donne le résultat le plus net." },
    { q: "Quelle taille en pixels pour une signature de 20 Ko ?", a: "La plupart des formulaires demandent environ 140 × 60 pixels, et une signature de cette taille ne pèse que quelques kilo-octets. Si aucune taille n'est indiquée, un recadrage d'environ 400 × 150 pixels la garde nette tout en restant bien sous 20 Ko." },
    { q: "Mon formulaire exige une photo de moins de 20 Ko : le visage restera-t-il net ?", a: "Oui, à la taille où le formulaire l'affiche. Comptez environ 300 × 400 pixels avec une bonne qualité ; un fond uni et clair derrière le visage laisse plus de place au visage lui-même dans les 20 Ko." },
    { q: "Le formulaire indique de 10 à 20 Ko. Est-ce que ça marche ?", a: "En général, le résultat tombe entre 15 et 20 Ko. Si une image très petite ou très simple sort sous 10 Ko, photographiez-la ou scannez-la en plus grand et compressez de nouveau." },
    { q: "Pourquoi ma signature compressée paraît-elle grise ou tachée ?", a: "Le fond de l'original était gris ou ombré, et le JPG consacre son budget à ces nuances. Reprenez la photo sur papier blanc sous un éclairage régulier, ou augmentez le contraste, et les traits ressortiront proprement." },
    { q: "Puis-je compresser ma photo et ma signature ensemble ?", a: "Oui. Ajoutez les deux fichiers ; chacun est ramené séparément sous 20 Ko et vous pouvez les télécharger dans un ZIP. Si la photo a droit à plus (souvent 50 Ko), compressez-la plutôt sur la page 50 Ko." },
    { q: "20 Ko, est-ce la même chose que 0,02 Mo ?", a: "Oui, 20 Ko font 0,02 Mo dans les unités décimales qu'utilisent les formulaires. L'outil garde le fichier sous 20 000 octets, ce qui convient aussi aux formulaires qui comptent 1024 octets par kilo-octet." },
    { q: "Dois-je scanner ma signature ou la photographier ?", a: "Les deux conviennent. Un scanner donne un fond plus blanc et plus régulier ; une photo au téléphone suffit si elle est prise en plein jour, bien à la verticale et sans ombre sur la feuille." },
  ],

  security:
    "Les signatures et les photos d'identité restent sur votre appareil. La compression s'exécute dans votre navigateur : aucun envoi, aucune copie sur un serveur, rien à supprimer ensuite. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
