let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPasswordInput");

function validasiForm() {
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    tampilkanFieldError("", "nameInput");
    tampilkanFieldError("", "emailInput");
    tampilkanFieldError("", "phoneInput");
    tampilkanFieldError("", "passwordInput");
    tampilkanFieldError("", "confirmPasswordInput");

    let valid = true;

    if (name == "") {
        tampilkanFieldError("Nama harus diisi", "nameInput");
        valid = false;
    }
    // Cek apakah nama lengkap memiliki minimal 3 karakter dan maksimal 32 karakter
    else if (name.length < 3 || name.length > 32) {
        tampilkanFieldError("Nama harus min. 3 karakter dan max. 32 karakter", "nameInput");
        valid = false;
    }

    if (email == "") {
        tampilkanFieldError("Email harus diisi", "emailInput");
        valid = false;
    }
    // Cek apakah email sudah valid menggunakan regex
    else if (RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email) == false) {
        tampilkanFieldError("Email tidak valid", "emailInput");
        valid = false;
    }

    if (phone == "") {
        tampilkanFieldError("Nomor telepon harus diisi", "phoneInput");
        valid = false;
    }
    // Cek apakah nomor telepon memiliki awal nomor 08
    else if (!phone.startsWith("08")) {
        tampilkanFieldError("Nomor telepon harus dimulai dengan 08", "phoneInput");
        valid = false;
    }
    // Cek apakah nomor telepon memiliki minimal 10 karakter dan maksimal 16 karakter
    else if (phone.length < 10 || phone.length > 16) {
        tampilkanFieldError("Nomor telepon harus min. 10 karakter dan max. 16 karakter", "phoneInput");
        valid = false;
    }

    if (password == "") {
        tampilkanFieldError("Password harus diisi", "passwordInput");
        valid = false;
    }
    // Cek apakah password memiliki minimal 8 karakter
    else if (password.length < 8) {
        tampilkanFieldError("Password harus memiliki minimal 8 karakter", "passwordInput");
        valid = false;
    }

    if (confirmPassword == "") {
        tampilkanFieldError("Password harus konfirmasi terlebih dahulu", "confirmPasswordInput");
        valid = false;
    }
    // Cek apakah password dan konfirmasi password sama
    else if (password != confirmPassword) {
        tampilkanFieldError("Password dan konfirmasi password harus sama", "confirmPasswordInput");
        valid = false;
    }

    return valid;
}

document.getElementById("submitButton").addEventListener("click", (e) => {
    e.preventDefault();

    if (validasiForm()) {
        let name = nameInput.value;
        let email = emailInput.value;
        let phone = phoneInput.value;
        let password = passwordInput.value;

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
        window.location.href = "/index.html";
    }
})