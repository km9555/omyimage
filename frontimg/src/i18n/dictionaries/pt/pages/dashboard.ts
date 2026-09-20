import type { Dict } from "@/i18n/t";

/**
 * Portuguese strings for /pt/painel (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — it is a word, not a placeholder.
 */
export const ptDashboard: Dict = {
  "Welcome back, {name}": "Que bom te ver, {name}",
  "there": "por aqui",
  "Jump back into your image workflows.": "Volte para o seu trabalho com imagens.",
  "Account": "Conta",
  "Sign out": "Sair",
  "Signed out.": "Você saiu da conta.",

  // Plan card
  "{plan} plan": "Plano {plan}",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · arquivos de até {mb} MB no nosso servidor",
  "used today": "usados hoje",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "Tudo o que roda no seu navegador continua ilimitado e não é contado.",
  "See plans": "Ver planos",
  "You're on {plan}": "Você está no {plan}",

  // Lists and search
  "Favorites": "Favoritos",
  "Last used": "Usadas recentemente",
  "All tools": "Todas as ferramentas",
  "Search tools…": "Buscar ferramentas…",
  "Search tools": "Buscar ferramentas",
  "Tip: tap the": "Dica: toque no",
  "on any tool card to add it to Favorites.": "em qualquer ferramenta para adicionar aos Favoritos.",
  "No tools match “{query}”.": "Nenhuma ferramenta corresponde a “{query}”.",
};
