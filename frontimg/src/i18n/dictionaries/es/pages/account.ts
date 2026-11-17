import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the /es account page (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page; "plan" is also the Spanish word.
 */
export const esAccount: Dict = {
  "My Account": "Mi cuenta",
  "Email": "Correo electrónico",
  "Plan": "Plan", // i18n-same — "plan" is Spanish too
  "Free plan": "Plan gratuito",
  "Allowance": "Cupo",
  "Member since": "Miembro desde",

  // Display name
  "Display name": "Nombre visible",
  "Optional — we'll greet you by this name.": "Opcional: te saludaremos con este nombre.",
  "Your name": "Tu nombre",
  "Save": "Guardar",
  "Name updated.": "Nombre actualizado.",
  "Could not save name.": "No se pudo guardar el nombre.",

  // Password
  "Change password": "Cambiar contraseña",
  "Set a password": "Crear una contraseña",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "Tu cuenta usa el inicio de sesión con Google. Crea una contraseña para poder entrar también con tu correo electrónico.",
  "Current password": "Contraseña actual",
  "New password (at least 6 characters)": "Nueva contraseña (al menos 6 caracteres)",
  "Confirm new password": "Confirmar nueva contraseña",
  "Update password": "Actualizar contraseña",
  "Set password": "Guardar contraseña",
  "New password must be at least 6 characters.": "La nueva contraseña debe tener al menos 6 caracteres.",
  "New passwords don't match.": "Las contraseñas nuevas no coinciden.",
  "Password changed.": "Contraseña cambiada.",
  "Password set.": "Contraseña creada.",
  "Could not change password.": "No se pudo cambiar la contraseña.",

  // Plan card
  // AccountClient renders `A <strong>{plan}</strong>{" "}B`, so B must not open
  // on punctuation (a space before a colon). A spaced dash reads naturally.
  "You're on the": "Tienes el plan",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    "– {allowance} y procesamiento en el servidor para archivos de hasta {mb} MB. Todo lo que se ejecuta en tu navegador es ilimitado en todos los planes.",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "Los planes de pago todavía no se pueden contratar, así que no hay nada que cancelar ni ningún método de pago guardado.",
  "See plans": "Ver planes",
  "Owner": "Propietario",
  "Unlimited use": "Uso ilimitado",

  "Sign out": "Cerrar sesión",
  "Signed out.": "Sesión cerrada.",
  "Sign out of all devices": "Cerrar sesión en todos los dispositivos",
  "Sign out of every device and browser where you're signed in, including this one?":
    "¿Cerrar sesión en todos los dispositivos y navegadores donde la tengas iniciada, incluido este?",
  "Signed out of all devices.": "Sesión cerrada en todos los dispositivos.",
  "Could not sign out of all devices.": "No se pudo cerrar sesión en todos los dispositivos.",
};
