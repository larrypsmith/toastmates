const validator = require('validator');
const validText = require('./validText');

module.exports = function validateLogin(data) {
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  debugger

  if (!validator.isEmail(data.email)) {
    return { message: "Email is invalid", isValid: false };
  }

  if (validator.isEmpty(data.email)) {
    return { message: "Email field is required", isValid: false };
  }

  if (validator.isEmpty(data.password)) {
    return { message: "Password field is required", isValid: false };
  }

  return {
    message: "",
    isValid: true
  };
};