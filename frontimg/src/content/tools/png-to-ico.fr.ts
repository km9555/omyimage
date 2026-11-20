import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/png-en-ico.
 *
 * Head term "PNG en ICO" (9.9K/mo) — French converter queries take the
 * "X en Y" form. Secondary "créer un favicon", used in the intro, a heading
 * and an FAQ. Windows dialogs are named as the French UI shows them
 * (Propriétés › Personnaliser › « Changer d'icône… »).
 */
const content: ToolPageContent = {
  toolId: "png-to-ico",
  locale: "fr",
  name: "PNG en ICO",
  tagline:
    "Convertissez un PNG, un JPG ou un SVG en fichier ICO en ligne : un favicon.ico en 16, 32 et 48 px, ou une icône Windows avec toutes les tailles jusqu'à 256 px. Gratuit, privé, dans votre navigateur.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "PNG en ICO – créer un favicon gratuit | oMyImage",
  metaDescription:
    "PNG en ICO gratuit : créer un favicon.ico (16, 32, 48 px) ou une icône Windows jusqu'à 256 px à partir d'un PNG, JPG ou SVG. Dans votre navigateur, sans envoi.",

  intro:
    "Un fichier ICO n'est pas une image mais un petit ensemble d'images : la même icône en plusieurs tailles, pour qu'un onglet de navigateur, une barre des tâches et un bureau puissent chacun choisir celle qui convient. Le convertisseur PNG en ICO d'oMyImage construit cet ensemble à partir d'une seule image, et c'est le moyen le plus simple de créer un favicon. Partez d'un PNG, d'un JPG, d'un WEBP ou d'un SVG, choisissez les tailles (favicon ou icône Windows complète) et vérifiez chaque taille à ses dimensions réelles en pixels avant de télécharger un seul fichier .ico.",

  sections: [
    {
      heading: "Ce que contient un fichier ICO",
      id: "what-ico",
      body: [
        "L'ICO est le format d'icône de Windows, et c'est un conteneur : un seul fichier réunit plusieurs images carrées, généralement de 16 × 16 à 256 × 256 pixels. Windows choisit la taille la plus proche pour chaque endroit où une icône apparaît (liste de fichiers, barre des tâches, bureau), et les navigateurs font de même pour l'onglet et les favoris. C'est pourquoi un simple PNG redimensionné et renommé en .ico n'est pas une vraie icône.",
        "Les fichiers créés ici stockent les tailles inférieures à 256 sous forme de bitmaps 32 bits avec transparence complète, la forme que lisent toutes les versions de Windows en usage et tous les navigateurs, et la taille de 256 pixels en PNG compressé, comme le font les icônes de Windows lui-même. Le résultat s'ouvre dans n'importe quel programme qui gère les icônes.",
      ],
    },
    {
      heading: "Créer un favicon.ico",
      id: "favicon",
      body: [
        "Pour un site web, choisissez le préréglage Favicon : 16, 32 et 48 pixels. Le 16 est la taille classique de l'onglet de navigateur, le 32 sert sur les écrans haute résolution et dans la barre des tâches quand un site est épinglé, et le 48 couvre les raccourcis Windows ainsi que les grandes vues des favoris et des tuiles de sites. Ensemble, elles offrent à chaque emplacement courant une taille qui n'a pas besoin d'être étirée.",
        "Nommez le fichier favicon.ico et placez-le à la racine de votre site, pour qu'il soit accessible à l'adresse /favicon.ico. Les navigateurs demandent automatiquement cette adresse, même sur les pages qui ne déclarent aucune icône. Les sites modernes ajoutent souvent des icônes PNG et SVG via des balises link, mais le .ico à la racine reste celui que tous les navigateurs et de nombreux outils cherchent en premier.",
      ],
    },
    {
      heading: "Icônes pour les dossiers et raccourcis Windows",
      id: "windows",
      body: [
        "Pour un raccourci sur le bureau, un dossier ou une application, choisissez le préréglage Icône Windows, qui comprend toutes les tailles de 16 à 256 pixels. Windows utilise les grandes tailles pour les icônes du bureau et les grandes vues de l'Explorateur, et les petites pour les listes et la barre des tâches ; s'il manque une taille, il agrandit la plus proche et l'icône paraît floue.",
        "Pour utiliser l'icône, faites un clic droit sur un raccourci, ouvrez Propriétés et choisissez « Changer d'icône… » ; pour un dossier, ouvrez Propriétés, puis Personnaliser, puis « Changer d'icône… », et allez chercher votre fichier .ico. Rangez le .ico à un endroit où il ne sera ni déplacé ni supprimé, car Windows le lit à cet emplacement.",
      ],
    },
    {
      heading: "Concevoir pour 16 pixels",
      id: "small",
      body: [
        "À 16 × 16 pixels, il y a de la place pour une forme et peut-être une lettre, pas pour un logo détaillé. Les formes franches, un contraste marqué et une silhouette simple survivent ; les traits fins, le petit texte et les dégradés subtils se transforment en bouillie grise. L'aperçu affiche chaque taille à sa taille réelle en pixels : vous pouvez juger honnêtement la version 16 pixels avant de télécharger.",
        "Pour obtenir des petites tailles aussi propres que possible, l'image est réduite par étapes, en divisant sa taille par deux à chaque fois avec un lissage de haute qualité, plutôt que d'un seul coup, ce qui a tendance à faire disparaître les détails fins de façon imprévisible. Si l'icône de 16 pixels paraît encore chargée, essayez une version simplifiée du logo comme source : juste l'initiale ou le symbole.",
      ],
    },
    {
      heading: "Des icônes carrées à partir de n'importe quelle image",
      id: "square",
      body: [
        "Les icônes sont carrées. Si votre image ne l'est pas, choisissez « Ajuster l'image entière » pour tout conserver et remplir les côtés de transparence, ou « Recadrer en carré » pour rogner le côté le plus long à partir du centre. Le fond transparent est conservé par défaut ; cochez l'option de fond blanc si l'icône doit s'afficher à un endroit qui rend la transparence en noir.",
        "La meilleure source est un PNG carré à fond transparent de 256 pixels ou plus. Un JPG fonctionne aussi, mais il n'a pas de transparence : son fond fait donc partie de l'icône. Un SVG est idéal : il est d'abord dessiné en haute résolution, si bien que chaque taille est nette.",
      ],
    },
  ],

  howToTitle: "Comment convertir PNG en ICO",
  steps: [
    { title: "Ajoutez une image", description: "Sélectionnez une image PNG, JPG, WEBP ou SVG ; l'idéal est un carré à fond transparent." },
    { title: "Choisissez les tailles", description: "Optez pour Favicon (16, 32, 48) ou Icône Windows (16 à 256), ou cochez les tailles exactes." },
    { title: "Téléchargez l'ICO", description: "Vérifiez chaque taille dans l'aperçu, puis téléchargez un seul fichier .ico." },
  ],

  features: [
    { icon: "apps", title: "Toutes les tailles dans un fichier", description: "16, 24, 32, 48, 64, 128 et 256 pixels, réunis dans un seul .ico." },
    { icon: "opacity", title: "Transparence conservée", description: "Les icônes gardent un fond entièrement transparent, avec des contours lissés et doux." },
    { icon: "lock", title: "Aucun envoi", description: "L'icône est construite dans votre navigateur ; votre image ne quitte jamais votre appareil." },
  ],

  faqs: [
    { q: "Comment convertir PNG en ICO ?", a: "Ajoutez votre image, choisissez le préréglage Favicon ou Icône Windows, vérifiez l'aperçu et cliquez sur « Télécharger l'ICO »." },
    { q: "Quelles tailles doit avoir un favicon.ico ?", a: "16, 32 et 48 pixels : c'est le préréglage Favicon. Ces tailles couvrent les onglets de navigateur, les écrans haute résolution et les raccourcis Windows." },
    { q: "Quelles tailles faut-il pour une icône Windows ?", a: "Jusqu'à 256 pixels. Le préréglage Icône Windows comprend 16, 24, 32, 48, 64, 128 et 256 : Windows n'a ainsi jamais besoin d'étirer une taille." },
    { q: "Puis-je convertir un JPG ou un SVG en ICO ?", a: "Oui. PNG, JPG, WEBP, GIF, BMP et SVG fonctionnent tous. Le JPG n'a pas de transparence, son fond reste donc ; le SVG donne les résultats les plus nets." },
    { q: "Le fond transparent est-il conservé ?", a: "Oui. La transparence est conservée à chaque taille, sauf si vous choisissez un fond blanc." },
    { q: "Mon image n'est pas carrée : que se passe-t-il ?", a: "Choisissez « Ajuster l'image entière » pour tout garder avec des côtés transparents, ou « Recadrer en carré » pour rogner le côté le plus long." },
    { q: "Où placer le favicon.ico ?", a: "À la racine de votre site web, pour qu'il se charge à l'adresse votresite.fr/favicon.ico. Les navigateurs le cherchent automatiquement à cet endroit." },
    { q: "Comment changer l'icône d'un dossier sous Windows ?", a: "Faites un clic droit sur le dossier, ouvrez Propriétés, puis Personnaliser, puis « Changer d'icône… », et choisissez votre fichier .ico." },
    { q: "Pourquoi mon icône de 16 pixels est-elle floue ?", a: "Il n'y a que 256 pixels pour travailler. Utilisez une source plus simple (juste le symbole ou l'initiale) avec des formes franches et un contraste marqué." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Le fichier ICO est créé entièrement dans votre navigateur." },
    { q: "Comment créer un favicon pour mon site en quelques secondes ?", a: "Importez votre logo (de préférence un PNG carré transparent ou un SVG), laissez le préréglage Favicon, vérifiez la version 16 pixels dans l'aperçu, puis téléchargez le fichier et déposez-le à la racine du site sous le nom favicon.ico." },
  ],

  security:
    "Votre image est redimensionnée et assemblée en fichier ICO entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // PngToIcoTool.tsx
    "Select an image": "Sélectionner une image",
    "or drop a PNG, JPG, WEBP or SVG image here": "ou déposez ici une image PNG, JPG, WEBP ou SVG",
    "Please select an image.": "Sélectionnez une image.",
    "Could not read this image.": "Impossible de lire cette image.",
    "Processing failed.": "Le traitement a échoué.",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "Icon settings": "Paramètres de l'icône",
    "Download ICO": "Télécharger l'ICO",
    "Saving…": "Enregistrement…",
    "Shown at actual size": "Affiché à la taille réelle",
    "Last download: {size}": "Dernier téléchargement : {size}",
    "Your image is smaller than the largest icon size, so that size is enlarged and will look soft.":
      "Votre image est plus petite que la plus grande taille d'icône : cette taille est donc agrandie et paraîtra floue.",
    "Your image is converted in your browser and never uploaded.": "Votre image est convertie dans votre navigateur et n'est jamais envoyée.",
    "Icon sizes": "Tailles de l'icône",
    "Favicon": "Favicon", // i18n-same
    "Windows icon": "Icône Windows",
    "Sizes in pixels. A favicon needs 16, 32 and 48; Windows uses up to 256.":
      "Tailles en pixels. Un favicon a besoin de 16, 32 et 48 ; Windows utilise jusqu'à 256.",
    "Shape": "Forme",
    "Fit whole image": "Ajuster l'image entière",
    "Crop to square": "Recadrer en carré",
    "Icons are square. Fit keeps everything and fills the sides; crop trims the longer side.":
      "Les icônes sont carrées. Ajuster conserve tout et remplit les côtés ; recadrer rogne le côté le plus long.",
    "White background instead of transparent": "Fond blanc au lieu de transparent",
  },
};

export default content;
