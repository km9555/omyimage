import type { Dict } from "@/i18n/t";

/**
 * French strings for the /fr dashboard (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — it is a word, not a placeholder. French
 * « Bon retour » carries no gender (unlike « Content de vous revoir » with an
 * agreeing adjective), and the fallback simply continues the sentence:
 * « Bon retour, quel plaisir de vous revoir ».
 */
export const frDashboard: Dict = {
  "Welcome back, {name}": "Bon retour, {name}",
  "there": "quel plaisir de vous revoir",
  "Jump back into your image workflows.": "Reprenez vos images là où vous les aviez laissées.",
  "Account": "Compte",
  "Sign out": "Se déconnecter",
  "Signed out.": "Déconnexion effectuée.",

  // Plan card
  "{plan} plan": "Forfait {plan}",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · fichiers jusqu'à {mb} Mo sur notre serveur",
  "used today": "utilisés aujourd'hui",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "Tout ce qui s'exécute dans votre navigateur reste illimité et n'est pas décompté.",
  "See plans": "Voir les forfaits",
  "Owner": "Propriétaire",
  "Unlimited use": "Utilisation illimitée",
  "You're on {plan}": "Votre forfait : {plan}",

  // Lists and search
  "Favorites": "Favoris",
  "Last used": "Utilisés récemment",
  "All tools": "Tous les outils",
  "Search tools…": "Rechercher un outil…",
  "Search tools": "Rechercher des outils",
  "Tip: tap the": "Astuce : touchez l'icône",
  "on any tool card to add it to Favorites.": "sur la fiche d'un outil pour l'ajouter à vos favoris.",
  "No tools match “{query}”.": "Aucun outil ne correspond à « {query} ».",
};
