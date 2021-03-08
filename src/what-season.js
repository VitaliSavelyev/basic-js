const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = '';
  if (arguments.length==0){
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }
  let nameseason=['winter', 'spring', 'summer', 'autumn',]
  let month = date.getMonth();
  switch (month) {
    case 0:
      season = nameseason[0];
      break;
    case 1:
      season = nameseason[0];
      break;
    case 2:
      season = nameseason[1];
      break;
    case 3:
      season = nameseason[1];
      break;
    case 4:
      season = nameseason[1];
      break;
    case 5:
      season = nameseason[2];
      break;
    case 6:
      season = nameseason[2];
      break;
    case 7:
      season = nameseason[2];
      break;
    case 8:
      season = nameseason[3];
      break;
    case 9:
      season = nameseason[3];
      break;
    case 10:
      season = nameseason[3];
      break;
    case 11:
      season = nameseason[0];
      break;
  }
  return season
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
