import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr BMP-to-JPG converter.
 *
 * Head term « BMP en JPG » (480 FR); « convertir BMP en JPG » and « bitmap
 * en JPG » as secondaries. The angle is sheer size, plus the one fact unique
 * to this pair: it never falls back to the server (serverFallback: false).
 */
const copy: LocalizedPairCopy = {
  name: "BMP en JPG",
  seoTitle: "BMP en JPG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir BMP en JPG gratuitement et sans inscription : des fichiers jusqu'à 97 % plus légers, qualité réglable et lots dans un ZIP. Tout reste en local.",
  unique: {
    intro:
      "Les fichiers BMP sont énormes parce qu'ils ne sont presque pas compressés : un bitmap de 12 mégapixels occupe environ 36 Mo, quand la même photo en JPG avoisine 3 Mo. Convertir un BMP en JPG est le moyen le plus rapide de rendre ces fichiers utilisables : on peut les joindre, les envoyer et les ouvrir ailleurs que sous Windows. Vous réglez la qualité, et les lots vous reviennent dans un ZIP.",
    whyConvert:
      "Le BMP enregistre chaque pixel en entier, sans compression digne de ce nom, d'où des fichiers d'une taille étonnante. C'est un choix délibéré, hérité d'une époque où la vitesse de décodage comptait plus que l'espace disque, et il survit aujourd'hui surtout dans des utilitaires Windows, d'anciens pilotes de scanner et d'appareil photo, des outils de capture d'écran et du matériel industriel ou médical spécifié il y a plusieurs décennies. Dès que vous devez en envoyer un par e-mail, le mettre sur un site web ou le confier à presque n'importe quelle application moderne, la taille devient le problème. La conversion en JPG le réduit en général de 90 % ou plus, sans différence visible avec un réglage de qualité raisonnable. Elle règle aussi un problème de compatibilité qui surprend : si le BMP s'ouvre sans difficulté sous Windows, sa prise en charge sur macOS, iOS et Android est plus inégale qu'on ne l'attendrait d'un format aussi ancien.",
    notes: [
      {
        heading: "Attendez-vous à une très forte réduction",
        body:
          "Une réduction de 90 à 97 % est normale, et ce n'est pas le signe d'un problème. Vous passez d'un format qui enregistre chaque pixel tel quel à un format qui modélise ce que la vision humaine perçoit réellement. Si vous voulez cette réduction sans aucune perte, convertissez plutôt en PNG : le gain reste important par rapport au BMP, généralement de 40 à 70 %, et il est sans perte.",
      },
      {
        heading: "Cette conversion se fait toujours en local",
        body:
          "La plupart des outils du site confient les fichiers très lourds à un serveur, mais le BMP en est exclu volontairement : la bibliothèque d'images du serveur n'a pas de décodeur BMP, et un bitmap envoyé échouerait au lieu d'être converti. Votre navigateur, lui, gère parfaitement le BMP : les conversions restent donc sur votre machine, quelle que soit la taille du fichier. Vu le poids des bitmaps, c'est aussi la voie la plus rapide, puisqu'il n'y a aucun envoi à attendre.",
      },
      {
        heading: "Transparence et profondeur de couleur",
        body:
          "La plupart des BMP en circulation sont en 24 bits, sans transparence : il n'y a donc en général rien à aplatir. Certains BMP 32 bits contiennent toutefois un canal alpha ; comme le JPG ne peut pas l'enregistrer, toute zone transparente est remplie avec la couleur de fond que vous choisissez. Les très anciens bitmaps 8 bits ou 1 bit se convertissent sans problème, mais un scan noir et blanc en 1 bit sera souvent mieux servi par le PNG, qui gère le monochrome à bords nets plus efficacement que le JPG.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi les fichiers BMP sont-ils si lourds ?",
        a: "Parce qu'ils sont enregistrés pratiquement sans compression, chaque pixel écrit en entier. Un BMP 24 bits de 12 mégapixels pèse environ 36 Mo. Le JPG compresse la même image à environ un dixième de ce poids, voire moins.",
      },
      {
        q: "De combien le JPG sera-t-il plus léger ?",
        a: "En général de 90 à 97 %. Un bitmap de 36 Mo finit couramment entre 1 et 4 Mo, selon le réglage de qualité et le niveau de détail de l'image.",
      },
      {
        q: "Vais-je perdre en qualité en convertissant un BMP en JPG ?",
        a: "Un peu, car le JPG est avec perte. Avec le réglage par défaut, cela ne se voit pas à une taille d'affichage normale. Si vous ne voulez aucune perte, convertissez plutôt en PNG, qui reste bien plus léger que le BMP.",
      },
      {
        q: "Puis-je convertir des fichiers BMP très volumineux ?",
        a: "Oui. La conversion BMP se fait toujours dans votre navigateur et non sur un serveur, car la bibliothèque du serveur ne sait pas lire le BMP. Les très gros fichiers prennent simplement un peu plus de temps.",
      },
      {
        q: "Les fichiers BMP gèrent-ils la transparence ?",
        a: "Les BMP 24 bits, les plus courants, non. Certains BMP 32 bits contiennent un canal alpha ; comme le JPG ne peut pas enregistrer la transparence, ces zones sont remplies avec la couleur de fond que vous choisissez.",
      },
      {
        q: "Faut-il convertir un BMP en JPG ou en PNG ?",
        a: "En JPG pour les photos et pour obtenir le fichier le plus léger possible. En PNG si vous voulez une qualité sans perte, si l'image est une capture d'écran ou un dessin au trait, ou si vous voulez conserver un canal alpha.",
      },
    ],
  },
};

export default copy;
