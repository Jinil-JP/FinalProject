import * as constant from "../src/constants/constant.js";

var users = JSON.parse(localStorage.getItem("users")) || [];

var loginForm = document.getElementById("formLogin");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

if (users.length <= 0) {
  addAdminUser();
}

function addAdminUser() {
  class User {
    constructor(id, email, password, isAdmin) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.isAdmin = isAdmin;
    }
  }

  var admin = new User(users.length, "admin@admin.com", "Admin@123", 1);

  saveAdminToLocal(admin);
}

function saveAdminToLocal(admin) {
  users.push(admin);

  localStorage.setItem("users", JSON.stringify(users));
}

function filterUsersByEmailAndPassword(email, password) {
  return users
    .filter(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    )
    .map((user) => ({
      index: users.indexOf(user),
      data: user,
    }));
}

function validateForm() {
  document.getElementById("errEmail").textContent = "";
  document.getElementById("errPassword").textContent = "";
  document.getElementById("errCredential").textContent = "";

  var email = document.getElementById("txtEmail").value;
  var password = document.getElementById("txtPassword").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() == "") {
    document.getElementById("errEmail").textContent = constant.msgEnterEmail;
    return false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("errEmail").textContent = constant.msgInvalidEmail;
    return false;
  }

  if (password.trim() == "") {
    document.getElementById("errPassword").textContent =
      constant.msgEnterPassword;
    return false;
  }

  const filteredUsers = filterUsersByEmailAndPassword(email, password);

  if (filteredUsers.length > 0) {
    filteredUsers.forEach((user) => {
      localStorage.setItem("currentUser", JSON.stringify(user.data));

      console.log(user.data);
      // window.location.href = "../app/Dashboard.html";
    });
  } else {
    document.getElementById("errCredential").textContent =
      constant.msgValidCredential;
    return false;
  }

  return true;
}
