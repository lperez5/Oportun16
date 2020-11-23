const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const entry = new Schema({
  name: String,
  dateCreated: {type: String, default: Date.now()},
  lastUpdated: {type: String, default: Date.now()},
  category: String,
  treeData: Array
});

//Model
const entrymodel = mongoose.model('Entry', entry);

module.exports = entrymodel;