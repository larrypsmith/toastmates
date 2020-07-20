const validator = require('validator');
const validText = require('./validText');

module.exports = function validateRegister(data) {
  data.email = validText(data.email) ? data.email : '';
  data.fname = validText(data.fname) ? data.fname : '';
  data.lname = validText(data.lname) ? data.lname : '';
  data.password = validText(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    return { message: "Please enter a valid email address.", isValid: false };
  }

  return {
    message: "",
    isValid: true
  };
};