const algo = require('./algo');
const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
const { M_controlsRS, M_VULN } = require('./algo');
require('dotenv').config();


async function main(){
  const {DBURL, PORT} = process.env;
  const client = new MongoClient(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

  algo.calculate();

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
}

main().catch(console.error);
