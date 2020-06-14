const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nameSchema = require('./nameSchema');

const userSchema = new Schema({
  name: nameSchema,
  email: {
    type: String,
    required: true
  },
  passwordDigest: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = userSchema;