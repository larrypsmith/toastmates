const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    required: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = orderSchema;