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

    //subtracted 1 from front end values for 0-indexing into matricies
    this.PADInherent = 0;                                               //Probability of Action Deterrence
    this.PADControls = 0;
    this.PADResidual = 0;
    this.CFAInherent = 0;                                               //Contact Frequency Avoidance
    this.CFAControls = 0;
    this.CFAResidual = 0;
    this.RSInherent = 0;                                                //Resistance Strength
    this.RSControls = 0;
    this.RSResidual = 0;
    this.PLMRInherent = 0;                                              //Primary Loss Magnitude Responsive
    this.PLMRControls = 0;
    this.PLMRResidual = 0;
    this.SLMRInherent = 0;                                              //Secondary Loss Magnitude Responsive
    this.SLMRControls = 0;
    this.SLMRResidual = 0;
    this.TC = 0;                                                        //Threat Capability
    this.SLP = 0;                                                       //Secondary Loss Probability
    this.TEFInherent = 0;                                               //Threat Event Frequency
    this.TEFResidual = 0;
    this.VULNInherent = 0;                                              //Vulnerability
    this.VULNResidual = 0;
    this.PLEFInherent = 0;                                              //Primary Loss Event Frequency
    this.PLEFResidual = 0;
    this.SLEFInherent = 0;                                              //Secondary Loss Event Frequency
    this.SLEFResidual = 0;
    this.PRInherent = 0;                                                //Primary Risk
    this.PRResidual = 0;
    this.SRInherent = 0;                                                //Secondary Risk
    this.SRResidual = 0;
    this.ORInherent = 0;                                                 //Overall Risk
    this.ORResidual = 0;
  }

  calculateTree(){
    console.log("========new tree calculation============");
    //calculate residuals
    console.log("----------------------------");
    console.log("calculating residuals...");
    this.PADResidual = this.M_controls[this.PADInherent][this.PADControls];
    this.CFAResidual = this.M_controls[this.CFAInherent][this.CFAControls];
    this.RSResidual = this.M_controlsRS[this.RSInherent][this.RSControls];
    this.PLMRResidual = this.M_controls[this.PLMRInherent][this.PLMRControls];
    this.SLMRResidual = this.M_controls[this.SLMRInherent][this.SLMRControls];
    console.log("PAD Residual: " + this.PADResidual);
    console.log("CFA Residual: " + this.CFAResidual);
    console.log("RS Residual: " + this.RSResidual);
    console.log("PLMR Residual: " + this.PLMRResidual);
    console.log("SLMR Residual: " + this.SLMRResidual);
    //calculate tree values
    console.log("----------------------------");
    console.log("calculating tree values...");
    this.TEFInherent = this.M_TEF[this.CFAInherent][this.PADInherent];
    this.TEFResidual = this.M_TEF[this.CFAResidual][this.PADResidual];
    console.log("TEF Inherent: " + this.TEFInherent);
    console.log("TEF Residual: " + this.TEFResidual);
    this.VULNInherent = this.M_VULN[this.TC][this.RSInherent];
    this.VULNResidual = this.M_VULN[this.TC][this.RSResidual];
    console.log("Vulnerability Inherent: " + this.VULNInherent);
    console.log("Vulnerability Residual: " + this.VULNResidual);
    this.PLEFInherent = this.M_PLEF[this.TEFInherent][this.VULNInherent];
    this.PLEFResidual = this.M_PLEF[this.TEFResidual][this.VULNResidual];
    console.log("PLEF Inherent: " + this.PLEFInherent);
    console.log("PLEF Residual: " + this.PLEFResidual);
    this.SLEFInherent = this.M_SLEF[this.PLEFInherent][this.SLP];
    this.SLEFResidual = this.M_SLEF[this.PLEFResidual][this.SLP];
    console.log("Secondary LEF Inherent: " + this.SLEFInherent);
    console.log("Secondary LEF Residual: " + this.SLEFResidual);
    this.PRInherent = this.M_primaryRisk[this.PLMRInherent][this.PLEFInherent];
    this.PRResidual = this.M_primaryRisk[this.PLMRResidual][this.PLEFResidual];
    console.log("Primary Risk Inherent: " + this.PRInherent);
    console.log("Primary Risk Residual: " + this.PRResidual);
    this.SRInherent = this.M_secondaryRisk[this.SLMRInherent][this.SLEFInherent];
    this.SRResidual = this.M_secondaryRisk[this.SLMRResidual][this.SLEFResidual];
    console.log("Secondary Risk Inherent: " + this.SRInherent);
    console.log("Secondary Risk Residual: " + this.SRResidual);
    this.ORInherent = this.M_overallRisk[this.SRInherent][this.PRInherent];
    this.ORResidual = this.M_overallRisk[this.SRResidual][this.PRResidual];
    console.log("Overall Risk Inherent: " + this.ORInherent);
    console.log("Overall Risk Residual: " + this.ORResidual);
  }

  calculateTreeInherents(){
    this.TEFInherent = this.M_TEF[this.CFAInherent][this.PADInherent];
    console.log("TEF Inherent: " + this.TEFInherent);
    this.VULNInherent = this.M_VULN[this.TC][this.RSInherent];
    console.log("Vulnerability Inherent: " + this.VULNInherent);
    this.PLEFInherent = this.M_PLEF[this.TEFInherent][this.VULNInherent];
    console.log("PLEF Inherent: " + this.PLEFInherent);
    this.SLEFInherent = this.M_SLEF[this.PLEFInherent][this.SLP];
    console.log("Secondary LEF Inherent: " + this.SLEFInherent);
    this.PRInherent = this.M_primaryRisk[this.PLMRInherent][this.PLEFInherent];
    console.log("Primary Risk Inherent: " + this.PRInherent);
    this.SRInherent = this.M_secondaryRisk[this.SLMRInherent][this.SLEFInherent];
    console.log("Secondary Risk Inherent: " + this.SRInherent);
    this.ORInherent = this.M_overallRisk[this.SRInherent][this.PRInherent];
    console.log("Overall Risk Inherent: " + this.ORInherent);
  }
  calculateTreeResiduals(){
    this.PADResidual = this.M_controls[this.PADInherent][this.PADControls];
    this.CFAResidual = this.M_controls[this.CFAInherent][this.CFAControls];
    this.RSResidual = this.M_controlsRS[this.RSInherent][this.RSControls];
    this.PLMRResidual = this.M_controls[this.PLMRInherent][this.PLMRControls];
    this.SLMRResidual = this.M_controls[this.SLMRInherent][this.SLMRControls];
    console.log("PAD Residual: " + this.PADResidual);
    console.log("CFA Residual: " + this.CFAResidual);
    console.log("RS Residual: " + this.RSResidual);
    console.log("PLMR Residual: " + this.PLMRResidual);
    console.log("SLMR Residual: " + this.SLMRResidual);
    this.TEFResidual = this.M_TEF[this.CFAResidual][this.PADResidual];
    console.log("TEF Residual: " + this.TEFResidual);
    this.VULNResidual = this.M_VULN[this.TC][this.RSResidual];
    console.log("Vulnerability Residual: " + this.VULNResidual);
    this.PLEFResidual = this.M_PLEF[this.TEFResidual][this.VULNResidual];
    console.log("PLEF Residual: " + this.PLEFResidual);
    this.SLEFResidual = this.M_SLEF[this.PLEFResidual][this.SLP];
    console.log("Secondary LEF Residual: " + this.SLEFResidual);
    this.PRResidual = this.M_primaryRisk[this.PLMRResidual][this.PLEFResidual];
    console.log("Primary Risk Residual: " + this.PRResidual);
    this.SRResidual = this.M_secondaryRisk[this.SLMRResidual][this.SLEFResidual];
    console.log("Secondary Risk Residual: " + this.SRResidual);
    this.ORResidual = this.M_overallRisk[this.SRResidual][this.PRResidual];
    console.log("Overall Risk Residual: " + this.ORResidual);
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

  getTreeData(){
    return [this.ORInherent, this.ORResidual, this.PRInherent, this.PRResidual, this.SRInherent, this.SRResidual,
            this.PLEFInherent, this.PLEFResidual, this.SLEFInherent, this.SLEFResidual,
            this.TEFInherent, this.TEFResidual, this.VULNInherent, this.VULNResidual,
            this.CFAInherent, this.CFAControls, this.CFAResidual, this.TC, this.SLP,
            this.PADInherent, this.PADControls, this.PADResidual, this.RSInherent, this.RSControls, this.RSResidual,
            this.PLMRInherent, this.PLMRControls, this.PLMRResidual, this.SLMRInherent, this.SLMRControls, this.SLMRResidual
    ]
  }

  setPADInherent(x){
    this.PADInherent = x;
  }
  getPADInherent(){
    return this.PADInherent;
  }
  setPADControls(x){
    this.PADControls = x;
  }
  getPADControls(){
    return this.PADControls;
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

  //calculated values' getter functions
  getORInherent(){
    return this.ORInherent;
  }
  getORResidual(){
    return this.ORResidual;
  }
  getPRInherent(){
    return this.PRInherent;
  }
  getPRResidual(){
    return this.PRResidual;
  }
  getSRInherent(){
    return this.SRInherent;
  }
  getSRResidual(){
    return this.SRResidual;
  }
  getPLMRResidual(){
    return this.PLMRResidual;
  }
  getSLMRResidual(){
    return this.SLMRResidual;
  }
  getPLEFInherent(){
    return this.PLEFInherent;
  }
  getPLEFResidual(){
    return this.PLEFResidual;
  }
  getSLEFInherent(){
    return this.SLEFInherent;
  }
  getSLEFResidual(){
    return this.SLEFResidual;
  }
  getTEFInherent(){
    return this.TEFInherent;
  }
  getTEFResidual(){
    return this.TEFResidual;
  }
  getVULNInherent(){
    return this.VULNInherent;
  }
  getVULNResidual(){
    return this.VULNResidual;
  }
  getCFAResidual(){
    return this.CFAResidual;
  }
  getPADResidual(){
    return this.PADResidual;
  }
  getRSResidual(){
    return this.RSResidual;
  }
}
