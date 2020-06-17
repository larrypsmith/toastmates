const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    required: true
  }
});

module.exports = mongoose.model('Menu', menuSchema);