import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for /id/akun (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page.
 *
 * The plan sentence is composed as `A " " <strong>{plan}</strong> " " B`, so
 * whatever B starts with lands after a space. English starts B on the word
 * "plan:"; Indonesian puts «paket» BEFORE the name, so B would otherwise
 * open on a bare colon — «Anda memakai paket Free : …». B opens on an em dash
 * instead, which is correct after a space: «Anda memakai paket Free —
 * {allowance}, …» (the same fix the pt and ru twins needed).
 */
export const idAccount: Dict = {
  "My Account": "Akun Saya",
  "Email": "Email", // i18n-same — the word Indonesian forms print
  "Plan": "Paket",
  "Free plan": "Paket gratis",
  "Allowance": "Kuota",
  "Member since": "Anggota sejak",

  // Display name
  "Display name": "Nama tampilan",
  "Optional — we'll greet you by this name.": "Opsional — kami akan menyapa Anda dengan nama ini.",
  "Your name": "Nama Anda",
  "Save": "Simpan",
  "Name updated.": "Nama diperbarui.",
  "Could not save name.": "Nama tidak bisa disimpan.",

  // Password
  "Change password": "Ubah kata sandi",
  "Set a password": "Buat kata sandi",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "Akun Anda masuk dengan Google. Buat kata sandi agar bisa masuk juga dengan email.",
  "Current password": "Kata sandi saat ini",
  "New password (at least 6 characters)": "Kata sandi baru (minimal 6 karakter)",
  "Confirm new password": "Konfirmasi kata sandi baru",
  "Update password": "Perbarui kata sandi",
  "Set password": "Buat kata sandi",
  "New password must be at least 6 characters.": "Kata sandi baru minimal 6 karakter.",
  "New passwords don't match.": "Kata sandi baru tidak cocok.",
  "Password changed.": "Kata sandi diubah.",
  "Password set.": "Kata sandi dibuat.",
  "Could not change password.": "Kata sandi tidak bisa diubah.",

  // Plan card
  "You're on the": "Anda memakai paket",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    "— {allowance}, serta pemrosesan di server untuk file hingga {mb} MB. Semua yang berjalan di browser Anda tanpa batas di setiap paket.",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "Paket berbayar belum bisa dibeli, jadi tidak ada yang perlu dibatalkan dan tidak ada metode pembayaran yang disimpan.",
  "See plans": "Lihat paket",

  "Signed out.": "Anda sudah keluar.",
};
