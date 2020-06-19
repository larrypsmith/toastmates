const validator = require('validator');
const validText = require('./validText');

module.exports = function validateRegister(data) {
  data.email = validText(data.email) ? data.email : '';
  data.fname = validText(data.fname) ? data.fname : '';
  data.lname = validText(data.lname) ? data.lname : '';
  data.password = validText(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    return { message: "Email is invalid", isValid: false };
  }

  if (validator.isEmpty(data.email)) {
    return { message: "Email field is required", isValid: false };
  }

  if (validator.isEmpty(data.fname)) {
    return { message: "First Name field is required", isValid: false };
  }

  if (validator.isEmpty(data.lname)) {
    return { message: "Last Name field is required", isValid: false };
  }

  if (validator.isEmpty(data.password)) {
    return { message: "Password field is required", isValid: false };
  }

  return {
    message: "",
    isValid: true
  };
};