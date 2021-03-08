const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)){
    return false
  }
  let firstLetters = [];
  for (let member of members) {
    if (typeof member === "string") {
      let UpperLetter = member.toUpperCase();
      if (member[0] === ' ') {
        let z = UpperLetter.split('');
        for (k = 0; k < z.length; k++) {
          if (z[k] != ' ') {
            firstLetters.push(z[k]);
            break;
          }
        }
      } else {
        firstLetters.push(UpperLetter.charAt(0))
      }
    }
  }
  return firstLetters.sort().join('').toUpperCase();
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
