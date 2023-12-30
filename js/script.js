document.addEventListener("DOMContentLoaded", function () {
  var emailField = document.getElementById("email");

  emailField.addEventListener("focus", function () {
    emailField.classList.add("form-input-focused");
  });

  emailField.addEventListener("blur", function () {
    if (emailField.value === "") {
      emailField.classList.remove("form-input-focused");
    }
  });

  var passwordField = document.getElementById("password");

  passwordField.addEventListener("focus", function () {
    passwordField.classList.add("form-input-focused");
  });

  passwordField.addEventListener("blur", function () {
    if (passwordField.value === "") {
      passwordField.classList.remove("form-input-focused");
    }
  });
});
