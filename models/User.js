const mongoose = require('mongoose');
const userSchema = require('../schema/mongoose/userSchema');

module.exports = mongoose.model('User', userSchema);