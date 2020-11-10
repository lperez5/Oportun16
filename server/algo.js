//---------------------------------------------------------------
// verylow=0, low=1, medium=2, high=3, veryhigh=4
// flipped horizontally from derivation page for matrix indecies
// so that [verylow, verylow] corresponds to [0,0] , top left
//---------------------------------------------------------------

const M_PLEF = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 1, 2, 2, 2],
  [1, 2, 3, 3, 3],
  [2, 3, 4, 4, 4]
];
const M_VULN = [
  [2, 1, 0, 0, 0],
  [3, 2, 1, 0, 0],
  [4, 3, 2, 1, 0],
  [4, 4, 3, 2, 1],
  [4, 4, 4, 3, 2]
];
const M_SLEF = [
  [0, 0, 0, 1, 2],
  [0, 0, 1, 2, 3],
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 4],
  [2, 3, 4, 4, 4]
];
const M_primaryRisk = [
  [0, 0, 0, 1, 2],
  [0, 0, 1, 2, 3],
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 4],
  [2, 3, 4, 4, 4]
];
const M_secondaryRisk = [
  [0, 0, 0, 1, 2],
  [0, 0, 1, 2, 3],
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 4],
  [2, 3, 4, 4, 4]
];
const M_overallRisk = [
  [0, 1, 2, 3, 4],
  [1, 1, 2, 3, 4],
  [2, 2, 2, 3, 4],
  [3, 3, 3, 3, 4],
  [4, 4, 4, 4, 4]
];
const M_TEF = [
  [2, 1, 0, 0, 0],
  [3, 2, 1, 0, 0],
  [4, 3, 2, 1, 0],
  [4, 4, 3, 2, 1],
  [4, 4, 4, 3, 2]
];

//[inherent][controls] = residual
const M_controls = [             //used for CFA, PAD, PLMR and SLMR
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [2, 2, 1, 1, 0],
  [3, 3, 2, 1, 0],
  [4, 3, 2, 1, 0]
];
const M_controlsRS = [           //used for RS
  [0, 1, 2, 3, 4],
  [1, 1, 2, 3, 4],
  [2, 2, 2, 3, 4],
  [3, 3, 3, 3, 4],
  [4, 4, 4, 4, 4]
];

function calculate(){
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
  let PADResidual = M_controls[PAD[0]][PAD[1]];
  let CFAResidual = M_controls[CFA[0]][CFA[1]];
  let RSResidual = M_controlsRS[RS[0]][RS[1]];
  let PLMRResidual = M_controls[PLMR[0]][PLMR[1]];
  let SLMRResidual = M_controls[SLMR[0]][SLMR[1]];
  console.log("PAD Residual: " + PADResidual);
  console.log("CFA Residual: " + CFAResidual);
  console.log("RS Residual: " + RSResidual);
  console.log("PLMR Residual: " + PLMRResidual);
  console.log("SLMR Residual: " + SLMRResidual);
  //calculate tree values
  console.log("----------------------------");
  console.log("calculating tree values...");
  let TEFInherent = M_TEF[CFAInherent][PADInherent];
  let TEFResidual = M_TEF[CFAResidual][PADResidual];
  console.log("TEF Inherent: " + TEFInherent);
  console.log("TEF Residual: " + TEFResidual);
  let VULNInherent = M_VULN[TC][RSInherent];
  let VULNResidual = M_VULN[TC][RSResidual];
  console.log("Vulnerability Inherent: " + VULNInherent);
  console.log("Vulnerability Residual: " + VULNResidual);
  let PLEFInherent = M_PLEF[TEFInherent][VULNInherent];
  let PLEFResidual = M_PLEF[TEFResidual][VULNResidual];
  console.log("PLEF Inherent: " + PLEFInherent);
  console.log("PLEF Residual: " + PLEFResidual);
  let SLEFInherent = M_SLEF[PLEFInherent][SLP];
  let SLEFResidual = M_SLEF[PLEFResidual][SLP];
  console.log("Secondary LEF Inherent: " + SLEFInherent);
  console.log("Secondary LEF Residual: " + SLEFResidual);
  let PRInherent = M_primaryRisk[PLMRInherent][PLEFInherent];
  let PRResidual = M_primaryRisk[PLMRResidual][PLEFResidual];
  console.log("Primary Risk Inherent: " + PRInherent);
  console.log("Primary Risk Residual: " + PRResidual);
  let SRInherent = M_secondaryRisk[SLMRInherent][SLEFInherent];
  let SRResidual = M_secondaryRisk[SLMRResidual][SLEFResidual];
  console.log("Secondary Risk Inherent: " + SRInherent);
  console.log("Secondary Risk Residual: " + SRResidual);
  let ORInherent = M_overallRisk[SRInherent][PRInherent];
  let ORResidual = M_overallRisk[SRResidual][PRResidual];
  console.log("Overall Risk Inherent: " + ORInherent);
  console.log("Overall Risk Residual: " + ORResidual);
}


module.exports = { M_PLEF,
                   M_VULN,
                   M_SLEF,
                   M_primaryRisk,
                   M_secondaryRisk,
                   M_overallRisk,
                   M_TEF,
                   M_controls,
                   M_controlsRS,
                   calculate
};