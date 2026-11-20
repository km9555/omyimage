import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/image-en-hd (variant of upscale-image, Real-ESRGAN —
 * preset mode "hd": pick HD / Full HD / 4K, the AI scale is chosen for you).
 * Target query « Image en HD » (Nov 2026), secondaries « photo HD » and
 * « convertir image en HD ». Vous. Angle as in English: what "HD" means in
 * pixels. Extra French-only section on printing.
 */
const content: ToolPageContent = {
  toolId: "image-to-hd",
  locale: "fr",
  name: "Image en HD",
  seoName: "Convertir une image en HD",
  tagline:
    "Un convertisseur HD qui ajoute une vraie résolution : choisissez HD, Full HD ou 4K, et l'IA amène votre photo exactement à cette taille en reconstruisant les contours et les textures, pour qu'une petite image en basse résolution devienne une image HD propre. Gratuit et sans filigrane.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Image en HD – convertir en photo HD, Full HD, 4K | oMyImage",
  metaDescription:
    "Passez une image en HD avec l'IA : augmentez la résolution en HD, Full HD ou 4K avec des contours reconstruits, pas étirés. Photo HD gratuite et sans filigrane.",

  intro:
    "« HD » désigne un nombre de pixels : 1280 × 720 pour la HD, 1920 × 1080 pour la Full HD, 3840 × 2160 pour la 4K. Une photo enregistrée depuis une messagerie, une capture d'écran recadrée ou une photo d'un vieux téléphone est souvent bien plus petite, et l'étirer dans un logiciel ne fait qu'agrandir le flou. Ce convertisseur utilise un modèle d'IA d'agrandissement qui prédit le détail fin qu'aurait une version plus grande : les contours ressortent nets au lieu d'être mous. Importez une image, choisissez la taille voulue (HD, Full HD ou 4K) et téléchargez le résultat exactement à cette taille sur son côté le plus long. Vous convertissez ainsi une image en HD sans effet de pixelisation.",

  sections: [
    {
      heading: "Ce que signifie HD pour une photo",
      id: "hd-pixels",
      body: [
        "Les résolutions vidéo sont devenues les noms courants des tailles d'image. Une image est « HD » quand elle mesure au moins 1280 pixels de large environ, « Full HD » à 1920 pixels et « 4K » à environ 3840. Une photo de 640 × 480 agrandie 2× devient 1280 × 960, soit de la HD ; 3× donne 1920 × 1440, au-delà de la Full HD ; 4× atteint 2560 × 1920.",
        "Le bon agrandissement dépend donc du point de départ, et c'est pourquoi vous choisissez ici la cible, pas le facteur : le convertisseur calcule le plus petit facteur d'IA qui l'atteint et dimensionne le résultat à exactement 1280, 1920 ou 3840 pixels sur le côté le plus long. Une image déjà plus grande que la cible revient à la taille de la cible, nettoyée. Et si même 4× ne suffit pas (une vignette de 400 pixels ne peut pas honnêtement devenir de la 4K), vous recevez le résultat en 4× plutôt qu'une image étirée.",
      ],
    },
    {
      heading: "Pourquoi un simple redimensionnement ne rend pas une image HD",
      id: "vs-resize",
      body: [
        "Un redimensionnement classique répartit les pixels existants sur une grille plus grande et calcule des transitions entre eux. L'image grandit, mais aucune information nouvelle n'apparaît : chaque contour devient une rampe floue et le texte paraît baveux.",
        "Un agrandisseur à IA a appris, sur des millions de paires d'images, à quoi ressemble généralement le détail fin à une résolution plus élevée : comment se dessinent des cheveux, des briques, un feuillage ou des lettres. Il ajoute ce détail pendant l'agrandissement. Le résultat n'est pas un original retrouvé, mais il se lit comme une image réellement plus nette, ce qui est bien ce que l'on attend quand on veut « convertir une image en HD ».",
      ],
    },
    {
      heading: "Les images qui passent bien en HD, et les autres",
      id: "good-sources",
      body: [
        "Les photos de produit, les paysages, les illustrations, les logos, les captures de jeux vidéo et la plupart des portraits se convertissent très bien, car leur détail suit des motifs que le modèle connaît. Les photos fortement compressées, comme les images transférées plusieurs fois par messagerie, s'améliorent aussi nettement : le modèle supprime une bonne partie des blocs en même temps qu'il agrandit.",
        "Les tout petits visages d'une photo de groupe, les textes minuscules et les images franchement floues sont les cas difficiles. Le modèle les rendra plus grands et plus propres, mais il ne peut pas savoir ce qu'indiquait une plaque d'immatriculation illisible, et il ne doit pas faire semblant. Pour une photo molle ou légèrement floue, la page « Rendre une photo nette » explique à quoi s'attendre.",
      ],
    },
    {
      heading: "Quand une version HD est nécessaire",
      id: "uses",
      body: [
        "Les raisons typiques : une bannière de profil ou de chaîne que la plateforme affiche en Full HD, une miniature ou une image de couverture qui doit faire au moins 1280 pixels de large, une vieille photo de famille à imprimer en plus grand, une image de produit refusée par une place de marché parce que trop petite, ou une illustration de présentation qui paraît pixelisée sur un vidéoprojecteur.",
      ],
    },
    {
      heading: "Une photo HD pour l'impression",
      id: "print",
      body: [
        "Pour imprimer, ce qui compte, ce sont les pixels par centimètre. À 300 dpi, un tirage de 10 × 15 cm demande environ 1200 × 1800 pixels ; un tirage de 13 × 18 cm, environ 1500 × 2100. La Full HD, avec 1920 pixels sur le côté long, suffit pour du 10 × 15 cm ; pour du 13 × 18 cm ou plus, choisissez la 4K.",
        "Avant d'envoyer l'image à l'impression, vérifiez-la zoomée à 100 %, en particulier les visages et le texte : le papier révèle des détails qui passent inaperçus sur l'écran d'un téléphone.",
      ],
    },
  ],

  howToTitle: "Comment convertir une image en HD",
  steps: [
    { title: "Importez l'image", description: "Sélectionnez un JPG, PNG ou WEBP, une image à la fois." },
    { title: "Choisissez HD, Full HD ou 4K", description: "La Full HD (1920 pixels) convient à la plupart des usages ; le facteur d'IA est choisi pour vous." },
    { title: "Convertissez et téléchargez", description: "L'IA agrandit et affine l'image en quelques secondes ; comparez l'avant et l'après, puis téléchargez." },
  ],

  features: [
    { icon: "hd", title: "Une vraie résolution HD", description: "HD, Full HD ou 4K sur le côté le plus long, avec des contours et des textures reconstruits plutôt qu'étirés." },
    { icon: "visibility", title: "Avant et après", description: "Faites glisser le curseur de comparaison pour voir exactement ce qui a changé avant de télécharger." },
    { icon: "verified_user", title: "Sans filigrane", description: "Gratuit, sans inscription et sans rien d'apposé sur votre image." },
  ],

  faqs: [
    { q: "Comment convertir une image en HD ?", a: "Importez l'image, choisissez HD, Full HD ou 4K et cliquez sur le bouton de conversion en HD. L'IA renvoie une version plus nette à cette taille, que vous pouvez comparer puis télécharger." },
    { q: "Quelle résolution correspond à la HD ?", a: "Environ 1280 × 720 pixels ou plus pour la HD, 1920 × 1080 pour la Full HD et environ 3840 × 2160 pour la 4K. Choisissez celle qu'il vous faut, le convertisseur s'occupe du facteur." },
    { q: "Puis-je passer une photo WhatsApp en HD ?", a: "Oui, c'est même l'un des meilleurs usages : les photos transférées sont petites et pleines de blocs, et l'agrandisseur les agrandit tout en nettoyant l'essentiel des dégâts de compression." },
    { q: "Est-ce la même chose que « Améliorer la qualité d'une image » ?", a: "Le moteur d'IA est le même. Ici, vous choisissez la taille finale (HD, Full HD ou 4K) et le facteur est choisi pour vous ; sur « Améliorer la qualité d'une image », vous choisissez vous-même 2×, 3× ou 4×." },
    { q: "Une image 4K sera-t-elle un fichier très lourd ?", a: "Elle peut l'être : la 4K représente environ huit millions de pixels. Si vous avez besoin d'un fichier plus léger ensuite, compressez-le ; le détail supplémentaire résiste bien à une compression normale." },
    { q: "Puis-je convertir en HD une image extraite d'une vidéo ou une capture d'écran ?", a: "Oui. Les captures et les images extraites d'une vidéo sont des images ordinaires ; le texte et les contours d'interface, en particulier, ressortent bien plus nets qu'avec un redimensionnement classique." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Oui : le modèle d'IA tourne sur notre serveur, l'image est donc envoyée par une connexion chiffrée. Le résultat est placé derrière un lien de téléchargement privé et supprimé automatiquement dans l'heure ; il n'est jamais partagé ni réutilisé." },
    { q: "Puis-je agrandir une photo pour l'imprimer ?", a: "Oui. Pour imprimer à 300 dpi, un tirage de 10 × 15 cm demande environ 1200 × 1800 pixels : la Full HD ou la 4K suffisent généralement. Vérifiez le résultat zoomé à 100 % avant d'imprimer, surtout les visages." },
  ],

  security:
    "Cet outil s'exécute sur notre serveur, car le modèle d'IA a besoin de plus de mémoire qu'un onglet de navigateur n'en offre ; il utilise le moteur open source Real-ESRGAN. Votre image transite par une connexion chiffrée, le résultat n'est conservé que brièvement derrière un lien de téléchargement privé et supprimé automatiquement dans l'heure, et rien n'est jamais partagé ni utilisé pour l'entraînement.",
};

export default content;
