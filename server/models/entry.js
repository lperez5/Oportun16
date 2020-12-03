<<<<<<< HEAD
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

=======
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
  dateCreated: {type: String, default: new Intl.DateTimeFormat('en-US').format(Date.now())},
  lastUpdated: {type: String, default: new Intl.DateTimeFormat('en-US').format(Date.now())},
});

//Model
const entrymodel = mongoose.model('Entry', entry);

>>>>>>> f44dff9ad040f878f7ae2fd570b235eb2b5e5141
module.exports = entrymodel;