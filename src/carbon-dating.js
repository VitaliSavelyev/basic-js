const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity!='string'||arguments.length==0||!isFinite(parseFloat(sampleActivity))){
    return false;
  }
  if (sampleActivity>=15||sampleActivity<=0){
    return false;
  }
  const k = 0.693/5730
  let t=(Math.log(MODERN_ACTIVITY)-Math.log(sampleActivity))/k
  return Math.ceil(t);
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
