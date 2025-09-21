let merkMobilInput = document.getElementById("merkMobil");
let jenisMobilInput = document.getElementById("jenisMobil");
let tahunBuatInput = document.getElementById("tahunBuat");
let hargaMobilInput = document.getElementById("hargaMobil");
let nomorPlatInput = document.getElementById("nomorPlat");
let nomorMesinInput = document.getElementById("nomorMesin");
let nomorRangkaInput = document.getElementById("nomorRangka");
let namaPemilikInput = document.getElementById("namaPemilik");
let fotoMobilInput = document.getElementById("fotoMobil");

document.getElementById("submitButton").addEventListener("click", (e) => {
    e.preventDefault();

    let merk = merkMobilInput.value;
    let jenis = jenisMobilInput.value;
    let tahun = tahunBuatInput.value;
    let harga = hargaMobilInput.value;
    let nomorPlat = nomorPlatInput.value;
    let nomorMesin = nomorMesinInput.value;
    let nomorRangka = nomorRangkaInput.value;
    let namaPemilik = namaPemilikInput.value;
    let fotoMobil = fotoMobilInput.files;

    if (
        merk == "" &&
        jenis == "" &&
        tahun == "" &&
        harga == "" &&
        nomorPlat == "" &&
        nomorMesin == "" &&
        nomorRangka == "" &&
        namaPemilik == "" &&
        fotoMobil.length == 0
    ) {
        tampilkanError("Semua form harus diisi");
        return;
    } else {
        tampilkanError("");
    }
})

function hitungPremi() {
  let hargaMobil = hargaMobilInput.value;
  let tahunBuat = tahunBuatInput.value;

  let umur = new Date().getFullYear() - tahunBuat;
  console.log(umur);

  let premiMul = 0;
  if (umur < 3) {
    // console.log("3 ke bawah");
    premiMul = 0.025;
  } else if (umur < 5) {
    // console.log("3 - 5");
    if (hargaMobil < 200000000) {
      // console.log("< 200 juta");
      premiMul = 0.04;
    } else {
      // console.log("> 200 juta");
      premiMul = 0.03;
    }
  } else {
    // console.log("5 ke atas");
    premiMul = 0.05;
  }
  console.log(premiMul);

  let premi = hargaMobil * premiMul;

  let premiText = document.getElementById("premi-info");
  premiText.innerHTML = `Premi: ${currencyFormat(premi)}`;
}