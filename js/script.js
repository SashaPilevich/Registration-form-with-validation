import {
  validateName,
  validateSurname,
  validateDate,
  validateEmail,
  validatePassword,
  validateConfirmation,
} from "../js/validation.js";
const form = document.querySelector("#registration-form");
const firstName = form.querySelector("#name");
const surname = document.querySelector("#surname");
const date = document.querySelector("#date");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");
const popupForError = document.querySelector(".popup");
const popupForSuccess = document.querySelector(".popup__success");

const handleFirstName = (e) => {
  const error = validateName(e.target.value);
  if (error) {
    return showErrorMessage(error, firstName);
  } else {
    return showErrorMessage("", firstName);
  }
};
firstName.addEventListener("change", (e) => {
  handleFirstName(e);
});
firstName.onfocus = function () {
  return showErrorMessage("", firstName);
};

const handleSurname = (e) => {
  const error = validateSurname(e.target.value);
  if (error) {
    return showErrorMessage(error, surname);
  } else {
    return showErrorMessage("", surname);
  }
};
surname.addEventListener("change", (e) => {
  handleSurname(e);
});
surname.onfocus = function () {
  return showErrorMessage("", surname);
};

const handleDate = (e) => {
  const error = validateDate(e.target.value);
  if (error) {
    return showErrorMessage(error, date);
  } else {
    return showErrorMessage("", date);
  }
};
date.addEventListener("change", (e) => {
  handleDate(e);
});
date.onfocus = function () {
  return showErrorMessage("", date);
};

const handleEmail = (e) => {
  const error = validateEmail(e.target.value);
  if (error) {
    return showErrorMessage(error, email);
  } else {
    return showErrorMessage("", email);
  }
};
email.addEventListener("change", (e) => {
  handleEmail(e);
});
email.onfocus = function () {
  return showErrorMessage("", email);
};

const handlePassword = (e) => {
  const error = validatePassword(e.target.value);
  if (error) {
    return showErrorMessage(error, password);
  } else {
    return showErrorMessage("", password);
  }
};
password.addEventListener("change", (e) => {
  handlePassword(e);
});
password.onfocus = function () {
  return showErrorMessage("", password);
};

const handleConfirmPassword = (e) => {
  const error = validateConfirmation(e.target.value);
  if (error) {
    return showErrorMessage(error, confirmPassword);
  } else {
    return showErrorMessage("", confirmPassword);
  }
};
confirmPassword.addEventListener("change", (e) => {
  handleConfirmPassword(e);
});
confirmPassword.onfocus = function () {
  return showErrorMessage("", confirmPassword);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const errors = {
    firstName: validateName(firstName.value),
    surname: validateSurname(surname.value),
    date: validateDate(date.value),
    email: validateEmail(email.value),
    password: validatePassword(password.value),
    confirmPassword: validateConfirmation(confirmPassword.value),
  };
  const isValidForm = Object.values(errors).every((error) => error === "");
  if (isValidForm) {
    const body = {
      name: firstName.value,
      surname: surname.value,
      date: date.value,
      email: email.value,
      password: password.value,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(() => {
        console.log(body);
        showModalSuccess()
        event.target.reset();
      })
      .catch(() => {
        showModalError();
      });
  }
});

const showErrorMessage = (message, input) => {
  const errorMessage = input.nextElementSibling;
  errorMessage.innerHTML = message;
  
};
function showModalError() {
  popupForError.classList.toggle("active");
}
function showModalSuccess() {
  popupForSuccess.classList.toggle("active");
}
document.addEventListener("click", (e) => {
  if (e.target.className != "popup" || e.target.className != "popup__success") {
    popupForError.classList.remove("active");
    popupForSuccess.classList.remove("active")
  }
});