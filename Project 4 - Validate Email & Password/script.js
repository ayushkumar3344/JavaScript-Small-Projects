const form = document.querySelector("form"),
  emailField = document.querySelector(".email-field"),
  emailInput = document.querySelector(".email"),
  passField = document.querySelector(".create-password"),
  passInput = document.querySelector(".password"),
  cPassField = document.querySelector(".confirm-password"),
  cPassInput = document.querySelector(".cpassword");

//   Email Validation ---->
function checkEmail() {
  const email = emailInput.value;

  if (email.includes("@") && email.includes(".")) {
    return emailField.classList.remove("invalid");
  } else {
    return emailField.classList.add("invalid");
  }
}

// Hide and Show Password ---->
const icons = document.querySelectorAll(".show-hide");

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    let passwordInput = icon.parentElement.querySelector("input");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";

      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";

      icon.classList.add("fa-eye");
      icon.classList.remove("fa-eye-slash");
    }
  });
});

// Password Validation ---->
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    passField.classList.add("invalid");
  } else {
    passField.classList.remove("invalid");
  }
}

// Confirm Password Validation ---->
function confirmPassword() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  } else {
    return cPassField.classList.remove("invalid");
  }
}

//   Calling function on form Submitted ---->
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPassword();

  // Calling function on when click on keyup -->
  emailField.addEventListener("keuup", checkEmail);
  passField.addEventListener("keyup", createPass);
  cPassField.addEventListener("keyup", confirmPassword);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {

    location.href = form.getAttribute("action");

  }
});
