import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/reduire-taille-image-ko — the hub of the KB family
 * (variant of compress-image, target-size mode open, no limit pre-filled).
 * Primary query: « Réduire la taille d'une image en Ko »; secondaries:
 * « réduire le poids d'une image », « réduire une photo en Ko ». This page
 * owns the GENERAL question — any limit, what a Ko limit means — and leaves
 * each common limit to its own page.
 */
const content: ToolPageContent = {
  toolId: "reduce-image-size-in-kb",
  locale: "fr",
  name: "Réduire la taille d'une image en Ko",
  tagline:
    "Indiquez n'importe quelle limite — 20 Ko, 50 Ko, 100 Ko ou 1 Mo — et obtenez le JPG le plus net qui passe en dessous. Plusieurs images à la fois, gratuit et traité dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Réduire la taille d'une image en Ko – gratuit | oMyImage",
  metaDescription:
    "Réduire la taille d'une image en Ko : saisissez la limite (50 Ko, 100 Ko, 1 Mo) et réduisez le poids de vos photos sans perte visible, dans votre navigateur.",

  intro:
    "Les formulaires en ligne ne vous demandent pas un réglage de qualité, ils vous donnent un chiffre : « photo de moins de 50 Ko », « signature entre 10 et 20 Ko », « taille maximale du fichier : 1 Mo ». Cet outil fonctionne exactement de la même façon. Ajoutez vos images, saisissez la limite en Ko ou en Mo, et chacune revient en dessous — avec la meilleure qualité possible, et réduite en pixels seulement si la qualité seule ne suffit pas. Il accepte le JPG, le PNG et le WebP, traite tout un lot d'un coup et n'envoie jamais vos photos nulle part. C'est la façon la plus directe de réduire le poids d'une image pour une démarche administrative, une candidature ou une pièce jointe d'e-mail.",

  sections: [
    {
      heading: "Fixez la taille, pas la qualité",
      id: "size-first",
      body: [
        "La méthode habituelle pour alléger une photo destinée à un formulaire, c'est le tâtonnement : on baisse un curseur de qualité, on enregistre, on vérifie le poids dans l'explorateur de fichiers, puis on recommence. Chaque essai impose une nouvelle compression, et chaque nouvelle compression d'un JPG déjà compressé efface encore un peu de détail.",
        "Ici, vous indiquez plutôt le résultat dont vous avez besoin. L'outil encode l'image plusieurs fois en arrière-plan, se rapproche de la qualité la plus élevée dont le fichier reste sous votre limite, et vous remet précisément cette version. Une photo de téléphone de 12 mégapixels pleine de bruit et une capture d'écran bien nette demandent des réglages totalement différents pour atteindre 100 Ko. Inutile de savoir lesquels : la recherche se fait séparément pour chaque image.",
      ],
    },
    {
      heading: "Ce que « Ko » veut dire sur un formulaire",
      id: "kb-meaning",
      body: [
        "Un kilo-octet vaut soit 1000 octets, soit 1024 octets, selon qui compte. L'Explorateur de fichiers de Windows affiche les tailles en unités de 1024 ; la plupart des téléphones et des Mac, ainsi que de nombreux formulaires web, utilisent 1000. L'écart n'est que de 2,4 %, mais il suffit pour qu'un fichier de 50,5 Ko soit refusé par un formulaire qui autorise « 50 Ko ».",
        "L'outil évite le débat en visant sous la lecture la plus stricte : une limite de 50 Ko signifie moins de 50 000 octets. Ce fichier passe aussi bien sur un formulaire qui compte 1000 octets par kilo-octet que sur un formulaire qui en compte 1024. Votre gestionnaire de fichiers affichera peut-être 48 ou 49 Ko : cette petite marge est voulue.",
      ],
    },
    {
      heading: "Réduire le poids ou réduire les pixels",
      id: "kb-vs-pixels",
      body: [
        "Le poids du fichier et les dimensions de l'image sont deux choses différentes, et certains formulaires exigent les deux : « 200 × 230 pixels, moins de 50 Ko ». Les pixels décident de la taille de l'image à l'écran ; les kilo-octets décident de la place qu'elle occupe en mémoire. Une photo de 4000 pixels de large peut tenir dans 100 Ko, et une image de 400 pixels peut peser 300 Ko si elle est enregistrée en PNG non compressé.",
        "Quand un formulaire impose des dimensions exactes en pixels, redimensionnez d'abord l'image avec l'outil « Redimensionner une image », puis ramenez le fichier sous la limite en Ko ici. Quand il ne donne qu'une limite en Ko, ne touchez pas aux dimensions : cet outil les réduit lui-même, et seulement autant que nécessaire.",
      ],
    },
    {
      heading: "Les limites courantes et leur origine",
      id: "common-limits",
      body: [
        "Sur les formulaires de concours et de recrutement, les signatures et empreintes sont en général plafonnées à 10–20 Ko. Les photos de type identité, sur ces mêmes formulaires, tournent autour de 20–50 Ko, parfois 100 Ko. Les plateformes d'admission, les sites d'emploi et les demandes de visa ou de pièce d'identité acceptent souvent 100 à 300 Ko pour une photo ou un document scanné, tandis que les envois plus généraux — devoirs, tickets d'assistance, annonces — limitent souvent les images à 1 ou 2 Mo.",
        "Chacune de ces limites a sa propre page, avec des conseils adaptés à cette taille, accessible via les liens plus haut. Cette page-ci sert pour tout le reste : n'importe quel chiffre que vous saisissez, en Ko ou en Mo.",
      ],
    },
  ],

  howToTitle: "Comment réduire la taille d'une image en Ko",
  steps: [
    { title: "Ajoutez vos images", description: "Sélectionnez ou glissez un ou plusieurs fichiers JPG, PNG ou WebP." },
    { title: "Saisissez la limite", description: "Indiquez la taille maximale en Ko ou en Mo, ou touchez une valeur courante comme 50 Ko ou 100 Ko." },
    { title: "Compressez et téléchargez", description: "Chaque image est enregistrée sous la limite ; téléchargez un seul fichier ou tous les fichiers dans un ZIP." },
  ],

  features: [
    { icon: "straighten", title: "La taille dont vous avez besoin", description: "Saisissez n'importe quelle limite en Ko ou en Mo — pas seulement une liste de préréglages — et chaque image passe en dessous." },
    { icon: "high_quality", title: "La meilleure qualité qui tient", description: "L'outil cherche la qualité la plus élevée sous votre limite et ne réduit les pixels qu'en cas de besoin." },
    { icon: "lock", title: "Tout reste sur votre appareil", description: "La compression s'effectue sur votre appareil : photos d'identité, signatures et documents y restent." },
  ],

  faqs: [
    { q: "Comment réduire la taille d'une photo en Ko ?", a: "Ajoutez la photo, saisissez la taille voulue en Ko (ou touchez l'une des tailles courantes), puis cliquez sur « Compresser ». Le fichier téléchargé est garanti sous ce chiffre, avec la meilleure qualité possible." },
    { q: "Réduire le poids d'une image en Ko, est-ce la même chose que la compresser ?", a: "Dans la plupart des cas, oui. Réduire une image « en Ko » veut dire diminuer le poids du fichier, et c'est précisément ce que fait la compression ; cet outil réduit aussi les dimensions en pixels quand la compression seule n'atteint pas la limite." },
    { q: "Pourquoi mon fichier affiche 49 Ko alors que j'ai demandé 50 Ko ?", a: "Parce que l'outil reste sous 50 000 octets, ce que votre ordinateur peut afficher comme environ 48,8 kilo-octets de 1024 octets chacun. Cette marge garantit que le fichier passe, quelle que soit la façon dont le formulaire compte un kilo-octet." },
    { q: "Puis-je saisir une taille précise, comme 37 Ko ?", a: "Oui. N'importe quel nombre entier ou décimal convient, en Ko ou en Mo. Les tailles courantes ne sont que des raccourcis." },
    { q: "Réduire la taille en Ko modifie-t-il les dimensions ?", a: "Seulement si c'est indispensable. L'outil baisse d'abord la qualité, et ne réduit la largeur et la hauteur que si même une qualité basse laisserait le fichier au-dessus de votre limite." },
    { q: "Quel format choisir ?", a: "Le JPG, sauf si vous savez que le site accepte le WebP. Presque tous les formulaires d'envoi acceptent le JPG ; le WebP atteint la même taille avec une qualité un peu meilleure, mais certains portails anciens le refusent encore." },
    { q: "Que devient un PNG transparent ?", a: "Le JPG ne sait pas stocker la transparence : les zones transparentes sont donc remplies avec la couleur de fond que vous choisissez — blanc par défaut, ce que la plupart des formulaires attendent." },
    { q: "Puis-je ramener plusieurs photos à la même taille en une fois ?", a: "Oui. Ajoutez-en autant que vous voulez ; chacune est compressée séparément jusqu'à la même limite, et vous pouvez toutes les télécharger ensemble dans un ZIP." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "En règle générale, non. La réduction se fait dans votre navigateur, sur votre propre appareil. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, est traitée sur notre serveur, puis supprimée au bout d'une heure environ." },
  ],

  security:
    "Vos images restent sur votre appareil. La réduction de taille en Ko a lieu dans votre navigateur : rien n'est envoyé, stocké ni vu par quelqu'un d'autre, ce qui compte quand il s'agit d'une photo d'identité ou d'une signature. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
