const validator = require('validator');
const validText = require('./validText');

module.exports = function validateLogin(data) {
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    return { message: "Please enter a valid email address.", isValid: false };
  }

  return {
    message: "",
    isValid: true
  };
};