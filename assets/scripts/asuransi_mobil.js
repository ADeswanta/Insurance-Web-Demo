let merkMobilInput = document.getElementById("merkMobil");
let jenisMobilInput = document.getElementById("jenisMobil");
let tahunBuatInput = document.getElementById("tahunBuat");
let hargaMobilInput = document.getElementById("hargaMobil");
let nomorPlatInput = document.getElementById("nomorPlat");
let nomorMesinInput = document.getElementById("nomorMesin");
let nomorRangkaInput = document.getElementById("nomorRangka");
let namaPemilikInput = document.getElementById("namaPemilik");

let fotoDepanInput = document.getElementById("fotoDepan");
let fotoBelakangInput = document.getElementById("fotoBelakang");
let fotoKiriInput = document.getElementById("fotoKiri");
let fotoKananInput = document.getElementById("fotoKanan");
let fotoDashboardInput = document.getElementById("fotoDashboard");
let fotoMesinInput = document.getElementById("fotoMesin");

function validasiForm() {
  tampilkanFieldError("", "merkMobil");
  tampilkanFieldError("", "jenisMobil");
  tampilkanFieldError("", "tahunBuat");
  tampilkanFieldError("", "hargaMobil");
  tampilkanFieldError("", "nomorPlat");
  tampilkanFieldError("", "nomorMesin");
  tampilkanFieldError("", "nomorRangka");
  tampilkanFieldError("", "namaPemilik");
  tampilkanFieldError("", "fotoDepan");
  tampilkanFieldError("", "fotoBelakang");
  tampilkanFieldError("", "fotoKiri");
  tampilkanFieldError("", "fotoKanan");
  tampilkanFieldError("", "fotoDashboard");
  tampilkanFieldError("", "fotoMesin");

  let valid = true;

  if (merkMobilInput.value == "") {
    tampilkanFieldError("Merk mobil harus diisi", "merkMobil");
    valid = false;
  }
  if (jenisMobilInput.value == "") {
    tampilkanFieldError("Jenis mobil harus diisi", "jenisMobil");
    valid = false;
  }
  if (tahunBuatInput.value == "") {
    tampilkanFieldError("Tahun pembuatan mobil harus diisi", "tahunBuat");
    valid = false;
  }
  if (hargaMobilInput.value == "") {
    tampilkanFieldError("Harga mobil harus diisi", "hargaMobil");
    valid = false;
  }
  if (nomorPlatInput.value == "") {
    tampilkanFieldError("Nomor plat mobil harus diisi", "nomorPlat");
    valid = false;
  }
  if (nomorMesinInput.value == "") {
    tampilkanFieldError("Nomor mesin mobil harus diisi", "nomorMesin");
    valid = false;
  }
  if (nomorRangkaInput.value == "") {
    tampilkanFieldError("Nomor rangka mobil harus diisi", "nomorRangka");
    valid = false;
  }
  if (namaPemilikInput.value == "") {
    tampilkanFieldError("Nama pemilik mobil harus diisi", "namaPemilik");
    valid = false;
  }
  if (fotoDepanInput.files.length == 0) {
    tampilkanFieldError("Foto mobil harus diisi", "fotoDepan");
    valid = false;
  }
  if (fotoBelakangInput.files.length == 0) {
    tampilkanFieldError("Foto mobil harus diisi", "fotoBelakang");
    valid = false;
  }
  if (fotoKiriInput.files.length == 0) {
    tampilkanFieldError("Foto mobil harus diisi", "fotoKiri");
    valid = false;
  }
  if (fotoKananInput.files.length == 0) {
    tampilkanFieldError("Foto mobil harus diisi", "fotoKanan");
    valid = false;
  }
  if (fotoDashboardInput.files.length == 0) {
    tampilkanFieldError("Foto mobil harus diisi", "fotoDashboard");
    valid = false;
  }
  if (fotoMesinInput.files.length == 0) {
    tampilkanFieldError("Foto mobil harus diisi", "fotoMesin");
    valid = false;
  }

  return valid
}

function getAge() {
  let hargaMobil = hargaMobilInput.value;
  let tahunBuat = tahunBuatInput.value;

  return new Date().getFullYear() - tahunBuat;
}

function hitungPremi() {
  if (!validasiForm()) { return; }

  let hargaMobil = hargaMobilInput.value;
  let umur = getAge();

  let premiMul = 0;
  if (umur < 3) {
    // 3 ke bawah
    premiMul = 0.025;
  } else if (umur < 5) {
    // 3 - 5
    if (hargaMobil < 200000000) {
      // < 200 juta
      premiMul = 0.04;
    } else {
      // > 200 juta
      premiMul = 0.03;
    }
  } else {
    // 5 ke atas
    premiMul = 0.05;
  }

  let premi = hargaMobil * premiMul;

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
      "nama": `Asuransi Mobil`,
      "harga": premi,
      "periode": "tahun",
      "jenis": "Mobil"
    }))

    // Navigasi ke halaman checkout
    window.location.href = "./purchase-checkout.html";
  }
})