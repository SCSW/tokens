// const SWToken = artifacts.require("./SWToken.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SWToken);
// };
// ====================================================
const SWToken = artifacts.require("./SWToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SWToken,1000000);
};
