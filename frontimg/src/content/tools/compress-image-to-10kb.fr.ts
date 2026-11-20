import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-10ko (variant of compress-image,
 * preset targetKb 10). Primary query: « Compresser une image à 10 Ko »;
 * secondaries: « réduire une photo à 10 Ko », « signature 10 Ko ». Angle:
 * the tightest limit there is — signature and thumb-impression fields — and
 * what has to be thrown away to get there. The 20 Ko page owns « 10 à 20 Ko »
 * ranges; this one is about getting UNDER 10 Ko.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-10kb",
  locale: "fr",
  name: "Compresser une image à 10 Ko",
  tagline:
    "Faites passer une signature, une empreinte de pouce ou une petite photo sous 10 Ko, la limite la plus stricte des formulaires en ligne. L'outil réduit la qualité puis la taille par petites étapes jusqu'à ce que le fichier tienne, dans votre navigateur, sans rien envoyer.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 10 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 10 Ko : signature, empreinte ou petite photo en JPG lisible pour vos formulaires en ligne. Réduisez une photo à 10 Ko sans l'envoyer.",

  intro:
    "10 Ko, c'est le plus petit poids de fichier qu'exigent les formulaires en ligne, et on le rencontre là où l'image elle-même est petite : le cadre de signature d'un formulaire de concours ou de recrutement, une empreinte de pouce, le champ photo d'un ancien système d'inscription. Une photo prise au téléphone pèse trois à cinq cents fois plus. Passer sous 10 Ko tient donc moins d'une compression astucieuse que d'un tri : ne garder que ce dont le formulaire a besoin. Ajoutez votre image ici et vous obtenez un JPG de moins de 10 Ko, la version la plus lisible qui tienne dans cette limite.",

  sections: [
    {
      heading: "10 Ko, c'est vraiment petit",
      id: "how-small",
      body: [
        "10 Ko, ce sont 10 000 octets. Une signature propre à l'encre noire sur papier blanc, recadrée au plus près et d'environ 300 × 120 pixels, y tient sans difficulté. Une photo tête et épaules y tient aussi, mais seulement à environ 200 × 250 pixels — à peu près la taille à laquelle elle est imprimée sur une convocation, et guère plus.",
        "L'outil cherche d'abord la qualité JPG la plus élevée qui reste sous 10 Ko. Quand même la plus basse qualité raisonnable donne un fichier trop lourd, il réduit les dimensions en pixels par petites étapes et recommence la recherche : vous obtenez toujours un fichier sous la limite, jamais un message d'erreur.",
      ],
    },
    {
      heading: "Préparez l'image avant de la comprimer",
      id: "prepare",
      body: [
        "Chaque pixel inutile coûte des octets que vous n'avez pas. Recadrez la signature pour que l'encre touche presque les bords, et recadrez une photo sur la tête et les épaules. Pour une signature, passez-la d'abord en noir et blanc avec l'outil « Photo en noir et blanc » : le bruit de couleur dû au papier et à l'éclairage prend de la place sans rien apporter.",
        "Signez avec un stylo foncé sur une feuille blanche unie, puis photographiez-la à la lumière du jour, bien à la verticale. Un original net et contrasté se compresse bien mieux qu'un original grisâtre et ombré, et le résultat reste lisible.",
      ],
    },
    {
      heading: "Les empreintes de pouce",
      id: "thumb",
      body: [
        "Appuyez le pouce sur un tampon encreur, puis une seule fois, fermement, sur une feuille blanche — en le faisant légèrement rouler, vous obtenez une empreinte plus complète. Photographiez-la de près sous un bon éclairage pour que les sillons soient nets, puis recadrez sur l'empreinte elle-même avant de compresser.",
        "Après la compression, zoomez à 100 % : les lignes de l'empreinte doivent rester visibles. Si elles se sont fondues en une tache sombre, vérifiez que le champ exige vraiment 10 Ko ; les empreintes ont souvent droit à plus de place que les signatures, et un budget plus large préserve le détail.",
      ],
    },
    {
      heading: "Quand le résultat paraît trop grossier",
      id: "rough",
      body: [
        "Des contours en escalier autour des lettres signifient que le fichier a dû être compressé très fort. Recadrez plus serré, augmentez le contraste ou repartez d'un meilleur original. Un fichier juste sous la limite avec une qualité correcte a bien meilleure allure qu'une grande image écrasée pour tenir.",
        "Vérifiez aussi les autres règles du formulaire. Beaucoup de champs indiquent des dimensions en pixels en plus d'un poids : redimensionnez d'abord l'image à ces dimensions avec l'outil « Redimensionner une image », puis compressez-la, pour que le formulaire reçoive exactement ce qu'il demande.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 10 Ko",
  steps: [
    { title: "Recadrez et ajoutez l'image", description: "Recadrez la signature ou la photo au plus près, puis ajoutez-la, en JPG, PNG ou WebP." },
    { title: "Compressez sous 10 Ko", description: "La limite de 10 Ko est déjà réglée. Qualité et taille ne baissent que dans la mesure nécessaire." },
    { title: "Vérifiez et téléchargez", description: "Zoomez pour vérifier que tout reste lisible, puis téléchargez le JPG." },
  ],

  features: [
    { icon: "draw", title: "Pensé pour les signatures", description: "Les petites images en noir et blanc, comme les signatures et les empreintes de pouce, restent lisibles sous 10 Ko." },
    { icon: "crop", title: "Réduction seulement si nécessaire", description: "La qualité est ajustée en premier ; les dimensions ne baissent que si le fichier ne tient toujours pas." },
    { icon: "lock", title: "Tout reste sur votre appareil", description: "Votre signature est compressée dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une signature à 10 Ko ?", a: "Recadrez-la au plus près, ajoutez-la ici et cliquez sur « Compresser » : la limite de 10 Ko est déjà réglée. La passer d'abord en noir et blanc donne le résultat le plus propre." },
    { q: "Une photo peut-elle vraiment tenir dans 10 Ko ?", a: "Oui, au format d'une photo d'identité imprimée : environ 200 × 250 pixels. C'est suffisant pour les petits cadres photo des convocations et des formulaires d'identité, mais pas pour un format plus grand." },
    { q: "Comment photographier une empreinte de pouce pour un formulaire en ligne ?", a: "Faites l'empreinte sur une feuille blanche avec un tampon encreur, photographiez-la de près à la lumière du jour, recadrez sur l'empreinte puis compressez. Vérifiez à 100 % de zoom que les sillons restent visibles." },
    { q: "Pourquoi ma signature de 10 Ko est-elle floue ?", a: "En général, l'original contenait trop de choses autour, ou un papier gris et des ombres. Recadrez plus serré, passez en noir et blanc et compressez de nouveau à partir de l'original." },
    { q: "Pour une limite de 10 Ko, vaut-il mieux un JPG ou un PNG ?", a: "Le JPG. C'est le format que presque tous les formulaires acceptent, et la limite de poids de cet outil produit toujours un JPG (ou un WebP si vous le choisissez)." },
    { q: "Et si mon fichier pèse déjà moins de 10 Ko ?", a: "S'il s'agit déjà d'un JPG sous la limite, il vous est rendu tel quel : inutile de le compresser une seconde fois." },
    { q: "10 Ko, est-ce la même chose que 0,01 Mo ?", a: "Oui. 10 Ko font 10 000 octets, soit 0,01 Mo. L'outil compte 1 Ko pour 1000 octets, donc le fichier est aussi sous la limite pour les formulaires qui en comptent 1024." },
    { q: "Ma signature est-elle envoyée quelque part pendant la compression ?", a: "Non. Une signature ou une empreinte de cette taille est traitée entièrement dans votre navigateur ; aucune copie n'est conservée en ligne." },
  ],

  security:
    "Les signatures, empreintes de pouce et photos sont compressées sur votre appareil, dans votre navigateur. Rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
