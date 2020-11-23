// const Database = require('./Database');
// const {MongoClient, DBRef} = require('mongodb');
// require('dotenv').config();


// async function main(){
//   const {DBURL, PORT} = process.env;
//   const client = new MongoClient(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

//   try{
//     await client.connect();

//     return client;

//   }
//   catch(e){
//     console.error(e);
//   }

// }

// async function over(client){
//   await client.close();
// }

// module.exports.main = main;
// module.exports.over = over;


const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 8080;
const URL = 'mongodb+srv://opportun16:nZJxFmLrhK5sWuZ@cluster0.qtrsx.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(URL,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

app.use(morgan('tiny'));
app.use('/',routes);

app.listen(PORT, console.log(`Server is tarting at ${PORT}`));