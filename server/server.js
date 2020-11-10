<<<<<<< HEAD
<<<<<<< HEAD
const algo = require('./algo');
const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
require('dotenv').config();

//get from frontend inputs
var PAD = [0, 0];                                    //Probability of Action Deterrence
var CFA = [0, 0];                                    //Contact Frequency Avoidance
var RSV = [0, 0];                                    //Resistance Strength Vulnerability
var PLMR = [0, 0];                                    //Primary Loss Magnitude Responsive
var SLMR = [0, 0];                                   //Secondary Loss Magnitude Responsive
var TC = 0;                                          //Threat Capability
var SLP = 0;                                         //Secondary Loss Probability

var PADout = 1;
var CFAout = 2;
//var TEFout = M_TEF[CFAout,PADout];                 //maybe reverse order of inputs in array?
var RSVout = 3;                                      //this needs to be changed to the output of RSV matrix
//var VULNout = M_VULN[TC, RSVout];
//var LEFout = algo.M_PLEF[TEFout, VULNout];
var PLMRout = 4;                                     //this needs to be changed to the output of PLMR matrix
//var primaryRiskout = M_primaryRisk[PLMRout,LEFout];


=======
const algo = require('./algo');
const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
const { M_controlsRS, M_VULN } = require('./algo');
require('dotenv').config();

>>>>>>> caab3480b81326d5a4adb77a01c22c9c16d45179

async function main(){
  const {DBURL, PORT} = process.env;
  const client = new MongoClient(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

<<<<<<< HEAD
  try{
    await client.connect();

    await Database.options(client);

  }
  catch(e){
    console.error(e);
  }
  finally{
    await client.close();
  }
}

main().catch(console.error);

=======
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
>>>>>>> 6e0e1bfbd0768b423b2ff3641c7a3ae3bc5c83cb
=======
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
>>>>>>> caab3480b81326d5a4adb77a01c22c9c16d45179
