const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const entry = new Schema({
  name: String,
  category: String,
  data: Array,
  notes: String,
  asset: String,
  threat: String,
  loss: String,
  dateCreated: {type: String, default: new Date(Date.now())},
  lastUpdated: {type: String, default: new Date(Date.now())},
});

//Model
const entrymodel = mongoose.model('Entry', entry);

module.exports = entrymodel;