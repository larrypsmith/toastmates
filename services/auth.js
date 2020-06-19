const validateRegisterInput = require('../validations/validRegister');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');
const mongoose = require('mongoose');
const { NoUnusedVariablesRule } = require('graphql');
const User = mongoose.model('User');

exports.register = async data => {
  try {
    const { message, isValid } = validateRegisterInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { fname, lname, email, password } = data;
    const name = {
      first: fname,
      last: lname
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error('This email has already been taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    },
    err => {
      if (err) throw err;
    })

    user.save();

    const token = jwt.sign({ id: user.id }, secretOrKey);

    return {
      token,
      loggedIn: true,
      id: user.id,
      name,
      email,
      password: null
    };
  } catch(err) {
    throw err;
  }
}