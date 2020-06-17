const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Schema.Types.Decimal128,
    required: true
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: 'Menu',
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);