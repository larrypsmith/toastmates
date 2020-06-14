const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: [itemSchema]
});

module.exports = menuSchema;