const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const entry = new Schema({
  name: String,
  category: String,
  data: Array,
  dateCreated: {type: String, default: Date.now()},
  lastUpdated: {type: String, default: Date.now()},
  notes: String
});

//Model
const entrymodel = mongoose.model('Entry', entry);

module.exports = entrymodel;