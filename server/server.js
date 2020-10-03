const LEF = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 4, 4],
    [1, 2, 3, 3, 3],
    [1, 1, 2, 2, 2],
    [1, 1, 1, 1, 1]
  ];
const vuln = [
    [5, 5, 5, 4, 3],
    [5, 5, 4, 3, 2],
    [5, 4, 3, 2, 1],
    [4, 3, 2, 1, 1],
    [3, 2, 1, 1, 1]
  ];
const SLEF = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4],
    [1, 1, 1, 2, 3]
  ];
const primaryRisk = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4],
    [1, 1, 1, 2, 3]
  ];
const secondaryRisk = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4],
    [1, 1, 1, 2, 3]
  ];
const overallRisk = [
    [5, 5, 5, 5, 5],
    [4, 4, 4, 4, 5],
    [3, 3, 3, 4, 5],
    [2, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ];
//missing the Threat Event Frequency matrix, need from industry partner.

var PAD = [0, 0];           //Probability of Action Deterrence
var CFA = [0, 0];           //Contact Frequency Avoidance
var RSV = [0, 0];           //Resistance Strength Vulnerability
var SLMR = [0, 0];          //Secondary Loss Magnitude Responsive
var TC = 0;                 //Threat Capability
var SLP = 0;                //Secondary Loss Probability