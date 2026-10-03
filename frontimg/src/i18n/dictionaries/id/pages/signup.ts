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
  "Didn't get it? Check spam, or request a new link below.":
    "Belum menerima? Periksa folder spam, atau minta tautan baru di bawah.",
  "Back to login": "Kembali ke halaman masuk",
  // The three resend strings match the login page's wording (pages/login.ts).
  "Resend confirmation email": "Kirim ulang email konfirmasi",
  "Sending…": "Mengirim…",
  "Confirmation email sent — check your inbox.": "Email konfirmasi terkirim — periksa kotak masuk Anda.",
  "Could not resend. Please try again.": "Tidak bisa mengirim ulang. Silakan coba lagi.",

  // Confirmation state when the email could not be sent
  "Account created": "Akun berhasil dibuat",
  "Your account is ready, but we couldn't send the confirmation link to {email}.":
    "Akun Anda sudah siap, tetapi kami tidak bisa mengirim tautan konfirmasi ke {email}.",
  "This can happen if the address has a typo, or if our mail server is briefly unavailable. Request a new link below, or go back and correct the address.":
    "Ini bisa terjadi kalau ada salah ketik di alamatnya, atau server email kami untuk sementara tidak tersedia. Minta tautan baru di bawah, atau kembali dan perbaiki alamatnya.",

  // Validation
  "Password must be at least 6 characters.": "Kata sandi minimal 6 karakter.",
  "Passwords don't match.": "Kata sandi tidak cocok.",
  "Please accept the Terms and Privacy Policy.": "Harap setujui Syarat dan Ketentuan serta Kebijakan Privasi.",
};
