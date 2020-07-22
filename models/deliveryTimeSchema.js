const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliveryTimeSchema = new Schema({
  low: {
    type: String,
    required: true
  },
  high: {
    type: String,
    required: true
  }
});

module.exports = deliveryTimeSchema;