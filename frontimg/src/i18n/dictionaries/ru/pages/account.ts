import type { Dict } from "@/i18n/t";

/**
 * Russian strings for /ru/account (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page.
 *
 * The plan sentence is composed as `A " " <strong>{plan}</strong> " " B`, so
 * whatever B starts with lands after a space. English gets away with starting
 * B on the word "plan:"; Russian cannot start it on a colon, or the line
 * renders as «Вы на плане Free : …». So the halves split as «Вы на плане» +
 * «— {allowance}, …», where the em dash after a space is correct Russian
 * punctuation and the Latin plan name sits in a slot that needs no inflection.
 */
export const ruAccount: Dict = {
  "My Account": "Мой аккаунт",
  "Email": "Почта",
  "Plan": "План",
  "Free plan": "Бесплатный план",
  "Allowance": "Лимит",
  "Member since": "С нами с",

  // Display name
  "Display name": "Отображаемое имя",
  "Optional — we'll greet you by this name.": "Необязательно — этим именем мы будем к вам обращаться.",
  "Your name": "Ваше имя",
  "Save": "Сохранить",
  "Name updated.": "Имя изменено.",
  "Could not save name.": "Не удалось сохранить имя.",

  // Password
  "Change password": "Сменить пароль",
  "Set a password": "Задать пароль",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "Ваш аккаунт входит через Google. Задайте пароль, чтобы входить ещё и по почте.",
  "Current password": "Текущий пароль",
  "New password (at least 6 characters)": "Новый пароль (не меньше 6 символов)",
  "Confirm new password": "Повторите новый пароль",
  "Update password": "Сменить пароль",
  "Set password": "Задать пароль",
  "New password must be at least 6 characters.": "В новом пароле должно быть не меньше 6 символов.",
  "New passwords don't match.": "Новые пароли не совпадают.",
  "Password changed.": "Пароль изменён.",
  "Password set.": "Пароль задан.",
  "Could not change password.": "Не удалось сменить пароль.",

  // Plan card
  "You're on the": "Вы на плане",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    "— {allowance}, а также обработка на сервере для файлов до {mb} МБ. Всё, что работает в вашем браузере, безлимитно на любом плане.",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "Платные планы пока нельзя купить, поэтому отменять нечего и способ оплаты нигде не хранится.",
  "See plans": "Посмотреть планы",

  "Signed out.": "Вы вышли из аккаунта.",
};
