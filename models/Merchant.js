const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deliveryTimeSchema = require('./deliveryTimeSchema');

const merchantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: Schema.Types.ObjectId,
    ref: 'Cuisine',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  deliveryFee: {
    type: Schema.Types.Number,
    required: true
  },
  deliveryTime: deliveryTimeSchema,
  imgUrl: String
});

module.exports = mongoose.model('Merchant', merchantSchema);