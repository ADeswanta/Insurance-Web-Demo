let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

document.getElementById("submitButton").addEventListener("click", (e) => {
    e.preventDefault();

    let email = emailInput.value;
    let password = passwordInput.value;

    if (email == "") {
        tampilkanError("Email harus diisi");
        return;
    } else if (password == "") {
        tampilkanError("Password harus diisi");
        return;
    } else if (email == "" && password == "") {
        tampilkanError("Email dan password harus diisi");
        return;
    } else {
        tampilkanError("");
    }

    // Cek apakah email sudah valid
    if (!email.includes("@")) {
        tampilkanError("Email tidak valid");
        return;
    }

    let status = login(email, password);

    console.log("status:", status);

    if (status == "password_invalid") {
        tampilkanError("Password salah");
    } else if (status == "not_found") {
        tampilkanError("Email tidak ditemukan");
    } else {
        tampilkanError("");
        // Navigasi ke halaman index
        window.location.href = "./index.html";
    }
})