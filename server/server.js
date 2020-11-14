const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
require('dotenv').config();


async function main(){
  const {DBURL, PORT} = process.env;
  const client = new MongoClient(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

  //connect to DB (client.connect())

  // try{
  //   await client.connect();

  //   await Database.options(client);

  // }
  // catch(e){
  //   console.error(e);
  // }
  // finally{
  //   await client.close();
  // }

  //start httpserver
  //begin listening on port = PORT for get requests to serve client application and post requests to update DB

}

main().catch(console.error);

