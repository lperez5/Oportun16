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

//[inherent, controls] = residual
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

module.exports = { M_PLEF,
                 M_VULN,
                 M_SLEF,
                 M_primaryRisk,
                 M_secondaryRisk,
                 M_overallRisk,
                 M_TEF,
                 M_controls,
                 M_controlsRS
};