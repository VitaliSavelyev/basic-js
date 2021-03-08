const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let arr=[];
    if (matrix === undefined ||matrix.length == 0){
      return arr;
    }
    for (i=0;i<matrix.length;i++){
        for (k = 0; k < matrix[i].length; k++) {
          if(matrix[i][k]=='^^') {
            arr.push(matrix[i][k]);
          }
        }
    }
    return arr.length;
  throw new CustomError('Not implemented');
  }

