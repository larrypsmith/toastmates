const mongoose = require('mongoose');
const orderSchema = require('../schema/mongoose/orderSchema');

module.exports = mongoose.model('Order', orderSchema);