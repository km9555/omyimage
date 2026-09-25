import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for /id/daftar (SignupForm).
 *
 * The consent checkbox renders as `A <Link>B</Link> C <Link>D</Link>.`.
 * Indonesian keeps English order, but the first link label is «Syarat dan
 * Ketentuan», so the conjunction between the links is «serta», not a second
 * «dan»: «Saya menyetujui Syarat dan Ketentuan serta Kebijakan Privasi.»
 * "and|between links" is a context key for exactly that slot.
 */
export const idSignup: Dict = {
  "Create your account": "Buat akun Anda",
  "Create a free account — upgrade anytime.": "Buat akun gratis — tingkatkan paket kapan saja.",
  "Already have an account?": "Sudah punya akun?",
  "Log in": "Masuk",
  "Name (optional)": "Nama (opsional)",
  "How should we address you?": "Bagaimana kami harus menyapa Anda?",
  "Email": "Email", // i18n-same — the word Indonesian forms print
  "Password": "Kata sandi",
  "At least 6 characters": "Minimal 6 karakter",
  "Confirm password": "Konfirmasi kata sandi",
  "Re-enter your password": "Masukkan ulang kata sandi Anda",
  "I agree to the": "Saya menyetujui",
  "Terms": "Syarat dan Ketentuan",
  "and|between links": "serta",
  "Privacy Policy": "Kebijakan Privasi",
  "Create account": "Buat akun",
  "Sign up with Google": "Daftar dengan Google",
  "The free tools stay free and will never require an account.":
    "Alat-alat gratis tetap gratis dan tidak akan pernah mewajibkan akun.",

  // Confirmation state
  "Check your inbox": "Periksa kotak masuk Anda",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "Kami mengirim tautan konfirmasi ke {email}. Klik tautan itu untuk mengaktifkan akun Anda.",
  "Wrong email?": "Salah email?",
  "Go back": "Kembali",
  "Didn't get it? Check spam, or wait a minute and try signing up again.":
    "Belum menerima? Periksa folder spam, atau tunggu sebentar lalu coba daftar lagi.",
  "Back to login": "Kembali ke halaman masuk",

  // Validation
  "Password must be at least 6 characters.": "Kata sandi minimal 6 karakter.",
  "Passwords don't match.": "Kata sandi tidak cocok.",
  "Please accept the Terms and Privacy Policy.": "Harap setujui Syarat dan Ketentuan serta Kebijakan Privasi.",
};
