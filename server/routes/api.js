const express = require('express');
const router = express.Router();
const entrymodel = require('../models/entry');

router.get('/',(req, res) => {
    const data = {
      username: 'jortega',
      age: 21
    };

    entrymodel.find({ })
      .then((data)=>{
        res.json(data);
      })
      .catch((error)=> {
        console.log('error');
      });
});

router.post('/save', (req, res) => {
  //console.log('name:', req.body);
  const data = req.body;

  const newentry = new entrymodel(data);

  newentry.save((error) => {
    if(error){
      res.status(500).json({msg: 'Internal server error'});
    }
    else{
      res.json({msg: 'Data received'});
    }
  });
});

router.delete('/delete', (req, res) => {
  var id = req.body._id;
  console.log(id)
  entrymodel.findOneAndRemove({_id: id}, function(err){
    if(err){
      console.log('Problem deleting data');
    }
    else{
      console.log('Data deleted');
    }
  });
});

router.put('/update', (req,res ) => {
  var id = req.body.IDtoUpdate;
  //console.log(id);
  entrymodel.updateOne({_id: id}, {$set: {name: req.body.name, category: req.body.category, notes: req.body.notes, asset: req.body.asset, threat: req.body.threat, loss: req.body.loss, data: req.body.data, lastUpdated: req.body.lastUpdated}}, function(err){
    if(err){
      console.log('Problem updating data');
    }
    else{
      console.log('Entry succesully updated');
    }
  })
});

module.exports = router;