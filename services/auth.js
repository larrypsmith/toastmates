const validateRegisterInput = require('../validations/validateRegisterInput');
const validateLoginInput = require('../validations/validateLoginInput');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../config/keys');
const mongoose = require('mongoose');
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
      throw new Error('This email has already been taken.');
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

    const token = jwt.sign({ id: user.id }, SECRET_OR_KEY);

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
};

exports.login = async data => {
  try {
    const { message, isValid } = validateLoginInput(data);
    
    if (!isValid) {
      throw new Error(message);
    }

    const { email, password } = data;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('This email has not been registered.');
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('Password is incorrect.');
    }

    const token = jwt.sign({ id: user.id }, SECRET_OR_KEY);

    return {
      token,
      loggedIn: true,
      id: user.id,
      name: user.name,
      email,
      password: null
    }
  } catch(err) {
    throw err;
  }
};

exports.verifyUser = async data => {
  try {
    const { token } = data;

    const decoded = jwt.verify(token, SECRET_OR_KEY);
    const { id } = decoded;

    const loggedIn = await User.findById(id).then(user => {
      return !!user;
    });

    return { loggedIn };
  } catch(err) {
    return { loggedIn: false }
  }
};

exports.getCurrentUserId = async (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_OR_KEY);
    const { id } = decoded;

    const loggedIn = await User.findById(id).then(user => {
      return !!user;
    });

    return loggedIn ? id : '';
  } catch(err) {
    return '';
  }
};