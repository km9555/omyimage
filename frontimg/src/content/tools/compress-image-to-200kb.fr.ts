import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-200ko (variant of compress-image,
 * preset targetKb 200). Primary query: « Compresser une image à 200 Ko »;
 * secondary: « réduire une photo à 200 Ko ». Angle: a generous budget — full
 * application SETS (photo, ID scan, diploma) and print-worthy photos.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-200kb",
  locale: "fr",
  name: "Compresser une image à 200 Ko",
  tagline:
    "Compressez photos et documents scannés sous 200 Ko pour les plateformes d'inscription, d'admission et d'emploi. Des photos qui restent nettes, tout un dossier d'un coup, et aucun fichier envoyé.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 200 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 200 Ko : photo, pièce d'identité et diplôme scannés pour votre dossier de candidature. Réduisez une photo à 200 Ko sans perte visible.",

  intro:
    "200 Ko, c'est la limite qu'appliquent les plateformes d'inscription et d'admission, les systèmes de bourses et de recrutement, ainsi que de nombreux sites d'emploi, à chaque fichier que vous joignez : une photo, le scan de votre pièce d'identité, un diplôme, un relevé de notes. C'est deux fois le budget d'un formulaire à 100 Ko et quatre fois celui d'un formulaire à 50 Ko : l'objectif n'est donc pas seulement de tenir dans la limite, mais d'y tenir en ressemblant toujours à l'original. Ajoutez tout le dossier, et chaque fichier revient en JPG de moins de 200 Ko avec la meilleure qualité qui tienne.",

  sections: [
    {
      heading: "Une limite généreuse : profitez-en",
      id: "generous",
      body: [
        "À 200 Ko, un portrait garde environ 1200 × 1600 pixels en haute qualité : assez net pour être imprimé au format photo d'identité et agrandi à l'écran. Comme l'outil cherche la qualité la plus élevée sous la limite au lieu d'appliquer un réglage fixe, une photo propre peut ressortir avec une qualité proche de l'original, tandis qu'une photo bruitée et très détaillée reçoit un peu plus de compression.",
        "Si votre photo est déjà un JPG bien compressé de moins de 200 Ko, elle vous est rendue intacte : aucune raison de recompresser un fichier que le formulaire acceptera déjà.",
      ],
    },
    {
      heading: "Où l'on rencontre des limites de 200 Ko",
      id: "where",
      body: [
        "Les inscriptions aux concours de la fonction publique, les admissions dans les écoles et les universités, les demandes de bourse et beaucoup de sites d'emploi plafonnent chaque envoi autour de 100 à 300 Ko, 200 Ko étant le chiffre le plus courant. Ces mêmes formulaires demandent en général plusieurs fichiers : une photo officielle, une signature, une pièce d'identité, un diplôme ou un relevé de notes, parfois un livret de famille ou une lettre de recommandation.",
        "Lisez séparément l'exigence de chaque champ : la photo peut avoir droit à 200 Ko alors que la signature n'en autorise que 20 ou 50. Cette page règle 200 Ko ; les pages 20 Ko et 50 Ko, accessibles via les liens plus haut, sont réglées pour les champs plus petits.",
      ],
    },
    {
      heading: "Diplômes et pièces d'identité scannés sous 200 Ko",
      id: "scans",
      body: [
        "Un diplôme au format A4 photographié au téléphone pèse 3 à 6 Mo, consacrés pour l'essentiel à décrire la texture du papier et un éclairage irrégulier. Photographiez-le à plat, à la lumière du jour, en remplissant le cadre, et rognez l'arrière-plan avant de compresser : le résultat tient dans 200 Ko avec un texte et des tampons parfaitement lisibles.",
        "Les tampons et signatures en couleur sur un diplôme sont une bonne raison de le garder en couleur. Pour les pages de texte simple, un passage préalable en noir et blanc avec l'outil « Photo en noir et blanc » laisse encore plus de budget pour des caractères nets.",
      ],
    },
    {
      heading: "Vérifiez chaque fichier avant de l'envoyer",
      id: "check",
      body: [
        "La liste des résultats affiche le nouveau poids de chaque fichier et, s'il a fallu le redimensionner, ses nouvelles dimensions. Ouvrez-en un ou deux avant l'envoi : le texte doit se lire à 100 % de zoom, les visages ne doivent pas paraître barbouillés, et un fond de photo coloré doit rester d'une seule teinte unie.",
        "Renommez ensuite les fichiers si la plateforme est stricte sur les noms — beaucoup refusent les espaces, les parenthèses ou les caractères accentués — et conservez vos originaux. Si un formulaire demande plus tard une autre limite, recompressez à partir de l'original plutôt que de la copie à 200 Ko : la qualité perdue ne l'est ainsi qu'une seule fois.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 200 Ko",
  steps: [
    { title: "Ajoutez vos fichiers", description: "Sélectionnez ou glissez la photo et les scans à envoyer, en JPG, PNG ou WebP." },
    { title: "Compressez sous 200 Ko", description: "La limite de 200 Ko est déjà réglée ; vous pouvez saisir un autre chiffre pour un champ plus strict." },
    { title: "Téléchargez le dossier", description: "Chaque fichier pèse moins de 200 Ko ; téléchargez-les un par un, ou tous ensemble dans un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Une qualité proche de l'original", description: "Avec 200 Ko à disposition, les photos gardent l'essentiel de leur résolution et de leurs détails : l'outil utilise tout le budget." },
    { icon: "folder_zip", title: "Tout le dossier en une fois", description: "Photo, pièce d'identité scannée et diplômes en un seul lot, chacun sous 200 Ko, téléchargés ensemble dans un ZIP." },
    { icon: "lock", title: "Aucun envoi", description: "Les pièces d'identité sont compressées dans votre navigateur, sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une photo à 200 Ko ?", a: "Ajoutez-la et cliquez sur « Compresser » : la limite de 200 Ko est déjà réglée. Vous obtenez un JPG de moins de 200 Ko avec la meilleure qualité qui tienne." },
    { q: "Comment rendre le scan d'un diplôme plus léger que 200 Ko ?", a: "Photographiez le diplôme à plat sous un éclairage régulier, rognez tout ce qui l'entoure et compressez-le ici. Le texte et les tampons restent lisibles bien en dessous de 200 Ko." },
    { q: "Une photo de 200 Ko est-elle assez bonne pour être imprimée ?", a: "Pour les formats photo d'identité, oui : 200 Ko conservent bien assez de pixels. Pour un grand tirage, utilisez plutôt la photo d'origine." },
    { q: "Puis-je viser 199 Ko ou 190 Ko à la place ?", a: "Oui. Saisissez n'importe quel chiffre dans le champ de taille ; 200 Ko n'est que la valeur de départ." },
    { q: "Et si ma photo pèse déjà moins de 200 Ko ?", a: "Si c'est déjà un JPG sous la limite, vous récupérez l'original intact. Sinon, elle est convertie en JPG et maintenue sous 200 Ko." },
    { q: "Pour une limite de 200 Ko, faut-il choisir JPG ou WebP ?", a: "JPG. Les plateformes d'inscription et d'emploi acceptent presque toujours le JPG, alors que beaucoup refusent encore le WebP." },
    { q: "La compression modifie-t-elle les couleurs de la photo ?", a: "Aucun changement visible à ce poids. Le JPG stocke la couleur un peu moins précisément que la luminosité, mais à 200 Ko la différence ne se voit pas." },
    { q: "Que deviennent mes documents personnels pendant la compression ?", a: "Ils ne quittent pas votre appareil : la compression se fait dans votre navigateur, sans envoi ni stockage. Seule une image de plus de 16 mégapixels environ passe par notre serveur et y est supprimée au bout d'une heure environ." },
  ],

  security:
    "Photos, pièces d'identité et diplômes sont compressés sur votre appareil, dans votre navigateur. Pour des photos de taille normale, rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;
