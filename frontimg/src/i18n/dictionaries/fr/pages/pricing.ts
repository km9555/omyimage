import type { Dict } from "@/i18n/t";

/**
 * French strings for the /fr pricing page (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names.
 * Everything around them is translated; "plan" is « forfait ». The currency
 * itself is decided by the server from the visitor's region, not by this
 * page, so no price appears here. The two metered AI tools are quoted by
 * their French H1 names (i18n-fr-brief.md).
 */
export const frPricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "Tous les outils sont gratuits aujourd'hui, sans inscription",
  "Simple, honest pricing.": "Des tarifs simples et honnêtes.",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "Commencez gratuitement et restez-y pour le travail de tous les jours. Des forfaits payants arrivent pour celles et ceux qui ont besoin de fichiers plus lourds et de davantage d'utilisations de l'IA.",

  // Controls
  "Monthly": "Mensuel",
  "Yearly": "Annuel",
  "Save {n}%": "Économisez {n} %",
  "Prices are shown in the currency of your region.": "Les prix sont affichés dans la devise de votre région.",
  "Prices in {currency}": "Prix en {currency}",
  "Loading prices…": "Chargement des prix…",
  "Yearly prices are shown per month, billed annually.":
    "Les prix annuels sont indiqués par mois et facturés une fois par an.",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "Le plus populaire",
  "Coming soon": "Bientôt disponible",
  "Everything you need for everyday images.": "Tout ce qu'il faut pour vos images du quotidien.",
  "For regular users who want more headroom.": "Pour un usage régulier, avec plus de marge.",
  "Unlimited AI, the largest files, priority speed.": "IA illimitée, les plus gros fichiers et un traitement prioritaire.",
  "Start using the tools": "Commencer à utiliser les outils",
  "All {n} tools, no account needed": "Les {n} outils, sans inscription",
  "Unlimited in-browser processing, no daily cap": "Traitement illimité dans le navigateur, sans plafond quotidien",
  "Server processing for files up to 100 MB": "Traitement sur le serveur pour les fichiers jusqu'à 100 Mo",
  "10 AI runs / day": "10 utilisations de l'IA par jour",
  "Batch up to 20 files": "Lots jusqu'à 20 fichiers",
  "Results download straight to your device": "Les résultats se téléchargent directement sur votre appareil",
  "Everything in Free": "Tout le contenu de Free",
  "Server processing for files up to 200 MB": "Traitement sur le serveur pour les fichiers jusqu'à 200 Mo",
  "100 AI runs / day": "100 utilisations de l'IA par jour",
  "Batch up to 100 files": "Lots jusqu'à 100 fichiers",
  "Priority server processing": "Traitement prioritaire sur le serveur",
  "24-hour download links": "Liens de téléchargement valables 24 heures",
  "Everything in Plus": "Tout le contenu de Plus",
  "Server processing for files up to 300 MB": "Traitement sur le serveur pour les fichiers jusqu'à 300 Mo",
  "Unlimited AI runs": "Utilisations de l'IA illimitées",
  "Unlimited batch size": "Taille des lots illimitée",
  "Top-priority processing queue": "File de traitement en priorité maximale",
  "7-day download links": "Liens de téléchargement valables 7 jours",
  "/ month": "/ mois",
  "Free forever": "Gratuit pour toujours",
  "Billed annually — {total} / year": "Facturation annuelle : {total} / an",
  "Billed monthly": "Facturation mensuelle",
  "Paid plans aren't available yet": "Les forfaits payants ne sont pas encore disponibles",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "Les forfaits payants ne sont pas encore proposés à l'achat : les prix ci-dessus sont ceux que nous prévoyons d'appliquer à leur lancement. Tout ce qui est inclus dans",
  "is free to use in the meantime.": "est gratuit en attendant.",

  // Trust tiles
  "Private by default": "Confidentiel par défaut",
  "Most tools run entirely in your browser — your images never leave your device.":
    "La plupart des outils fonctionnent entièrement dans votre navigateur : vos images ne quittent jamais votre appareil.",
  "No account needed": "Sans inscription",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "Ouvrez un outil et c'est parti. Aucune inscription n'a jamais été nécessaire pour utiliser oMyImage.",
  "Deleted automatically": "Suppression automatique",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "Avec Free, rien n'est stocké : les résultats se téléchargent directement chez vous. Lorsqu'un forfait propose des liens de téléchargement, leur durée de validité correspond à la durée de conservation, et rien n'est jamais réutilisé.",

  // FAQ
  "Questions": "Questions",
  "Do I need an account to use oMyImage?": "Faut-il un compte pour utiliser oMyImage ?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "Non. Tous les outils fonctionnent dès maintenant, sans compte ni inscription. Le compte ne servira qu'aux forfaits payants, qui ne sont pas encore ouverts.",
  "Is the free tier really free?": "Le forfait gratuit est-il vraiment gratuit ?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "Oui. Il n'y a pas d'essai qui se transforme en abonnement payant, ni de moyen de paiement enregistré. Les outils gratuits sont tout simplement gratuits.",
  "When can I buy Plus or Pro?": "Quand pourrai-je souscrire à Plus ou Pro ?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "Pas encore : la facturation n'est pas active, c'est pourquoi ces boutons sont désactivés au lieu de faire semblant d'accepter un paiement. Les prix affichés sont ceux que nous prévoyons d'appliquer au lancement.",
  "Why are prices different in my country?": "Pourquoi les prix sont-ils différents dans mon pays ?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "La devise dépend du pays depuis lequel vous naviguez : vous n'avez rien à choisir. L'Inde et quelques autres marchés bénéficient de prix volontairement plus bas plutôt que d'une simple conversion ; ailleurs, les prix sont calculés à partir de nos prix américains avec un taux que nous mettons à jour régulièrement, et non avec le cours du jour.",
  "What counts as an AI run?": "Qu'est-ce qui compte comme une utilisation de l'IA ?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "Les outils d'IA qui tournent sur le serveur : « Supprimer l'arrière-plan » et « Améliorer la qualité d'une image ». Ce sont les seuls que nous décomptons, car ce sont les seuls qui nous coûtent réellement de l'argent à chaque utilisation. Tout ce qui s'exécute dans votre navigateur est illimité dans tous les forfaits, et le restera.",
  "Why do the paid plans only raise the file size a little?": "Pourquoi les forfaits payants n'augmentent-ils que légèrement la taille de fichier ?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "Parce que presque rien ne l'exige. La plupart des images sont traitées entièrement dans votre navigateur, où nous n'imposons aucune limite de taille : le seul plafond est ce que votre appareil est capable de dessiner. Notre serveur prend en charge les fichiers trop lourds ou trop haute résolution pour cela, et 100 Mo couvrent déjà l'immense majorité des cas. Nous préférons annoncer un chiffre que nous pouvons réellement tenir plutôt qu'un gigaoctet accrocheur.",
  "What decides whether an image is processed in my browser or on your server?":
    "Qu'est-ce qui détermine si une image est traitée dans mon navigateur ou sur votre serveur ?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "Surtout la résolution, pas le poids du fichier. Un navigateur ne peut dessiner un canvas que jusqu'à un certain nombre de pixels, et une photo de téléphone récent de 48 mégapixels peut le dépasser tout en ne pesant que quelques mégaoctets. Dans ce cas, nous traitons l'image sur notre serveur et la supprimons aussitôt après. Chaque outil vous indique la voie qu'il a suivie.",
  "Are my images kept?": "Mes images sont-elles conservées ?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "La plupart des outils n'envoient rien du tout. Pour ceux qui le font, les résultats sont supprimés automatiquement en une heure environ. Tous les détails figurent dans la Politique de confidentialité.",

  // Closing CTA
  "Start now — no card, no account.": "Commencez maintenant, sans carte ni compte.",
  "All {n} tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "Les {n} outils sont gratuits aujourd'hui. Les forfaits payants ajouteront de la marge, pas des barrières.",
  "Browse all tools": "Voir tous les outils",
};
