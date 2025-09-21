const localStorage = window.localStorage;

function getAllUsers() {
  return JSON.parse(localStorage.getItem("users")) ?? [];
}

function isLoggedIn() {
  return localStorage.getItem("loggedIndex") !== null;
}

function getLoggedUser() {
  let index = localStorage.getItem("loggedIndex");
  return getAllUsers()[index];
}

function resetAuth() {
  localStorage.removeItem("loggedIndex");
}

function login(email, password) {
  if (!isLoggedIn()) {
    const allUsers = getAllUsers();

    // console.log("login:", email, password);
    let index = allUsers.findIndex((user) => {console.log(user.email == email); return user.email == email});

    console.log("found index:", index);

    if (index == -1) {
      return "not_found";
    }

    let user = allUsers[index];
    if (user.password !== password) {
      return "password_invalid";
    }

    localStorage.setItem("loggedIndex", index);
    return "";
  }

  return "";
}

function registerAccount(data) {
  const allUsers = getAllUsers();

  allUsers.push(data);
  localStorage.setItem("users", JSON.stringify(allUsers));
}

console.log(getAllUsers());