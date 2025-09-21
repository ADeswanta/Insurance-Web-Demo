let namaLengkap = document.getElementById("namaLengkap");
let tanggalLahir = document.getElementById("tanggalLahir");
let pekerjaanInput = document.getElementById("pekerjaanInput");

function getToggle(id) {
  let toggled = document.querySelector("input[name='" + id + "']:checked");
  return toggled.value;
}

function validasiForm() {
  tampilkanFieldError("", "namaLengkap");
  tampilkanFieldError("", "tanggalLahir");
  tampilkanFieldError("", "pekerjaanInput");

  let valid = true;

  if (namaLengkap.value == "") {
    tampilkanFieldError("Nama lengkap harus diisi", "namaLengkap");
    valid = false;
  }
  if (tanggalLahir.value == "") {
    tampilkanFieldError("Tanggal lahir harus diisi", "tanggalLahir");
    valid = false;
  }
  if (pekerjaanInput.value == "") {
    tampilkanFieldError("Pekerjaan harus diisi", "pekerjaanInput");
    valid = false;
  }

  return valid;
}

function getAge() {
  return new Date().getFullYear() - new Date(tanggalLahir.value).getFullYear();
}

function hitungPremi() {
  if (!validasiForm()) { return; }

  let k1 = getToggle("pernahMerokok");
  let k2 = getToggle("riwayatHipertensi");
  let k3 = getToggle("terkenaDiabetes");

  // Premi Dasar
  const P = 2000000;

  let umur = getAge();
  let m = 0;
  if (umur <= 20)
    m = 0.1;
  else if (umur <= 35)
    m = 0.2;
  else if (umur <= 50)
    m = 0.25;
  else
    m = 0.4;

  let premi = P + (m * P) + (k1 * (0.5 * P)) + (k2 * (0.4 * P)) + (k3 * (0.5 * P));

  let premiText = document.getElementById("premiInfo");
  premiText.innerHTML = `
    <span class="currency">Rp</span>
    ${currencyFormat(premi).replaceAll("Rp", "").trimStart()}
    <span class="small">/tahun</span>
  `;

  document.getElementById("submitButton").disabled = false;

  return premi;
}

document.getElementById("submitButton").addEventListener("click", (e) => {
  e.preventDefault();

  if (validasiForm()) {
    let premi = hitungPremi();
    window.localStorage.setItem("currentCheckout", JSON.stringify({
      "nama": `Asuransi Kesehatan`,
      "harga": premi,
      "periode": "tahun",
      "jenis": "Kesehatan"
    }))

    // Navigasi ke halaman checkout
    window.location.href = "./purchase-checkout.html";
  }
})