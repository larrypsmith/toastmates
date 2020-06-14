const mongoose = require('mongoose');
const merchantSchema = require('../schema/mongoose/merchantSchema');

module.exports = mongoose.model('Merchant', merchantSchema);