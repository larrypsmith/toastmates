const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nameSchema = require('./nameSchema');
const orderSchema = require('./orderSchema');

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
  orders: [orderSchema],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = userSchema;