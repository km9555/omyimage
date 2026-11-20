import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/supprimer-arriere-plan. Structure lives in ToolPageShell.
 *
 * Target query "supprimer l'arrière-plan" (12.1K FR per month). Secondaries
 * "supprimer fond image" (9.9K), "enlever fond" (5.4K), "détourer image"
 * (3.6K), "fond transparent" (3.6K) and "gratuit" live in the intro, a
 * section heading and the FAQs. The marketplace example names what French
 * sellers use (Amazon, eBay, Vinted, Shopify) without inventing their rules.
 * Addressed in "vous".
 */
const content: ToolPageContent = {
  toolId: "remove-background",
  locale: "fr",
  name: "Supprimer l'arrière-plan",
  tagline:
    "Supprimez automatiquement l'arrière-plan de n'importe quelle image grâce à l'IA et téléchargez un PNG transparent et net. Propulsé par le moteur open source rembg.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Supprimer l'arrière-plan d'une image – gratuit | oMyImage",
  metaDescription:
    "Supprimer l'arrière-plan d'une image gratuitement avec l'IA : détourez personnes, produits et logos et téléchargez un PNG à fond transparent. Sans filigrane.",

  variantsHeading: "Remplacer ou flouter l'arrière-plan à la place",

  intro:
    "Ici, supprimer l'arrière-plan d'une photo se fait en un seul clic. L'outil « Supprimer l'arrière-plan » d'oMyImage utilise un modèle d'IA open source qui détecte le sujet (une personne, un produit ou un objet) et rend tout le reste transparent. Vous pouvez ainsi supprimer le fond d'une image, enlever le fond d'une photo produit ou détourer un logo, et obtenir un PNG à fond transparent pour une boutique en ligne, une présentation ou un visuel, gratuitement et sans filigrane. Le calcul lourd de l'IA s'exécute sur notre serveur ; le résultat se télécharge sous forme de PNG transparent.",

  sections: [
    {
      heading: "Ce que fait réellement le modèle d'IA",
      id: "how",
      body: [
        "Il ne s'agit pas d'incrustation par couleur (chroma key). Les anciens outils de suppression de fond cherchaient une plage de pixels semblables, à la manière d'un fond vert, et échouaient dès que l'arrière-plan était chargé ou que le sujet partageait sa couleur. Ce qui tourne ici est un modèle de segmentation entraîné sur un très grand nombre d'images, qui estime pour chaque pixel la probabilité qu'il appartienne au sujet au premier plan.",
        "C'est pour cela qu'il s'en sort avec une personne debout dans une pièce ordinaire, et pas seulement devant un fond de studio. Le modèle a appris à quoi ressemblent généralement les personnes, les produits et les animaux, et peut donc les séparer d'un arrière-plan qu'il n'a jamais vu.",
        "Cela explique aussi ses échecs. Quand le modèle hésite (parce que le sujet et le fond ont des tons proches, parce que le contour est réellement ambigu ou parce que le sujet sort de l'ordinaire), le masque devient flou ou irrégulier précisément à ces endroits. Il fait une estimation éclairée ; il ne mesure rien.",
      ],
    },
    {
      heading: "Détourer une image proprement : nos conseils",
      id: "tips",
      body: [
        "Le contraste est ce qui compte le plus. Un sujet qui se distingue de son arrière-plan par la luminosité ou la couleur se détache proprement ; un sujet qui se fond dedans, non. Si c'est vous qui prenez la photo, ce seul choix fera plus que n'importe quel réglage.",
        "Un éclairage homogène et diffus aide aussi. Les ombres dures qui tombent sur la limite entre le sujet et le fond brouillent le contour, et un sujet éclairé à contre-jour perd souvent toute sa silhouette. La résolution joue sur les détails : une petite image très compressée donne moins de matière au modèle, et les artefacts JPG autour des contours sont justement l'endroit où les détourages ratent.",
        "Enfin, gardez si possible le sujet entièrement dans le cadre. S'il est coupé par le bord de la photo, le modèle n'a aucune limite à trouver de ce côté, et le résultat est généralement une coupe droite le long du cadre.",
      ],
    },
    {
      heading: "Que faire d'un PNG à fond transparent ?",
      id: "uses",
      body: [
        "L'usage le plus courant est la photo produit pour une annonce sur une place de marché, où un fond blanc ou transparent bien net est souvent une exigence et pas une simple préférence. Amazon, eBay et la plupart des plateformes d'e-commerce le précisent explicitement, et sur Vinted ou une boutique Shopify, des produits détourés font tout de suite plus professionnel.",
        "Au-delà : photos de profil et portraits d'équipe à poser sur une couleur de marque, diapositives où un sujet flottant rend bien mieux qu'une photo avec un rectangle mal assorti derrière, logos et stickers, et tout travail graphique où le sujet doit chevaucher d'autres éléments. Comme le résultat est un PNG ordinaire avec canal alpha, tous les logiciels de création le comprennent.",
      ],
    },
    {
      heading: "Pourquoi cet outil a besoin d'un serveur",
      id: "server",
      body: [
        "Presque tout, sur ce site, s'exécute dans votre navigateur. La suppression de l'arrière-plan fait exception, et la raison est la taille : le modèle de segmentation est bien trop volumineux pour être raisonnablement téléchargé dans un onglet de navigateur, et il demande plus de puissance de calcul qu'un onglet ne peut en fournir confortablement.",
        "Le modèle tourne donc comme un processus séparé sur notre machine. Votre image est envoyée via une connexion HTTPS chiffrée, traitée, puis le fichier envoyé comme le résultat sont supprimés en moins d'une heure. Rien n'est conservé, indexé ni utilisé pour entraîner un modèle. Les pages qui envoient vos fichiers sur un serveur le disent clairement plutôt que de laisser croire le contraire.",
      ],
    },
  ],

  howToTitle: "Comment supprimer l'arrière-plan d'une image",
  steps: [
    { title: "Importez votre image", description: "Sélectionnez une image, ou glissez-déposez-la dans l'espace de travail." },
    { title: "Supprimez l'arrière-plan", description: "Cliquez sur « Supprimer l'arrière-plan » : notre IA détecte le sujet et efface le reste." },
    { title: "Téléchargez", description: "Téléchargez votre sujet en PNG transparent, prêt pour n'importe quel fond." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Détection du sujet par IA", description: "Un réseau de neurones open source repère les personnes, les produits et les objets et supprime l'arrière-plan automatiquement." },
    { icon: "opacity", title: "PNG transparent", description: "Le résultat est un PNG net et transparent que vous pouvez poser sur n'importe quelle couleur, photo ou création." },
    { icon: "verified_user", title: "Moteur open source", description: "Propulsé par rembg : gratuit, open source et utilisable à des fins commerciales." },
  ],

  faqs: [
    { q: "Comment fonctionne la suppression de l'arrière-plan ?", a: "Un modèle d'IA (U²-Net, via le projet open source rembg) identifie le sujet principal et rend tout le reste transparent." },
    { q: "Dans quel format le résultat est-il téléchargé ?", a: "En PNG transparent, pour que vous puissiez placer votre sujet sur n'importe quel nouveau fond." },
    { q: "Est-ce que ça marche pour les produits et les personnes ?", a: "Oui : l'outil gère bien les personnes, les produits, les animaux et la plupart des sujets nets. Les détails très fins, comme des cheveux qui volent, peuvent donner des résultats variables." },
    { q: "Peut-on vraiment supprimer le fond d'une image gratuitement ?", a: "Oui. Pas besoin de vous inscrire et le résultat ne porte aucun filigrane. Le moteur (rembg + U²-Net) est open source et utilisable à des fins commerciales." },
    { q: "Mes images sont-elles conservées ?", a: "Non. Les fichiers traités ne sont stockés que brièvement pour votre lien de téléchargement, puis supprimés automatiquement en moins d'une heure." },
    { q: "Quelles images donnent les meilleurs résultats ?", a: "Un sujet net sur un fond avec lequel il contraste. Portraits, produits posés sur une surface unie et animaux de compagnie fonctionnent bien. Le modèle peine quand le sujet et le fond partagent couleurs et tons : un chat gris sur un canapé gris est réellement difficile." },
    { q: "L'outil gère-t-il les cheveux et le pelage ?", a: "Plutôt bien, et c'est justement là que les anciens outils échouaient lamentablement. Les mèches fines restent le cas le plus difficile pour tout détourage : attendez-vous à ce que le modèle trouve la forme générale mais perde quelques cheveux rebelles sur le bord. Une bonne séparation entre le sujet et le fond aide énormément." },
    { q: "Pourquoi le résultat doit-il être un PNG ?", a: "Parce que la transparence nécessite un canal alpha, que le JPG ne possède pas. Si vous enregistriez le détourage en JPG, la zone supprimée reviendrait en blanc uni, ce qui annulerait tout l'intérêt. Le WEBP gère aussi la transparence si vous avez besoin d'un fichier plus léger pour le web." },
    { q: "Puis-je mettre un nouveau fond derrière le sujet ?", a: "Oui. Pour une couleur unie (blanc, bleu ou rouge pour une photo d'identité), utilisez « Changer le fond d'une photo », qui pose le détourage sur n'importe quelle couleur en une seule étape. « Flouter l'arrière-plan » conserve le sujet et adoucit la scène d'origine derrière lui. Le PNG transparent obtenu sur cette page fonctionne aussi dans n'importe quel logiciel de création." },
    { q: "Pourquoi cet outil passe-t-il par un serveur alors que d'autres non ?", a: "Parce qu'il utilise un réseau de neurones bien trop volumineux pour être téléchargé dans un onglet de navigateur. Le modèle tourne comme un processus séparé sur notre machine, votre image est envoyée en HTTPS, et le fichier envoyé comme le résultat sont supprimés dans l'heure." },
    { q: "Puis-je supprimer le fond de plusieurs images à la fois ?", a: "Cet outil traite une image à la fois, car chaque passage est un calcul lourd du modèle et non une simple opération sur les pixels. Pour un lot, traitez les images l'une après l'autre : chacune prend quelques secondes." },
    { q: "Est-il sûr d'envoyer des photos personnelles ?", a: "Votre image sert uniquement à supprimer l'arrière-plan, transite de façon chiffrée et est supprimée au plus tard au bout d'une heure. Elle n'est ni partagée avec des tiers ni utilisée pour entraîner des modèles, conformément à l'esprit du RGPD. N'envoyez toutefois pas de photos d'autres personnes sans leur accord." },
  ],

  security:
    "Le traitement s'effectue sur notre serveur avec le moteur open source rembg. Les résultats ne sont stockés que brièvement derrière un lien de téléchargement privé, puis supprimés automatiquement en moins d'une heure. Nous ne partageons ni ne réutilisons jamais vos images.",

  ui: {
    "Background colour": "Couleur de fond",
    "Blur background": "Flouter l'arrière-plan",
    "Blur strength": "Intensité du flou",
    "Change background": "Changer le fond",
    "Finding the subject…": "Recherche du sujet…",
    "ID photo colours": "Couleurs pour photo d'identité",
    "The first run finds the subject on our server; changing the blur afterwards happens in your browser, with no extra run.": "Le premier passage repère le sujet sur notre serveur ; modifier ensuite le flou se fait dans votre navigateur, sans nouveau passage.",
    "The first run removes the background on our server; changing the colour afterwards happens in your browser, with no extra run.": "Le premier passage supprime l'arrière-plan sur notre serveur ; changer ensuite la couleur se fait dans votre navigateur, sans nouveau passage.",
    // RemoveBgTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "Remove background": "Supprimer l'arrière-plan",
    "Removing background…": "Suppression de l'arrière-plan…",
    "or drop a JPG, PNG or WEBP here": "ou déposez ici un JPG, PNG ou WEBP",
    "a transparent PNG. Powered by the open-source rembg engine on the server.":
      "un PNG transparent. Propulsé par le moteur open source rembg, sur le serveur.",
    // Backend sentences this tool can surface (routes/image/remove-background).
    "Background removal isn't enabled on this server (rembg not installed).":
      "La suppression de l'arrière-plan n'est pas disponible sur ce serveur pour le moment.",
  },
};

export default content;
