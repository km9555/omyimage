import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/flouter-arriere-plan (variant of remove-background:
 * rembg cut-out composited over a blurred copy of the original, in the
 * browser). Target query « Flouter l'arrière-plan » (Nov 2026), secondary
 * « flou arrière-plan ». Vous. Distinct from /fr/flouter-photo (blurs regions
 * you choose). Extra French-only section: profile and CV photos.
 */
const content: ToolPageContent = {
  toolId: "blur-background",
  locale: "fr",
  name: "Flouter l'arrière-plan",
  tagline:
    "Floutez l'arrière-plan de n'importe quelle photo en gardant la personne ou le produit bien net : l'effet du mode portrait, ajouté après coup. L'IA trouve le sujet, vous choisissez l'intensité. Gratuit et sans filigrane.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Flouter l'arrière-plan d'une photo – IA gratuite | oMyImage",
  metaDescription:
    "Floutez l'arrière-plan d'une photo avec l'IA : le sujet reste net, le fond se brouille comme en mode portrait. Flou d'arrière-plan réglable et gratuit.",

  intro:
    "Un arrière-plan flou, c'est ce qui donne au mode portrait d'un téléphone l'allure d'une photo prise avec un gros appareil : le sujet ressort, et une pièce en désordre, une foule ou une rue animée se transforment en douces taches de couleur. Cet outil ajoute cet effet à une photo que vous avez déjà prise. Un modèle d'IA repère la personne, l'animal ou le produit, le laisse exactement tel qu'il était et floute tout ce qui se trouve derrière, autant que vous le souhaitez. Le réglage de l'intensité est ensuite instantané : vous trouvez le bon flou d'arrière-plan à l'œil, sans relancer quoi que ce soit.",

  sections: [
    {
      heading: "Comment ça marche",
      id: "how",
      body: [
        "D'abord, un modèle de segmentation sur notre serveur délimite le sujet et le renvoie détouré. Ensuite, votre navigateur reprend la photo d'origine, la floute et replace le sujet net par-dessus, exactement au même endroit.",
        "Comme le flou est appliqué sur votre appareil, déplacer le curseur d'intensité ne renvoie rien au serveur : le sujet est trouvé une seule fois, et vous pouvez essayer un flou léger, moyen ou fort sans consommer un nouveau traitement IA.",
      ],
    },
    {
      heading: "Quelle intensité de flou paraît naturelle",
      id: "strength",
      body: [
        "Un vrai appareil photo floute d'autant plus l'arrière-plan qu'il est loin du sujet. Un flou léger convient à un portrait pris devant un mur proche ; un flou fort, à une personne debout devant un paysage lointain ou une rue. Si le flou est beaucoup plus fort que ce que suggère la profondeur de la scène, la photo commence à ressembler à un découpage collé sur un tableau.",
        "Commencez vers le milieu du curseur et comparez avec la vue avant/après. Pour les photos de produit destinées à une boutique, un flou plus fort fonctionne souvent, car le but est d'éliminer les distractions, pas d'imiter un objectif.",
      ],
    },
    {
      heading: "Flouter l'arrière-plan ou flouter une partie de l'image ?",
      id: "vs-blur-image",
      body: [
        "Cette page garde le sujet principal net et adoucit automatiquement tout le reste. Si vous devez au contraire masquer quelque chose de précis (une plaque d'immatriculation, un visage dans la foule, un écran affichant des informations privées), utilisez « Flouter une photo » ou « Flouter un visage », qui ne floutent que les zones que vous marquez.",
      ],
    },
    {
      heading: "Les photos qui fonctionnent le mieux",
      id: "best",
      body: [
        "Un sujet principal bien identifiable avec un peu d'espace autour : une personne cadrée à la taille, un animal, une voiture, un produit posé sur une table. Les photos de groupe chargées, où l'on ne sait pas qui est le sujet, et les détails fins comme les rayons d'un vélo ou des mèches de cheveux sur un fond de couleur proche sont plus difficiles pour le modèle, et ses contours peuvent se voir.",
      ],
    },
    {
      heading: "Arrière-plans flous pour les photos de produit et les annonces",
      id: "products",
      body: [
        "Les sites de petites annonces et les places de marché regorgent de photos prises sur la table de la cuisine ou le sol d'une chambre. Flouter l'arrière-plan conserve le décor réel, auquel les acheteurs font souvent plus confiance qu'à un fond blanc rapporté, tout en attirant l'attention sur l'objet lui-même.",
        "Photographiez le produit légèrement en plongée, avec un peu de distance entre lui et le mur derrière, et utilisez un flou plus fort que pour un portrait. Si la plateforme exige plutôt un fond blanc uni, utilisez « Changer le fond d'une photo ».",
      ],
    },
    {
      heading: "Flouter le fond d'une photo de profil ou de CV",
      id: "profile",
      body: [
        "Une photo de profil pour LinkedIn, WhatsApp ou un CV gagne beaucoup quand l'arrière-plan ne distrait pas. Si la photo a été prise chez vous ou au bureau, flouter le fond cache le désordre et ce que vous ne souhaitez pas montrer, et laisse le visage au premier plan sans donner l'impression d'un montage.",
        "Pour une photo de profil, un flou moyen suffit en général : assez pour que le fond ne se lise plus, sans tomber dans l'effet découpage. Cadrez le visage et les épaules avec un peu d'air autour, pour que le modèle détecte bien le contour des cheveux.",
      ],
    },
  ],

  howToTitle: "Comment flouter l'arrière-plan d'une photo",
  steps: [
    { title: "Importez la photo", description: "Sélectionnez un JPG, PNG ou WEBP avec une personne, un animal ou un objet bien visible." },
    { title: "Floutez l'arrière-plan", description: "Cliquez sur « Flouter l'arrière-plan » : l'IA trouve le sujet en quelques secondes." },
    { title: "Ajustez et téléchargez", description: "Déplacez le curseur d'intensité jusqu'à obtenir le bon rendu, comparez avec l'original et téléchargez." },
  ],

  features: [
    { icon: "lens_blur", title: "Effet mode portrait", description: "Le sujet reste exactement tel qu'il était pendant que tout ce qui se trouve derrière s'adoucit." },
    { icon: "tune", title: "Intensité réglable", description: "D'un léger adoucissement à un flou prononcé, modifié instantanément dans votre navigateur." },
    { icon: "verified_user", title: "Sans filigrane", description: "Gratuit, sans rien d'apposé sur votre photo." },
  ],

  faqs: [
    { q: "Comment flouter l'arrière-plan d'une photo ?", a: "Importez la photo et cliquez sur « Flouter l'arrière-plan ». Une fois le sujet trouvé par l'IA, déplacez le curseur d'intensité jusqu'au niveau qui vous plaît et téléchargez le résultat." },
    { q: "La personne reste-t-elle parfaitement nette ?", a: "Oui : le sujet est repris intact de votre photo d'origine. Seul l'arrière-plan est flouté." },
    { q: "Changer l'intensité du flou consomme-t-il un autre traitement IA ?", a: "Non. Le sujet est trouvé une seule fois sur notre serveur ; le flou lui-même est appliqué dans votre navigateur, vous pouvez donc l'ajuster autant de fois que vous le voulez." },
    { q: "Puis-je flouter l'arrière-plan d'une photo de produit ?", a: "Oui. Un produit posé sur une table ou une étagère fonctionne bien, et un flou plus fort est un moyen rapide de faire oublier un décor encombré sur la photo d'une annonce." },
    { q: "Quelle différence avec « Flouter une photo » ?", a: "« Flouter une photo » floute les zones que vous choisissez. Cet outil choisit pour vous : il garde le sujet principal net et floute tout le reste." },
    { q: "Dans quel format est le résultat ?", a: "En JPG, à la même taille que le détourage renvoyé par l'IA. Il est fait pour être partagé, publié ou imprimé : il n'a donc pas de transparence." },
    { q: "Ma photo est-elle conservée ?", a: "Brièvement seulement. Le sujet est trouvé sur notre serveur, le résultat est gardé derrière un lien privé et supprimé automatiquement dans l'heure, et le flou est appliqué sur votre appareil." },
    { q: "Cela marche-t-il avec une photo de téléphone prise sans mode portrait ?", a: "Oui, c'est précisément l'usage prévu. Une photo ordinaire avec une personne bien visible reçoit après coup un arrière-plan flou comme en mode portrait, avec l'avantage de pouvoir choisir librement l'intensité." },
  ],

  security:
    "La détection du sujet s'exécute sur notre serveur avec le moteur open source rembg ; les résultats sont conservés brièvement derrière un lien de téléchargement privé et supprimés automatiquement dans l'heure. Le flou est appliqué dans votre navigateur, et rien n'est partagé ni réutilisé.",
};

export default content;
