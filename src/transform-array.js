const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var arr1=arr.slice()
  var transf = ['--discard-prev', '--discard-next', '--double-prev', '--double-next',];
  let result =[];
  if(arr1[0]==transf[0]||arr1[0]==transf[2]) {
    arr1.shift();
  }
  if(arr1[arr1.length-1]==transf[1]||arr1[arr1.length-1]==transf[3]) {
    arr1.pop();
  }
  for (i=0; i<arr1.length; i++) {
    if ((arr1[i]==transf[1]&&arr1[i+2]==transf[2])||(arr1[i]==transf[1]&&arr1[i+2]==transf[0])){
      arr1.splice(i+2,1);
    }
    switch (arr1[i])  {
    case (transf[3]):
        if (Number.isInteger(arr1[i+1])){
            result.push(arr1[i+1]);
            break;
        } else{
            result.push(arr1[i+1]);
            break;
        }
        break;
    case (transf[2]):
        if (Number.isInteger(arr1[i-1])){
            result.push(arr1[i-1]);
            break;
        } else{
            result.push(arr1[i-1]);
            break;
        }
    case (transf[1]):
        i++;
        break;
    case (transf[0]):
        result.pop();
        break;
    default:
        result.push(arr1[i]);
    };
  };


    return result;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
