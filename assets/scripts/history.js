let historyData = JSON.parse(localStorage.getItem("history")).filter(
  data => data.userId == sessionStorage.getItem("loggedIndex")
);

let historyTable = document.getElementById("historyTable");

console.log(historyData.length);

if (historyData && historyData.length > 0) {
  historyData.forEach(data => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${
        new Intl.DateTimeFormat('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(data.tanggal))
      }</td>
      <td>${data.nama}</td>
      <td>${data.jenis}</td>
      <td>${currencyFormat(data.harga)}/${data.tipePeriodeBayar}</td>
      <td>${{
        "bankTransfer": "Transfer Bank",
        "creditCard": "Kartu Kredit",
        "virtualAccount": "Virtual Account",
        "autoDebit": "Auto-Debit"
      }[data.metodePembayaran]}</td>
      <td>${data.lunas ? "Lunas" : "Belum Lunas"}</td>
    `;
    historyTable.appendChild(row);
  })
} else {
  historyTable.innerHTML = "";
  let row = document.createElement("tr");
  row.innerHTML = `
    <td colspan="5" class="text-center">Tidak ada data</td>
  `;
  historyTable.appendChild(row);
}
