const algo = require('./algo');
const Database = require('./Database');
const {MongoClient, DBRef} = require('mongodb');
const { M_controlsRS, M_VULN } = require('./algo');
require('dotenv').config();

//inputs from frontend, subtract 1 for 0-indexing
const PAD = [2, 2];                                    //Probability of Action Deterrence
const CFA = [4, 4];                                    //Contact Frequency Avoidance
const RS = [1, 3];                                     //Resistance Strength
const PLMR = [0, 0];                                   //Primary Loss Magnitude Responsive
const SLMR = [3, 3];                                   //Secondary Loss Magnitude Responsive
let TC = 3;                                            //Threat Capability
let SLP = 2;                                           //Secondary Loss Probability
let RSInherent = RS[0];
let PADInherent = PAD[0];
let CFAInherent = CFA[0];
let PLMRInherent = PLMR[0];
let SLMRInherent = SLMR[0];
//calculate residuals
console.log("----------------------------");
console.log("calculating residuals...");
let PADResidual = algo.M_controls[PAD[0]][PAD[1]];
let CFAResidual = algo.M_controls[CFA[0]][CFA[1]];
let RSResidual = algo.M_controlsRS[RS[0]][RS[1]];
let PLMRResidual = algo.M_controls[PLMR[0]][PLMR[1]];
let SLMRResidual = algo.M_controls[SLMR[0]][SLMR[1]];
console.log("PAD Residual: " + PADResidual);
console.log("CFA Residual: " + CFAResidual);
console.log("RS Residual: " + RSResidual);
console.log("PLMR Residual: " + PLMRResidual);
console.log("SLMR Residual: " + SLMRResidual);
//calculate tree values
console.log("----------------------------");
console.log("calculating tree values...");
let TEFInherent = algo.M_TEF[CFAInherent][PADInherent];
let TEFResidual = algo.M_TEF[CFAResidual][PADResidual];
console.log("TEF Inherent: " + TEFInherent);
console.log("TEF Residual: " + TEFResidual);
let VULNInherent = algo.M_VULN[TC][RSInherent];
let VULNResidual = algo.M_VULN[TC][RSResidual];
console.log("Vulnerability Inherent: " + VULNInherent);
console.log("Vulnerability Residual: " + VULNResidual);
let PLEFInherent = algo.M_PLEF[TEFInherent][VULNInherent];
let PLEFResidual = algo.M_PLEF[TEFResidual][VULNResidual];
console.log("PLEF Inherent: " + PLEFInherent);
console.log("PLEF Residual: " + PLEFResidual);
let SLEFInherent = algo.M_SLEF[PLEFInherent][SLP];
let SLEFResidual = algo.M_SLEF[PLEFResidual][SLP];
console.log("Secondary LEF Inherent: " + SLEFInherent);
console.log("Secondary LEF Residual: " + SLEFResidual);
let PRInherent = algo.M_primaryRisk[PLMRInherent][PLEFInherent];
let PRResidual = algo.M_primaryRisk[PLMRResidual][PLEFResidual];
console.log("Primary Risk Inherent: " + PRInherent);
console.log("Primary Risk Residual: " + PRResidual);
let SRInherent = algo.M_secondaryRisk[SLMRInherent][SLEFInherent];
let SRResidual = algo.M_secondaryRisk[SLMRResidual][SLEFResidual];
console.log("Secondary Risk Inherent: " + SRInherent);
console.log("Secondary Risk Residual: " + SRResidual);
let ORInherent = algo.M_overallRisk[SRInherent][PRInherent];
let ORResidual = algo.M_overallRisk[SRResidual][PRResidual];
console.log("Overall Risk Inherent: " + ORInherent);
console.log("Overall Risk Residual: " + ORResidual);


async function main(){
  
  //const {DBURL, PORT} = process.env;
  const DBURL = process.env.DBURL;
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
  //testing to make sure node_modules does not push
}

main().catch(console.error);