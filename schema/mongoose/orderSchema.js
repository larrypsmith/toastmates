const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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