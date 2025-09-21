let namaLengkap = document.getElementById("namaLengkap");
let tanggalLahir = document.getElementById("tanggalLahir");
let besarTanggungan = document.getElementById("besarTanggungan");

function validasiForm() {
  tampilkanFieldError("", "namaLengkap");
  tampilkanFieldError("", "tanggalLahir");

  let valid = true;

  if (namaLengkap.value == "") {
    tampilkanFieldError("Nama lengkap harus diisi", "namaLengkap");
    valid = false;
  }
  if (tanggalLahir.value == "") {
    tampilkanFieldError("Tanggal lahir harus diisi", "tanggalLahir");
    valid = false;
  }

  return valid;
}

function getAge() {
  return new Date().getFullYear() - new Date(tanggalLahir.value).getFullYear();
}

function hitungPremi() {
  if (!validasiForm()) { return; }

  // Premi Dasar
  const tanggungan = parseInt(besarTanggungan.value);
  console.log(tanggungan)

  let umur = getAge();
  let m = 0;
  if (umur <= 30)
    m = 0.2 / 100;
  else if (umur <= 50)
    m = 0.4 / 100;
  else
    m = 1 / 100;

  let premi = m * tanggungan;

  let premiText = document.getElementById("premiInfo");
  premiText.innerHTML = `
    <span class="currency">Rp</span>
    ${currencyFormat(premi).replaceAll("Rp", "").trimStart()}
    <span class="small">/bulan</span>
  `;

  document.getElementById("submitButton").disabled = false;

  return premi;
}

document.getElementById("submitButton").addEventListener("click", (e) => {
  e.preventDefault();

  if (validasiForm()) {
    let premi = hitungPremi();
    window.localStorage.setItem("currentCheckout", JSON.stringify({
      "nama": `Asuransi Jiwa`,
      "harga": premi,
      "periode": "bulan",
      "jenis": "Jiwa"
    }))

    // Navigasi ke halaman checkout
    window.location.href = "./purchase-checkout.html";
  }
})