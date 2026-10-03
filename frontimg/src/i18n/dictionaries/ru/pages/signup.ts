import type { Dict } from "@/i18n/t";

/**
 * Russian strings for /ru/signup (SignupForm).
 *
 * "and|between links" is the fragment between the Terms and Privacy links in
 * the consent checkbox — a context key, because "and" on its own would collide
 * with any other use of the word.
 *
 * The checkbox renders as `A <Link>B</Link> C <Link>D</Link>.` — two clean
 * link labels with a conjunction between them. Russian «принимать» governs the
 * accusative, which would turn the second label into «Политику
 * конфиденциальности» — grammatical in the sentence, and wrong as a link,
 * because the label has to read as the NAME of the page it opens. The same
 * problem Hindi hit, and the same answer: a colon after the predicate, so both
 * links stay nominative page names — «Я принимаю: Условия использования и
 * Политика конфиденциальности.»
 */
export const ruSignup: Dict = {
  "Create your account": "Создайте аккаунт",
  "Create a free account — upgrade anytime.": "Создайте бесплатный аккаунт — план можно сменить в любой момент.",
  "Already have an account?": "Уже есть аккаунт?",
  "Log in": "Войти",
  "Name (optional)": "Имя (необязательно)",
  "How should we address you?": "Как к вам обращаться?",
  "Email": "Почта",
  "Password": "Пароль",
  "At least 6 characters": "Не меньше 6 символов",
  "Confirm password": "Повторите пароль",
  "Re-enter your password": "Введите пароль ещё раз",
  "I agree to the": "Я принимаю:",
  "Terms": "Условия использования",
  "and|between links": "и",
  "Privacy Policy": "Политика конфиденциальности",
  "Create account": "Создать аккаунт",
  "Sign up with Google": "Зарегистрироваться через Google",
  "The free tools stay free and will never require an account.":
    "Бесплатные инструменты останутся бесплатными, и аккаунт для них не понадобится никогда.",

  // Confirmation state
  "Check your inbox": "Проверьте почту",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "Мы отправили ссылку для подтверждения на {email}. Нажмите на неё, чтобы активировать аккаунт.",
  "Wrong email?": "Ошиблись в адресе?",
  "Go back": "Вернуться",
  "Didn't get it? Check spam, or request a new link below.":
    "Письмо не пришло? Загляните в спам или запросите новую ссылку ниже.",
  "Back to login": "Вернуться ко входу",
  // The three resend strings match the login page's wording (pages/login.ts).
  "Resend confirmation email": "Отправить письмо с подтверждением ещё раз",
  "Sending…": "Отправка…",
  "Confirmation email sent — check your inbox.": "Письмо с подтверждением отправлено — проверьте почту.",
  "Could not resend. Please try again.": "Не удалось отправить повторно. Попробуйте ещё раз.",

  // Confirmation state when the email could not be sent. «на {email}» as in
  // the sent-state line above: the address is a slot, so no case to agree.
  "Account created": "Аккаунт создан",
  "Your account is ready, but we couldn't send the confirmation link to {email}.":
    "Аккаунт готов, но нам не удалось отправить ссылку для подтверждения на {email}.",
  "This can happen if the address has a typo, or if our mail server is briefly unavailable. Request a new link below, or go back and correct the address.":
    "Так бывает, если в адресе опечатка или наш почтовый сервер ненадолго недоступен. Запросите новую ссылку ниже или вернитесь и исправьте адрес.",

  // Validation
  "Password must be at least 6 characters.": "В пароле должно быть не меньше 6 символов.",
  "Passwords don't match.": "Пароли не совпадают.",
  "Please accept the Terms and Privacy Policy.": "Примите условия использования и политику конфиденциальности.",
};
