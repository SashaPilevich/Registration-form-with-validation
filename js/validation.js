export const validateName = (value) => {
  if (value.length < 2 || value.length > 25) {
    return "Name should have at least 2 characters";
  } else return "";
};
export const validateSurname = (value) => {
  if (value.length < 2 || value.length > 25) {
    return "Surname should have at least 2 characters";
  } else return "";
};
export const validateDate = (value) => {
  let currentDate = new Date();
  if (new Date(value) > currentDate) {
    return "Please, enter correct date";
  } else return "";
};
export const validateEmail = (value) => {
  const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
  if (!emailRegExp.test(value)) {
    return "Please,enter correct email";
  } else return "";
};
export const validatePassword = (value) => {
  // const passwordRegExp =
  //   /^(?=.*[A-Z].)(?=.*[!@#$%])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
  if (value.length < 8) {
    return "The password must contain at least 8 characters";
  } else if (!/[A-Z]/.test(value)) {
    return "The password must contain at least 1 character in uppercase";
  } else if (!/[0-9]/.test(value)) {
    return "The password must contain at least 1 digit";
  } else if (!/[!@#$%]/.test(value)) {
    return "The password must contain at least 1 character from %@!$#";
  } else return "";
};
export const validateConfirmation = (value) => {
  if (value !== password.value) {
    return "Password don't confirm";
  } else return "";
};