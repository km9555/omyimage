import type { Dict } from "@/i18n/t";

/** Russian strings for /ru/reset-password (ResetPasswordForm). */
export const ruResetPassword: Dict = {
  "Set a new password": "Задайте новый пароль",
  "Choose a strong password for your account.": "Выберите надёжный пароль для своего аккаунта.",
  "New password": "Новый пароль",
  "At least 6 characters": "Не меньше 6 символов",
  "Confirm new password": "Повторите новый пароль",
  "Re-enter your password": "Введите пароль ещё раз",
  "Update password": "Сменить пароль",

  // No token in the URL
  "Link expired": "Ссылка недействительна",
  "This password reset link is invalid or has expired.":
    "Эта ссылка для сброса пароля недействительна или её срок истёк.",
  "Request a new link": "Запросить новую ссылку",

  // Validation and result
  "Password must be at least 6 characters.": "В пароле должно быть не меньше 6 символов.",
  "Passwords don't match.": "Пароли не совпадают.",
  "Password updated. Please log in.": "Пароль изменён. Войдите заново.",
};
