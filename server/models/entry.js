const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const entry = new Schema({
  name: String,
  category: String,
  data: Array,
  notes: String,
  asset: String,function monthlyChange(arr, x){
  let thisMonthAvg = 0;
  let lastMonthAvg = 0;
  let thisMonth = new Date().getMonth();
  let thisYear = new Date().getFullYear();
  let counter1 = 0;
  let counter2 = 0;

  for(let i=0; i < arr.length; i++){
    if(getYear(arr[i].dateCreated) === thisYear && getThisMonth(arr[i].dateCreated) === thisMonth){
      counter1++;
      thisMonthAvg += arr[i].data[x];
    }
    if(getYear(arr[i].dateCreated) === thisYear && getThisMonth(arr[i].dateCreated) === (thisMonth-1)){
      counter2++;
      lastMonthAvg += arr[i].data[x];
    }
  }

  if(counter1 === 0){
    thisMonthAvg = 0;
  }
  else{
    thisMonthAvg = thisMonthAvg/counter1;
  }

  if(counter2 === 0){
    lastMonthAvg = 0;
  }
  else{
    lastMonthAvg = lastMonthAvg/counter2;
  }

  return (thisMonthAvg - lastMonthAvg);
}
  threat: String,
  loss: String,
  dateCreated: {type: String, default: new Date(Date.now())},
  lastUpdated: {type: String, default: new Date(Date.now())},
});

//Model
const entrymodel = mongoose.model('Entry', entry);

module.exports = entrymodel;