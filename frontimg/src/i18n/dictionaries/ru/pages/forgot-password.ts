import type { Dict } from "@/i18n/t";

/** Russian strings for /ru/forgot-password (ForgotPasswordForm). */
export const ruForgotPassword: Dict = {
  "Reset your password": "Сброс пароля",
  "Enter your email and we'll send you a reset link.":
    "Укажите свою почту, и мы пришлём ссылку для сброса.",
  "Remembered it?": "Вспомнили пароль?",
  "Log in": "Войти",
  "Email": "Почта",
  "Send reset link": "Отправить ссылку",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  // «Если ... существует» keeps exactly that hedge in Russian.
  "Check your inbox": "Проверьте почту",
  "If an account exists for {email}, we sent a password reset link.":
    "Если для адреса {email} есть аккаунт, мы отправили на него ссылку для сброса пароля.",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "Ссылка действует 1 час. Письмо не пришло? Загляните в спам или попробуйте ещё раз.",
  "Back to login": "Вернуться ко входу",
};
