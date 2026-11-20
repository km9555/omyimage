import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr PNG-to-WebP converter.
 *
 * Head term « PNG en WebP » (1.3K FR), « convertir PNG en WebP » as a
 * secondary. The angle is "keep the alpha channel, lose the weight" — what
 * separates this page from JPG en WebP, which has no transparency to keep.
 */
const copy: LocalizedPairCopy = {
  name: "PNG en WebP",
  seoTitle: "PNG en WebP – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir PNG en WebP gratuitement et sans inscription : la transparence est conservée et le poids fond. Logos, icônes et captures d'écran prêts pour le web.",
  unique: {
    intro:
      "Le PNG est fidèle, mais lourd. En convertissant un PNG en WebP, vous gardez la transparence, la raison même pour laquelle vous utilisiez le PNG, tout en réduisant le fichier à une fraction de son poids. Pour les logos, les icônes, les captures d'interface et tout ce qui comporte un canal alpha et doit se charger vite, c'est en général la plus grosse économie possible en une seule opération.",
    whyConvert:
      "Le défaut du PNG, c'est qu'il refuse de rien supprimer : parfait pour un fichier de travail, gaspilleur pour une ressource web. Une capture d'écran ou un détourage de produit enregistré en PNG dépasse couramment le mégaoctet, et sur une page qui en affiche une douzaine, la facture est lourde. Le WebP règle ce problème sans vous obliger à renoncer au canal alpha, ce qui le rend nettement supérieur à l'ancienne astuce consistant à convertir en JPG et à peindre un faux fond derrière la transparence. Bords adoucis, ombres portées et texte lissé restent intacts, pour un poids d'environ un quart à la moitié de celui du PNG. Le compromis à bien comprendre : le mode avec perte du WebP est réellement avec perte, et une capture contenant du petit texte peut prendre un léger flou si vous descendez trop le curseur de qualité.",
    notes: [
      {
        heading: "Captures d'écran et texte : visez une qualité plus haute",
        body:
          "Les contenus photographiques supportent une compression forte, car l'œil ne suit pas chaque pixel d'une texture. Les contenus aux contours nets (captures d'interface, texte, schémas, dessins au trait) sont l'inverse : les défauts de compression se concentrent autour des bords très contrastés et apparaissent sous forme de léger halo ou de flou. Si votre PNG contient du texte lisible, restez à 0,90 ou plus et vérifiez le résultat en zoom 100 % avant de lancer un lot.",
      },
      {
        heading: "La transparence est transférée à l'identique",
        body:
          "Les deux formats disposent d'un canal alpha complet sur 8 bits : cette conversion n'aplatit rien et ne vous demande aucune couleur de fond. Les pixels semi-transparents restent semi-transparents, si bien que les ombres douces et les bords progressifs survivent intacts. C'est la principale raison de préférer le WebP au JPG quand la source est un PNG.",
      },
      {
        heading: "Quand garder le PNG",
        body:
          "Gardez le PNG quand le fichier est un original que vous retoucherez encore, quand il part vers un environnement qui ne décode pas le WebP (les modèles d'e-mail sont le cas le plus connu, plusieurs logiciels de messagerie de bureau ne l'affichant toujours pas), ou quand il s'agit d'une minuscule icône pour laquelle le gain se limite à quelques centaines d'octets et ne justifie pas un format de plus dans votre chaîne de production. Le PNG reste aussi la bonne réponse pour tout ce qui exige une fidélité au pixel près, comme un QR code ou un schéma technique.",
      },
    ],
    faqs: [
      {
        q: "La conversion PNG en WebP conserve-t-elle la transparence ?",
        a: "Oui, entièrement. Le WebP dispose d'un canal alpha complet : les zones transparentes et semi-transparentes passent sans changement. Rien n'est aplati et il n'y a aucune couleur de fond à choisir.",
      },
      {
        q: "De combien le WebP est-il plus léger que le PNG ?",
        a: "En général de 50 à 75 % pour les images photographiques ou complexes. Pour les graphiques simples en aplats, l'écart varie davantage : parfois le gain est énorme, parfois un très petit PNG est déjà presque optimal.",
      },
      {
        q: "La conversion est-elle sans perte ?",
        a: "Pas par défaut. Cet outil utilise le mode avec perte du WebP, avec un curseur de qualité : c'est de là que viennent les gros gains de poids. Réglez une qualité élevée si vous voulez une fidélité proche de l'original, ou gardez le PNG s'il doit rester exact.",
      },
      {
        q: "Le texte de ma capture d'écran restera-t-il net ?",
        a: "À partir d'une qualité de 0,90, en général oui. Des réglages plus bas peuvent adoucir le petit texte, car les défauts de compression se regroupent autour des bords très contrastés. Vérifiez un fichier en plein zoom avant de convertir tout un lot.",
      },
      {
        q: "Puis-je utiliser le WebP dans un e-mail ?",
        a: "Pas de façon fiable. Plusieurs logiciels de messagerie de bureau n'affichent toujours pas le WebP : le PNG ou le JPG restent plus sûrs pour l'e-mail. Le WebP vise les pages web, où sa prise en charge est universelle.",
      },
      {
        q: "Puis-je convertir toutes les icônes de mon projet d'un coup ?",
        a: "Oui. Glissez tous les PNG nécessaires : ils sont convertis dans l'ordre avec la même qualité, et vous les téléchargez ensemble dans un seul ZIP, prêts à remplacer les originaux sur votre site.",
      },
    ],
  },
};

export default copy;
