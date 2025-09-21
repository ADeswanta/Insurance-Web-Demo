let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

function validasiForm() {
    let email = emailInput.value;
    let password = passwordInput.value;

    tampilkanFieldError("", "passwordInput");

    let valid = true;

    if (email == "") {
        tampilkanFieldError("Email harus diisi", "emailInput");
        valid = false;
    } else if (RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email) == false) {
        tampilkanFieldError("Email tidak valid", "emailInput");
        valid = false;
    }

    if (password == "") {
        tampilkanFieldError("Password harus diisi", "passwordInput");
        valid = false;
    }

    return valid;
}

document.getElementById("submitButton").addEventListener("click", (e) => {
    e.preventDefault();

    let email = emailInput.value;
    let password = passwordInput.value;

    tampilkanFieldError("", "emailInput");

    let status = login(email, "");
    if (status == "not_found") {
        tampilkanFieldError("Email tidak ditemukan", "emailInput");
        return;
    }

    if (validasiForm()) {
        let status = login(email, password);

        if (status == "password_invalid") {
            tampilkanFieldError("Password salah", "passwordInput");
        } else {
            // Navigasi ke halaman index
            window.location.href = "/index.html";
        }
    }
})