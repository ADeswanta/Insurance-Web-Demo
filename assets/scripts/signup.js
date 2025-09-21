let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPasswordInput");

document.getElementById("submitButton").addEventListener("click", (e) => {
    e.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (
        name == "" &&
        email == "" &&
        phone == "" &&
        password == "" &&
        confirmPassword == ""
    ) {
        tampilkanError("Semua form harus diisi");
        return;
    } else {
        tampilkanError("");
    }

    // Cek apakah nama lengkap memiliki minimal 3 karakter dan maksimal 32 karakter
    if (name.length < 3 || name.length > 32) {
        tampilkanError("Nama lengkap harus memiliki minimal 3 karakter dan maksimal 32 karakter");
        return;
    }

    // Cek apakah email sudah valid
    if (!email.includes("@")) {
        tampilkanError("Email tidak valid");
        return;
    }

    // Cek apakah nomor telepon memiliki awal nomor 08
    if (!phone.startsWith("08")) {
        tampilkanError("Nomor telepon harus dimulai dengan 08");
        return;
    }

    // Cek apakah nomor telepon memiliki minimal 10 karakter dan maksimal 16 karakter
    if (phone.length < 10 || phone.length > 16) {
        tampilkanError("Nomor telepon harus memiliki minimal 10 karakter dan maksimal 16 karakter");
        return;
    }

    // Cek apakah password memiliki minimal 8 karakter
    if (password.length < 8) {
        tampilkanError("Password harus memiliki minimal 8 karakter");
        return;
    }

    // Cek apakah password dan konfirmasi password sama
    if (password != confirmPassword) {
        tampilkanError("Password dan konfirmasi password harus sama");
        return;
    }

    // Simpan data pengguna ke localStorage
    let newUser = {
        name: name,
        email: email,
        phone: phone,
        password: password,
    };
    registerAccount(newUser);

    login(email, password);

    // Navigasi ke halaman index
    window.location.href = "./index.html";
})