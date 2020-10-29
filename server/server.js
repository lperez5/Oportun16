const algo = require('./algo');
const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
require('dotenv').config();

//inputs from frontend
const PAD = [3, 2];                                    //Probability of Action Deterrence
const CFA = [0, 0];                                    //Contact Frequency Avoidance
const RS = [0, 0];                                     //Resistance Strength
const PLMR = [0, 0];                                   //Primary Loss Magnitude Responsive
const SLMR = [0, 0];                                   //Secondary Loss Magnitude Responsive
let TC = 0;                                          //Threat Capability
let SLP = 0;                                         //Secondary Loss Probability

let PADResidual = algo.M_controls[PAD[0]][PAD[1]];
let CFAResidual = algo.M_controls[CFA[0]][CFA[1]];
console.log("CFA Residual = " + CFAResidual);
//var TEFout = M_TEF[CFAout,PADout];
let RSout = 3;                                      //this needs to be changed to the output of RSV matrix
//var VULNout = M_VULN[TC, RSVout];
//var LEFout = algo.M_PLEF[TEFout, VULNout];
let PLMRout = 4;                                     //this needs to be changed to the output of PLMR matrix
//var primaryRiskout = M_primaryRisk[PLMRout,LEFout];



async function main(){
  const {DBURL, PORT} = process.env;
  const client = new MongoClient(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

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

