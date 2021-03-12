const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level=1;
    let depth=1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        level = 1 + this.calculateDepth(item);
      }
      if (level > depth) {
        depth = level;
      }
    }
      return depth;
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};