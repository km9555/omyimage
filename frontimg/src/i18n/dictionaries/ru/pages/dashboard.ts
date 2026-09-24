import type { Dict } from "@/i18n/t";

/**
 * Russian strings for /ru/dashboard (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — it is a word, not a placeholder, and it
 * lands where a first name normally goes. Russian has no neutral vocative
 * filler that works there: «друг» breaks the formal «вы» register the rest of
 * the site keeps, and «пользователь» reads like a system message. So the slot
 * takes a second greeting instead, the way Portuguese uses "por aqui" —
 * «С возвращением, рады вас видеть» is ordinary Russian, and a real name in
 * the same slot reads normally too.
 *
 * The Favorites tip is composed as `A <Icon/> B`. Russian keeps English's
 * order here, so A carries the verb and B the rest: «Подсказка: нажмите ★ на
 * карточке любого инструмента, чтобы добавить его в избранное.»
 */
export const ruDashboard: Dict = {
  "Welcome back, {name}": "С возвращением, {name}",
  "there": "рады вас видеть",
  "Jump back into your image workflows.": "Вернитесь к работе со своими изображениями.",
  "Account": "Аккаунт",
  "Sign out": "Выйти",
  "Signed out.": "Вы вышли из аккаунта.",

  // Plan card
  "{plan} plan": "План {plan}",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · файлы до {mb} МБ на нашем сервере",
  "used today": "использовано сегодня",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "Всё, что работает в вашем браузере, остаётся безлимитным и не считается.",
  "See plans": "Посмотреть планы",
  "You're on {plan}": "У вас {plan}",

  // Lists and search
  "Favorites": "Избранное",
  "Last used": "Недавние",
  "All tools": "Все инструменты",
  "Search tools…": "Поиск инструментов…",
  "Search tools": "Поиск инструментов",
  "Tip: tap the": "Подсказка: нажмите",
  "on any tool card to add it to Favorites.": "на карточке любого инструмента, чтобы добавить его в избранное.",
  "No tools match “{query}”.": "По запросу «{query}» ничего не найдено.",
};
