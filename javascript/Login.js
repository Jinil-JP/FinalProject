import * as constant from "../src/constants/constant.js";

var loginForm = document.getElementById("formLogin");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  document.getElementById("errEmail").textContent = "";
  document.getElementById("errPassword").textContent = "";

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

  if (password.length < 8) {
    document.getElementById("errPassword").textContent =
      constant.msgInvalidPassword;
    return false;
  }

  window.location.href = "../app/Dashboard.html";
  return true;
}
