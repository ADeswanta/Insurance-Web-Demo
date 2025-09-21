let header = document.getElementsByTagName("header")[0];

let isLogged = isLoggedIn();

let loggedInElement = document.getElementById("logged_in");
let loggedOutElement = document.getElementById("logged_out");
if (isLogged) {
  loggedInElement.classList.remove("hidden");
  loggedOutElement.classList.add("hidden");
} else {
  loggedInElement.classList.add("hidden");
  loggedOutElement.classList.remove("hidden");
}

let logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", () => {
  resetAuth();
  window.location.href = "./index.html";
});

window.onscroll = (e) => {
  console.log("onscroll");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};