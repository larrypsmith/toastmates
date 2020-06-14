const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const menuSchema = require('./menuSchema');

const merchantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  deliveryFee: {
    type: Schema.Types.Decimal128,
    required: true
  },
  deliveryTimeLower: {
    type: Number,
    required: true
  },
  deliverTimeUpper: {
    type: Number,
    required: true
  },
  photoUrl: String,
  menus: [menuSchema]
});

module.exports = merchantSchema;