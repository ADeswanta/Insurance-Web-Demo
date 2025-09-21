// Langsung beralih ke halaman login jika pengguna belum login
if (!isLoggedIn()) {
  window.location.href = "/auth/login.html";
}