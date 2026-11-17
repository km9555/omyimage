import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the /es dashboard (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — it is a word, not a placeholder. Spanish
 * has no neutral filler noun, and "Bienvenido/Bienvenida" would force a
 * gender, so the greeting is "Hola de nuevo, {name}" and the fallback simply
 * continues it ("Hola de nuevo, qué gusto verte"), as de, id and ru do.
 */
export const esDashboard: Dict = {
  "Welcome back, {name}": "Hola de nuevo, {name}",
  "there": "qué gusto verte",
  "Jump back into your image workflows.": "Sigue donde lo dejaste con tus imágenes.",
  "Account": "Cuenta",
  "Sign out": "Cerrar sesión",
  "Signed out.": "Sesión cerrada.",

  // Plan card
  "{plan} plan": "Plan {plan}",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · archivos de hasta {mb} MB en nuestro servidor",
  "used today": "usados hoy",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "Todo lo que se ejecuta en tu navegador sigue siendo ilimitado y no se contabiliza.",
  "See plans": "Ver planes",
  "Owner": "Propietario",
  "Unlimited use": "Uso ilimitado",
  "You're on {plan}": "Tu plan: {plan}",

  // Lists and search
  "Favorites": "Favoritos",
  "Last used": "Usadas recientemente",
  "All tools": "Todas las herramientas",
  "Search tools…": "Buscar herramientas…",
  "Search tools": "Buscar herramientas",
  "Tip: tap the": "Consejo: toca el icono",
  "on any tool card to add it to Favorites.": "en cualquier tarjeta de herramienta para añadirla a Favoritos.",
  "No tools match “{query}”.": "Ninguna herramienta coincide con «{query}».",
};
