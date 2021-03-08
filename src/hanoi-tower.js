const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  numTransfers = 2**disksNumber - 1;
  timeTransfers = Math.floor(numTransfers * 3600 / turnsSpeed);
  let result = {turns: numTransfers, seconds:timeTransfers };
  return result;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
