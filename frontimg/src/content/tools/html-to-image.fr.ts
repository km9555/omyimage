import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/html-en-image.
 *
 * Primary query « HTML en image » (low volume, not in the brief's table; the
 * slug follows the « X en Y » pattern); the copy also covers « enregistrer une
 * page web en image » and « capture d'une page web » naturally. Rendering runs
 * on the server (headless Chromium) — keep that fact exactly as in the English
 * page.
 */
const content: ToolPageContent = {
  toolId: "html-to-image",
  locale: "fr",
  name: "HTML en image",
  tagline:
    "Convertissez l'URL d'une page web ou du code HTML en image en ligne : choisissez le viewport, le format et la capture de la page entière. Propulsé par Chromium headless, open source.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "HTML en image – convertir une URL en PNG ou JPG | oMyImage",
  metaDescription:
    "Convertissez du HTML en image : capturez une page web par son URL ou votre propre code HTML en PNG ou JPG, avec viewport réglable et page entière. Gratuit.",

  intro:
    "Transformez une page web ou un extrait de HTML en image nette. L'outil HTML en image d'oMyImage effectue le rendu d'une URL ou de votre propre code avec Chromium headless et vous fournit un PNG ou un JPG exactement à la taille choisie : pratique pour les miniatures, les aperçus et les cartes pour réseaux sociaux. Vous pouvez aussi enregistrer une page web en image en une seule étape. Le rendu s'effectue sur notre serveur avec Puppeteer, un outil open source.",

  sections: [
    {
      heading: "Transformer du code en image",
      id: "what",
      body: [
        "Un navigateur headless charge votre HTML ou votre URL, met la page en forme exactement comme le ferait un navigateur classique (en appliquant le CSS, en exécutant les scripts, en chargeant les polices web), puis capture le rendu obtenu sous forme d'image. C'est une capture d'écran prise par un navigateur sans fenêtre.",
        "La nuance compte. Il ne s'agit pas d'une approximation de l'apparence de la page : c'est le même moteur de rendu qui produit la même mise en page. Voilà pourquoi le CSS complexe, flexbox, grid et les polices web ressortent correctement, là où des convertisseurs HTML en image plus simples les déforment.",
        "Le résultat est un PNG ou un JPG ordinaire, qui peut donc aller partout où va une image : dans une carte de partage, un document, une présentation ou un e-mail.",
      ],
    },
    {
      heading: "Cartes d'aperçu pour les réseaux sociaux",
      id: "og-images",
      body: [
        "L'usage le plus courant en production est la génération d'images Open Graph, l'image qui apparaît quand un lien est partagé sur un réseau social ou dans une messagerie. Les concevoir à la main pour chaque article ne tient pas la distance ; les modéliser en HTML puis les convertir en image, si.",
        "1200×630 px est la taille standard, et elle est correctement gérée par pratiquement toutes les plateformes. Construisez la carte comme un modèle HTML avec le titre, l'auteur et les visuels positionnés en CSS, puis générez une image par article.",
        "Deux conseils pratiques : gardez le contenu important bien à l'intérieur des bords, car certaines plateformes recadrent selon leurs propres proportions, et utilisez de grands caractères. Ces cartes sont souvent vues à 200 ou 300 px de large dans un fil d'actualité : tout ce qui fait moins d'environ 32 px dans la source sera illisible.",
      ],
    },
    {
      heading: "Pourquoi la capture peut différer de votre écran",
      id: "differences",
      body: [
        "Le moteur de rendu est un navigateur vierge. Il n'a ni extensions, ni bloqueur de publicité, ni session connectée, ni accès aux polices installées localement sur votre ordinateur. Une page qui s'affiche d'une certaine façon chez vous peut légitimement s'afficher différemment ici, et la différence est généralement instructive : vous voyez ce que voit un visiteur anonyme qui arrive pour la première fois.",
        "Le chargement différé (lazy loading) est la cause la plus fréquente de contenu manquant. Les images et les sections configurées pour se charger au défilement peuvent ne pas avoir été déclenchées avant la capture, et les données qui arrivent d'un appel d'API lent peuvent manquer le moment.",
        "Les animations et les transitions sont figées là où elles se trouvaient. Si un élément apparaît en fondu, la capture peut le saisir à mi-chemin : une bonne raison de désactiver les animations dans le CSS que vous convertissez, ou de concevoir d'emblée le modèle comme une mise en page statique.",
      ],
    },
    {
      heading: "Cet outil-ci fonctionne sur notre serveur",
      id: "server",
      body: [
        "Presque tout sur ce site fonctionne dans l'onglet de votre navigateur. Le rendu d'une page web, non, car il exige un moteur de navigateur complet : exactement ce qu'est déjà votre navigateur, mais pas quelque chose qu'une page peut piloter sur un contenu tiers arbitraire depuis un onglet.",
        "L'URL ou le HTML que vous fournissez est donc envoyé à notre serveur via une connexion chiffrée, rendu par un navigateur headless, et l'image vous est renvoyée. Rien n'est conservé ensuite.",
        "À noter pour les contenus privés : comme l'URL est récupérée par notre serveur et non par vous, tout ce qui se trouve derrière une connexion ou sur un réseau privé est inaccessible. C'est une limite, et c'est aussi la raison pour laquelle cet outil ne peut pas capturer par accident quelque chose qu'il ne devrait pas.",
      ],
    },
  ],

  howToTitle: "Comment convertir du HTML en image",
  steps: [
    { title: "Saisir l'URL ou le HTML", description: "Collez l'URL d'une page web, ou passez en mode HTML et collez votre propre code." },
    { title: "Choisir la taille et le format", description: "Choisissez la largeur et la hauteur du viewport, le format de sortie et la capture éventuelle de la page entière." },
    { title: "Générer et télécharger", description: "Cliquez sur « Générer l'image » et téléchargez la capture en PNG ou en JPG." },
  ],

  features: [
    { icon: "link", title: "URL ou code HTML", description: "Faites une capture de n'importe quelle page web publique, ou convertissez en image un extrait de votre propre HTML et CSS." },
    { icon: "aspect_ratio", title: "Viewport personnalisé", description: "Définissez la largeur et la hauteur exactes, et capturez si besoin toute la page défilante." },
    { icon: "verified_user", title: "Moteur open source", description: "Rendu avec Chromium headless via Puppeteer : gratuit, open source et compatible avec un usage commercial." },
  ],

  faqs: [
    { q: "Puis-je faire une capture de n'importe quel site ?", a: "De n'importe quelle URL accessible publiquement. Les pages qui bloquent les robots ou exigent une connexion peuvent ne pas s'afficher entièrement." },
    { q: "Puis-je convertir mon propre HTML ?", a: "Oui. Passez en mode HTML et collez du code avec du CSS intégré pour en obtenir un rendu exact." },
    { q: "Dans quels formats puis-je exporter ?", a: "PNG (sans perte) ou JPG. Vous pouvez aussi capturer toute la hauteur de la page défilante." },
    { q: "Quel moteur est utilisé ?", a: "Chromium headless via la bibliothèque open source Puppeteer, qui fonctionne sur notre serveur." },
    { q: "Est-ce gratuit ?", a: "Oui : gratuit, sans filigrane et sans inscription." },
    { q: "À quoi cela sert-il concrètement ?", a: "À générer des cartes d'aperçu pour les réseaux sociaux, à capturer une page pour une documentation ou une archive, à produire des captures homogènes pour un journal des modifications, à prévisualiser un modèle d'e-mail sous forme d'image, et à transformer du HTML que vous avez écrit en une image partageable là où le HTML ne s'affiche pas." },
    { q: "Pourquoi le résultat ne correspond-il pas exactement à mon navigateur ?", a: "Parce que le rendu se fait dans un navigateur headless vierge, sans extensions, sans session connectée et sans autres polices locales que le jeu standard. Un contenu derrière une connexion apparaîtra dans sa version déconnectée, et une page qui dépend d'une police installée uniquement sur votre ordinateur utilisera une police de remplacement." },
    { q: "Peut-il capturer une page qui demande une connexion ?", a: "Non. Le moteur de rendu n'a accès ni à vos cookies ni à votre session : il voit ce que voit un visiteur anonyme. Pour les pages authentifiées, une capture d'écran depuis votre navigateur est la solution pratique." },
    { q: "Pourquoi une partie du contenu manque-t-elle sur la capture ?", a: "Le plus souvent à cause du chargement différé. Les images et les sections qui ne se chargent qu'au défilement peuvent ne pas être apparues avant la capture. Un contenu fourni par un appel d'API lent peut être manqué pour la même raison, et les animations sont figées à l'étape qu'elles avaient atteinte." },
    { q: "Quelle taille de rendu choisir ?", a: "1200×630 est la norme pour les cartes d'aperçu des réseaux sociaux et fonctionne sur la plupart des plateformes. Une largeur de 1280 ou 1440 convient aux captures de documentation. La capture de la page entière est le bon choix pour l'archivage, même si les pages très longues produisent des images très hautes." },
    { q: "Fonctionne-t-il dans mon navigateur comme les autres outils ?", a: "Non : celui-ci a besoin d'un vrai moteur de navigateur pour effectuer le rendu de la page, qui ne peut pas être envoyé sur votre appareil. Le HTML ou l'URL est envoyé à notre serveur, rendu, et l'image obtenue vous est renvoyée. Rien n'est stocké ensuite." },
    { q: "Puis-je enregistrer une page web entière en image ?", a: "Oui. Activez « Capturer la page entière » : l'outil fait défiler la page jusqu'en bas et assemble tout le document en une seule image, au lieu de la seule partie visible. Pour ne capturer qu'un élément précis, indiquez un sélecteur CSS dans les réglages avancés." },
  ],

  security:
    "Le rendu s'effectue sur notre serveur avec Chromium headless, un logiciel open source. Le résultat n'est conservé que brièvement derrière un lien de téléchargement privé et supprimé automatiquement en moins d'une heure. Nous ne partageons ni ne réutilisons jamais votre contenu.",

  ui: {
    // HtmlToImageTool.tsx — pages
    "Add page": "Ajouter une page",
    "Page {n}": "Page {n}", // i18n-same
    "Page name": "Nom de la page",
    "Used as the downloaded file name for this page's image.":
      "Utilisé comme nom du fichier téléchargé pour l'image de cette page.",
    "1 page": "1 page", // i18n-same
    "{n} pages": "{n} pages", // i18n-same
    "Added 1 page.": "1 page ajoutée.",
    "Added {n} pages.": "{n} pages ajoutées.",
    "Import .html": "Importer un .html",
    "Please choose .html files.": "Choisissez des fichiers .html.",
    "HTML code": "Code HTML",
    "<!doctype html> …": "<!doctype html> …", // i18n-same
    "{n} characters · a full document or a fragment both work.":
      "{n} caractères · un document complet comme un fragment conviennent.",
    "Add some HTML to at least one page.": "Ajoutez du HTML à au moins une page.",
    "Remove {name}": "Retirer {name}",
    "Clear": "Effacer",
    "Web page URL": "URL de la page web",
    "Any public http(s) address. Private and local addresses are rejected by the server.":
      "N'importe quelle adresse http(s) publique. Le serveur refuse les adresses privées et locales.",
    // rendering
    "Render to image": "Générer l'image",
    "Render {n} pages": "Générer {n} pages",
    "Rendering…": "Rendu en cours…",
    "Rendering {done} of {total}…": "Rendu {done} sur {total}…",
    "Rendered 1 image.": "1 image générée.",
    "Rendered {n} images.": "{n} images générées.",
    "Rendering failed.": "Échec du rendu.",
    "Rendering uses headless Chromium on our servers.":
      "Le rendu utilise Chromium headless sur nos serveurs.",
    "Your rendered image will appear here.": "Votre image générée apparaîtra ici.",
    "1 image": "1 image", // i18n-same
    "{n} images": "{n} images", // i18n-same
    "Download {name}": "Télécharger {name}",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Back": "Retour",
    // settings
    "Capture Settings": "Réglages de capture",
    "Open all settings": "Ouvrir tous les réglages",
    "Screen size, format, full-page capture and more are in the settings.":
      "La taille d'écran, le format, la capture de la page entière et d'autres options se trouvent dans les réglages.",
    "Capturing at": "Capture en",
    "Viewport": "Viewport", // i18n-same
    "Screen size": "Taille d'écran",
    "The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths.":
      "La fenêtre de navigateur dans laquelle la page est mise en forme. Les sites adaptatifs affichent leur version tablette ou mobile à ces largeurs.",
    "Width (px)": "Largeur (px)",
    "Height (px)": "Hauteur (px)",
    "Width and height must be at least 100px.": "La largeur et la hauteur doivent être d'au moins 100 px.",
    "Orientation": "Orientation", // i18n-same
    "Portrait": "Portrait", // i18n-same
    "Landscape": "Paysage",
    "Swaps the width and height of the chosen screen size.":
      "Inverse la largeur et la hauteur de la taille d'écran choisie.",
    "Resolution": "Résolution",
    "2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file.":
      "2× génère deux fois plus de pixels pour un résultat net sur écran Retina : la même mise en page, un fichier plus lourd.",
    "Output": "Sortie",
    "Format": "Format", // i18n-same
    "Quality": "Qualité",
    "Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots.":
      "Plus elle est élevée, plus les détails sont conservés et plus le fichier est lourd. 80–90 est le bon compromis pour les captures d'écran.",
    "Smaller file": "Fichier plus léger",
    "Higher quality": "Qualité supérieure",
    "Lower quality": "Qualité inférieure",
    "Capture full page": "Capturer la page entière",
    "Scrolls to the bottom and stitches the whole document instead of just the visible window.":
      "Fait défiler jusqu'en bas et assemble tout le document au lieu de la seule fenêtre visible.",
    "Transparent background": "Arrière-plan transparent",
    "Skips the page background so the image keeps an alpha channel.":
      "Ignore l'arrière-plan de la page pour que l'image conserve une couche alpha.",
    "JPG has no alpha channel — switch to PNG or WEBP for transparency.":
      "Le JPG n'a pas de couche alpha : passez au PNG ou au WEBP pour la transparence.",
    "Advanced": "Avancé",
    "Capture one element (optional)": "Capturer un seul élément (facultatif)",
    "A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page.":
      "Un sélecteur CSS, par ex. #pricing ou .hero. Seul cet élément est capturé, ce qui prime sur la page entière.",
    "Padding (px)": "Marge intérieure (px)",
    "Breathing room added around the page content before the shot is taken.":
      "Espace ajouté autour du contenu de la page avant la capture.",
    "Wait before capture (ms)": "Délai avant capture (ms)",
    "Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000.":
      "Temps d'attente supplémentaire après le chargement de la page : utile pour les animations, les polices ou les images à chargement différé. 10 000 au maximum.",
    "Emulate dark mode": "Simuler le mode sombre",
    "Reports prefers-color-scheme: dark, so sites with a dark theme render it.":
      "Indique prefers-color-scheme: dark, pour que les sites dotés d'un thème sombre l'affichent.",
    "Hide cookie banners": "Masquer les bandeaux de cookies",
    "Hides the common consent overlays that would otherwise cover the shot.":
      "Masque les fenêtres de consentement courantes qui recouvriraient sinon la capture.",
    "Only applies when capturing a URL.": "S'applique uniquement à la capture d'une URL.",
    "Custom CSS (optional)": "CSS personnalisé (facultatif)",
    "Injected last, so it overrides the page's own styles. Applies to every page in the batch.":
      "Injecté en dernier, il remplace donc les styles propres à la page. S'applique à toutes les pages du lot.",
  },
};

export default content;
