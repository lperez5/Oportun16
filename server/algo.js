//verylow=0, low=1, medium=2, high=3, veryhigh=4
//flipped horizontally from excel tool's derivation page for matrix indecies
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
//missing the Threat Event Frequency matrix, need from industry partner.

module.exports = { M_PLEF };
module.exports = { M_VULN };
module.exports = { M_SLEF };
module.exports = { M_primaryRisk };
module.exports = { M_secondaryRisk };
module.exports = { M_overallRisk };