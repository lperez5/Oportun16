const algo = require('./algo');
const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
require('dotenv').config();
//suhcdshbchdsbh
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



async function main(){
  const DBURL = process.env.DBURL;
  const client = new MongoClient(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

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

