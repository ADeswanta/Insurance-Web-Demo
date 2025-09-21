function tampilkanError(message) {
    let errElm = document.getElementById("errMessage");
    let errMessage = document.querySelector("form label#errMessage .msg");

    if (message != "") {
        errMessage.innerText = message;
        errElm.classList.remove("hidden");
    } else {
        errElm.classList.add("hidden");
    }
}

function currencyFormat(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
}