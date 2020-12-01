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

module.exports = router;