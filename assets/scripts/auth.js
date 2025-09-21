const localStorage = window.localStorage;

function getAllUsers() {
  return JSON.parse(localStorage.getItem("users")) ?? [];
}

function isLoggedIn() {
  return sessionStorage.getItem("loggedIndex") !== null;
}

function getLoggedUser() {
  let index = sessionStorage.getItem("loggedIndex");
  return getAllUsers()[index];
}

function resetAuth() {
  sessionStorage.clear();
}

function login(email, password) {
  if (!isLoggedIn()) {
    const allUsers = getAllUsers();

    let index = allUsers.findIndex((user) => user.email == email);

    if (index == -1) {
      return "not_found";
    }

    let user = allUsers[index];
    if (user.password !== password) {
      return "password_invalid";
    }

    sessionStorage.setItem("loggedIndex", index);
    return "";
  }

  return "";
}

function registerAccount(data) {
  const allUsers = getAllUsers();

  allUsers.push(data);
  localStorage.setItem("users", JSON.stringify(allUsers));
}

document.addEventListener("DOMContentLoaded", () => {
  let loggedUserButton = document.querySelector("#loggedUser button");

  if (loggedUserButton) {
    let loggedUser = getLoggedUser();
    if (loggedUser) {
      loggedUserButton.innerText = "Halo, " + loggedUser.name.split(" ")[0];
    }
  }
})