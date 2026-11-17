import type { Dict } from "@/i18n/t";

/**
 * German strings for the /de dashboard (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — it is a word, not a placeholder. German
 * has no neutral filler noun, so it continues the greeting instead
 * ("Willkommen zurück, schön, dass Sie da sind"), as id and ru do.
 */
export const deDashboard: Dict = {
  "Welcome back, {name}": "Willkommen zurück, {name}",
  "there": "schön, dass Sie da sind",
  "Jump back into your image workflows.": "Machen Sie dort weiter, wo Sie aufgehört haben.",
  "Account": "Konto",
  "Sign out": "Abmelden",
  "Signed out.": "Sie wurden abgemeldet.",

  // Plan card
  "{plan} plan": "Tarif {plan}",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · Dateien bis {mb} MB auf unserem Server",
  "used today": "heute genutzt",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "Alles, was in Ihrem Browser läuft, bleibt unbegrenzt und wird nicht gezählt.",
  "See plans": "Tarife ansehen",
  "Owner": "Inhaber",
  "Unlimited use": "Unbegrenzte Nutzung",
  "You're on {plan}": "Ihr Tarif: {plan}",

  // Lists and search
  "Favorites": "Favoriten",
  "Last used": "Zuletzt verwendet",
  "All tools": "Alle Tools",
  "Search tools…": "Tools suchen…",
  "Search tools": "Tools suchen",
  "Tip: tap the": "Tipp: Tippen Sie auf das Symbol",
  "on any tool card to add it to Favorites.": "auf einer Tool-Karte, um das Tool zu den Favoriten hinzuzufügen.",
  "No tools match “{query}”.": "Keine Tools passen zu „{query}“.",
};
