const express = require('express');
const router = express.Router();
const entrymodel = require('../models/entry');

router.get('/api',(req, res) => {
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

module.exports = router;