//---------------------------------------------------------------
// verylow=0, low=1, medium=2, high=3, veryhigh=4
// flipped horizontally from derivation page for matrix indecies
// so that [verylow, verylow] corresponds to [0,0] , top left
//---------------------------------------------------------------

let instance = null;
export function getInstance(){
  if(!instance){
    instance = new ToolState();
  }
  return instance;
}

class ToolState{
  constructor(){
    this.M_PLEF = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 2, 2, 2],
      [1, 2, 3, 3, 3],
      [2, 3, 4, 4, 4]
    ];
    this.M_VULN = [
      [2, 1, 0, 0, 0],
      [3, 2, 1, 0, 0],
      [4, 3, 2, 1, 0],
      [4, 4, 3, 2, 1],
      [4, 4, 4, 3, 2]
    ];
    this.M_SLEF = [
      [0, 0, 0, 1, 2],
      [0, 0, 1, 2, 3],
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 4],
      [2, 3, 4, 4, 4]
    ];
    this.M_primaryRisk = [
      [0, 0, 0, 1, 2],
      [0, 0, 1, 2, 3],
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 4],
      [2, 3, 4, 4, 4]
    ];
    this.M_secondaryRisk = [
      [0, 0, 0, 1, 2],
      [0, 0, 1, 2, 3],
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 4],
      [2, 3, 4, 4, 4]
    ];
    this.M_overallRisk = [
      [0, 1, 2, 3, 4],
      [1, 1, 2, 3, 4],
      [2, 2, 2, 3, 4],
      [3, 3, 3, 3, 4],
      [4, 4, 4, 4, 4]
    ];
    this.M_TEF = [
      [0, 0, 0, 1, 2],
      [0, 0, 1, 2, 3],
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 4],
      [2, 3, 4, 4, 4]
    ];

    //[inherent][controls] = residual
    this.M_controls = [             //used for CFA, PAD, PLMR and SLMR
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [2, 2, 1, 1, 0],
      [3, 3, 2, 1, 0],
      [4, 3, 2, 1, 0]
    ];
    this.M_controlsRS = [           //used for RS
      [0, 1, 2, 3, 4],
      [1, 1, 2, 3, 4],
      [2, 2, 2, 3, 4],
      [3, 3, 3, 3, 4],
      [4, 4, 4, 4, 4]
    ];

    //inputs from frontend, subtracted 1 for 0-indexing into matricies
    this.PADInherent = 0;                                               //Probability of Action Deterrence
    this.PADControls = 0;
    this.CFAInherent = 0;                                               //Contact Frequency Avoidance
    this.CFAControls = 0;
    this.RSInherent = 0;                                                //Resistance Strength
    this.RSControls = 0;
    this.PLMRInherent = 0;                                              //Primary Loss Magnitude Responsive
    this.PLMRControls = 0;
    this.SLMRInherent = 0;                                              //Secondary Loss Magnitude Responsive
    this.SLMRControls = 0;
    this.TC = 0;                                                        //Threat Capability
    this.SLP = 0;                                                       //Secondary Loss Probability
  }

  calculateTree(){
    console.log("========new tree calculation============");
    //calculate residuals
    console.log("----------------------------");
    console.log("calculating residuals...");
    let PADResidual = this.M_controls[this.PADInherent][this.PADControls];
    let CFAResidual = this.M_controls[this.CFAInherent][this.CFAControls];
    let RSResidual = this.M_controlsRS[this.RSInherent][this.RSControls];
    let PLMRResidual = this.M_controls[this.PLMRInherent][this.PLMRControls];
    let SLMRResidual = this.M_controls[this.SLMRInherent][this.SLMRControls];
    console.log("PAD Residual: " + PADResidual);
    console.log("CFA Residual: " + CFAResidual);
    console.log("RS Residual: " + RSResidual);
    console.log("PLMR Residual: " + PLMRResidual);
    console.log("SLMR Residual: " + SLMRResidual);
    //calculate tree values
    console.log("----------------------------");
    console.log("calculating tree values...");
    let TEFInherent = this.M_TEF[this.CFAInherent][this.PADInherent];
    let TEFResidual = this.M_TEF[CFAResidual][PADResidual];
    console.log("TEF Inherent: " + TEFInherent);
    console.log("TEF Residual: " + TEFResidual);
    let VULNInherent = this.M_VULN[this.TC][this.RSInherent];
    let VULNResidual = this.M_VULN[this.TC][RSResidual];
    console.log("Vulnerability Inherent: " + VULNInherent);
    console.log("Vulnerability Residual: " + VULNResidual);
    let PLEFInherent = this.M_PLEF[TEFInherent][VULNInherent];
    let PLEFResidual = this.M_PLEF[TEFResidual][VULNResidual];
    console.log("PLEF Inherent: " + PLEFInherent);
    console.log("PLEF Residual: " + PLEFResidual);
    let SLEFInherent = this.M_SLEF[PLEFInherent][this.SLP];
    let SLEFResidual = this.M_SLEF[PLEFResidual][this.SLP];
    console.log("Secondary LEF Inherent: " + SLEFInherent);
    console.log("Secondary LEF Residual: " + SLEFResidual);
    let PRInherent = this.M_primaryRisk[this.PLMRInherent][PLEFInherent];
    let PRResidual = this.M_primaryRisk[PLMRResidual][PLEFResidual];
    console.log("Primary Risk Inherent: " + PRInherent);
    console.log("Primary Risk Residual: " + PRResidual);
    let SRInherent = this.M_secondaryRisk[this.SLMRInherent][SLEFInherent];
    let SRResidual = this.M_secondaryRisk[SLMRResidual][SLEFResidual];
    console.log("Secondary Risk Inherent: " + SRInherent);
    console.log("Secondary Risk Residual: " + SRResidual);
    let ORInherent = this.M_overallRisk[SRInherent][PRInherent];
    let ORResidual = this.M_overallRisk[SRResidual][PRResidual];
    console.log("Overall Risk Inherent: " + ORInherent);
    console.log("Overall Risk Residual: " + ORResidual);
  }

  calculateTreeInherents(){
    let TEFInherent = this.M_TEF[this.CFAInherent][this.PADInherent];
    console.log("TEF Inherent: " + TEFInherent);
    let VULNInherent = this.M_VULN[this.TC][this.RSInherent];
    console.log("Vulnerability Inherent: " + VULNInherent);
    let PLEFInherent = this.M_PLEF[TEFInherent][VULNInherent];
    console.log("PLEF Inherent: " + PLEFInherent);
    let SLEFInherent = this.M_SLEF[PLEFInherent][this.SLP];
    console.log("Secondary LEF Inherent: " + SLEFInherent);
    let PRInherent = this.M_primaryRisk[this.PLMRInherent][PLEFInherent];
    console.log("Primary Risk Inherent: " + PRInherent);
    let SRInherent = this.M_secondaryRisk[this.SLMRInherent][SLEFInherent];
    console.log("Secondary Risk Inherent: " + SRInherent);
    let ORInherent = this.M_overallRisk[SRInherent][PRInherent];
    console.log("Overall Risk Inherent: " + ORInherent);
  }
  calculateTreeResiduals(){
    let PADResidual = this.M_controls[this.PADInherent][this.PADControls];
    let CFAResidual = this.M_controls[this.CFAInherent][this.CFAControls];
    let RSResidual = this.M_controlsRS[this.RSInherent][this.RSControls];
    let PLMRResidual = this.M_controls[this.PLMRInherent][this.PLMRControls];
    let SLMRResidual = this.M_controls[this.SLMRInherent][this.SLMRControls];
    console.log("PAD Residual: " + PADResidual);
    console.log("CFA Residual: " + CFAResidual);
    console.log("RS Residual: " + RSResidual);
    console.log("PLMR Residual: " + PLMRResidual);
    console.log("SLMR Residual: " + SLMRResidual);
    let TEFResidual = this.M_TEF[CFAResidual][PADResidual];
    console.log("TEF Residual: " + TEFResidual);
    let VULNResidual = this.M_VULN[this.TC][RSResidual];
    console.log("Vulnerability Residual: " + VULNResidual);
    let PLEFResidual = this.M_PLEF[TEFResidual][VULNResidual];
    console.log("PLEF Residual: " + PLEFResidual);
    let SLEFResidual = this.M_SLEF[PLEFResidual][this.SLP];
    console.log("Secondary LEF Residual: " + SLEFResidual);
    let PRResidual = this.M_primaryRisk[PLMRResidual][PLEFResidual];
    console.log("Primary Risk Residual: " + PRResidual);
    let SRResidual = this.M_secondaryRisk[SLMRResidual][SLEFResidual];
    console.log("Secondary Risk Residual: " + SRResidual);
    let ORResidual = this.M_overallRisk[SRResidual][PRResidual];
    console.log("Overall Risk Residual: " + ORResidual);
  }

  getState(){
    return{
      PADResidual: this.PADResidual,
      CFAResidual: this.CFAResidual,
      RSResidual: this.RSResidual,
      PLMRResidual: this.PLMRResidual,
      SLMRResidual: this.SLMRResidual,
      TEFInherent: this.TEFInherent,
      TEFResidual: this.TEFResidual,
      VULNInherent: this.VULNInherent,
      VULNResidual: this.VULNResidual,
      PLEFInherent: this.PLEFInherent,
      PLEFResidual: this.PLEFResidual,
      SRInherent: this.SRInherent,
      SRResidual: this.SRResidual,
      ORInherent: this.ORInherent,
      ORResidual: this.ORResidual
    }
  }

  setPADInherent(x){
    this.PADInherent = x;
  }
  getPADInherent(){
    return this.PADInherent;
  }
  setPADControls(x){
    this.RSInherent = x;
  }
  getPADControls(){
    return this.PADC
  }

  setCFAInherent(x){
    this.CFAInherent = x;
  }
  getCFAInherent(){
    return this.CFAInherent;
  }
  setCFAControls(x){
    this.CFAControls = x;
  }
  getCFAControls(){
    return this.CFAControls;
  }

  setRSInherent(x){
    this.RSInherent = x;
  }
  getRSInherent(){
    return this.RSInherent;
  }
  setRSControls(x){
    this.RSControls = x;
  }
  getRSControls(){
    return this.RSControls;
  }

  setPLMRInherent(x){
    this.PLMRInherent = x;
  }
  getPLMRInherent(){
    return this.PLMRInherent;
  }
  setPLMRControls(x){
    this.PLMRControls = x;
  }
  getPLMRControls(){
    return this.PLMRControls;
  }

  setSLMRInherent(x){
    this.SLMRInherent = x;
  }
  getSLMRInherent(){
    return this.SLMRInherent;
  }
  setSLMRControls(x){
    this.SLMRControls = x;
  }
  getSLMRControls(){
    return this.SLMRControls;
  }

  setTC(x){
    this.TC = x;
  }
  getTC(){
    return this.TC;
  }

  setSLP(x){
    this.SLP = x;
  }
  getSLP(){
    return this.SLP;
  }
}
