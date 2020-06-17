const mongoose = require('mongoose');
const itemSchema = require('../schema/mongoose/itemSchema');

module.exports = mongoose.model('Item', itemSchema);