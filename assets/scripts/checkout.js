let checkoutData = JSON.parse(window.localStorage.getItem("currentCheckout"));

function checkSelectedMethods() {
  let selectedMethods = document.querySelectorAll('input[name="paymentMethods"]:checked');
  document.getElementById("payButton").disabled = selectedMethods.length == 0;

  return selectedMethods[0] ? selectedMethods[0].value : "";
}

function getToggle(id) {
  let toggled = document.querySelector("input[name='" + id + "']:checked");
  return toggled.value;
}

document.querySelectorAll('input[name="paymentMethods"]').forEach(input => {
  input.addEventListener("change", () => checkSelectedMethods());
});

document.addEventListener('DOMContentLoaded', () => {
  if (!window.localStorage.getItem("history")) {
    window.localStorage.setItem("history", "[]");
  }

  let productName = document.getElementById("productName");
  let productPrice = document.getElementById("productPrice");

  productName.innerText = checkoutData.nama;
  productPrice.innerHTML = `
    <span class="currency">Rp</span>
    ${currencyFormat(checkoutData.harga).replaceAll("Rp", "").trimStart()}
    <span class="small">/${checkoutData.periode}</span>
  `;
});


document.getElementById("payButton").addEventListener("click", () => {
  let bayarSekarang = getToggle("bayarSekarang") == "1";
  let historyData = {
    "userId": sessionStorage.getItem("loggedIndex"),
    "nama": checkoutData.nama,
    "jenis": checkoutData.jenis,
    "tanggal": new Date(),
    "harga": checkoutData.harga,
    "tipePeriodeBayar": checkoutData.periode,
    "lunas": bayarSekarang ? true : false,
    "metodePembayaran": checkSelectedMethods()
  }

  let history = JSON.parse(window.localStorage.getItem("history"));
  history.push(historyData);
  window.localStorage.setItem("history", JSON.stringify(history))

  if (bayarSekarang) {
    alert("Pembayaran berhasil");
  } else {
    alert("Pembayaran akan dilakukan secara otomatis jika Anda telah menyelesaikan pembayaran");
  }

  window.localStorage.removeItem("currentCheckout");

  // Navigasi ke halaman index
  window.location.href = "/index.html";
});

document.getElementById("cancelButton").addEventListener("click", () => {
  if (confirm("Anda yakin ingin membatalkan pembayaran?")) {
    // Navigasi ke halaman sebelumnya
    history.back();
  }
})