import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr JPG-to-WebP converter.
 *
 * Head term « JPG en WebP » (720 FR), « convertir JPG en WebP » and
 * « JPEG en WebP » as secondaries. The angle is performance — page speed and
 * Core Web Vitals — which no other French converter page talks about.
 */
const copy: LocalizedPairCopy = {
  name: "JPG en WebP",
  seoTitle: "JPG en WebP – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir JPG en WebP gratuitement et sans inscription : des images 25 à 35 % plus légères pour votre site, qualité réglable et dossiers entiers dans un ZIP.",
  unique: {
    intro:
      "Convertir vos JPG en WebP est le gain de vitesse le moins coûteux qui reste à la plupart des sites. La même photo, à qualité apparente égale, pèse en général 25 à 35 % de moins, et tous les navigateurs actuels prennent le format en charge depuis l'arrivée de Safari en 2020. Réglez la qualité, convertissez tout le dossier d'un coup et récupérez un ZIP.",
    whyConvert:
      "Ici, il s'agit presque toujours de performances. Les images sont, de loin, ce qui pèse le plus lourd sur une page web type, et les Core Web Vitals, le Largest Contentful Paint en particulier, dépendent surtout de la vitesse à laquelle l'image principale arrive. Le WebP vous offre une réduction de poids sensible sans les défauts visibles que vous obtiendriez en poussant simplement la compression JPG plus fort, car son encodeur a une génération d'avance et travaille par blocs plus grands et plus intelligents. L'objection de compatibilité qui freinait autrefois a pratiquement disparu : Chrome, Firefox, Edge, Opera et Safari décodent tous le WebP, ce qui couvre la quasi-totalité de vos visiteurs. La seule prudence qui reste concerne la destination du fichier. Le WebP est fait pour être servi sur le web ; il reste un mauvais choix pour l'archivage ou pour un fichier destiné à un imprimeur.",
    notes: [
      {
        heading: "Ne convertissez pas vos originaux",
        body:
          "Convertissez des copies destinées au web et laissez les fichiers de votre appareil photo tels quels. Un JPG a déjà subi une compression avec perte, et le réencoder en WebP le compresse une seconde fois : le résultat est parfait sur une page web, mais il marque un recul d'une génération, et ce n'est pas réversible. Considérez le WebP comme un format de sortie, au même titre qu'une miniature redimensionnée, et non comme un remplaçant de votre photothèque.",
      },
      {
        heading: "Quel réglage de qualité choisir",
        body:
          "Entre 0,80 et 0,85, vous êtes dans la zone idéale pour les photos d'un site web : c'est là que le gain de poids est le plus spectaculaire par rapport au coût visuel. Montez vers 0,92 et au-delà pour les images d'en-tête, les photos de produits ou tout ce qu'un client va agrandir. En dessous de 0,70 environ, l'encodeur commence à lisser les textures fines : la peau, le feuillage et les tissus sont les premiers touchés. Convertissez une image représentative, examinez-la attentivement, puis lancez le lot avec ce réglage.",
      },
      {
        heading: "Prévoyez une solution de repli si nécessaire",
        body:
          "Si vous devez prendre en charge des navigateurs vraiment anciens, la méthode classique est l'élément HTML picture : le WebP en premier, le JPG d'origine comme source de repli, et chaque navigateur prend ce qu'il comprend. La plupart des créateurs de sites, CDN et CMS modernes gèrent désormais cette négociation automatiquement : vérifiez si le vôtre le fait déjà avant d'ajouter du code à la main.",
      },
    ],
    faqs: [
      {
        q: "De combien mes images vont-elles vraiment maigrir ?",
        a: "Pour des photos ordinaires, comptez 25 à 35 % à qualité visuelle égale. Les graphiques en aplats et les captures d'écran font souvent bien mieux. Le gain dépend beaucoup de l'image : convertissez quelques fichiers représentatifs avant de fixer un réglage pour toute une photothèque.",
      },
      {
        q: "Peut-on utiliser le WebP sur son site sans risque aujourd'hui ?",
        a: "Oui. Tous les navigateurs actuels le décodent : Chrome et Firefox depuis plus de dix ans, Safari depuis 2020. C'est un format grand public, pas une expérimentation.",
      },
      {
        q: "Convertir un JPG en WebP fait-il perdre de la qualité ?",
        a: "Il y a une légère perte de génération, car le JPG était déjà compressé avec perte et le WebP le compresse à nouveau. À partir d'une qualité de 0,80, elle ne se voit pas à une taille d'affichage normale. Partez toujours du meilleur original disponible plutôt que d'une copie déjà réduite.",
      },
      {
        q: "Le WebP convient-il à l'impression ?",
        a: "Non. Les chaînes d'impression attendent du TIFF, du PNG ou du JPG de haute qualité, et beaucoup d'outils de prépresse n'ouvrent pas du tout le WebP. Réservez-le au web et gardez un autre format pour l'impression.",
      },
      {
        q: "Le WebP gère-t-il la transparence ?",
        a: "Oui, le WebP dispose d'un canal alpha complet. Un JPG source n'a aucune transparence à transmettre, mais si vous convertissez un PNG en WebP, la transparence est conservée.",
      },
      {
        q: "Puis-je convertir un dossier entier en une seule fois ?",
        a: "Oui. Ajoutez autant de JPG que vous voulez : ils sont convertis à la suite et vous sont rendus dans un seul ZIP. C'est la façon habituelle de migrer une photothèque existante.",
      },
      {
        q: "Les données EXIF de l'appareil photo sont-elles conservées ?",
        a: "Non. Cette conversion ne transfère pas les métadonnées du JPG vers le WebP : la date, le modèle d'appareil ou la position GPS ne suivent pas l'image publiée. Pour une photo destinée à une page web, c'est souvent un avantage : le fichier est plus léger et ne révèle aucune information privée.",
      },
    ],
  },
};

export default copy;
