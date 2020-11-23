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
        console.log('Data: ', data);
        res.json(data);
      })
      .catch((error)=> {
        console.log('error');
      });
});   

router.post('/save', (req, res) => {
  console.log('name:', req.body);
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

module.exports = router;