import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/redimensionner-image-en-cm (variant of resize-image,
 * Print size mode). Target query: «Redimensionner une image en cm»;
 * secondary «changer la taille d'une image en cm». Angle: tailles
 * d'impression exactes en cm/mm à 300 DPI, DPI enregistré dans le fichier.
 */
const content: ToolPageContent = {
  toolId: "resize-image-in-cm",
  locale: "fr",
  name: "Redimensionner une image en cm",
  tagline:
    "Redimensionnez une image à une taille exacte en centimètres, millimètres ou pouces, à 300 DPI ou au DPI de votre choix — avec le DPI enregistré dans le fichier, pour qu'elle s'imprime à cette taille. Gratuit, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Redimensionner une image en cm – à 300 DPI | oMyImage",
  metaDescription:
    "Redimensionner une image en cm gratuitement : changez la taille d'une image en cm, mm ou pouces à 300 DPI, DPI enregistré pour imprimer à la bonne mesure.",

  intro:
    "Les formulaires, les imprimeurs et les modèles de documents décrivent les images en centimètres ou en pouces : une photo de 3,5 × 4,5 cm, un tirage 10 × 15 cm, une illustration de 8 cm de large dans un rapport. Or une image est faite de pixels, il faut donc traduire cette mesure. Cet outil s'en charge : pour changer la taille d'une image en cm, saisissez la mesure en cm, mm ou pouces, choisissez le DPI, et votre image est redimensionnée exactement au bon nombre de pixels, avec le DPI inscrit dans le fichier, pour que n'importe quelle imprimante ou n'importe quel traitement de texte la place à la taille demandée.",

  sections: [
    {
      heading: "Des centimètres aux pixels",
      id: "formula",
      body: [
        "Pixels = taille en pouces × DPI, et un pouce mesure 2,54 cm. À 300 DPI, chaque centimètre demande environ 118 pixels. Une photo de 3,5 × 4,5 cm devient donc 413 × 531 pixels, et une page A4 complète de 21 × 29,7 cm devient 2480 × 3508 pixels.",
        "Vous n'avez jamais à faire le calcul vous-même. Saisissez la mesure, et le panneau affiche la taille en pixels à laquelle la première image sera redimensionnée au DPI choisi. Passez des cm aux mm ou aux pouces quand vous voulez : la mesure est convertie pour que la taille physique reste la même.",
      ],
    },
    {
      heading: "Formats d'impression courants à 300 DPI",
      id: "common",
      body: [
        "Une photo d'identité de 3,5 × 4,5 cm : 413 × 531 px. Un tirage photo 10 × 15 cm : 1181 × 1772 px, ou 1200 × 1800 px pour un vrai 4 × 6 pouces. Une photo de 2 × 2 pouces : 600 × 600 px. Une page A4 : 2480 × 3508 px. Une page A5 (14,8 × 21 cm) : 1748 × 2480 px.",
        "Pour les photos de passeport et d'identité soumises à des règles sur la taille du visage, « Photo d'identité » s'occupe du cadrage et du fond à votre place ; cet outil sert pour toutes les autres tailles dont vous avez besoin sur papier.",
      ],
    },
    {
      heading: "Conserver les proportions",
      id: "aspect",
      body: [
        "Avec « Conserver les proportions (ajuster) » activé, vous saisissez un côté et l'autre suit la forme propre de l'image : rien n'est écrasé. Pour obtenir exactement les deux côtés — par exemple 3,5 × 4,5 cm à partir d'une photo à l'horizontale —, recadrez d'abord l'image à cette forme avec le bouton de recadrage de sa carte, puis saisissez la mesure. Désactiver le cadenas et saisir les deux côtés étire l'image pour qu'elle rentre, ce qui est rarement souhaitable.",
        "Quand la mesure est préremplie à partir de la première image, elle indique la taille d'impression actuelle de cette image au DPI choisi : un moyen rapide de voir à quelle taille une photo s'imprimerait telle quelle.",
      ],
    },
    {
      heading: "Quel DPI choisir",
      id: "dpi",
      body: [
        "300 DPI est la norme pour les photos et les documents imprimés, et la valeur par défaut ici. 200 DPI est courant pour les formulaires de candidature et s'imprime encore bien ; 150 DPI convient aux grandes affiches vues à distance ; 600 DPI est réservé au dessin au trait et aux détails fins. Un DPI plus élevé signifie plus de pixels pour les mêmes centimètres, donc un fichier plus lourd.",
        "Si votre image compte moins de pixels que la mesure n'en exige, elle est agrandie et le tirage paraîtra flou. Le panneau affiche les pixels visés : comparez-les à la taille réelle de l'image avant de redimensionner, et pour un résultat net, imprimez plus petit ou partez d'un original plus grand.",
      ],
    },
    {
      heading: "Le DPI est enregistré dans le fichier",
      id: "saved",
      body: [
        "Les fichiers JPG et PNG redimensionnés sont marqués avec le DPI choisi : Word, Google Docs, les logiciels de mise en page et les boîtes de dialogue d'impression les affichent d'emblée à la taille physique prévue. Le WEBP n'a pas de champ DPI qu'un navigateur puisse écrire ; choisissez donc JPG ou PNG comme format de sortie quand la taille d'impression compte.",
        "Les noms de fichiers indiquent ce que vous avez produit, par exemple photo_3.5x4.5cm.jpg, pour qu'un lot de tailles différentes reste facile à distinguer.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner une image en cm",
  steps: [
    { title: "Ajoutez votre image", description: "Sélectionnez une ou plusieurs images JPG, PNG, WEBP, GIF ou BMP." },
    { title: "Saisissez la mesure et le DPI", description: "Indiquez la largeur ou la hauteur en cm, mm ou pouces et choisissez le DPI — 300 est présélectionné." },
    { title: "Redimensionnez et téléchargez", description: "Téléchargez des images à la taille exacte en pixels, avec le DPI enregistré dans le fichier." },
  ],

  features: [
    { icon: "straighten", title: "cm, mm ou pouces", description: "Saisissez la mesure dans l'unité de votre formulaire ou de votre imprimeur ; les pixels sont calculés pour vous." },
    { icon: "high_quality", title: "DPI enregistré dans le fichier", description: "Les JPG et PNG produits portent le DPI et s'impriment donc à la taille saisie." },
    { icon: "lock", title: "Dans votre navigateur", description: "Vos images sont redimensionnées sur votre propre appareil." },
  ],

  faqs: [
    { q: "Comment redimensionner une image en cm ?", a: "Ajoutez l'image, saisissez la largeur ou la hauteur en centimètres, choisissez le DPI et cliquez sur « Redimensionner ». L'image prend la taille exacte en pixels et le DPI est enregistré dans le fichier." },
    { q: "Combien de pixels fait 1 cm ?", a: "Cela dépend du DPI : environ 118 pixels à 300 DPI, 79 à 200 DPI et 28 à 72 DPI." },
    { q: "Combien de pixels pour 3,5 × 4,5 cm ?", a: "413 × 531 pixels à 300 DPI, ou 276 × 354 pixels à 200 DPI." },
    { q: "Puis-je redimensionner en pouces ou en millimètres ?", a: "Oui. Passez l'unité en pouces ou en mm ; les valeurs sont converties pour que la taille physique reste la même." },
    { q: "Quel DPI utiliser ?", a: "300 DPI pour les photos et les documents, 200 DPI pour la plupart des formulaires, 150 DPI pour les grandes affiches." },
    { q: "L'image s'imprimera-t-elle à la taille saisie ?", a: "Oui, en JPG ou en PNG : le DPI est enregistré dans le fichier, donc imprimantes et traitements de texte utilisent la bonne taille." },
    { q: "Pourquoi mon image est-elle floue après un redimensionnement en cm ?", a: "Elle avait moins de pixels que la mesure n'en demandait et a été agrandie. Imprimez-la plus petite, baissez le DPI ou partez d'un original plus grand." },
    { q: "Comment obtenir une largeur et une hauteur exactes sans déformer l'image ?", a: "Recadrez d'abord l'image à la bonne forme avec le bouton de recadrage de sa carte, puis saisissez les deux côtés." },
    { q: "Puis-je redimensionner plusieurs images à la même taille ?", a: "Oui. Ajoutez-les toutes ; chacune est redimensionnée à la même taille physique et elles se téléchargent ensemble dans un ZIP." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Le redimensionnement se fait dans votre navigateur ; seules les très grandes images peuvent être traitées sur notre serveur, où elles sont supprimées immédiatement." },
    { q: "Comment mettre une image au format A4 ?", a: "Saisissez 21 × 29,7 cm, avec « Conserver les proportions (ajuster) » activé si vous ne voulez pas la déformer. À 300 DPI, une page A4 complète demande 2480 × 3508 pixels." },
  ],

  security:
    "Vos images sont redimensionnées dans votre navigateur, et le DPI est inscrit dans chaque fichier sur place. Les très grandes images peuvent être traitées sur notre serveur et y sont supprimées immédiatement ; rien n'est conservé.",
};

export default content;
